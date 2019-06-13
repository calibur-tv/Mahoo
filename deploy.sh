#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 切换分支
# git checkout master
# git pull origin dev

# 构建
npm run build
npm run upload

git add -A
git commit -m 'deploy'
git push origin master

# 切回分支
# git checkout dev
