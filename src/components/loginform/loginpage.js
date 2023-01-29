import logo from "../img/logo.svg";
import "./loginpage.css";
const Loginform = () => {
  return (
    <>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body class="dftest">
          <form class="reg" action="/Service">
            <div class="imgcontainer">
              <img class="logo-reg" src={logo} alt="logo" />
            </div>
            <div class="container">
              <input
                type="email"
                placeholder="Электронная почта"
                name="uname"
                id="input-id"
                required
              />
              <input type="password" placeholder="Пароль" name="psw" required />
              <button class="first-form" type="submit">
                Войти
              </button>
            </div>
          </form>
        </body>
      </html>
    </>
  );
};
export { Loginform };
