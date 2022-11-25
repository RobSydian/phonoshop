// import { Breadcrumbs, Link, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";
import StyledBreadcrumbs from "../../styles/UI/StyledBreadcrumbs";

export default function CustomBreadcrumbs({ urls }) {
  return (
    <StyledBreadcrumbs>
      {Object.values(urls).map((url, index) => {
        return (
          <div key={index}>
            {index === 0 ? (
              <NavLink to={url.url}>{url.name}</NavLink>
            ) : (
              <NavLink to={url.url}>
                <span className="activeLink">{`> ${url.name}`}</span>
              </NavLink>
            )}
          </div>
        );
      })}
    </StyledBreadcrumbs>
  );
}
