import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import hotel from "@/assets/images/hotelImg.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import SectionHeader from "@/components/SectionHeader";
import solraImg from '@/assets/images/boxByldImg.png'
import Card from "@/components/Card";
const portfolioProjects = [
  {
    company: "The wild oasis",
    year: "2025",
    title: "Hotel booking management system.",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://thewild0asis.netlify.app/dashboard",
    image: hotel,
  },
  {
    company: "BoxBYLD",
    year: "2024",
    title: "Solar workforce collaboration and management.",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://www.technician.boxbyld.tech/home/homePage/",
    image: solraImg,
  },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24" id="projects">
    <div className="container">
      <SectionHeader title="Featured Projects" eyebrow="Real-world Results" description="See how I transformed concepts into engaging degital experience."/>
      <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
        {portfolioProjects.map((project, index) => (
          <Card key={project.title} className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"
          style={{
            top: `calc(64px + ${index * 40}px`
          }}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>.</span>
                <span>{project.year}</span>
              </div>

                <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckIcon className='size-5' />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-6">
                    <span>Visit Live Site</span>
                    <ArrowUpRight className='size-4 md:size-6' />
                  </button>
                </a>
                </div>
              <div className="relative">
                <Image className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" src={project.image} alt={project.title} />
              </div>

            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};
