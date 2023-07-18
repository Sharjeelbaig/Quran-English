"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersesBySurahName = exports.getVersesBySurahId = exports.getVerseByKey = exports.getSurahByName = exports.getSurahById = void 0;
const chapters_json_1 = __importDefault(require("./chapters.json"));
const verses_json_1 = __importDefault(require("./verses.json"));
const getSurahById = (chapterId) => {
    return chapters_json_1.default.chapters.find((chapter) => chapter.id === chapterId);
};
exports.getSurahById = getSurahById;
const getSurahByName = (chapterName) => {
    return chapters_json_1.default.chapters.find((chapter) => chapter.name_english === chapterName || chapter.name_arabic === chapterName);
};
exports.getSurahByName = getSurahByName;
const getVerseByKey = (verseKey) => {
    return verses_json_1.default.verses.find((verse) => verse.verse_key === verseKey);
};
exports.getVerseByKey = getVerseByKey;
const getVersesBySurahId = (chapterId) => {
    return verses_json_1.default.verses.filter((verse) => verse.surah_id === chapterId);
};
exports.getVersesBySurahId = getVersesBySurahId;
const getVersesBySurahName = (chapterName) => {
    const chapter = (0, exports.getSurahByName)(chapterName);
    return chapter ? (0, exports.getVersesBySurahId)(chapter.id) : [];
};
exports.getVersesBySurahName = getVersesBySurahName;
