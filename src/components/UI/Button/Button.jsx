import s from './Button.module.scss'

export const Button = ({onClickHandler,children, style={}, className=''}) => {
  return (
    <a href="#" className={`${s.Button} ${className}`} style={{...style}} onClick={() => onClickHandler()}>
      {children}
    </a>
  );
};
