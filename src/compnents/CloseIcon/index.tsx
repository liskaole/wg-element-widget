import style from './CloseIcon.module.css'

const CloseIcon = ({...props}) => {
    return (
        <div 
            data-testid="close-icon"
            className={style.closeIcon} 
            {...props}
        />
    )
}

export default CloseIcon;