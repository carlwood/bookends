import Link from 'next/link'

function Home() {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>{' '}
    </div>
  )
}

export default Home