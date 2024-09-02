import { CatalogCard } from "../components/CatalogCard/CatalogCard";
import { CatalogData } from "../data/data";

export const CatalogPage = ({ theme }) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title">
        <span
          style={
            theme.theme === "light" ? { color: "#2B2F38" } : { color: "white" }
          }
        >
          Комплектующие для ПК
        </span>
      </h2>

      <ul className="catalog__list">
        {CatalogData.map((el, key) => (
          <CatalogCard
            key={key}
            img={el.img}
            name={el.name}
            theme={theme.theme}
          />
        ))}
      </ul>
    </section>
  );
};
