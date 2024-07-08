import s from "./filterInput.module.scss";

export const FilterInput = ({ theme }) => {
  return (
    <div className={`${s.filterInput} ${theme}`}>
      <input
        type="text"
        placeholder="Поиск по категории"
        className={`${theme}`}
      />
      <button>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 17L21 21M19.6667 10.3333C19.6667 15.488 15.488 19.6667 10.3333 19.6667C5.17868 19.6667 1 15.488 1 10.3333C1 5.17868 5.17868 1 10.3333 1C15.488 1 19.6667 5.17868 19.6667 10.3333Z"
            stroke={theme === "light" ? "black" : "white"}
          />
        </svg>
      </button>
    </div>
  );
};
