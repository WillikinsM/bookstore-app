import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

class AuthStore{
  

    constructor(){
        makeAutoObservable(this);
    }

    
    register = async (firstname:string,lastname:string,email: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/registration`, {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password,
            });

        }catch(err){
            console.log(err);
        }
    }


    login = async (email: string, password: string) => {
        
          try {
            const response = await axios.post(`${API_URL}/login`, {
                email: email,
                password: password,
            });
            runInAction(() => {
                if(response.data.accessToken){
                    localStorage.setItem("user",JSON.stringify(response.data));
                }
                console.log(response.data);
            });
          } catch (err) {
            console.log(err);
          }
    }

    logout = async () => {

        try {
            const response = await axios.post(`${API_URL}/logout`, {
                
        });
        runInAction(() => {
            localStorage.removeItem("user");
        });
        }catch(err){
            console.log(err);
        }
      
    }

    getCurrentUser = () => {
        const userStr = localStorage.getItem("user");
        if(userStr){
            return JSON.parse(userStr);
        }
    }



}

const authStore = new AuthStore();
export default authStore;