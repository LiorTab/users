import './PostCard.scss';

const PostCard = ({ title, body, onRemove, onEdit }) => {
    return (
        <div className="post-card">
            <button className={'delete-btn'} onClick={onRemove}>X</button>
            <div onClick={onEdit}>
                <div className={'card-title'}>{title}</div>
                <div className={'card-body'}>{body}</div>
            </div>

        </div>
    );
};


export default PostCard;