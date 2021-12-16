import { observable, makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class DataStore {
  bookList: [] = [];
  categoryList: [] = [];

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
        console.log(this.bookList);
        console.log(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
}

const dataStore = new DataStore();
export default dataStore;
