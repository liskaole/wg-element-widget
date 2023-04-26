import { useEffect, useState } from "react";
import Button, { ButtonType } from "../../compnents/Button";
import Row from "../../compnents/Row";
import { useStores } from "../../store";
import PreSelectedItemsSection from "../PreSelectedItemsSection";
import style from './ChangeItemsSection.module.css';
import HeaderSection from "./HeaderSection";
import SearchItemForm from "./SearchItemForm";

const ChangeItemSection = () => {
    const { elementStore } = useStores()
    const [showItemList, setShowItemList] = useState(false)

    useEffect(() => {
        elementStore.resetPreSelected();
    }, [showItemList])

    const saveSelectedItems = () => {
        elementStore.setSelected(elementStore.preSelectedItems.map(item => item.id));
    }

    const onClose = () => {
        setShowItemList(false)
    }

    return (
        <>
            <Button type={ButtonType.success} onClick={() => setShowItemList(true)}>
                {'Change my choice'}
            </Button>
            {
                showItemList &&
                <Row gap={[20, 0]} className={style.selectItems}>
                    <HeaderSection onClose={onClose} />
                    <SearchItemForm />
                    <PreSelectedItemsSection />
                    <Row gap={[10, 10]}>
                        <Button type={ButtonType.success} onClick={saveSelectedItems}>Save</Button>
                        <Button type={ButtonType.danger} onClick={onClose}>Cancel</Button>
                    </Row>
                </Row>
            }
        </>
    )
}

export default ChangeItemSection;