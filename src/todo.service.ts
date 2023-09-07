import { Injectable } from '@nestjs/common';
import { Mockdb } from './mockdb';
import { Todo } from './model/todo';

@Injectable()
export class TodoService {
  addTodo(todo: Todo): Todo {
    return Mockdb.addTodo(todo);
  }

  getTodos(): Todo[] {
    return Mockdb.getTodos();
  }

  getTodoById(id: number): Todo {
    return Mockdb.getTodo(id);
  }

  updateTodoById(id: number, todo: Todo): Todo {
    return Mockdb.updateTodo(id, todo);
  }

  deleteTodoById(id: number): Todo {
    return Mockdb.deleteTodo(id);
  }
}
