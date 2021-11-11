import { Request,Response } from 'express';
import mongoose from 'mongoose';
import Subject from '../models/subject';

export async function getSubjects(req: Request, res:Response): Promise<Response> { 
    try {
        const subject = await Subject.find();  
        return res.status(200).json(subject);
        
    } catch (error:any) {                                                  

        return res.status(404).json({message: error.message});
    }
};

export async function getSubject(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No post with id: ${id}`);
    }
    else{
        const subject = await Subject.findById(id);
        return res.status(200).json(subject);
    }    
};

export async function createSubject(req: Request, res:Response): Promise<Response> { 
    const {name, student} = req.body;

    const newSubject = {
        name: name,
        student: student,
    };

    const subject = new Subject(newSubject);
    try{
        await subject.save();
        return res.status(200).json({
            message: 'Subject successfully saved',
            subject
        })
    } catch (error:any) {
    return res.status(409).json({ message: error.message });
    }
};

export async function deleteSubject(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No subject with id: ${id}`);
    }
    else{
        const subject = await Subject.findByIdAndRemove(id);
        
        return res.json({
            message: 'Subject Deleted',
            subject
        });
    }
};

