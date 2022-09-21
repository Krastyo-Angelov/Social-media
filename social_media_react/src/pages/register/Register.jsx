import "./register.css";

export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">KSA</h3>
                <span className="registerDesc">Свържи се с приятели и със света около теб</span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input placeholder="Потребителско име" className="registerInput" />
                    <input placeholder="Имейл" className="registerInput" />
                    <input placeholder="Парола" className="registerInput" />
                    <input placeholder="Потвърди паролата" className="registerInput" />
                    <button className="registerButton">Регистрирай се</button>
                    <button className="registerRegisterButton">Влез в акаунта си</button>
                </div>
            </div>
        </div>
    </div>
  )
}
