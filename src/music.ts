import { printAnimation } from "./animation";
const music: string[] = ["Body", "Coconut Water", "Dance Monkey", "POP DAT THING"];

export function printMusic(): void {
    printAnimation("Music");

    for (const song of music) {
        console.log(song);
    }
}

printMusic();