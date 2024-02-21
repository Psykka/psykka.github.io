import { component$ } from '@builder.io/qwik'

export const Language = component$(() => {
    return (
        <div className="sidebar-itens text-sm">
            <a href="/">EN</a>
            <a href="/">PT-BR</a>
        </div>
    )
})