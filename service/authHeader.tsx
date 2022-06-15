
const authHeader = () => {
  const userStr = localStorage.getItem("user");
  let user = null;
  if (userStr) 
    user = JSON.parse(userStr);
  
  return user && user.accessToken ?  `Bearer ${user.accessToken}`  :  "";

}

export default authHeader;