import { Request,Response } from 'express';
import mongoose from 'mongoose';
import Student from '../models/student';

export async function getStudents(req: Request, res:Response): Promise<Response> { 
    try {
        const student = await Student.find();  
        return res.status(200).json(student);
        
    } catch (error:any) {                                                  

        return res.status(404).json({message: error.message});
    }
};

export async function getStudent(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No post with id: ${id}`);
    }
    else{
        const student = await Student.findById(id);
        return res.status(200).json(student);
    }    
};

export async function createStudent(req: Request, res:Response): Promise<Response> { 
    const {name, email, phones} = req.body;

    const newStudent = {
        name: name,
        email: email,
        phones: phones,
    };

    const student = new Student(newStudent);
    try{
        await student.save();
        return res.status(200).json({
            message: 'Student successfully saved',
            student
        })
    } catch (error:any) {
    return res.status(409).json({ message: error.message });
    }
};

export async function deleteStudent(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No student with id: ${id}`);
    }
    else{
        const student = await Student.findByIdAndRemove(id);
        
        return res.json({
            message: 'Student Deleted',
            student
        });
    }
};

