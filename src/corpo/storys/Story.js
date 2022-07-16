export default Storys;

function Storys(props) {
    console.log(props);
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.story.img} />
            </div>
            <div className="usuario">{props.story.username}</div>
        </div>
    );
}
