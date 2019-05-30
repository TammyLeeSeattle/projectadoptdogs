import axios from 'axios';
// import '../src/dal/services/userService'

export default {
    getUsers: function(){
        return axios.get('/users');
    },
    postUser: function(input){
        return axios.post('/api/userprofile/user',input);
        console.log('api input', input)
    }
};