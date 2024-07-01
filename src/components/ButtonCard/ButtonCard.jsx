import s from './ButtonCard.module.scss'

export const ButtonCard = ({children}) => {
    return (
        <div className={s.buttonCard}>
            <a href="#" className={s.buttonCard__link}>
                {children}
            </a>
        </div>
    )
}