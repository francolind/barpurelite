import img1 from '../assets/addcart-img1.png';
import img2 from '../assets/addcart-img2.png';
import stars from '../assets/addcart-stars.png';
import deco1 from '../assets/addcart-deco1.png';
import {useState , useEffect} from 'react';

export const Addcart = ()=>{

    
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(4.20)
    const [resul, setResult] = useState('');
    

    
    const increaseCount = () =>{
        setCount( count + 1 )
        setPrice( parseFloat(price + 4.20).toFixed(2))}

    const diminishCount = () =>{if(count >= 2){
        setCount( count - 1 )
        setPrice( parseFloat(price - 4.20 ).toFixed(2))}
    }
      
    
    return (
    <div className='addcart-container'>
        <div className='addcart-container-img'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
        </div>
        <div className='addcart-container-price'>
            <div className='addcart-container-price-content'>
                <div>
                    <h3>${price}</h3>
                </div>
                <div className='addcart-price-button'>
                    <button onClick={increaseCount}>+</button>
                    <p>{count}</p>
                    <button onClick={diminishCount}>-</button>
                </div>
            </div>
            <div className='addcart-price-paraf'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus provident praesentium blanditiis aut labore. Optio vel exercitationem laboriosam repellendus, rem obcaecati accusantium omnis atque quidem, temporibus repudiandae tenetur vitae deleniti.</p>
            </div>
            <div className='addcart-button'>
                <button>add to cart</button>
            </div>
        </div>
        <div className='addcart-container-reviews'>
            <h3>classic purrelite <br/> dark beer</h3>
            <div className='addcart-reviews-content'>
                <img src={stars} alt="" />
                <p>109 reviews</p>
            </div>
        </div>
        <div><img src={deco1} alt="" className='addcart-deco1'/></div>
    </div>
    )
};