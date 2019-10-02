import React from 'react';
class Test extends React.Component {
    state = {
        name: "",
        age: 44
    }

    changeWord = () => {
        this.setState({
            name: this.state.name,
            age: this.state.age + 88

        })
    }

    updateWord = (e) => {

        const newName = e.target.value
        this.setState({
            name: newName
        })
    }
    render() {
        return (
            <div>
                <h2 >Hello Test</h2>
                <h3>{this.state.name}</h3>
                <h3>{this.state.age}</h3>
                <button onClick={this.changeWord}>Change name</button><br />
                <input type="text" value={this.state.name} onChange={this.updateWord} />
            </div>
        )
    }
}

export default Test;