"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVerseCount = exports.getChapterNameArabic = exports.getChapterNameEnglish = exports.getTranslation = exports.getVerse = exports.getVersesBySurahName = exports.getVersesBySurahId = exports.getVerseByKey = exports.getSurahByName = exports.getSurahById = void 0;
const chapters_json_1 = __importDefault(require("./chapters.json"));
const verses_json_1 = __importDefault(require("./verses.json"));
const getSurahById = (chapterId) => {
    var _a;
    return (_a = chapters_json_1.default === null || chapters_json_1.default === void 0 ? void 0 : chapters_json_1.default.chapters) === null || _a === void 0 ? void 0 : _a.find((chapter) => chapter.id === chapterId);
};
exports.getSurahById = getSurahById;
const getSurahByName = (chapterName) => {
    var _a;
    return (_a = chapters_json_1.default === null || chapters_json_1.default === void 0 ? void 0 : chapters_json_1.default.chapters) === null || _a === void 0 ? void 0 : _a.find((chapter) => chapter.name_english === chapterName ||
        chapter.name_arabic === chapterName);
};
exports.getSurahByName = getSurahByName;
const getVerseByKey = (verseKey) => {
    var _a;
    return (_a = verses_json_1.default === null || verses_json_1.default === void 0 ? void 0 : verses_json_1.default.verses) === null || _a === void 0 ? void 0 : _a.find((verse) => verse.verse_key === verseKey);
};
exports.getVerseByKey = getVerseByKey;
const getVersesBySurahId = (chapterId) => {
    var _a;
    return (_a = verses_json_1.default === null || verses_json_1.default === void 0 ? void 0 : verses_json_1.default.verses) === null || _a === void 0 ? void 0 : _a.filter((verse) => verse.surah_id === chapterId);
};
exports.getVersesBySurahId = getVersesBySurahId;
const getVersesBySurahName = (chapterName) => {
    const chapter = (0, exports.getSurahByName)(chapterName);
    return chapter ? (0, exports.getVersesBySurahId)(chapter.id) : [];
};
exports.getVersesBySurahName = getVersesBySurahName;
const getVerse = (surahId, verseNumber) => {
    var _a, _b;
    const verseKey = `${surahId}:${verseNumber}`;
    return (_b = (_a = verses_json_1.default === null || verses_json_1.default === void 0 ? void 0 : verses_json_1.default.verses) === null || _a === void 0 ? void 0 : _a.find((verse) => verse.verse_key === verseKey)) === null || _b === void 0 ? void 0 : _b.text;
};
exports.getVerse = getVerse;
function getTranslation(surahId, verseNumber) {
    var _a;
    const verseKey = `${surahId}:${verseNumber}`;
    const matchingItem = (_a = verses_json_1.default === null || verses_json_1.default === void 0 ? void 0 : verses_json_1.default.verses) === null || _a === void 0 ? void 0 : _a.find((verse) => verse.verse_key === verseKey);
    return matchingItem ? matchingItem.translation : null;
}
exports.getTranslation = getTranslation;
function getChapterNameEnglish(chapterId) {
    var _a, _b;
    return (_b = (_a = chapters_json_1.default === null || chapters_json_1.default === void 0 ? void 0 : chapters_json_1.default.chapters) === null || _a === void 0 ? void 0 : _a.find((chapter) => chapter.id === chapterId)) === null || _b === void 0 ? void 0 : _b.name_english;
}
exports.getChapterNameEnglish = getChapterNameEnglish;
function getChapterNameArabic(chapterId) {
    var _a, _b;
    return (_b = (_a = chapters_json_1.default === null || chapters_json_1.default === void 0 ? void 0 : chapters_json_1.default.chapters) === null || _a === void 0 ? void 0 : _a.find((chapter) => chapter.id === chapterId)) === null || _b === void 0 ? void 0 : _b.name_arabic;
}
exports.getChapterNameArabic = getChapterNameArabic;
function getVerseCount(chapterId) {
    var _a, _b;
    return (_b = (_a = chapters_json_1.default === null || chapters_json_1.default === void 0 ? void 0 : chapters_json_1.default.chapters) === null || _a === void 0 ? void 0 : _a.find((chapter) => chapter.id === chapterId)) === null || _b === void 0 ? void 0 : _b.verses_count;
}
exports.getVerseCount = getVerseCount;
