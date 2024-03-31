import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';
import leaf from './assets/leaf.png';

function App() {
  const [count, setCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  const myFunction = () => {
    const random = Math.floor((Math.random() * 100) + 1);
    setCount(random);
    console.log(count);
  }

  useEffect(() => {
    myFunction();
  }, []);

  const handleEdit = (e) => {
    setUserCount(e.target.value);
    console.log(userCount);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCount == count) {
      alert("Success!!!");
    } else {
      alert("Wrong answer");
    }
  }

  const handleRefresh = (e) => {
    e.preventDefault();
    myFunction();
  }

  return (
    <Fragment>
      <div className="container">
        <div className="screen">
          <div className="main">
            {
              [...Array(count)].map(() => (
                <img src={leaf} alt="leaf" className='leaf' />
              ))
            }
          </div>
        </div>

        <div className="form">
          <form>
            <input type="number" onChange={(e) => handleEdit(e)} />
            <div className="btn">
              <button type='submit' onClick={(e) => handleSubmit(e)}>Check</button>
              <button type='refresh' onClick={(e) => handleRefresh(e)}>
                <i className="fa fa-repeat"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default App