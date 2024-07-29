import { useState } from "react";
import { Accordion } from "../components/UI/Accordion/Accordion";
import { Button } from "../components/UI/Button/Button";
import { TenderForm } from "../components/TenderForm/TenderForm";

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

      <ul className="tender__list">
        <li className="tender__list__item">
          <Accordion
            classNameHeader="tender__header"
            classNameContent="tender__content"
            theme={theme.theme}
            isOpened={openTender.first}
            isOpenedName="first"
            title={"Тендер 1"}
            children={<TenderForm theme={theme.theme}/>}
          />

          <span className="tender__list__item__buttons">
            <Button
              style={{
                backgroundColor: openTender.first ? "#0075FF" : theme.theme === "light" ? "white" : "#2B2F38",
                color: theme.theme === "light" ? "#2B2F38" : "white",
              }}
              onClickHandler={() =>
                setOpenTender((prevState) => ({
                  ...prevState,
                  ["first"]: !prevState["first"],
                }))
              }
            >
              {openTender.first ? "Сохранить" : "Настроить"}
            </Button>
            <Button
              style={{
                backgroundColor: "red",
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_644_467)">
                  <path
                    d="M9.09375 9.09375C9.30095 9.09375 9.49966 9.17606 9.64618 9.32257C9.79269 9.46909 9.875 9.6678 9.875 9.875V19.25C9.875 19.4572 9.79269 19.6559 9.64618 19.8024C9.49966 19.9489 9.30095 20.0312 9.09375 20.0312C8.88655 20.0312 8.68784 19.9489 8.54132 19.8024C8.39481 19.6559 8.3125 19.4572 8.3125 19.25V9.875C8.3125 9.6678 8.39481 9.46909 8.54132 9.32257C8.68784 9.17606 8.88655 9.09375 9.09375 9.09375ZM13 9.09375C13.2072 9.09375 13.4059 9.17606 13.5524 9.32257C13.6989 9.46909 13.7812 9.6678 13.7812 9.875V19.25C13.7812 19.4572 13.6989 19.6559 13.5524 19.8024C13.4059 19.9489 13.2072 20.0312 13 20.0312C12.7928 20.0312 12.5941 19.9489 12.4476 19.8024C12.3011 19.6559 12.2188 19.4572 12.2188 19.25V9.875C12.2188 9.6678 12.3011 9.46909 12.4476 9.32257C12.5941 9.17606 12.7928 9.09375 13 9.09375ZM17.6875 9.875C17.6875 9.6678 17.6052 9.46909 17.4587 9.32257C17.3122 9.17606 17.1135 9.09375 16.9062 9.09375C16.699 9.09375 16.5003 9.17606 16.3538 9.32257C16.2073 9.46909 16.125 9.6678 16.125 9.875V19.25C16.125 19.4572 16.2073 19.6559 16.3538 19.8024C16.5003 19.9489 16.699 20.0312 16.9062 20.0312C17.1135 20.0312 17.3122 19.9489 17.4587 19.8024C17.6052 19.6559 17.6875 19.4572 17.6875 19.25V9.875Z"
                    fill="white"
                  />
                  <path
                    d="M23.1562 5.1875C23.1562 5.6019 22.9916 5.99933 22.6986 6.29235C22.4056 6.58538 22.0082 6.75 21.5938 6.75H20.8125V20.8125C20.8125 21.6413 20.4833 22.4362 19.8972 23.0222C19.3112 23.6083 18.5163 23.9375 17.6875 23.9375H8.3125C7.4837 23.9375 6.68884 23.6083 6.10279 23.0222C5.51674 22.4362 5.1875 21.6413 5.1875 20.8125V6.75H4.40625C3.99185 6.75 3.59442 6.58538 3.3014 6.29235C3.00837 5.99933 2.84375 5.6019 2.84375 5.1875V3.625C2.84375 3.2106 3.00837 2.81317 3.3014 2.52015C3.59442 2.22712 3.99185 2.0625 4.40625 2.0625H9.875C9.875 1.6481 10.0396 1.25067 10.3326 0.957646C10.6257 0.66462 11.0231 0.5 11.4375 0.5L14.5625 0.5C14.9769 0.5 15.3743 0.66462 15.6674 0.957646C15.9604 1.25067 16.125 1.6481 16.125 2.0625H21.5938C22.0082 2.0625 22.4056 2.22712 22.6986 2.52015C22.9916 2.81317 23.1562 3.2106 23.1562 3.625V5.1875ZM6.93438 6.75L6.75 6.84219V20.8125C6.75 21.2269 6.91462 21.6243 7.20765 21.9174C7.50067 22.2104 7.8981 22.375 8.3125 22.375H17.6875C18.1019 22.375 18.4993 22.2104 18.7924 21.9174C19.0854 21.6243 19.25 21.2269 19.25 20.8125V6.84219L19.0656 6.75H6.93438ZM4.40625 5.1875H21.5938V3.625H4.40625V5.1875Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_644_467">
                    <rect
                      width="25"
                      height="25"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </span>
        </li>
      </ul>
    </section>
  );
};
