import './button.scss';

const defaultProps = {
  buttonLabel: 'Button',
  onClick: () => console.log('default behavior'),
};

function Button(porps = defaultProps) {
  const render = () => {
    const body = document.querySelector('body');
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML = porps.buttonLabel;
    btn.addEventListener('click', porps.onClick);
    body.appendChild(btn);
  };

  return render();
}

export default Button;