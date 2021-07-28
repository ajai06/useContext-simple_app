import React from 'react';

import { useUserState, useUserDispatch } from '../context/context';

function Header() {

    const state = useUserState();
    const dispatch = useUserDispatch();

    const logout = () => {
        dispatch({type:"LOGOUT"})
    }

    return (
        <div>
            <div className="container mt-3">
                <nav className="navbar d-flex justify-content-between bg-secondary ">
                    <span></span>
                    <span className="navbar-brand text-white">Hello {state.role}</span>
                    <button type="button" onClick={logout} className="btn btn-danger mx-3">Logout</button>
                </nav>
            </div>
        </div>
    )
}

export default Header
