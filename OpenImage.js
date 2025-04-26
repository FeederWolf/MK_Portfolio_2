document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (e) {
    const thumbnailLink = e.target.closest(".thumbnail-link");

    if (thumbnailLink && thumbnailLink.querySelector("img")) {
      const img = thumbnailLink.querySelector("img");

      // Itt ellenőrizzük: ha a thumbnail-link vagy a kép tartalmazza a NO-FULLSCREEN class-t
      if (
        img.classList.contains("NO-FULLSCREEN") ||
        thumbnailLink.classList.contains("NO-FULLSCREEN")
      ) {
        return; // Ha van rajtuk NO-FULLSCREEN class, kilépünk
      }

      e.preventDefault();

      const imgSrc = img.src;

      const replaceDiv = document.getElementById("ReplaceImage");
      replaceDiv.innerHTML = `<img src="${imgSrc}" alt="Nagyított kép" class="img-fluid" />`;

      document.getElementById("OpenImage").style.display = "block";
    }
  });
});
