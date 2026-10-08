import { printAnimation } from "./animation";
export const music: string[] = ["POP DAT THING"];

export function printMusic(): void {
    printAnimation("Music");

    for (const song of music) {
        console.log(song);
    }
}

printMusic();