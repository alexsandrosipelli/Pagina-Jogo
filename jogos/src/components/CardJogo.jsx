
export default function Cardjogo({ jogo }) {

    return (

        <div className="flex flex-col p-3 w-56">
            <img className="rounded-lg" src={jogo.poster} />
            <h4 classsName="text-xl my-2 line-clamp-1 w-fit">{jogo.titulo} </h4>
            <div>
                <span className="text-lg "> {jogo.nota}</span>
            </div>
            <a href="#" className="rounded-lg bg-cyan-700 py-2 text-center"  >detalhes</a>
        </div >
    )


}