import s from './InfoCard.module.scss'

export const InfoCard = ({head, info}) => {
    return (
        <div className={s.infoCard}>
            <div className={s.infoCard__title}>
                {head}
            </div>

            <div className={s.infoCard__info}>
                {info}
            </div>
        </div>
    )
}