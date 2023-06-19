export function handlerChangeChat(event, setter) {
    const { value } = event.target;
    setter(value || null);
  }
  