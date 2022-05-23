import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import { publicRequest } from "..";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";


const Product = ({pizza}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const [price, setPrice] = useState(pizza.price[0]);

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleClick = ()=> {
    dispatch(addProduct({...pizza, price, quantity}))
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.price[0]}</span>
        <p className={styles.desc}>{pizza.desc}</p>

        <div className={styles.add}>
            <input 
            onChange={(e)=>setQuantity(e.target.value)} 
            type="number" 
            defaultValue={1} 
            className={styles.quantity}/>
            <button className={styles.button} onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};


export const getServerSideProps = async ({params}) =>{
  const res = await publicRequest.get(`products/${params.id}`);
  return{
    props:{
      pizza:res.data
    }
  }
}



export default Product;