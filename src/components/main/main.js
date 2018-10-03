import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//Components
import Home from '../pages/home/home';
import Browse from '../pages/browse/browse';
import Blog from '../pages/blog/blog';
import { colors } from '../../theme';
import { BlogDetail } from '../common/blog-detail';
import { Technique } from '../pages/technique/technique';

// const Main = (props) => (
//     <main style={{backgroundColor: colors.mainBackgroundColor}}>
//         <Switch>
//             <Route exact path='/' render={() => <Home isLoggedIn={props.isLoggedIn} /> } />
//             <Route path='/browse' component={BrowseSwitch} />
//             <Route path='/blog' component={BlogSwitch} />
//             <Redirect from='*' to='/' />
//         </Switch>
//     </main>
// );

// const BrowseSwitch = () => (
//     <section>
//         <Switch>
//             <Route exact path='/browse' component={Browse} />
//             <Route path='/browse/:technique' component={Technique} />
//         </Switch>
//     </section>
// );

const Main = (props) => (
    <main style={{backgroundColor: colors.mainBackgroundColor}}>
        <Switch>
            <Route exact path='/' render={() => <Home isLoggedIn={props.isLoggedIn} packages={props.packages} /> } />
            <Route path='/browse' render={(routeProps) => <BrowseSwitch isLoggedIn={props.isLoggedIn} packages={props.packages} {...routeProps} />} />
            <Route path='/blog' component={BlogSwitch} />
            <Redirect from='*' to='/' />
        </Switch>
    </main>
);

const BrowseSwitch = (props) => (
    <section>
        <Switch>
            <Route exact path='/browse' render={() => <Browse isLoggedIn={props.isLoggedIn} packages={props.packages} /> } />
            <Route path='/browse/:technique' render={() => <Technique isLoggedIn={props.isLoggedIn} {...props} /> }/>
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