# Project Name: RunSmart

## Description  
This landing page showcases my web development skills, featuring responsive design, CSS preprocessing with SASS, and the use of JavaScript libraries. The site is accessible in multiple languages, specifically English, Armenian, Ukrainian, and Russian, demonstrating a commitment to internationalization and making the content available to a diverse audience.

## Access
The landing page is currently live and can be accessed at the following URL: https://dobbyssockk.github.io/runsmart/.

### Important Notes
Please note that due to the limitations of GitHub Pages, certain features, such as the server-side part of the mailing service, will not work on GitHub Pages. This is because GitHub Pages supports only static hosting and cannot execute server-side code, such as Node.js, which is used in my project.

## Local Installation
To fully utilize all the features of the project, including the mailing service, you will need to install the project locally. Here are the instructions to do so:

1. Clone the repository using `git clone https://github.com/dobbyssockk/runsmart.git`.
2. Navigate to the project directory with the command `cd runsmart`.
3. Install all dependencies by running `npm install`.
4. To start the server, use the command `npm run start-server`.

## Project Structure  
- `dist/`: Contains the distribution files that are ready for deployment to the production environment.
- `src/`: Source code of the project.
  - `css/`: Contains compiled CSS files including third-party libraries like Bootstrap and Slick, and custom styles.
  - `fonts/`: Holds font files used across the project.
  - `icons/`: SVG icons organized in subfolders like `advantages`, `footer`, `main`, etc.
  - `img/`: Image assets used throughout the project, organized into folders by category (e.g., `carousel`, `catalog`, `consultation`, etc.).
  - `js/`: JavaScript files including libraries like jQuery and custom scripts.
  - `mailer/`: Contains scripts for handling email sending functionality.
  - `sass/`: SASS files that compile down to CSS, organized into `base` and `blocks` for modularity.
  - `index.html`: The main entry point HTML file for the landing page.
- `translations/`: JSON files for internationalization, providing support for multiple languages including English (`en.json`), Armenian (`am.json`), Ukrainian (`ua.json`), and Russian (`ru.json`).
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `gulpfile.js`: Gulp tasks for automating the development and build process.
- `package.json` & `package-lock.json`: List the project dependencies and lock down their versions, respectively.
- `README.md`: A markdown file with information about the project.

## Technologies  
- HTML5
- SASS/CSS3
- JavaScript
- Bootstrap
- jQuery
- Gulp.js
