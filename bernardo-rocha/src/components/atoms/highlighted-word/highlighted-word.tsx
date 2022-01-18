import './highlighted-word.scss'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

export const HighlightedWord = ( { children } : Props ) => {
    return <span className='highlighted-word'>{children}</span>
}