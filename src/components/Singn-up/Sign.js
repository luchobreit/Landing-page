import "./sign.css"
function Sign() {
    return (
        <div className="sign-container">
            <div className="sign-form-container">
                <form className="sign-form">
                    <input type="email" name="email1" placeholder="email" className="sign-input sign-input-email"></input>
                    <input type="password" name="pass" placeholder="contraseña" className="sign-input sign-input-pass"></input>
                    <input type="submit" value="ingresar" className="sign-submit"/>
                </form>
                <div className="pregunta">
                    <p>No tenes usuario? Regiastrate <label className="usuario-cambio">aca</label></p>
                </div>
            </div>
        </div>
    )
}

export default Sign
