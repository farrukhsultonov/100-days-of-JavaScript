const dropArea = document.querySelector(".drag-area");

dropArea.addEventListener("dragover", () => {
    console.log("File is in dragArea");
})