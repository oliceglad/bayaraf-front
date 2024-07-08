import { useState } from "react";
import s from "./editableInfo.module.scss";

export const EditableInfo = ({ info, setInfo, theme, isSmall = false }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setInfo(e.target.value);
  };

  const handleSaveClick = () => {
    setInfo(info);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={info}
            onChange={handleInputChange}
            className={`${s.editableInfo__input} ${theme}`}
            onKeyDown={handleKeyDown}
            style={
              isSmall
                ? { width: "60%", fontSize: "14px", borderColor: "black" }
                : theme === "light"
                ? { borderColor: "black" }
                : {}
            }
          />
          <span onClick={handleSaveClick} className={s.editableInfo__button}>
            <svg
              weight={isSmall ? "10px" : "17px"}
              height={isSmall ? "10px" : "17px"}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9819 4.70291L16.237 4.44776C17.2543 3.43047 17.2543 1.78026 16.237 0.76297C15.2197 -0.254323 13.5695 -0.254323 12.5522 0.76297L12.2971 1.01812L15.9819 4.70291Z"
                fill="#0075FF"
              />
              <path
                d="M11.1604 2.15471L0.825101 12.49L0 16.9999L4.50989 16.1748L14.8452 5.83949L11.1604 2.15471Z"
                fill="#0075FF"
              />
            </svg>
          </span>
        </>
      ) : (
        <>
          <div
            className={` ${s.editableInfo__info} ${theme}`}
            style={isSmall ? { fontSize: "14px" } : {}}
          >
            {info}
          </div>
          <span onClick={handleEditClick} className={s.editableInfo__button}>
            <svg
              width={isSmall ? "10px" : "17px"}
              height={isSmall ? "10px" : "17px"}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9819 4.70291L16.237 4.44776C17.2543 3.43047 17.2543 1.78026 16.237 0.76297C15.2197 -0.254323 13.5695 -0.254323 12.5522 0.76297L12.2971 1.01812L15.9819 4.70291Z"
                fill="#0075FF"
              />
              <path
                d="M11.1604 2.15471L0.825101 12.49L0 16.9999L4.50989 16.1748L14.8452 5.83949L11.1604 2.15471Z"
                fill="#0075FF"
              />
            </svg>
          </span>
        </>
      )}
    </div>
  );
};
