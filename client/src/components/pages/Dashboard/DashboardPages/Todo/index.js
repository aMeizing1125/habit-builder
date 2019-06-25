import React, { Component } from 'react';

// Importing packages
import moment from 'moment';

// Importing utilities
import API from 'utils/API';

// Importing component CSS
import './Todo.css';

class Todo extends Component {
    state = {
        allTasks: [],
        task: ""
    };

    componentDidMount(){
        console.log("Todo page did mount");

        this.findAllTasks();
    }

    findAllTasks = () => {
        console.log("Inside findAllTasks");

        const uid = localStorage.getItem("habit-uid");

        API.allTasks(uid)
            .then(res => {
                console.log(res.data);
                this.setState({
                    allTasks: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        }, function(){
            console.log(this.state.task)
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const task = {    
            name: this.state.task,
            created: moment().format(),
            complete: false,
        }

        API.newTask(this.props.uid, task)
            .then(res => {
                console.log(res.data)
                const joined = this.state.allTasks.concat(res.data);
                this.setState({
                    allTasks: joined,
                    task: ""
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

    handleCheckBox = event => {

        console.log("is item checked? " );
        console.log(event.target.checked);

        if(event.target.checked){
            API.updateTask(event.target.value, { complete: true })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            });
        }
        else{
            API.updateTask(event.target.value, { complete: false })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            });
        }

    };

    deleteListItem = event => {
        console.log(event.target.value)

        API.deleteTask(event.target.value)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
        this.setState({
            allTasks: this.state.allTasks.filter(item => item._id !== event.target.value)
        })
    };

    render(){
        return(
            <div className="todo-page">
                <form className="new-item">
                    <button 
                        className="todo-submit" 
                        type="submit"
                        onClick={this.handleFormSubmit}
                    >
                        +
                    </button>
                    <input 
                        className="todo-input" 
                        type="text" 
                        placeholder="Add an item"
                        value={this.state.task}
                        onChange={this.handleInputChange}
                        name="task"
                    >
                    </input>
                </form>

                {this.state.allTasks.length === 0 ? null : 
                    <table className="todo-list">
                        <tbody className="list-content">
                            {this.state.allTasks.map(item => {
                                return (
                                    <tr className="list-row" key={item._id}>
                                        <td className="list-check">
                                            <input 
                                                className="checkbox" 
                                                type="checkbox"
                                                value={item._id}
                                                onClick={this.handleCheckBox}
                                                defaultChecked={item.complete === true ? true : false}
                                            />
                                        </td>
                                        <td className="list-item">
                                            {item.name}
                                        </td>
                                        <td className="list-delete">
                                            <button 
                                                className="delete-button hide"
                                                onClick={this.deleteListItem}
                                                value={item._id}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

export default Todo;