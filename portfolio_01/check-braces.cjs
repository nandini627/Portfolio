const fs = require('fs');

const css = fs.readFileSync('src/index.css', 'utf8');

// Strip out comments to avoid counting braces inside them
const noComments = css.replace(/\/\*[\s\S]*?\*\//g, (match) => match.replace(/[^{}]/g, '').replace(/./g, ' ')); 

let balance = 0;
let lines = noComments.split('\n');

for (let i = 0; i < lines.length; i++) {
    // Strip strings to avoid counting braces inside single/double quotes
    let line = lines[i];
    line = line.replace(/(['"])(?:(?!\1|\\).|\\.)*\1/g, "");

    for (let j = 0; j < line.length; j++) {
        if (line[j] === '{') balance++;
        if (line[j] === '}') {
            balance--;
            if (balance < 0) {
                console.log(`Unmatched closing brace '}' at line ${i + 1}`);
                console.log(lines[i]);
                process.exit();
            }
        }
    }
}
if (balance !== 0) {
    console.log('Final balance is not zero:', balance);
} else {
    console.log('All matched perfectly');
}
