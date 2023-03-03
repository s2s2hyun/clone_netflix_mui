import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import { blue } from "@mui/material/colors";
import { makeStyles } from "@material-ui/core/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(0,0,0,.75)",
  boxShadow: 24,
  color: "common.white",
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    "&$checked": {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
}));

export default function LoginModal({ open, CloseModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputPwValue, setInputPwValue] = useState("");
  const classes = useStyles();
  const onChangeValue = (e) => {
    setInputPwValue(e.target.value);
  };

  return (
    <Modal open={open} onClose={CloseModal}>
      <Box sx={style}>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Sign In
        </Typography>
        <Grid sx={{ mb: 4 }}>
          <form>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <TextField
                id="email"
                name="email"
                label="Email or PhoneNumber"
                variant="filled"
                style={{ backgroundColor: "#333" }}
              />
              <FormHelperText style={{ color: "#fff" }}>
                Please enter a valid email or phone number.
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ mb: 4 }} fullWidth>
              <TextField
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                label="password"
                variant="filled"
                style={{ backgroundColor: "#333" }}
                onChange={(value) => onChangeValue(value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      {inputPwValue >= 1 ? (
                        <Button onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      ) : null}
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText style={{ color: "#fff" }}>
                Your password must contain between 4 and 60 characters.
              </FormHelperText>
            </FormControl>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Sign in
            </Button>
          </form>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Box>
            <Checkbox
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
            <Typography variant="caption">Remember me</Typography>
          </Box>

          <Typography variant="caption" component="a" href="#">
            Need help?
          </Typography>
        </Grid>
        <Grid container alignItems="center" sx={{ ml: 1.28, mb: 4 }}>
          <Image
            src="/__images/facebook.png"
            height="20px"
            width="20px"
            layout="fixed"
            alt="facebook_logo"
          />
          <Typography variant="caption" component="a" href="#" sx={{ ml: 1 }}>
            Facebook Login
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body1" component="span">
            New To Netflix?
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            component="a"
            href="#"
            sx={{ ml: 1 }}
          >
            Sign up now.
          </Typography>
        </Grid>

        <Grid>
          <Typography variant="caption" component="span">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.
          </Typography>
          <Typography
            variant="body1"
            color={blue[500]}
            component="a"
            href="#"
            sx={{ ml: 1 }}
          >
            Learn more.
          </Typography>
        </Grid>
      </Box>
    </Modal>
  );
}
