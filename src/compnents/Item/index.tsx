import { MouseEventHandler } from 'react';
import CloseIcon from '../CloseIcon';
import styles from './Item.module.css'

const Item = ({itemName, onClick}: {itemName: string, onClick?: MouseEventHandler}) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemLabel}>
                {itemName}
            </div>
            <CloseIcon onClick={onClick} />
        </div>
    )
}

export default Item;