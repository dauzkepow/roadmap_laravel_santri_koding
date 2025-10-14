import axios from 'axios'; //import axios

//buat object dari axios untuk definisikan baseURL
const Api = axios.create({
    baseURL: "http://localhost:3000" //set default endpoint API
});

export default Api
