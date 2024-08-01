import { DateInput } from "../UI/DateInput/DateInput";
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
            <DateInput theme={theme}/>
          </div>
        </div>

        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>
            Дата проведения аукциона
          </label>
          <div style={{ display: "flex" }}>
            <DateInput theme={theme}/>
          </div>
        </div>

        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>
            Дата подведения итогов аукциона
          </label>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DateInput theme={theme}/>
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
