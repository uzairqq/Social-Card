import React from 'react';

class PictureContainer extends React.Component {
    render() {
        return (
            <div>
                Picture:{this.props.image}
            </div>
        )
    }
}

export default PictureContainer;