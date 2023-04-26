import { observer } from "mobx-react-lite"
import Item from "../../compnents/Item"
import Row from "../../compnents/Row"
import { useStores } from "../../store"

const SelectedItemsSection = () => {
    const { elementStore } = useStores();
    
    return (
        <>
            <Row>{`You currently have ${elementStore.selectedItems.length} selected items.`}</Row>
            <Row gap={[10, 10]}>
                {
                    elementStore.selectedItems.map(item => 
                        <Item 
                            key={item.id}
                            itemName={item.name + ' ' + item.elementNumber}
                            onClick={() => elementStore.removeSelected(item.id)}
                        />
                    )
                }
            </Row>
        </>
    )
}

export default observer(SelectedItemsSection)