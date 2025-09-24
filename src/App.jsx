//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

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

/*
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
*/

//8. List & Keys
/*
//- List dengan map()
function App() {
  //buat array names
  const names = ["Budi", "Siti", "Andi", "Dewi"];

  //map() untuk mengubah setiap item array menjadi elemen <li>
  return (
    <div>
      <h1>Daftar Nama:</h1>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
} 

export default App;
*/

/*
//- Key pada List = membedakan satu elemen dengan lainnya, update UI efisien
//jika punya id unik gunakan id sebagai key, bukan index agar lebih aman ketika
//data berubah
function App() {
  const names = ["Budi", "Siti", "Andi", "Dewi"];

  //tambah attribut key pada elemen <li>
  //menggunakan index dari map() sebagai key
  return (
    <div>
      <h1>Daftar Nama:</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
} 

export default App;
*/

/*
//- List dengan Object = data lebih kompleks dengan object
function App() {
  const users = [
    { id: 1, name: "Budi", age: 20 },
    { id: 2, name: "Siti", age: 22 },
    { id: 3, name: "Andi", age: 19 },
  ];

  //List menampilkan nama dan umur dari setiap user
  //user.id sebagai key karena setiap user memiliki id yang unik
  return (
    <div>
      <h1>Daftar User:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tahun
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/

/*
//- List dengan Component Terpisah = component terpisah untuk setiap item list
//agar lebih rapi

//component Useritem
//data dikirim lewat props name dan age
function  UserItem({name, age}) {
  return (
    <li>
      {name} - {age} tahun
    </li>
  );
}

function App() {
  const users = [
    { id: 1, name: "Budi", age: 20 },
    { id: 2, name: "Siti", age: 22 },
    { id: 3, name: "Andi", age: 19 },
  ];

  //key diberikan di elemen list pada UserItem
  return (
    <div>
      <h1>Daftar User:</h1>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} name={user.age} age={user.age} />
        ))}
      </ul>
    </div>
  );
}

export default App;
*/


//9. Form

/*
//- Controlled Component = setiap input form selalu terhubung dengan state
import { useState } from 'react';

function App() {
  //state name simpan nilai input
  const [name, setname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //mencegah reload halaman
    alert(`Nama ${name}`);
  };

  return (
    //saat submit bisa langsung menggunakan nilai dari state
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        value={name} //input selalu mengikuti state
        onChange={(e) => setname(e.target.value)} //update state saat ketik
        placeholder='Masukkan Nama..,'
      />
      <button type='submit'>Kirim</button> 
    </form>
  );
}

export default App;
*/

/*
//Uncontrolled Component = nilai input tidak disimpan di state tetapi diambil
//langsung dari DOM menggunakan ref
import { useRef } from 'react';

function App() {
  //menggunakan userRef untuk membuat referensi ke elemen input
  const nameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nama : ${nameRef.current.value}`); //nilai input diakses
  };

  //input ini tidak terikat pada state, sehingga react tidak mengontrol nilainya
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={nameRef} placeholder='Masukkan nama' />
      <button type='submit'>Kirim</button>
    </form>
  );
}

export default App;
*/
/*
//- Form dengan beberapa input = banyak input
import { useState } from 'react';

function App() {
  //simpan data form dalam state object {email, password}
  const [form, setform] = useState({email: "", password: ""});

  //event onChange menangani semua input dengan setForm()
  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value});
  };

  //mencegah reload halaman
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${form.email}, Password: ${form.password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='email'
        name='email'
        placeholder='Masukkan email..,'
        value={form.email}
        onChange={handleChange}
      />
      <input 
        type='password'
        name='password'
        placeholder='masukkan password'
        value={form.password}
        onChange={handleChange}
      />
      <br></br>
      <button type='submit'>Login</button>
    </form>
  );
}

export default App;
*/

//10. useEffect
/*
//- useEffect tanpa dependencies = jika tidak menuliskan dependencies, efek 
// akan dijalankan setiap kali component dirender ulang
import { useState, useEffect } from 'react';

function App() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log("Component dirender ulang..,");
  });

  //setiap kali klik tombol, useEffect dijalankan ulang
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setcount(count + 1)}>Tambah</button>
    </div>
  );
}

export default App;
*/

/*
//- useEffect dengan array kosong = efek hanya dijalankan sekali, saat component
//pertama kali muncul (mount)
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("Component pertama kali dimuat");
  }, []);

  return <h1>Hello React!</h1>
}

export default App;

//contoh penggunaan memanggil API hanya sekali ketika aplikasi dijalankan
*/

/*
//- useEffect dengan dependencies = efek hanya dijalankan ketika nilai
//dependecies berubah
import { useState, useEffect } from 'react';

function App() {
  const [count, setcount] = useState(0);

  //useEffect hanya berjalan ketika count berubah
  useEffect(() => {
    console.log(`Count berubah menjadi ${count}`);
  }, [count]);

  //jika ada state lain, perubahan state itu tidak memicu efek ini
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setcount(count + 1)}>Tambah</button>
    </div>
  );
}

export default App;
*/

/*
//- Membersihkan Efek (Cleanup) = perlu membersihkan efek sebelum component 
//dihapus ini bisa dilakukan dengn return function dalam useEffect
import { useEffect } from 'react';

function App() {
  //buat interval berjalan tiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval berjalan...,");
    }, 1000);

    // cleanup: dijalankan ketika component di-unmount
    return () => {
      clearInterval(interval);
      console.log("Interval dihentikan!");
    };
  }, []);

  return <h1>Lihat console untuk interval</h1>;
}

export default App;
*/


//11. useRef
/*
//- useRef untuk akses DOM = ambil referensi langsung ke elemen DOM
import { useRef } from 'react';

function App() {
  //inputRef dibuat dengan useRef()
  const inputRef = useRef();

  //menyimpan nilai yang bisa diakses
  const focusInput = () => {
    inputRef.current.focus(); //mengacu pada elemen <input>
  };

  //attribut ref={inputRef} menghubungkan input dengan ref
  //saat button diklik fingsi focusInput menjalankan .focus() pada input
  return (
    <div>
      <input type='text' ref={inputRef} placeholder='Ketik sesuatu...,' />
      <button onClick={focusInput}>Fokus ke Input</button>
    </div>
  );
}

export default App;
*/

/*
//- useRef untuk menyimpan nilai tanpa re-render
import { useState, useRef } from 'react';

function App() {
  //state count memicu re-render setiap kali berubah
  const [count, setcount] = useState(0);

  //renderCount menggunakan useRef untuk menyimpan jumlah render
  const renderCount = useRef(0);

  //nilai renderCount.current bertambah setiap kali render, tetapi tidak
  //memicu render tambahan
  renderCount.current += 1;

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setcount(count + 1)}>Tambah</button>
      <p>Component dirender sebanyak: {renderCount.current} kali</p>
    </div>
  )
}

export default App;
*/

/*
//- useRef untuk menyimpan Data sebelumnya = simpan nilai state sebelumnya
import { useState, useEffect, useRef } from 'react';


function App() {
  const [count, setcount] = useState(0);
  const prevCount = useRef();

  //simpan count lama ke prevCount.current setiap kali count berubah
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h1>Count Sekarang: {count}</h1>
      <h2>Count Sebelumnya: {prevCount.current}</h2>
      <button onClick={() => setcount(count + 2)}>Tambah</button>
    </div>
  );
}

export default App;
*/

//12. Memoization
/*
//- React.memo = component yang dibungkus React.memo hanya akan dirender ulang
//jika props-nya berubah
import React, {useState} from "react";

//component Child dibungkus dengan React.memo
//Child tidak ikut re-render karena props name tidak berubah
const Child = React.memo(({name}) => {
  console.log("Render child");
  return <h2>Halo, {name}</h2>;
});

//ketika button diklik hanya App yang re-render
function App() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <Child name="Bisma" />
      <p>Count: {count}</p>
      <button onClick={() => setcount(count + 1)}>Tambah</button>

    </div>
  );
}

export default App;
*/

/*
//- useMemo = mencegah perhitungan ulang yang berat jika dependencies tidak berubah
import { useState, useMemo } from 'react';

function App() {
  const [count, setcount] = useState(0);
  const [other, setother] = useState(false);

  //fungsi expensiveCalculation hanya dijalankan ulang jika count berubah
  const expensiveCalculation = (num) => {
    console.log("Hitung ulang...");
    for (let i = 0; i < 1000000000; i++) {} //simulasi proses berat
      return num * 2;
    };

    //jika hanya other yang berubah, hasil useMemo tetap diambil dari cache
    //aplikasi lebih efisien
    const result = useMemo(() => expensiveCalculation(count), [count]);

    return (
      <div>
        <h1>Hasil: {result}</h1>
        <button onClick={() => setcount(count + 1)}>Tambah Count</button>
        <button onClick={() => setother(!other)}>Toggle Other</button>
      </div>
    );
  }

export default App;
*/

/*
//- useCallback = mencegah referensi fungsi berubah pada setiap render
import React, { useState, useCallback } from 'react';

//component Child dibungkus React.memo sehingga hanya akan re-render jika props
//onClick berubah
const Child = React.memo(({ onClick }) => {
  console.log("Render Child");
  return <button onClick={onClick}>Klik Anak</button>
});

function App() {
  const [count, setcount] = useState(0);

  //fungsi handleClick dibungkus useCallback, sehingga referensinya tetap sama
  //selama dependencies tidak berubah
  const handleClick = useCallback(() => {
    console.log("Button diklik");
  }, []);

  //jika tidak menggunakan useCallback, maka Child akan seslalu re-render karena
  //setiap render App, fungsi handleClick dibuat ulang
  return (
    <div>
      <Child onClick={handleClick} />
      <p>Count: {count}</p>
      <button onClick={() => setcount (count + 1)}>Tambah</button>
    </div>
  );
}

export default App;
*/


//13. Context API 
/*
//- membuat context
import { createContext } from "react";

export const UserContext = createContext();
*/

/*
//- Membungkus component dengan provider
//component yang digunakan untuk membungkus bagian aplikasi yang ingin kita beri
//akses ke context

import { useState } from "react";
import { UserContext } from "./UserContext";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState({ name: "Budi", age: 20 });

  //UserContext.Provider menyediakan data user
  //semua component di dalam Provider bisa akses data user
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Aplikasi React Context</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;

*/

/*
//- Menggunakan context dengan useContext = ambil data
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
//useContext(UserContext beri akses ke data user dam bisa tampil di UI
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>Nama: {user.name}</p>
      <p>Umur: {user.age}</p>
    </div>
  );
}

export default Profile;
*/

/*
//- Context dengan beberapa value = kirim lebih dari satu nilai melalui context
//misalnya data dan fungsi untuk mengubah data
import { useState } from "react";
import { UserContext } from "./UserContext";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState({ name: "Budi", age: 20 });

  //kirim user dan setUser lewat Provider
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>Aplikasi React Context</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;

pada Profile.jsx :
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  //bisa membaca sekaligus mengubah data user
  return (
    <div>
      <h2>Profile</h2>
      <p>Nama: {user.name}</p>
      <p>Umur: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Tambah Umur
      </button>
    </div>
  );
}

export default Profile;

*/


//14. Custom Hook
/*
//- menggunakan custom hook

//panggil useWindowWidth()
import useWindowWidth from './hooks/useWindowWidth';

function App() {
  //hook tersebut mengembalikan lebar jedela saat ini
  //UI otomatis ter-update ketika jendela di-rezise
  const width = useWindowWidth();

  return (
    <div>
      <h1>Lebar Jendela: {width}px</h1>
    </div>
  );
}

export default App;
*/

/*
//- Custom hook dengan state lebih kompleks
import useForm from './hooks/useForm';


function App() {
  //teknik destructuring
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  
  //mengendalikan form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${values.email}, Password: ${values.password}`);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder='Email'
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder='Password'
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default App;
*/

//15. Styles
/*
//- inline style = menambahkan style langsung ke elemen dengan atribut style
function App() {
  //style menerima object Javascript
  //nama properti CSS menggunakan camelCase, fontSize
  return (
    <div>
      <h1 style={{color: "blue", fontSize: "24px"}}>
        Halo, ini teks berwarna biru
      </h1>
    </div>
  );
}

export default App;
*/

/*
//- css eksternal = style di file terpisah

//buat class .title di file App.css
//lalu panggil di file ini dengan atribut className - App.jsx

import "./App.css";

function App() {
  return <h1 className="title">Halo, ini teks warna merah</h1>;
}

export default App;
*/

/*
//- CSS Module = style terisolasi, tidak bentrok antar component
//buat file App.module.css dan masukkan parameter .title
//panggil di file ini App.jsx
//css modules memberi nama unik otomatis untuk tiap class
//mencegah konflik dengan style di file lain
import style from "./App.module.css";

function App() {
  return <h1 className={style.title}>Halo, ini teks warna hijau</h1>
}

export default App;
*/

/*
//- menggunakan library styling = library pihak ketiga
//tailwind CSS = utility first CSS framework
//styled components = css-in-JS menulis style langsung di file javascript
//cakra UI / Material UI = library UI dengan component siap pakai

//contoh dengan styled-components = npm install styled-components
import styled from "styled-components";

const Title = styled.h1`
  color: purple;
  text-decoration: underline;
`;

function App() {
  return <Title>Halo, ini teks berwarna ungu</Title>;
}

export default App;
*/


//16. Class dan Dynamic Class
/*
//- menambahkan class biasa
import "./App.css";

//react menggunakan className karena class adalah keyword di Javascript
//menulis css seperti biasa di file .css
function App() {
  return <h1 className="title">Halo, React!</h1>;
}

export default App;
*/

/*
//- menambahkan class secara dinamis = gunakan ternary operator
import { useState } from "react";
import "./App.css";

function App() {
  const [isActive, setisActive] = useState(false);

  //jika isActive true, class active dipakai
  //jika false, maka class inactive dipakai
  //button akan mengubah state sehingga class berganti
  return (
    <div>
      <h1 className={isActive ? "active" : "inactive"}>Halo, React!!</h1>
      <button onClick={() => setisActive(!isActive)}>
        Toogle Class
      </button>
    </div>
  );
}

export default App;
*/

/*
//- Template Literal = elemen membutuhkan lebih dari satu class
import "./App.css";
function App() {
  const isDark = true;

  //class dasar box selalu ada
  //class tambahan dark atau light ditambahkan sesuai kondisi
  return (
    <div className={`box ${isDark ? "dark" : "light"}`}>
      Mode Tampilan
    </div>
  );
}

export default App;
*/

//- Library clsx (opsional) = kondisi class yang lebih kompleks
// npm install clsx

import clsx from "clsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [active, setactive] = useState(false);

  //clsx memudahkan pengelolaan class dengan kondisi
  //bisa menuliskan objek {active: true, inactive: false} untuk menentukan class
  //yang dipakai
  return (
    <div>
      <h1 className={clsx("title", {active: active, inactive: !active})}>
        Halo, React!
      </h1>
      <button onClick={() => setactive(!active)}>Toggle Class</button>
    </div>
  );
}

export default App;