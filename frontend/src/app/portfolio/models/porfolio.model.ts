export interface PortfolioModel {
    id: string;
    attributes?: Attribute;
    image?: any;
}

export interface Attribute {
    headline: string;
    content?: string;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
}