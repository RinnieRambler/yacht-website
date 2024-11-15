# Jekyll + Tailwind Starter

## Dependencies

This boilerplate uses the following dependencies & plugins:

- [Ruby](https://www.ruby-lang.org/en/)
- [Node.js](https://nodejs.org/en/)
- [Jekyll](https://jekyllrb.com)
- [TailwindCSS](https://tailwindcss.com)

Detailed dependencies are listed in the [Gemfile](./Gemfile) and [package.json](./package.json)

## Local project development

### Setup (first time only)

1. Install [Node.js](https://nodejs.org/en/) by downloading and running the installer from the website.
1. Install Jekyll, Ruby, and Bundler by following the Jekyll installation instructions for [MacOS](https://jekyllrb.com/docs/installation/macos/) or [Windows](https://jekyllrb.com/docs/installation/windows/).
1. If this is the **first time** you're running Jekyll for **this project**, in the terminal, run

   ```
   $ bundle install
   ```
1. Install packages by running

   ```
   $ npm install
   ```

### Run Jekyll and Tailwind

Run **Jekyll & Tailwind** concurrently:

```
$ npm run dev
```

### Troubleshooting

First, look for error messages related to your code in the console.

Do a hard refresh of your browser (Cmd + Shift + R on Mac, Ctrl + F5 on Windows) to ensure you're seeing the latest changes.

Next, quit any running processes by killing your terminals and then re-run the command. Try restarting VS Code and re-run the command. Try restarting your computer and re-run the command.

Finally, try clearing your Jekyll cache and rebuilding packages. You may also want to **delete your `node_modules` folder** before running these commands.

```
$ jekyll clean
$ bundle install
$ npm install
```
