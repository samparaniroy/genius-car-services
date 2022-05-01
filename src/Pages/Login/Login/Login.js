import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      if(user){
        navigate(from, { replace: true });
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }
    const navigateRegister = event =>{
        navigate('/register');
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Genius car? <Link to="/register" className='text-danger' onClick={navigateRegister}>Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;