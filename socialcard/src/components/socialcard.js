import React from 'react';
import TitleBar from './titlebar';
import TextContainer from './textcontainer'
import PictureContainer from './picturecontainer'

class SocialCard extends React.Component {
    render() {
        return (
            <div className='social-card'>
                <TitleBar user={this.props.user}
                    email={this.props.email} />

                <TextContainer message={this.props.message} />

                <PictureContainer image={this.props.img} />

            </div>
        )
    }
}
export default SocialCard;