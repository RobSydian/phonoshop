// import { Breadcrumbs, Link, Typography } from "@mui/material";

import { Link } from "react-router-dom";

export default function CustomBreadcrumbs({ urls }) {
  return (
    <div>
      {Object.values(urls).map((url, index) => {
        return (
          <div key={index}>
            {!index === 1 ? (
              <Link href={url.url}>{url.name}</Link>
            ) : (
              <Link href={url.url}>
                {url.name}
                {index}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

// <Breadcrumbs aria-label="breadcrumb">
// <Link underline="hover" color="inherit" href={urls.route1.url}>
//   {urls.route1.name}
// </Link>
// {urls.route2 && (
//   <Typography color="text.primary">{urls.route2.name}</Typography>
// )}
// </Breadcrumbs>

//   <Breadcrumbs separator="/" aria-label="breadcrumb">

//     {Object.values(urls).map((url, index) => {
//       console.log(index);

//       return (
//         <div key={index}>
//           {!index === 1 ? (
//             <Link underline="hover" color="grey" href={url.url}>
//               {url.name}
//             </Link>
//           ) : (
//             <Link underline="hover" color="grey" href={url.url}>
//               {url.name}
//               {index}
//             </Link>
//           )}
//         </div>
//       );
//     })}
//   </Breadcrumbs>
