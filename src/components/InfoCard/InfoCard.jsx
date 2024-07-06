import s from './InfoCard.module.scss'

export const InfoCard = ({head, info, theme }) => {
    return (
        <div className={`${s.infoCard} ${theme}`}>
            <div className={s.infoCard__title}>
                {head}
            </div>

            <div className={s.infoCard__info}>
                {info}
            </div>
        </div>
    )
}