import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import Component from "./component/component.js";
let matchs = [];


function App() {

  const [matches, setMatches] = useState([]);

  useEffect(
    () => {
      currentMatches()
    }
    , []);

  async function currentMatches() {
    try {
      let res = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=8d032f2f-d64a-4613-b01e-11e92d1cce2f");
      res = await res.json();
      matchs = res.data;
      console.log(matchs);
      for (let i = 0; i < matchs.length; i++) {
        let teamName = matchs[i].teams[0];
        if (teamName !== matchs[i].teamInfo[0].name) {
          let swapElement = matchs[i].teamInfo[0];
          matchs[i].teamInfo[0] = matchs[i].teamInfo[1];
          matchs[i].teamInfo[1] = swapElement;
        }
      }
      setMatches(res.data)
    }
    catch (error) {

    }
  }
  return (
    <div id="display" className="flex">
      {
        matches.map((v, i) => {
          console.log(v);

          return (<Component score={v.score} teamInfo={v.teamInfo} name={v.name} matchtype={v.matchtype} venue={v.venue} status={v.status} />)
        })
      }

    </div>
  );
}

export default App;
