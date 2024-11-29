import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import EditForm from "../../components/editForm/editForm";
import Account from "../../components/accounts/accounts";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function User() {

  function RestrictUserPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) { 
            navigate("/signin");
        }
    }, [navigate]);  
}

RestrictUserPage()
  
  const state = useSelector((state) => state);
  const userName = state.auth.userName;

  return (
    <>
      <Header />
      <main class="main bg-dark">
        <div class="header">
          <h1>
            Welcome back
            <br />
            {userName}
          </h1>
          <EditForm/>
        </div>
        <h2 class="sr-only">Accounts</h2>
          <Account title="Argent Bank Checking (x8349)" balance="$2,082.79"/>
          <Account title="Argent Bank Checking (x6712)" balance="$10,928.42"/>
          <Account title="Argent Bank Checking (x8349)" balance="$184.30"/>
      </main>
      <Footer />
    </>
    
  );
}

export default User;
