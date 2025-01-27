import { useState } from "react";
import TradeComponent from "../components/TradeComponent";


function Trade() {
  const [order1Values, setOrder1Values] = useState({
    // startDateTime: '',
    tradeType: 'Buy',
    buffer: 0,
    bufferType: 'Market Price',
    unitType: 'Pip',
    takeProfit: 0,
    stopLoss: 0,
    trailing: 0
  });

  const [order2Values, setOrder2Values] = useState({
    // startDateTime: '',
    tradeType: 'Buy',
    buffer: 0,
    bufferType: 'Market Price',
    unitType: 'Pip',
    takeProfit: 0,
    stopLoss: 0,
    trailing: 0
  });

  const handleOrderChange = (order: number, values: any) => {
    if (order === 1) {
      setOrder1Values(values);
      // console.log('values1 :>> ', values);
    } else {
      setOrder2Values(values);
      // console.log('values2 :>> ', values);
    }
  };

  const handleStartClick = () => {
    console.log('Order 1 Values:', order1Values);
    console.log('Order 2 Values:', order2Values);
  };

  const handleTrailingClick = () => {
    console.log('Trailing action triggered for Order 1');
    console.log('Trailing action triggered for Order 2');
  };

  return (
    <div>
      <div className="flex flex-col gap-20 justify-between items-center">
        <TradeComponent 
          title = 'Order 1' 
          onChange={(values) => handleOrderChange(1, values)}
          values={order1Values}
        />
        <TradeComponent 
          title = 'Order 2' 
          onChange={(values) => handleOrderChange(2, values)}
          values={order2Values}
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <button 
          className="m-2 p-2 w-[15vw] min-w-[150px] rounded-2xl bg-green-400 hover:bg-green-500 active:bg-green-600 shadow-gray-300 shadow-lg" 
          onClick={handleStartClick}
        >
          Start
        </button>
        <button 
          disabled={order1Values.trailing===2} 
          className="m-2 p-2 w-[15vw] min-w-[150px] rounded-2xl bg-green-400 hover:bg-green-500 active:bg-green-600 shadow-gray-300 shadow-lg disabled:bg-gray-300 disabled:text-gray-500" 
          onClick={handleTrailingClick}
        >
          Trailing
        </button>
      </div>
    </div>
  )
}
  
  export default Trade;