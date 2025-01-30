
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import image1 from '../assets/image1.svg'
import image2 from '../assets/image2.svg'
import image3 from '../assets/image3.svg'
import { BsThreeDotsVertical } from "react-icons/bs";
import arrowupward from "../assets/arrowupward.svg"
const Review2 = () => {
    return (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-[90%] m-auto mb-[20px] block md:!hidden "
          >
            <SwiperSlide className='flex items-center  '>
                  <div className='w-[100%] m-auto  '>
                                <img src={image1} alt='image1' className='m-auto'/>
                            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='w-[100%] h-[340px] relative '>
                <div className='h-[280px] bg-btn1 rounded-[16px] relative  top-[52px] p-5'>
                   <div className='relative top-[90px] text-center leading-tight'>
                    <h2 className='font-inter font-bold text-[60px] text-white'>100+</h2>
                    <p className='font-inter text-[22px]  text-white'>Esteemed Clients and Partners</p>
                   </div>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                            <div className='w-[100%] h-[340px] relative '>
                                <div className='h-[220px] bg-white border rounded-[16px] relative  top-[110px] p-5'>
                                   <div className='relative top-[2px] text-center leading-tight'>
                                        <div className='flex justify-between items-center'>
                                            <img src={image2} alt="" />
                                            <BsThreeDotsVertical />
                                        </div>
                
                                        <div className='flex pt-3 font-inter text-[15px]'>
                                            <p className='pr-2 text-black font-inter'>Team Projects </p>
                                            <img src={arrowupward} alt="" />
                                            <p className='pl-1 text-[15px] font-inter'>8%</p>
                                           
                                        </div>
                
                                        <div className='flex flex-col items-start'>
                                        <h1 className='font-inter text-black text-[40px]  font-semibold'>1951+</h1>
                                      <p className='font-inter text-pcolor text-[15px] font-normal'>increase of 67 this month</p>
                                        </div>
                                   </div>
                                </div>
                            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='w-[100%] h-[340px] relative '>
                <div className='h-[280px] bg-darkgrey rounded-[16px] relative  top-[52px] p-5'>
                   <div className='relative top-[90px] text-center leading-tight'>
                    <h2 className='font-inter font-bold text-[60px] text-black'>6+</h2>
                    <p className='font-inter text-[22px]  text-black'>Years of Dedicated Service</p>
                   </div>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='w-[100%] h-[340px] relative '>
                                <div className='h-[320px] bg-btn1 rounded-[16px] relative  top-[12px] p-5'>
                                   <div className='relative top-[150px]  leading-tight'>
                                    <img src={image3} alt="" />
                                    <p className='font-inter text-[15px] pt-3 antialiased items-start text-bgcolor'>Achieve Optimal Efficiency and Boost Productivity.</p>
                                   </div>
                                </div>
                            </div>
            </SwiperSlide>
        
          </Swiper>
        </>
      );
    }

export default Review2





