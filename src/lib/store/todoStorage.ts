// Import necessary packages and modules
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
import { writable, Writable } from 'svelte/store'; // For creating a Svelte store
import { browser } from '$app/environment'; // For checking if running in a browser environment

// Define interface for our todo items
interface Todo {
  id: string;
  text: string;
  complete: boolean;
}

// Get initial data for the todo list
const data: Todo[] = browser ? JSON.parse(window.localStorage.getItem('st-todo-list')) ?? [] : [];

// Create a Svelte store for the todo list
export const todos: Writable<Todo[]> = writable<Todo[]>(data);

// Subscribe to changes in the todo list store and store the updated value in local storage if running in a browser environment
todos.subscribe((value: Todo[]) => {
  if (browser) {
    localStorage.setItem('st-almacenar-list', JSON.stringify(value));
  } 
});

// Function to add a new todo item to the list
export const addTodo = () => {
  todos.update((currentTodos: Todo[]) => {
    return [...currentTodos, { id: uuidv4(), text: '', complete: false}]
  });
};

// Function to delete a todo item from the list
export const deleteTodo = (id: string) => {
  todos.update((currentTodos: Todo[]) => {
    return currentTodos.filter((todo: Todo) => todo.id !== id)
  });
};

// Function to toggle the complete status of a todo item in the list
export const toggleComplete = (id: string) => {
  todos.update((currentTodos: Todo[]) => {
    return currentTodos.map((todo: Todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
  });
};

// Function to edit the text of a todo item in the list
export const editTodo = (id: string, text: string) => {
  todos.update((currentTodos: Todo[]) => {
    return currentTodos.map((todo: Todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });
  });
};