import axios from 'axios';
import '../src/dal/services/userService'

export default {
    getUsers: function(){
        return axios.get('/users');
    },
    postUser: function(){
        return axios.post('/user');
    }
};