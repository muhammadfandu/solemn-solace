export interface Camp {
    id: string;
    name: string;
    imageUrl: string[];
    address: string;
    phoneNumber: string;
    location: Coordinate;
    type: CampType;
    occupant: Number;
    createdBy: string;
    createdAt: number;
    updatedAt: number;
}

export interface Coordinate {
    latitude: number;
    longitude: number;
}

enum CampType {
    "Supply Center Depot",
    "Refugee Camp",
    "Forward Observation Post"
}