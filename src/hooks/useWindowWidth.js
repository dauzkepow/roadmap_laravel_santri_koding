//14. Custom Hook
//- membuat custom hook untuk lebar jendela window
import { useState, useEffect } from "react";

//hook useWindowsWidth menyimpan state width
function useWindowWidth() {
    const [width, setwidth] = useState(window.innerWidth);

    //saat ukuran jendela berubah, state diperbarui
    useEffect(() => {
        const handleRezise = () => setwidth(window.innerWidth);

        window.addEventListener("resize", handleRezise);

        //clean-up saat component di-unmount
        return () => window.removeEventListener("resize", handleRezise);
    }, []);

    //hook mengembalikan nilai width agar bisa dipakai di component lain
    return width;
}

export default useWindowWidth;