import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//JSX is basically --> adding HTML to JS

// { } is used to enclose any JS variable / JS expression / property / JS object


//RENDERING HTML DIRECTLY 

//CASE 1 : rendering html elements directly in JS
// ReactDOM.render(
//   <h1>My Webpage</h1>,
//   document.getElementById('root')
// );

//CASE 2 : rendering html elements directly in JS, with JS variables and objects
// var name = 'veena';
// var age = 10;

// var obj =
// {
//    name : 'veena',
//    age : 10,
// }

// ReactDOM.render(
//   <div>
//   <h1>My Webpage</h1>
//   <p> Using variables : my name is {name}  and my age is {age} years</p>
//   <p> Using Objects : my name is  {obj.name} and age is {obj.age}</p>
//   </div>,
//   document.getElementById('root')
// );



//RENDERING HTML INDIRECTLY 

//CASE 1 : through variables as elements 
// var element = <div><h1>My Webpage</h1><p>hi there........</p></div>

// ReactDOM.render(
//   element,                       //cannot render multiple elements to one tag
//   document.getElementById('root')
// );

//CASE 2: through components
// class Compo extends React.Component
// {
//   render()
//   {
//     return(

//       <div><h1>My webpage</h1><p>hi there...LETS LEARN REACT</p></div>

//     )
//   }
// }

// ReactDOM.render(
//   <Compo/>,                    //cannot render multiple components to one tag
//   document.getElementById('root')
// );








// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
