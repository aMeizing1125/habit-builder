import React, { Component } from 'react';

// Importing component CSS
import './Todo.css';

class Todo extends Component {
    state = {
        task: ""
    };

    componentDidMount(){
        console.log("Todo page did mount");
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

        console.log("New task: " + this.state.task);
    }

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
                        value={this.state.value}
                        onChange={this.handleInputChange}
                        name="task"
                    >
                    </input>
                </form>

                <table className="todo-list">
                    <tbody className="list-content">
                        <tr className="list-row">
                            <td className="list-check">
                                <input className="checkbox" type="checkbox"></input>
                            </td>
                            <td className="list-item">Go for a walk</td>
                        </tr>
                        <tr className="list-row">
                            <td className="list-check">
                                <input className="checkbox" type="checkbox"></input>
                            </td>
                            <td className="list-item">Go for a walk</td>
                        </tr>
                        <tr className="list-row">
                            <td className="list-check">
                                <input className="checkbox" type="checkbox"></input>
                            </td>
                            <td className="list-item">Go for a walk</td>
                        </tr>
                        <tr className="list-row">
                            <td className="list-check">
                                <input className="checkbox" type="checkbox"></input>
                            </td>
                            <td className="list-item">Go for a walk</td>
                        </tr>
                        <tr className="list-row">
                            <td className="list-check">
                                <input className="checkbox" type="checkbox"></input>
                            </td>
                            <td className="list-item">Go for a walk</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Todo;