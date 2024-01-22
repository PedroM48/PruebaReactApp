import { useState } from "react"

const Imagen = (props) => {

    // Variable de Estado 
    const [color, setColor] = useState("#63EE3A")

    const estiloCard = {
        width : "300px",
        hegiht : "auto",
        marginBottom : "20px",
        marginLeft : "20px",
        backgroundColor : color,
    }

    const cardOnClick = () => {
        // Modifica el color del card
        if ( color == "#63EE3A") setColor("#FFC433")
        else setColor("#63EE3A")
        // Modifica la variable de estado (regenera componente)
    }

    return <div className="card" style={ estiloCard } onClick={ cardOnClick }>
        <img src={props.url} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">
                {props.titulo}
            </h5>
        </div>
    </div>
}

export default Imagen