console.log("Script works!");
uppercase.addEventListener("click", () => {
  console.log("Transforming to Uppercase");
  inpText.value = inpText.value.toUpperCase();
});

lowercase.addEventListener("click", () => {
  console.log("Transforming to Lowercase");
  inpText.value = inpText.value.toLowerCase();
});

inpText.addEventListener("input", () => {
  console.log("Removing Extra Spaces...");
  inpText.innerText = inpText.value.replace(/\s+/g, " ").trim();
});

inpText.addEventListener("input", () => {
  console.log("Removing new lines....");
  inpText.innerText = inpText.value.replace(/\n+/g, "\n").trim();
});

inpText.addEventListener("input", () => {
  console.log("changed");
  charCount.innerText = inpText.value.length;
  charCount.innerText = inpText.value.trim().split(" ").length;
});
