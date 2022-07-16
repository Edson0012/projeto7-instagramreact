import Suggestions from "./Suggestions";

export default function Sidebar() {
    const users = [
        {
            img: "./assets/img/bad.vibes.memes.svg",
            username: "bad.vibes.memes",
        },
        {
            img: "./assets/img/chibirdart.svg",
            username: "chibirdart",
        },
        {
            img: "./assets/img/razoesparaacreditar.svg",
            username: "razoesparaacreditar",
        },
        {
            img: "./assets/img/adorable_animals.svg",
            username: "adorable_animals",
        },
        {
            img: "./assets/img/smallcutecats.svg",
            username: "smallcutecats",
        },
    ];

    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {users.map((data) => (
                    <Suggestions user={data} />
                ))}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma
            </div>

            <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
        </div>
    );
}
