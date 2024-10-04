import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Result from '../components/Result'
import sakeTypes from '../data/sakeTypes'

export default function ResultPage() {
  const router = useRouter()
  const { type } = router.query

  const sake = sakeTypes.find(sake => sake.type === type)

  return (
    <Layout title="Your Sake Personality Result">
      <div className="max-w-2xl mx-auto">
        {sake ? (
          <Result sake={sake} />
        ) : (
          <p className="text-center text-primary">Loading your result...</p>
        )}
      </div>
    </Layout>
  )
}