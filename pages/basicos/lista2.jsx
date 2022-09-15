function gerarLista(final = 10) {
    const lista = []
    for (let i = 1; i < final; i++) {
        lista.push(<span>{i},</span>)
    }
    return lista
}

export default function lista() {
    return (
        <div>
            <div>
                {gerarLista(20)}
            </div>
            <div>
                <h1>{gerarLista(3)}</h1>
            </div>
        </div>

    )
}

