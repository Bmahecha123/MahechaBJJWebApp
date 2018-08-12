import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//Components
import Home from '../pages/home/home';
import Browse from '../pages/browse/browse';
import Blog from '../pages/blog/blog';
import About from '../pages/about/about';
import Technique from '../pages/technique/technique';
import { colors } from '../../theme';
import { BlogDetail } from '../common/blog-detail';

const Main = (props) => (
    <main style={{backgroundColor: colors.mainBackgroundColor}}>
        <Switch>
            <Route exact path='/' render={() => <Home isLoggedIn={props.isLoggedIn} /> } />
            <Route path='/browse' component={BrowseSwitch} />
            <Route path='/blog' component={BlogSwitch} />
            <Route exact path='/about' component={About} />
            <Redirect from='*' to='/' />
        </Switch>
    </main>
);

const BrowseSwitch = () => (
    <section>
        <Switch>
            <Route exact path='/browse' component={Browse} />
            <Route path='/browse/:technique' component={Technique} />
        </Switch>
    </section>
);

const BlogSwitch = () => (
    <section>
        <Switch>
            <Route exact path='/blog' component={Blog} />
            <Route path='/blog/:post' component={BlogDetail} />
        </Switch>
    </section>
);

export default Main;