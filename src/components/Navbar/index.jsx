import UserBadge from "../UserBadge";
import "./styles.css";

const Navbar = ({
    nickname,
    avatarUrl,
    id
}) => {
    return (
        <div className="cnNavbarRoot">
            <div className="cnNavbarWrapper">
                <span>Rugram</span>
                <UserBadge nickname={nickname} avatarUrl={avatarUrl} id={id} />
            </div>
        </div>
    );
}

export default Navbar;
