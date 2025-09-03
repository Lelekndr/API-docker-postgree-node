import express from 'express'
import { createUser, getAllUsers, deleteUser} from './controllers/userController';

const router = express.Router();


router.post('/cadastro', createUser)
router.get('/cadastro', getAllUsers)
router.delete('/cadastro', deleteUser)

export default router


