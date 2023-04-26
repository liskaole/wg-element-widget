import { observer } from "mobx-react-lite"
import Item from "../../compnents/Item"
import Row from "../../compnents/Row"
import { useStores } from "../../store"

const PreSelectedItemsSection = () => {
    const { elementStore } = useStores();
    
    return (
        <>
            <Row>Current selected items:</Row>
            <Row gap={[10, 10]}>
                {
                    elementStore.preSelectedItems.map(item => 
                        <Item
                            key={item.id} 
                            itemName={item.name + ' ' + item.elementNumber}
                            onClick={() => elementStore.togglePreSelected(item.id)}
                        />
                    )
                }
            </Row>
        </>
    )
}

export default observer(PreSelectedItemsSection)