export function enhance(target) {
  target.prototype.log = console.log;
  target.prototype.xhr = new XMLHttpRequest();
}