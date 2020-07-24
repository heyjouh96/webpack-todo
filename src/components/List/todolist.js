
// class TodoList {
//   todoList = ['wake up', 'breakfast'];

//   render() {
//     console.log('list');
//     const body = document.querySelector('body');
//     this.todoList.map((t) => {
//       const p = document.createElement('p');
//       p.innerHTML = t;
//       body.appendChild(p);
//     });
//   }
// };

const defaultProps = {
  itemList: [],
}

const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.id = 'list-wrapper';
body.appendChild(wrapper);

function TodoList(props = defaultProps) {
  const render = () => {
    console.log('list');

    wrapper.innerHTML = '';
    props.itemList.map((t) => {
      const p = document.createElement('p');
      p.innerHTML = t;
      wrapper.appendChild(p);
    });
  };

  return render();
}

export default TodoList;