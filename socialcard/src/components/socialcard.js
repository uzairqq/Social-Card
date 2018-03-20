import React from 'react';
import TitleBar from './titlebar';
import TextContainer from './textcontainer'
import PictureContainer from './picturecontainer'

class SocialCard extends React.Component {
    render() {
        return (
            <div id="social-card">
                <TitleBar user={this.props.user}
                    email={this.props.email}
                    action={this.props.action}
                />

                <TextContainer message={this.props.message} />

                <PictureContainer image={this.props.img} />

            </div>
        )
    }
}
export default SocialCard;