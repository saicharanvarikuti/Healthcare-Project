import React, { useState } from 'react';
import axios from 'axios';
import loginImage from './login.jpg'

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

            const token = response.data.token;
            localStorage.setItem('token', token);

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
            <div className="main-container">
                <form onSubmit={handleLogin}>
                    <div className='px-36 py-4 flex gap-16 '>
                        <div className="login-left-container w-1/2 h-full" >
                            <img src={loginImage} alt={'login image'} className='h-full'/>
                        </div>
                        <div className="login-right-container w-1/2 h-full py-20 px-16 flex flex-col items-start bg-gray-50 shadow-2xl rounded-xl">
                            <h2 className='font-merriweather text-l mb-8 text-whistler-blue'>Please Enter Your Credentials to Login</h2>
                            <label className="login-text1 mb-1 font-varela-round text-whistler-blue">Email ID</label>
                            <input 
                                type="text" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4  focus:outline-whistler-green" 
                                placeholder="Enter your Email ID" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="login-text1 mb-1 font-varela-round text-whistler-blue">Password</label>
                            <input 
                                type="password" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4 focus:outline-whistler-green" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="flex justify-between w-full">
                                <div className="left">
                                    <input type="checkbox" id="remembercheckbox" className='mr-2' name="remember-checkbox" defaultChecked />
                                    <label className="login-text2 text-sm cursor-pointer hover:text-whistler-green text-whistler-blue" htmlFor="remembercheckbox">Remember me for 30 days</label>
                                </div>
                                <div className="right">
                                    <a className="login-text2 blue text-sm cursor-pointer hover:text-whistler-green text-whistler-blue">Forgot password?</a>
                                </div>
                            </div>
                            <button type="submit" className='Nav-login-button px-4 py-4 bg-whistler-blue hover:bg-whistler-green font-inter font-bold text-white rounded-md font-sm mt-8 w-full'>Login</button>
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
    // const [gender, setGender] = useState('');
    // const [dob, setDob] = useState('');
    // const [weight, setWeight] = useState('');
    // const [address, setAddress] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
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
                    <div className='px-36 py-4 flex gap-16 '>
                        <div className="login-left-container w-1/2 h-full" >
                            <img src={loginImage} alt={'login image'} className='h-full'/>
                        </div>
                        <div className="login-right-container w-1/2 h-full py-12 px-16 flex flex-col items-start bg-gray-50 shadow-2xl rounded-xl">
                            <h2 className='font-merriweather text-l mb-8 text-whistler-blue'>User Registration</h2>
                            <div className='flex gap-4'>
                                <div className='w-1/2'>
                                    <label className="register-text1 mb-1 font-varela-round text-whistler-blue">First Name</label>
                                    <input
                                        type="text"
                                        className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4  focus:outline-whistler-green"
                                        placeholder="Enter your First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <label className="register-text1 mb-1 font-varela-round text-whistler-blue">Last Name</label>
                                    <input
                                        type="text"
                                        className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4  focus:outline-whistler-green"
                                        placeholder="Enter your Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <label className="login-text1 mb-1 font-varela-round text-whistler-blue">Email ID</label>
                            <input 
                                type="text" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4  focus:outline-whistler-green" 
                                placeholder="Enter your Email ID" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="login-text1 mb-1 font-varela-round text-whistler-blue">Password</label>
                            <input 
                                type="password" 
                                className=" bg-gray-200 p-4 pl-6 w-full rounded mb-4 focus:outline-whistler-green" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="flex justify-between w-full">
                                <div className="left">
                                    <input type="checkbox" id="remembercheckbox" className='mr-2' name="remember-checkbox" defaultChecked />
                                    <label className="login-text2 text-sm cursor-pointer hover:text-whistler-green text-whistler-blue" htmlFor="remembercheckbox">Opt for Newsletter</label>
                                </div>
                                <div className="right">
                                    <a className="login-text2 blue text-sm cursor-pointer hover:text-whistler-green text-whistler-blue">Are You a Partner? Login here</a>
                                </div>
                            </div>
                            <button type="submit" className='Nav-login-button px-4 py-4 bg-whistler-blue hover:bg-whistler-green font-inter font-bold text-white rounded-md font-sm mt-4 w-full'>Register</button>
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