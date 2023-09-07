import { Todo } from './model/todo';

export class Mockdb {
  static todos: Todo[] = [];

  static addTodo(todo: Todo): Todo {
    Mockdb.todos.push(todo);
    return todo;
  }

  static getTodos(): Todo[] {
    return Mockdb.todos;
  }

  static getTodo(id: number): Todo | null {
    const foundTodo = Mockdb.todos.find((todo) => todo.id === id);
    return foundTodo || null;
  }

  static updateTodo(id: number, updatedTodo: Todo): Todo | null {
    const index = Mockdb.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      Mockdb.todos[index] = updatedTodo;
      return updatedTodo;
    }
    return null;
  }

  static deleteTodo(id: number): Todo | null {
    const index = Mockdb.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      return Mockdb.todos.splice(index, 1)[0];
    }
    return null;
  }
}
