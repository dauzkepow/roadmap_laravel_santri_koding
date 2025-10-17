//view Dashboard

import SidebarMenu from "../../../components/sidebarMenu" //import SidebarMenu
import { useState, useEffect } from "react"; //import useState, useEffect
import Cookies from "js-cookie" //import js-cookie

/*
//uji coba
//function Dashboard, agar bisa dipanggil di file lain
export default function Dashboard() {
    //panggil SidebarMenu di dalam JSX
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-header">
                            DASHBOARD
                        </div>
                        <div className="card-body">
                            Selamat Datang, <strong></strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
*/

//function component Dashboard
export default function Dashboard() {
    //init state user
    const [user, setUser] = useState([]);

    //useEffect, get data user dari cookie menggunakan js cookie
    useEffect(() => {
      //get user data from js-cookies
      const userData = Cookies.get('user');

      if (userData) {
        //hasilnya di-assign ke state "user"
        setUser(JSON.parse(userData));
      }
    }, []);

    //tampilkan data user dalam JSX , {user?.name}
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-header">
                            DASHBOARD
                        </div>
                        <div className="card-body">
                            Selamat Datang, <strong>{user?.name}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}