import React from 'react';
require('./logo.less');
let Logo = React.createClass({
    render() {
        return (
        	<div className="row components-logo">
        		<img src="https://www.linkpicture.com/q/1324_1.jpg" width="40" alt="" className="-col-auto" />
        		<h1 className="caption">Music Player</h1>
               

        	</div>
           
        );
    }
});

export default Logo;
