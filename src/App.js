import React,{useState} from 'react';
import Cardinfo from './components/Cardinfo';



function App() {

  const [cards, setCards] = useState([
    {
      idCardNumber: '1234567890',
      Name: 'John',
      Last_name: 'Doe',
      Date_of_birth: '01 Jan 1990',
      Date_of_issue: '01 Jan 2020',
      Date_of_Expiry: '31 Dec 2025',
      Status: 'Active'
    },
    {
      idCardNumber: '0987654321',
      Name: 'Jane',
      Last_name: 'Doe',
      Date_of_birth: '15 Feb 1985',
      Date_of_issue: '15 Feb 2018',
      Date_of_Expiry: '14 Feb 2023',
      Status: 'Inactive'
    },
    // ... Add more card data as needed
  ]);
  return (
    <div>
      
      {
        cards.map( (val)=> <Cardinfo data={val}/>)
      }
      
    </div>
  );
}

export default App;
