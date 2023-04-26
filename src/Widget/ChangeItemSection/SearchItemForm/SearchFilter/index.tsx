import { ChangeEvent } from "react"
import { useStores } from "../../../../store"
import style from '../SearchItemForm.module.css'
import { observer } from "mobx-react-lite"


const SearchFilter = () => {
    const { elementStore } = useStores()
    
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        elementStore.setSearchVal(e.target.value)
    }

    return (
        <label className={style.formField}>
            Search
            <input 
                data-testid='search-filter-select'
                type="text" 
                name="search" 
                value={elementStore.searchVal} 
                onChange={handleSearchChange} 
            />
        </label>
    )
}

export default observer(SearchFilter)