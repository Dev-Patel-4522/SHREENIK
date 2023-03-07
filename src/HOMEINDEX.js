import React,  { useState, useEffect }  from 'react';
import TariSathe from './Images/TariSathe.jpg';
import LoveNiStory from './Images/LoveNiStory.jpg';
import babubhai from './Images/babubhai.jpg';
import aaron from "./Images/aaron.jpg";
import pani from "./Images/pani.jpg";
import firangi from "./Images/firangi.jpg";
import dahavi from "./Images/dahavi.jpg";
import shortcircuit from "./Images/shortcircuit.jpg";
import fairlady from "./Images/fairlady.jpg";
import anokhee from "./Images/anokhee.jpg";
import fikarnot from "./Images/fikarnot.jpg";
import SHANNISHAN from "./Images/SHANNISHAN.jpg";
import './App.css';
// import { BUTTONS } from './BUTTONS';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const images = [
  { id: "1", imageName: fairlady.jpg, tag: "upcomming" },
  { id: "2", imageName: anokhee.jpg, tag: "upcomming" },
  { id: "3", imageName: fikarnot.jpg, tag: "upcomming" },
  { id: "4", imageName: SHANNISHAN.jpg, tag: "upcomming" },
];

function HOMEINDEX() {

    const [tag, setTag] = useState('upcomming');
    const [filteredImage, setFilteredImage] = useState([]);

    useEffect( () => {
        tag === 'upcomming' ? setFilteredImage(images) : setFilteredImage(images.filter( image => image.tag === tag ))
    },[tag])

  return (
    <div>
      {/* Upcomming Section */}
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="object-fill md:w-screen md:h-screen"
              src={TariSathe}
              alt="image slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill md:w-screen md:h-screen"
              src={LoveNiStory}
              alt="image slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill md:w-screen md:h-screen"
              src={shortcircuit}
              alt="image slide 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill md:w-screen md:h-screen"
              src={babubhai}
              alt="image slide 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill md:w-screen md:h-screen"
              src={aaron}
              alt="image slide 5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill md:w-screen md:h-screen"
              src={pani}
              alt="image slide 6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill md:w-screen md:h-screen"
              src={dahavi}
              alt="image slide 7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill md:w-screen md:h-screen"
              src={firangi}
              alt="image slide 9"
            />
          </SwiperSlide>
        </Swiper>
      </>
      {/* Upcomming and Released Button Section */}
      <div handleSetTag={setTag}>
        <TagButton name = "Upcomming" handleSetTag={setTag} />
        <TagButton name = "Released" handleSetTag={setTag} />

        <div>
          {filteredImage.map((image) => (
            <div key={image.id}>
                <img src={`./Images/${image.imageName}`} alt=""/>
            
            </div>
          ))}
        </div>
        {/* <center>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            UPCOMMING
          </button>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            REALESED
          </button>
        </center> */}
      </div>

      {/* Distribution Section */}

      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Distribution
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={TariSathe}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={babubhai}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={dahavi}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={firangi}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={pani}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={aaron}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Marketing
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div class="lg:w-2/3 mx-auto">
            <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                class="w-full object-cover h-64 object-center block  absolute inset-0"
                src={LoveNiStory}
              />
              <div class="text-center relative w-full"></div>
            </div>
            <div class="flex flex-wrap -mx-2">
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block  absolute inset-0"
                    src={shortcircuit}
                  />
                  <div class="text-center relative w-full"></div>
                </div>
              </div>
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block  absolute inset-0"
                    src={babubhai}
                  />
                  <div class="text-center relative w-full"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 my-4 ">
              <img
                alt="gallery"
                class="w-full object-cover h-64 object-center block  absolute inset-0"
                src={TariSathe}
              />
              <div class="text-center relative w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}

      {/* <section class="text-gray-600 body-font relative">
                        <div class="absolute inset-0 bg-gray-300">
                        <iframe
                            width="100%"
                            height="100%"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                            title="map"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469981.774074309!2d72.467649!3d23.033588000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b9c02234b37%3A0x6498b64a5eeaebe5!2sHarekrishna%20Complex%2C%20Bopal%2C%20Ahmedabad%2C%20Gujarat%20380058%2C%20India!5e0!3m2!1sen!2sus!4v1678176615506!5m2!1sen!2sus"
                        ></iframe>
                        </div>
                        <div class="container px-5 py-24 mx-auto flex">
                        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                            Feedback
                            </h2>
                            <p class="leading-relaxed mb-5 text-gray-600">
                            Post-ironic portland shabby chic echo park, banjo fashion axe
                            </p>
                            <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            </div>
                            <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                            </div>
                            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                            </button>
                            <p class="text-xs text-gray-500 mt-3">
                            Chicharrones blog helvetica normcore iceland tousled brook viral
                            artisan.
                            </p>
                        </div>
                        </div>
                    </section> */}
    </div>
  );
}

const TagButton = ({name, handleSetTag}) =>{
    return<button onClick={() => handleSetTag(name)}>{name.toUpperCase()}</button>;
    
}
export default HOMEINDEX;
