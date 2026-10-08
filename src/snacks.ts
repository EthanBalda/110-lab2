import { printAnimation } from "./animation";

export const snacks = ["baby goldfish", "korean bbq crunchy chickpeas", "chomps", "banana", "spicy sweet chili doritos", "flamin' hot munchies snack mix"];

export function printSnacks(): void {
    printAnimation("Snack");
  console.log(snacks.join(", "));
}