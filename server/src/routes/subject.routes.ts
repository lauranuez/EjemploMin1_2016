import {Router} from 'express';

import {createSubject, getSubject, getSubjects, deleteSubject} from '../controllers/subject.controllers';

const router = Router();


router.get('/', getSubjects);
router.post('/', createSubject);
router.get('/:id', getSubject);
router.delete('/:id', deleteSubject);

export default router;