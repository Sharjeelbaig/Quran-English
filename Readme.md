# بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
#### In the name of ALLAH, the Entirely Merciful, the Especially Merciful
## Quran English
![logo kingdom of quran](https://firebasestorage.googleapis.com/v0/b/shazi-cloud.appspot.com/o/kingdom%20of%20quran%20logo.png?alt=media&token=e1a8ea1c-0893-4353-8c77-27869a512b7e)

Developed by Kingdom of Quran: [Visit Kingdom of Quran YouTube Channel](https://youtube.com/c/kingdomofquran)

`https://youtube.com/c/kingdomofquran` 

### A simple nodejs module for quranic verses and their translations
---
# ⛑️ Usage
## This module provides following functions:
- `getVersesSurahById(surah_id:number)`: This ammazing function gets verses of certain surah determined by their surah number parameter.
- `getVersesBySurahName`: You can get verses by providing Al-Fatihah or Al-Baqarah in the parameter.
- `getVerseByKey`: suppose if I want to get 2nd verse of surah fatihah technically counting bismillah as verse 1. I can use this function to get surah verses like this: `x:n` where x represents surah id and n represents verse number. so for verse 2 of fatihah I can get such by `getVerseByKey('1:2')`
- `getSurahById`: list the surah info by id
- `getSurahByName`: // to complete
#### Example usage of `getVersesSurahById`
```ts
console.log(getVersesSurahById(1)[0]);
/* will output {
  id: 1,
  verse_key: '1:1',
  text: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
  translation: 'In the name of ALLAH, the Entirely Merciful, the Especially Merciful.',
  surah_id: 1
}*/
console.log(getVersesSurahById(1)[1]);
/*{
  id: 2,
  verse_key: '1:2',
  text: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
  translation: '[All] praise is [due] to ALLAH, Lord of the worlds -',
  surah_id: 1
}*/
console.log(getVersesSurahById(1)[2]);
// {
//     id: 3,
//     verse_key: '1:3',
//     text: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
//     translation: 'The Entirely Merciful, the Especially Merciful,',
//     surah_id: 1
// }
console.log(getVersesSurahById(1)[3]);
/*
{
  id: 4,
  verse_key: '1:4',
  text: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ',
  translation: 'Sovereign of the Day of Recompense.',
  surah_id: 1
}
*/
console.log(getVersesSurahById(1)[4]);
/*
{
  id: 5,
  verse_key: '1:5',
  text: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
  translation: 'It is You we worship and You we ask for help.',
  surah_id: 1
}
*/
```
#### Surah Names and their id

| Surah Name         | Surah id |
|--------------------|--------------|
| Al-Fatihah         | 1            |
| Al-Baqarah         | 2            |
| Aal-E-Imran        | 3            |
| An-Nisa'           | 4            |
| Al-Ma'idah         | 5            |
| Al-An'am           | 6            |
| Al-A'raf           | 7            |
| Al-Anfal           | 8            |
| At-Tawbah          | 9            |
| Yunus              | 10           |
| Hud                | 11           |
| Yusuf              | 12           |
| Ar-Ra'd            | 13           |
| Ibrahim            | 14           |
| Al-Hijr            | 15           |
| An-Nahl            | 16           |
| Al-Isra'           | 17           |
| Al-Kahf            | 18           |
| Maryam             | 19           |
| Ta-Ha              | 20           |
| Al-Anbiya'         | 21           |
| Al-Hajj            | 22           |
| Al-Mu'minun        | 23           |
| An-Nur             | 24           |
| Al-Furqan          | 25           |
| Ash-Shu'ara'       | 26           |
| An-Naml            | 27           |
| Al-Qasas           | 28           |
| Al-'Ankabut        | 29           |
| Ar-Rum             | 30           |
| Luqman             | 31           |
| As-Sajdah          | 32           |
| Al-Ahzab           | 33           |
| Saba'              | 34           |
| Fatir              | 35           |
| Ya-Sin             | 36           |
| As-Saffat          | 37           |
| Sad                | 38           |
| Az-Zumar           | 39           |
| Ghafir             | 40           |
| Fussilat           | 41           |
| Ash-Shura          | 42           |
| Az-Zukhruf         | 43           |
| Ad-Dukhan          | 44           |
| Al-Jathiyah        | 45           |
| Al-Ahqaf           | 46           |
| Muhammad           | 47           |
| Al-Fath            | 48           |
| Al-Hujurat         | 49           |
| Qaf                | 50           |
| Adh-Dhariyat       | 51           |
| At-Tur             | 52           |
| An-Najm            | 53           |
| Al-Qamar           | 54           |
| Ar-Rahman          | 55           |
| Al-Waqi'ah         | 56           |
| Al-Hadid           | 57           |
| Al-Mujadila        | 58           |
| Al-Hashr           | 59           |
| Al-Mumtahanah      | 60           |
| As-Saff            | 61           |
| Al-Jumu'ah         | 62           |
| Al-Munafiqun       | 63           |
| At-Taghabun        | 64           |
| At-Talaq           | 65           |
| At-Tahrim          | 66           |
| Al-Mulk            | 67           |
| Al-Qalam           | 68           |
| Al-Haqqah          | 69           |
| Al-Ma'arij         | 70           |
| Nuh                | 71           |
| Al-Jinn            | 72           |
| Al-Muzzammil       | 73           |
| Al-Muddaththir     | 74           |
| Al-Qiyamah         | 75           |
| Al-Insan           | 76           |
| Al-Mursalat        | 77           |
| An-Naba'           | 78           |
| An-Nazi'at         | 79           |
| 'Abasa             | 80           |
| At-Takwir          | 81           |
| Al-Infitar         | 82           |
| Al-Mutaffifin      | 83           |
| Al-Inshiqaq        | 84           |
| Al-Buruj           | 85           |
| At-Tariq           | 86           |
| Al-A'la            | 87           |
| Al-Ghashiyah       | 88           |
| Al-Fajr            | 89           |
| Al-Balad           | 90           |
| Ash-Shams          | 91           |
| Al-Lail            | 92           |
| Ad-Duha            | 93           |
| Ash-Sharh          | 94           |
| At-Tin             | 95           |
| Al-'Alaq           | 96           |
| Al-Qadr            | 97           |
| Al-Bayyinah        | 98           |
| Az-Zalzalah        | 99           |
| Al-'Adiyat         | 100          |
| Al-Qari'ah         | 101          |
| At-Takathur        | 102          |
| Al-'Asr            | 103          |
| Al-Humazah         | 104          |
| Al-Fil             | 105          |
| Quraysh            | 106          |
| Al-Ma'un           | 107          |
| Al-Kawthar         | 108          |
| Al-Kafirun         | 109          |
| An-Nasr            | 110          |
| Al-Lahab           | 111          |
| Al-Ikhlas          | 112          |
| Al-Falaq           | 113          |
| An-Nas             | 114          |


### `Example usage of getSurahByName(chapterName: string)`
- Returns the Surah object for a given chapter name.
- Parameters:
  - `chapterName`: The name of the chapter in English or Arabic.
- Example Usage:
  ```typescript
  const surah = getSurahByName("Al-Fatihah");
  console.log(surah);
  ```
  Output:
  ```
  {
    id: 1,
    name_arabic: "الفاتحة",
    name_english: "Al-Fatihah",
    revelation_type: "Meccan",
    verses_count: 7,
  }
  ```

### `Example usage of getVerseByKey(verseKey: string)`
- Returns the Verse object for a given verse key.
- Parameters:
  - `verseKey`: The key of the verse in the format "surahId:verseNumber".
- Example Usage:
  ```typescript
  const verse = getVerseByKey("1:1");
  console.log(verse);
  ```
  Output:
  ```
  {
    id: 1,
    verse_key: "1:1",
    text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    translation: "In the name of ALLAH, the Entirely Merciful, the Especially Merciful.",
    surah_id: 1
  }
  ```
### `getVersesBySurahName(chapterName: string): Verse[]`
- Returns an array of Verse objects for a given chapter name.
- Parameter:
-- chapterName: The name of the chapter in English or Arabic.
```ts
const verses = getVersesBySurahName("Al-Fatihah");
console.log(verses);
```
```
output
[
  {
    id: 1,
    verse_key: "1:1",
    text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    translation: "In the name of ALLAH, the Entirely
    ...
    ...
    ...
    ...
    ...
    ...
```
![Kingdom of Quran](https://firebasestorage.googleapis.com/v0/b/shazi-cloud.appspot.com/o/kingdomofquran%20banner.png?alt=media&token=60fd7c45-1dae-4b54-9f22-0b42b40ca5ae)