export default Header;

function Header() {
    return (
        <header>
            <nav class="navbar">
                <div class="box-logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="./assets/img/logo 1.svg" />
                </div>
                <div class="box-pesquisar">
                    <p class="p-pesquisar">Pesquisar</p>
                </div>
                <div class="box-icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </nav>
            <nav class="nav-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
                <a href="google.com">
                    <img src="./assets/img/logo 1.svg" />
                </a>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </nav>
            <nav class="nav-mobile-end">
                <div class="box-nav-end">
                    <ion-icon name="home"></ion-icon>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </nav>
        </header>
    );
}
