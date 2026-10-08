import { printAnimation } from "./animation";
export const music: string[] = ["Body", "Coconut Water", "POP DAT THING"];

export function printMusic(): void {
    printAnimation("Music");

    for (const song of music) {
        console.log(song);
    }
}

printMusic();