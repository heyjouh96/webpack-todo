import TodoList from './components/List/todolist.js';
import Button from './components/Button/button.js';

const todoList = new TodoList();

function addChore() {
  console.log('hello');
}

console.log('hello');
todoList.render();
Button({
  buttonLabel: 'Hello World',
  onClick: addChore
});
