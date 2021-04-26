## Snowpack-Tailwind-boiler

This is a boiler project Snowpack with [Tailwind](https://tailwindcss.com/) for styling and the option to use autopublish to Github pages using actions. Based on [this repo](https://github.com/jonalvarezz/snowpack-template-tailwind), and my [parcel build](https://github.com/Bcdo/parcel-tailwind-boiler).

## Usage

Clone the repo, and run
‘‘‘sh
npm install
‘‘‘

To enable prettier on commit using husky
‘‘‘sh
npm run install:husky
‘‘‘

There is a few scripts in package.json, but most of them are run by the [npm-run-all plugin](https://www.npmjs.com/package/p-all). Only use the following

To run the dev server
‘‘‘sh
npm run start
‘‘‘

To build the files
‘‘‘sh
npm run build
‘‘‘

If you want to opt out on autopublish to github pages, remove the .github directory.

To set up the autopublish

1. Update the value of `homepage` in `package.json`. It should look like `https://<your-username>.github.io/<your-repo-name>` (no trailing slash).
2. Push your changes into a new GitHub repository.
3. You should see an Action running on `https://github.com/<your-username>/<repo-name>/actions`
4. Make sure to [enable GitHub pages for your repo](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) and select the `gh-pages` branch
5. Give GH Pages some minutes, your site should be live on `https://<your-username>.github.io/<your-repo-name>`

## Extra

I have written comments and made [TODOS](https://github.com/Gruntfuggly/todo-tree) for best practices. This is of course optional to follow.
