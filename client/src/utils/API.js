import axios from 'axios';

const API = {
    addUser: function(user){
        return axios.post("/api/newuser", user);
    },
    findUser: function(query){
        return axios.post("/api/findUserByQuery", query);
    },
    addHabit: function(id, habit){
        return axios.post("/api/addhabit/" + id, habit);
    },
    findHabits: function(uid){
        return axios.get("/api/userhabits/" + uid);
    },
    checkIn: function(id, timestamp){
        return axios.post("/api/checkin/" + id, { timestamp });
    }
}

export default API;