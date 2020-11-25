import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

const HomePage = lazy(() => import("./HomePage"))

export const Home: Router = ({
  match,
}) => {
  const { path = "" } = match ?? {}
  
  return (
    <Switch>

      {/* base home route */}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        )}
      </Route>
      
    </Switch>
  )
}

export default Home
