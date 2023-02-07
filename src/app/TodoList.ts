import { ToDoItems } from "./TodoItem";

export class ToDoList {
    constructor(public user: string, private items: ToDoItems[] = []){
        
    }

    get item(): readonly ToDoItems[] {
        return this.items;
    }

    addItem(task: string){
        this.items.push(new ToDoItems(task));
    }
}