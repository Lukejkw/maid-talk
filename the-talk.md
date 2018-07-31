# Squeeky Clean Scripts with Maid

 - Long one liner scripts in our npm files are difficult to read and understand
 - Documentation often done as an after-thought and become stale

## Literate Programming

 - What if we could have the best of both?
 - Documentation that IS our build scripts
 - Scripts that are documentation

## Markdown

 - Now the defacto documentation language
 - Already have support for code blocks - we just need to be able to run them!

## Introduction to Maid

 - Maid is a simple command line tool for runnable markdown files
 - You write your build scripts inside of your documentation using the language to describe how it should run

## 2 Simple Rules

1. Your script name is an h2
2. Your code must always be inside of triple backticks

## Example: Script for front-end tests

- Define test script
- Run the script

## Example: Do some linting too

 - Write linting script
 - Run it before test script

## Example: Write startup scripts

 - Write start scripts for client and server
 - Run them in parrellel

## Don't like bash?
 - JavaScript
    - Require away!
 - Python
    - If you are that way inclined

## Final notes
 - Use WSFL or bash on windows
 - You can use your readme.md file instead of a maidfile.md

