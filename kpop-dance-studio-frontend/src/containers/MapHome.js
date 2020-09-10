import React, { Component } from 'react';
import Map from '../components/Map';

class MapHome extends Component {

	render() {
		return(
			<div style={{ margin: '30px' }}>
				<Map
					google={this.props.google}
					center={{lat: 37.541534, lng: 127.057302}}
					height='350px'
          zoom={15}
          user={this.props.user}
				/>
			</div>
		);
	}
} 

export default MapHome;