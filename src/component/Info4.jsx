import back from '../assets/info4-back.png'
import title from '../assets/info4-title.png'
import paraf from '../assets/info4-paraf.png'


export const Info4 =()=>{
    return(
        <div className="info4">
            <div className='info4-img'><img src={back} alt="" /></div>
            <div className='info4-container'>
                <img src={title} alt="" className='info4-title'/>
                <img src={paraf} alt="" className='info4-paraf'/>
            </div>
        </div>
    )
}