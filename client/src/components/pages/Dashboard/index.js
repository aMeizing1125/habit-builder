import React, { Component } from 'react';

// Importing API calls
import API from 'utils/API';

// Importing components
import ColumnButtons from 'components/dumb/ColumnButtons';
import Navbar from 'components/dumb/Navbar';

// Importing Dashboard Pages
import Habits from 'components/pages/Dashboard/DashboardPages/Habits';
import Todo from 'components/pages/Dashboard/DashboardPages/Todo';
import Skills from 'components/pages/Dashboard/DashboardPages/Skills';

// Importing Component CSS
import './Dashboard.css';

class Dashboard extends Component{
    state = {
        redirect: false,
        username: ""
    };

    componentDidMount(){
        window.scrollTo(0, 0);
        console.log("Request parameters:");
        console.log(this.props.match.params);

        const uid = sessionStorage.getItem("habit-uid");

        if(uid){
            console.log("Uid: " + uid);
            API.findUser({
                _id: uid
            })
            .then(res => {
                this.setState({
                    username: res.data.username,
                    uid: res.data._id
                }, function(){
                    console.log("User in state: ")
                    console.log(this.state.username);
                })
            })
        }
        else{
            console.log("User is not signed in");
            window.location.assign('/');
        }
    }

    renderPage = () => {
        if (this.props.match.params.page === "habits"){
            return <Habits uid={this.state.uid}/>
        }
        if (this.props.match.params.page === "todo"){
            return <Todo uid={this.state.uid}/>
        }
        if (this.props.match.params.page === "skills"){
            return <Skills uid={this.state.uid}/>
        }
    }

    render(){
        return(
            <div className="grid">
                <Navbar username={this.state.username}/>
                <div className="nav-spacer"></div>
                <div className="left-panel">
                    <ColumnButtons />
                </div>
                <div className="page">
                    <div className="page-title">{this.props.match.params.page}</div>
                    <div className="page-content">
                       {this.renderPage()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;