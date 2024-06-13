import React, { useState, useEffect } from "react";
// import { Set } from "./Set.jsx";
import { Training } from "./Training";
import { Yotei } from "./Yotei";
import { useNavigate, Link, Navigate } from "react-router-dom";
import "./home.scss";
import { Header } from "../header/Header";
import { supabase } from "../supabase";

export const Home = () => {
  const [auth, setAuth] = useState(null);

  const [user, setUser] = useState(null);

  const getLogin = async () => {
    const { data } = await supabase.auth.getSession(); //メソッドで非同期処理を行う

    if (data.session) {
      setAuth(data.session.access_token);
      // console.log(data.session.access_token);
      setUser(await supabase.auth.getUser());
      const a = await supabase.auth.getUser();
      console.log(a.data.user.id);
      setUser(a.data.user.id);
    }
  };

  useEffect(() => {
    getLogin();
  }, []);

  return (
    <div>
      <Header />
      <main className="main">
        <Yotei userId={user} auth={auth} />
        <br />

        {auth ? (
          <div className="main__mem">
            <Training />
          </div>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};

export default Home;
