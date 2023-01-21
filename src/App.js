import React from "react";
import Footer from "./component/pages/Footer";
import Header from "./component/pages/Header";
import Navbar from "./component/pages/Navbar";
import './App.css';
import CreateUser from "./component/pages/CreateUser";
import ShowUser from "./component/pages/ShowUser";
import {redirect, route} from "./Router"
import Login from "./component/pages/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import EditUser from "./component/pages/EditUser";
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.id=window.localStorage.getItem('hash').split("/")[1]
        //this.state.views={
           this.views={
                createUser:<CreateUser/>,
                showuser:<ShowUser/>,
                login:<Login/>,
                ["edituser/"+this.id]:<EditUser userid={this.id}/>   
           }
      //  }
        
    }
   

    renderview(){
        return this.views[route];
    }
   
    render(){
        return (
            <>
            <div className="container-fluid">
                <Header/>
                <Navbar/>
                {this.renderview()}
                <Footer/>
            </div>
            </>
        );
    }
}