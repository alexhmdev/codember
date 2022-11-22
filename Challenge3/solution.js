/*
Challenge 3: Zebra of colors

Problem

TMChein is getting ready for the holidays and wants to start decorating the house with Christmas lights.

He wants to buy some fancy light but his favorite ones are those that have two colors that alternate. Like a two-color zebra.

He has represented the lights as Arrays where each position is a color. Now, he wants to know which lights have the longest zebra and what the last color of that color sequence is. For example:

['red', 'blue', 'red', 'blue', 'green'] -> 4, blue
['green', 'red', 'blue', 'gray'] -> 2, gray
['blue', 'blue', 'blue', 'blue'] -> 1, blue
['red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
['blue', 'red', 'blue', 'red', 'gray'] -> 4, red
['red', 'red', 'blue', 'red', 'red', 'red', 'green'] -> 3, red
['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'] -> 6, green

Keep in mind that he only wants to know the length of when two colors are alternating. Once the alternation of the two colors is broken, it stops counting.

Now that you know this, https://codember.dev/colors.txt

Remember that a color zebra is when two colors alternate one after the other. If a color is repeated in the next position or a third color appears, then it stops counting.
What we want to calculate is the longest color zebra and the last color of that color sequence.
*/

const colors = ['red', 'blue', 'red', 'blue', 'green']; // 4, blue

/**
 *@param {string[]} colors
 */
const zebra = (colors) => {
  let zebrasArray = [];
  let zebrasLists = [];
  let zebrasLength = [];
  for (let i = 0; i < colors.length; i++) {
    const prev = colors[i - 1];
    const current = colors[i];
    const next = colors[i + 1];
    if (prev === next || prev == undefined || next == undefined) {
      zebrasArray.push(current);
    } else {
      if (zebrasArray.length > 0) {
        zebrasLists.push(zebrasArray);
        zebrasArray = [];
      }
    }
  }
  console.log(zebrasLists);
  // zebrasLists = zebrasLists.filter((list) => list.length > 0);
  // zebrasLength = zebrasLists.map((list) => list.length);
  //   let zebraLength = Math.max(...zebrasLength);
  //   zebrasLength
  // let zebraArray = zebrasLists
  //   .filter((zebra) => zebra.length === Math.max(...zebrasLength))
  //   .flat();
  // return {
  //   zebraLength,
  //   lastZebraColor: zebraArray[zebraLength - 1]
  // };
};

console.log(zebra(colors));
