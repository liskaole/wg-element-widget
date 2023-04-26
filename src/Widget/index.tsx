import { observer } from "mobx-react-lite"
import ChangeItemSection from "./ChangeItemSection"
import SelectedItemsSection from "./SelectedItemsSection"
import style from './Widget.module.css'

const Widget = () => {

    return (
        <section className={style.widgetContent}>
            <SelectedItemsSection />
            <ChangeItemSection />
        </section>
    )
}

export default observer(Widget)