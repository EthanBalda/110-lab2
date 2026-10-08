import { printAnimation } from "./animation";

export const snacks = ["chomps", "banana"];

export function printSnacks(): void {
    printAnimation("Snack");
  console.log(snacks.join(", "));
}

printSnacks();