import {Injectable} from "@angular/core";
import {ValidationErrors, AbstractControl} from "@angular/forms";
import {Observable} from "rxjs/index";
import {delay,debounceTime} from "rxjs/internal/operators";

@Injectable()
export class NameAsyncValidatorService{
  constructor(){}

  public nameValidator(control: AbstractControl): Observable<ValidationErrors | null>{
    return new Observable(obs=>{
      console.log(1);
      const name = control.value.trim().split(' ').filter(v=>v);

      if(name.length > 2) {
        obs.next({name: 'Must be 2 words'});
      }
      for(let value of name){
        if(value[0].toUpperCase() !== value[0]){
          obs.next({name: 'Must be Upper case'});
        }
      }
      for(let i = 0; i < name.length; i++) {
        for (let value of name[i]) {
          const symbol = value.charCodeAt(0);
          if (symbol < 65 || symbol > 122) {
            obs.next({name: 'Only latin letters'});
          }
        }
      }
      obs.complete();
    })
      .pipe(
        delay(3000)
      );
  }
}

