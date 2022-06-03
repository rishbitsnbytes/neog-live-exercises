import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';

function ExOne() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter((prev) => prev + 1);
  }

  useEffect(() => {
    console.log(counter); 
  })

  return (
      <div>
      <div>Ex-1, Counter with effect</div>
        <button onClick={clickHandler}>Counter</button>
        <p>You clicked it {counter} times!</p>
      </div>
  )
}

function ExTwo() {
  localStorage.setItem('name', 'rish')
  const array = [1,2,3,4,5];
  localStorage.setItem('arraySaved', array);

  const name2 = localStorage.getItem("name");
  const array2 = localStorage.getItem("arraySaved");


  console.log(array, name2, array2);

  return (
    <div> 
      <p>{"s"}</p>
    </div>

  )

}





function abc () => {
  const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
  console.dir(acc)
        
      let key = obj[property]
        console.log("first",key)
      if (!acc[key]) {
        acc[key] = []
        console.log("second",key)
      }
      acc[key].push(obj)
        console.log("third",key)
  console.dir(acc)
        
      return acc
        
     }, {})
  }

  
  let groupedPeople = groupBy(people, 'age')
}


function App() {
  return (
    <div className="App">
     {/* <ExOne /> */}
      <ExTwo />
      </div>
  );
}

export default App;
