import { component$ } from '@builder.io/qwik'
import { Links } from './Links'
import { Language } from './Language'
import { Social } from './Social'

export const SideBar = component$(() => {
    return (
        <aside className="top-0 left-0 h-screen w-24 p-4 flex flex-col justify-between bg-gray-800 text-white shadow-lg">
            <div className="flex flex-col items-center gap-4">
                <img src="https://github.com/Psykka.png" alt="Avatar" className="rounded-full" />
                <i class="fa-solid fa-sun" />
                <Language />
            </div>
            <Links />
            <Social />
        </aside>
    )
})