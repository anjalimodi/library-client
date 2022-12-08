import React from 'react'
import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
function SearchAuthor({authorData,hideAuthor}) {
  return (
    <>
    <TableContainer>
              <Table style={{borderTop: '1px solid black'}}>
                <TableHead>
                  <TableRow >
                    <TableCell>
                        <b>Title</b>
                    </TableCell>
                  </TableRow> 
                </TableHead>
                <TableBody> 
                 
                {
                 authorData?.map((row)=>(
                   <>
                       <TableRow>
                           <TableCell>{row.title}</TableCell>
   
                       </TableRow>
   
   
                     </>
                 ))}
              </TableBody>
              </Table>
            </TableContainer>
 
      <Link
            href='#'
            onClick={hideAuthor}
            >Hide result</Link>
     
     </>
  )
}

export default SearchAuthor