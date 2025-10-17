//view home

/*
export default function Login() {
    return (
        <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">HALAMAN LOGIN</h1>
                <p className="col-md-12 fs-4">Belajar Full Stack JavaScript Developer dengan Express dan React di SantriKoding.com</p>
            </div>
        </div>
    )
}
*/


import React, { useState, useContext } from "react"; //import hook react
import { useNavigate } from "react-router-dom"; //import hook useNavigate
import api from '../../services/api' //import service api
import Cookies from 'js-cookie' //import js-cookie
import { AuthContext } from "../../context/AuthContext"; //import context

export default function Login() {
    //navigate
    const navigate = useNavigate();

    //descruture context "setIsAuthenticated"
    const { setIsAuthenticated } = useContext(AuthContext);

    //definisikan state, untuk tampung nilai di form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //definisikan state validation
    const [validation, setValidation] = useState([]);
    const [loginFailed, setLoginFailed] = useState([]);

    //function login, dijalankan saat form di submit
    const login = async (e) => {
        e.preventDefault();

        //call api login
        await api.post('/api/login', {
            email: email,
            password: password,
        })
            .then(response => {
                //jika Login berhasil, set token and user to cookie
                Cookies.set('token', response.data.data.token);
                Cookies.set('user', JSON.stringify(response.data.data.user));

                //assign true to state "isAuthenticated"
                setIsAuthenticated(true);

                //redirect ke halaman dashboard
                navigate("/admin/dashboard", { replace: true });
            })
            //jika login gagal
            .catch(error => {
                //assign error to state "validation"
                setValidation(error.response.data);

                //assign error to state "LoginFailed"
                setLoginFailed(error.response.data);
            })
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-4">
                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <h4>LOGIN</h4>
                        <hr />
                        {
                            //tampilkan error di JSX
                            validation.errors && (
                                <div className="alert alert-danger mt-2 pb-0">
                                    {
                                        validation.errors.map((error, index) => (
                                            <p key={index}>{error.path} : {error.msg}</p>
                                        ))
                                    }
                                </div>
                            )
                        }
                        {
                            loginFailed.message && (
                                <div className="alert alert-danger mt-2">
                                    {loginFailed.message}
                                </div>
                            )
                        }
                        <form onSubmit={login}>
                            <div className="form-group mb-3">
                                <label className="mb-1 fw-bold">Email Address</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"
                                placeholder="Email Address" />
                            </div>

                            <div className="form-group mb-3">
                                <label className="mb-1 fw-bold">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"
                                placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
