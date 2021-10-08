//  Imports
import './App.css';
import { useState } from 'react'

function App() {

  const [apiResponse, setApiResponse] = useState('');

  const callAPI = () => {

    fetch('http://localhost:9000/')
    .then(res => res.text())
    .then(res => setApiResponse({apiResponse:res}))
  }

  return (
    <>
    <p>{apiResponse}</p>
    </>
  );
}

export default App;
