import React, {useState } from 'react'
import {
    Button,
    Grid,
    makeStyles,
    TextField,
    
  } from "@material-ui/core";
import MagazineTable from './MagazineTable';
import BooksTable from './BooksTable';
import SearchIsbn from './SearchIsbn';
import { libraryService } from '../service/LibraryService';
import SearchAuthor from './SearchAuthor';
import { CSVLink } from "react-csv";

  const useStyles=makeStyles((theme)=>({
    mainContainer:{
        margin:"1%"
    }
  }))
function LibraryUI() {

    const [showMagazineTable,setShowMagazineTable]=useState(false)
    const [magazineData,setMagazineData]=useState([])

    const [showBooksTable,setShowBooksTable]=useState(false)
    const [booksData,setBooksData]=useState([])

    const [isbnNo,setIsbnNo]=useState('')
    const [showIsbnResult,setShowIsbnResult]=useState(false)
    const [isbnResult,setIsbnResult]=useState({})

    const [author,setAuthor]=useState('')
    const [showAuthor,setShowAuthor]=useState(false)
    const [authorRes,setAuthorRes]=useState([])

    const [bookAuthor,setBookAuthor]=useState('')
    const[bookTitle,setBookTitle]=useState('')
    const [bookIsbn,setBookIsbn]=useState('')
    const [bookDescription,setBookDescription]=useState('')
    const [addBook,setAddBook]=useState(false)
    const [bookData,setBookData]=useState([])
    const [bookExport,setBookExport]=useState(false)

    const [magazineAuthor,setMagazineAuthor]=useState('')
    const[magazineTitle,setMagazineTitle]=useState('')
    const [magazineIsbn,setMagazineIsbn]=useState('')
    const [magazinePublishAt,setMagazinePublishAt]=useState('')
    const [addMagazine,setAddMagazine]=useState(false)
    const [magazineCSVData,setMagazineCSVData]=useState([])
    const [magazineExport,setMagazineExport]=useState(false)

    const classes=useStyles()

    async function listMagazine(){
        await libraryService.listMagazine()
        .then((res)=>{
            setShowMagazineTable(true)
            setMagazineData(res)
            setShowBooksTable(false)
            setBooksData([])
            setShowIsbnResult(false)
            setIsbnResult({})
            setIsbnNo('')
            setAddBook(false)
            setAddMagazine(false)
        }).catch((err)=>{
            setShowMagazineTable(false)
            setMagazineData([])
        }) 

    }

    async function listBooks(){
        await libraryService.listBooks()
        .then((res)=>{
            setShowBooksTable(true)
            setBooksData(res)
            setShowMagazineTable(false)
            setMagazineData([])
            setShowIsbnResult(false)
            setIsbnResult({})
            setIsbnNo('')
            setAddBook(false)
            setAddMagazine(false)
        }).catch((err)=>{
            setShowBooksTable(false)
            setBooksData([])
        }) 

    }

    async function searchIsbn(e){
        e.preventDefault()
        await libraryService.searchIsbn(isbnNo)
        .then((res)=>{
            setShowIsbnResult(true)
            setIsbnResult(res)
            setShowBooksTable(false)
            setBooksData([])
            setShowMagazineTable(false)
            setMagazineData([])
            setAddBook(false)
            setAddMagazine(false)
        }).catch((err)=>{
            setShowIsbnResult(false)
            setIsbnResult({})
        }) 
    }

    async function searchEmail(e){
      e.preventDefault()
      await libraryService.searchEmail(author)
      .then((res)=>{
          setShowAuthor(true)
          setAuthorRes(res)
          setShowIsbnResult(false)
          setIsbnResult({})
          setShowBooksTable(false)
          setBooksData([])
          setShowMagazineTable(false)
          setMagazineData([])
          setAddBook(false)
          setAddMagazine(false)
      }).catch((err)=>{
          setShowAuthor(false)
          setAuthorRes([])
      }) 
  }

    const hideMagazine=(e)=>{
        e.preventDefault()
        setShowMagazineTable(false)
        setMagazineData([])

    }

    const hideBooks=(e)=>{
        e.preventDefault()
        setShowBooksTable(false)
        setBooksData([])
    }

    const hideIsbn=(e)=>{
        e.preventDefault()
        setShowIsbnResult(false)
        setIsbnResult({})
        setIsbnNo('')
    }

    const hideAuthor=(e)=>{
      e.preventDefault()
      setShowAuthor(false)
      setAuthorRes([])
      setAuthor('')
    }

    const submitEvent=(e)=>{
      const {name}=e.target
      if(name === 'isbn' && e.key ==='Enter'){
        searchIsbn(e)
      }

      if(name === 'author' && e.key === 'Enter'){
        searchEmail(e)
      }
    }

    const createBook=(e)=>{
      e.preventDefault()
      setAddBook(true)
      setAddMagazine(false)
      setMagazineAuthor('')
      setMagazineTitle('')
      setMagazineIsbn('')
      setMagazinePublishAt('')
      setMagazineExport(false)
      setMagazineCSVData([])
    }

    const createMagazine=(e)=>{
      e.preventDefault()
      setAddMagazine(true)
      setAddBook(false)
      setBookTitle('')
      setBookDescription('')
      setBookIsbn('')
      setBookDescription('')
      setBookData([])
      setBookExport(false)
    }

    const submitBook=(e)=>{
      e.preventDefault()

      const csvData = [
        ["title", "isbn", "author","description"],
        [bookTitle, bookIsbn, bookAuthor,bookDescription]
      ];
      setBookData(csvData)
      setBookExport(true)
    }

    const submitMagazine=(e)=>{
      e.preventDefault()

      const csvData = [
        ["title", "isbn", "author","publishedAt"],
        [magazineTitle, magazineIsbn, magazineAuthor,magazinePublishAt]
      ];
      setMagazineCSVData(csvData)
      setMagazineExport(true)
    }
  return (
    <React.Fragment>
      <Grid container direction='column'>
        <Grid container className={classes.mainContainer} spacing={2}>
          
            <Grid item xs={6}>
                <Button
                variant='contained'
                onClick={listMagazine}
                >List Magazines</Button>
            </Grid>

            <Grid item xs={6}>
            <Button
                variant='contained'
                onClick={listBooks}
                >List Books</Button>
            </Grid>

            
            
        </Grid>

        <Grid container className={classes.mainContainer} spacing={2}>

        <Grid item xs={6}>
            <TextField variant="standard" 
            name="isbn"
            label="Search by isbno"
            value={isbnNo}
            onKeyPress={submitEvent}
            onChange={e=>setIsbnNo(e.target.value)}
            />
            </Grid>

        <Grid item xs={6}>
            <TextField variant="standard" 
            name="author"
            label="Search author"
            value={author}
            onKeyPress={submitEvent}
            onChange={e=>setAuthor(e.target.value)}
            />
            </Grid>
            </Grid>

        <Grid container className={classes.mainContainer} spacing={2}>
        <Grid item xs={6}>
                <Button
                variant='contained'
                onClick={createBook}
                >Add Book</Button>
            </Grid>

            <Grid item xs={6}>
                <Button
                variant='contained'
                onClick={createMagazine}
                >Add Magazine</Button>
            </Grid>
        </Grid>

    {addBook ?
        <Grid container className={classes.mainContainer} spacing={2}>
        <Grid item xs={3}>
            <TextField variant="standard" 
            name="bookTitle"
            label="title"
            value={bookTitle}
            onChange={e=>setBookTitle(e.target.value)}
            />
            </Grid>

            <Grid item xs={3}>
            <TextField variant="standard" 
            name="bookIsbn"
            label="Isbn"
            value={bookIsbn}
            onChange={e=>setBookIsbn(e.target.value)}
            />
            </Grid>

            <Grid item xs={3}>
            <TextField variant="standard" 
            name="bookAuthor"
            label="author"
            value={bookAuthor}
            onChange={e=>setBookAuthor(e.target.value)}
            />
            </Grid>

            <Grid item xs={3}>
            <TextField variant="standard" 
            name="bookDescription"
            label="description"
            value={bookDescription}
            onChange={e=>setBookDescription(e.target.value)}
            />
            </Grid>

            <Grid item xs={3}>
                <Button
                variant='contained'
                onClick={submitBook}
                >Submit Book</Button>
            </Grid>
        </Grid>
            :null}

  {addMagazine ?
        <Grid container className={classes.mainContainer} spacing={2}>
        <Grid item xs={3}>
            <TextField variant="standard" 
            name="magazineTitle"
            label="title"
            value={magazineTitle}
            onChange={e=>setMagazineTitle(e.target.value)}
            />
            </Grid>

            <Grid item xs={3}>
            <TextField variant="standard" 
            name="magazineIsbn"
            label="Isbn"
            value={magazineIsbn}
            onChange={e=>setMagazineIsbn(e.target.value)}
            />
            </Grid>

            <Grid item xs={3}>
            <TextField variant="standard" 
            name="magazineAuthor"
            label="author"
            value={magazineAuthor}
            onChange={e=>setMagazineAuthor(e.target.value)}
            />
            </Grid>

            <Grid item xs={3}>
            <TextField variant="standard" 
            name="magazinePublishAt"
            label="publishAt"
            value={magazinePublishAt}
            onChange={e=>setMagazinePublishAt(e.target.value)}
            />
            </Grid>

            <Grid item xs={3}>
                <Button
                variant='contained'
                onClick={submitMagazine}
                >Submit Magazine</Button>
            </Grid>
        </Grid>
            :null}
        </Grid>
        {showMagazineTable ? <MagazineTable magazineData={magazineData} hideMagazine={hideMagazine}/> :null}
        {showBooksTable ? <BooksTable booksData={booksData} hideBooks={hideBooks}/> :null}

        {showIsbnResult ? <SearchIsbn isbnResult={isbnResult} hideIsbnResult={hideIsbn}/> :null}
        {showAuthor ? <SearchAuthor authorData={authorRes} hideAuthor={hideAuthor}/> :null}
        {bookExport ? 
        <>
        <div>Data added. Click on the link to export</div>
        <CSVLink data={bookData} filename={"Export_Book.csv"}>Export csv </CSVLink>; 
        </>:null}

        {
          magazineExport ? 
          <>
          <div>Data added. Click on the link to export</div>
        <CSVLink data={magazineCSVData} filename={"Export_Magazine.csv"}>Export csv </CSVLink>; 
          </>
        :null}
    </React.Fragment>
  )
}

export default LibraryUI