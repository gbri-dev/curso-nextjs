import Titulo from "../../components/Titulo"

export default function usandoTitulo() {

    return (
        <>
            <Titulo
                principal="Meu Título"
                secundario="meu subtítulo"
            />
            <Titulo
                principal="descrição da minha página"
                secundario="console browser"
                pequeno={true}
            />
        </>
    )
}