import React, { useEffect, useState } from "react";
import "./set.scss";
import { useLocation } from "react-router-dom";
import { Header } from "../header/Header";

export const Set = () => {
  //userId取得
  const YoteiState = useLocation();
  const userId = YoteiState.state.id;
  // console.log(YoteiState.state.id);

  //APIでデータを取得する
  const [menu, setMenu] = useState(["a"]);
  const [gtai, setGtai] = useState(70);

  const [kin, setKin] = useState([]);
  const [tai, setTai] = useState(70);
  const [meet, setMeet] = useState();

  return (
    <>
      <Header />
      <div className="set-main">
        <h1 className="title">記録</h1>
        <label className="training__label">トレーニング内容</label>
        <br />
        <input type="text" list="training__list" className="training__choice" />
        <datalist id="training__list">
          {menu.map((menu) => {
            return <option key={menu}>{menu}</option>;
          })}
        </datalist>
        <br />
        <label className="meal__title">食事内容</label>
        <br />
        <textarea className="meal__set"></textarea>
        <br />
        <label className="body__weight">現在体重</label>
        <br />
        <input type="text" className="body__weight-set" />
        kg
        <br />
        <button className="Set__button">記録</button>
      </div>
    </>
  );
};

export default Set;
