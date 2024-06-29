import UserBadge from "../UserBadge";
import Comment from "../Comment";
import { useState } from "react";
import cn from "classnames";

import "./styles.css";

const DetailedCard = ({
    userName,
    avatarUrl,
    userId,
    imgUrl,
    likes,
    comments,
    isLikedByYou,
    className
}) => {
    const [ isCommentsShown, setIsCommentsShown ] = useState(false);

    const renderComments = () => {
        if (comments.length > 2 && !isCommentsShown) {
            const commentsForRender = [...comments];
            commentsForRender.splice(comments.length - 2, 2)

            return (
                <>
                    <span className="cnDetailedCardCommentTitle" onClick={() => setIsCommentsShown(true)}>{`Показать ещё ${comments.length - 2} комментариев`}</span>
                    {commentsForRender.map((comment) => <Comment {...comment} />)}
                </>
            )
        }
        /* {comments.map((comment) => <Comment nickname={comment.nickname} text={comment.text} />)} */
        return comments.map((comment) => <Comment {...comment} />);
    }

    return (
        <div className={cn("cnDetailedCardRoot", className)}>
            <div className="cnDetailedCardHeader">
                <UserBadge nickname={userName} avatarUrl={avatarUrl} id={userId} />
            </div>
            <img src={imgUrl} alt="img" className="cnDetailedCardImg" />
            <div className="cnDetailedCardButtons">
                <i className={`${isLikedByYou ? "fas" : "far"} fa-heart cnDetailedCardLikeIcon`} ></i>
                <i className="fas fa-comment cnDetailedCardCommentIcon"></i>
            </div>
            <div className="cnDetailedCardLikes">
                {`Оценило ${likes} человек`}
            </div>
            <div className="cnDetailedCardComments">
                {renderComments()}
            </div>
            <textarea className="cnDetailedCardTextarea" />
        </div>
    );
}

export default DetailedCard;