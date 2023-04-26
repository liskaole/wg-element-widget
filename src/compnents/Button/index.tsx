import { MouseEventHandler, ReactNode } from "react"
import style from './Button.module.css'

export enum ButtonType {
    success = 'success',
    danger = 'danger'
}

interface ButtonI {
    type?: ButtonType
    onClick?: MouseEventHandler<HTMLButtonElement>
    children: ReactNode
}

const Button = ({type = ButtonType.success, onClick, children, ...props}: ButtonI) => {
    return (
        <button 
            className={[style.btn, type === ButtonType.success ? style.successBtn : style.dangerBtn].join(' ')}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;