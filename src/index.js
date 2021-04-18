import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Styles from './index.module.css';
import App from './App';
import Comp from './index2';
import reportWebVitals from './reportWebVitals';
import OutsetBox from './StyledComponents';


//INLINE STYLES

//Style attribute

// ReactDOM.render(
//   <div>
//   <h1 style ={{backgroundColor : 'black', color : 'orange', textAlign :'center'}}>  My Webpage </h1>
//   <p>hi there.....</p>
//   </div>,
//   document.getElementById('root')

// )


//Style variable 
// var x = 'blue';

// var state={
//   open : 'false'
// }

// state.open === 'true' ? x ='green': x = 'red'

// ReactDOM.render(
//  <h1 style = {{backgroundColor : x }}>hello</h1>,
//  document.getElementById('root')
// )





//Style object
//  var myStyle =  {
//    backgroundColor : 'pink',
//    color : 'white',
//    textAlign : 'center'
//  }

//  ReactDOM.render(
//   <h1 style ={myStyle}> My Webpage </h1>,
//   document.getElementById('root')
// )


//(or)

// ReactDOM.render(
//   <h1 style ={{backgroundColor: myStyle.backgroundColor, color : myStyle.color}}> My Webpage </h1>,
//   document.getElementById('root')
// )


// ReactDOM.render(
// <h1>hello</h1>,
// document.getElementById('root')

// )


//EXTERNAL STYLES

//style class
// ReactDOM.render(
//   <div>
//   <h1 className = 'veena'> My Webpage </h1>
//   <h1 className = 'txt'> My Webpage2 </h1>
//   </div>,
//   document.getElementById('root')
// )



//EXTERNAL STYLES

//disadvante of multiple .css files for multiple components -- naming conflict -- as all .css files are globally available 
//files in use index.js, index.css, index2.js, index2.css, index.module.css, index2.module.css

// ReactDOM.render(
//     <Comp/>,
//     document.getElementById("root")
//   )
  
//   ReactDOM.render(
//     <p className = 'txt'>Hi there.... </p>,
//     document.getElementById("notroot")
//   )


//SOLUTION : USE MODULES 
// modules file should be in the format -- name.module.css
// ReactDOM.render(
//     <Comp/>,
//     document.getElementById("root")
//   )
  
//   ReactDOM.render(
//     <p className = {Styles.txt}>Hi there.... </p>,
//     document.getElementById("notroot")
//   )



//Styled Components

      // ReactDOM.render(
      //   <OutsetBox/>,
      //   document.getElementById("root")
      // )
    



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
