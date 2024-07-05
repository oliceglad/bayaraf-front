import s from './Button.module.scss'

export const Button = ({children, style={}}) => {
  return (
    <a href="#" className={s.Button} style={{...style}}>
      {children}
    </a>
  );
};
