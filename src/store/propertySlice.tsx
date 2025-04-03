import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Property } from '../types/property';



interface PropertyState {
  properties: Property[];
  selectedProperty: Property | null;
  filters: {
    minPrice: number;
    maxPrice: number;
    bedrooms: number;
  };
}

const initialState: PropertyState = {
  properties: [
    {
      id: '1',
      title: 'Modern Downtown Apartment',
      price: 750000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800',
      location: {
        lat: 40.7128,
        lng: -74.0060,
        address: '123 Downtown Ave, New York, NY'
      }
    },
    {
      id: '2',
      title: 'Luxury Waterfront Villa',
      price: 1250000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800',
      location: {
        lat: 40.7228,
        lng: -73.9867,
        address: '456 Waterfront Blvd, New York, NY'
      }
    },
    {
      id: '3',
      title: 'Cozy Garden Townhouse',
      price: 950000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1800,
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800',
      location: {
        lat: 40.7328,
        lng: -73.9959,
        address: '789 Garden St, New York, NY'
      }
    }
  ],
  selectedProperty: null,
  filters: {
    minPrice: 0,
    maxPrice: 2000000,
    bedrooms: 0
  }
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setSelectedProperty: (state, action: PayloadAction<Property | null>) => {
      state.selectedProperty = action.payload;
    },
    updateFilters: (state, action: PayloadAction<Partial<PropertyState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    }
  }
});

export const { setSelectedProperty, updateFilters } = propertySlice.actions;
export default propertySlice.reducer;