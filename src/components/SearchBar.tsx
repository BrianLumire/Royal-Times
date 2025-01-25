import React, { useRef } from 'react';
import { Autocomplete } from '@react-google-maps/api';

interface SearchBarProps {
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onPlaceSelected }) => {
  const searchBoxRef = useRef<google.maps.places.Autocomplete>();

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    searchBoxRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    if (searchBoxRef.current) {
      const place = searchBoxRef.current.getPlace();
      if (place.geometry && place.geometry.location) {
        onPlaceSelected(place);
      }
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <Autocomplete
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
      >
        <input
          type="text"
          placeholder="Search for a location"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </Autocomplete>
    </div>
  );
};

export default SearchBar;