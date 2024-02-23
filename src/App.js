//importar los modulos
import express  from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import indexRoutes from '../src/rutas/index.js';
import ejs from 'ejs';


//iniciamos express
const app=express();
const port=3300;
app.use(express.json());
const  __dirname=dirname(fileURLToPath(import.meta.url));
console.log(__dirname);



//configurar motor de plantillas
app.set('view engine','ejs');
app.set('views', join(__dirname,'views'));

//configuramos el enrutador
app.use(indexRoutes);

//configuramos public como estatica
app.use(express.static(join(__dirname,'public')));

//inicamos el servidor
app.listen(process.env.PORT || port, () => {
  console.log("El servidor escucha por el puerto", port);});
