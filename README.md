Artbinder
=========

Coding Challenge for Artbinder.com

# Coding the PSD Comp
## My Process
- I like starting projects with two main folders: `app` and `src`.
- `src` includes all my source material; `app` is for processed files ready for production.
- I use Gulp.js to automate my tasks.
- Git is my version control of choice.
- I like Eric Meyer's `reset.css` as my stylesheet reset. It's lightweight and less opinionated than `normalize.css`.
- I experimented with Foundation 5 as the CSS framework for this project.
- But Foundation proved to be big and clunky.
- I also experimented with Susy Grid, a lightweight, highly customizable grid framework.
- But Susy's installation and configuration proved too complex for the time constraint: I didn't want to lose a hour debugging my gulpfile.
- I opted instead to create a custom `.container` element to contain the HTML.
- It's a bootleg solution and scales horribly. But it got the job done.
- I first coded for global CSS elements like `body {}`, `.container {}` and `.clearfix {}`.
- I then styled the header section to include a CSS cover background at 100% viewport height.
- The main section begins just below the header and is separated into 3 feature sections.
- Each section uses identical styling for modularity.
- Each panel inside the feature section is used as links to galleries, artists and exhibitions.
- Each panel uses identical styling for modularity.
- The only difference is panel size, which is currently hard-coded into the CSS.

## If I Had More Time
- The site content is currently hard-coded into the HTML.
- This content should be loaded dynamically for easy updating.
- Backbone.js may be good candidate for this type of dynamic data if jQuery is already a dependency in the project.
- Angular.js is an excellent alternative to Backbone.js if jQuery is not needed.
- Dynamic control of this content would allow for dynamic control of styling and layout, allowing 2-, 3-, and 4-panel rows as desired.
- I would also swap out my ghetto `.container` with a more robust grid system.
- Susy Grid is still a good candidate for this role, but even something like 960.gs would work.
- The final grid system and dynamic content controller should be based on the rest of the project and the rest of the development stack.

# Website Review
## Performance Improvements
- Move `jquery.common.js` into a `<script>` tag at the bottom of the HTML document.
- Minify and concatenate the JavaScript.
- Minify and concatenate the CSS.
- Serve one file containing all the scripts.
- Serve one file containing all the styles.
- Serve 3rd-party libraries from an external CDN.
- Prefetch DNS records using `<link rel="dns-prefetch" href="#">`.
- Serve scaled images using `<srcset>` or media queries.

## Project Structure
- Angular best practice recommends:
-- Separating controllers, directives and services into separate files. One controller, directive or service per file.
-- Using the "controller as" syntax in the HTML markup.

## Responsive Design
- Consider the user experience on a small screen:
-- What is the user's primary goal when visiting this site on a mobile device?
-- How easy is it to accomplish this goal?
-- What info do we need to display immediately to the user?
-- What info can we hide inside a menu or on a second page?

## Overall Concept
- The design is crisp and places focus on the artwork and artists.
- Navigation is easy to understand and use, even in "colorblind mode".
