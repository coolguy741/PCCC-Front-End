const onWindowFocus = () => {
  document.body.style.cursor = "none";
};

const onWindowBlur = () => {
  document.body.style.cursor = "default";
};

export { onWindowBlur, onWindowFocus };
