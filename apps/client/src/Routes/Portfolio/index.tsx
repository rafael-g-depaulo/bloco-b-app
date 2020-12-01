import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

const ListPortfolioPage = lazy(() => import("./ListPortfolio"))

export const Home: Router = ({
  match,
}) => {
  const { path = "" } = match ?? {}
  
  return (
    <Switch>

      {/* Portfolio listing page */}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <ListPortfolioPage />
          </Suspense>
        )}
      </Route>
      
    </Switch>
  )
}

export default Home
