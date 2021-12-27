import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from '@components/globalStyle'

const Routes = () => {


  const details = {
    cnName: '王柔燁',
    enName: 'Adrian',
    birth: '1994-06-08',
    phone: '+886 910 319 855',
    email: 'adrianwangdev@gmail.com',
    city: '新北市',
    job: '前端工程師',
    isMarried: false,
    drivingLicense: ['普通重型機車駕照', '普通小型車駕照'],
  }



  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

          <Switch>
          {/*<Route exact path="/" component={Home} />*/}
          {/*<Route path="/about" component={About} />*/}
          {/*<Route path="/experience" component={Experience} />*/}
          {/*<Route path="/project" component={Project} />*/}
          {/*<Route path="/contact" component={Contact} />*/}
        </Switch>
        <GlobalStyle />
    </BrowserRouter>
  )
}

export default Routes
