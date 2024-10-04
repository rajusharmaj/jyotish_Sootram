import React from 'react'
import Header from '../components/Header/Header'
import Testimonials from '../components/Testimonials/Testimonials'
import About from '../components/About/About'
import Consultation from '../components/Phone_Consultation/Consultation'
import './Home.css'

const Home = () => {
  return (
    <div>
    <Header/>
   <div>
    <p>
    Dr. Ravi Tiwari is a distinguished astrologer in India, known for his unique approach that blends his expertise in computer science with his deep passion for astrology. Since 2019, he has been dedicated to the study of astrology, treating it as a mathematical science, inspired by Acharya Osho's belief that "Mathematics was discovered for astrology."

With an academic background in computer science, Dr. Tiwari has applied his analytical skills and logical reasoning to his astrological studies. Over the years, he has read more than a hundred books on astrology and has learned from experienced gurus, focusing particularly on KP Astrology, Lal Kitab Astrology, Lal Kitab Vastu Shastra, and Cuspal Interlink Astrology.

As the founder of the YouTube channel "Jyotish Sootram," Dr. Tiwari aims to simplify complex astrological concepts for his audience. His consultations are highly sought after by people both in India and abroad, including NRIs. His clientele includes individuals from diverse backgrounds and age groups, all of whom appreciate his methodical and thoughtful approach to astrology.

For those interested in a personalized astrological consultation, Dr. Tiwari can be reached via email at contact.jsootram@gmail.com. His consultations are designed to help individuals gain clarity and guidance on various life issues.
    </p>
   </div> 
   
    <About/>
    <hr/>
<Consultation/>
<hr/>
<Testimonials/>
</div>
  )
}

export default Home
