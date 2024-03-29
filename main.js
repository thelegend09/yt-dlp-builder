window.onload = () => {
  const getCommandBtn = document.querySelector("#generate-command");
  getCommandBtn.addEventListener("click", generateCommand);

  // Select the anchor element with the class 'click-to-paste'
  const anchorElement = document.querySelector("a.click-to-paste");
  anchorElement.addEventListener("click", copyHandler);
};

function generateCommand() {
  // Get form elements
  const form = document.getElementById("commandForm");
  const elements = form.elements;

  // Initialize the command with yt-dlp and default parameters
  let command = 'yt-dlp -o "~/Downloads/%(title)s.%(ext)s" --no-mtime';

  // Loop through form elements and append selected options to the command
  for (let i = 0; i < elements.length; i++) {
    const item = elements[i];

    // Do not add the URL (it will be added at the end)
    // Do not add the value of the checkbox that serves
    // to toggle the visibility of the advanced settings
    if (isURL(item.value) || item.id === "show-advanced") {
      continue;
    }

    // Check if the element has a value and is not a text input or textarea
    if (item.value && item.type !== "text" && item.type !== "textarea") {
      // Append option to command string
      command += " " + item.value;
    }

    // Special handling for text inputs and textareas: check if not empty and append
    if (
      (item.type === "text" || item.type === "textarea") &&
      item.value !== ""
    ) {
      // Append option and its value to command string
      command += " " + item.name + " " + item.value;
    }
  }

  // Display the generated command
  let downloadUrl = document.getElementById("url").value;

  // the ampersand needs to be
  downloadUrl = downloadUrl.replace("&", '"&"');

  command += " " + downloadUrl;
  document.getElementById("generatedCommand").value = command;

  toClipboard(command);
}

const copyHandler = function (event) {
  event.preventDefault();

  // Read the text from the clipboard
  navigator.clipboard.readText().then(function (clipboardText) {
    // Check if the clipboard text is a URL
    if (isURL(clipboardText)) {
      // If it is, set the text content of the element with ID 'url' to the clipboard text
      document.getElementById("url").value = clipboardText;
      // console.log("Link has been copied");
    } else {
      // If it's not, show an alert
      alert("The clipboard doesn't contain a valid URL");
    }
  });
};

// ======================================================================
// Helper utilities

function isURL(str) {
  const pattern = new RegExp(/^(https:|http:|www\.)\S*/gm);
  return !!pattern.test(str);
}

function toClipboard(str) {
  const copyConfirmation = document.querySelector(".side-by-side span");

  const handleResult = (message) => {
    copyConfirmation.textContent = message;
    copyConfirmation.style.opacity = 1;
    setTimeout(() => (copyConfirmation.style.opacity = 0), 1500);
  };

  navigator.clipboard
    .writeText(str)
    .then(() => handleResult("Copied to clipboard!"))
    .catch((err) => {
      console.error("Could not copy text: ", err);
      handleResult("Could not copy text.");
    });
}

// ======================================================================
// Popup initialization
//
// Include Tippy.js from a CDN or your local files

document.addEventListener("DOMContentLoaded", () => {
  initializePopups();
});

function initializePopups() {
  // Find all <popup> elements within <label> elements
  const popups = document.querySelectorAll("label > popup");

  // Initialize Tippy for each popup element
  popups.forEach((popup) => {
    const content = popup.innerHTML; // The content of the popup
    const triggerElement = document.createElement("i"); // Create an <i> element for the icon
    triggerElement.className = "ri-question-line popup"; // Add RemixIcon class to the <i> element

    // Replace the <popup> element with the icon
    popup.parentNode.replaceChild(triggerElement, popup);

    // Initialize Tippy.js on the icon with the popup content
    tippy(triggerElement, {
      content: content,
      theme: "light",
      allowHTML: true,
      // Other options like 'placement', 'theme', etc.
    });
  });
}
