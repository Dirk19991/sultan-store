export default function getNumbersBefore(num: number) {
  const nums: number[] = [];
  for (let i = 1; i <= num; i++) {
    nums.push(i);
  }
  return nums;
}
