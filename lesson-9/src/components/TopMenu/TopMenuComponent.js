import Link from '@material-ui/core/Link';
import "./module.style.scss";

const TopMenuComponent = () => {
  return (
    <div id="topMenu">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/chats">Chats</Link></li>
        <li><Link href="/news">News</Link></li>
      </ul>
    </div>
  );
};

export default TopMenuComponent;
