import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './UserInfo.css'

const UserInfo = (props) => {
    const { full_name, manufacture, email, image, salary, country } = props.user
    console.log(props.user)
    const element = <FontAwesomeIcon icon={faPlus} />

    return (
        <div className="col mt-5 ps-5">
            <div className="card h-100 card-style">
                <img src={image} className="card-img-top card-img mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary">Full-Name: {full_name}</h5>
                    <p className="card-text">Manufacture: {manufacture}</p>
                    <p className="card-text">Company e-mail: {email}</p>
                    <h3 className="card-text">Price: ${salary}</h3>
                    <p className="card-text">Country: {country}</p>

                </div>
                <div className="card btn-card">
                    <button onClick={() => props.handleAddToCart(props.user)} type="button" className="btn btn-primary mx-auto rounded-circle">{element}</button>
                </div>
            </div>
        </div>




    );
};

export default UserInfo;