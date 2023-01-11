import React, { useState } from 'react'

export default function Signup() {

    const [userDetails,setUserDetails]=useState( {
        email:'',
        username:'',
        password:'',
        name:{
            firstname:'',
            lastname:''
        },
        address:{
            city:'',
            street:'',
            number:null,
            zipcode:'',
            geolocation:{
                lat:'',
                long:''
            }
        },
        phone:''
    })
    return (
        <div className='container'>
            <div className='signup'>
                <h1>Signup</h1>
                <form className='signup-form'>
                <div className='persional-info'>
                <h2>Personal Information</h2>
                    <div className='input-container'>
                    <div className='form-inputs'>
                        <label>First name</label>
                        <input type="text" />
                    </div>
                        <div className='form-inputs'>
                        <label>Last name</label>
                        <input type="text" />
                    </div>
                    </div>
                    <div className='input-container'>
                    <div className='form-inputs'>
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    </div>
                    <div className='input-container'>
                    <div className='form-inputs'>
                        <label>User name</label>
                        <input type="text" />
                    </div>
                    </div>

                     <div className='input-container'>
                    <div className='form-inputs'>
                        <label>Password</label>
                        <input type="text" />
                    </div>
                        <div className='form-inputs'>
                        <label>Confirm password</label>
                        <input type="text" />
                    </div>
                    </div>
                    <div className='input-container'>
                    <div className='form-inputs'>
                        <label>Contact number</label>
                        <input type="text" />
                    </div>
                    </div>
                    </div>
                    <div className='address'>
                    <h2>Adderss</h2>
                    <div className='input-container'>
                    <div className='form-inputs'>
                        <label>House number</label>
                        <input type="text" />
                    </div>
                        <div className='form-inputs'>
                        <label>Street</label>
                        <input type="text" />
                    </div>
                    </div>
                    <div className='input-container'>
                    <div className='form-inputs'>
                        <label>City</label>
                        <input type="text" />
                    </div>
                        <div className='form-inputs'>
                        <label>Zipcode</label>
                        <input type="text" />
                    </div>
                    </div>
                   
                    <div className='input-container'>
                    <div className='form-inputs'>
                        <label>Latitude</label>
                        <input type="text" />
                    </div>
                        <div className='form-inputs'>
                        <label>Longitude</label>
                        <input type="text" />
                    </div>
                    </div>
                    <button className='btn-signup'>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
