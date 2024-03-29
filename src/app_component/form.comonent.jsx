import React from 'react';
import "./form.style.css";


const Form = props => {
    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadweather}>
                <div className="row txt">
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="city" placeholder="City" autoComplete="off" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="country" placeholder="Country" autoComplete="off" />
                    </div>
                    <div className="col-md-3 py-2">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
            <footer>
                <p className="foot">All Copyright© Rights Reserved By Arvind Singh || React Developer</p>
            </footer>
        </div>
    )
}

function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country Name
        </div>
    )
}

export default Form;