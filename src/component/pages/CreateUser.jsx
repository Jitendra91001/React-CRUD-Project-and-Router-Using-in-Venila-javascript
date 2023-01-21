import React from "react";
import { route, redirect } from '../../Router'
export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            mobile: "",
            city: "",
            address: "",
            users: [],
            msg: "",
        }
    }
    render() {
        return (
            <>
                <div className="row justify-content-center m-2">
                    <div className="col-sm-4"><span className="success">{this.state.msg}</span></div>
                    <div className="col-sm-4 bg-light p-4">
                        <h1 className="text-center">Register Here..</h1>
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
                                <button type="button" className="btn1 btn-warning mb-3" onClick={this.saveData}>Submit</button>
                            </center>
                        </form>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </>
        );
    }

    saveData = () => {
        const url = 'http://localhost:5000/users/';
        let newData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            city: this.state.city,
            address: this.state.address
        }
        let promise = fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(newData)
        })
        promise.then((response) => {
            if (response.ok) {
                this.setState({
                    name: "",
                    email: "",
                    mobile: "",
                    city: "",
                    address: "",
                    msg: "User created successfully",
                });

                let ID1 = setTimeout(() => {
                    this.setState({
                        msg: ""
                    })
                }, 5000)
                return redirect('showuser')
            }
        }).then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error)
            this.setState({
                name: "",
                email: "",
                mobile: "",
                city: "",
                address: "",
                msg: <span className="error">Oops Try again later...</span>
            });

            let ID1 = setTimeout(() => {
                this.setState({
                    msg: ""
                })
            }, 5000)
        })
    }
}