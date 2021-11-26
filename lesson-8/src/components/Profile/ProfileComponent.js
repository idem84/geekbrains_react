import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import styles from "./styles.module.scss";
import Typography from '@material-ui/core/Typography'
import { changeIsOnlineWithThunk } from '../../actions/profile'

export default function Profile(props) {
    const dispatch = useDispatch()
    const { age, name, isOnline } = useSelector((state) => state.profile)

    const handleIsOnlineChange = (event) => {
        dispatch(changeIsOnlineWithThunk(event.target.checked))
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
                component="nav"
                aria-label="mailbox folders"
                sx={{ flexGrow: 1, p: 3 }}
            >
                <div id={styles['profileMenu']}>
                    <ul>
                        <li><Link href="#">Edit info</Link></li>
                        <li><Link href="#">Change email</Link></li>
                        <li><Link href="#">Exit</Link></li>
                    </ul>
                </div>
            </Box>
            <Box component="main" sx={{ flexGrow: 3, p: 3 }}>
                <Typography component="h1" variant="h5">Profile page: personal info</Typography>
                <Typography>
                    <Typography variant="span" style={{ fontWeight: 600 }}>Name: </Typography>
                    <Typography variant="span">{name}</Typography>
                </Typography>
                <Typography>
                    <Typography variant="span" style={{ fontWeight: 600 }}>Age: </Typography>
                    <Typography variant="span">{age}</Typography>
                </Typography>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isOnline}
                            onChange={handleIsOnlineChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label={<p>Is user online</p>}
                />
            </Box>
        </Box>
    )
}
