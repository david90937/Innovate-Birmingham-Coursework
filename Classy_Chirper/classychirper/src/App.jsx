import React from 'react';
import ChirpFeed from './components/ChirpFeed';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            message: ''
        };
    }

    handleUserInput(e) {
        this.setState({ user: e })
    }
    handleUserMessage(e) {
        this.setState({ message: e })
    }

    render() {
        return (
            <div className="container">
                <ChirpFeed
                    handleUserInput={e => this.handleUserInput(e)}
                    handleUserMessage={e => this.handleUserMessage(e)}
                    user={this.state.user}
                    message={this.state.message}
                ></ChirpFeed>
            </div>
        );
    }
}

export default App;