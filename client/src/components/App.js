import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header'
import Landing from './Landing'

const Dashboard = () => <h2>Dashboard</h2>
const LiztNew = () => <h2>LiztNew</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact={true} path="/" component={Landing} />
                        <Route exact={true} path="/dashboard" component={Dashboard} />
                        <Route path="/dashboard/newLizt" component={LiztNew} />
                        
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);