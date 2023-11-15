import docgen from "react-docgen-typescript";
import path from "node:path";
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const result = docgen.parse(path.resolve(__dirname, "./src/stories/ButtonStyled.tsx"));

console.log(`Generated props: ${Object.keys(result[0].props).join(", ")}`);
