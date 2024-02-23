//importo solo el enrutador desde express
import { Router } from 'express';
import { home, login, registro, insertUsers, showUsers} from '../controllers/controllers.js';
import { pool } from '../db.js';
//inicio el enrutador y lo almaceo en una constante
const router = Router();

//Crear rutas
router.get('/', home);
router.get('/login', login);
router.get('/registro', registro);

router.get('/showUsers',showUsers);

router.post('/insertUsers', insertUsers)

export default router; 