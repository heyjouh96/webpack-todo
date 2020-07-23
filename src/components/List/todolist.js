
class TodoList {
  todoList = ['wake up', 'breakfast'];

  render() {
    console.log('list');
    this.todoList.map(t => console.log(t));
  }
};

export default TodoList;