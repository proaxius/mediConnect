import { OpenconDB, CloseconDB } from "./MongoCon";
import { useEffect, useState } from "react";

import "../pages/global.css";

export default function  RegistrationPage () {
  const [FormData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    IDnumber: "",
    position: "Trainee",
    password: "",
    confirmPassword: "",
  });
  const handleChange =(event)=> {
    console.log(event.target.name)
    
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
  }
  function handleSubmit(params) {
    alert(params.target)
  }

  return (
    <div className="flex justify-center place-items-center h-screen w-screen">
      <form
        className="flex flex-col gap-8  justify-center place-items-center "
        onSubmit={handleSubmit}
        
        acceptCharset="utf-8">
        <div className="flex gap-4 justify-around w-full">
          <label htmlFor="Create name">Create name</label>
          <input value={FormData.name} onChange={handleChange} placeholder="name"></input>
        </div>
        <div className="flex gap-4 justify-around w-full">
          <label htmlFor="Create Username">Create Username</label>
          <input value={FormData.username} onChange={handleChange} placeholder="Username"></input>
        </div>
        <div className="flex gap-4 justify-around w-full">
          <label htmlFor="Email">Email</label>
          <input value={FormData.email} onChange={handleChange} placeholder="Email" type="email"></input>
        </div>
        <div className="flex gap-4 justify-around w-full">
          <label htmlFor="ID-no">Id-no</label>
          <input value={FormData.IDnumber} onChange={handleChange} placeholder="job-id,staff-id,doctor-id no" type="text"></input>
        </div>
        <div className="flex gap-4 justify-around w-full">
          <label htmlFor="Position">Position</label>
          <select defaultValue={FormData.position} required={true} onChange={handleChange}>
            <option value="Trainee">Trainee</option>
            <option value="Doctor">Doctor </option>
            <option value="Nurse">Nurse </option>
            <option value="Ward Manager">Ward Manager </option>
            <option value="Managment">Managment</option>
            <option value="Head of Department">Head of Department</option>
            <option value="Helper">Helper</option>
            <option value="IT Department">IT Department</option>
          </select>
        </div>
        <div className="flex gap-4 justify-around w-full">

          <label htmlFor="Password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={FormData.password}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex gap-4 justify-around w-full">
          <label htmlFor="Confirm password">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={FormData.confirmPassword}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Create User
        </button>
        <button
          type="reset"
          onClick={() => {
            setFormData({
              name: "",
              username: "",
              email: "",
              id_no: "",
              position: "Trainee",
              password: "",
              confirmPassword: "",
            });
          }}
        >
          Clear All{" "}
        </button>
      </form>
    </div>
  );
}


