
export enum AccompanimentType {
    ACapella = "a cappella",
    Piano = "piano",
    Orchestra = "orchestra",
    Percussion = "percussion",
}

export enum Language {
    Spanish = "spanish",
    English = "english",
    Latin = "latin",
    Portuguese = "portuguese",
}

export enum Voicing {
    SATB = "SATB",
    SA = "SA",
    SSA = "SSA",
    SSAA = "SSAA",
    TB = "TB",
    TTB = "TTB",
    TTBB = "TTBB",
}

export enum DifficultyLevel {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
}

export interface Score {
    id: string; // unique identifier
    title: string;
    voicing: Voicing[]; //array because a score might have multiple versions 
    accompanimentType: AccompanimentType;
    language: Language;
    difficultyLevel: DifficultyLevel;
    description: string;
    price: number;
    duration: number;

    // optional data 
    composer?: string; // optional because most scores will have a composer or arranger 
    arranger?: string; 
    yearPublished?: number;
    composerNotes?: string;
    catalogNumber?: string;
    tags?: string[];
    audioSampleUrl?: string;
    
}