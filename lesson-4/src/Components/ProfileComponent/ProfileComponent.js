import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import styles from "./styles.module.scss";

const ProfileComponent = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div id={styles['profileMenu']}>
            <ul>
                <li><Link href="#">Edit info</Link></li>
                <li><Link href="#">Change email</Link></li>
                <li><Link href="#">Exit</Link></li>
            </ul>
        </div>
    </Box>
  );
};

export default ProfileComponent;
