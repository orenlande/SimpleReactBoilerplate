import React from 'react';
import image from '../images/cloud-upload-download-data-transfer.svg';

class App extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const {isLoading, contacts} = this.state;
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>My react redux boilerplate</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        new boilerplate
                    </div>
                    <div className="loader">
                        <div className="icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
