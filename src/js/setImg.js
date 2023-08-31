export function setImgSrc(elementId, imgRef) {
  if (!imgRef) {
    return;
  }
  const el = document.getElementById(elementId);
  if (!el) {
    return;
  }
  el.src = imgRef;
}

export function setImgSrcset(elementId, imgRef) {
  if (!imgRef) {
    return;
  }
  const el = document.getElementById(elementId);
  if (!el) {
    return;
  }
  el.srcset = imgRef;
}
