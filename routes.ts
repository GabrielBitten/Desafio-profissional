import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()

routes.post('/books', bookController.create)
routes.get('/findById/:id', bookController.findById)
routes.get('/findAll', bookController.findAll)
routes.put('/update/:id', bookController.update)
routes.delete('/deleteById/:id', bookController.deleteById)
routes.delete('/deleteAll',bookController.deleteAll)
export {
    routes
}