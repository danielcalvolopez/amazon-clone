import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://bearmccreary.com/wp-content/uploads/2022/09/Logo_Cavalry.png"
            alt="banner1"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://d11p0alxbet5ud.cloudfront.net/Pictures/1024x536/5/5/9/1288559_amazonprimeusopen_875270.jpg"
            alt="banner2"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://www.thesun.co.uk/wp-content/uploads/2022/09/PR_AMZ_PEAS_22_STATIC_3000x1464_UK.jpg"
            alt="banner3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
