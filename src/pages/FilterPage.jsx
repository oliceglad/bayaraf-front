import { NavigateButton } from "../components/Navigate/NavigateButton";
import { Button } from "../components/UI/Button/Button";
import { UltimateFilter } from "../components/UltimateFilter/UltimateFilter";

export const FilterPage = ({ theme }) => {
  return (
    <section className="filter">
      <div className="filter__left">
        <NavigateButton theme={theme.theme} />
        <Button
          style={{ marginRight: 0, maxWidth: "350px", marginTop: "15px" }}
        >
          Применить фильтры
        </Button>
        <Button
          style={{
            marginRight: 0,
            maxWidth: "350px",
            marginTop: "15px",
            backgroundColor: theme.theme === "light" ? "white" : "#2B2F38",
            color: theme.theme === "light" ? "black" : "",
          }}
        >
          Сбросить фильтры
        </Button>
      </div>
      <div className="filter__right">
        <UltimateFilter theme={theme.theme}/>
      </div>
    </section>
  );
};
