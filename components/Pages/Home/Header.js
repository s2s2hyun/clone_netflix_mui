import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { grey } from "@mui/material/colors";
import BorderedBottomBox from "./../../Wrapper/BorderedBottom";

export default function Header() {
  return (
    <BorderedBottomBox>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          padding: "25px 20px",
          position: "absolute",
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <Image
                src="/__images/netflix.svg"
                height="45px"
                width="167px"
                layout="intrinsic"
                alt="Netflix logo"
              />
            </Grid>
            <Grid item xs="auto">
              <Select
                name="lang"
                variant="outlined"
                size="small"
                defaultValue="EN"
                sx={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "common.white",
                  color: "common.white",
                  "& .MuiSelect-icon": {
                    color: "common.white",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                <MenuItem value="ID">S2S2HYUN</MenuItem>
                <MenuItem value="EN">English</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="auto">
              <Button color="primary" variant="contained">
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "relative",
          height: "745px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.4)",
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.8) 100%
            )`,
          },
        }}
      >
        <Image
          src="/__images/backdrop.jpg"
          layout="fill"
          alt="backDrop_Header_img"
          objectFit="cover"
          priority
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1000 }}>
          <Typography
            variant="h2"
            color="common.white"
            component="h1"
            fontWeight="500"
            textAlign="center"
          >
            Unlimited movies , Tv Shows, and more.
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="common.white"
            textAlign="center"
            gutterBottom
          >
            Watch anywhere. Cancel anytime.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="common.white"
            textAlign="center"
            sx={{ my: 3 }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
          <Grid container>
            <Grid item xs>
              <TextField
                variant="filled"
                label="Email adress"
                fullWidth
                sx={{ bgcolor: "common.white" }}
              />
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ height: "100%", borderRadius: "2px" }}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BorderedBottomBox>
  );
}
