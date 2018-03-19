import React from 'react';
class TitleBar extends React.Component {
    render() {
        return (
            <div>
                UserName:{this.props.user}
                Email:{this.props.email}
            </div>
        )
    }
}
export default TitleBar;