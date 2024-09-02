import s from "./CatalogCard.module.scss";

export const CatalogCard = ({ name, img, theme }) => {
  return (
    <div className={`${s.catalogCard} ${theme}`}>
      <img src={img} alt="Товар" className={s.catalogCard__img} />
      <div className={s.catalogCard__text}>{name}</div>
    </div>
  );
};
