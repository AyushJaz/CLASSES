import React from 'react'

 const Card = ({value}) => {




  return (
    <div>
   <div className="card flex">
               <div className="card-row flex"> 
                <p>{value.title}</p>
                <p>{value.status}</p>
                </div>
               
               {value.teams.map((v)=>{

                return( 
                <div className="card-row flex">
                  <div className="flex"> 
                   <div>
                       <img src={v.flaf} alt="Flag"/> {v.name}
                       </div>
                   {v.score.run}/{v.score.wicket}({v.score.over})
                   </div> 
              </div>)
               })}
           </div>
    </div>
  )
}
export default Card;