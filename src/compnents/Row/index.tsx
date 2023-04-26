import { ClassAttributes, HTMLAttributes, ReactNode } from "react"
import style from './Row.module.css'

type RowType = {
    gap?: [colGap: number, rowGap: number],
    className?: string,
    children?: ReactNode,
    props?: HTMLAttributes<HTMLDivElement>
}

const Row = ({ gap, className, children, ...props }: RowType ) => {
    const inlineStyle = {
        gap: gap ? gap[0] + 'px ' + gap[1] + 'px' : 0,
    }

    return (
        <div
            data-testid="row-id"
            style={inlineStyle}
            className={[className, style.row].join(' ')}
            {...props}
        >
            {children}
        </div>
    )
}

export default Row