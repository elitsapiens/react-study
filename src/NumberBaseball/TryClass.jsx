import React from "react";

class TryClass extends React.Component {
    render() {
        return (
            <li key={this.props.value+this.props.index}>
                <b>{this.props.value}</b>
            </li>
        )
    }
}

export default TryClass;