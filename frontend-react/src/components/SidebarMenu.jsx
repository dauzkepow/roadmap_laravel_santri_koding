//component sidebarMenu, menampilkan list menu

import { Link, useNavigate } from "react-router-dom"; //import useNavigate
import React, { useContext } from "react"; //import useContext
import Cookies from "js-cookie" //import js-cookie
import { AuthContext } from "../context/AuthContext"; //import AuthContext

//function component SidebarMenu()
export default function SidebarMenu() {
    //--- muat data dari backend

    //inisialisasi hook useNavigate untuk navigasi
    const navigate = useNavigate();

    //desctructure "setIsAuthenticated" yang ada di AuthContext
    const { setIsAuthenticated } = useContext(AuthContext);

    //method to handle logout, dijalankan ketika menu logout diklik
    const logout = () => {
        //remove token and user on cookies dengan library js-cookie
        Cookies.remove('token');
        Cookies.remove('user');

        //set state "isAuthenticated" pada AuthContext menjadi false
        setIsAuthenticated(false);

        //redirect to halaman login
        navigate("/login", { replace: true });
    }

    //--- tampilkan ke view
    return (
        <div className="card border-0 rounded shadow-sm">
            <div className="card-header">
                Main Menu
            </div>
            <div className="card-body">
                <div className="list-group">
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                    <Link to="/admin/users" className="list-group-item list-group-item-action">Users</Link>
                    <a onClick={logout} className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Logout</a>
                </div>
            </div>
        </div>
    )
}