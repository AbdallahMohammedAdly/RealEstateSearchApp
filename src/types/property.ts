export interface Property {
  id: string;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}
