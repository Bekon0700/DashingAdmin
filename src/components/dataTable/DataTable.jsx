import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';

import {userColumns, userRows} from './../../dataTableSource'


const DataTable = () => {
    const actionCol = [
        {
            field: 'action',
            headerName: 'Action',
            width: 300,
            sortable: false,
            renderCell: (params) => {
                return(
                    <div className={`cellWithAction`}>
                        <span className="view">View</span>
                        <span className="delete">Delete</span>
                    </div>
                )
            }
        }
    ]

  return (
    <div className='dataTable'>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionCol)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable