export declare const getSurahById: (chapterId: number) => {
    id: number;
    name_english: string;
    name_arabic: string;
    verses_count: number;
    english_simple?: undefined;
} | {
    id: number;
    english_simple: string;
    name_arabic: string;
    verses_count: number;
    name_english?: undefined;
} | undefined;
export declare const getSurahByName: (chapterName: string) => {
    id: number;
    name_english: string;
    name_arabic: string;
    verses_count: number;
    english_simple?: undefined;
} | {
    id: number;
    english_simple: string;
    name_arabic: string;
    verses_count: number;
    name_english?: undefined;
} | undefined;
export declare const getVerseByKey: (verseKey: string) => {
    id: number;
    verse_key: string;
    text: string;
    translation: string;
    surah_id: number;
} | undefined;
export declare const getVersesBySurahId: (chapterId: number) => {
    id: number;
    verse_key: string;
    text: string;
    translation: string;
    surah_id: number;
}[];
export declare const getVersesBySurahName: (chapterName: string) => {
    id: number;
    verse_key: string;
    text: string;
    translation: string;
    surah_id: number;
}[];
