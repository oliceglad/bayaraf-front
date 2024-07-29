import { Input } from "../UI/Input/Input";
import s from "./TenderForm.module.scss";

export const TenderForm = ({ theme, tenderObject = {} }) => {
  return (
    <div className={s.tenderForm}>
      <div className={s.tenderForm__container}>
        <label className={s.tenderForm__label}>Название тендера</label>
        <Input
          type="text"
          placeholder=""
          theme={theme}
        />
      </div>

      {/* TODO */}
      <div className={s.tenderForm__container}>
        <label className={s.tenderForm__label}>Тип тендерной сессии</label>
        <Input
          type="text"
          placeholder=""
          theme={theme}
        />
      </div>

      <div className={s.flex}>
        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>Дата окончания подачи заявки</label>
          <Input
            type="text"
            placeholder=""
            theme={theme}
          />
        </div>

        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>Дата проведения аукциона</label>
          <Input
            type="text"
            placeholder=""
            theme={theme}
          />
        </div>

        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>Дата подведения итогов аукциона</label>
          <Input
            type="text"
            placeholder=""
            theme={theme}
          />
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>Наименование заказчика</label>
          <Input
            type="text"
            placeholder=""
            theme={theme}
          />
        </div>

        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>ИНН заказчика</label>
          <Input
            type="text"
            placeholder=""
            theme={theme}
          />
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>Адрес конечной поставки</label>
          <Input
            type="text"
            placeholder=""
            theme={theme}
          />
        </div>

        <div className={s.tenderForm__container}>
          <label className={s.tenderForm__label}>Сроки поставки</label>
          <Input
            type="text"
            placeholder=""
            theme={theme}
          />
        </div>
      </div>

      <div className={s.tenderForm__container}>
        <label className={s.tenderForm__label}>Закон</label>
        <Input
          type="text"
          placeholder=""
          theme={theme}
        />
      </div>
    </div>
  );
};
