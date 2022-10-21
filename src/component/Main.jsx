import title from '../assets/main-title.png';
import text1 from '../assets/main-text1.png';
import deco1 from '../assets/main-deco1.png';
import img1 from '../assets/main-img1.png';
import img2 from '../assets/main-img2.png';
import img3 from '../assets/main-img3.png';
import img4 from '../assets/main-img4.png';
export const Main = ()=>{
    return (
      <main className="main-container">
        <div className="main-container-pri">
          <div className="main-content">
            <div className="main-content-pri">
              <img src={title} alt="" />
              <p>
                Pure Lite is a refreshing beverage with 7% alcohol.
                <br /> Every bottle contains the pure taste or beer you crave
                for.
                <br /> Drink Responsibly.
              </p>
            </div>
            <div className="main-content-sec">
              <img src={text1} alt="" />
              <div className="main-sec-deco">
                <img src={deco1} alt="" />
                <p>7* strong and pure dark beer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container-img">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        <div className="main-container-img4">
          <img src={img4} alt="" />
          <div className='main-img-button'>
            <p>need a drink?</p>
            <button>go to Store</button>
          </div>
        </div>
      </main>
    );
};