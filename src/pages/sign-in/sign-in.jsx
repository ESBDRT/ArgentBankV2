import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signin() {

  const navigate = useNavigate()

  function SigninRequest(event) {

    var email = document.getElementById('username').value
    var password = document.getElementById('password').value

    event.preventDefault();
        console.log('You clicked submit.');
        axios.post('http://localhost:3001/api/v1/user/login', {
            email: email,
            password: password
          })
          .then(function (response) {
            const token = response.data.body.token
            localStorage.setItem(token, Date.now());
            navigate('/user')
          })
          .catch(function (error) {
            console.log(error);
          });
    } 
  return (
    <body>
      <Header />
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={SigninRequest}>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <input type="submit" class="sign-in-button" id="sign-in-button"/>
          </form>
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default Signin;