interface Developers {
    id: number;
    name: string;
}

type Publishers = Developers;

interface Esrb_Rating {
    id: number;
    name: string;
}

interface Platforms {
    platform: {
        id: number;
        name: string;
    };
}

interface Genres {
    id: number;
    name: string;
}

export interface Game {
    id: number;
    slug: string;
    name: string;
    price: number;
    description_raw: string;
    released: string;
    parent_platforms: Platforms[];
    developers: Developers[];
    publishers: Publishers[];
    genres: Genres[];
    esrb_rating: Esrb_Rating;
    background_image: string;
}

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
