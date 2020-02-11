import React from 'react';

class Doguitos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: '',
        }
    }
    componentDidMount() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    results: result.message,
                });
            })
    }

    render() {
        return (this.state.results);
    }
}
export default Doguitos;