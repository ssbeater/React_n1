import React, { useState, useEffect } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);
    const [actualPage, setActualPage] = useState(1);

    const obtainUsers = () => {
        getAllUsers()
            .then(res => {
                console.log('All users: ', res.data)
                setUsers(res.data)
                setTotalUsers(res.total)
                setUsersPerPage(res.per_page)
                setPages(res.total_pages)
            })
            .catch(err => {
                alert(`Error while retreiving the users: ${err}`)
            })
            .finally(() => {
                console.log('Ended obtaining users: ')
                console.table(users)
            })
    }

    const obtainPagedUser = (page) => {
        getAllPagedUsers(page)
            .then(res => {
                console.log('All users: ', res.data)
                setUsers(res.data)
                setTotalUsers(res.total)
                setUsersPerPage(res.per_page)
                setPages(res.total_pages)
                setActualPage(page)
            })
            .catch(err => {
                alert(`Error while retreiving the users: ${err}`)
            })
            .finally(() => {
                console.log('Ended obtaining users: ')
                console.table(users)
            })
    }

    const obtainUsersDetails = (id) => {
        getUserDetails(id)
            .then(res => {
                console.log('Selected User: ', res.data)
                setSelectedUser(res.data)
            })
            .catch(err => {
                alert(`Error while retreiving the user: ${err}`)
            })
            .finally(() => {
                console.log('Ended obtaining user details')
                console.table(selectedUser)
            })
    }

    const authUser = () => {
        login('eve.holt@regres.in','cityslicka')
            .then(res => {
                console.log('TOKEN: ', res.token)
                sessionStorage.setItem('token',res.token)
            })
            .catch(err => {
                alert(`Error while login user: ${err}`)
            })
            .finally(() => {
                console.log('Ended login user. Navigate to Home...')
            })
    }

    useEffect(() => {
        
        obtainUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={{margin: '50px'}}>
            <button onClick={authUser}>Auth User</button>
            <h2>Users:</h2>

            {users.map((user, index) => 
                <p key={index} onClick={() => obtainUsersDetails(user.id)}>
                    {user.first_name} {user.last_name}
                </p>
            )}
            <p>{actualPage}/{pages} - Showing {usersPerPage} users of {totalUsers} in total</p>
            <button onClick={() => obtainPagedUser(1)}>1</button>
            <button onClick={() => obtainPagedUser(2)}>2</button>
            <div>
                <h3>User Details:</h3>
                { selectedUser ? <div>
                    <p>Name: {selectedUser.first_name}</p>
                    <p>Last Name: {selectedUser.last_name}</p>
                    <p>Email: {selectedUser.email}</p>
                    <img 
                        src={selectedUser.avatar} 
                        style={{height:'50px', width:'50px'}}
                        alt='avatar'
                    />
                </div> :
                <h6>Please click on a User to see its details</h6>}
            </div>
        </div>
    );
}

export default FetchExample;
