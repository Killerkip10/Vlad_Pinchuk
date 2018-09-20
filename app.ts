import {Request, Response, NextFunction} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const uuid = require('uuid/v4');
const path = require('path');
const morgan = require('morgan');
// const fs = require('fs').promises;

class User{
  constructor(
    public name: string,
    public password: string,
    public information: string,
    public dateOfBirth: string,
    public dateOfNextNotification: string
  ){
    this.dateOfBirth = new Date(this.dateOfBirth).toISOString();
    this.dateOfNextNotification = new Date(this.dateOfNextNotification).toISOString();
  }
  public readonly id: string = uuid();
  public readonly dateOfFirstLogin: string = new Date().toISOString();
}
class UserContainer{
  constructor(
    private users: User[]
  ){}
  public addUser(user: User): User{
    const newUser = new User(
      user.name,
      user.password,
      user.information,
      user.dateOfBirth,
      user.dateOfNextNotification
    );
    this.users.push(newUser);

    return newUser;
  }
  public getUsers(): User[]{
    return this.users;
  }
  public getUserById(id: string): User | undefined{
    return this.users.find(user=>user.id === id);
  }
  public deleteUser(id: string): void{
    this.users = this.users.filter(user=>user.id !== id);
  }
  public updateUser(updateUser: User, id: string): void{
    let user = this.getUserById(id);

    if(!user)
      return;

    const {
      name = user.name,
      password = user.password,
      dateOfBirth = user.dateOfBirth,
      dateOfNextNotification = user.dateOfNextNotification,
      information = user.information
    } = updateUser;

    user.name = name;
    user.password = password;
    user.dateOfBirth = new Date(dateOfBirth).toISOString();
    user.dateOfNextNotification = new Date(dateOfNextNotification).toISOString();
    user.information = information;
  }
  // private saveUsers(): Promise<Error>{
  //   return fs.writeFile(path.join(__dirname, '../users.json'), JSON.stringify(this.users))
  // }
}

const app = express();
const port = process.env.PORT || 3030;
const container = new UserContainer(require(path.join('../', 'users.json')));


app.use(bodyParser.json());
app.use(morgan('combined'));


app.route('/users')
  .get((req: Request, res: Response, next: NextFunction)=>{
    res.status(200).send(container.getUsers());
  });

app.route('/users/:id')
  .get((req: Request, res: Response, next: NextFunction)=>{
    res.status(200).send(container.getUserById(req.params.id));
  })
  .put((req: Request, res: Response, next: NextFunction)=>{
    container.updateUser(req.body, req.params.id);
    res.status(204).send();
  })
  .delete((req: Request, res: Response, next: NextFunction)=>{
    container.deleteUser(req.params.id);
    res.status(204).send();
  });

app.route('/users/add')
  .post((req: Request, res: Response, next: NextFunction)=>{
    res.status(201).send(container.addUser(req.body));
  });


app.use((error: any, req: Request, res: Response, next: NextFunction)=>{
  if(error.status !== 404) console.log(error);
  res.sendStatus(error.status || 500);
});

app.listen(port, ()=>{
  console.log(`Server has started on ${port} port`);
});