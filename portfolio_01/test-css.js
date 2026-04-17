import fs from 'fs';
import postcss from 'postcss';

try {
const css = fs.readFileSync('src/index.css', 'utf8');
postcss().process(css, { from: 'src/index.css' }).then(result => {
  console.log("Success POSTCSS");
}).catch(err => {
  console.error("Syntax Error at line", err.line, "column", err.column);
  console.error(err.reason);
});
} catch(e) { console.error(e) }
