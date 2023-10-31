export interface GamesOverview {
    id: number;
    slug: string;
    name: string;
    price: number;
    background_image: string;
}

export interface GamesResults {
    results: GamesOverview[];
}
