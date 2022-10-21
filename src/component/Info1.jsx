import back from '../assets/info1-back.png'
import title from '../assets/info1-title.png'
import p from '../assets/info1-p.png'



export const Info1 = ()=>{
    return(
    <div className="info1">
        <div><img src={back} alt=""className='info1-background' /></div>
        <div className='info1-container'>
            <img src={title} alt=""className='info1-title' />
            <img src={p} alt=""className='info1-paraf' />
        </div>

    </div>
    )
}