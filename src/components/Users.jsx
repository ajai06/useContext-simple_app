import React from 'react';

import { userList } from './userList';

import { useUserDispatch } from '../context/context';

function Users() {

    const dispatch = useUserDispatch();

    const setUser = (role) => {
        dispatch({ type: role, payload: role })
    }

    return (
        <div className="container mt-5 ">

            <div className="row" >
                {
                    userList.map(user => (
                        <div className="col-sm-2" key={user.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{user.role}</h5>
                                    <button type="button" onClick={() => setUser(user.role)} className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Users
