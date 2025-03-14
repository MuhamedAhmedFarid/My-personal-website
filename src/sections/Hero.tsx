'use client'
import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import HeroOrbit from '@/components/HeroOrbit';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

export const HeroSection = () => {
  return (
    <section className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip' id='home'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div className='absolute inset-0 -z-10 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>

        <HeroOrbit size={430} rotation={-14} orbit orbitDuration='30s' spin spinDuration="3s"><SparkleIcon className='size-8 text-emerald-300/20' /></HeroOrbit>
        <HeroOrbit size={440} rotation={79} orbit orbitDuration='32s' spin spinDuration="3s"><SparkleIcon className='size-5 text-emerald-300/20'/></HeroOrbit>
        <HeroOrbit size={520} rotation={-5} orbit orbitDuration='34s'><div className='size-2 bg-emerald-300/20 rounded-full'/></HeroOrbit>
        <HeroOrbit size={530} rotation={178} orbit orbitDuration='36s' spin spinDuration="3s"><SparkleIcon className='size-10 text-emerald-300/20' /></HeroOrbit>
        <HeroOrbit size={550} rotation={20} orbit orbitDuration='38s' spin spinDuration="6s"><StarIcon className='size-12 text-emerald-300' /></HeroOrbit>
        <HeroOrbit size={590} rotation={98} orbit orbitDuration='40s' spin spinDuration="6s"><StarIcon className='size-8 text-emerald-300' /></HeroOrbit>
        <HeroOrbit size={650} rotation={-41} orbit orbitDuration='42s'><div className='size-2 bg-emerald-300/20 rounded-full' /></HeroOrbit>
        <HeroOrbit size={710} rotation={144} orbit orbitDuration='44s' spin spinDuration="3s"><SparkleIcon className='size-14 text-emerald-300/20' /></HeroOrbit>
        <HeroOrbit size={720} rotation={85} orbit orbitDuration='46s'><div className='size-3 bg-emerald-300/20 rounded-full' /></HeroOrbit>
        <HeroOrbit size={800} spin rotation={-72}  spinDuration="6s" orbit orbitDuration='48s'><StarIcon  className='size-28 text-emerald-300'/></HeroOrbit> 
   
      </div>
      <div className="container">
        <div className='flex flex-col items-center'>
          <Image className='size-[100px]' src={memojiImage} alt='Person peeking from behind a laptop' />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg' >
            <div className='bg-green-500 size-2.5 inset-0 rounded-full relative'>
              <div className='bg-green-500 size-2.5 rounded-full animate-ping-large '></div>
            </div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Excptional User Experiences</h1>
          <p className='mt-4 text-center md:text-lg text-white/60'>Im an independent designer My interset lies in brand experience, and user experience</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4 '>
          <ScrollLink smooth={true} to='projects' className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10 cursor-pointer'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4' />
          </ScrollLink>
          <Link href='contact' className='inline-flex items-center gap-2 border border-white z-10 bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer'>
            <span className=''>👋</span>
            <span className='font-semibold'>Lets Connect</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
