import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Message from "./components/Dialogs/Message/Message";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs props={DialogItem} props={Message}/>}/>
                        <Route path="/profile" element={<Profile props={MyPosts} /> } />
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
