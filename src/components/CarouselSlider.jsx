import { Carousel, Typography } from "@material-tailwind/react";
import phone from '../assets/phone1.jpg'
import fashionCarousel from '../assets/fashionCarousel.jfif'
import beautyimg from '../assets/beautyimg.jfif'
import purse from '../assets/purse2.png'
import laptop1 from '../assets/laptop1.png'
import grocery from "../assets/grocery2.jpg";
import tv from '../assets/tv.png'
import manfashion from '../assets/manfashion.jpg'
 
const CarouselSlider=() => {
  return (
    <Carousel className="w-full h-80 mt-6 overflow-hidden ">
      <div className="relative h-80 w-full">
        <img
          src={phone}
          alt="image 1"
          className="h-80 w-full object-cover"
        />
        <div className="absolute  inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Stay Connected, Stay Ahead
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Experience the future at your fingertips. The power of technology is now more accessible than ever.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-80 w-full">
        <img
          src={fashionCarousel}
          alt="image 2"
          className="h-80 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/30">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Style That Speaks
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Fashion is the armor to survive the reality of everyday life. Express yourself with elegance and confidence.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-80 w-full">
        <img
          src={beautyimg}
          alt="image 3"
          className="h-80 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/30">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Glow with Confidence
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Beauty isn’t about being perfect. It’s about being yourself. Enhance your natural glow with the best care.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-80 w-full">
        <img
          src={purse}
          alt="image 1"
          className="h-80 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Stay Connected, Stay Ahead
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Experience the future at your fingertips. The power of technology is now more accessible than ever.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-80 w-full">
        <img
          src={laptop1}
          alt="image 2"
          className="h-80 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/30">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Style That Speaks
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Fashion is the armor to survive the reality of everyday life. Express yourself with elegance and confidence.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-80 w-full">
        <img
          src={grocery}
          alt="image 3"
          className="h-80 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/30">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Glow with Confidence
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Beauty isn’t about being perfect. It’s about being yourself. Enhance your natural glow with the best care.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-80 w-full">
        <img
          src={manfashion}
          alt="image 1"
          className="h-80 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Stay Connected, Stay Ahead
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Experience the future at your fingertips. The power of technology is now more accessible than ever.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-80 w-full">
        <img
          src={tv}
          alt="image 2"
          className="h-80 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/30">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Style That Speaks
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Fashion is the armor to survive the reality of everyday life. Express yourself with elegance and confidence.
            </Typography>
          </div>
        </div>
      </div>
      
    </Carousel>
  );
}

export default CarouselSlider




