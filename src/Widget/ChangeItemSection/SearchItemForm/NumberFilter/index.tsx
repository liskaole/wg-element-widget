import { ChangeEvent } from "react"
import { useStores } from "../../../../store"
import style from '../SearchItemForm.module.css'
import { observer } from "mobx-react"

export const FILTERS = [10, 100, 200]
export const FILTER_LABEL = 'Filter'

const NumberFilter = () => {
    const { elementStore } = useStores()

    const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        elementStore.setFilterVal(parseInt(e.target.value))
    }

    return (
        <label className={style.formField}>
            {FILTER_LABEL}
            <select 
                data-testid='number-filter-select'
                name="filter" 
                id="filterItem" 
                placeholder="No filter" 
                value={elementStore.filterVal} 
                onChange={handleFilterChange}
            >
                {FILTERS.map(f => <option key={f} value={f}>{`> ${f}`}</option>)}
            </select>
        </label>
    )
}

export default observer(NumberFilter)