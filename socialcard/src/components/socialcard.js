import React from 'react';

class SocialCard extends React.Component {
    render() {
        return (
            <div>
                Users: {this.props.user}
                Email:{this.props.email}
            </div>
        )
    }
}
export default SocialCard;