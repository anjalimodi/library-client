import axios from "axios";
import { config } from "../environment";
export const libraryService = {
    listMagazine,
    listBooks,
    searchEmail,
    searchIsbn
  };

async function listMagazine(){
        return new Promise((resolve, reject) => {
            axios
              .post(`${config.url.BASE_URL}/library/readFiles`, {
                fileName:"magazines.csv"
              })
              .then((response) => {
                console.log("response data==",response.data)
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
              .post(`${config.url.BASE_URL}/library/readFiles`, {
                fileName:"books.csv"
              })
              .then((response) => {
                console.log("response data==",response.data)
                resolve(response.data);
              })
              .catch((error) => {
                reject(error);
              });
          });

}

async function searchIsbn(isbnNo){
    console.log("isbnNo--",isbnNo)
        return new Promise((resolve, reject) => {
            axios
              .post(`${config.url.BASE_URL}/library/isbn`, {
                isbnNo
              })
              .then((response) => {
                console.log("response data==",response.data)
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
            .post(`${config.url.BASE_URL}/library/email`, {
              email
            })
            .then((response) => {
                console.log("response data==",response.data)
              resolve(response.data);
            })
            .catch((error) => {
              reject(error);
            });
        });
}