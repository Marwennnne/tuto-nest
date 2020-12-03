/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ToDo } from './models/todo.model';
import { CreateToDoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class ToDoService{
    private todos:ToDo[] = [];
    
    constructor(){
        const todo = new ToDo();
        todo.name = "Tuto",
        todo.description = "Tuto Description";
        this.todos.push(todo);
    }

    getTodos(): ToDo[]{
        return this.todos;
    }

    addTodo(todo: CreateToDoDto ): ToDo[]{
        const { name, description } = todo;
        const newTodo = new ToDo();
        newTodo.name = name;
        newTodo.description = description;
        this.todos.push(newTodo);

        return this.todos;
    } 

    deleteTodo(id:string) {
        this.todos = this.todos.filter( todo => todo.id != id);
    }

    putTodo(id:string, newTodo: UpdateTodoDto): ToDo {

        const { name, description, status } = newTodo;
        const _todo = this.todos.filter( todo => todo.id === id)[0];
        _todo.name = name ? name : _todo.name ;
        _todo.description = description ? description : _todo.description;
        _todo.status = status ? status : _todo.status;

        return _todo;
    }
        
   
}
