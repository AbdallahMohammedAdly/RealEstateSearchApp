import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Home } from 'lucide-react';
import Map from './components/Map';
import PropertyCard from './components/PropertyCard';
import Filters from './components/Filters';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { setSelectedProperty } from './store/propertySlice';

const MainContent: React.FC = () => {
  const { properties, filters } = useSelector((state: RootState) => state.property);
  const dispatch = useDispatch();

  const filteredProperties = properties.filter(property => {
    return (
      property.price >= filters.minPrice &&
      property.price <= filters.maxPrice &&
      (filters.bedrooms === 0 || property.bedrooms >= filters.bedrooms)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Home className="w-8 h-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">RealEstate Search</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Filters />
        
        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-5 space-y-6">
            {filteredProperties.map(property => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={() => dispatch(setSelectedProperty(property))}
              />
            ))}
          </div>
          
          <div className="col-span-7 rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <MainContent />
    </Provider>
  );
}

export default App;