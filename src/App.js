import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Header from './components/header/Header';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import InitialHome from "./components/Home/InitialHome.jsx";

const queryClient = new QueryClient()
// console.log(process.env)
// if(process.env.NODE_ENV === 'production'){
//   console.log('App running in production mode');
// }

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<InitialHome/>}/>
          <Route path='/characters' element={<Home/>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
