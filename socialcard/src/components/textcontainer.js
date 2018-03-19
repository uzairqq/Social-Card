import React from 'react';

class TextContainer extends React.Component {
    render() {
        return (
            <div>
                Message:{this.props.message}
            </div>
        )
    }
}

export default TextContainer;