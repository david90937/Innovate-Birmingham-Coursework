import * as React from 'react';
import { useState, useEffect } from 'react';
import ChirpFeed from './components/ChirpFeed';


const App = () => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const handleUserInput = (val: React.SetStateAction<string>) => setUser(val)
    const handleUserMessage = (val: React.SetStateAction<string>) => setMessage(val)

    return (
        <div className="container">
            <ChirpFeed
                handleUserInput={handleUserInput}
                handleUserMessage={handleUserMessage}
                user={user}
                message={message}
            ></ChirpFeed>
        </div>
    )
}

// /* HOOK REACT EXAMPLE */
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = useState<string>('');

// 	useEffect(() => {
// 		async function getGreeting() {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
// 		getGreeting();
// 	}, []);

// 	return (
// 		<main className="container my-5">
// 			<h1 className="text-primary text-center">Hello {greeting}!</h1>
// 		</main>
// 	);
// };

// interface AppProps {}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
