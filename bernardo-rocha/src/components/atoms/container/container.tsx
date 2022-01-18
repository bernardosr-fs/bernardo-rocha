import { ReactNode } from 'react'
import classNames from 'classnames'

import './container.scss'

type Props = {
  className?: string
  children: ReactNode
}

export const Container = ({ className, children }: Props) => (
  <div className={classNames('container', className)}>{children}</div>
)