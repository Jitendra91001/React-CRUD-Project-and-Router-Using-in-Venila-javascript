import React from "react";
import { route, redirect } from '../../Router'

export default class ShowUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            mobile: "",
            city: "",
            address: "",
            users: [],
            msg:""
        }
    }
    componentDidMount() {
        const url = "http://localhost:5000/users/";

        let promise = fetch(url);
        promise.then((response) => {
            return response.json()

        }).then((data) => {
            if (Array.isArray(data)) {
                this.setState({
                    users: data
                })
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    Deletedata = (id,index) => {
        if (window.confirm("Are you sure to delete")) {
            let promise=fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE"

            })
            promise.then((resp)=>{
                if(resp.ok)
                {
                   let usersData=[...this.state.users]
                   usersData.splice(index,1);
                    this.setState({
                        users:usersData,
                        msg:<div className="alert alert-danger">Users Deleted successfully</div>
                    })
                }
            })
            promise.then((data)=>{
                console.log(data)
            });
            redirect('showuser')
        }
    }
    EditUser=(id)=>{
        return redirect('edituser/'+id);
      }
renderData(){
    let data = this.state.users
    return data.map((item, index) => {
        return (
            <>
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.city}</td>
                    <td>{item.address}</td>
                    <td><button type="button" onClick={()=>{this.EditUser(item.id)}} className="btn btn-success btn-sm">Edit</button>
                        <button type="button" onClick={() => { this.Deletedata(item.id,index) }} className="btn btn-danger btn-sm ms-2">Delete</button></td>
                </tr>
            </>
        );
    })
}
render(){
    return (
        <>
            <div className="row">
               {this.state.msg}
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <h2 className="text-center bg-success rounded p-2 text-uppercase fw-bold text-white mt-2">Show Users</h2>
                    <table className="table table-hover table table-striped">
                        <thead className="fw-bold">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>City</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderData()}
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </>
    );
}
}
