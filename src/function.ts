import { HelloProps } from "./types";

export function hello({firstName, lastName,age}:HelloProps) {
    console.log(`Hello, ${firstName}`);
    if(lastName){
        console.log(`your full name is ${firstName} ${lastName}`);
    }
    if(age){
        console.log(`you are ${age} years old`);
    }
}