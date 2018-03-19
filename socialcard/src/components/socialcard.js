import React from 'react';

class SocialCard extends React.Component {
    render() {
        return (
            <div>
                {/* Title Bar */}
                Users: {this.props.user}
                <br />
                Email:{this.props.email}
                <br />

                {/* TextContainer */}
                message:{this.props.message}
                <br />
                {/* Picture */}
                image:{this.props.img}
                <br />
            </div>
        )
    }
}
export default SocialCard;