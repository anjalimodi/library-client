import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

function BooksTable({booksData,hideBooks}) {
  return (
        <><TableContainer>
              <Table style={{borderTop: '1px solid black'}}>
               <TableHead>
                 <TableRow >
                   <TableCell>
                       <b>Title</b>
                   </TableCell>
                   <TableCell>
                       <b>Isbn</b>
                   </TableCell>
                   <TableCell>
                       <b>Authors</b>
                   </TableCell>
                   <TableCell>
                       <b>Description</b>
                   </TableCell>
                 </TableRow> 
               </TableHead>
               <TableBody> 
                 {
                 booksData?.map((row)=>(
                   <>
                       <TableRow>
                           <TableCell>{row.title}</TableCell>
                           <TableCell>{row.isbn}</TableCell>
                           <TableCell>{row.authors}</TableCell>
                           <TableCell>{row.description}</TableCell>
   
                       </TableRow>
   
   
                     </>
                 ))}
             </TableBody>
             </Table>
           </TableContainer>
   
           <Link
           href='#'
           onClick={hideBooks}
           >Hide Books</Link>
           </>
       
  )
}

export default BooksTable