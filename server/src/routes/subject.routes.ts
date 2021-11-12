import {Router} from 'express';

import {createSubject, getSubject, getSubjects, deleteSubject, updateSubject} from '../controllers/subject.controllers';

const router = Router();


router.get('/', getSubjects);
router.post('/', createSubject);
router.get('/:id', getSubject);
router.delete('/:id', deleteSubject);
router.put('/:id', updateSubject);

export default router;