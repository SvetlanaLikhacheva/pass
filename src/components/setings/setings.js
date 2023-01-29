import { useState } from "react";
import { Modalwindow } from "../modalwindow/modalwindow";
import { Addwindow } from "../addwindow/addwindow";
import "./setings.css";
import arhiv from "../img/arhiv.svg";
const Setings = () => {
  const [modalwindowActive, setModalwindowActive] = useState(false);
  const [addwindowActive, setAddwindowActive] = useState(false);
  return (
    <>
      <div class="options">
        <form>
          <input
            class="search"
            placeholder="    Поиск...                                                 🔍"
            type="search"
          ></input>
        </form>

        <div class="settings">
          <button onClick={() => setModalwindowActive(true)} class="first-button">
            Настроить
          </button>
          <img src={arhiv} />
          <input type="checkbox" checked />
          <p>Архивные</p>
        </div>
        <div class="helpsecond">
          <button onClick={() => setAddwindowActive(true)} class="second-button">
            + Добавить услугу
          </button>
        </div>
      </div>
      <Modalwindow active={modalwindowActive} setActive={setModalwindowActive} />
      <Addwindow active={addwindowActive} setActive={setAddwindowActive} />
    </>
  );
};
export { Setings };
