import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

function MagazineTable({magazineData,hideMagazine}) {
  return (
        <>
        <TableContainer>
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
                       <b>Publish Date</b>
                   </TableCell>
                 </TableRow> 
               </TableHead>
               <TableBody> 
                 {
                 magazineData?.map((row)=>(
                   <>
                       <TableRow>
                           <TableCell>{row.title}</TableCell>
                           <TableCell>{row.isbn}</TableCell>
                           <TableCell>{row.authors}</TableCell>
                           <TableCell>{row.publishedAt}</TableCell>
   
                       </TableRow>
   
   
                     </>
                 ))}
             </TableBody>
             </Table>
           </TableContainer>
   
           <Link
           href='#'
           onClick={hideMagazine}
           >Hide Magazines</Link>
           </>
       
  )
}

export default MagazineTable