Remove-Item '.\build' -Recurse
Copy-Item -Path '.\data' -Destination '.\build\OceanBlue' -Recurse
sass --no-charset './source/main.scss' './build/OceanBlue.qss'