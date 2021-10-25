## Conventions


## Process

-   Do not fix things unrelated to your task, instead open up a bug ticket for prioritization.

## HTML

-   Whenever possible break raw HTML blocks into reusable React Components.

## CSS

-   Do not put any positioning CSS (e.g. `top`, `left`) inside a component's outermost styles.
-   Only use CSS properties that are absolutely necessary. Do not add superfluous styles.
-   Do not use CSS shorthand properties as it makes it harder to override.
-   Try not to use `top` and `left`, instead use margins.
-   Try to generally give elements only top and left margins for positioning purposes.
-   Make sure to get the color hex values from the design (do not guess / eyeball the color).
-   Always use the semantic colors from `styles/colors.scss`, never the color variables directly.
-   When defining a new font, include the responsiveness in the mixin.
-   Try not to set fixed heights, allow content to define height.
-   Only import `global.scss` into your `styles.module.scss`.
-   Try not to nest CSS selectors unless they are pseudo-selectors (e.g. `:hover`).
-   Always assign a class name to the root element of a component that reflects the component name.
-   Consumer of component controls positioning, spacing, and z-index.
-   Write text in plain English casing and use CSS to style it (e.g. uppercase).
-   Introduce CSS properties in the right breakpoints when they are needed, not sooner.
-   Anything layout related should use CSS grids.

## Javascript

-   Always use the optional chaining operator.
-   Always reference files via their absolute path (e.g. `components/Logo`) rather than their relative path.
-   Do not use switch statements.
-   Do not spread props into a component, list them out.
-   Put any configurable variables (e.g. paths, URLs) that are not coming from CMS into .env.sample
-   Each component must have an associated storybook file (`stories.js`).
-   Pages and layouts do NOT need an associated storybook file.
-   Move all service calls to a file called `data.js` inside the page folder
-   Move all constants to a file called `constants.js` inside the component folder
-   Move all component logic to a file called `index.js` inside the component folder

## Assets

-   Use SVGs for vector graphics.
-   Use JPEGs for photos.
-   Use PNGs for icons needing opacity.
-   If component has an image call it `image` followed by its respective extension.
-   Multiple image files should live in an `images/` sub-folder of component.
- Do not inline SVGs.


# PR Etiquette

-   Use git labels correctly (see labels in github for more details)
-   Always review and merge PRs in chronological order when possible (FIFO)
-   PRs should be small and single purpose
-   There should be no more than 10 files changed per PR

## PR Size

A problem must be decomposed into a composition of small solutions.  Each solution should do one thing, and do that thing correctly, accurately, and predictably.  Each such small solution should come with its own PR.

A large PR is difficult to wrap one's mind around, therefore the code reviews will be less effective, and will require more effort from the reviewer.  The longer a reviewer is busy reviewing code, the less time the reviewer can work on solving other problems.  We do not want to hold up engineers with big PRs.

An engineer should be able to quickly and accurately review a PR within a few minutes.

## PR Sequence

To solve a problem we want to break it down from the outside inward.

### Example

Let's take a page with a form on it.

* PR #1: Page with an empty form container
* PR #2: Build out the UI for the form
* PR #3: Form validation logic
* PR #4: Connect form to API

This sequence makes every solution isolated and therefore easy to review, troubleshoot, and cherry-pick for whatever reason (roll-back, move to another branch, etc)
