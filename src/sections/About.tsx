'use client'
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from '@/assets/icons/star.svg'
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'

import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import mapImage from '@/assets/images/egyptmap.jpg'
import smileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

import { motion } from 'framer-motion'
import { useRef } from "react";
export const AboutSection = () => {
  const constrainRef = useRef(null)
  const toolboxItems = [
    {
      title: 'JavaScript',
      iconType: JavaScriptIcon
    },
    {
      title: 'HTML5',
      iconType: HTMLIcon
    },
    {
      title: 'CSS3',
      iconType: CssIcon
    },
    {
      title: 'React',
      iconType: ReactIcon
    },
    {
      title: 'Chrome',
      iconType: ChromeIcon
    },
    {
      title: 'Github',
      iconType: GithubIcon
    },
  ]
  const hobbies = [
    {
      title: 'Painting',
      emoji: '🎨',
      left: '5%',
      top: '5%'
    },
    {
      title: 'Photography',
      emoji: '📸',
      left: '50%',
      top: '5%'
    },

    {
      title: 'Hiking',
      emoji: '🗻',
      left: '35%',
      top: '40%'
    },
    {
      title: 'Gaming',
      emoji: '🎮',
      left: '10%',
      top: '35%'
    },
    {
      title: 'Music',
      emoji: '🎵',
      left: '70%',
      top: '45%'
    },
    {
      title: 'Fitness',
      emoji: '🏋️‍♀️',
      left: '5%',
      top: '65%'
    },
    {
      title: 'Fitness',
      emoji: '🏋️‍♀️',
      left: '5%',
      top: '70%'
    },
    {
      title: 'Reading',
      emoji: '📚',
      left: '45%',
      top: '70%'
    },
  ]
  return <section className="pb-20" id="about">
    <div className="container">
      <SectionHeader eyebrow="About Me" title="A Glimpse into My World" description="Learn more about who I am, what i do, and what inspires me." />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-col-1 md:grid-cols-5 gap-8">
          <Card className="h-[320px] md:col-span-2">
            <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
            <div className="w-40 mx-auto mt-8 ">
              <Image src={bookImage} alt="Book cover" className="" />
            </div>
          </Card>
          <Card className="h-[320px] p-0 md:col-span-3">
            <CardHeader title="My ToolBox" description="Explore the technologies and tool I use to craft exceptional digital experiences." className="px-6 pt-6" />
            <div>

              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName='-translate-x-1/2 animate-move-right [animation-duration:15s]' />
            </div>
          </Card>
        </div>


        <div className="grid md:gap-8 grid-cols-1 md:grid-cols-5">
          <Card className="h-[320px] p-0 flex flex-col col-span-3 mb-8">
            <CardHeader title="Beyond the Code" description="Explore my intersets and hobbies beyond the digital realm." className="px-6 py-6" />
            <div className="relative flex-1" ref={constrainRef}>
              {hobbies.map(hobby => (
                <motion.div key={hobby.title} drag dragConstraints={constrainRef} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                  left: hobby.left,
                  top: hobby.top
                }}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px]  p-0 relative md:col-span-2">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline:offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="inset-0 absolute rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="inset-0 absolute rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10">

              </div>
              <Image src={smileMemoji} alt="smiling memoji" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>;
};
