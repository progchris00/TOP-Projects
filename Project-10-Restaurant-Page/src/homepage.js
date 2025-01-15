export function loadHomepage() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="wrapper">
      <div class="text-container">
        <h1>Home page</h1>
        <p>This is the home page</p>
      </div>
      <div class="image-container">
        <img src="" alt="Delicious burger" />
      </div>
    </div>
  `;
}
