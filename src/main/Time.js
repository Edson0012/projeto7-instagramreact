export default Time;

function Time() {
    return (
        <div class="time-line">
            <div class="perfil-post">
                <div class="perfil">
                    <img src="./assets/img/meowed 2.svg" />
                    <a href="https://andredj64.wixsite.com/website/blog">
                        <h1>dede leandro</h1>
                    </a>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <img class="foto-post" src="./assets/img/gato-telefone 1.svg" />
            <div class="perfil-interacao">
                <div class="interacoes-like">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="interacoes-salvar">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class="comentarios-perfil">
                <img
                    class="mini-icon-foto"
                    src="./assets/img/respondeai 2.svg"
                />
                <h3>
                    Curtido por <strong>respondeai</strong> e
                    <strong>outras 101.523 pessoas</strong>
                </h3>
            </div>
        </div>
    );
}
