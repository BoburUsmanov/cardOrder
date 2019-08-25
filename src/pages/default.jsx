import React from 'react';
import Header from './../components/header';
import Footer from './../components/footer';
import localStorage from 'reactjs-localstorage';
import history from './../history';

export default function Default() {
    if (!window.localStorage.getItem('verifyStatus')) {
        history.push('/');
    }
    return (
        <React.Fragment>
            <Header />
            <div style={{ paddingTop: '250px', marginBottom: '250px' }}>
                404 ERROR Page not found
                </div>
            <Footer />
        </React.Fragment>
    )
}
