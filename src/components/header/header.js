import "./header.css"
import avatar from "../img/avatar.svg"
const Header = () => {
  return(
  <>
    <header>
    <nav>
      <ul class='navigation'>
        <li><a class="logo-main" href="/Service">DemoPort</a></li>
        <li><a href="/Service">Классификатор услуг</a></li>
        <li><a href="#">Архив услуг</a></li>
        <li><a href="#">Пользователи</a></li>
        <li><a href="#">Администрирование</a></li>
      </ul>
      <ul class='user-setings'>
          <li><div class="user-logo"> <img class='user-logo1' src={avatar}/> </div></li>
          <li>Иван Иванов</li>
          <li><form action="/"><button>выйти</button></form></li>
      </ul>
    </nav>
    <div class="decoration-line"></div>
  </header>
</>
);
};
export { Header };
