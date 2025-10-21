//view user edit

import { useState, useEffect } from 'react';
import SidebarMenu from "../../../components/sidebarMenu";
import { useNavigate, useParams } from 'react-router-dom'; //import useNavigate, useParams
import Cookies from 'js-cookie'; //import js cookie
import api from '../../../services/api'; //import api
const token = Cookies.get('token'); //get token from cookies browser

//component function UsersEdit()
export default function UsersEdit() {
    //--proses data

    //inisialisasi navigate
    const navigate = useNavigate();

    //destruct ID dari parameter browser
    const { id } = useParams();

    //define state untuk menampung data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //state validation
    const [validation, setValidation] = useState([]);

    //method fetchDetailUser
    const fetchDetailUser = async () => {
        //fetch data ke backend untuk dapat detail berdasarkan ID
        await api.get(`/api/admin/users/${id}`)
            .then(response => {
                //assign to state
                setName(response.data.data.name);
                setEmail(response.data.data.email);
            })
    }

    //hook useEffect, agar bisa dijalankan saat halaman diakses
    useEffect(() => {
        //call method "fetchDetailUser"
        fetchDetailUser();
    }, []);

    //method "updateUser", proses update data saat form di-submit
    const updateUser = async (e) => {
        e.preventDefault();

        //call api, update data ke backend menggunakan rest api
        api.defaults.headers.common['Authorization'] = token;
        await api.put(`/api/admin/users/${id}`,  {
            name: name,
            email: email,
            password: password
        })
            .then(() => {
                //jika berhasil, redirect ke halaman users
                navigate('/admin/users')
            })
            .catch(error => {
                //jika gagal, assign error to state validation
                setValidation(error.response.data);
            })
    }


    //--view
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-header">
                            EDIT USER
                        </div>
                        <div className="card-body">
                            {/*HALAMAN USER EDIT*/}
                            
                            {
                                //tampilkan error validasi
                                validation.errors && (
                                    <div className='alert alert-danger mt-2 pb-0'>
                                        {
                                            validation.errors.map((error, index) => (
                                                <p key={index}>{error.path} : {error.msg}</p>
                                            ))
                                        }
                                    </div>
                                )
                            }

                            <form onSubmit={updateUser}>
                                <div className='form-group mb-3'>
                                    <label className='mb-1 fw-bold'>Full Name</label>
                                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Full Name' /> 
                                </div>

                                <div class="form-group mb-3">
                                    <label class="mb-1 fw-bold">Email address</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" placeholder="Email Address" />
                                </div>

                                <div class="form-group mb-3">
                                    <label class="mb-1 fw-bold">Password</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" placeholder="Password" />
                                </div>

                                <button type="submit" class="btn btn-sm btn-primary">UPDATE</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}