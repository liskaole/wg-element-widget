import Col from '../../../compnents/Col';
import Row from '../../../compnents/Row';
import ItemsList from "./ItemsList";
import NumberFilter from "./NumberFilter";
import SearchFilter from "./SearchFilter";
import style from './SearchItemForm.module.css';

const SearchItemForm = () => {
    return (
        <form className={style.form} onSubmit={(e) => e.preventDefault()}>
            <Row gap={[0, 70]}>
                <Col span={1}>
                    <SearchFilter />
                </Col>
                <Col span={1}>
                    <NumberFilter />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemsList />
                </Col>
            </Row>
        </form>
    )
}

export default SearchItemForm;