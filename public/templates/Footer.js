function FooterTemplate() {
  const time = new Date().toLocaleString()

  return /*html*/ `
<p>Created at ${time}</p>
    `
}

export { FooterTemplate }
