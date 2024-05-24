import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './style.css'
import logo from '../../../assets/image/Six4.jpg'
import logo2 from '../../../assets/image/cart-1.jpg'
import logo3 from '../../../assets/image/S2.jpg'
import logo4 from '../../../assets/image/T1.jpg'
import logo5 from '../../../assets/image/six.jpg'
import logo6 from '../../../assets/image/cart-7.jpg'
const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}


const Popular = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          mode: "free-snap",
        },
        [carousel]
      )
    
      return (

        <div className="wrapper">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              <div className="carousel__cell number-slide1 "> <img src={logo} alt="" className="w-[330px] h-[400px]" /></div>
              <div  className="carousel__cell number-slide2"> <img src={logo2} alt="" className="w-[330px] h-[400px]" /></div>
              <div  className="carousel__cell number-slide3"> <img src={logo3} alt="" className="w-[330px] h-[400px]"/></div>
              <div  className="carousel__cell number-slide4"> <img src={logo4} alt="" className="w-[330px] h-[400px]" /></div>
              <div  className="carousel__cell number-slide5"> <img src={logo5} alt="" className="w-[330px] h-[400px]"/></div>
              <div  className="carousel__cell number-slide6"> <img src={logo6} alt="" className="w-[330px] h-[400px]"/></div>
            </div>
          </div>
        </div>
      )
    }

    export default Popular