import React from 'react'

export default function Register() {
    return (
        <div>
            <h1>Register a new Account</h1>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Phone number</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone number"/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Gender :     </label>
                    <input type="radio"  name="gender" value="Male" />Male
                    <input type="radio"  name="gender" value="Female"/>Female
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Address</label>
                    <input type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Address"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
