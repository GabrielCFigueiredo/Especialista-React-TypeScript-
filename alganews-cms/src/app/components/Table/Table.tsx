
import { transparentize } from "polished";
import { TableInstance } from "react-table";
import NoData from "../NoData/NoData";

import { BodyCell, Heading, HeadingCell, TableWrapper } from "./Table.styles";



export default function Table < T extends Object >({ instance }: { instance: TableInstance< T >}) {
   

    const {
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        rows
    } = instance

    return (
        <>
        <TableWrapper cellPadding={0} cellSpacing={0} {...getTableProps()}>
            <Heading>
                {
                    headerGroups.map(headerGroup => (

                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (

                                    <HeadingCell {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </HeadingCell>
                                ))
                            }
                        </tr>
                    ))
                }
            </Heading>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (

                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cel => {
                                        return (

                                            <BodyCell {...cel.getCellProps()}>
                                                {cel.render('Cell')}
                                            </BodyCell>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </TableWrapper>
        {
            !rows.length && <div style={{backgroundColor: transparentize(0.95, '#274060' )}}>
                <NoData height={360}/>
            </div>
        }
        </>
    )
}