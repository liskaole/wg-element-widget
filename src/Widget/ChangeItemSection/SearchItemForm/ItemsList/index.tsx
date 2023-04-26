import { observer } from 'mobx-react-lite'
import { useStores } from '../../../../store'
import { ElementI } from '../../../../store/ElementModel'
import { fullName } from '../../../../utils/fullName'
import style from './ItemsList.module.css'

const ItemsList = () => {
    const { elementStore } = useStores()

    const onSelectItem = (id: ElementI['id']) => {
        elementStore.togglePreSelected(id)
    }

    return (
        <ul className={style.listItem}>
            {
                elementStore.filteredItems.map((item: ElementI) => {
                    const { id, name, elementNumber, preSelected } = item
                    const fullElementName = fullName(name, elementNumber)

                    return (
                        <li key={id}>
                            <input
                                type="checkbox"
                                id={id}
                                name={fullElementName}
                                value={fullElementName}
                                onChange={() => onSelectItem(id)}
                                checked={preSelected}
                                disabled={!preSelected && elementStore.isSelectionDisabled}
                            />
                            <label htmlFor={fullElementName}>{fullElementName}</label>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default observer(ItemsList)