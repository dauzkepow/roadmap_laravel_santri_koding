//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

/*
//2. JSX

//menulis JSX dasar
const name = "Daus Kepow";

function App() {
  return (
    <div>
      <h1>Hello, {name} React</h1>
      <p>Belajar JSX itu menyenangkan!!</p>
    </div>
  );
}

export default App;


//menyisipkan ekspresi Javascript dengan { }
*/

/*
//3. Component

//buat component Welcome
function Welcome() {
  return <h1>Halo, ini adalah component Welcome</h1>;
}

function Nama() {
  return <h4>Nama Saya Daus</h4>
}

//import component dari file lain
import Header from './components/Header';

//Component Welcome digunakan dalam component App
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Header />
      <Nama />
    </div>
  );
}

export default App;
*/

/*
//4. Props
//mengirim props bernama name ke component Welcome
function Welcome(props) {
  return <h1>Halo, {props.name}</h1> //pakai {props.name}
}

function UserCard(props1) {
  return (
    <div>
      <h2>{props1.name}</h2>
      <p>Umur: {props1.age}</p>
    </div>
  );
}

//destructuring
//agar tidak perlu menulis props.name berkali-kali
function Data ({nama, umur, alamat, status}) {
  return (
    <>
      <h4>{nama}</h4>
      <h4>Umur: {umur}</h4>
      <h4>{alamat}</h4>
      <h4>{status}</h4>
    </>
    
  );
}

function App() {
  return (
    //masukkan data props agar bisa ditampilkan ke Welcome()
    <>
      <Welcome name="Daus" />
      <Welcome name="Ajeng" />
      <Welcome name="Bisma" />
      <UserCard name="Bismun" age={3} />
      <Data nama="Satria" umur={5} alamat="Cemani" status="Anak"/>
    
      
    </>
  );
}

export default App;
*/

/*
//5. state & useState
//state = nilai awal
//setState = mengubah nilai state
//const [state, setState] = useState(initialValue);

//contoh menampilkan teks dan mengubahnya saat tombol ditekan
import { useState } from 'react';

function App() {
  //inisialisasi state
  const [message, setMessage] = useState("Halo, React!");
  const [count, setCount] = useState(0); //nilai awal 0

  //state todos menyimpan array berisi string
  const [todos, setTodos] = useState(["Belajar React", "Belajar JSX"]);
  //fungsi addTodo menambahkan item baru ke dalam array menggunakan 
  //spread operator (...)
  const addTodo = () => {
    setTodos([...todos, "Belajar State"]);
  }

  //daftar todo ditampilkan menggunakan .map()

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("State telah berubah!")}>
        Ubah Pesan
      </button>

      <br></br>
      
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Kurangi</button>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      

      <br></br>
      <h1>Belajar Todo:</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Tambah Todo</button>
    </div>
  );
}

export default App;
*/

//6. Event Handling
/*
//- onClick = klik tombol
function App() {
  //buat fungsi handleClick
  const handleClick = () => {
    alert("Tombol di klik!");
  };

  //dipanggil ketika tombol diklik menggunakan onClick
  return (
    <div>
      <button onClick={handleClick}>Klik saya</button>
    </div>
  );
}

export default App;
*/

/*
//- onChange (input) = menangani perubahan nilai pada input
import { useState } from "react";

function App() {
  //state name untuk simpan nilai input
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  //saat user mengetik, event onChange menangkap nilainya melalui event.target.value
  //nilai disimpan ke state dan langsung ditampilkan di UI
  return (
    <div>
      <input type='text' placeholder='Ketik nama...' onChange={handleChange} />
      <p>Halo, {name}</p>
    </div>
  );
}

export default App;
*/

/*
//- onSubmit (form) = menangani proses pengiriman data
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  //fungsi handleSubmit dipanggil saat button submit ditekan
  const handleSubmit = (event) => {
    event.preventDefault(); //mencegah reload halaman
    alert(`Email dikirim ${email}`);
  };

  //nilai input email diambil dari state
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='Masukkan email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit'>Kirim</button>
    </form>
  );
}

export default App;
*/

/*
//- Event dengan Parameter = kadang butuh mengirim parameter ke fungsi lain
function App() {
  const sayHello = (name) => {
    alert(`Halo, ${name}!`);
  };

  //menggunakan arrow function di dalam onClick agar bisa kirim parameter
  //ke fungsi lain
  return (
    <div>
      <button onClick={() => sayHello("Daus")}>Sapa Daus</button>
      <button onClick={() => sayHello("Bisma")}>Sapa Bisma</button>
    </div>
  );
}

export default App;
*/

//7. Conditional Rendering 
/*
//- if/else
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Selamat datang kembali!!</h1>;
  } else {
    return <h1>Silakan login terlebih dahulu</h1>;
  }
}

export default App;
*/

/*
//- operator ternary
function App() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <h1>Dashboard</h1> : <h1>Login Page</h1>}
    </div>
  );
}

export default App;
*/

/*
//- operator && = menampilkan elemen jika kondisi true tanpa ada alternatif
function App() {
  const showMessage = true;

  return (
    <div>
      <h1>Halo, React!</h1>
      {showMessage && <p>Pesan ini hanya muncul jika showMessage = true</p>}
    </div>
  );
}

export default App;
*/


//- conditional rendering dengan state = gabungkan dengan state
import { useState } from "react";

function App() {
  //state isLoggedIn menyimpan status Login
  const [isLoggedIn, setisLoggedIn] = useState(false);
  //jika true, teks selamat datang, button logout
  //jika false, tampil pesan login, button login
  return (
    <div>
      {isLoggedIn ? (
        <h1>Selamat Datang kembali !</h1>
      ) : (
        <h1>Silakan login terlebih dahulu.</h1>
      )}

      <button onClick={() => setisLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;