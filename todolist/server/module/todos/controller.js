const TodoModel = require('./model')

const list = async (req,res) => {
    try{
        const todos =  await TodoModel.find({})
        res.send(todos)
    }
    catch (error) {
        console.log(error)
        res.send(error)
    }
}

const save = async (req,res) => {
    try{
        const item = {text: req.body.text}
        const todo = new TodoModel(item)
        await todo.save()
        res.send(todo)
    } 
    catch (error) {
        console.log(error)
        res.send(error)
    }
}

const update = async (req,res) => {
    try{
        const item = {text: req.body.text}
        const todo = new TodoModel(item)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const remove = async (req,res) => {
    try{
        const item = {text: req.body.text}
        const todo = new TodoModel(item)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = {list,save,update,remove}