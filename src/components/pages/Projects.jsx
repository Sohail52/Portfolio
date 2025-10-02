import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaRupeeSign } from 'react-icons/fa';
import faceEmotions from '../../assets/faceEmotions.png';
import cropModels from '../../assets/cropModels.png';
import hostelDB from '../../assets/hostelDB.png';
import openFabric from '../../assets/OpenFabric.png';

const Projects = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Small delay to ensure transition starts first

    return () => clearTimeout(timeout);
  }, []);

  const projects = [
    {
      title: "Open Fabric Challenge",
      description: "AI Creative Pipeline converting text prompts into 3D models using local LLMs, OpenFabric apps, and Docker.",
      image: openFabric, // import your project image from assets
      technologies: ["Python", "FastAPI", "Docker", "FAISS", "SQLite", "OpenFabric LLM"], // replace with actual tech you used
      github: "https://github.com/Sohail52/OpenFabric-challenge",
      live: "#", // add live link if deployed
      status: "In Progress"
  },
    {
    title: "Facial Emotion Recognition",
    description: "Real-time emotion detection system using CNN and OpenCV for live video input.",
    image: faceEmotions,
    technologies: ["Python", "TensorFlow", "OpenCV", "CNN"],
    github: "https://github.com/Sohail52/Face_Emotions",
    live: "#",
    status: "Completed"
  },
    {
    title: "Crop Disease Models",
    description: "Deep learning models for crop disease detection achieving 92% validation accuracy.",
    image: cropModels,
    technologies: ["Python", "TensorFlow", "Keras", "CNN"],
    github: "https://github.com/Sohail52/Crop_Models",
    live: "#",
    status: "Completed"
  },
    {
    title: "Hostel Management DB",
    description: "Web-based hostel management system with optimized MySQL database and user-friendly dashboard.",
    image: hostelDB,
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sohail52/Hostel-Management-DB",
    live: "#",
    status: "Completed"
  },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl text-center mb-16 text-gray-800"
      >
        My Projects
      </motion.h1>
      <div className="space-y-8 mb-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Project Image */}
              <div className="lg:w-3/4">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-white p-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* Project Details */}
              <div className="lg:w-2/4 p-6 bg-white">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="text-3xl text-gray-800"
                      >
                        {project.title}
                      </motion.h2>
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub className="w-5 h-5" />
                        </motion.a>
                        {project.status !== "In Progress" && (
                          <motion.a
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="text-gray-600 mb-4 text-sm"
                    >
                      {project.description}
                    </motion.p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.4 + skillIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-pastel-pink to-pastel-purple bg-opacity-10 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Live" ? "bg-green-500/90 text-white" :
                      project.status === "In Progress" ? "bg-yellow-500/90 text-white" :
                      "bg-blue-500/90 text-white"
                    }`}>
                      {project.status}
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer with Social Links */}
      <footer className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-6 mb-8">
          <div className="relative group">
            <motion.a
              href="https://github.com/Priyansh-max/Portfolio"
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
              href="upi://pay?pa=YOURUPIID@upi&pn=Priyansh%20Agarwal&cu=INR"
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
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="footer-text text-center text-gray-600"
        >
          Made with ❤️ by Syed Sohail Mehmood
        </motion.p>
      </footer>
    </motion.div>
  );
};

export default Projects; 