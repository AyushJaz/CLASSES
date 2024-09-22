import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Card  from '../src/Components/Card';

var matchs = [
  {
      title: "Ind Vs Pak",
      staus: "toss",
      teams: [{
          name: "Ind",
          flaf: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAACgCAMAAAAsJ7n5AAAAIVBMVEX////OESTNABPXXF723+HKAADpqazprK/klZnTPUTNBBykf8f8AAABVklEQVR4nO3auQ3DUAwFwe/bUv8F29lkUkgD3qngYVNyrQnPx+XI4zmyakYtqAW1oBbUglpQC2pBLagFtaAW1IJaUAtqQS2oBbWgFtSCWlALakEtqAW1oBbUglpQC2pBLagFtaAW1IJaUAtqQS2oBbWgFtSCWlALakEtqAW1oBbUglpQC2pBLagFtaAW1ILXSYvXzKz7hPdJi/fIqnWbsO2HLfZtZNW6TjhO8Y0xsmqdrPontaAW1IJaUAtqQS2oBbWgFtSCWlALakEtqAW1oBbUglpQC2pBLagFtaAW1IJuy/RzQL8ozDwD/eiP0oh+16gFtaAW1IJaUAtqQS2oBbWgFtSCWlALakEtqAW1oBbUglpQC2pBLagFtaAW1IJaUAtqQS2oBbWgFtSCWlALakEtqAW1oBbUglpQC2pBLagFtaAW1IJaUAtqQS2oBbWgFtSC32zxAYGGSCEBmbJZAAAAAElFTkSuQmCC",
          score: {
              wicket: 2,
              run: 100,
              over: 10,
              totalOver: 20
          }

      },
      {
          name: "Pak",
          flaf: "data:image/png;base64,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",
          score: {
              wicket: 2,
              run: 105,
              over: 10,
              totalOver: 20
          }

      }]
  },
  {
      title: "Ind Vs Sl",
      staus: "Running",
      teams: [{
          name: "Ind",
          flaf: "...",
          score: {
              wicket: 2,
              run: 100,
              over: 10,
              totalOver: 20
          },


      }, {
          name: "Ind",
          flaf: "...",
          score: {
              wicket: 2,
              run: 100,
              over: 10,
              totalOver: 20
          }
      }]
  }
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
{matchs.map((value,index)=>{
  return <Card value={value}/>
})}





  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
