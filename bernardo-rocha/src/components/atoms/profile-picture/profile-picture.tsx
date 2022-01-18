import './profile-picture.scss'
import classNames from 'classnames'

type Props = {
    className?: string;
}

export const ProfilePicture = ( { className }: Props ) => {
    return (
        <div className={classNames('profile-picture', className)}></div>
    )
}