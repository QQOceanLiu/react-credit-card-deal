import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DealsPage from '../components/DealsPage';
import DealDetailPage from '../components/DealDetailPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DealsPage} exact={true} />
                <Route path="/deal/:id" component={DealDetailPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;