import Button1 from "../../../components/Button1"
import Button2 from "../../../components/Button2"
import Stars from "../../../components/Stars"
const Hero = () => {
  return (
    <>
    <section className="w-full bg-bgcolor md:bg-star relative z-[10]">
        <div className='m-auto md:w-[70%] w-[90%] pt-[45px]'>
            <h1 className='text-darkblack font-inter font-bold md:text-[60px] text-[40px] text-center leading-tight'>
            The Future of Manufacturing with Latest Technology 
            </h1>

            <h2 className='text-pcolor font-inter font-[500] text-[16px] text-center leading-tight pt-[25px]'>
            Expert tech to elevate your Manufacturing. Let&apos;s take your business further. 
            </h2>

            <div className='flex w-[90%] md:w-[38%] m-auto justify-between pt-6'>
                <div>
              <Button1/>
                </div>
               <div>
               <Button2/>
               </div>
            </div>

            <div className='flex  w-[90%] m-auto justify-center mt-4  items-center'>
               <div className='flex '>
               <Stars/>
               <Stars/>
               <Stars/>
               <Stars/>
               <Stars/>
               </div>

               <h1 className='font-inter pl-3 text-[25px] pt-[2px] font-bold text-num'>5.0</h1>
            </div>

            <div className='text-center'>
                <p className='font-inter font-pcolor text-pcolor text-[17px] font-semibold'>From 80+ <span className='text-num font-bold'>reviews</span></p>
            </div>
        </div>

    </section>
    </>
  )
}

export default Hero