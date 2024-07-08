import { FilterButtons } from "../components/FilterButtons/FilterButtons";
import { ItemCard } from "../components/ItemCard/ItemCard";
import { items } from "../data/data";

export const ItemsPage = ({theme}) => {
  return (
    <section className="items">
      <FilterButtons theme={theme.theme}/>
      <ul className="items__list">
        {items.map((el, key) => (
          <li key={key}>
            <ItemCard title={el.title} price={el.price} theme={theme.theme}/>
          </li>
        ))}
      </ul>
    </section>
  );
};
