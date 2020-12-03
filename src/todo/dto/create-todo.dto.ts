/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateToDoDto {
    @IsNotEmpty({
        "message": "Name should not be empty"
    })
    @MinLength(3,{
        "message": "The size of your $property is short, the minimal size of your $property should be $constraint1"
    })
    @MaxLength(10,{
        "message": "The size of your $property is long, the maximal size of your $property should be $constraint1"
    })
    name:string;


    @MinLength(10,{
        "message": "The size of your $property is short, the minimal size of your $property should be $constraint1"
    })
    @IsNotEmpty({
        "message":"Description should not be empty"
    })
    description:string;

}