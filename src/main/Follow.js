import Pag from "./Pag";
export default Follow;

function Follow() {
    return (
        <div class="seguidores">
            <div class="paginas-perfil">
                <p class="p-perfil">Sugestões para você</p>
                <h1>Ver tudo</h1>
            </div>
            <Pag />
            <Pag />
            <Pag />
            <Pag />
            <Pag />
            <Pag />
            <div class="help">
                <p class="p-help">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma
                </p>
                <p class="p-empresa">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
}
