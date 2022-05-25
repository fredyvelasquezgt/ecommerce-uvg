import React from 'react'

export const Panel = () => {
    return (
        <div>
             <div className="panel-container">
          <div id="generalPanel">
            <div className="items-container">
              <div className="head">
                <h1>Panel de Chats</h1>
                <img className="circle" src={GreenCircle}></img>
                <div>Activo</div>
                <img className="circle" src={redCirc}></img>
                <div>Cerrado</div>
                <img className="circle" src={grayCirc}></img>
                <div>Abandonado</div>
              </div>
              <div className="search-container">
                <input id="search-bar" placeholder="Search chat..." />
              </div>
              <div className="chats-container"></div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Panel;
