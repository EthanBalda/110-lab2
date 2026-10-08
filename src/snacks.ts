export const snacks = ["baby goldfish", "korean bbq crunchy chickpeas", "chomps"];

export function printSnacks(): void {
  console.log(snacks.join(", "));
}

printSnacks();