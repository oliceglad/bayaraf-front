import React, { useState } from "react";
import s from "./TableOfCalc.module.scss";
import { EditableInfo } from "../UI/editableInfo/EditableInfo";

export const TableOfCalc = ({ theme }) => {
  const [count, setCount] = useState("12");
  const [time, setTime] = useState("5 дней");
  const [price, setPrice] = useState("30 000 ₽");

  return (
    <div className={`${s.container} ${theme}`}>
      <table className={s.tableOfCalc}>
        <thead>
          <tr>
            <th style={{ width: "45px", textAlign: "center" }}>№</th>
            <th>НАИМЕНОВАНИЕ</th>
            <th style={{ width: "150px" }}>МОДЕЛЬ</th>
            <th style={{textAlign: "center"}}>АРТИКУЛ</th>
            <th>ПОСТАВЩИК</th>
            <th>КОЛ-ВО</th>
            <th>
              ЦЕНА
              <br />
              <span>ДОСТАВКИ</span>
            </th>
            <th >
              СРОК <br /> <span>ПОСТАВКИ</span>
            </th>
            <th>
              СРОК <br /> <span>РЕЗЕРВ</span>
            </th>
            <th>
              ОПЕРАЦИОННЫЕ <br /> <span>РАСХОДЫ</span>
            </th>
            <th>
              ЦЕНА ЗА ЕД. <br /> <span>С САЙТА</span>
            </th>
            <th>
              ЦЕНА ЗА ЕД. <br /> <span>ЗАКУПКИ</span>
            </th>
            <th>
              СУММА <br /> <span>ЗАКУПКИ</span>
            </th>
            <th>
              ЦЕНА ЗА ЕД. <br /> <span>ПРОДАЖИ</span>
            </th>
            <th>
              СУММА <br /> <span>ПРОДАЖИ</span>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{textAlign: "center" }}>1</td>
            <td>Видеокарта</td>
            <td>GeForce RTX 3050 GAMING 6G</td>
            <td style={{ textAlign: "center" }}>108039</td>
            <td>KNS</td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={count}
                setInfo={setCount}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td>1 000 ₽</td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={time}
                setInfo={setTime}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={time}
                setInfo={setTime}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={time}
                setInfo={setTime}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td>20 000 ₽</td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={price}
                setInfo={setPrice}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td>192 000 ₽</td>
            <td>18 400 ₽</td>
            <td>220 800 ₽</td>
            <td>
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0044 13.7522H2.49712V4.24491H6.43698C7.11307 3.53847 7.91792 2.89498 8.83095 2.33215H0.584961V15.665H13.9172V6.46817L12.0045 8.95593L12.0044 13.7522Z"
                    fill="#0075FF"
                  />
                  <path
                    d="M5.6687 11.5763C5.8378 8.10111 8.43543 6.14816 11.5494 5.61568L12.0283 7.3776L15.5314 2.82139L10.2041 0.664917L10.6912 2.45687C7.29196 4.22574 4.54034 7.47121 5.6687 11.5763Z"
                    fill="#0075FF"
                  />
                </svg>
              </a>
            </td>
            <td>
              <a href="#">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8875 0.334961H1.61239C0.769808 0.334961 0.0849609 1.01981 0.0849609 1.86239V12.1375C0.0849609 12.9801 0.769808 13.665 1.61239 13.665H11.8875C12.7301 13.665 13.415 12.9801 13.415 12.1375V1.86239C13.415 1.01981 12.7301 0.334961 11.8875 0.334961Z"
                    fill="#F14524"
                  />
                  <path
                    d="M9.20451 8.66908C9.42164 8.88631 9.42164 9.23789 9.20451 9.45451C9.0962 9.56282 8.95402 9.61723 8.81174 9.61723C8.66957 9.61723 8.52739 9.56282 8.41908 9.45451L6.75008 7.78541L5.08109 9.45451C4.97278 9.56282 4.8306 9.61723 4.68842 9.61723C4.54615 9.61723 4.40397 9.56282 4.29566 9.45451C4.07853 9.23789 4.07853 8.88631 4.29566 8.66908L5.96476 7.00008L4.29566 5.33109C4.07853 5.11386 4.07853 4.76228 4.29566 4.54566C4.51289 4.32853 4.86386 4.32853 5.08109 4.54566L6.75008 6.21476L8.41908 4.54566C8.63631 4.32853 8.98728 4.32853 9.20451 4.54566C9.42164 4.76228 9.42164 5.11386 9.20451 5.33109L7.53541 7.00008L9.20451 8.66908Z"
                    fill={theme === "light" ? "white" : "#2B2F38"}
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td style={{textAlign: "center" }}>2</td>
            <td>Видеокарта</td>
            <td>RTX 3050</td>
            <td style={{ textAlign: "center" }}>442412</td>
            <td>OCS</td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={count}
                setInfo={setCount}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td>3 000 ₽</td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={time}
                setInfo={setTime}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={time}
                setInfo={setTime}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={time}
                setInfo={setTime}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td>35 000 ₽</td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={price}
                setInfo={setPrice}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td>1 232 000 ₽</td>
            <td>32 200 ₽</td>
            <td>1 416 800 ₽</td>
            <td>
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0044 13.7522H2.49712V4.24491H6.43698C7.11307 3.53847 7.91792 2.89498 8.83095 2.33215H0.584961V15.665H13.9172V6.46817L12.0045 8.95593L12.0044 13.7522Z"
                    fill="#0075FF"
                  />
                  <path
                    d="M5.6687 11.5763C5.8378 8.10111 8.43543 6.14816 11.5494 5.61568L12.0283 7.3776L15.5314 2.82139L10.2041 0.664917L10.6912 2.45687C7.29196 4.22574 4.54034 7.47121 5.6687 11.5763Z"
                    fill="#0075FF"
                  />
                </svg>
              </a>
            </td>
            <td>
              <a href="#">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8875 0.334961H1.61239C0.769808 0.334961 0.0849609 1.01981 0.0849609 1.86239V12.1375C0.0849609 12.9801 0.769808 13.665 1.61239 13.665H11.8875C12.7301 13.665 13.415 12.9801 13.415 12.1375V1.86239C13.415 1.01981 12.7301 0.334961 11.8875 0.334961Z"
                    fill="#F14524"
                  />
                  <path
                    d="M9.20451 8.66908C9.42164 8.88631 9.42164 9.23789 9.20451 9.45451C9.0962 9.56282 8.95402 9.61723 8.81174 9.61723C8.66957 9.61723 8.52739 9.56282 8.41908 9.45451L6.75008 7.78541L5.08109 9.45451C4.97278 9.56282 4.8306 9.61723 4.68842 9.61723C4.54615 9.61723 4.40397 9.56282 4.29566 9.45451C4.07853 9.23789 4.07853 8.88631 4.29566 8.66908L5.96476 7.00008L4.29566 5.33109C4.07853 5.11386 4.07853 4.76228 4.29566 4.54566C4.51289 4.32853 4.86386 4.32853 5.08109 4.54566L6.75008 6.21476L8.41908 4.54566C8.63631 4.32853 8.98728 4.32853 9.20451 4.54566C9.42164 4.76228 9.42164 5.11386 9.20451 5.33109L7.53541 7.00008L9.20451 8.66908Z"
                    fill={theme === "light" ? "white" : "#2B2F38"}
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td style={{textAlign: "center" }}>3</td>
            <td>Видеокарта</td>
            <td>RX 970</td>
            <td style={{ textAlign: "center" }}>122221</td>
            <td>TREOLAN</td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={count}
                setInfo={setCount}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td>0 ₽</td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={time}
                setInfo={setTime}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={time}
                setInfo={setTime}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={time}
                setInfo={setTime}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td>25 000 ₽</td>
            <td className={s.editableInfoCol}>
              <EditableInfo
                info={price}
                setInfo={setPrice}
                isSmall={true}
                theme={theme}
              />
            </td>
            <td>60 000 ₽</td>
            <td>23 000 ₽</td>
            <td>69 000 ₽</td>
            <td>
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0044 13.7522H2.49712V4.24491H6.43698C7.11307 3.53847 7.91792 2.89498 8.83095 2.33215H0.584961V15.665H13.9172V6.46817L12.0045 8.95593L12.0044 13.7522Z"
                    fill="#0075FF"
                  />
                  <path
                    d="M5.6687 11.5763C5.8378 8.10111 8.43543 6.14816 11.5494 5.61568L12.0283 7.3776L15.5314 2.82139L10.2041 0.664917L10.6912 2.45687C7.29196 4.22574 4.54034 7.47121 5.6687 11.5763Z"
                    fill="#0075FF"
                  />
                </svg>
              </a>
            </td>
            <td>
              <a href="#">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8875 0.334961H1.61239C0.769808 0.334961 0.0849609 1.01981 0.0849609 1.86239V12.1375C0.0849609 12.9801 0.769808 13.665 1.61239 13.665H11.8875C12.7301 13.665 13.415 12.9801 13.415 12.1375V1.86239C13.415 1.01981 12.7301 0.334961 11.8875 0.334961Z"
                    fill="#F14524"
                  />
                  <path
                    d="M9.20451 8.66908C9.42164 8.88631 9.42164 9.23789 9.20451 9.45451C9.0962 9.56282 8.95402 9.61723 8.81174 9.61723C8.66957 9.61723 8.52739 9.56282 8.41908 9.45451L6.75008 7.78541L5.08109 9.45451C4.97278 9.56282 4.8306 9.61723 4.68842 9.61723C4.54615 9.61723 4.40397 9.56282 4.29566 9.45451C4.07853 9.23789 4.07853 8.88631 4.29566 8.66908L5.96476 7.00008L4.29566 5.33109C4.07853 5.11386 4.07853 4.76228 4.29566 4.54566C4.51289 4.32853 4.86386 4.32853 5.08109 4.54566L6.75008 6.21476L8.41908 4.54566C8.63631 4.32853 8.98728 4.32853 9.20451 4.54566C9.42164 4.76228 9.42164 5.11386 9.20451 5.33109L7.53541 7.00008L9.20451 8.66908Z"
                    fill={theme === "light" ? "white" : "#2B2F38"}
                  />
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
