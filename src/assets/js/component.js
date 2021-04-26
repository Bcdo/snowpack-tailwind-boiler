export function checkComponent() {
  document.getElementById("checkFail").classList.add("hidden");
  document.getElementById("passMessage").textContent =
    "The component check passed! The component.js is served through index.js. Ready for custom js.";
  document.getElementById("checkPass").classList.remove("hidden");
}
