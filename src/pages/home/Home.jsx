import React from 'react'
import CreatePost from './CreatePost'
import Posts from './Posts'

export default function Home() {
  return (
    <section className='flex-1'>
      <CreatePost/>
      <Posts/>
    </section>
  )
}
