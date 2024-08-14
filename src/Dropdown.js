import React, { useState } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Dropdown({ title, links, color }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,  
        duration: 0.8, 
      },
    }),
  };

  return (
    <div className="relative inline-block text-left">
      <motion.button
        onClick={toggleDropdown}
        className="inline-flex justify-center text-gray-500 text-xl font-bold hover:bg-gray-50"
        initial={{ scale: 1, color: "#4B5563" }}
        animate={{ scale: isOpen ? 1.1 : 1, color: isOpen ? "#1D4ED8" : "#4B5563" }}
        transition={{ duration: 0.2 }}
      >
        {title}
        {isOpen ? (
          <FaTimes className="ml-2 mt-2" size={16} />
        ) : (
          <FaChevronDown className="ml-2 mt-2" size={16} />
        )}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-16 left-0 w-full z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          style={{ maxHeight: '500px', overflowY: 'auto', transformOrigin: 'top' }}
        >
          <div className="flex justify-end p-2">
            <button onClick={toggleDropdown} className="text-gray-500 hover:text-gray-700">
              X
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4 p-4">
            {links.map((section, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                <h4 className={`font-bold ${color}`}>{section.title}</h4>
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.link} className="text-black-500 hover:text-blue-300 text-xl">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Dropdown;
