import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

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
      const response = await axios.get(
        "https://will-bookstore-api.herokuapp.com/books/"
      );
      runInAction(() => {
        this.bookList = response.data;
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

  findBookByCategory = async (id: number) => {
    try {
      const response = await axios.get(
        `https://will-bookstore-api.herokuapp.com/books?category=${id}`
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
      const response = await axios.get(
        `https://will-bookstore-api.herokuapp.com/books/${id}`
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
      await axios.delete(
        `https://will-bookstore-api.herokuapp.com/books/${id}`
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
