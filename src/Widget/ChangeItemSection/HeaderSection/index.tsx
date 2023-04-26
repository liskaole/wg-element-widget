import { MouseEventHandler } from "react"
import CloseIcon from "../../../compnents/CloseIcon"
import Row from "../../../compnents/Row"
import style from './HeaderSection.module.css'

const HeaderSection = ({onClose}: {onClose?: MouseEventHandler}) => {
    return (
        <Row className={style.header}>
            <div>Select Items</div>
            <CloseIcon onClick={onClose} />
        </Row>
    )
}

export default HeaderSection