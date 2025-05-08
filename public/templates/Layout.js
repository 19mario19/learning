import { FooterTemplate } from "./Footer.js"
import { HeaderTemplate } from "./Header.js"

function Layout(
  head = { title, importJS: false },
  body = { header, main, footer },
  script = "",
  log = false,
) {
  const scriptsJs = head.importJS
    ? [/*html*/ `<script type="module" defer src="/js/script.js"></script>`]
    : []

  const layout = /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/global.css" />
    ${scriptsJs}
    <title>${head.title ?? "No title"}</title>
  </head>
  <body>
    ${/*html*/ `<header>${body.header ?? HeaderTemplate(head.title)}</header>`}
    ${body.main ? /*html*/ `<main>${body.main}</main>` : ""}
    ${/*html*/ `<footer>${body.footer ?? FooterTemplate()}</footer>`}

    ${script ? /*html*/ `<script type="module" defer>${script}</script>` : ""}
  </body>
  </html>
  `

  if (log) console.log(layout)

  return layout
}

export { Layout }
