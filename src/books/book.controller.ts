import { Request, Response } from 'express'
import  bookService  from './book.service'



class BookController {
    async create(req: Request, res: Response) {
        try {
            const book = await bookService.create(req.body);
            return res.json(book);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
           
            const book = await bookService.findById(req.params.id);

            if (!book) {
                return res.status(404).json();
            }
            return res.json(book);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    
    async findAll(req: Request, res: Response) {
    try{
        const book = await bookService.findAll();
        if (!book) {
            return res.status(404).json();
        }
        return res.json(book);
    } catch (error) {
        return res.status(500).json(error);
    }
    }
    
    async deleteById(req: Request, res: Response) {
        try {
           
            const book = await bookService.delete(req.params.id);

            if (!book) {
                return res.status(404).json();
            }
            return res.json(book);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    async deleteAll(req: Request, res: Response) {
        try {
           
            const book = await bookService.deleteAll();

            if (!book) {
                return res.status(404).json();
            }
            return res.json(book);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    async update(req: Request, res: Response) {
        try {
           
            const book = await bookService.update(req.params.id , req.body);

            if (!book) {
                return res.status(404).json();
            }
            return res.json(book);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    }


export default new BookController()