declare module "chapters.json" {
    export interface Chapter {
      id: number;
      name_english: string;
      name_arabic: string;
      verses_count: number;
    }
  
    export interface ChaptersData {
      chapters: Chapter[];
    }
  
    const chaptersData: ChaptersData;
    export default chaptersData;
  }
  