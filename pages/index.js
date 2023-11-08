import { Header, Profile, About, Skill, Project, Contact } from '../components'

export default function Home() {
  return (
    <div className='bg-slate-800'>

      <Header />
      <Profile />
      <About />
      <Project />
      <Skill />
      <Contact />
    </div>
  )
}
