import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (error) {
        return (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
    };

    if(user){
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height : '1px'}} className='btn-primary w-50'></div>
                <p className='pt-2 px-2'>or</p>
                <div style={{height : '1px'}} className='btn-primary w-50'></div>
            </div>
            <div className=''>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src="images/google.png" alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                
            </div>
        </div>
    );
};

export default SocialLogin;