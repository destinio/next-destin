import { useRouter } from 'next/router'

export default function City() {
  const router = useRouter()
  const { id } = router.query

  return <>{id}</>
}
