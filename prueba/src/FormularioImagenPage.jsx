import FormularioImagen from "./FormularioImagen"

const FormularioImagenPage = () => {

    const guardarImagen = (url, titulo) => {
        // Interpolación de Strings
        console.log(`Deberia almacenar una imagen con url: ${url} y titulo ${titulo}`)
        //console.log("Deberia almacenar una imagen con url: " + url + "y titulo: " + titulo)
    }

    return <div className="container">
        <h1>Formulario Imagen</h1>
        <FormularioImagen guardar={guardarImagen}/>
    </div>
}

export default FormularioImagenPage