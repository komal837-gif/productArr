import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {  

  todosArr: Array<Itodo>= [
    {
      todoItem: "Js",
      todoId: "123"
    },
    {
      todoItem: "css",
      todoId: "124"
    },
    {
      todoItem: "Ts",
      todoId: "125"
    }
  ]

  @ViewChild('todoItem') todoItem !: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(){
    let todoObj: Itodo = {
      todoItem: this.todoItem.nativeElement.value,
      todoId: Date.now().toString()
    }
    this.todoItem.nativeElement.value = " "
    console.log(todoObj)

    this.todosArr.push(todoObj)
  }

  trackById(index: number, todo: Itodo){
    return todo.todoId
  }

  onRemoveTodo(id: string){
    console.log(id);

    let getIndex = this.todosArr.findIndex(t=> t.todoId === id)
      this.todosArr.splice(getIndex,1)
    
  }

}
