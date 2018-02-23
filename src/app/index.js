import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header name={'A name'}/>
                    </div>
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home initialAge={2}><p>this my text</p></Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));