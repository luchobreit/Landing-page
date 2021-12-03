import Accordion from "react-bootstrap/Accordion"
import "./refugio.css"

function Refugio({refugio1="https://www.milenio.com/uploads/media/2020/04/21/foto-pinguinos-viudos-abrazados-melbourne_0_31_576_358.jpg",
                    refugio2="https://www.milenio.com/uploads/media/2020/04/21/foto-pinguinos-viudos-abrazados-melbourne_0_31_576_358.jpg",
                    refugio3="https://www.milenio.com/uploads/media/2020/04/21/foto-pinguinos-viudos-abrazados-melbourne_0_31_576_358.jpg"}) {
    return (
        <div className="refugio-container">
            <div className="refugio refugio1">
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="TRE"><img src={refugio1} alt="hola" className="refugio1-img" /></Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="refugio refugio2">
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="TRE"><img src={refugio2} alt="hola" className="refugio1-img" /></Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
                <div className="refugio">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="TRE"><img src={refugio3} alt="hola" className="refugio1-img" /></Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
        </div>
    )
}

export default Refugio
