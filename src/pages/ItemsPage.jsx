import { FilterButtons } from "../components/FilterButtons/FilterButtons";
import { ItemCard } from "../components/ItemCard/ItemCard";
import { items } from "../data/data";

export const ItemsPage = () => {
  return (
    <section className="items">
      <FilterButtons />
      <ul className="items__list">
        {items.map((el, key) => (
          <li key={key}>
            <ItemCard title={el.title} price={el.price} />
          </li>
        ))}
      </ul>
    </section>
  );
};
