//buat AuthContext, cek status otentikasi sudah login atau belum

//import React dan hooks crateContext, useState, useEffect
import React, { createContext, useState, useEffect } from 'react';

//import Cookies dari 'js-cookie' untuk mengelola cookies
import Cookies from 'js-cookie';

//membuat context untuk menyimpan status otentikasi
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

//membuat provider otentikasi dengan menggunakan context yang dibuat sebelumnya
export const AuthProvider = ({ children }) => {
    //useState untuk simpan status otentikasi berdasarkan token di cookies
    const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('token'));

    //useEffect untuk memantau perubahan pada token di cookies
    useEffect(() => {
      //fungsi handleTokenChange untuk memperbarui status otentikasi ketika token di cookies berubah
      const handleTokenChange = () => {
        setIsAuthenticated(!!Cookies.get('token'));
      };

      //tambahn event Listener pada storage untuk memantau perubahan token
      window.addEventListener('storage', handleTokenChange);
    
      //mengembalikan fungsi yang dipanggil saat komponen di-unmount untuk bersihkan event listener
      return () => {
        window.removeEventListener('storage', handleTokenChange);
      };
    }, []);

    //kembalikan provider dengan nilai isAuthenticated dan setisAuthenticated yang diperoleh dari useState
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            { children }
        </AuthContext.Provider>
    );
    
};

