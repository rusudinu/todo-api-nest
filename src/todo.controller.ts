import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Todo } from './model/todo';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }

  @Post()
  addTodo(@Body() todo: Todo): Todo {
    return this.todoService.addTodo({
      ...todo,
      id: Math.floor(Math.random() * 1000),
      done: false,
    });
  }

  @Get(':id')
  getTodoById(@Param('id', new ParseIntPipe()) id: number): Todo {
    return this.todoService.getTodoById(id);
  }

  @Post(':id')
  updateTodoById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() todo: Todo,
  ): Todo {
    return this.todoService.updateTodoById(id, todo);
  }

  @Delete(':id')
  deleteTodoById(@Param('id', new ParseIntPipe()) id: number): Todo {
    return this.todoService.deleteTodoById(id);
  }
}
