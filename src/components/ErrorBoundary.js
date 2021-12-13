import React,{Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            haserror: false
        }
    }

    componentDidCatch() {
        this.setState ({haserror: true})
    }

    render () {
        if (this.state.haserror){
            return <h1>Ooops. That wasn't supposed to happen.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;