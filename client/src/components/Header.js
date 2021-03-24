import './Header.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments'

class Header extends Component {
    // changes login button text based on whether user is authenticated or not
    renderContent() {
        switch (this.props.auth) {
            case null: 
                return 'Still Deciding';
            case false: 
                return (
                    <li><a href='/auth/google'>Login with Google</a></li>
                );
            default:
                return [
                    <li key="1"><Payments/></li>,
                    <li key="3" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href='/api/logout'>Log Out</a></li>
                ];
        }
    };

    // changes 'homepage' based on whether user is authenticated or not
    authLinkToRoot(){
        switch (this.props.auth) {
            case null: 
                return '/';
            case false: 
                return '/';
            default:
                return '/dashboard';
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <a href={this.authLinkToRoot()} className="brand-logo">Lizt</a>
                <ul id="nav-mobile" className="right">
                    
                    {this.renderContent()}

                </ul>
                </div>
            </nav>
        )
    }
};

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);