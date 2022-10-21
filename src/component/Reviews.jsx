import title from '../assets/reviews-title.png';
import img1 from '../assets/reviews-img1.png';
import img2 from '../assets/reviews-img2.png';
import img3 from '../assets/reviews-img3.png';
import p1 from '../assets/reviews-p1.png';
import p2 from '../assets/reviews-p2.png';
import p3 from '../assets/reviews-p3.png';
import deco1 from '../assets/reviews-deco1.png';
import deco2 from '../assets/reviews-deco2.png';




export const Reviews = ()=>{
    return(
        <div className='reviews'>
            <div className='reviews-title'>
                <img src={title} alt="" />
            </div>
            <div className='reviews-container-img'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <div className='reviews-p'>
                <img src={p1} alt=""className='p1' />
                <img src={p2} alt="" className='p2' />
                <img src={p3} alt="" className='p3'/>
            </div>
            <div className='reviews-deco'>
                <img src={deco1} alt="" className='deco1'/>
                <img src={deco2} alt="" className='deco2'/>
            </div>
        </div>
    )
}