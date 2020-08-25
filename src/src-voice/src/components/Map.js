import React, { useEffect, useRef, useState } from 'react';
import map_img from '../images/airportmap3.png';

export default function Map({ directions, onPathBBoxChange }) {
  let [path, setPath] = useState('');
  let [lastBbox, setLastBbox] = useState({});
  let svgRef = useRef();

  let directionsArray = Array.isArray(directions)
    ? directions
    : [directions].filter((d) => !!d);
  if (path) {
    directionsArray.push(path);
  }
  let pathRef = useRef();

  useEffect(() => {
    let bbox = pathRef.current.getBBox();
    if (bbox.x !== lastBbox.x || bbox.y !== lastBbox.y) {
      let imageBBox = svgRef.current.getBBox();
      setLastBbox(bbox);
      onPathBBoxChange({ pathBBox: bbox, imageBBox });
    }
  });

  //console.log('path', path, directionsArray);

  return (
    <svg
      ref={svgRef}
      width="1080"
      height="564"
      viewBox="0 0 1080 564"
      onMouseDown={(e) => {
        let svg = svgRef.current;

        // Create an SVGPoint for future math
        var pt = svg.createSVGPoint();

        // Get point in global SVG space
        let cursorPoint = (evt) => {
          pt.x = evt.clientX;
          pt.y = evt.clientY;
          return pt.matrixTransform(svg.getScreenCTM().inverse());
        };
        var loc = cursorPoint(e);

        if (path) {
          setPath((p) => `${p} L ${loc.x}  ${loc.y}`);
        }

        console.log(loc);
      }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
      <image
        x="80"
        y="0"
        style={{ transform: 'scale(0.49)' }}
        href={map_img}
      ></image>
      <svg x="705" y="330">
        <rect
          x="14"
          y="-11"
          width="20"
          height="20"
          fill="blue"
          transform="rotate(45)"
        ></rect>
        <rect x="10" y="0" width="50" height="32" fill="blue"></rect>
        <text
          x="10"
          y="10"
          fontFamily="Verdana"
          fontSize="11"
          fill="red"
          style={{ fontWeight: 'bold' }}
        >
          <tspan x="13" dy="0.2em">
            you are
          </tspan>
          <tspan x="22" dy="1.2em">
            here
          </tspan>
        </text>
      </svg>
      <g ref={pathRef}>
        {directionsArray && directionsArray.length > 0
          ? directionsArray.map((d) => (
              <path
                key={d}
                className="path"
                d={d}
                strokeWidth="5"
                stroke="red"
                fill="transparent"
              />
            ))
          : ''}
      </g>
    </svg>
  );
}
