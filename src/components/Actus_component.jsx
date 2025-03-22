import React from 'react';
import '../styles/Actus_component.css';
import SpeechButton from './SpeechButton';

function Actus_component({ image, name, text }) {
  let texts= text;
  return (
    <div className='School'>
      <div className="school_img">
        <img className='school_avatar' src={image} alt={name} />
      </div>
      <div className="school_info">
        <div className="text">
          <p className='name'>{name}</p>
          {/* <p>{text}</p> */}
        {/* </div> */}
        {/* <div className='school_btn_div'> */}
          {/* <button className='info_btn'>Plus d'information</button> */}
          <SpeechButton texts={[texts]} />
        </div>
      </div>
    </div>
  );
}

export default Actus_component;
