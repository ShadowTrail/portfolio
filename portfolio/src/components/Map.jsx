import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-75.0, -26.0, 0],
        center: [-1, 0],
        scale: 300,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#ece490"
        stroke="#faaf01"
        strokeWidth={2}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[74.3522, 25.6]}
        dx={-50}
        dy={90}
        connectorProps={{
          stroke: "#f36c0b",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-10" textAnchor="end" alignmentBaseline="middle" fill="#f7b655" fontSize={22}>
          {"Jaipur"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
