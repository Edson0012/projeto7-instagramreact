import StorysStatus from "./StorysStatus";
import Time from "./Time";
import Follow from "./Follow";
export default Main;

function Main() {
    const userPosts = [
        {
            img: "./assets/img/meowed.svg",
            user: "meowed",
            contentImg: "./assets/img/gato-telefone.svg",
            likeIcon: "assets/img/respondeai.svg",
            likeUser: "respondeai",
            likeQuantity: "outras 101.523 pessoas",
        },
        {
            img:"./assets/img/barked 1.svg",
            user:"barked",
            contentImg:"./assets/img/dog 1.svg",
            likeIcon:"./assets/img/adorableanimals 1.svg",
            likeUser:"adorable_animals",
            likeQuantity:,
            
        }
    ];

    return (
        <main>
            <div class="container">
                <div class="box-storys">
                    <StorysStatus />
                    <StorysStatus />
                    <StorysStatus />
                    <StorysStatus />
                    <StorysStatus />
                    <StorysStatus />
                    <StorysStatus />
                    <StorysStatus />
                    <img
                        class="icon-next-story"
                        src="./assets/img/chevron-forward-circle 1.svg"
                        alt=""
                    />
                </div>
                <Time />
                <Time />
                <Time />
                <div class="sidebar">
                    <div class="referencias-topo">
                        <img src="./assets/img/catanacomics 1.svg" />
                        <div class="caixa-referencia">
                            <h1>catanacomics</h1>
                            <p class="p-perfil">Catana</p>
                        </div>
                    </div>
                    <Follow />
                </div>
            </div>
        </main>
    );
}
