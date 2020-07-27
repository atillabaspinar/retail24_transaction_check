export interface transaction {
  id: string;
  age: number;
  name: string;
  email: string;
  phone: string;
  connectionInfo?: {
    type: string;
    confidence: number;
  };
  combinedConnectionInfo?: {
    type: string[];
    confidence: number;
  };
  geoInfo: {
    latitude: number;
    longitude: number;
  };
  children?: transaction[];
}
