import scoresData from "../data/scores.json";
import { Score, Voicing, Language, AccompanimentType, DifficultyLevel } from "../types/scores";

const scores: Score[] = scoresData as Score[];

export const getAllScores = (): Score[] => {
    return scores;
};

export const getScorebyId = (id: string): Score | undefined => {
    return scores.find(score => score.id === id);
}

// map scores my composer name, use Set to remove duplicates, convert back to an array and sort for display. Helper function so componenets stay focused on rendering
export const getUniqueComposers = (): string[] => { // returns array of strings
    const composers = scores.map(score => score.composer);
    return Array.from(new Set(composers)).sort(); // set is built-in JavaScript data structure - automatically removes duplicates and only keeps unique values
};

export const getUniqueVoicing = (): Voicing[] => {
    const allVoicings = scores.flatMap(score => score.voicing);
    return Array.from(new Set(allVoicings));
};