import {config} from './config';
import {app} from './server/app';

app.listen(config.port, ()=>{
  console.log(`Server has started on ${config.port} port`);
});