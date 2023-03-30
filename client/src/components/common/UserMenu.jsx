import LogoutOutlinedIcon from '@mui/icons-material';
import { ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import menuConfigs from '../../configs/menu.configs';

const UserMenu = () => {
    const user = useSelector((state) => state.user)

    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null)

    const toggleMenu = (e) => setAnchorEl(e.currentTarget)


    return (
        <>

            {user && (
                <>
                    <Typography variant='h6' sx={{ cursor: "pointer", userSelect: "none" }} onClick={toggleMenu}>
                        {user.displayName}
                    </Typography>
                    <Menu open={Boolean(anchorEl)} onclose={() => setAnchorEl(null)} PaperProps={{ sx: { padding: 0 } }}>
                        {menuConfigs.user.map((item, index) => (
                            <ListItemButton component={Link} to={item.path} key={index} onClick={() => setAnchorEl(null)}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText disableTypography primary={<Typography textTransform="uppercase">{item.display}</Typography>} />
                            </ListItemButton>
                        ))}
                    </Menu>
                </>
            )}
        </>
    )
}

export default UserMenu