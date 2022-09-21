import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">KSA</h3>
                <span className="loginDesc">Свържи се с приятели и със света около теб</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Имейл" className="loginInput" />
                    <input placeholder="Парола" className="loginInput" />
                    <button className="loginButton">Влез</button>
                    <span className="loginForgot">Забравена парола?</span>
                    <button className="loginRegisterButton">Създай нов акаунт</button>
                </div>
            </div>
        </div>
    </div>
  )
}
