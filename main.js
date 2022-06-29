for (let index = 0; index <= 9; index++) {
  switch (index) {
    case 0:
      for (let a = 0; a <= 5; a++) {
        for (let b = 1; b <= a; b++) {
          process.stdout.write("* ");
        }
        console.log("");
      }
      break;

    case 1:
      for (let a = 0; a <= 5; a++) {
        for (let b = 1; b <= a; b++) {
          process.stdout.write(`${b} `);
        }
        console.log("");
      }
      break;
    case 2:
      for (let a = 0; a <= 5; a++) {
        for (let b = 1; b <= a; b++) {
          process.stdout.write(String.fromCharCode(65 + a - 1) + " ");
        }
        console.log("");
      }
      break;
    case 3:
      console.log("");
      for (let a = 5; a >= 0; a--) {
        for (let b = 1; b <= a; b++) {
          process.stdout.write("* ");
        }
        console.log("");
      }
      break;
    case 4:
      for (let a = 5; a >= 0; a--) {
        for (let b = 1; b <= a; b++) {
          process.stdout.write(`${b} `);
        }
        console.log("");
      }
      break;
    case 5:
      for (let a = 1; a <= 5; a++) {
        for (let b = 0; b <= 5; b++) {
          if (b > a) process.stdout.write("  ");
        }
        for (let c = 0; c <= 5; c++) {
          if (c < a) process.stdout.write("* ");
        }
        for (let d = 0; d <= 5; d++) {
          if (d < a - 1) process.stdout.write("* ");
        }
        console.log("");
      }
      break;
    case 6:
      let b = 0;
      for (let a = 1; a <= 5; a++) {
        for (let b = 5; b >= 0; b--) {
          if (b > a - 1) process.stdout.write(`  `);
        }
        for (let c = 1; c <= a; c++) {
          if (b < a) process.stdout.write(`${c + a - 1} `);
        }
        for (let d = a; d >= 2; d--) {
          process.stdout.write(`${d + a - 2} `);
        }
        console.log("");
      }
      break;
    case 7:
      console.log("");
      for (let a = 0; a <= 6; a++) {
        let x = 1;
        for (let l1 = 6; l1 >= a; l1--) {
          process.stdout.write(`  `);
        }
        for (let l2 = 1; l2 <= a; l2++) {
          process.stdout.write(` ${x} `);
          x = (x * (a - l2)) / l2;
        }
        console.log("");
      }
      break;
    case 8:
      console.log("");
      let z = 1;
      for (let a = 1; a <= 4; a++) {
        for (let b = 1; b <= a; ++b) {
          process.stdout.write(`${z} `);
          z = 1 + z;
        }
        console.log("");
      }
      break;
  }
}

console.log("\n Program End, Have a nice day! >//< -dika");
