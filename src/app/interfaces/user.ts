export interface User {
    id: string;
    name: string;
    imageUrl: string;
    phoneNumber: string;
    dateOfBirth: number;
    skills: string[];
    type: UserType;
    status: UserStatus;
    createdAt: number;
    updatedAt: number;
}

export interface VolunteerAssignment {
    id: string;
    userId: string;
    campId: string;
    assignmentTitle: string;
    createdAt: number;
    updatedAt: number;
}

enum UserType {
    "Administrator",
    "Volunteer"
}

enum UserStatus {
    "Active",
    "Inactive"
}