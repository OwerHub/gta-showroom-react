const pictureExistVerifier = (urlVariable, urlStable, type, placeholder) => {
  try {
    return require(urlStable + urlVariable + "." + type);
  } catch {
    console.log("nincs kép", urlVariable);

    return require(placeholder);
  }
};

export default pictureExistVerifier;
