import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault(); 
    
        try {
            const response = await axios.post('http://localhost:3000/login', {
                EMAILID: email,
                PASSWORD: password,
            });
    
            console.log(response.data);
    
            if (response.status === 200) {
                console.log('Login successful');
                setSuccessMessage(response.data.message);
                setError('');
            } else {
                setError(response.data.message);
                setSuccessMessage('');
            }
        } catch (error) {
            console.error('Error during login:', error);
            if (error.response) {
                const { status, data } = error.response;
                if (status === 401 || status === 404 || status === 500) {
                    setError(data.message);
                    setSuccessMessage('');
                } else {
                    setError('An unexpected error occurred. Please try again later.');
                    setSuccessMessage('');
                }
            }else {
                setError('An unexpected error occurred. Please try again later.');
                setSuccessMessage('');
            }
        }
    };

    return (
        <div className='h-screen '>
            <div className="login-register-container w-full flex justify-center gap-14 font-semibold pt-[10vh] pb-4 shadow-sm ">
                <button className="login-button">Login</button>
                <button className="register-button">Register</button>
            </div>
            <div className="main-container">
                <form onSubmit={handleLogin}>
                    <div className='px-32 py-10 flex '>
                        <div className="login-left-container w-1/2 h-full" >
                            {/* <img src={loginImage} alt={'login image'} className='h-full'/> */}
                        </div>
                        <div className="login-right-container w-1/2 h-full py-24 px-16 flex flex-col items-start bg-gray-100">
                            <label className="login-text1 mb-2">Email ID</label>
                            <input 
                                type="text" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4" 
                                placeholder="Enter your Email ID" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="login-text1 mb-2">Password</label>
                            <input 
                                type="password" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="flex justify-between w-full">
                                <div className="left">
                                    <input type="checkbox" id="remembercheckbox" className='mr-2' name="remember-checkbox" defaultChecked />
                                    <label className="login-text2" htmlFor="remembercheckbox">Remember me for 30 days</label>
                                </div>
                                <div className="right">
                                    <a className="login-text2 blue">Forgot password?</a>
                                </div>
                            </div>
                            <button type="submit" className='Nav-login-button px-4 py-4 bg-black text-white rounded-md font-sm mt-8 w-full'>Login</button>
                            <div className='pt-4'>
                                {successMessage && <div className="text-green-600">{successMessage}</div>}
                                {error && <div className="text-red-600">{error}</div>}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

function Registration() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [weight, setWeight] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegistration = async (event) => {
        event.preventDefault(); 

        try {
            const response = await axios.post('http://localhost:3000/register', {
                FIRST_NAME: firstName,
                LAST_NAME: lastName,
                GENDER: gender,
                DOB: dob,
                WEIGHT: weight,
                ADDRESS: address,
                PHONENUMBER: phoneNumber,
                EMAILID: email,
                PASSWORD: password,
            });

            if (response.status === 200) {
                console.log('Registration successful');
                setSuccessMessage(response.data.message);
                setError('');
            } else {
                setError(response.data.message);
                setSuccessMessage('');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            if (error.response) {
                const { status, data } = error.response;
                if (status === 401 || status === 404 || status === 500) {
                    setError(data.message);
                    setSuccessMessage('');
                } else {
                    setError('An unexpected error occurred. Please try again later.');
                    setSuccessMessage('');
                }
            }else {
                setError('An unexpected error occurred. Please try again later.');
                setSuccessMessage('');
            }
        }
    };

    return (
        <div className='h-screen'>
            <div className="main-container">
                <form onSubmit={handleRegistration}>
                    <div className='px-32 py-10 flex '>
                        <div className="register-left-container w-1/2 h-full" >
                            {/* <img src={registerImage} alt={'registration image'} className='h-full'/> */}
                        </div>
                        <div className="register-right-container w-1/2 h-full py-24 px-16 flex flex-col items-start bg-gray-100">
                            <label className="register-text1 mb-2">First Name</label>
                            <input 
                                type="text" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4" 
                                placeholder="Enter your First Name" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label className="register-text1 mb-2">Last Name</label>
                            <input 
                                type="text" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4" 
                                placeholder="Enter your Last Name" 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label className="register-text1 mb-2">Gender</label>
                            <input 
                                type="text" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4" 
                                placeholder="Enter your Gender" 
                                value={gender} 
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="register-text1 mb-2">Date of Birth</label>
                            <input 
                                type="text" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4" 
                                placeholder="Enter your Date of Birth" 
                                value={dob} 
                                onChange={(e) => setDob(e.target.value)}
                            />
                            <label className="register-text1 mb-2">Weight</label>
                            <input 
                                type="text" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4" 
                                placeholder="Enter your Weight" 
                                value={weight} 
                                onChange={(e) => setWeight(e.target.value)}
                            />
                            <label className="register-text1 mb-2">Address</label>
                            <input 
                                type="text" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4" 
                                placeholder="Enter your Address" 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <label className="register-text1 mb-2">Phone Number</label>
                            <input 
                                type="text" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4" 
                                placeholder="Enter your Phone Number" 
                                value={phoneNumber} 
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <label className="register-text1 mb-2">Email ID</label>
                            <input 
                                type="text" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4" 
                                placeholder="Enter your Email ID" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="register-text1 mb-2">Password</label>
                            <input 
                                type="password" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className='register-button px-4 py-4 bg-black text-white rounded-md font-sm mt-8 w-full'>Register</button>
                            <div className='pt-4'>
                                {successMessage && <div className="text-green-600">{successMessage}</div>}
                                {error && <div className="text-red-600">{error}</div>}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { Login, Registration };