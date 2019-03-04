/**
 * Created by Mayrc on 03/03/2019.
 */
import axios from "axios";

const api = axios.create({
   baseURL: 'http://localhost/laravel2-versao3/api'
});

export default api;