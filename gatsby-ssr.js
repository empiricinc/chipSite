// // Move Typography.js styles to the top of the head section so they're loaded first.
// exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
//   const headComponents = getHeadComponents()
//   headComponents.sort((x, y) => {
//     if (x.key === 'TypographyStyle') {
//       return -1
//     } else if (y.key === 'TypographyStyle') {
//       return 1
//     }
//     return 0
//   })
//   replaceHeadComponents(headComponents)
// }

// const { Helmet } = require("react-helmet")

// exports.onRenderBody = (
//   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
//   pluginOptions
// ) => {
//   const helmet = Helmet.renderStatic()
//   setHtmlAttributes(helmet.htmlAttributes.toComponent())
//   setBodyAttributes(helmet.bodyAttributes.toComponent())
//   setHeadComponents([
//     helmet.title.toComponent(),
//     helmet.link.toComponent(),
//     helmet.meta.toComponent(),
//     helmet.noscript.toComponent(),
//     helmet.script.toComponent(),
//     helmet.style.toComponent(),
//   ])
// }