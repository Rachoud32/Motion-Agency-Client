import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  loadMap = (map, maps) => {
    // const cityCircle = new maps.Circle({
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: '#FF0000',
    //   fillOpacity: 0.35,
    //   map,
    //   center: { lat: 40.756795, lng: -73.954298 },
    //   radius: 10000,
    //   draggable: false,
    // });

    let marker = new maps.Marker({
      position: { lat: 34.730232, lng: 10.764942 },
      icon: {
        url: 'https://imgur.com/Fq0POsJ.jpg', // Replace with the path to your custom image
        scaledSize: new maps.Size(50, 50), // Adjust the size of your image
        origin: new maps.Point(0, 0),
        anchor: new maps.Point(20, 20), // Adjust the anchor point
      },
      map,
      draggable: false,
    });
  };
  render() {
    return (
      <div style={{ height: '600px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAvBBkRwsKBHFKb2sqN5RZdHia6HyhVo-c' }}
          defaultCenter={{ lat: 34.730232, lng: 10.764942 }}
          defaultZoom={17}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.loadMap(map, maps)}
        />
      </div>
    );
  }
}

export default Map;
