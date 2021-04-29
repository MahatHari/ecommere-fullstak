import React, { useState } from 'react';
import { auth } from '../../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* 
const actionCodeSettings = {
  url: 'http://localhost:3000/register/complete',
  handleCodeInApp: true,
   iOs: {
    bundleId: '',
  },
  android: {
    packageName: '',
    installApp: true,
    minimumVersion: '',
  },
  dynamicLinkDomain: '', 
}; */
const Register = () => {
  const [email, setEmail] = useState('');
  const config = {
    url: 'http://localhost:3000/register/complete',
    handleCodeInApp: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth()
      .sendSignInLinkToEmail(email, config)
      .then(() => {
        toast.success(
          `Email is sent to ${email}. Click the link to complete your Registration`
        );

        // save user email in local storage
        window.localStorage.setItem('emailForRegistration', email);
      })
      .catch((error) => {
        const errCode = error.code;
        const errMessage = error.message;
        console.log(errCode, errMessage);
      });

    //clear state
    setEmail('');
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        className='form-control'
        value={email}
        onChange={handleChange}
        autoFocus
      />{' '}
      {/* making button at center of email holder */}
      <div className='col-md-12 text-center'>
        <button type='submit' className='btn btn-raised mt-2 btn-primary'>
          Submit
        </button>
      </div>
    </form>
  );

  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-md-g offset-md-3'>
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
