import { component$ } from '@builder.io/qwik'

export const Links = component$(() => {
    return (
        <div className="sidebar-itens text-lg gap-4">
            <a href="#">
                <i class="fa-solid fa-house" />
            </a>
            <a href="#about">
                <i class="fa-solid fa-user" />
            </a>
            <a href="#projects">
                <i class="fa-solid fa-code" />
            </a>
            <a href="#dev-blog">
                <i class="fa-solid fa-laptop-code" />
            </a>
            <a href="#contact">
                <i class="fa-solid fa-envelope" />
            </a>
        </div>
    )
})