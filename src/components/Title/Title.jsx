import s from './Title.module.scss'

export const Title = ({children}) => {
    return (
        <div className={s.title}>
            <a href="#" className={s.title__link}>
                {children}
            </a>
        </div>
    )
}