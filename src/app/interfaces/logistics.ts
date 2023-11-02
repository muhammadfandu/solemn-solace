// Note:
// on transaction approval, need to update quantity of item

export interface Product {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    categoryId: string;
    sku: string;
    tags: string;
    unitOfMeasurement: string;
    createdAt: number;
    updatedAt: number;
}

export interface Item {
    id: string;
    productId: string;
    locationId: string;
    status: LogisticsStatus;
    quantity: number;
}

export interface Transaction {
    id: string;
    destinationId: string;
    quantity: string;
    type: TransactionType;
    status: TransactionStatus;
    verifyImageUrl: string;
    createdBy: string;
    approvedBy: string;
    createdAt: number;
    updatedAt: number;
}

export interface Category {
    id: string;
    name: string;
    description: string;
    createdAt: number;
    updatedAt: number;
}

enum LogisticsStatus {
    "Usable",
    "Expired",
    "Pending"
}

enum TransactionType {
    "In",
    "Out",
    "Move"
}

enum TransactionStatus {
    "Pending",
    "Completed",
    "Canceled"
}