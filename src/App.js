import React,{useState,useEffect} from 'react';
import Cardinfo from './components/Cardinfo';
import {cardInfo} from './API/api'
import ImageInput from './components/ImageInput';


function App() {

  const [cards, setCards] = useState([
    {
      idCardNumber: '',
      Name: '',
      Last_name: '',
      Date_of_birth: '',
      Date_of_issue: '',
      Date_of_Expiry: '',
      Status: ''
    }
  ]);

  const getCards = async()=>{

    const {result} = await cardInfo();
    //console.log(result);
    setCards(result);
  }
  useEffect(()=>{
    getCards();
  },[])
  return (
    <div>
      
      {
        cards.map( (val)=> <Cardinfo data={val}/>)
      }
      <ImageInput/>
    </div>
  );
}

export default App;
