import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function AboutSake() {
  const sakeInfo = [
    { title: "What is Sake?", content: "Sake is a traditional Japanese alcoholic beverage made from fermented rice. Often referred to as 'rice wine,' sake is actually closer to beer in its brewing process." },
    { title: "Brewing Process", content: "Sake is made by fermenting rice that has been polished to remove the bran. The basic ingredients are rice, water, koji (a type of mold), and yeast." },
    { title: "Types of Sake", content: "There are several types of sake, including Junmai, Ginjo, Daiginjo, and Nigori. Each type has its own unique characteristics based on the rice polishing ratio and brewing method." },
    { title: "Serving Temperature", content: "Sake can be enjoyed at various temperatures, from chilled to room temperature to warm, depending on the type of sake and personal preference." },
    { title: "Sake Etiquette", content: "In Japan, it's customary to pour sake for others and not for yourself. When receiving sake, hold your cup up slightly with both hands." }
  ]

  return (
    <Layout title="About Sake - Sake Sensei">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-display-large font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Sake
        </motion.h1>
        <div className="space-y-12">
          {sakeInfo.map((info, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-headline-medium font-semibold mb-4">{info.title}</h2>
              <p className="text-body-large text-gray-dark">{info.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  )
}