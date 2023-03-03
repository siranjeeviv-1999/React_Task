import Product from './Product';
import React, { useEffect } from 'react';

const details=[{
  "Title": "Product 1",
  "Price": "10",
  "Description": "First product"
},
{
  "Title": "Product 2",
  "Price": "20",
  "Description": "Second product"
}];

const title="My Demo Shop";

function App() {
  useEffect(() => {
    document.title = 'My Demo Shop';
  }, []);
  
  return (
    
    <div>
      
      <div ><h1 style={{textAlign: "center",color:"teal"}}>{title}</h1></div>
      <Product title={details[0].Title} price={details[0].Price} description={details[0].Description} />
      <Product title={details[1].Title} price={details[1].Price} description={details[1].Description} />
      
    </div>
  );
}

export default App;
