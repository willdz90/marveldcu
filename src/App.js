import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data from './functions/Data';
import { fetchingData } from './functions/Data';
import Home from './components/Home/Home.jsx';
import Character from './components/character/Character';
import Header from './components/header/Header';
import Loading from './components/Loading/Loading';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient()


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Loading/>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
