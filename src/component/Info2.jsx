import img1 from '../assets/info2-img1.png'
import img2 from '../assets/info2-img2.png'
import img3 from '../assets/info2-img3.png'
import deco from '../assets/info2-deco.png'


export const Info2 = ()=>{
    return(
    <div className="info2">
        <div className='info2-card'>
            <img src={img1} alt=""className='info2-img1' />
            <img src={img2} alt="" className='info2-img2'/>
            <img src={img3} alt="" className='info2-img3'/>
        </div>
        <div className='info2-deco'>
            <img src={deco} alt="" className='info2-deco'/>
            </div>
    </div>
    )
}