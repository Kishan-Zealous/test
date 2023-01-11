import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate()
    const [massage, setMassage] = useState("")
    const [userDetails, setUserDetails] = useState({
        email: '',
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        city: '',
        street: '',
        number: null,
        zipcode: '',
        lat: '',
        long: '',
        phone: '',
    })


    function onChangeHandler(e) {
        const { name, value } = e.target;

        setUserDetails((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    console.log(userDetails)
    function signupFormHandler(e) {
        e.preventDefault();
        let obj = {
            email: userDetails.email,
            username: userDetails.username,
            password: userDetails.password,
            name: {
                firstname: userDetails.firstname,
                lastname: userDetails.lastname
            },
            address: {
                city: userDetails.city,
                street: userDetails.street,
                number: userDetails.number,
                zipcode: userDetails.zipcode,
                geolocation: {
                    lat: userDetails.lat,
                    long: userDetails.long
                }
            },
            phone: userDetails.phone
        }
        fetch('http://localhost:8765/users', {
            method: "POST",
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(json => navigate("/login"))
        
    }
    return (
        <div className='container'>
            <div className='signup width-80'>
                <h4>{massage}</h4>
                <h1>Signup</h1>
                <form className='signup-form' onSubmit={signupFormHandler}>
                    <div className='persional-info'>
                        <h2>Personal Information</h2>
                        <div className='input-container'>
                            <div className='form-inputs'>
                                <label>First name</label>
                                <input type="text" name="firstname" required placeholder='first name' value={userDetails.firstname} onChange={onChangeHandler} />
                            </div>
                            <div className='form-inputs'>
                                <label>Last name</label>
                                <input type="text" name="lastname" required placeholder='Last name' value={userDetails.lastname} onChange={onChangeHandler} />
                            </div>
                        </div>
                        <div className='input-container'>
                            <div className='form-inputs'>
                                <label>Email</label>
                                <input type="email" name="email" required placeholder='Enter Email' value={userDetails.email} onChange={onChangeHandler} />
                            </div>
                        </div>
                        <div className='input-container'>
                            <div className='form-inputs'>
                                <label>User name</label>
                                <input type="text" name="username" required placeholder='Enter Username' value={userDetails.username} onChange={onChangeHandler} />
                            </div>
                        </div>

                        <div className='input-container'>
                            <div className='form-inputs'>
                                <label>Password</label>
                                <input type="password" name="password" required placeholder='Enter password' value={userDetails.password} onChange={onChangeHandler} />
                            </div>
                            <div className='form-inputs'>
                                <label>Confirm password</label>
                                <input type="password" required placeholder='Enter confirm pasword' />
                            </div>
                        </div>
                        <div className='input-container'>
                            <div className='form-inputs'>
                                <label>Contact number</label>
                                <input type="text" name="phone" required placeholder='Enter contact number' value={userDetails.phone} onChange={onChangeHandler} />
                            </div>
                        </div>
                    </div>
                    <div className='address'>
                        <h2>Adderss</h2>
                        <div className='input-container'>
                            <div className='form-inputs'>
                                <label>House number</label>
                                <input type="number" name="number" required placeholder='Enter house number' value={userDetails.number} onChange={onChangeHandler} />
                            </div>
                            <div className='form-inputs'>
                                <label>Street</label>
                                <input type="text" name="street" required placeholder='Enter street name' value={userDetails.street} onChange={onChangeHandler} />
                            </div>
                        </div>
                        <div className='input-container'>
                            <div className='form-inputs'>
                                <label>City</label>
                                <input type="text" name="city" required placeholder='Enter city' value={userDetails.city} onChange={onChangeHandler} />
                            </div>
                            <div className='form-inputs'>
                                <label>Zipcode</label>
                                <input type="text" name="zipcode" required placeholder='Enter zipcode' value={userDetails.zipcode} onChange={onChangeHandler} />
                            </div>
                        </div>

                        <div className='input-container'>
                            <div className='form-inputs'>
                                <label>Latitude</label>
                                <input type="text" name="lat" required placeholder='Enter longitude' value={userDetails.lat} onChange={onChangeHandler} />
                            </div>
                            <div className='form-inputs'>
                                <label>Longitude</label>
                                <input type="text" name="long" required placeholder='Enter latitude' value={userDetails.long} onChange={onChangeHandler} />
                            </div>
                        </div>
                        <button className='btn-signup'>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
