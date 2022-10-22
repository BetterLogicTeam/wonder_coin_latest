import React from 'react'
import { useTable } from 'react-table';

export default function Table({ columns, data,name }) {

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })
    return (
        <div>
            <h1 style={{textAlign:'left'}} className="mt-5">{name}</h1>
            <div className='table-responsive mt-5 text-white'>
                <table {...getTableProps()} class="table card-table border table-vcenter text-nowrap align-items-center">
                    <thead class="thead-light ">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="border">
                                {headerGroup
                                    .headers
                                    .map(column => (
                                        <th {...column.getHeaderProps()} className="border text-white">{column.render('Header')}</th>
                                    ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className="border">
                        {rows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className="border ">
                                    {row
                                        .cells
                                        .map(cell => {
                                            return <td {...cell.getCellProps()} className="border text-white">{cell.render('Cell')}</td>
                                        })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
