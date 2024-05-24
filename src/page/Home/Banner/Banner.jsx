import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './style.css';

const images = [
  "https://i.ibb.co/yqh8g6F/slider-5.jpg",
  "https://i.ibb.co/dMKVnkp/sidler-1.jpg",
  "https://i.ibb.co/dQJdqjf/slider-2.jpg",
  "https://i.ibb.co/bgQcmt5/slider-3.jpg",
  "https://i.ibb.co/mXCh9Lf/slider44.jpg",
  "https://i.ibb.co/G78zfjw/slider-4.jpg"
];

const Banner = () => {
  const [details, setDetails] = React.useState(null);

  const [sliderRef] = useKeenSlider({
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details);
    },
    initial: 2,
  });

  const scaleStyle = (idx) => {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  };

  return (
    <div ref={sliderRef} className="keen-slider zoom-out">
      {images.map((src, idx) => (
        <div key={idx} className="keen-slider__slide zoom-out__slide">
          <div style={scaleStyle(idx)}>
            <img src={src} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
