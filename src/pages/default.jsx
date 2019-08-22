import React from 'react';
import Header from './../components/header';
import Footer from './../components/footer';

export default function Default() {
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
