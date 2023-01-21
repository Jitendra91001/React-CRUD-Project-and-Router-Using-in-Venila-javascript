import React from "react";
import { redirect } from '../../Router'
export default class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            mobile: "",
            city: "",
            address: "",
            users: []
        }
    }
    render() {
        return (
            <>
                <div className="row justify-content-center m-2">
                    <div className="col-sm-4"><span className="success">{this.state.msg}</span></div>
                    <div className="col-sm-4 bg-light p-4">
                        <h1 className="text-center">Update User...</h1>
                        <form>
                            Name:
                            <div className="input-group mb-3">
                                <i className="input-group-text"><i class="fa-solid fa-user"></i></i>
                                <input type="text" name="name" className="form-control" placeholder="Enter your name "
                                    value={this.state.name}
                                    onChange={(event) => { this.setState({ name: event.target.value }) }} />
                            </div>

                            Email:
                            <div className="input-group mb-3">
                                <i className="input-group-text"><i class="fa-solid fa-envelope"></i></i>
                                <input type="email" name="email" className="form-control" placeholder="Enter your email"
                                    value={this.state.email}
                                    onChange={(event) => { this.setState({ email: event.target.value }) }} />
                            </div>

                            Mobile:
                            <div className="input-group mb-3">
                                <i className="input-group-text"><i class="fa-solid fa-user"></i></i>
                                <input type="text" pattern="[0-9]{10}" name="mobile" className="form-control" placeholder="Enter your mobile no"
                                    value={this.state.mobile}
                                    onChange={(event) => { this.setState({ mobile: event.target.value }) }} />
                            </div>

                            City:
                            <div className="input-group mb-3">
                                <i className="input-group-text"><i class="fa-solid fa-user"></i></i>
                                <input type="text" name="city" className="form-control" placeholder="Enter your city "
                                    value={this.state.city}
                                    onChange={(event) => { this.setState({ city: event.target.value }) }} />

                            </div>

                            Address:
                            <div className="input-group mb-3">
                                <i className="input-group-text"><i class="fa-solid fa-user"></i></i>
                                <input type="text" name="address" className="form-control" placeholder="Enter your address"
                                    value={this.state.address}
                                    onChange={(event) => { this.setState({ address: event.target.value }) }} />
                            </div>
                            <center>
                                <button type="button" className="btn1 btn-warning mb-3" onClick={this.updateData}>Update</button>
                            </center>
                        </form>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </>
        );
    }
    componentDidMount(){
        let id=this.props.userid
        const url = 'http://localhost:5000/users/'+id
        let promise = fetch(url)
        promise.then((response)=>{
           if(response.ok)
           {
            return response.json()
           }
        }).then((data)=>{
            this.setState({
                name:data.name,
                email:data.email,
                mobile:data.mobile,
                city:data.city,
                address:data.address
            })
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    updateData=()=>{
        let id=this.props.userid
        const url="http://localhost:5000/users/"+id
       let updateUser={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            city:this.state.city,
            address:this.state.address
        }
        console.log(updateUser)
        fetch(url,{
            headers:{
                "Content-Type":"application/json" 
            }, 
            method:"PUT",
            body:JSON.stringify(updateUser)
        }).then((response)=>{
            if(response.ok)
               {
                return redirect('showuser')
               }
            return response.json()
        }).then((data)=>{
           console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
    }
}