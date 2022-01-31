import React from 'react';
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';


const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return(
    <>
      <div className="main-div">
      

        <div className="container">
    
          <h1>Increment/Decrement counter</h1>
          <h3>using React and Redux</h3>
          
          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber(2))}><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input" value={myState} />
            <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(3))}><span>+</span></a>
          </div>
    
        </div>
      </div>
    </>
  )
};

export default App; 

