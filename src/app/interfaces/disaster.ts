import { Coordinate } from './camp';

export interface DisasterRelief {
    id: string;
    title: string;
    description: string;
    location: Coordinate;
    status: DisasterReliefStatus;
    createdAt: number;
    updatedAt: number;
}

enum DisasterReliefStatus {
    "On Going",
    "Completed"
}