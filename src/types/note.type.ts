export enum NoteCategory {
    MONEY = "money",
    REMINDERS = "reminders",
    TODOS = "todos",
    WORK = "work",
}

export interface Note {
    title: string;
    details: string;
    category: NoteCategory;
    id: number;
}