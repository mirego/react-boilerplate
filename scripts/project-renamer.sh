#!/usr/bin/env bash

if [[ -z "$1" ]] ; then
  echo 'You must specify your project name in kebab-case as first argument.'
  exit 0
fi

# Used as the root module of your app
projectNameBefore="react-boilerplate"
projectNameAfter=${1}

# Source code files
fileTypes=(.ts .tsx .js .jsx)
for type in ${fileTypes[@]};do find ./src -name "*${type}" -exec sed -i '' -e "s/$projectNameBefore/$projectNameAfter/g" '{}' '+' 2>&1 >/dev/null; done

# Config files
configFiles=(package.json package-lock.json tsconfig.json)
for file in ${configFiles[@]};do find ./ -maxdepth 1 -name "${file}" -exec sed -i '' -e "s/$projectNameBefore/$projectNameAfter/g" '{}' '+' 2>&1 >/dev/null; done
