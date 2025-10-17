//view create insert data users

import { useState } from 'react'; //import useState dan useEffect
import SidebarMenu from "../../../components/sidebarMenu"; //import SidebarMenu
import { useNavigate } from 'react-router-dom'; //import useNavigate
import Cookies from 'js-cookie'; //import js cookie
import api from '../../../services/api'; //import api
const token = Cookies.get('token'); //get token from cookies



//function component UsersCreate()
export default function UsersCreate() {
    //---proses data
    
     //useNavigate
    const navigate = useNavigate();

    //define state, untuk simpan data dari form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //state validation
    const [validation, setValidation] = useState([]);

    //function "storeUser", dijalankan saat form submit
    const storeUser = async (e) => {
        e.preventDefault();

        //call api proses insert data ke database
        api.defaults.headers.common['Authorization'] = token;
        await api.post('/api/admin/users', {
            name: name,
            email: email,
            password: password
        })
            .then(() => {
                //jika insert berhasil, redirect ke halaman users
                navigate('/admin/users')
            })
            .catch(error => { //jika gagal insert data
                //assign error to state validation
                setValidation(error.response.data);
            })
    }

    //---view
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-header">
                            ADD USER
                        </div>
                        <div className="card-body">
                            {/* HALAMAN USER CREATE */}
                            
                            {
                                //menampilka error validasi di JSX
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
                            <form onSubmit={storeUser}>
                                <div className='form-group mb-3'>
                                    <label className='mb-1 fw-bold'>Full Name</label>
                                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Full Name' />  
                                </div>

                                <div class="form-group mb-3">
                                    <label class="mb-1 fw-bold">Email address</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control"
                                        placeholder="Email Address" />
                                </div>

                                <div class="form-group mb-3">
                                    <label class="mb-1 fw-bold">Password</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control"
                                        placeholder="Password" />
                                </div>

                                <button type="submit" class="btn btn-sm btn-primary">SAVE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}