window.addEventListener("mousemove", (mouse) => {
  let pupils = document.querySelectorAll("pupil");
  let cords = {
    x: mouse.clientX,
    y: mouse.clientY,
  };
  let maxBounds = {
    x: document.documentElement.clientWidth,
    y: document.documentElement.clientHeight,
  };
  let percent = {
    x: (cords["x"] / maxBounds["x"]) * 100,
    y: (cords["y"] / maxBounds["y"]) * 100,
  };
  // console.log('mouse',mouse);
  pupils.forEach((pupil) => {
    // console.log("pupil", pupil);
    pupil.style.top = percent["y"] + "%";
    pupil.style.left = percent["x"] + "%";
  });
});
