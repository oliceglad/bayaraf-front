import { Input } from "../UI/Input/Input";
import { Select } from "../UI/Select/Select";
import s from "./TenderForm.module.scss";

export const TenderForm = ({ theme, tenderObject = {} }) => {
  const list = ["Аукцион", "Аукцион", "Аукцион"];
  return (
    <div className={s.tenderForm}>
      <div className={s.tenderForm__container}>
        <label className={s.tenderForm__label}>Название тендера</label>
        <Input type="text" placeholder="" theme={theme} />
      </div>

      <div className={s.tenderForm__container}>
        <label className={s.tenderForm__label}>Тип тендерной сессии</label>

        <Select
          options={["Аукцион", "Аукцион", "Аукцион"]}
          selected={list[0]}
          onChange={() => {}}
          theme={theme}
        />
      </div>

      <div className={s.flex}>
        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>
            Дата окончания подачи заявки
          </label>
          <div style={{ display: "flex" }}>
            <Input
              type="text"
              placeholder=""
              theme={theme}
              style={{
                width: "83px",
                marginRight: "0px",
                borderRadius: "4px 0px 0px 4px",
              }}
            />
            <Input
              type="text"
              placeholder=""
              theme={theme}
              style={{ width: "83px", marginRight: "0px", borderRadius: "0px" }}
            />
            <Input
              type="text"
              placeholder=""
              theme={theme}
              style={{
                width: "83px",
                marginRight: "0px",
                borderRadius: "0px 4px 4px 0px",
              }}
            />
          </div>
        </div>

        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>
            Дата проведения аукциона
          </label>
          <div style={{ display: "flex" }}>
            <Input
              type="text"
              placeholder=""
              theme={theme}
              style={{
                width: "83px",
                marginRight: "0px",
                borderRadius: "4px 0px 0px 4px",
              }}
            />
            <Input
              type="text"
              placeholder=""
              theme={theme}
              style={{ width: "83px", marginRight: "0px", borderRadius: "0px" }}
            />
            <Input
              type="text"
              placeholder=""
              theme={theme}
              style={{
                width: "83px",
                marginRight: "0px",
                borderRadius: "0px 4px 4px 0px",
              }}
            />
          </div>
        </div>

        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>
            Дата подведения итогов аукциона
          </label>
          <div style={{ display: "flex" }}>
            <Input
              type="text"
              placeholder=""
              theme={theme}
              style={{
                width: "83px",
                marginRight: "0px",
                borderRadius: "4px 0px 0px 4px",
              }}
            />
            <Input
              type="text"
              placeholder=""
              theme={theme}
              style={{ width: "83px", marginRight: "0px", borderRadius: "0px" }}
            />
            <Input
              type="text"
              placeholder=""
              theme={theme}
              style={{
                width: "83px",
                marginRight: "0px",
                borderRadius: "0px 4px 4px 0px",
              }}
            />
          </div>
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>Наименование заказчика</label>
          <Input type="text" placeholder="" theme={theme} />
        </div>

        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>ИНН заказчика</label>
          <Input type="text" placeholder="" theme={theme} />
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>Адрес конечной поставки</label>
          <Input type="text" placeholder="" theme={theme} />
        </div>

        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>Сроки поставки</label>
          <Select
            options={["Аукцион", "Аукцион", "Аукцион"]}
            selected={list[0]}
            onChange={() => {}}
            theme={theme}
          />
        </div>
      </div>

      <div className={s.tenderForm__container}>
        <label className={s.tenderForm__label}>Закон</label>
        <Select
          options={["Аукцион", "Аукцион", "Аукцион"]}
          selected={list[0]}
          onChange={() => {}}
          theme={theme}
        />
      </div>
    </div>
  );
};
