import React from 'react';
import '../public/header.css'
import logo from '../public/logo.jpg'


export const Header = () => {

    return (
        <div className="header">
            <nav className="navbar navbar-light bg-dark justify-content-between">
                <a className="navbar-brand">
                <img src={logo} width={35} height={35}/> My Expense</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    );
}

export default Header
