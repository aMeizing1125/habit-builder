import axios from 'axios';

const API = {
    testing: function(){
        return axios.get("/api/testing");
    },
    addUser: function(user){
        return axios.post("/api/newuser", user);
    },
    findUser: function(query){
        return(axios.post("/api/findUserByQuery", query));
    }
}

export default API;