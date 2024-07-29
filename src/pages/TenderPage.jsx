import { useState } from "react";
import { Accordion } from "../components/UI/Accordion/Accordion";
import { Button } from "../components/UI/Button/Button";

export const TenderPage = ({ theme }) => {
  const [openTender, setOpenTender] = useState({
    first: false,
  });

  return (
    <section className="tender">
      <h2 className="tender__title">
        <span
          style={
            theme.theme === "light" ? { color: "#2B2F38" } : { color: "white" }
          }
        >
          Список тендеров
        </span>

        <Button
          className="tender__title__button"
          style={{
            backgroundColor: theme.theme === "light" ? "white" : "#2B2F38",
          }}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 18L9.5 9.5M9.5 0.999999L9.5 9.5M9.5 9.5L1 9.5M9.5 9.5L18 9.5"
              stroke={theme.theme === "light" ? "#2B2F38" : "white"}
              stroke-width="1.75"
              stroke-linecap="round"
            />
          </svg>
        </Button>
      </h2>

      <ul>
        <li>
          <Accordion
            classNameHeader="tender__header"
            classNameContent="tender__content"
            theme={theme.theme}
            isOpened={openTender.first}
            isOpenedName="first"
            title={"Тендер 1"}
            children={<div>ауе</div>}
            toggle={setOpenTender}
          />
        </li>
      </ul>
    </section>
  );
};
