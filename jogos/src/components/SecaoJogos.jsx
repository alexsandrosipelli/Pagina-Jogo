import CardJogo from"./CardJogo";
export default function secaoJogos(props){
    const { jogosList } = props
   
    return (
        jogosList.map(jogo => <CardJogo jogo={jogo}     />)


    )

}