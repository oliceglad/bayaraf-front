import s from "./Title.module.scss";

export const Title = ({theme, children }) => {
  return (
    <div className={`${s.title} ${theme}`}>
      <h2 href="#" className={s.title__link}>
        {children}
      </h2>
    </div>
  );
};
