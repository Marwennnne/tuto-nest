/* eslint-disable prettier/prettier */
import { TodoStatusEnum } from '../enums/todo-status.enum';
import {IsIn, IsOptional, MinLength, MaxLength } from 'class-validator';

export class UpdateTodoDto{
    @IsOptional()
    @MinLength(3,{
        "message": "The size of your $property is short, the minimal size of your $property should be $constraint1"
    })
    @MaxLength(10,{
        "message": "The size of your $property is long, the maximal size of your $property should be $constraint1"
    })
    name:string;

    @IsOptional()
    @MinLength(10,{
        "message": "The size of your $property is short, the minimal size of your $property should be $constraint1"
    })
    description:string;

    @IsOptional()
    @IsIn([
        TodoStatusEnum.actif,
        TodoStatusEnum.waiting,
        TodoStatusEnum.done
    ],{
        "message":"You should choose one status"
    })
    status:TodoStatusEnum;

}