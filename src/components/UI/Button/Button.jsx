import s from './Button.module.scss'

export const Button = ({children}) => {
  return (
    <a href="#" className={s.Button}>
      {children}
    </a>
  );
};
