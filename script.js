const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

let files = [];

dropZone.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", e => {
  addFiles(e.target.files);
});

dropZone.addEventListener("dragover", e => {
  e.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", e => {
  e.preventDefault();
  dropZone.classList.remove("dragover");
  addFiles(e.dataTransfer.files);
});

function addFiles(selectedFiles) {
  for (const file of selectedFiles) {
    files.push(file);
  }
  renderList();
}

function renderList() {
  fileList.innerHTML = "";

  files.forEach((file, index) => {
    const div = document.createElement("div");
    div.className = "file-item";

    div.innerHTML = `
      <span>${file.name}</span>
      <button class="remove-btn" onclick="removeFile(${index})">x</button>
    `;

    fileList.appendChild(div);
  });
}

function removeFile(index) {
  files.splice(index, 1);
  renderList();
}

function uploadFiles() {
  if (files.length === 0) {
    alert("No files selected");
    return;
  }

  // Demo upload simulation
  alert(`${files.length} file(s) uploaded successfully!`);

  files = [];
  renderList();
}
