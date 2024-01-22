import { useState } from "react"

const FormularioImagen = (props) => {

    const [url, setUrl] = useState("")
    const [titulo, setTitulo] = useState("")

    const changeUrlHandler = (event) => {
        setUrl(event.target.value)
    }

    const changeTituloHandler = (event) => {
        setTitulo(event.target.value)
    }

    const guardarImagen = () => {
        props.guardar(url, titulo)
    }

    return <form>
        <div className="mb-3">
            <label htmlFor="txt_url_imagen" className="form-label">
                URL Imagen
            </label>
            <input 
                type="text" 
                className="form-control" 
                value={url}
                onChange={changeUrlHandler}
                id="txt_url_imagen"/>
        </div>
        <div className="mb-3">
            <label htmlFor="txt_titulo_imagen" className="form-label">
                Titulo
            </label>
            <input 
                type="text" 
                className="form-control" 
                value={titulo}
                onChange={changeTituloHandler}
                id="txt_titulo_imagen"/>
        </div>
        <button type="button" className="btn btn-primary" onClick={props.guardar}>Guardar</button>
    </form>
}

export default FormularioImagen