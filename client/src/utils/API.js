import axios from 'axios';

const API = {
    addUser: function(user){
        console.log("Inside addUser()");
        console.log(user);
        return axios.post("/api/newuser", user);
    },
    findUser: function(credentials){
        return axios.post("/api/user", credentials);
    },
    addHabit: function(id, habit){
        return axios.post("/api/addhabit/" + id, habit);
    },
    findHabits: function(uid){
        return axios.get("/api/userhabits/" + uid);
    },
    checkIn: function(id, timestamp){
        return axios.post("/api/checkin/" + id, { timestamp });
    },
    newTask: function(id, task){
        return axios.post("/api/newtodo/" + id, task);
    },
    allTasks: function(id){
        return axios.get("/api/todo/" + id);
    },
    updateTask: function(id, update){
        return axios.put("/api/updatetodo/" + id, update);
    },
    deleteTask: function(id){
        return axios.delete("/api/removetodo/" + id);
    }
}

export default API;