Artbinder
=========

Coding Challenge for Artbinder.com

# Coding the PSD Comp
## My Process
- I like starting projects with two main folders: `app` and `src`.
- `src` includes all my source material; `app` is for processed files ready for production.
- I use Gulp.js to automate all my tasks.
- Git is my version control of choice.
- I like Eric Meyer's `reset.css` as my stylesheet reset.
- My original idea was to use Foundation 5 as the CSS framework.
- But Foundation is big and clunky, and I opted instead to create a custom `.container` element to contain the HTML.
- I first coded for global elements like `body {}`, `.container {}` and `.clearfix {}`.
- I then styled the header section to include a CSS cover background at 100% viewport height.
- The main section begins just below the header and is separated into 3 main feature sections.
- Each section uses identical styling for modularity.
- Each panel inside the feature section is used to link to galleries, artists and exhibitions.
- Each panel uses identical styling for modularity.
- The only difference in panel size, which is currently hard-coded into the CSS.

## If I Had More Time
- The site content is currently hard-coded into the HTML.
- This content should be loaded dynamically for easy updating.
- Backbone.js may be good candidate for this type of dynamic data if jQuery is already a dependency.
- Angular.js is an excellent alternative to Backbone.js if jQuery is not needed.
- Dynamic control of this content would allow for dynamic control of styling and layout.
- I would also swap out my ghetto `.container` with a more robust grid system like Susy Grid.

# Website Review
## Performance Improvements
- Move `jquery.common.js` into a `<script>` tag at the bottom of the html document.
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
