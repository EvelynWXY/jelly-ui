rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:EvelynWXY/jelly-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://evelynwxy.github.io/jelly-ui-website/#/