import React from "react";
import Map, { Source, Layer } from "react-map-gl";
import * as turf from "@turf/turf";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { connect } from "react-redux";
import { MapData } from "./MapData";

const MapElement = (props) => {
  var radius = 100;

  var options = {
    steps: 10,
    units: "miles",
    properties: {
      text: "test",
    },
  };
  const centerPoint = turf.point(MapData[props.user].id);
  const firstCircle = turf.buffer(centerPoint, radius, options);

  const geojsonStyles = {
    lineLayout: {
      "line-join": "round",
      "line-cap": "round",
    },
    linePaint: {
      "line-color": "#151313",
      "line-width": 4,
      "line-opacity": 1,
    },
    symbolLayout: {
      "text-field": "{text}",
      "symbol-placement": "line",
      "text-rotation-alignment": "map",
      "text-offset": [-0.6, -0.6],
      "text-size": {
        base: 1,
        stops: [
          [9, 9],
          [14, 12],
        ],
      },
    },
    symbolPaint: {
      "text-color": "rgba(0, 0, 0, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-width": 2,
    },
  };

  return (
    <div>
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 16.62662018,
          latitude: 49.2125578,
          zoom: 2,
        }}
        style={{ width: "100%", height: " calc(100vh - 77px)" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=bplZHX08heKJ9NgZHXry"
      >
        <Source type="geojson" data={firstCircle}>
          <Layer {...geojsonStyles} type="circle" />
        </Source>
      </Map>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(MapElement);
