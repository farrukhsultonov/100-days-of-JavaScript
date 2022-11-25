const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
    // getting selected option text
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerHTML = `Save As ${selectedOption.split(" ")[0]} File`;
})

saveBtn.addEventListener("click", () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Blob
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    // URL.createObjectURL creates a url that represent passed object
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a"); // creating <a> tag
    link.download = fileNameInput.value; // passing filename as download value of link
    link.href=fileUrl; // passing fileURL as href value of link
    link.click(); // clicking link so the file downloads
})
