
const authHeader = () => {
  
  if(typeof window !== 'undefined') {
  const userStr = localStorage.getItem("user");
  
  let user = null;
    if (userStr) {
      user = JSON.parse(userStr);
    }

    if(user && user.acessToken)  {
      return `${user.acessToken}`
    }else {
      return ''
    }


  }else{
    return ''
  }
  
}

export default authHeader;