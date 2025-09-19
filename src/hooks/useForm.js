//13. Custom hook dengan state lebih kompleks
//bisa mengelola logika form agar tidak ditulis berulang

import { useState } from "react";

//useForm = simpan state untuk input form
function useForm(initialValues) {
    const [values, setvalues] = useState(initialValues);

    //handleChange = update nilai form sesuai input
    const handleChange = (e) => {
        setvalues({...values, [e.target.name]: e.target.value});
    };

    //resetForm = mengembalikan nilai ke kondisi awal
    const resetForm = () => {
        setvalues(initialValues);
    };

    //kembalikan nilai agar bisa dipakai di component lain
    return { values, handleChange, resetForm };
}

export default useForm;