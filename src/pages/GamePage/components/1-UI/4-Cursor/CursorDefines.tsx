const onWindowFocus = (): void => {
  document.body.style.cursor = "none";
};

const onWindowBlur = (): void => {
  document.body.style.cursor = "default";
};

export { onWindowBlur, onWindowFocus };
