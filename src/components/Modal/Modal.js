import React, { useState } from 'react';
import image from '../../assets/images/image2.jpg';
import './Modal.css'

const Modal = (props) => {
  const {  close, item } = props;
  const [selected, setSelected] = useState(0);

  const selectType = (event) => {
    setSelected(event.target.value);
   
  }

  return (
    <div className="overlay" >
      <div className="modal">
        <div className="button" onClick={close}>X</div>
        <div className="item-name">{item?.name}</div>
        <div className="image-container">
          <img src={image} alt="img not found" className="image"/>
          {item['sub-items'].length > 1 && (
            <div className='drop-down'> 
              <label >
                <select value={selected} onChange={selectType}>
                  {item['sub-items'].map((option, i) => (
                    <option value={i}>{option.name}</option>
                  ))}
                </select>
              </label>
            </div>
          )}  
        </div> 
        <div className="description">
          <h4>{item?.description}</h4>
          <h4>{item['sub-items'][selected].category_name}</h4>
          <h4>{`Cuisine: ${item['sub-items'][selected].cuisine_name}`}</h4>
          <h4>{`Price: \u20B9${item['sub-items'][selected].price}`}</h4>

        </div>
      </div>
    </div>
    
  )


}


export default Modal;