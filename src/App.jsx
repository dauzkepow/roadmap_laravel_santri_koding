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
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurangi</button>

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
