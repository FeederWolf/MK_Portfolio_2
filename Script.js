//Moving nav elements (Horizontal)
const boxesH = document.querySelectorAll(".movingBoxH");

boxesH.forEach((box) => {
  let positionY = 0;
  let directionY = 1;
  const speed = parseFloat(box.dataset.speed) || 1;

  function animateH() {
    const maxHeight = window.innerHeight - box.offsetHeight;
    positionY += speed * directionY;

    if (positionY >= maxHeight || positionY <= 0) {
      directionY *= -1;
    }

    box.style.top = positionY + "px";
    requestAnimationFrame(animateH);
  }

  animateH(); // ← ezt kellett meghívni!
});

//Moving nav elements (Vertical)
const boxesV = document.querySelectorAll(".movingBoxV");

boxesV.forEach((box) => {
  let positionX = 0;
  let directionX = 1;
  const speed = parseFloat(box.dataset.speed) || 1;

  function animateV() {
    const maxWidth = window.innerWidth - box.offsetWidth;
    positionX += speed * directionX;

    if (positionX >= maxWidth || positionX <= 0) {
      directionX *= -1;
    }

    box.style.left = positionX + "px"; // ← Helyes irány: left
    requestAnimationFrame(animateV);
  }

  animateV(); // ← ezt kellett meghívni!
});

// Custom Cursor
const site_wide_cursor = document.querySelector(".custom-cursor.site-wide");

let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener("pointerenter", () => {
  site_wide_cursor.style.display = "block";
});

document.addEventListener("pointerleave", () => {
  site_wide_cursor.style.display = "none";
});

document.addEventListener("pointermove", (evt) => {
  lastMouseX = evt.clientX;
  lastMouseY = evt.clientY;
  updateCursor();
});

document.addEventListener("scroll", () => {
  updateCursor();
});

document.addEventListener("mousedown", () =>
  site_wide_cursor.classList.add("active")
);
document.addEventListener("mouseup", () =>
  site_wide_cursor.classList.remove("active")
);

function updateCursor() {
  const w = site_wide_cursor.clientWidth;
  const h = site_wide_cursor.clientHeight;

  site_wide_cursor.style.transform = `translate(${lastMouseX - w / 2}px, ${
    lastMouseY - h / 2 + window.scrollY
  }px)`;
}

function updateFaceOpacity() {
  const faces = document.querySelectorAll(".face");
  const screenWidth = window.innerWidth;

  let opacity = 1; // alapból teljesen látható

  if (screenWidth <= 425) {
    opacity = 0; // ha nagyon kicsi, eltűnik
  } else if (screenWidth < 1920) {
    // Átlósan csökkentjük: lineáris interpoláció
    opacity = (screenWidth - 425) / (1920 - 425);
  }

  // Alkalmazzuk az összes .face elemre
  faces.forEach((face) => {
    face.style.opacity = opacity;
  });
}

// Frissítsük oldal betöltéskor is
window.addEventListener("load", updateFaceOpacity);
// Frissítsük méretváltozáskor is
window.addEventListener("resize", updateFaceOpacity);
