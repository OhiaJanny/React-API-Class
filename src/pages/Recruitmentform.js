import React, { useState } from "react";
import './Recruitmentform.css'

const Recruitmentform = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`This name you entered is : ${name} and age is : ${age}` );
  };
  return (
    <div className='form-wrapper'>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <input className='btn' type="submit" />
      </form>
    </div>
  );
};

export default Recruitmentform;
