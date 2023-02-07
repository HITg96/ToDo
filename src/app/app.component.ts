import { Component } from '@angular/core';
import { ToDoItems } from './TodoItem';
import { ToDoList } from './TodoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new ToDoList("Michał", [
    new ToDoItems("Wyjdź na spacer", true), 
    new ToDoItems("Przeczytać Rozmyślania Marka Aureliusza", true ),
    new ToDoItems("Iść na siłownię")
  ]);

  get userName(): string{
    return this.list.user;
  }

  get itemCount(): number{
    return this.list.item.filter(item => !item.complited).length;
  }

}
