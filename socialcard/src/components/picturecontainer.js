import React from 'react';

class PictureContainer extends React.Component {
    render() {
        var picture = '/images/' + this.props.image + '.jpg'
        return (
            <div id='picture'>
                <img src={picture} alt="added by user" />
            </div>
        )
    }
}

export default PictureContainer;