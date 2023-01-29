import pencil from "../../components/img/pencil.svg";
import tableimg from "../img/tableimg.svg"
import "./drawer.css";
import { From_server } from "../mock_backend";
function Drawer() {
  let res = From_server.map(function (item) {
    return (
      <tr key={item}>
        <td>
          <input type="checkbox"></input>
        </td>
        <td>
          <img src={pencil} atl=""/>
        </td>
        <td>{item.code}</td>
        <td>{item.business}</td>
        <td>{item.lob}</td>
        <td>{item.liveservice}</td>
        <td>{item.srvlive}</td>
        <td>{item.service}</td>
        <td>{item.srv}</td>
        <td>{item.elmservice}</td>
        <td>{item.srlel}</td>
        <td>{item.tarif}</td>
        <td>{item.tarrif}</td>
        <td>{item.eltarif}</td>
        <td>{item.edtarif}</td>
        <td>{item.typetarif}</td>
        <td>{item.recalculation}</td>
      </tr>
    );
  });

  return (
    <div class="skrol">
    <table>
      <thead>
        <tr>
          <td>
            <input type="checkbox"></input>
          </td>
          <td></td>
          <td>Составной код<img src={tableimg} alt=""/></td>
          <td>Линия бизнеса<img src={tableimg} alt=""/></td>
          <td>LOB<img src={tableimg} alt=""/></td>
          <td>Линейка услуг<img src={tableimg} alt=""/></td>
          <td>SRV.LINE<img src={tableimg} alt=""/></td>
          <td>Услуга<img src={tableimg} alt=""/></td>
          <td>SRV<img src={tableimg} alt=""/></td>
          <td>Элемент услуги<img src={tableimg} alt=""/></td>
          <td>SRV.EL<img src={tableimg} alt=""/></td>
          <td>Тариф<img src={tableimg} alt=""/></td>
          <td>TARRIF<img src={tableimg} alt=""/></td>
          <td>Эл. тарификации<img src={tableimg} alt=""/></td>
          <td>Ед. тарификации</td>
          <td>Тип тарифа<img src={tableimg} alt=""/></td>
          <td>Перерасчет<img src={tableimg} alt=""/></td>
        </tr>
      </thead>
      <tbody>{res}</tbody>
    </table>
    </div>
  );
}
export { Drawer };
