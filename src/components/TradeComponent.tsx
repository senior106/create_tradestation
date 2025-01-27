import ChooseOption from './ChooseOption';

interface TradeComponentProps {
    title: string;
    onChange: (value: string) => void;
    values: any;
}
const TradeComponent: React.FC<TradeComponentProps> = ({title, onChange, values}) => {
    const TradeType = ['Buy', 'Sell'];
    const BufferType = ['Market Price', 'Bid', 'Ask'];
    const UnitType = ['Pip', 'Price'];

    return (
        <div className='p-4 bg-gray-700 text-white rounded-3xl  shadow-lg shadow-gray-900'>
            <div className="text-4xl p-8">{title}</div>
            <div className="flex flex-row justify-between py-2">
                <div>Start Data & Time</div>
                <input 
                    className='p-1 border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500'
                    type="datetime-local" 
                    value={values.startDateTime}
                    onChange={(e) => onChange({...values, startDataTime:e.target.value})}
                    placeholder="Input Data and Time"/>
            </div>
            <div className='flex flex-row justify-between items-center py-2'>
                <div>Trade Type</div>
                <ChooseOption
                    label=""
                    options={TradeType}
                    onChange={(value) => onChange({ ...values, tradeType: value })}
                />
            </div>
            <div className='flex flex-row justify-between items-center gap-1 py-2'>
                <div>Buffer</div>
                    <input
                        type='number'
                        value={values.buffer}
                        onChange={(e) => onChange({ ...values, buffer: parseFloat(e.target.value) })}
                        placeholder="price/pips"
                        className='w-[20%] p-1 border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500'
                    />
                <ChooseOption
                    label = ''
                    options={BufferType}
                    onChange={(value) => onChange({ ...values, bufferType: value })}
                />
                <ChooseOption
                    label = ''
                    options={UnitType}
                    onChange={(value) => onChange({ ...values, unitType: value })}
                />
            </div>
            <div className='flex flex-row justify-between items-center py-2'>
                <div>Take Profit</div>
                <input
                    className='p-1 border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500'
                    type='number'
                    value={values.takeProfit}
                    onChange={(e) => onChange({ ...values, takeProfit: parseFloat(e.target.value) })} 
                    placeholder='Take Profit'
                />
            </div>
            <div className='flex flex-row justify-between items-center py-2'>
                <div>Stop Loss</div>
                <input
                    className='p-1 border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500'
                    type='number'
                    value={values.stopLoss}
                    onChange={(e) => onChange({ ...values, stopLoss: parseFloat(e.target.value) })}
                    placeholder='Stop Loss'
                />
            </div>
            <div className='flex flex-row justify-between items-center py-2'>
                <div>Trailing</div>
                <input 
                    className='p-1 border-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500'
                    type='number'
                    value={values.trailing}
                    onChange={(e) => onChange({ ...values, trailing: parseFloat(e.target.value) })}
                    placeholder='Trailing'
                />
            </div>
        </div>
    )
}
export default TradeComponent;