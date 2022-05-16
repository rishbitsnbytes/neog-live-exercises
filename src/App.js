import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function ExFive() {
  const [passVisible, setPassVisible] = useState(false);
  const [btnText, setBtnText] = useState("Show Pass")

  const clickHandler = () => {
    if (passVisible) {
    setPassVisible(false);
    setBtnText("Show Pass");
    } else {
      setPassVisible(true);
      setBtnText("Hide Pass");
    }
  }

  return (
    <div>
    <h1> Ex-5, show password</h1>
    <label htmlFor="pass"></label>
    <div>
      {passVisible ?  <input type="text" id='pass'/> :  <input type="password" id='pass'/> }
    </div>
    <button onClick={clickHandler}>{btnText}</button>
    </div>
  );
}

function ExSix() {
  const [fontSize, setFontSize] = useState("16px");

  const incrementFontSize = () => {
    setFontSize ( (prev) => {
      const prevFontSize = Number(prev.slice(0,prev.length-2));
      return `${prevFontSize + 8}px`;
      });
  }

  const decrementFontSize = () => {
    setFontSize ( (prev) => {
      const prevFontSize = Number(prev.slice(0,prev.length-2));
      return `${prevFontSize - 8}px`;
      });
  }
  
  return (
    <div>
    <h1>Ex-6, Text Size increment/decrement</h1>
    <button onClick={incrementFontSize}>+</button>
    <button onClick={decrementFontSize}>-</button>
    <p style={{fontSize: fontSize}}> This is the size of the text. Use desired buttons to make difference by 8px</p>
 
    </div>
  );
}



function App() {
  
  // // Q-1
  // const [passOne, setPassOne ] = useState('');
  // const [passTwo, setPassTwo ] = useState('');
  // const [feedbackMsg, setFeedbackMsg] = useState('');

  // const passwordMatcher = (e) => {
  //   // e.preventDefault();
  //   if (passOne === passTwo) {
  //     setFeedbackMsg("Password Matches");
  //   } else {
  //     setFeedbackMsg("Password does not Match!!");
  //   }
  // }


  // // //Q-2
  // const [bgColor, setBgColor] = useState('');

  // const setRedBg = () => {
  //   setBgColor("red");
  // }

  // const setTransparentBg = () => {
  //   setBgColor("transparent");
  // }


  //Ex-1 
  // const [charCount, setCharCount] = useState(0);
  // const getCharCount = (value) => {
  //   setCharCount(value.length);
  // }

  //Ex-2
//   const [feedbackMsg, setFeedbackMsg] = useState('Feedback Message');
//   const checkPassword = (e) => {
//     const enteredPass = e.target.value;
//     let hasNumber = false;
//     let hasAlphabet = false;
//     let hasSpace = false;
//     for (let char of enteredPass) {
//       if (char === " ") {
//         hasSpace = true;
//       } else 
//        if (!isNaN(char)) {
//         hasNumber = true;
//       } else if(((char >= 'A' &&  char <= 'Z') || (char >= 'a' &&  char <= 'z'))) {
//         hasAlphabet = true;
//     } else {
//       setFeedbackMsg("Please enter only alphanumeric password.");
//     }
//     if (hasSpace) {
//       setFeedbackMsg("Spaces in the password are not allowed. Retry");
//     } else if (hasNumber && hasAlphabet) {
//       setFeedbackMsg("Great! Password is alphanumeric.");
//     } else if (hasNumber) {
//       setFeedbackMsg("Please enter Alphabets too!");
//     } else if (hasAlphabet) {
//       setFeedbackMsg("Please enter Numbers too!");
//     } else {
//       setFeedbackMsg("Please enter only alphanumeric password.");
//     }
//   }
// }


// // Ex-3
// const [pass1, setPass1] = useState('');
// const [pass2, setPass2] = useState('');

// const consolePass = () => console.log(`Password-1: ${pass1} Password-2: ${pass2}`);

  return (
    <div className="App">
     <h1>neog-live-exercises</h1>
     <h2>Thinking In React</h2>
    <div>

     { /* 
     <h3>Q-1, Password Matcher</h3>
    <form>
     <input type="text" placeholder='enter password-1' onChange={(e) => setPassOne(e.target.value) }/>
     <input type="text" placeholder='enter password-2' onChange={(e) => setPassTwo(e.target.value) }/>
    </form>
    <button onClick={(e) => passwordMatcher(e)}>Check</button>
     <p className='feedback-msg'>{feedbackMsg}</p>

     <h3>Q-2</h3>
     <p style={{backgroundColor : bgColor }}>This is a paragraph. Click on the below button for desired effect.</p>
     <button onClick={setRedBg}>Red</button>
     <button onClick={setTransparentBg}>Transparent</button>
    */}

    <h1>neog-practice-exercises</h1>
    <h2>Thinking In React</h2>
    
    { /* 
    <h3>Ex-1, Character Count Indicator</h3>
    <textarea name="post-textarea" id="post-content" cols="30" rows="10" onChange={(e) => getCharCount(e.target.value)}></textarea>
    <p className='character-count'>Character Count : {charCount}</p>
    */}

    { /*
    <h3>Ex-2, Alphanumeric Password!</h3>
    <input type="password" onChange={checkPassword} />
    <p className='feedback-msg'>{feedbackMsg}</p>   
    */}
    
    {/* 
      <h3>Ex- 3 Password mismatch, disable sumit button</h3>
    <label htmlFor="pass-1">Password</label>
    <input type="password" name="" id="pass-1" onChange={(e) => setPass1(e.target.value)} value={pass1}/>
    <label htmlFor="pass-2"> Retype Password</label>
    <input type="password" id='pass-2' onChange={(e) => setPass2(e.target.value)} value={pass2}/>
   <div>
   { pass1 !== pass2 ? <button type='button' onClick={consolePass} disabled>Submit</button> : <button type='button' onClick={consolePass}>Submit</button>  }
   </div> 
    */}
    
    
    </div>
    
    { /* <ExFive /> */ } 
    <ExSix />


    </div>
  );
}


export default App;
