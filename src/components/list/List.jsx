import './list.scss'
import product_photo from './../../asset/product_photo.jpeg'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    { id: 1, product: 'Marker pen', img: product_photo, customer: 'John Doe', date: '17 july', amount: 15, method: 'cash on delivery', status: 'Approved' },
    { id: 2, product: 'Sound Box', img: product_photo, customer: 'Jane Doe', date: '17 july', amount: 8, method: 'online payment', status: 'Pending' },
    { id: 3, product: 'Ballpoint pen', img: product_photo, customer: 'Rohomot Miya', date: '17 july', amount: 5, method: 'cash on delivery', status: 'Approved' },
    { id: 4, product: 'Iphone', img: product_photo, customer: 'Caliver', date: '17 july', amount: 580, method: 'online', status: 'Pending' },
    { id: 5, product: 'Switch socket', img: product_photo, customer: 'Saber', date: '17 july', amount: 142, method: 'cash on delivery', status: 'Pending' },
  ]

  return (
    <div className="list">
        <div className="title">
            Latest Transactions
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className='tableCell'>Tracking Id</TableCell>
                <TableCell className='tableCell'>Product</TableCell>
                <TableCell className='tableCell'>Customer</TableCell>
                <TableCell className='tableCell'>Date</TableCell>
                <TableCell className='tableCell'>Amount</TableCell>
                <TableCell className='tableCell'>Payment Method</TableCell>
                <TableCell className='tableCell'>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className='tableCell'>{row.id}</TableCell>
                  <TableCell className='tableCell'>
                    <div className="rowWrapper">
                      <img src={row.img} alt='product img' className='productImg'/>
                      {row.product}
                    </div>
                  </TableCell>
                  <TableCell className='tableCell'>{row.customer}</TableCell>
                  <TableCell className='tableCell'>{row.date}</TableCell>
                  <TableCell className='tableCell'>{row.amount}</TableCell>
                  <TableCell className='tableCell'>{row.method}</TableCell>
                  <TableCell className='tableCell'>
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default List