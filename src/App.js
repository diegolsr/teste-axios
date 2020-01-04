import React from 'react';
import axios from 'axios';

// import { Container } from './styles';

export default function App() {
 React.useEffect(() => {
    teste()
  }, [])

  const teste = async ()=>{
try {
 const personaltrainer= await axios.get('http://localhost:3333/personaltrainer')
  console.log(personaltrainer);
  
} catch (error) {
  console.log(error);
  
}
  }

  return (
    <div >Axios</div>
  );
}
