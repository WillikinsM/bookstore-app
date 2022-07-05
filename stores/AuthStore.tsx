import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { string } from "yup";
import authHeader from "../service/authHeader";

const API_URL = "http://localhost:8080";


let modAxios = axios.create({
    headers:{
      Authorization: authHeader()
    }
  })
  

  interface CurrentUser {
    token: string;
    authority: string;
    email: string;
  }

class AuthStore{
     isLoggedIn: boolean = false;

     username : CurrentUser = {
        token: "",
        authority: "",
        email: "username"
     };

    constructor(){
        makeAutoObservable(this);
    }

    
    register = async (firstname:string,lastname:string,email: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/api/v1/registration`, {
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
                username: email,
                password: password,
            },{headers: {'Content-Type': 'application/json'}});
            
            runInAction(() => {
                
            if(response.headers.authorization){
                var data={
                     acessToken:response.headers.authorization,
                     email:email,
                     authority: ""
                };
                localStorage.setItem("user", JSON.stringify(data));
                this.getUserAuthorities();
            }
            });
          } catch (err) {
            console.log(err);
          }
    }

    logout =  () => {
        localStorage.removeItem("user"); 
        this.getUserStatus();
    }

    getCurrentUser = () => {
        const userStr = localStorage.getItem("user");
        if(userStr){
         this.username = JSON.parse(userStr);
        
        }

    }

    getUserStatus = () => {
        const userStr = localStorage.getItem("user");

        if(userStr){
            this.isLoggedIn = true;
        }else{
            this.isLoggedIn = false;
        }
    }

    getUserAuthorities = async () => {
        this.getCurrentUser();

        try {
            const response = await modAxios.get(`${API_URL}/api/v1/registration/user/${this.username.email}`);
            runInAction(() => {
              this.username.authority = response.data[4].authority;
            });
        } catch (err) {
            console.log(err);
        }
    }
}

const authStore = new AuthStore();
export default authStore;