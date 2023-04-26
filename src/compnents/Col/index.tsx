import { ReactNode } from "react"
import style from './Col.module.css'

const Col = ({span, className, children, ...props}: {span?: number, className?: string, children: ReactNode}) => {
    const inlineStyle = {
        flex: span || 'auto'
    }

    return (
        <div 
            data-testid='col-id'
            className={[style.col, className].join(' ')}
            style={inlineStyle}
            {...props}
        >
            {children}
        </div>
    )
}

export default Col