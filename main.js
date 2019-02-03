//1 задание
function recursion() {
  const child = document.getElementsByClassName("deepChild")[0];

  function catchParent(el) {
    const parent = el.parentNode;
    const className = parent.getAttribute("class");
    if (!className) {
      setTimeout(() => {
        alert(el.tagName);
        catchParent(parent);
      }, 300);
    } else {
      alert("done");
    }
  }

  catchParent(child);

}
recursion();
