export default class Navbar {

    #elem = undefined;

    constructor() {

        const navbar = this.#createNavbar();

        document
            .querySelector('header')
            .insertAdjacentHTML('afterbegin', navbar);

    }

    #createNavbar() {

        return /*html*/ `
            <nav>
                <ul>
                    <li class="logo">
                        <a href="/">
                            <span>Hemfix & Flytt</span>
                        </a>
                    </li>

                    <li class="menu-item">
                        <a href="/">Hem</a>
                    </li>

                    <li class="menu-item">
                        <a href="/pages/about/about.html">Om oss</a>
                    </li>

                    <li class="menu-item">
                        <a href="/pages/services/services.html">Tjänster</a>
                    </li>

                    <li class="menu-item">
                        <a href="/pages/moving/moving.html">Flytt</a>
                    </li>

                    <li class="menu-item">
                        <a href="/pages/cleaning/cleaning.html">Städning</a>
                    </li>

                    <li class="menu-item">
                        <a href="/pages/garden/garden.html">Trädgård</a>
                    </li>

                    <li class="menu-item">
                        <a href="/pages/booking/booking.html">Bokning</a>
                    </li>

                    <li class="menu-item">
                        <a href="/pages/contact/contact.html">Kontakt</a>
                    </li>
                </ul>
            </nav>
        `;
    }

}