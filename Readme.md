## What is the Quran-English?
The Quran is the holy book of Islam, and it is the word of Allah. It was revealed to Prophet Muhammad (peace be upon him) over 1,400 years ago. The Quran is written in Arabic, and it consists of 114 chapters, known as Surahs. Each Surah is made up of verses, and they are full of wisdom, guidance, and stories for all of humanity to learn from. This `"quran-english"` module provides access to these verses of quran and their translations so that developers should be able to create quran related softwares.

## Meet the Developer
This amazing project is developed by Muhammad Sharjeel Baig. He has put his heart and soul into creating this module to help developers create softwares to understand the Quran better or softwares to read Quran.

- Connect with the developer on LinkedIn: [Sharjeel Baig on LinkedIn](https://www.linkedin.com/in/sharjeel-baig-250858222/)

## Usage of the Module
With this simple nodejs module, we can access the Quranic verses and their translations in an easy and interactive way. Let's explore some of the exciting functions this module offers:

```typescript
1. getVersesSurahById(surah_id:number)
This function allows us to get verses from a specific Surah based on its Surah number. For example, to get the first verse of Surah Al-Fatihah, we can use the following code:
console.log(getVersesSurahById(1)[0]);
/* Output:
{
  id: 1,
  verse_key: '1:1',
  text: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
  translation: 'In the name of ALLAH, the Entirely Merciful, the Especially Merciful.',
  surah_id: 1
}*/
```

```typescript
2. getVerseByKey(verseKey: string)
This function allows us to get a specific verse from any Surah using a unique key. For example, to get the second verse of Surah Al-Fatihah, we can use the following code:
console.log(getVerseByKey('1:2'));
/* Output:
{
  id: 2,
  verse_key: '1:2',
  text: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
  translation: '[All] praise is [due] to ALLAH, Lord of the worlds -',
  surah_id: 1
}*/
```

```typescript
3. getSurahById(surahId: number)
This function allows us to get information about a specific Surah using its ID. For example:
const surahInfo = getSurahById(1);
console.log(surahInfo);
/* Output:
{
  id: 1,
  name_arabic: 'الفاتحة',
  name_english: 'Al-Fatihah',
  revelation_type: 'Meccan',
  verses_count: 7,
}*/
```

```typescript
4. getSurahByName(chapterName: string)
This function allows us to get information about a specific Surah using its name in English or Arabic. For example:
const surah = getSurahByName("Al-Fatihah");
console.log(surah);
/* Output:
{
  id: 1,
  name_arabic: "الفاتحة",
  name_english: "Al-Fatihah",
  revelation_type: "Meccan",
  verses_count: 7,
}*/
```

```typescript
5. getVersesBySurahName(chapterName: string): Verse[]
This function allows us to get an array of Verse objects for a given chapter name. For example, to get all the verses of Surah Al-Fatihah, we can use the following code:
const verses = getVersesBySurahName("Al-Fatihah");
console.log(verses);
/* Output:
[
  {
    id: 1,
    verse_key: "1:1",
    text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    translation: "In the name of ALLAH, the Entirely Merciful, the Especially Merciful.",
    surah_id: 1
  },
  {
    id: 2,
    verse_key: "1:2",
    text: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
    translation: "[All] praise is [due] to ALLAH, Lord of the worlds -",
    surah_id: 1
  },
  ...
  ...
  // Other verses of Surah Al-Fatihah
  ...
  ...
]
*/
```
# cheatsheet

```bash
npm i quran-english
```

| Function                          | Description                                                                                          |
|-----------------------------------|------------------------------------------------------------------------------------------------------|
| `getSurahById(chapterId)`         | `Get information about a specific Surah using its ID.`                                              |
| `getSurahByName(chapterName)`     | `Get information about a specific Surah using its name in English or Arabic.`                       |
| `getVerseByKey(verseKey)`         | `Get a specific verse from any Surah using a unique key.`                                           |
| `getVersesBySurahId(chapterId)`   | `Get an array of Verse objects for a given chapter ID.`                                             |
| `getVersesBySurahName(chapterName)` | `Get an array of Verse objects for a given chapter name in English or Arabic.`                     |
| `getVerse(surahId, verseNumber)`  | `Get the actual verse as a text of a Surah using its ID and verse number.`                      |
| `getTranslation(surahId, verseNumber)` | `Get the translation of a specific verse from a Surah using its ID and verse number.`               |
| `getChapterNameEnglish(chapterId)` | `Get the English name of a specific chapter using its ID.`                                          |
| `getChapterNameArabic(chapterId)`  | `Get the Arabic name of a specific chapter using its ID.`                                           |
| `getVerseCount(chapterId)`        | `Get the total number of verses in a specific chapter using its ID.`                                |

# Kingdom of Quran - A Journey into the Divine Words

## Introduction
Welcome to the Kingdom of Quran intro, Kingdom of Quran, a place where we embark on a journey to explore the beautiful verses of the Holy Quran and to spread Islam. The Quran is the sacred book of Islam, and it contains the words of Allah, the Most Merciful and Especially Merciful. In the name of Allah, the Entirely Merciful, the Especially Merciful, let's begin this incredible adventure by sharing our [facebook page](https://www.facebook.com/kingdomofquranfb/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0) and [Youtube Channel Link](https://youtube.com/c/kingdomofquran) and let the Islam spread!!
## Let's Begin Our Journey
The Kingdom of Quran is a treasure trove of knowledge and wisdom. We invite you to explore the kingdom of quran youtube channel, and our facebook page, and embark on a beautiful journey of learning and understanding the Quran.
follow us on facebook and subscribe to our channel on youtube

- [Youtube Channel Link](https://youtube.com/c/kingdomofquran)
- [facebook page](https://www.facebook.com/kingdomofquranfb/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0)

![Kingdom of Quran](https://firebasestorage.googleapis.com/v0/b/shazi-cloud.appspot.com/o/kingdomofquran%20banner.png?alt=media&token=60fd7c45-1dae-4b54-9f22-0b42b40ca5ae)

Remember, the Quran is a book of guidance, love, and mercy. May this journey bring you closer to Allah and enrich your life with peace and blessings. Happy exploring! 🌟🕌📜
