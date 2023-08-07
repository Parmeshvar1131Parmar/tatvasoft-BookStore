import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import Grid from "@mui/material/Grid"; // Import Material-UI Grid component
import "./Nav.css"; // Import the CSS file

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Brand */}
          <Grid item>
            <Link to="/" className="navbar-brand">
              BOOK APP
            </Link>
          </Grid>

          {/* Links and Search */}
          <Grid item>
            <Grid container alignItems="center" spacing={2}>
              {/* Links */}
              <Grid item>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      HOME
                    </Link>
                  </li>
                </ul>
              </Grid>

              {/* Search */}
              <Grid item>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </Grid>

              {/* Cart and Sign In */}
              <Grid item>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Link to="/cart" className="nav-link active">
                      <ShoppingCartTwoToneIcon fontSize="large" />
                    </Link>
                  </Grid>
                  <Grid item>
                    <button type="button" className="btn btn-dark me-md-2">
                      <Link to="/signin" className="nav-link active">
                        SIGN IN
                      </Link>
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </nav>
  );
}
