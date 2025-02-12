"use client";

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
  Libraries,
} from "@react-google-maps/api";


interface MapContainerStyle {
  width: string;
  height: string;
}

interface Location {
  lat: number;
  lng: number;
  address: string;
}

const containerStyle: MapContainerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter: Location = {
  lat: -1.286389,
  lng: 36.817223,
  address: "Nairobi, Kenya",
};

// Define the libraries array and ensure it uses the Libraries type
const libraries: Libraries = ["places"];

const Map: React.FC = () => {
  const [center, setCenter] = useState<Location>(defaultCenter);
  const [markers, setMarkers] = useState<Location[]>([]);
  const [distance, setDistance] = useState<string>("");
  const [path, setPath] = useState<google.maps.LatLngLiteral[]>([]);
  const [trackingMarker, setTrackingMarker] = useState<Location | null>(null); // For tracking a moving object

  // Handle place selection from the search bar
  const handlePlaceSelect = (place: google.maps.places.PlaceResult) => {
    if (place.geometry && place.geometry.location) {
      const newLocation: Location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        address: place.formatted_address || "Unknown Address",
      };
      addMarker(newLocation);
    }
  };

  // Handle map click to add a marker
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const newLocation: Location = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        address: "Selected Location",
      };
      addMarker(newLocation);
    }
  };

  // Add a new marker and ensure only the last two are kept
  const addMarker = (newLocation: Location) => {
    const updatedMarkers = [...markers];
    if (updatedMarkers.length >= 2) {
      updatedMarkers.shift(); // Remove the first marker
    }
    updatedMarkers.push(newLocation); // Add the new marker
    setMarkers(updatedMarkers);
    setCenter(newLocation);
  };

  // Calculate distance and path between the last two markers
  useEffect(() => {
    if (markers.length === 2) {
      const origin = markers[0];
      const destination = markers[1];

      const service = new google.maps.DirectionsService();
      service.route(
        {
          origin: { lat: origin.lat, lng: origin.lng },
          destination: { lat: destination.lat, lng: destination.lng },
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK && result) {
            const route = result.routes[0].legs[0];
            setDistance(route.distance?.text || "");

            const path = route.steps.flatMap((step) =>
              step.path.map((latLng) => ({
                lat: latLng.lat(),
                lng: latLng.lng(),
              }))
            );
            setPath(path);

            // Start tracking along the path
            startTracking(path);
          }
        }
      );
    } else {
      setDistance("");
      setPath([]);
      setTrackingMarker(null); // Stop tracking if there are not exactly two markers
    }
  }, [markers]);

  // Simulate tracking along the path
  const startTracking = (path: google.maps.LatLngLiteral[]) => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < path.length) {
        setTrackingMarker({
          lat: path[currentIndex].lat,
          lng: path[currentIndex].lng,
          address: "Tracking...",
        });
        currentIndex++;
      } else {
        clearInterval(interval); // Stop tracking when the end of the path is reached
      }
    }, 500); // Update every 500ms

    return () => clearInterval(interval); // Cleanup on unmount
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      libraries={libraries} // Use the typed libraries array
    >
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ textAlign: "center", color: "#333" }}>Interactive Taxi Map</h1>
       
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onClick={handleMapClick}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
          ))}
          {trackingMarker && ( // Display the tracking marker
            <Marker
              position={{ lat: trackingMarker.lat, lng: trackingMarker.lng }}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: "#FF0000",
                fillOpacity: 1,
                strokeWeight: 2,
              }}
            />
          )}
          {path.length > 0 && markers.length === 2 && (
            <Polyline
              path={path}
              options={{
                strokeColor: "blue",
                strokeOpacity: 1.0,
                strokeWeight: 3,
              }}
            />
          )}
        </GoogleMap>
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#555" }}>Selected Locations:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {markers.map((marker, index) => (
              <li
                key={index}
                style={{
                  background: "#f9f9f9",
                  padding: "10px",
                  margin: "5px 0",
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <strong style={{ color: "#007BFF" }}>
                  Location {index + 1}:
                </strong>{" "}
                {marker.address} (Lat: {marker.lat.toFixed(4)}, Lng: {marker.lng.toFixed(4)})
              </li>
            ))}
          </ul>
          {distance && markers.length === 2 && (
            <p style={{ color: "#28a745", fontWeight: "bold" }}>
              Distance: {distance}
            </p>
          )}
        </div>
      </div>
    </LoadScript>
  );
};

export default Map;