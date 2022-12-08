import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

function SearchIsbn({isbnResult,hideIsbnResult}) {
  return (
    <>
   <TableContainer>
             <Table style={{borderTop: '1px solid black'}}>
               <TableHead>
                 <TableRow >
                   <TableCell>
                       <b>Book/Magazine</b>
                   </TableCell>
                   <TableCell>
                       <b>Title</b>
                   </TableCell>
                   <TableCell>
                       <b>Author</b>
                   </TableCell>
                 </TableRow> 
               </TableHead>
               <TableBody> 
                
                       <TableRow>
                           <TableCell>{isbnResult.bookOrMagazine}</TableCell>
                           <TableCell>{isbnResult.title}</TableCell>
                           <TableCell>{isbnResult.author}</TableCell>

                       </TableRow>
             </TableBody>
             </Table>
           </TableContainer>

     <Link
           href='#'
           onClick={hideIsbnResult}
           >Hide result</Link>
    
    </>
  )
}

export default SearchIsbn