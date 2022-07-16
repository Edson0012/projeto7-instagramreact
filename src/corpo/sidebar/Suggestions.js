export default function Suggestions(props) {
    console.log(props);
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.user.img} />
                <div class="texto">
                    <div class="nome">{props.user.username}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}
