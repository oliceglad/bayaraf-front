import { FilterButtons } from "../components/FilterButtons/FilterButtons";
import { ItemCard } from "../components/ItemCard/ItemCard";
import { Button } from "../components/UI/Button/Button";
import { items } from "../data/data";

import React, { useState } from "react";

export const ItemsPage = ({ theme }) => {
  const [visibleItems, setVisibleItems] = useState(5);

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  return (
    <section className="items">
      <FilterButtons theme={theme.theme} />
      <div className="items__right">
        <ul className="items__list">
          {items.slice(0, visibleItems).map((el, key) => (
            <li key={key}>
              <ItemCard title={el.title} price={el.price} theme={theme.theme} />
            </li>
          ))}
        </ul>
        <div>
          <div style={{textAlign: "center"}}>
            {visibleItems < items.length && (
              <Button
                onClickHandler={showMoreItems}
                style={{ display: "inline-block", marginTop: "15px" }}
              >
                Показать еще
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
