import Link from 'next/link';
import Subreddit from '../../../components/Subreddit';

import { useRouter } from 'next/router'

const R = () => {
  const router = useRouter()
  const { subreddit } = router.query

  return <Subreddit subredditName={subreddit} />
}

export default R