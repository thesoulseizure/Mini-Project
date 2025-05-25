# Calculator Mini-Project

This repository contains a web-based calculator project built using HTML, CSS, and JavaScript, focusing on DOM manipulation, keyboard events, and responsive design. The calculator handles basic arithmetic operations and includes features specified in the task requirements.

## Project Structure

- **index.html**: The main HTML file that includes the calculator structure (created via DOM) and links to the JavaScript and CSS files.
- **script.js**: Contains the JavaScript code for DOM manipulation, keyboard event handling, calculator operations, and optional memory functionalities.
- **style.css**: The CSS file that styles the calculator, ensuring responsiveness across all media screens.

## Calculator Features

The calculator includes the following features:
- **DOM-Based Structure**: All HTML elements are created dynamically using the Document Object Model (DOM).
- **Keyboard Events**:
  - Accepts input for numbers via keyboard events.
  - Shows an alert ("Only numbers are allowed") when non-number keys are pressed.
- **Arithmetic Operations**:
  - Supports addition, subtraction, division, multiplication, and modulus.
  - Handles infix expressions (e.g., `5 + 3 * 2`).
- **Responsive Design**:
  - Styled using CSS and Bootstrap for responsiveness across different screen sizes.
- **Optional Memory Features** (if implemented):
  - `M+`, `M-`, and `MC` functionalities using `localStorage` for memory operations.
- **Test Suite**:
  - Includes a test suite from `https://app.zenclass.in/sheets/v1/js/zen/suite/bundle.js` to verify functionality.

## How to View

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/thesoulseizure/Mini-Project.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd Mini-Project
   ```
3. **Open the HTML File**:
   - Open `index.html` in a web browser to view the calculator.
   - Ensure `script.js` and `style.css` are in the same directory for functionality and styling.

## Deployment

- **Netlify Deployment**: The project is deployed on Netlify (link to be added after deployment).
- **GitHub Pages**: The project is also deployed via GitHub Pages (available under the "Deployments" section).

## How to Test

1. **Add the Test Suite**:
   - Ensure the following script tag is included in the `<body>` of `index.html`:
     ```html
     <script src="https://app.zenclass.in/sheets/v1/js/zen/suite/bundle.js"></script>
     ```
2. **Run the Tests**:
   - Open `index.html` in a browser.
   - Select the project task "DOM Calculator" from the dropdown (if available).
   - Click the "Run Test" button to execute the test cases.
   - Review the test case results and fix any issues based on the feedback.

## Requirements

- A web browser to view the calculator.
- Internet connection to load the test suite and Bootstrap (if used).
- No additional setup is required since this is a static web project.

## Resources Used

- **HTML, CSS, and Bootstrap**: For structure and responsive styling.
- **JavaScript and DOM**: For dynamic element creation and event handling.
- **References**:
  - [MDN Web Docs - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
  - [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [W3C CSS Overview](https://www.w3.org/Style/CSS/Overview.en.html)
