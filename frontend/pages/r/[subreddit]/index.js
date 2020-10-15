import Link from 'next/link';

import { useRouter } from 'next/router'

const R = () => {
  const router = useRouter()
  const { subreddit } = router.query

  return <p>Post: {subreddit}</p>
}

export default R