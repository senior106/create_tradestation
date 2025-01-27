import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className="text-center text-5xl m-4 text-white titleShadow">Welcome to TradeStation</div>
            <button 
                className="buttonShadow m-2 p-2 w-[15vw] min-w-[150px] text-black rounded-2xl bg-green-400 hover:bg-green-500 active:bg-green-600 shadow-gray-900 shadow-lg" 
                onClick={() => navigate('./trade')}
            >
                Start Trade
            </button>
        </>
    )
  }
  
export default Home;