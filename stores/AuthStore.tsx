import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { string } from "yup";

const API_URL = "http://localhost:8080";

class AuthStore{
  

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
                        email:email
                    };
                   localStorage.setItem("user", JSON.stringify(data));
                   console.log(response.status)
                   console.log(data);
                }
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