import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import authHeader from "../service/authHeader";



const API_URL = "http://localhost:8080";


let modAxios = axios.create({
  headers:{
    Authorization: authHeader()
  }
})

class DataStore {
  bookList: [] = [];
  categoryList: [] = [];
  book: [] = [];
  bookCategoryList: [] = [];
  bookIsActive: boolean = false;
  categoryIsActive: boolean = false;
  modalHandler: string = "";
  bookID: number = -1;

  


  constructor() {
    makeAutoObservable(this);
  }
  
  

  fetchBookList = async () => {
    try {
      const response = await modAxios.get(
        `${API_URL}/books/`);

      runInAction(() => {
        this.bookList = response.data;
      },);
    } catch (err) {
      console.log(err);
      
      
    }
  };

  fetchCategoryList = async () => {
    try {
      const response = await modAxios.get(
        `${API_URL}/category/`
      );
      runInAction(() => {
        this.categoryList = response.data;
      });
      
    } catch (err) {
      console.log(err);
      console.log(authHeader())
    }
  };

  addNewBook = async (
    authorName: string,
    title: string,
    text: string,
    category: number
  ) => {
    try {
      const response = await modAxios.post(
        `${API_URL}/books?category=${category}`,{
          authorName: authorName,
          id: 0,
          text: text,
          title: title,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  addNewCategory = async (name: string, description: string) => {
    try {
      const response = await modAxios.post(
        `${API_URL}/category`,
        {
          description: description,
          id: 0,
          name: name,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  findBookByCategory = async (id: number) => {
    try {
      const response = await modAxios.get(
        `${API_URL}/books?category=${id}`
      );
      runInAction(() => {
        this.bookCategoryList = response.data;
      });
    } catch (err) {
      console.log(err);
    }
  };

  findBookById = async (id: number) => {
    try {
      const response = await modAxios.get(
        `${API_URL}/books/${id}`
      );
      runInAction(() => {
        this.book = response.data;
      });
    } catch (err) {
      console.log(err);
    }
  };

  deleteBook = async (id: number) => {
    try {
      await modAxios.delete(
        `${API_URL}/books/${id}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  setModalHandler(type: string) {
    this.modalHandler = type;
  }

  setBook(id: number) {
    runInAction(() => {
      this.bookIsActive = true;
      this.categoryIsActive = false;
      this.bookID = id;
    });
  }

  setCategory() {
    runInAction(() => {
      this.categoryIsActive = true;
      this.bookIsActive = false;
      this.bookID = -1;
    });
  }

  setView(type: string, id: number) {
    if (type === "books") {
      this.setBook(id);
    } else if (type === "categories") {
      this.setCategory();
    }
  }
}

const dataStore = new DataStore();
export default dataStore;
