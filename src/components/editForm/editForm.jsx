import "./editForm.css";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/authSlice";

function EditForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible((prevState) => !prevState);
    document.getElementById("edit-btn").style.display="none"
  };

  const closeForm = () => {
    document.getElementById("edit-btn").style.display="initial"
    setIsFormVisible((prevState) => !prevState);
  }

  const state = useSelector((state) => state);

  const firstName = state.auth.firstName
  const lastName = state.auth.lastName
  const userName = state.auth.userName
  const token = localStorage.getItem('token')

  const dispatch = useDispatch();
  

  function EditRequest(event) {
    event.preventDefault();
    const usernameField = document.getElementById("username").value;

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .put("http://localhost:3001/api/v1/user/profile", {
        userName: String(usernameField),
      })
      .then(function(putResponse){
        const data = putResponse.data.body
        dispatch(
          setCredentials({
            firstName : data.firstName,
            lastName : data.lastName,
            userName : data.userName,
          })
        )
        document.getElementById('username').value= ""
      })
      .catch((error) => {
        console.error("There was an error updating the profile:", error);
      });
}

  return (
    <>
      <button onClick={toggleForm} id="edit-btn" className="edit-btn">
        {" "}
        Edit Name
        {isFormVisible}
      </button>
      <div className={`form-container ${isFormVisible ? "show" : ""}`}>
        <form onSubmit={EditRequest}>
          <div>
            <label htmlFor="username">User name : </label>
            <input
              placeholder={userName}
              className="form-field"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div>
            <label htmlFor="first name">First name : </label>
            <input
              placeholder={firstName}
              type="text"
              id="first name"
              name="first name"
              className="readonly form-field"
              readOnly
            />
          </div>
          <div>
            <label htmlFor="last name">Last name : </label>
            <input
              placeholder={lastName}
              type="text"
              id="last name"
              name="last name"
              className="readonly form-field"
              readOnly
            />
          </div>
          <div>
            <button type="submit" className="edit-btn save-cncl-btn">
              Save
            </button>
            <button type="" onClick={closeForm} className="edit-btn save-cncl-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditForm;
