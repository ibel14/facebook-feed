import React from 'react';
import './contacts.css';
import ContactItems from './contacts-items';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Contacts = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };


    return (
        <ul className="contact-list">
            <div className="title-contacts">
                <h5>Ваши Страницы</h5>
                <div className="menu-feed">
                    <MoreHorizIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Страница</MenuItem>
                        <MenuItem onClick={handleClose}>Страница</MenuItem>
                    </Menu>
                </div>
            </div>

            <ContactItems label='Ivan Aga'/>
            <ContactItems label='Sergey Sin'/>
            <ContactItems label='John Snow'/>
            <ContactItems label='Fedor Babai'/>
            <ContactItems label='Jora Pizdyavkin'/>
            <ContactItems label='Oleg Miami'/>
            <ContactItems label='Tambu Smith'/>
            <ContactItems label='Pavel Privet'/>
        </ul>
    )
}

export default Contacts;