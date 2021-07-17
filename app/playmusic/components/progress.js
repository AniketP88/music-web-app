import React from 'react';

let Progress = React.createClass({
    render() {
        return (
        	<p>
	           {this.props.progress}s
        	</p>
        );
    }
});

export default Progress;
