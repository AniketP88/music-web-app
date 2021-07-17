import React from 'react';
require('./listitem.less');
let PubSub = require('pubsub-js');
$(function() {
    $(".heart").on("click", function() {
      $(this).toggleClass("is-active");
    });
  });
  function reloadPage() {
    var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
    // Current Time //
    var now = Date.now();
    // Total Process Lenght as Minutes //
    var tenSec = 10 * 1000;
    // End Time of Process //
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) {
        location.reload();
    }
}
let ListItem = React.createClass({
	
	playMusic(item, e) {
		PubSub.publish('PLAY_MUSIC', item);
    
	},
    render() {

    	let item = this.props.data;
      reloadPage();
        return (
            <div className="contain">
            <li className={`row components-listitem${this.props.focus ? ' focus' : ''}`} onClick={this.playMusic.bind(this, item)}>
                <div className="asd"><img className="asd" src={item.cover} alt={item.title}/></div>
                <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
               
							<div className="placement">
							<div className="heart"></div>
						</div>
            </li>
            </div>
        );
    }
});

export default ListItem;
