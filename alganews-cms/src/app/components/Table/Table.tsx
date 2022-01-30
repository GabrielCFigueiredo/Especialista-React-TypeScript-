
import { useEffect } from "react";
import { transparentize } from "polished";
import { TableInstance } from "react-table";
import NoData from "../NoData/NoData";
import { BodyCell, Heading, HeadingCell, TablePagination, TableWrapper } from "./Table.styles";
import ReactPaginate from "react-paginate";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

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
        pageCount,
        gotoPage,
       
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
            
            <ReactPaginate
            pageCount={pageCount}
            onPageChange={page => gotoPage(page.selected)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={4}
            nextLabel={<Icon path={mdiChevronRight} size={"16"}/>}
            previousLabel={<Icon path={mdiChevronLeft} size={"16"} />}
            />
        </TablePagination>
        </>
    )
}