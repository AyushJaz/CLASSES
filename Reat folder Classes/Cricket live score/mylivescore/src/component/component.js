import React from 'react';

function Component(
    {score,teamInfo,name,matchtype,venue,status}
) {
    return (
        <section className="flex card">
                    <div className="flex card-row">
                         <div>{name}</div>
                    </div>
                    <div className="flex card-row">
                         <div className="flex colone"><img className="flag" src={teamInfo[0]?.img} alt="flag"/> {teamInfo[0]?.shortname}</div>
                         <div>{score[0]?.r || 0}/{score[0]?.w || 0}({score[0]?.o || 0})</div>
                    </div>
                    <div className="flex card-row">
                      <div className="flex colone"><img className="flag" src={teamInfo[1]?.img} alt="flag"/> {teamInfo[1]?.shortname}</div>
                      <div>{score[1]?.r || 0}/{score[1]?.w || 0}({score[1]?.o || 0})</div>
                    </div>
                    <div className="flex card-row">
                     <div> {venue}</div>
                     <div>{status}</div>
                    </div>
                </section>
    )
}

export default Component;
