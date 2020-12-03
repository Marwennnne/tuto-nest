/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CreateToDoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ToDoService } from './to-do.service';

@Controller('todo')
export class ToDoController {
    
    constructor(private todoService: ToDoService){}

    @Get('')
    getTodos(){
        return this.todoService.getTodos();
    }

    @Post('')
    addTodo(
        @Body() todo: CreateToDoDto,
    ){
        return this.todoService.addTodo(todo);
    }

    @Delete(':id')
    deleteTodo(
        @Param('id') id: string,
    ){
        return this.todoService.deleteTodo(id);
    }

    @Put(':id')
    updateTodo(
        @Param('id') id: string,
        @Body() todo: UpdateTodoDto
    ){
        return this.todoService.putTodo(id,todo);
    }
}