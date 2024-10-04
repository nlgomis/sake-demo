import React from 'react';
import { motion } from 'framer-motion';

const Question = ({ question, onAnswer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto my-12 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-serif mb-8 text-center text-gray-800 dark:text-gray-200">
        {question.text}
      </h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onAnswer(option.value)}
            className="w-full p-4 text-left bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition duration-300 ease-in-out text-gray-800 dark:text-gray-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {option.text}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Question;