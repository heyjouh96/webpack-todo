import '../../helpers/helpers';
import ButtonTemplate from './button.hbs';


const defaultProps = {
  buttonLabel: 'Button',
  onClick: () => console.log('default behavior'),
};

function ButtonUI(props = defaultProps) {
  return ButtonTemplate({
    buttonLabel: props.buttonLabel,
    onClick: props.onClick
  });
}

export default ButtonUI;