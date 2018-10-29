import {HttpHeaders} from '@angular/common/http';

export const options = <object>{
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
  observe: 'response',
  withCredentials: true
};
