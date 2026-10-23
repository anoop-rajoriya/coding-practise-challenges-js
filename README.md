# Simple DOM Challenges With Vanilla JS - [Live demo](https://anoop-rajoriya.github.io/js-dom-practise-challenges/)

A collection of hands-on front-end mini-projects built with semantic HTML, CSS, and vanilla JavaScript to practice core DOM manipulation, event handling, and interactive UI state management.

## What I Built

Below is the list of completed DOM challenges along with their source directories and live previews:

|  #  | Challenge                   | Repo Path                                                | Live Demo                                                                                         |
| :-: | :-------------------------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| 01  | **Color Palette Generator** | [`./color-palette-generator`](./color-palette-generator) | [Live Demo](https://anoop-rajoriya.github.io/js-dom-practise-challenges/color-palette-generator/) |
| 02  | **Dark Mode Toggle**        | [`./dark-mode`](./dark-mode)                             | [Live Demo](https://anoop-rajoriya.github.io/js-dom-practise-challenges/dark-mode/)               |
| 03  | **Dynamic List**            | [`./dynamic-list`](./dynamic-list)                       | [Live Demo](https://anoop-rajoriya.github.io/js-dom-practise-challenges/dynamic-list/)            |
| 04  | **FAQ Accordion**           | [`./faq-accordion`](./faq-accordion)                     | [Live Demo](https://anoop-rajoriya.github.io/js-dom-practise-challenges/faq-accordion/)           |
| 05  | **Image Gallery**           | [`./image-galary`](./image-galary)                       | [Live Demo](https://anoop-rajoriya.github.io/js-dom-practise-challenges/image-galary/)            |
| 06  | **Modal Popup**             | [`./model-popup`](./model-popup)                         | [Live Demo](https://anoop-rajoriya.github.io/js-dom-practise-challenges/model-popup/)             |
| 07  | **Tabs Component**          | [`./tabs-component`](./tabs-component)                   | [Live Demo](https://anoop-rajoriya.github.io/js-dom-practise-challenges/tabs-component/)          |

## What You Can Build

You can use this repository as a self-paced coding challenge to sharpen your vanilla JavaScript skills. Try building any of the projects below from scratch before inspecting the source code:

- **01. Color Palette Generator**: Build an interface with a "Generate" button that creates random HEX or RGB color values, applies them as background colors to swatch cards, and lets users click a swatch to copy its color code to their clipboard.
- **02. Dark Mode Toggle**: Implement a theme-switcher button that toggles the color scheme of the entire page between light and dark modes by adding/removing a CSS class or updating CSS custom properties via JavaScript.
- **03. Dynamic List**: Create an input field and submit button that allow users to add new items to a list dynamically, alongside action buttons on each item to edit or delete it from the DOM.
- **04. FAQ Accordion**: Build a list of collapsible question-and-answer items where clicking a question expands its answer panel, rotates the indicator icon, and optionally closes any previously opened panel.
- **05. Image Gallery**: Create a thumbnail grid where clicking any image updates a larger main preview display or opens a full-view lightbox with next/previous navigation controls.
- **06. Modal Popup**: Implement a trigger button that reveals a centered overlay dialog box and dims the background, complete with a close button and functionality to dismiss the modal when clicking outside on the backdrop.
- **07. Tabs Component**: Build a multi-tab navigation bar where clicking a tab header highlights the active button and dynamically switches the visible content panel below it without reloading the page.

## Learning Outcomes

By building these challenges from scratch, you will learn and practice:

- **DOM Selection & Traversal**: Selecting single and multiple elements using `querySelector` and `querySelectorAll`, and navigating between parent, child, and sibling nodes (`parentElement`, `children`, `closest`).
- **Dynamic Element Creation & Removal**: Creating new HTML elements in memory (`document.createElement`), populating their content, appending them to the page (`append`, `appendChild`), and removing nodes (`remove()`) in **Dynamic List** and **Color Palette Generator**.
- **Event Handling & Delegation**: Attaching `click` and `input` listeners, and using event bubbling on parent containers to handle clicks on dynamically generated items efficiently.
- **UI State & Class Manipulation**: Controlling visual states—such as open modals, active tabs, expanded accordions, and page-wide dark themes—using `classList.add()`, `classList.remove()`, and `classList.toggle()`.
- **Working with Data Attributes & Inline Styles**: Linking tab buttons to their corresponding content panels using `dataset` (`data-*` attributes) and dynamically updating element styles or attributes (`src`, `alt`, `style.backgroundColor`).
- **Randomization & Browser APIs**: Generating random hexadecimal strings in JavaScript and using `navigator.clipboard.writeText()` to copy text directly to the user's clipboard.

## How To Run

- Clone the repository or donwload it.
- Open the index file within any web browser.
