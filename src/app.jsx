import { component$ } from '@builder.io/qwik'

import './app.css'
import { SideBar } from './components/navbar/SideBar'
import enUS from './locales/en-US.json'

export const App = component$(() => {
  return (
    <>
      <div className='flex bg-gray-700 text-white'>
        <SideBar />
        <main className="p-4">
          <section>
            <h1>{enUS['section.home'].title}</h1>
            <h2>{enUS['section.home'].heading}</h2>
            <p>{enUS['section.home'].description}</p>
          </section>
        </main>
      </div>
    </>
  )
})
