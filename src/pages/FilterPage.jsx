import { NavigateButton } from "../components/Navigate/NavigateButton";
import { Button } from "../components/UI/Button/Button";

export const FilterPage = () => {
  return (
    <main className="filter">
      <section>
        <div className="filter__left">
          <NavigateButton />
          <Button
            style={{ marginRight: 0, maxWidth: "350px", marginTop: "15px" }}
          >
            Применить фильтры
          </Button>
          <Button
            style={{ marginRight: 0, maxWidth: "350px", marginTop: "15px", backgroundColor: "#2B2F38"}}
          >
            Сбросить фильтры
          </Button>
        </div>
        <div className="filter__right"></div>
      </section>
    </main>
  );
};
