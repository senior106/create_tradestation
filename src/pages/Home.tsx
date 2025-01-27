import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className="text-center text-3xl m-4">Welcome to TradeStation</div>
            <button 
                className="m-2 p-2 w-[15vw] min-w-[150px] rounded-2xl bg-green-400 hover:bg-green-500 active:bg-green-600 shadow-gray-900 shadow-lg" 
                onClick={() => navigate('./trade')}
            >
                Start Trade
            </button>
        </>
    )
  }
  
  export default Home;