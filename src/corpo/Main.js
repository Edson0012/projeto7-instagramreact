import Sidebar from "./sidebar/Sidebar";
import Post from "./storys/Post";
import Story from "./storys/Story";

export default function Main() {
    const storys = [
        {
            img: "./assets/img/9gag.svg",
            username: "9gag",
        },
        {
            img: "./assets/img/meowed.svg",
            username: " meowed",
        },
        {
            img: "./assets/img/barked.svg",
            username: "barked",
        },
        {
            img: "./assets/img/nathanwpylestrangeplanet.svg",
            username: "nathanwpylestrangeplanet",
        },
        {
            img: "./assets/img/wawawicomics.svg",
            username: "wawawicomics",
        },
        {
            img: "./assets/img/respondeai.svg",
            username: "respondeai",
        },
        {
            img: "./assets/img/filomoderna.svg",
            username: "filomoderna",
        },
        {
            img: "./assets/img/memeriagourmet.svg",
            username: "memeriagourmet",
        },
    ];

    const posts = [
        {
            profilePicture: "./assets/img/meowed.svg",
            username: " meowed",
            imgContent: "./assets/img/gato-telefone.svg",
            lastImg: "./assets/img/respondeai.svg",
            likeName: "respondeai",
            likeAmount: "101.523",
        },
        {
            profilePicture: "./assets/img/meowed.svg",
            username: " meowed",
            imgContent: "./assets/img/gato-telefone.svg",
            lastImg: "./assets/img/respondeai.svg",
            likeName: "respondeai",
            likeAmount: "101.523",
        },
    ];

    return (
        <div class="corpo">
            <div classNameName="esquerda">
                <div className="stories">
                    {storys.map((data) => (
                        <Story story={data} />
                    ))}

                    <div className="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div className="posts">
                    {posts.map((data) => (
                        <Post pots={data} />
                    ))}
                </div>
            </div>
            <Sidebar />
        </div>
    );
}
