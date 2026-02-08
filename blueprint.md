# Project Blueprint: Lotto Number Generator

## Overview

This project is a simple web application that generates random lottery numbers. It provides a user-friendly interface to generate a set of 6 unique numbers between 1 and 45.

## Implemented Features (v1)

*   **HTML Structure:** A clean `index.html` with a title, a button to trigger the generation, and a container to display the numbers.
*   **CSS Styling:** Basic styling in `style.css` for a centered layout, button appearance, and number display. The numbers are displayed in circular elements.
*   **JavaScript Logic:** `main.js` contains the logic to:
    *   Listen for a click on the "Generate Numbers" button.
    *   Generate a set of 6 unique random numbers from 1 to 45.
    *   Display these numbers on the page.

## Current Request: Enhance to a "Lottery Drawing" Page

The user wants to transform the page from a simple number generator to a more engaging "lottery drawing" experience.

### Plan

1.  **Create `blueprint.md`**: Document the project's current state and the plan for the new features. (This document).
2.  **Update HTML (`index.html`)**:
    *   Change the main heading to "Lotto Number Drawing".
    *   Change the button text to "Start Drawing".
3.  **Enhance CSS (`style.css`)**:
    *   Improve the overall visual design to be more engaging and modern.
    *   Add styles for animation effects when numbers are drawn.
    *   Introduce CSS variables for easier theming.
    *   Use a more appealing color palette and typography.
    *   Add a subtle background texture and shadows to create depth.
4.  **Update JavaScript (`main.js`)**:
    *   Modify the logic to simulate a drawing.
    *   Numbers will be generated and displayed one by one with a short delay between each number.
    *   An animation will be applied to each number as it appears.
    *   Disable the button during the drawing animation to prevent multiple concurrent drawings.
