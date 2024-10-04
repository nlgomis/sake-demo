import { useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const SakeBottle3D = dynamic(() => import('./SakeBottle3D'), { ssr: false })

const textures = ['clear', 'frosted', 'patterned']

export default function Result({ sake }) {
  const [currentTexture, setCurrentTexture] = useState(textures[0])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-6xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 pr-8">
          <h2 className="text-3xl font-serif mb-6 text-navy dark:text-cream">Your Sake Match</h2>
          <h3 className="text-2xl font-medium mb-4 text-burgundy dark:text-burgundy-light">{sake.name}</h3>
          
          <p className="text-lg mb-8 text-navy dark:text-cream">{sake.description}</p>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium mb-4 text-navy dark:text-cream">Flavor Profile</h4>
            <div className="flex flex-wrap gap-2">
              {sake.flavorProfile.map((flavor, index) => (
                <motion.span 
                  key={index} 
                  className="bg-cream dark:bg-navy text-navy dark:text-cream py-1 px-3 rounded-full text-sm border border-navy dark:border-cream"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {flavor}
                </motion.span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-medium mb-4 text-navy dark:text-cream">Food Pairings</h4>
            <ul className="list-none space-y-2">
              {sake.foodPairings.map((pairing, index) => (
                <motion.li 
                  key={index} 
                  className="text-navy dark:text-cream"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {pairing}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="h-[500px] w-full">
            <SakeBottle3D texture={currentTexture} disableZoom={true} />
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            {textures.map((texture) => (
              <button
                key={texture}
                onClick={() => setCurrentTexture(texture)}
                className={`px-4 py-2 rounded-full text-sm ${
                  currentTexture === texture
                    ? 'bg-burgundy text-white dark:bg-burgundy-light dark:text-navy'
                    : 'bg-cream text-navy dark:bg-navy dark:text-cream'
                }`}
              >
                {texture.charAt(0).toUpperCase() + texture.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}