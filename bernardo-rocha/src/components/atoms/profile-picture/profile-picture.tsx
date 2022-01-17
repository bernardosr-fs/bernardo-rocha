import './style/style.scss'

type Props = {
    className: string | undefined;
}

export const ProfilePicture = ( { className }: Props ) => {
    return (
        <div className={"profile-picture " + {className}}></div>
    )
}