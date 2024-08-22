function displayLibraries(libraries) {
  const container = document.getElementById("libraryList");

  libraries.forEach((lib) => {
    const libElement = document.createElement("div");
    libElement.className = "library-item";

    libElement.innerHTML = `
            <h2>${lib.libraryName} - v${lib.version}</h2>
            <div class="details">
                <p><strong>Description:</strong> ${lib._description}</p>
                <p><strong>License:</strong> ${lib._license}</p>
                <p><strong>Author:</strong> ${
                  lib.author ? lib.author.name : "N/A"
                }</p>
                <p><strong>Homepage:</strong> <a href="${
                  lib.homepage
                }" target="_blank">${lib.homepage}</a></p>
                <p><strong>Repository:</strong> <a href="${
                  lib.repository.url
                }" target="_blank">${lib.repository.url}</a></p>
            </div>
        `;

    container.appendChild(libElement);
  });
}

function fetchData() {
  fetch("licenses.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log({ data });
      return displayLibraries(data);
    })
    .catch((error) =>
      console.error(
        "There was a problem with fetching the library data:",
        error
      )
    );
}

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
