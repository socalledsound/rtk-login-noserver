import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { selectCurrentUser } from './features/login/loginSlice'
import Header from './features/header/Header'
import HomePage from './features/homepage/HomePage'
import LoginPage from './features/login/LoginPage';

const App = () => {

    const currentUser = useSelector(selectCurrentUser)

    return(
        <Fragment>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage}/> 
            <Route 
                exact path='/login'
                render={() => currentUser ? (
                    <Redirect to='/' />
                ) : (
                    <LoginPage />
                )}
            />
        </Switch>
    </Fragment>
   
    )


}

export default App