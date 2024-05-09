import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from "./common";
import { useEffect } from "react";
import Context from "./context";
import {useDispatch} from 'react-redux'
import { setUserDetail } from "./store/userSlice";

function App() {
  const dispatch = useDispatch()

  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : 'include'
    })
    const dataApi = await dataResponse.json();

    if(dataApi.success){
      dispatch(setUserDetail(dataApi.data))
    }

    console.log("data-user: ",dataApi);
  }
  useEffect(() => {
    //user details
    fetchUserDetails();
  }, [])
  

  return (
    <>
    <Context.Provider value={{
       fetchUserDetails//user detail fetch
    }}>
    <ToastContainer/>
    <Header/>
      <Outlet/>
    <Footer/>
    </Context.Provider>
    </>
  );
}

export default App;
