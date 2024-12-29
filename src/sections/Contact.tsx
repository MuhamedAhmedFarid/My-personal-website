import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImg from '@/assets/images/grain.jpg'
export const ContactSection = () => {
  return <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
    <div className='container'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
        <div className='inset-0 absolute opacity-5 -z-10' style={{
          backgroundImage: `url(${grainImg.src})`
        }}></div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
          <div>
            <h2 className='font-serif text-2xl md:text-3xl'>Lets create something amazing togather</h2>
            <p className='text-sm mt-2 md:text-base'>Ready to bring your next project to life? Lets connect and discuss how I can help you achieve your goal.</p>
          </div>
          <div>
            <button className='text-white bg-gray-900 inline-flex items-center border border-gray-900 px-6 h-12 rounded-xl gap-2'>
              <span className='font-semibold w-max'>Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>;
};
