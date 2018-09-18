import {Request, Response, NextFunction} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const uuid = require('uuid/v4');
const path = require('path');
const fs = require('fs').promises;

class User{
  constructor(
    public readonly name: string,
    public readonly password: string,
    public readonly dateOfBirth: string,
    public readonly dateOfNextNotification: string,
    public readonly information: string,
    public town: string,
    public phone: string,
    public surname: string,
    public gender: string
  ){}
  public readonly id: string = uuid();
  public readonly dateOfFirstLogin: string = new Date().toISOString();
}
class UserContainer{
  constructor(
    private users: User[]
  ){}
  public addUser(user: User){
    const newUser = new User(
      user.name,
      user.password,
      user.dateOfBirth,
      user.dateOfNextNotification,
      user.information,
      user.town,
      user.phone,
      user.surname,
      user.gender
    );
    this.users.push(newUser);

    return new Promise((resolve, reject)=>{
      this.saveUsers()
        .then(()=>resolve(newUser))
        .catch(err=>reject(err))
    });
  }
  public getUsers(): User[]{
    return this.users;
  }
  public getUserById(id: string): User | undefined{
    return this.users.find(user=>user.id === id);
  }
  public deleteUser(id: string){
    this.users = this.users.filter(user=>user.id !== id);
    return this.saveUsers()
  }
  public updateUser(updateUser: User, id: string){
    const user = this.getUserById(id);

    if(!user)
      return new Promise(resolve=>resolve());

    const {
      town = user.town,
      phone = user.phone,
      surname = user.surname,
      gender = user.gender
    } = updateUser;

    user.town = town;
    user.phone = phone;
    user.surname = surname;
    user.gender = gender;

    return this.saveUsers();
  }
  private saveUsers(): Promise<Error>{
    return fs.writeFile(path.join(__dirname, '../users.json'), JSON.stringify(this.users))
  }
}

const app = express();
const port = process.env.PORT || 3030;
const container = new UserContainer(require(path.join('../', 'users.json')));


app.use(bodyParser.json());


app.route('/users')
  .get((req: Request, res: Response, next: NextFunction)=>{
    res.status(200).send(container.getUsers());
  });

app.route('/users/:id')
  .get((req: Request, res: Response, next: NextFunction)=>{
    res.status(200).send(container.getUserById(req.params.id));
  })
  .put((req: Request, res: Response, next: NextFunction)=>{
    container.updateUser(req.body, req.params.id)
      .then(()=>res.status(204).send())
      .catch(err=>next(err))
  })
  .delete((req: Request, res: Response, next: NextFunction)=>{
    container.deleteUser(req.params.id)
      .then(()=>res.status(204).send())
      .catch(err=>next(err))
  });

app.route('/users/add')
  .post((req: Request, res: Response, next: NextFunction)=>{
    container.addUser(req.body)
      .then(user=>res.status(201).send(user))
      .catch(err=>next(err))
  });


app.use((error: any, req: Request, res: Response, next: NextFunction)=>{
  if(error.status !== 404) console.log(error);
  res.sendStatus(error.status || 500);
});

app.listen(port, ()=>{
  console.log(`Server has started on ${port} port`);
});