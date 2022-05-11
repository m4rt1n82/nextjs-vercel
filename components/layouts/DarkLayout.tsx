import { FC } from "react"



interface Props {
    children: React.ReactNode
}

export const DarkLayout: FC<Props> = ( {children} ) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '1rem',
            borderRadius: '0.5rem'
        }
        }>
            <h1> Dark Layout</h1>
            <div>
                {children}
            </div>
        </div>
    )
}
