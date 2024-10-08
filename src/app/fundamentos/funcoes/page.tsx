export default function Page(){

function rendenizarTitulo(){
    return(
        <div>

            <h1 className="text-red-500 text-6xl font-black">Titulo</h1>
            <h2 className="text-green-500 text-4xl ">SubTitulo</h2>
        </div>
    )
}

function rendenizarConteudo(){
    return(
        <ul>
           <li>Ana</li>
           <li>Carlos</li>
           <li>Zico</li>
        </ul>
    )
}

    return(
        <div>
            {rendenizarTitulo()}
            <hr style={{ backgroundColor: "red", height: "3px", border: "none" }} />
            {rendenizarConteudo()}
        </div>
        )
}