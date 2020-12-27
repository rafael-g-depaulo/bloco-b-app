import React, { FC, lazy, Suspense } from 'react'
import {
  BrowserRouter as BaseRouter,
  match,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"

import Loading from 'Components/Loading'
import { showServicos } from 'FeatureFlags'

const Home = lazy(() => import('./Home'))
const Services = lazy(() => import('./Services'))
// const Portfolio = lazy(() => import('./Portfolio'))

export type RouterProps<MatchParams = {}> = {
  history?: History,
  location?: Location,
  match: match<MatchParams> | null,
}
export type Router<T = {}> = FC<RouterProps<T>>

const Routes: FC = () => {
  return (
    <BaseRouter>

      <Switch>
        
        {/* default route */}
        <Route exact path="/">
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <Home match={match}/>
            </Suspense> 
          )}
        </Route>
        
        {/* home router */}
        <Route path={["/home"]}>
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <Home match={match}/>
            </Suspense> 
          )}
        </Route>

        {/* services router */}
        { showServicos && 
          <Route path={["/services", "/servicos", "/serviços"]}>
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Services match={match} />
              </Suspense>
            )}
          </Route>
        }

        {/* //! portfolio routes removed in favor of dropdown in navbar
        */}
        {/* protfolio router */}
        {/* { showPortfolio && 
          <Route path={["/portfolio", "/portifolio", "/projetos"]}>
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Portfolio match={match} />
              </Suspense>
            )}
          </Route>
        } */}

        {/* default 404 route (redirect to home) */}
        <Route>
          <Redirect to="/" />
        </Route>

      </Switch>

    </BaseRouter>
  )
}

export default Routes
