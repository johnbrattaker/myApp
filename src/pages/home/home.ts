import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {

    /*Initializing Map*/
   mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmJyYXR0YWtlciIsImEiOiJjamlmemFidnQwbW5sM3dxcGR1c3ZvYzd6In0.vq8bxeJ5wJ5hdQtySfAk8Q';
   var map = new mapboxgl.Map({
   style: 'mapbox://styles/johnbrattaker/cjiobwfne1rpa2soesmqtzp68',
   center: [20.0066, 40.7135],
   zoom: 2,
   pitch: 0,   
   container: 'map'
 });


map.on('load', function () {
    // Add a source and layer displaying a point which will be animated in a circle.
    //map.addSource('point', {
    //    "type": "geojson",
    //    "data": pointOnCircle(0)
    //});

//      map.addSource('veh-incidents-1', {
//        type: 'geojson',
//        data: 'https://dl.dropbox.com/s/z4hajzr32e59kv4/nyc_pedcyc_collisions_1.geojson?dl=0',
//        buffer: 0,
//        maxzoom: 12
//    });
// map.addSource('veh-incidents-1', {
//     type: 'geojson',
//     data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'

    
// });

    //ais
      map.addSource('veh-incidents-1', {
        type: 'geojson',
        data: 'https://dl.dropbox.com/s/hfzw58r625fhshu/points.geojson?dl=0',
        buffer: 0,
        maxzoom: 12
    });

    //vessels
    map.addSource('veh-incidents-2', {
        type: 'geojson',
        data: 'https://dl.dropbox.com/s/algouut0sf5vggo/vessels.geojson?dl=0',
        buffer: 0,
        maxzoom: 12
    });
    
    
    //ais: https://dl.dropbox.com/s/hfzw58r625fhshu/points.geojson?dl=0
    //vessels: https://dl.dropbox.com/s/algouut0sf5vggo/vessels.geojson?dl=0
    

map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": 'veh-incidents-2',
    "layout": {
        "icon-allow-overlap": true,
        "icon-image": "triangle-15",
        "icon-rotation-alignment": "map",
        "icon-rotate": {
            "type": "identity",
            "property": "course"
         },
        
    }
});

map.addLayer({
    "id": "names",
    "type": "symbol",
    "source": 'veh-incidents-2',
    "layout": {
        "text-field": "{name}",
        "text-allow-overlap": false,
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-size": 6,
        "text-offset": [0, 0.8],
        "text-anchor": "top"
        
    }
});

// map.addLayer({
//     "id": "points",
//     "type": "symbol",
//     "source": 'veh-incidents-1',
//     "layout": {        
//             "text-field": "{title}",
//             "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
//             "text-offset": [0, 0.6],
//             "text-anchor": "top"
//     }
// });


//   map.addLayer({
//     'id': 'veh-incd-1',
//     'type': 'circle',
//     'source': 'veh-incidents-1',
//     'paint': {
//         'circle-color': {
//             property: 'CYC_INJ',
//             type: 'interval',
//             stops: [
//                 [1, 'orange'],
//                 [2, 'red']
//             ]
//         },
//         'circle-radius': {
//             property: 'CYC_INJ',
//             base: 3,
//             type: 'interval',
//             stops: [
//                 [1, 10],
//                 [2, 8],
//                 [3, 12]
//             ]
//         },
//         'circle-opacity': 0.8,
//         'circle-blur': 0.5
//     },
//     'filter': ['>=', 'CYC_INJ', 1]
// }, 'waterway-label');

    
 });
}

}
