
import { useEffect } from "react";
import { transparentize } from "polished";
import { TableInstance } from "react-table";
import Button from "../Button/Button";
import NoData from "../NoData/NoData";
import { BodyCell, Heading, HeadingCell, TablePagination, TableWrapper } from "./Table.styles";

interface TableProps <T extends object> {

    instance: TableInstance< T >
    onPaginete?: (newPage: number) => any
}



export default function Table < T extends Object >({ instance, onPaginete }:  TableProps<T>) {
   

    const {
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        rows,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: {
            pageIndex,
        }
    } = instance

    useEffect(() => {

        onPaginete && 
        onPaginete(pageIndex)
    },[pageIndex, onPaginete])

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

        <TablePagination>
            <Button 
            variant="primary"
            label={'primeira página'}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            />
            <Button 
            variant="primary"
            label={'página anterior'}
            onClick={previousPage}
            disabled={!canPreviousPage}
            />
            <Button 
            variant="primary"
            label={'proxíma página'}
            onClick={nextPage}
            disabled={!canNextPage}
            />
            <Button 
            variant="primary"
            label={'última página'}
            onClick={() => gotoPage(pageCount -1)}
            disabled={!canNextPage}
            />

            <span>

                Página { pageIndex + 1 } de { pageOptions.length }
            </span>
        </TablePagination>
        </>
    )
}