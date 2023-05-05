const fs = require('fs');
const sass = require('sass');
const path = require('path');

let targetPath = "";
if (process.platform === "win32") {
    targetPath = path.join(process.env.APPDATA, "obs-studio", "themes");
} else if (process.platform === "darwin") {
    targetPath = path.join(process.env.HOME, "Library", "Application Support", "obs-studio", "themes");
} else {
    targetPath = path.join(process.env.HOME, ".config", "obs-studio", "themes");
}

const result = sass.compile(path.join(process.cwd(), "source", "main.scss"));
if (!fs.existsSync(targetPath))
    fs.mkdirSync(path.join(targetPath), { recursive: true });
fs.writeFileSync(path.join(targetPath, "OceanBlue.qss"), result.css, { flag: "w+" });
fs.cpSync(path.join(process.cwd(), "data"), path.join(targetPath, "OceanBlue"), { force: true, recursive: true, preserveTimestamps: true })
