import img1 from '../assets/info3-img1.png'
import img2 from '../assets/info3-img2.png'
import img3 from '../assets/info3-img3.png'
import img4 from '../assets/info3-img4.png'

export const Info3 = ()=>{
    return(
        <div className="info3">
            <div className='info3-container-up'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
            <div className='info3-container-down'>
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    )
}