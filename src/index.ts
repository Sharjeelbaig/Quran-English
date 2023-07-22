import chaptersData from "./chapters.json";
import versesData from "./verses.json";

export const getSurahById = (chapterId: number) => {
  return chaptersData.chapters.find((chapter) => chapter.id === chapterId);
};

export const getSurahByName = (chapterName: string) => {
  return chaptersData.chapters.find(
    (chapter) =>
      chapter.name_english === chapterName ||
      chapter.name_arabic === chapterName
  );
};

export const getVerseByKey = (verseKey: string) => {
  return versesData.verses.find((verse) => verse.verse_key === verseKey);
};

export const getVersesBySurahId = (chapterId: number) => {
  return versesData.verses.filter((verse) => verse.surah_id === chapterId);
};

export const getVersesBySurahName = (chapterName: string) => {
  const chapter = getSurahByName(chapterName);
  return chapter ? getVersesBySurahId(chapter.id) : [];
};

export const getVerse = (surahId: number, verseNumber: number) => {
  const verseKey = `${surahId}:${verseNumber}`;
  return versesData.verses.find((verse) => verse.verse_key === verseKey)?.text;
};

export function getTranslation(surahId: number, verseNumber: number) {
  const verseKey = `${surahId}:${verseNumber}`;
  const matchingItem = versesData.verses.find(
    (verse) => verse.verse_key === verseKey
  );
  return matchingItem ? matchingItem.translation : null;
}

export function getChapterNameEnglish(chapterId: number) {
  return chaptersData.chapters.find((chapter) => chapter.id === chapterId)
    ?.name_english;
}

export function getChapterNameArabic(chapterId: number) {
  return chaptersData.chapters.find((chapter) => chapter.id === chapterId)
    ?.name_arabic;
}
