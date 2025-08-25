import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import {setCards,goToPageNo,nextPage} from '../slices/cardSlice'
export const FooterButton = () => {
    const dispatch=useDispatch();
    const{setCards,goToPageNo,nextPage}=useSelector((state)=>state.Cards);
  return (
    <>
      <div style={{display:'flex',justifyContent:'center'}}>
        <button style={{cursor:'pointer'}} onClick={()=>dispatch(goToPageNo(1))}>1</button>
        <button style={{cursor:'pointer'}} onClick={()=>dispatch(goToPageNo(2))}>2</button>
        <button style={{cursor:'pointer'}} onClick={()=>dispatch(goToPageNo(3))}>3</button>
        <button style={{cursor:'pointer'}} onClick={()=>dispatch(nextPage())}>Next</button>
      </div>
    </>
  );
};
