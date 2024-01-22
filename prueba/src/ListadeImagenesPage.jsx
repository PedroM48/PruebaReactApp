import ListaImagenes from "./ListaImagenes"

const ListaImagenesPage = () => {

    const listaImagenes = [
        {
            url : "https://www.xtrafondos.com/descargar.php?id=5544&resolucion=1920x1080",
            titulo: "Astronauta",
        },
        {
            url : "https://i.pinimg.com/736x/04/0e/a3/040ea3fbfe20e2d3b4d03abb559314c5.jpg",
            titulo: "Goku",
        },
        {
            url : "https://rajueditor.com/wp-content/uploads/2023/09/foto-de-perfil-de-messi-920x1024.jpg",
            titulo: "Messi",
        },
        {
            url : "https://c4.wallpaperflare.com/wallpaper/847/903/796/movie-spider-man-into-the-spider-verse-miles-morales-spider-man-hd-wallpaper-preview.jpg",
            titulo: "Spiderman",
        },
        {
            url : "https://i.pinimg.com/originals/61/de/2b/61de2ba956418acd9ab454ceca15bbb2.jpg",
            titulo: "Rick & Morty",
        },
    ]

    return <div>
        <h1>Listado de Imágenes</h1>
        <ListaImagenes 
            listaImagenes={ listaImagenes }/>
    </div>
}

export default ListaImagenesPage