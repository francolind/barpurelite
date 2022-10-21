import stars from '../assets/info5-stars.png'



export const Info5 =()=>{
    return(
        <div className="info5">
            <div className="info5-title">
                    <h2>customer reviews</h2>
            </div>
            <div className="info5-container">
                <div className="info5-card1">
                    <h3>Amelia Watson</h3>
                    <img src={stars} alt="" />
                    <p>One of the best tasted beer I've ever had. the best beer available in the here, in my opinion. I have drank many award winning beers and my favorite brew is purelite.</p>
                    <div className='info5-line'></div>
                </div>
                <div className="info5-card2">
                    <h3>Kiara Morisson</h3>
                    <img src={stars} alt="" />
                    <p>One of the best tasted beer I've ever had. the best beer available in the here, in my opinion. I have drank many award winning beers and my favorite brew is purelite.</p>
                </div>
            </div>
        </div>
    )
}