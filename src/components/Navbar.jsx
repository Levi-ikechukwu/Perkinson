import  { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Button1 from './Button1';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
 <>
 <nav className={`w-full bg-bgcolor h-20 sticky top-0 z-[1000] ${scrolled ? 'shadow-custom' : ''}`}>
  <div className='flex justify-between items-center py-3 w-[90%] m-auto '>
      <div className='flex  items-center'>
        <a href="/">
        <svg width="80" height="26" viewBox="0 0 81 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.1313 19.2676C24.3797 17.605 32.6807 17.1878 33.147 17.1878C34.523 17.1878 36.4282 17.0759 34.6729 16.5671C33.0885 15.965 31.7521 14.8483 30.8781 13.3961C29.5545 13.003 28.4393 12.1039 27.7743 10.8939C25.9129 10.6664 23.2788 9.43724 22.6037 8.58594C17.3461 8.26402 12.1712 7.1215 7.26674 5.19982C5.4105 4.43558 -0.0368018 0.782636 0.542964 0.588048C2.32156 -0.00818914 6.53121 1.14005 8.47451 1.34523C12.7877 1.80594 17.1334 1.7311 21.4797 1.86287C21.9767 1.87745 22.5218 1.86285 23.095 1.84991C25.1833 1.80097 27.6127 1.75087 29.1014 3.08923C31.1772 4.96171 38.9341 14.9311 40.9179 13.7777C41.3511 13.5245 40.4962 13.137 39.5195 12.8309C39.4683 12.8098 39.4251 12.7729 39.3963 12.7256C39.3674 12.6783 39.3544 12.623 39.3591 12.5678C39.3638 12.5126 39.3861 12.4603 39.4225 12.4185C39.459 12.3767 39.5078 12.3476 39.5619 12.3353C43.8694 11.3443 46.26 13.9179 51.6883 14.6354C56.1353 15.2236 56.6509 17.6681 55.9252 20.1201C55.4017 21.8834 56.4702 22.8857 55.917 24.1107C55.6327 24.7483 55.2492 24.2048 55.1821 24.0166C54.1499 21.0791 52.7873 17.9763 47.2821 19.834C45.4294 20.6096 43.4582 21.0641 41.4529 21.178C40.3072 21.2039 39.1619 21.1092 38.036 20.8956C36.7489 20.5967 35.4173 20.5408 34.1096 20.7309C32.7612 20.9787 32.1348 24.1309 30.3637 25.4912C30.253 25.5623 30.1223 25.5958 29.991 25.5867C28.4644 25.5867 23.891 22.8118 24.1313 19.2676ZM43.9565 11.5944C46.5998 9.13065 49.5014 5.50499 51.8996 3.08851C53.2158 1.76663 55.7631 1.80969 57.9125 1.84922C58.4923 1.86122 59.0382 1.87273 59.5262 1.85744C63.8601 1.72426 68.214 1.79957 72.5248 1.3398C74.4622 1.13392 78.6777 -0.0157354 80.457 0.582619C81.0368 0.777208 75.5895 4.42992 73.7323 5.19439C68.8284 7.11608 63.6541 8.25863 58.397 8.58054C58.136 9.12431 55.332 10.6779 53.2254 10.8864C53.2254 10.8864 52.0292 13.033 50.1414 13.3638C50.087 13.3732 50.0319 13.3777 49.9767 13.3775C48.9207 13.3808 46.1642 12.1928 43.9565 11.5944Z" fill="#040145"/>
      </svg>
        </a>
        <h1 className='font-inter text-btn1 font-semibold text-2xl hidden md:block'>Perkinson</h1>
      </div>

        <ul className=' md:flex items-center space-x-20 hidden '>
          <a href="/">Home</a>
          <a href="/">Home</a>
          <a href="/">Home</a>
          <a href="/">Home</a>
        </ul>

        <div className=''>
          <Button1/>
        </div>
      <div  className='w-[90%] text-[30px] md:hidden'>
      <RxHamburgerMenu className='w-[90%] text-[30px] md:hidden font-bold pr-4'/>
      </div>
  </div>
 </nav>
 </>
  )
}

export default Navbar