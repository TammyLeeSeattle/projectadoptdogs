import axios from 'axios';
// import '../src/dal/services/userService'

export default {
    getUsers: function(){
        return axios.get('/users');
    },
    postUser: function(input){
        console.log('api input', input)
        return axios.post('http://localhost:3001/api/userprofile/user',input);
        
    }
};