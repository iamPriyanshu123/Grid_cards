import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  setCards,
  setPage,
  nextPage,
  prevPage,
} from "../Redux/slices/cardsSlice"; 
import { MdKeyboardDoubleArrowLeft ,MdKeyboardDoubleArrowRight } from "react-icons/md";

function Cards() {
  const dispatch = useDispatch();
  const { cards, currentPage, perPage } = useSelector((state) => state.Cards);
  // get API data and store in redux 
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res = await data.json();
        dispatch(setCards(res)); 
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [dispatch]);

  // pagination based on page number
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const visibleCards = cards.slice(startIndex, endIndex);
  const totalPages = Math.ceil(cards.length / perPage);
  console.log('visible-card',currentPage+", "+visibleCards);
  const date = Date();
 
  // show only 3 numbers button 
  const pageWindow = 3;

  let startPage = Math.max(1, currentPage - 1);
  let endPage = startPage + pageWindow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - pageWindow + 1);
  }

  return (
    <>
    <h1 style={{textAlign:'center',fontSize:'3vw',paddingTop:'20px',paddingBottom:'20px',letterSpacing:'10px',fontWeight:'lighter'}}>CARDS WITH PAGINATION</h1>
      <div
        className="cards-grid"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {visibleCards.map((datas, index) => (
          <div
            style={{
              width: "300px",
              height: "auto",
              boxShadow: "5px 5px 10px gray",
              borderRadius: "10px",
              background: "#fff",
            }}
            key={index}
          >
            <div style={{ float: "right" }}>
              <RxCross2
                style={{
                  color: "red",
                  fontSize: "35px",
                  padding: "5px",
                  cursor: "pointer",
                  margin:'5px'
                }}
              />
            </div>
            <h4 style={{ padding: "10px", fontSize: "15px" }}>{datas.title}</h4>
            <p style={{ marginTop: "-20px", margin: "10px" }}>{datas.body}</p>
            <p style={{ margin: "10px" }}>{date}</p>
            <div style={{ margin: "10px", color: "gray"}}>
              <img
                src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                alt="bird"
                style={{ width: "100%", borderRadius: "8px"}}
              />
            </div>
          </div>
        ))}
      </div>

      {/* control botton for page change */}
  

        <div className="flex justify-center items-center mt-4 gap-2">
          <button
            className="px-3 py-1 border rounded"
            onClick={() => dispatch(prevPage())}
            disabled={currentPage === 1}
          >
            <MdKeyboardDoubleArrowLeft />
          </button>

          {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
            const page = startPage + i;
            return (
              <button
                key={page}
                className={`px-3 py-1 border rounded ${
                  currentPage === page ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => dispatch(setPage(page))}
              >
                {page}
              </button>
            );
          })}

          <button
            className="px-3 py-1 border rounded"
            onClick={() => dispatch(nextPage())}
            disabled={currentPage === totalPages}
          >
          <MdKeyboardDoubleArrowRight />
          </button>
        </div>

     
    </>
  );
}

export default Cards;
