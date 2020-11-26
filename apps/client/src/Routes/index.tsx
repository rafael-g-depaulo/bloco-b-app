import React, { FC, lazy, Suspense } from 'react'
import {
  BrowserRouter as BaseRouter,
  match,
  Route,
  Switch,
} from "react-router-dom"

import Loading from 'Components/Loading'

const Home = lazy(() => import('./Home'))
const Services = lazy(() => import('./Services'))

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
        <Route path={["/services", "/servicos", "/serviços"]}>
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <Services match={match} />
            </Suspense>
          )}
        </Route>

      </Switch>

    </BaseRouter>
  )
}

export default Routes
