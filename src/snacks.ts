import { printAnimation } from "./animation";

export const snacks = ["baby goldfish", "korean bbq crunchy chickpeas", "chomps"];

export function printSnacks(): void {
    printAnimation("Snack");
  console.log(snacks.join(", "));
}

printSnacks();