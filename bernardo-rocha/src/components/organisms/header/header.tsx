import classNames from 'classnames'
import { ProfilePicture, HighlightedWord } from '../..'

import './header.scss'

type Props = {
  className?: string
}

export const Header = ({ className }: Props) => (
  <div className={classNames('header', className)}>
    <ProfilePicture/>
    <div className='presentation-text-div'>
        <p className='presentation-text'>Hey! i'm <HighlightedWord>Bernardo</HighlightedWord></p>
    </div>
    <div>
        <p>A full-stack web developer from Brazil, who <HighlightedWord>loves</HighlightedWord> to learn. </p>
    </div>
  </div>
)