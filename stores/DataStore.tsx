import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class DataStore {
  bookList: [] = [];
  categoryList: [] = [];
  bookIsActive: boolean = false;
  categoryIsActive: boolean = false;
  modalHandler: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  fetchBookList = async () => {
    try {
      const response = await axios.get(
        "https://will-bookstore-api.herokuapp.com/books/"
      );
      runInAction(() => {
        this.bookList = response.data;
        this.bookIsActive = true;
      });
    } catch (err) {
      console.log(err);
    }
  };

  fetchCategoryList = async () => {
    try {
      const response = await axios.get(
        "https://will-bookstore-api.herokuapp.com/category"
      );
      runInAction(() => {
        this.categoryList = response.data;
        this.bookIsActive = false;
      });
    } catch (err) {
      console.log(err);
    }
  };

  addNewBook = async (
    authorName: string,
    title: string,
    text: string,
    category: number
  ) => {
    try {
      const response = await axios.post(
        `https://will-bookstore-api.herokuapp.com/books?category=${category}`,
        {
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
      const response = await axios.post(
        "https://will-bookstore-api.herokuapp.com/category",
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

  setModalHandler(type: string) {
    this.modalHandler = type;
  }
}

const dataStore = new DataStore();
export default dataStore;
