import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({aspect, title}) => {
    const data = [
        {month: 'January', total: 1250},
        {month: 'February', total: 1840},
        {month: 'March', total: 980},
        {month: 'April', total: 540},
        {month: 'May', total: 2230},
        {month: 'June', total: 1120},
      ];
  return (
    <div className='chart'>
        <span className="title">{title}</span>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 1"  className='grid'/>
          <XAxis dataKey="month" stroke='gray' />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart