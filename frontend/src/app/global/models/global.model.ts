export interface GlobalModel {
    id?: string;
    attributes?: Attribute;
    links?: Link;
    siteName?: string;
}

export interface Attribute {
    siteName: string;
    links: any[];
}

export interface Link {
    platform: string;
    link: string;
}