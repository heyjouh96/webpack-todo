import TodoList from './components/List/todolist.js';
import Button from './components/Button/button.js';
import testTemplate from './index.hbs';

let chores = ['wake up', 'breakfast'];

function addChore() {
  chores = [
    'sleep',
    ...chores
  ];
  console.log(chores);
  renderTodoList();
}

const renderButton = () => {
  return Button({
    buttonLabel: 'Hello World',
    onClick: addChore
  });
}

const renderTodoList = () => {
  return TodoList({
    itemList: chores,
  });
}

renderButton();
renderTodoList();

document.querySelector('body').innerHTML = testTemplate({
  chores: [
    { name: 'Wake up' },
    { name: 'Breakfast' },
    { name: 'Run' },
  ]
});

