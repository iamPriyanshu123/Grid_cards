import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "../../src/App";
function Cards() {
  const [getApiData, setGetApiData] = useState([]);


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(" https://jsonplaceholder.typicode.com/posts");
        const res = await data.json();
        console.log("api-data", res);
        setGetApiData(res);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  const date=Date();
  console.log('date',date);
  return (
    <>
      <div className='cards-grid'>
        {
        getApiData.map((datas,index) => {
          return <div style={{width:'300px',height:'auto',boxShadow:'5px 5px 10px gray'}} key={index}>
            <div style={{float:'right'}}><RxCross2 style={{color:'red',fontSize:'25px',padding:'5px',cursor:'pointer'}} /></div>
               <h4 style={{padding:'10px',fontSize:'15px'}}>
                    {datas.title}
               </h4>
               <p style={{marginTop:'-20px',margin:'10px'}}>{datas.body}</p>
               <p style={{margin:'10px'}}>{date}</p>
               <div style={{margin:'10px',color:'gray'}}>
                <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="bird image"style={{width:'100%'}} />
               </div>
               
          </div>
        })
        
        }

        
        </div>
    </>
  );
}

export default Cards;
