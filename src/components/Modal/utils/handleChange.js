export function handlerChange(event, setter) {
  const { value } = event.target;
  setter(value || null);
}
