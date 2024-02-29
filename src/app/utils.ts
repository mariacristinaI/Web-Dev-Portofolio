export function typing(input: string, output: { value: string }) {
  for (const [i, c] of input.split('').entries()) {
    setTimeout(() => {
      output.value += c;
    }, 70 * i);
  }
}