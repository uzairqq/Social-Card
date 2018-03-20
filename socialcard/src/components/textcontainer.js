import React from 'react';

class TextContainer extends React.Component {
    render() {
        return (
            <div id="text-container">
                {this.props.message}
            </div>
        )
    }
}

export default TextContainer;