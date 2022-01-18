import './UserCard.scss';

const UserCard = ({ name, username, email, onRemove, onNavigate, address: { geo }, company }) => {
    return (
        <div className="user-card">
            <button className={'delete-btn'} onClick={onRemove}>X</button>
            <div onClick={onNavigate}>
                <div className={'user-name'}>{`${name} (${username})`}</div>
                <div className={'email'}>{email}</div>
                <div className={'coordinates'}>{`${geo.lat}, ${geo.lng}`}</div>
                <div className={'company-name'}>{company.name}</div>
            </div>

        </div>
    );
};


export default UserCard;