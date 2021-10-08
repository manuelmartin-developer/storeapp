//  Imports
import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [apiResponse, setApiResponse] = useState('');

  const callAPI = () => {

    fetch('http://localhost:9000/')
    .then(res => res.text())
    .then(res => setApiResponse({apiResponse:res}))
  }

useEffect(() => {
  callAPI();
})

  return (
    <>
    <p>{apiResponse}</p>
    </>
  );
}

export default App;
