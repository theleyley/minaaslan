export interface WorkModel {
    id?: string;
    attributes: WorkAttribute;
}

export interface WorkAttribute {
    titleTop: string;
    titleBottom?: string;
    blurb?: string;
    subhead?: string;
    slug?: string;
    workRow?: WorkRow[];
}

export interface WorkRow {
    id: string;
    mediaType?: string;
    blurb?: string;
    youtubeUrl?: string;
    primaryImage: WorkImage;
}

export interface WorkImage {
    data: ImageMetadata;
}

export interface ImageMetadata {
    id: string;
    attributes: ImageAttributes;
}

export interface ImageAttributes {
    name: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats: ImageFormat;
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ImageFormat {
    thumbnail: ImageFormatMetadata;
    small: ImageFormatMetadata;
    medium: ImageFormatMetadata;
    large: ImageFormatMetadata;
}

export interface ImageFormatMetadata {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    url: string;
    path?: string;
    width?: number;
    height?: number;
    size?: number;
}