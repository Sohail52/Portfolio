import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { BriefcaseIcon, CodeBracketIcon, HomeIcon, DocumentTextIcon, EnvelopeIcon, PlusIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { FaRupeeSign } from 'react-icons/fa';
import { BsBuildingsFill } from 'react-icons/bs';
import { IoLaptopOutline } from 'react-icons/io5';
import { Link as RouterLink } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import devConnect from '../../assets/devConnect.png';
import pmis from '../../assets/pmis.png';
import niu from '../../assets/niu.jpg';
import sixD from '../../assets/sixD.png';
import findMyTeam from '../../assets/findmyteam.png';
import iitkgp from '../../assets/iitkgp.png';
import profile from '../../assets/profile.jpeg';
import searchgpt from '../../assets/searchgpt.png';
import rnsit from '../../assets/rnsit.png';
import masyncai from '../../assets/masyncai.png'
import valeo from '../../assets/valeo.png'
import urlShortener from '../../assets/urlShortener.png'
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const Home = () => {
    const [flippedCards, setFlippedCards] = useState({});
    
    const handleCardFlip = (index) => {
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };
    
    const workExperience = [
  {
    company: "RNS Institute of Technology",
    position: "Research Intern",
    period: "Oct 2024 - May 2025",
    location: "Bangalore, India",
    type: "Internship",
    mode: "On-site",
    description: "Worked on deep learning and built CNN models for crop disease detection.",
    logo: rnsit,
    website: "https://www.rnsit.ac.in/"
  }
];

    
    const projects = [
  {
    title: "Masync AI",
    description: "MasyncAI is a dynamic web-based platform where you can generate complete websites from simple prompts.",
    image: masyncai, // import your project image asset
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "OpenAI API", "Gemini", "AWS Bedrock"],
    github: "https://github.com/Sohail52/MasyncAI", // replace with your repo if public
    live: "https://masync-ai.vercel.app", // replace with your live link if deployed
    status: "Live"
  },

  {
    title: "Valeo",
    description: "Valeo — a price tracking platform for Amazon products with automated alerts and dashboards to monitor price drops efficiently.",
    image: valeo, // import your project image asset
    technologies: ["Next.js", "TypeScript", "BrightData", "Cheerio", "MongoDB", "Cron Jobs"],
    github: "https://github.com/Sohail52/valeo", // replace with your repo if public
    live: "https://valeo-roan.vercel.app", // replace with your live link
    status: "Live"
  },

  {
    title: "Scalable URL Shortener",
    description: "A serverless URL shortener using Spring Boot and AWS, supporting 10K+ URLs with fast redirection and high reliability.",
    image: urlShortener, // import your project image asset
    technologies: ["Spring Boot", "AWS Lambda", "API Gateway", "DynamoDB", "React.js"],
    github: "https://github.com/Sohail52/url", // replace with your repo if public
    live: "https://url-steel.vercel.app/", // replace with your live link
    status: "Live"
  }
];

    
    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full bg-white"
        >
            <div className="max-w-4xl mx-auto">
              {/* Hero Section */}
              <Element name="about" className="px-4 py-8 mt-4 sm:px-6 lg:px-8">
                <motion.div 
                  className="flex flex-col md:flex-row items-center justify-between gap-8"
                  whileInView={{ 
                    opacity: [0, 1],
                    y: [20, 0]
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="profile-image">
                    <div className="profile-image-inner">
                      <motion.img
                        src={profile}
                        alt="Syed Sohail Mehmood"
                        className="w-full h-full object-cover rounded-md"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2,
                          ease: [0, 0.71, 0.2, 1.01]
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left max-w-xl"> 
                    <h1 className="text-6xl mb-4 text-gray-800">Hello, I'm Syed Sohail Mehmood</h1>
                    <p className="text-xl mb-2 text-gray-600">
                      A curious full-stack and backend developer who loves turning ideas into functional and beautiful web experiences. I enjoy combining code with creativity to build scalable, intuitive applications that users love.
                    </p>
                    <motion.a
                        href="mailto:ssohailm07@gmail.com"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-black hover:text-red-500 mb-2 relative group/email text-lg"
                      >
                        <span className="relative">
                          ssohailm07@gmail.com
                          <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-red-600 origin-left transform scale-x-0 transition-transform duration-300 group-hover/email:scale-x-100"></span>
                        </span>
                    </motion.a>
                    <div className="flex justify-center md:justify-start space-x-6 mt-4">
                      <motion.a
                      href="/resume.pdf" // Replace with your actual resume file path
                      download="Syed_Sohail_Mehmood_Resume.pdf"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-800 hover:text-gray-600 font-medium text-lg uppercase tracking-wide transition-colors duration-300"
                      title="Download Resume"
                    >
                      RESUME
                    </motion.a>
                      <motion.a
                        href="https://github.com/Sohail52"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-800 hover:text-gray-600 font-medium text-lg uppercase tracking-wide transition-colors duration-300"
                      >
                        GITHUB
                      </motion.a>
                      
                      <motion.a
                        href="https://x.com/syedsohail23253"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-800 hover:text-gray-600 font-medium text-lg uppercase tracking-wide transition-colors duration-300"
                      >
                        TWITTER
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/syed-sohail-mehmood-848763229/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-800 hover:text-gray-600 font-medium text-lg uppercase tracking-wide transition-colors duration-300"
                        >
                         LINKEDIN
                      </motion.a>

                    </div>
                  </div>
                </motion.div>
              </Element>
    
              {/* Work Experience Section */}
              <Element name="experience" className="px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-5xl text-center mb-16">Work Experience</h2>
                <div className="space-y-8">
                  {workExperience.map((work, index) => (
                    <motion.div
                      key={index}
                      whileInView={{ 
                        opacity: [0, 1],
                        y: [20, 0]
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="bg-gradient-to-r from-pastel-pink to-pastel-purple p-[1px] rounded-lg"
                    >
                      <div className="gap-4 items-start bg-white p-6 rounded-lg">
                        <div className='flex flex-row mb-4'>
                          <div className="flex-shrink-0 flex items-center gap-4">
                            <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shadow-md mr-4">
                              {work.logo ? (
                                <motion.a
                                  href={work.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block w-full h-full"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <img
                                    src={work.logo}
                                    alt={`${work.company} logo`}
                                    className="w-full h-full object-contain p-2 transition-transform duration-200"
                                  />
                                </motion.a>
                              ) : (
                                <BriefcaseIcon className="w-full h-full p-3 text-pastel-purple" />
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-3xl font-normal text-gray-800">{work.position}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                              <span className="font-semibold">{work.company}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>{work.period}</span>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <BsBuildingsFill className="w-4 h-4" />
                                <span>{work.type}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <IoLaptopOutline className="w-4 h-4" />
                                <span>{work.mode}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FaMapMarkerAlt className="w-4 h-4" />
                                <span>{work.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <p className="text-gray-600">{work.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Element>
                  {/* Tech Stack Section */}
<Element name="techstack" className="px-4 py-16 sm:px-6 lg:px-8">
  <h2 className="text-5xl text-center mb-16">Tech Stack</h2>
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* React.js */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
          <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346-1.203-3.768-1.851-6.12-1.851s-4.464.648-6.12 1.851c-1.44 1.044-2.376 2.52-2.736 4.32-.36 1.8-.144 3.672.63 5.472l6.48 15.048c.144.336.504.576.9.576s.756-.24.9-.576l6.48-15.048c.774-1.8.99-3.672.63-5.472-.36-1.8-1.296-3.276-2.736-4.32z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">React.js</h3>
      </div>
    </motion.div>

    {/* Next.js */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-black rounded-full group-hover:bg-gray-800 transition-colors">
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.394 2.7435.355 5.5633 2.0245 7.7734C3.0932 19.2425 3.9904 20.334 5.2 21.207c.3025.2185.6107.4158.9244.5934 1.5056.8544 3.233 1.311 4.9984 1.311.6565 0 1.3052-.0496 1.9393-.1456 3.4088-.5168 6.6017-3.1463 8.624-6.9728 1.1004-1.584 1.8204-3.3666 2.0924-5.255.394-2.7435-.355-5.5633-2.0245-7.7734-.9618-1.2425-1.859-2.334-3.0686-3.207-.3025-.2185-.6107-.4158-.9244-.5934C15.033.8544 13.3056.4 11.5725.4zm-.7308.0042c.3584 0 .7162.0138 1.0774.0414 3.5662.2697 6.9014 2.8144 8.624 6.9728.8004 1.584 1.2204 3.3666 1.0924 5.255-.128 1.888-.7096 3.6713-1.6924 5.255-1.9918 3.2096-5.1962 5.5633-8.624 6.9728-1.7842.7338-3.7338 1.0414-5.6828 1.0414-1.7842 0-3.5662-.4138-5.2-1.207-.9618-.4681-1.859-.9363-2.6486-1.6242C1.1004 17.416.3802 15.6334.1082 13.745c-.394-2.7435.355-5.5633 2.0245-7.7734C3.0932 4.7575 3.9904 3.666 5.2 2.793c.3025-.2185.6107-.4158.9244-.5934C7.6809.3456 9.4087 0 11.5725 0z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Next.js</h3>
      </div>
    </motion.div>

    {/* Tailwind CSS */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-cyan-50 rounded-full group-hover:bg-cyan-100 transition-colors">
          <svg className="w-10 h-10 text-cyan-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Tailwind CSS</h3>
      </div>
    </motion.div>

    {/* Node.js */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-green-50 rounded-full group-hover:bg-green-100 transition-colors">
          <svg className="w-10 h-10 text-green-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.137,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.276-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Node.js</h3>
      </div>
    </motion.div>

    {/* Express.js */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
          <svg className="w-10 h-10 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9-.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.641-6.5.315-7.918-2.898-.667-1.518-.814-3.197-.166-4.719zm8.716-3.768c-2.878.142-4.718 2.122-4.718 5.087H8.59c.04-1.519.758-3.36 2.828-4.24 1.668-.677 3.918.017 4.22 2.381.568-1.519-.17-2.613-1.224-3.228-1.05-.616-2.257-.642-3.696 0z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Express.js</h3>
      </div>
    </motion.div>

    {/* Spring Boot */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-green-50 rounded-full group-hover:bg-green-100 transition-colors">
          <svg className="w-10 h-10 text-green-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 01-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 01-1.065 1.89 2.943 2.943 0 00-.322-.083c-.158-.031-.287-.031-.406-.031-.287 0-.548.063-.774.189l-.287.126-.316-.126c-.2-.094-.419-.158-.649-.158-.158 0-.316.031-.467.063-.095.021-.191.042-.281.063-.174-.474-.36-.938-.57-1.39a9.172 9.172 0 014.137-.543zm-8.761 3.289c2.016 0 3.654 1.64 3.654 3.654 0 2.015-1.639 3.654-3.654 3.654-2.016 0-3.654-1.639-3.654-3.654 0-2.014 1.639-3.654 3.654-3.654z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Spring Boot</h3>
      </div>
    </motion.div>

    {/* Java */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
          <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Java</h3>
      </div>
    </motion.div>

    {/* Python */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-yellow-50 rounded-full group-hover:bg-yellow-100 transition-colors">
          <svg className="w-10 h-10 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.20-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.20.35-.14.33-.10.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Python</h3>
      </div>
    </motion.div>

    {/* MongoDB */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-green-50 rounded-full group-hover:bg-green-100 transition-colors">
          <svg className="w-10 h-10 text-green-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">MongoDB</h3>
      </div>
    </motion.div>

    {/* MySQL */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
          <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.152zm-5.77 3.118c-.207 0-.339.027-.406.054v.013l.027.027c.087.18.19.327.274.487.093.18.18.367.18.367l.013-.013c.094-.094.154-.24.154-.4-.04-.114-.067-.227-.12-.334-.055-.114-.154-.206-.274-.26-.027-.007-.04-.027-.067-.027-.014 0-.027 0-.04.007-.14.007-.294.04-.406.08zm9.8.127c-.047-.067-.1-.12-.154-.18-.12-.094-.267-.154-.4-.227-.04-.027-.1-.04-.133-.067-.107-.08-.154-.227-.267-.307-.133-.1-.267-.174-.4-.24-.133-.067-.267-.1-.4-.134-.04-.007-.1-.007-.14-.027-.087-.054-.154-.154-.267-.194-.227-.087-.467-.08-.707-.134-.1-.027-.194-.074-.294-.107-.267-.087-.534-.154-.827-.174-.14-.007-.28-.007-.42-.013-.107-.007-.214-.054-.32-.067-.227-.027-.454-.067-.68-.067-.227 0-.427.027-.627.067-.067.013-.127.027-.194.04-.107.027-.214.054-.32.094-.267.1-.534.247-.747.4-.067.047-.127.1-.18.154-.107.107-.154.267-.267.36-.107.093-.227.154-.32.267-.093.107-.154.227-.227.34-.067.107-.127.227-.154.347-.027.107-.027.227-.054.334-.027.227-.08.454-.08.68 0 .227.027.454.08.68.027.107.027.227.054.334.027.12.087.24.154.347.073.113.134.233.227.34.093.113.213.174.32.267.113.093.16.253.267.36.053.054.113.107.18.154.213.153.48.3.747.4.106.04.213.067.32.094.067.013.127.027.194.04.2.04.4.067.627.067.226 0 .453-.027.68-.067.106-.013.213-.06.32-.067.14-.006.28-.006.42-.013.293-.02.56-.087.827-.174.1-.033.194-.08.294-.107.24-.054.48-.047.707-.134.113-.04.18-.14.267-.194.04-.02.1-.02.14-.027.133-.034.267-.067.4-.134.133-.066.267-.14.4-.24.113-.08.16-.227.267-.307.033-.027.093-.04.133-.067.133-.073.28-.133.4-.227.054-.06.107-.113.154-.18.047-.067.08-.154.107-.24.027-.087.027-.18.013-.267-.014-.087-.067-.174-.133-.234z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">MySQL</h3>
      </div>
    </motion.div>

    {/* AWS */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1.0 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
          <svg className="w-10 h-10 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.2.072-.08 0-.16-.04-.239-.112-.112-.12-.207-.248-.279-.383-.072-.135-.144-.287-.2-.447-.503.592-1.135.888-1.887.888-.535 0-.96-.152-1.279-.447-.319-.304-.479-.71-.479-1.218 0-.537.191-.97.575-1.298.383-.329.888-.49 1.518-.49.207 0 .423.016.64.056.216.032.44.08.67.12V8.78c0-.537-.112-.91-.328-1.122-.215-.207-.583-.313-1.095-.313-.231 0-.471.032-.719.08-.248.056-.487.12-.719.2-.111.047-.191.08-.239.096-.048.016-.08.024-.104.024-.088 0-.135-.064-.135-.191V7.362c0-.096.016-.168.056-.215.04-.048.112-.096.2-.144.231-.12.511-.215.838-.295.336-.08.679-.12 1.031-.12.783 0 1.359.183 1.727.535.367.36.551.9.551 1.615v2.139zm-2.598 1.018c.2 0 .408-.04.624-.112.215-.08.408-.207.568-.384.096-.104.168-.216.2-.336.040-.12.064-.263.064-.431v-.616c-.168-.032-.343-.056-.535-.072-.191-.016-.383-.024-.575-.024-.407 0-.71.08-.902.24-.191.16-.287.384-.287.679 0 .271.072.479.207.615.151.12.375.191.655.191zm5.095.616c-.111 0-.191-.016-.231-.056-.048-.032-.08-.111-.104-.207L8.175 5.473c-.032-.111-.048-.183-.048-.231 0-.096.048-.152.151-.152h.614c.12 0 .2.016.239.056.048.032.08.111.104.207l1.007 3.958 1.007-3.966c.023-.096.056-.16.104-.199.048-.04.127-.056.239-.056h.502c.112 0 .191.016.239.056.048.032.08.111.104.207l1.007 3.974 1.031-3.974c.024-.096.056-.16.104-.199.048-.04.127-.056.231-.056h.583c.104 0 .16.048.16.152 0 .032-.008.063-.016.096-.008.032-.024.08-.048.135L13.316 11.41c-.024.111-.056.175-.104.207-.048.04-.127.056-.231.056h-.543c-.111 0-.191-.016-.239-.056-.048-.04-.08-.111-.104-.207L11.07 7.442l-1.007 3.958c-.023.096-.056.167-.104.207-.048.04-.127.056-.239.056h-.527zm8.431.183c-.32 0-.64-.04-.95-.104-.319-.072-.567-.144-.758-.232-.096-.048-.16-.104-.184-.144-.024-.04-.04-.111-.04-.191v-.192c0-.127.048-.191.136-.191.04 0 .08.008.12.024.04.016.096.04.16.064.231.104.479.183.75.231.279.048.551.08.838.08.44 0 .783-.08 1.023-.24.24-.16.36-.384.36-.679 0-.199-.064-.367-.184-.503-.127-.135-.335-.263-.614-.375l-.886-.279c-.447-.144-.774-.36-.99-.647-.207-.287-.318-.606-.318-.95 0-.271.056-.51.175-.718.12-.207.279-.383.487-.51.207-.135.447-.231.719-.295.271-.064.55-.104.838-.104.144 0 .287.008.423.032.144.016.279.048.415.08.127.032.248.072.36.112.111.048.199.096.255.144.088.064.151.127.175.2.024.071.04.151.04.231v.183c0 .127-.048.191-.135.191-.048 0-.12-.016-.2-.048-.287-.135-.606-.2-.95-.2-.415 0-.734.063-.958.2-.231.135-.343.343-.343.606 0 .199.071.375.207.51.135.144.359.271.67.384l.878.287c.447.144.774.335.966.575.2.24.295.527.295.863 0 .279-.056.526-.167.758-.112.231-.271.431-.479.582-.207.151-.455.271-.734.343-.287.08-.583.12-.894.12z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">AWS</h3>
      </div>
    </motion.div>

    

    {/* PostgreSQL */}
    <motion.div
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="group"
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
          <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.128 0C15.623 0 14.308.418 13.595 1.138c-.712.721-.712 1.655-.712 2.589v.712c0 .361.057.668.114.975.228 1.216.684 2.318 1.425 3.534 1.14 1.825 2.793 4.187 2.793 5.346 0 .855-.057 1.596-.342 2.28-.285.684-.741 1.253-1.425 1.652-.684.399-1.539.627-2.451.627-1.368 0-2.622-.57-3.363-1.71-.741-1.139-.741-2.85-.741-4.047V8.208c0-1.596-.456-2.85-1.482-3.762C6.406 3.534 4.867 3.077 2.964 3.077 1.368 3.077 0 4.444 0 6.041v11.918c0 1.596 1.368 2.964 2.964 2.964h.057c.741 0 1.425-.342 1.881-.912.456-.57.57-1.311.57-1.881 0-1.14.456-2.166 1.31-2.85.855-.685 2.052-1.025 3.306-1.025 1.539 0 2.964.456 4.046 1.31 1.083.855 1.71 2.052 1.71 3.363v.685c0 .855.285 1.596.856 2.166.57.57 1.31.856 2.166.856 1.254 0 2.394-.627 3.02-1.596.627-.969.912-2.166.912-3.306V6.041c0-1.596-1.368-2.964-2.964-2.964-.399 0-.798.114-1.14.285-.342.171-.627.456-.798.798-.171.342-.228.741-.228 1.14v8.268c0 .57-.228 1.083-.627 1.482-.399.399-.912.627-1.482.627-.57 0-1.083-.228-1.482-.627-.399-.399-.627-.912-.627-1.482V6.041c0-1.596 1.368-2.964 2.964-2.964.57 0 1.14.171 1.596.513.456.342.798.798 1.025 1.311.228.513.285 1.083.285 1.596v8.268c0 .285.114.57.342.741.228.171.513.228.798.228.285 0 .57-.057.798-.228.228-.171.342-.456.342-.741V6.041C24 2.964 21.036 0 17.128 0z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">PostgreSQL</h3>
      </div>
    </motion.div>
  </div>
</Element>

              
    
              {/* Projects Section */}
              <Element name="projects" className="px-4 py-8 sm:px-6 lg:px-8">
                <h2 className="text-5xl text-center mb-16">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      whileInView={{ 
                        opacity: [0, 1],
                        y: [20, 0]
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="polaroid group perspective"
                    >
                      <div className={`relative preserve-3d duration-500 ${flippedCards[index] ? '[transform:rotateY(180deg)]' : ''}`}>
                        {/* Front of card */}
                        <div className="backface-hidden">
                          <div className="relative aspect-video bg-gray-200 mb-4 rounded-lg overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-3xl text-gray-800">{project.title}</h3>
                            <div className="relative group/tooltip">
                              <motion.button
                                onClick={() => handleCardFlip(index)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="focus:outline-none"
                              >
                                <InformationCircleIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                              </motion.button>
                              <span className="absolute -top-2 left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 whitespace-nowrap">
                                Click to see details
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gradient-to-r from-pastel-pink to-pastel-purple bg-opacity-10 text-gray-700 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              project.status === "Completed" ? "bg-green-500/90 text-white" :
                              project.status === "In Progress" ? "bg-yellow-500/90 text-white" :
                              "bg-green-500/90 text-white"
                            }`}>
                              {project.status}
                            </span>
                            <div className="flex items-center gap-3">
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 bg-gray-900 hover:bg-gray-800 rounded-full text-white transition-colors"
                              >
                                <FaGithub className="w-5 h-5" />
                              </motion.a>
                              {project.status !== "In Progress" && (
                                <motion.a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="p-2 bg-gray-900 hover:bg-gray-800 rounded-full text-white transition-colors"
                                >
                                  <FaExternalLinkAlt className="w-4 h-4" />
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Back of card */}
                        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-white rounded-lg p-6">
                          <div className="flex flex-col h-full justify-between">
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">About {project.title}</h3>
                                <motion.button
                                  onClick={() => handleCardFlip(index)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="p-1 hover:bg-gray-100 rounded-full"
                                >
                                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </motion.button>
                              </div>
                              <p className="text-gray-600 leading-relaxed">{project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center mt-12">
                  <RouterLink 
                    to="/projects" 
                    className="group relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <PlusIcon className="w-8 h-8 text-gray-600 group-hover:text-pastel-purple transition-colors duration-300" />
                    </motion.div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      View More Projects
                    </span>
                  </RouterLink>
                </div>
              </Element>
    
              {/* Footer with Social Links */}
              <footer className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center gap-6 mb-8">
                  <div className="relative group">
                    <motion.a
                      href="https://github.com/Sohail52/Portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
                    >
                      <AiFillStar className="w-6 h-6" />
                    </motion.a>
                    
                    {/* Star Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
                      Star this repo
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                    </div>
                  </div>

                  {/* <div className="relative group">
                    <motion.a
                      href="upi://pay?pa=7486949525@ptsbi@upi&pn=Priyansh%20Agarwal&cu=INR"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                    >
                      <FaRupeeSign className="w-5 h-5" />
                    </motion.a> */}
                    
                    {/* Rupee Tooltip */}
                    {/* <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
                      Support my work with UPI
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                    </div>
                  </div> */}
                </div>
                <p className="footer-text text-center text-gray-600">Made with ❤️ by Syed Sohail Mehmood</p>
              </footer>
            </div>
        </motion.main>
    );
};

export default Home; 
