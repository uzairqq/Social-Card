import React from 'react';
import Moment from 'moment'
class TitleBar extends React.Component {
    render() {
        const userIcon = 'https://api.adorable.io/avatars/285/'
            + this.props.email.split('.')[0] + '.png';
        return (
            <div id="title-bar">
                <img src={userIcon}
                    alt="user icon"
                    className="img-title titlebar-image" />
                <div id="title-bar-description">
                    {this.props.user} <span>{this.props.action}<br />{Moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
                </div>
                {/* Email:{this.props.email} */}
            </div >
        )
    }
}
export default TitleBar;