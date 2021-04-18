import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index2.css';
import App from './App';
import Styles from './index2.module.css';
import reportWebVitals from './reportWebVitals';



class Comp extends Component{
    render()
    {
        return( <h1 className ={Styles.txt}>hi lets learn js......</h1>)
      
    }
}





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default Comp;