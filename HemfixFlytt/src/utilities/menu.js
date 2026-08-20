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
                        <a href="/index.html">
                            <span>Hemfix & Flytt</span>
                        </a>
                    </li>

                    <li class="menu-item">
                        <a href="/index.html">Hem</a>
                    </li>

                    <li class="menu-item">
                        <a href="/about.html">Om oss</a>
                    </li>

                    <li class="menu-item">
                        <a href="/services.html">Tjänster</a>
                    </li>

                    <li class="menu-item">
                        <a href="/moving.html">Flytt</a>
                    </li>

                    <li class="menu-item">
                        <a href="/cleaning.html">Städning</a>
                    </li>

                    <li class="menu-item">
                        <a href="/garden.html">Trädgård</a>
                    </li>

                    <li class="menu-item">
                        <a href="/booking.html">Bokning</a>
                    </li>

                    <li class="menu-item">
                        <a href="/contact.html">Kontakt</a>
                    </li>

                </ul>

            </nav>

        `;
    }

}