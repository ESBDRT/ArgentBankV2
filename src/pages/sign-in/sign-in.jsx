import './sign-in.css'
import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import axios from "axios";
import { useDispatch  } from "react-redux";
import { setCredentials, setConnected } from "../../redux/authSlice";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function RestrictSignInPage() {
  
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) { 
            navigate("/user");
        }
    }, [navigate]);  
  }
  
  RestrictSignInPage()

  function SigninRequest(event) {
    event.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    axios
      .post("http://localhost:3001/api/v1/user/login", {
        email: email,
        password: password,
      })
      .then(function (LoginResponse) {
        const token = LoginResponse.data.body.token;
        localStorage.setItem("token", token)
        dispatch(
          setConnected({
            isConnected: "Sign out"
          })
        )
        axios.defaults.headers.common = {
          Authorization: `Bearer ${token}`,
        };

        return axios.post("http://localhost:3001/api/v1/user/profile", {});
      })
      .then(function (profileResponse) {
        const userProfile = profileResponse.data.body;
        dispatch(
          setCredentials({
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            userName: userProfile.userName,
          })
        );
        navigate("/user");
      })
      .catch(function (error) {
        console.log("Error:", error);
        document.getElementById('error-text').style.display='block'
      });
  }

  return (
    <body>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <p className='error-text' id='error-text'>Invalid login credentials</p>
          <form onSubmit={SigninRequest}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <input
              type="submit"
              className="sign-in-button"
              id="sign-in-button"
            />
          </form>
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default Signin;
