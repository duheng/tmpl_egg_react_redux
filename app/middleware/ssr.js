// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import { StaticRouter } from 'react-router'

// module.exports = (options, app) => {
//     return async  (ctx, next) =>{
//         console.log("==request one==");

//         console.log(ctx.url)

//         // if(ctx.url === '/'){
//         //     await next();
//         // }
//         await next();
//         console.log("==response one==");
//     }
// }


// import React from 'react';
// import App from '../../client/route';
// import { renderToString } from 'react-dom/server';
// import { StaticRouter } from 'react-router';
// import { handleHtml } from '../util';

// export default (req, res, next) => {
//   const { path, url } = req;

//   if (url.indexOf('.') > -1) {
//     return;
//   };

//   const reactStr = renderToString(
//     <StaticRouter location={path}>
//       <App />
//     </StaticRouter>
//   );

//   const htmlInfo = {
//     reactStr,
//   };

//   const html = handleHtml(htmlInfo);
//   res.send(html);

//   return next();
// };