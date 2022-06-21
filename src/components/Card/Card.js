import React, { useEffect, useState } from 'react';
import './Card.css';
import image from '../../assets/images/image2.jpg'
import Modal from '../Modal/Modal';


const Card = (props) => {
  const { item } = props

  const [modalVisible, setModalVisible] = useState(false)
  useEffect(()=>{
  
  },[])

  const openCard = () => {
    setModalVisible(true)
  }
  
  return (
    <>
    <div className="card" onClick={openCard}>
      <img src={image} alt="img not found" width="175px" />
      <div className="card-container">
        <div>
          {item?.name}
        </div>
        <div>
          {`\u20B9`+item?.["sub-items"][0]?.price}
        </div>
      </div>
    </div>

    {modalVisible && (
      <Modal 
        visible={modalVisible} 
        close={() => setModalVisible(false)}
        item={item}
      />
    )}
      
    
    </>
    
  );
}

export default Card;