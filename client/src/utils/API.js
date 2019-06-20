import axios from 'axios';

const API = {
    testing: function(){
        return axios.get("/api/testing");
    },
    addUser: function(user){
        return axios.post("/api/newuser", user);
    },
    findUser: function(query){
        return axios.post("/api/findUserByQuery", query);
    },
    addHabit: function(habit, uid){
        return axios.post("/api/addhabit/" + uid, habit);
    },
    findHabits: function(uid){
        return axios.get("/api/userhabits/" + uid);
    }
}

export default API;