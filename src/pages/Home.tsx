import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className="text-center text-3xl">Welcome to TradeStation</div>
            <button className="m-2" onClick={() => navigate('./trade')}>Start Trade</button>
        </>
    )
  }
  
  export default Home;