import React from "react";
import './Menu.css';
import MenuItem from "../MenuItem/MenuItem";




const Menu = (props) => {
    return (
        < div className={'menu'}>
            {
                props.data.map(user => <MenuItem key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Menu;