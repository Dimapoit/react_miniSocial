import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
//import DialogsContainer from "./Components/DialogsContainer/DialogsContainer";
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import './css/style.css'
import './css/coda-slider.css'
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {initialize} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./Components/DialogsContainer/DialogsContainer'))

class App extends Component {

    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }

        return (
            <BrowserRouter>
                <div id='slider'>

                    <Navbar/>

                    <div id="templatemo_main">

                        <HeaderContainer/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        {/*<Route path='/dialogs' render={() => <DialogsContainer/>}/>*/}
                        <Route path='/dialogs' render={() => {return (
                            <div>
                                <React.Suspense fallback={<div><Preloader/></div>}>
                                    <DialogsContainer />
                                </React.Suspense>
                            </div>
                        )}}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>

                        {/* <Route path='/profile' component={Profile} />
              <Route path='/dialogs' component={Message} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/settings' component={Settings} /> */}
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        initialized: state.app.initialized
    })
}

export default connect(mapStateToProps, {initialize})(App);
