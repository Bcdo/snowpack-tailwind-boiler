## Snowpack-Tailwind-boiler

This is a boiler project Snowpack with [Tailwind](https://tailwindcss.com/) for styling and the option to use autopublish to Github pages using actions. Based on [this repo](https://github.com/jonalvarezz/snowpack-template-tailwind), and my [parcel build](https://github.com/Bcdo/parcel-tailwind-boiler) with some best practice implementation from the [H5BP organisation](https://html5boilerplate.com/).

## Usage

Press the `Use This Template` button, or Clone the repo and run

```sh
npm install
```

To enable prettier on commit using husky

```sh
npm run install:husky
```

There is a few scripts in package.json, but most of them are run by the [npm-run-all plugin](https://www.npmjs.com/package/p-all). Only use the following

To run the dev server

```sh
npm run start
```

To build the files

```sh
npm run build
```

If you want to opt out on autopublish to github pages, remove the .github directory.

To set up the autopublish

1. Update the value of `homepage` in `package.json`. It should look like `https://<your-username>.github.io/<your-repo-name>` (no trailing slash).
2. Push your changes into a new GitHub repository.
3. You should see an Action running on `https://github.com/<your-username>/<repo-name>/actions`
4. Make sure to [enable GitHub pages for your repo](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) and select the `gh-pages` branch
5. Give GH Pages some minutes, your site should be live on `https://<your-username>.github.io/<your-repo-name>`

## Extra info

Tailwind is in JIT mode, and the css will be purged. It is fine if the index.css is empty, it will be populated when running or building, as well as whenever you add a new Tailwind class.

I have written comments and made [TODOS](https://github.com/Gruntfuggly/todo-tree) for best practices. This is of course optional to follow.

You can find some great server configs from the [H5BP organization](https://github.com/h5bp/server-configs) if wanted.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
