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
  };

  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const userName = useSelector((state) => state.auth.userName);
  const token = useSelector((state) => state.auth.token);
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
        console.log(data.firstName)
        dispatch(
          setCredentials({
            firstName : data.firstName,
            lastName : data.lastName,
            userName : data.userName,
          })
        )
      })
      .catch((error) => {
        console.error("There was an error updating the profile:", error);
      });
}

  return (
    <>
      <button onClick={toggleForm} className="edit-btn">
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
            <button type="" className="edit-btn save-cncl-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditForm;
