import bookModel from './book.schema'

export class BookService {

    async create(book: any) {
        const createdBook = bookModel.create(book)

        return createdBook
    }
    async findById(id: any) {
        return await bookModel.findById(id)
    }

    async findAll() {
        return await bookModel.find()
    }

    async update(id: any, book: any) {
        return await bookModel.findByIdAndUpdate(id, book)
    }

    async delete(id: any) {
        return await bookModel.findByIdAndDelete(id)
    }
   
    async deleteAll() {
        try {
            const result = await bookModel.deleteMany({});
            return result;
        } catch (error) {
            throw error; 
        }
    }
}
export default new BookService()
