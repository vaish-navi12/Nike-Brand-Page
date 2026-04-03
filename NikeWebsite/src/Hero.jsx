import App from "./App"
import "./Hero.css"
function Hero(){
    return (
      <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVES THE BEST FIT</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto magni asperiores tenetur sequi earum modi omnis dolor voluptatibus deserunt vitae consequuntur, eum nobis rem optio, animi hic! Voluptatibus.</p>
            <div className="hero-btn">
                <button href="#shop">Shop Now</button>
                <button href="#category" className="sec-btn">Category</button>
            </div>
            <div className="sites">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>
            </div>
        </div>
        <div className="hero-img">
            <img src="/images/shoe_image.png" alt="shoe" />
        </div>
      </main>
    );
}

export default Hero;