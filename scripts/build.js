const fs = require('fs');
const sass = require('sass');
const path = require('path');

const targetPath = path.join(process.cwd(), "build");
const result = sass.compile(path.join(process.cwd(), "source", "main.scss"));

if (!fs.existsSync(targetPath))
    fs.mkdirSync(path.join(targetPath), { recursive: true });
fs.writeFileSync(path.join(targetPath, "OceanBlue.qss"), result.css, { flag: "w+" });
fs.cpSync(path.join(process.cwd(), "data"), path.join(targetPath, "OceanBlue"), { force: true, recursive: true, preserveTimestamps: true })
