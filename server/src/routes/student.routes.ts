import {Router} from 'express';

import {createStudent, getStudent, getStudents, deleteStudent} from '../controllers/student.controllers';

const router = Router();


router.get('/', getStudents);
router.post('/', createStudent);
router.get('/:id', getStudent);
router.delete('/:id', deleteStudent);

export default router;