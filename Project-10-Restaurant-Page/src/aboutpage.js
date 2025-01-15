export function loadAboutpage() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="wrapper">
      <div class="text-container">
        <h1>About page</h1>
        <p>This is the about page</p>
      </div>
      <div class="image-container">
        <img src="" alt="Delicious burger" />
      </div>
    </div>
  `;
}
