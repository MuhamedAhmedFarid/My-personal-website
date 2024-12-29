import StartIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react';
export const TapeSection = () => {
  const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Freindly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable"
  ]
  return <div className='py-16 lg:py-24'>
    <div className='bg-gradient-to-r overflow-x-clip from-emerald-300 to-sky-400  -rotate-3 -mx-1'>
      <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>

        <div className='flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]'>
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {words.map(word => (
                <div key={word} className='inline-flex items-center gap-4'>
                  <span className='text-gray-900 uppercase font-extrabold text-sm '>{word}</span>
                  <StartIcon className='size-6 text-gray-900 -rotate-12' />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>

  </div>;
};
