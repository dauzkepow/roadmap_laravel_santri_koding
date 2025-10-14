//import React dan hooks crateContext, useState, useEffect
import React, { createContext, useState, useEffect } from 'react';

//import Cookies dari 'js-cookie' untuk mengelola cookies
import Cookies from 'js-cookie';

//membuat context untuk menyimpan status otentikasi
export const AuthContext = createContext();

