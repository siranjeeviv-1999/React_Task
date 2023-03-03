import  "./products.css";
function Product(props){
    return (
      <div >
        <div className="highlight">
            <h2 style={{color:"brown"}}>Title: {props.title}</h2>
            <h2 style={{color:"brown"}}>Price: {props.price}</h2>
            <h2 style={{color:"brown"}}>Description: {props.description}</h2>
            
        </div>
        
      </div>
    );
  }
  
  export default Product;