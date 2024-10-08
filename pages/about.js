import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function AboutSake() {
  const sakeInfo = [
    { title: "日本酒とは？", content: "日本酒は、発酵させたお米から作られる伝統的な日本のアルコール飲料です。「米のワイン」とも呼ばれますが、実際には製造過程はビールに近いです。" },
    { title: "醸造過程", content: "日本酒は、糠を取り除くために精米された米を発酵させて作られます。基本的な材料は、米、水、麹（カビの一種）、酵母です。" },
    { title: "日本酒の種類", content: "純米酒、吟醸酒、大吟醸酒、にごり酒など、様々な種類の日本酒があります。それぞれの種類は、精米歩合と醸造方法によって独自の特徴を持っています。" },
    { title: "提供温度", content: "日本酒は、冷やから常温、温めたものまで、日本酒の種類や好みに応じて様々な温度で楽しむことができます。" },
    { title: "日本酒のマナー", content: "日本では、他の人のために日本酒を注ぐのが習慣で、自分で自分に注がないのが一般的です。日本酒をいただく際は、両手で軽く杯を持ち上げるのがマナーです。" }
  ]

  return (
    <Layout title="日本酒について - 酒先生">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-display-large font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          日本酒について
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