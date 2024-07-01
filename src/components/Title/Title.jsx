import s from './Title.module.scss'

export const Title = ({children}) => {
    return (
        <div className={s.title}>
            <h2 href="#" className={s.title__link}>
                {children}
            </h2>
        </div>
    )
}