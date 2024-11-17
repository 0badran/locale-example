'use client'
import Navbar from '@/components/Navbar';
import useSWR from 'swr';
import UserCard from '@/components/UserCard'
const fetcher = (...args: any[]) => fetch(...args).then(res => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  )
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to fetch users</div>

  return <>
    <Navbar />
    <section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6 mx-6'>
      {
        data.map((user: any) => (
          <div key={user.id}>
            <UserCard user={user} />
          </div>
        ))
      }
    </section>
  </>
}