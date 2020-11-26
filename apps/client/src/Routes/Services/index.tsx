import React, { lazy, Suspense } from "react"
import { Router } from "Routes"

import { Route, Switch } from "react-router-dom"
import Loading from "Components/Loading"

const ServicesPage = lazy(() => import('./ServicesPage'))

export interface ServicesProps {
  
}

export const Services: Router<ServicesProps> = ({
  match,
}) => {
  const { path = "" } = match ?? {}
  
  return (
    <Switch>

      {/* base home route */}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <ServicesPage />
          </Suspense>
        )}
      </Route>
      
    </Switch>
  )
}

export default Services
