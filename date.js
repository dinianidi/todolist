exports.getDate = function() {
  const d = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return d.toLocaleString("en-US", options);
}


exports.getDay = function() {
  const d = new Date();
  const options = {
    weekday: "long",
  };
  return d.toLocaleString("en-US", options);
}
