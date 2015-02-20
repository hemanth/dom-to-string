export default (() => {
  var DIV = document.createElement("div");

  if ('outerHTML' in DIV)
    return (node) => node.outerHTML;

  return (node) => {
    var div = DIV.cloneNode();
    div.appendChild(node.cloneNode(true));
    return div.innerHTML;
  };
}());