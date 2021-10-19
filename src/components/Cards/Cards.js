import "./Cards.css"
import { Link } from "react-router-dom"

function Cards() {
    return (
        <>
        <div className="cards-container" id="cards">
            <h1 className="titulo">ESTOS SON NUESTROS DESTINOS</h1>
            <div className="carditem-container">
                <Link className="grid grid-item-1">

                <img className="item1-img" src="https://pbs.twimg.com/media/E6cOfUTXIAQTiQa.jpg"></img>
                <label className="item1-txt">EL BOLSON</label>

                </Link>
                
                <div className="grid grid-item-2"></div>
                <Link className="grid grid-item-3">
                <img className="item3-img" src="https://www.serargentino.com/public/images/2019/11/Las-Le%C3%B1as-mendoza-verano-773x458.jpeg"></img>
                <label className="item3-txt">LAS LEÑAS</label>
                </Link>
                <Link className="grid grid-item-4">
                    <img className="item4-img" src="https://images.clarin.com/2020/11/12/para-ingresar-en-bariloche-se___hxcRZxhF5_720x0__1.jpg"></img>
                    <label className="item4-txt">BARILOCHE</label>
                </Link>
                
            </div>
        </div>
        </>
    )
}

export default Cards