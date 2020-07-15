import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Err404 from './Err404'
import Contact from './Contact'
import About from './About'
import DailyHoroscope from './DailyHoroscope'

function Routes(){
    return(
        <Switch>
            <Route exact path="/" render={Home} />
            <Route exact path="/about-us" render={About} />
            <Route exact path="/contact-us" render={Contact} />
            <Route exact path="/daily-horoscope" render={
                (oldProps)=><DailyHoroscope {...oldProps} />
            } />
            <Route component={Err404} />
        </Switch>
    )
}

export default Routes