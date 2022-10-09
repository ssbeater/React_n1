import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material'

import CopyRight from '../../components/pure/CopyRight';
import MenuListItems from '../../components/pure/MenuListItems';
import AsyncExample from '../../components/pure/asyncExample';
//import ObservableExample from '../../components/pure/observableExample';
//import FetchExample from '../../components/pure/FetchExample';
import ChuckJokes from '../../components/pure/ChuckJokes';

const Dashboard = () => {

    const navigate = useNavigate()

    const logout = () => {
        navigate('/login')
    }

    const list = [
        {text: 'HOME', icon: 'HOME', path:'/dashboard'},
        {text: 'SETT', icon: 'SETTINGS', path:'/dashboard'},
        {text: 'TASKs', icon: 'TASKS', path:'/tasks'},
        {text: 'LERO', icon: 'OTHER', path:'/dashboard'}
    ]

    return (
        <div>
            <Button variant="contained" onClick={logout}>Log out</Button>
            <MenuListItems list={list}/>
            <AsyncExample></AsyncExample>
            {/**
            <ObservableExample></ObservableExample>
            <FetchExample></FetchExample>
            */}
            <ChuckJokes></ChuckJokes>
            <CopyRight/>
        </div>
    );
}

export default Dashboard;
