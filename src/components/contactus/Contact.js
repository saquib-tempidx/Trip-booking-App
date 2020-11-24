import React from 'react'

export default function Contact() {
    return (
        <div>
            <h3>Have any Queries? Drop your details. We'll contact you</h3>
            <img src="/logo.png" alt="logo" style={{borderRadius: "0"}}/>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Phone number</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone number"/>
                    
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
