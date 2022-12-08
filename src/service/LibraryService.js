import axios from "axios";


export const libraryService = {
    listMagazine,
    listBooks,
    searchEmail,
    searchIsbn
  };

async function listMagazine(){
        return new Promise((resolve, reject) => {
            axios
              .post('http://localhost:3000/library/readFiles', {
                fileName:"magazines.csv"
              })
              .then((response) => {
                resolve(response.data);
              })
              .catch((error) => {
                reject(error);
              });
          });

}

async function listBooks(){
        return new Promise((resolve, reject) => {
            axios
              .post('http://localhost:3000/library/readFiles', {
                fileName:"books.csv"
              })
              .then((response) => {
                resolve(response.data);
              })
              .catch((error) => {
                reject(error);
              });
          });

}

async function searchIsbn(isbnNo){
        return new Promise((resolve, reject) => {
            axios
              .post('http://localhost:3000/library/isbn', {
                isbnNo
              })
              .then((response) => {
                resolve(response.data);
              })
              .catch((error) => {
                reject(error);
              });
          });
}

async function searchEmail(email){
      return new Promise((resolve, reject) => {
          axios
            .post('http://localhost:3000/library/email', {
              email
            })
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
              reject(error);
            });
        });
}