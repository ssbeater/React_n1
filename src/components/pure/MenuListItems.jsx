import React from 'react';

import { useNavigate } from 'react-router-dom';

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Home, Settings, Task, Circle } from '@mui/icons-material'

const getIcon = (icon) => {
    const map = {
        'HOME': <Home/>,
        'SETTINGS': <Settings/>,
        'TASKS': <Task/>
    }

    return map[icon] ?? <Circle/>
}

const MenuListItems = ({list}) => {
    const navigate = useNavigate()

    const navigation = (path) => {
        navigate(path)
    }

    return (
        <List style={{ display: 'flex', flexDirection:'row'}}>
            {list.map(({text, path, icon}, index) => (
                <ListItem key={index} button onClick={() => navigation(path)}>
                    <ListItemIcon>{getIcon(icon)}</ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
            ))}
        </List>
    );
}

export default MenuListItems;
