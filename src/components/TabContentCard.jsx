import React from 'react'
import './TabContentCard.css'

const HexagonGridItem = ({ backgroundImage, title, description }) => (
    
      <div className="hexagon" style={{ backgroundColor: '#11181a'}}>
            <img class="shrinkImage" src={backgroundImage} style={{margin:'-10px -20px', objectFit:'cover'}}/>
          <span class="detailExpand" style={{height:'60%'}}>
            <h4 style={{marginTop:'12%'}}>{title}</h4>
            <p style={{ padding: '20px 40px', paddingBottom:'60px', fontSize:'12px', marginTop:'-8%' }}>{description}</p>
          </span>
      </div>
    
  );

export const TabContentCard = (props) => {
    return (
        <div id={props.id} className="tab-pane fade">
          <h1>{props.title}</h1>
          <div className="intro-sec">
          {props.link ? (
      <img src={props.link} alt="journey" width='100%'/>
    ) : (
      <p>{props.intro}</p>
    )}
          </div>
          {/* <div className="items-section" >
            <h1>Tools and resources</h1>
            <div className='hexagon-container' style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', alignItems:'center', justifyItems:'center'
            }}>
              {props.tools.map((tool, index) => (
                <HexagonGridItem key={index} {...tool} />
              ))}
            </div>
          </div> */}
        </div>
      )
}
