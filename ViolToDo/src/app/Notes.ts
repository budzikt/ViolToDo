import {Note} from './note.class'


export const notesdb: Note[] = [
    {
        title : "Przykladowy tytul 1",
        text: "Przykladowy text 1",
        data: new Date(2017, 10, 5),
        done: true,
    },
    {
        title : "Przykladowy tytul 2",
        text: "Przykladowy text 2",
        data: new Date(2017, 11, 7),
        done: false,  
    },  
    {
        title: "Przykladowy tytul 3",
        text: "Przykladowy text 3",
        data: new Date(2017,11,18),
        done: true
    }
]