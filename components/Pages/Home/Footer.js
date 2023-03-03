import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import BorderedBottomBox from "../../Wrapper/BorderedBottom";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "common.black", color: "grey.700" }}>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Typography>Questions? Call 080-001-9588</Typography>

          <Container maxWidth={false} disableGutters>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    FQA
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Investor Relations
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Privacy Statement
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Speed Test
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Help Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Jobs
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Cookie Preferences
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Legal Notices
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Account
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Ways to Watch
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Corporate Information
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Only on Netflix
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Media Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Terms of Use
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Contact Us
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Container>

          <Box>
            <Select
              name="lang"
              variant="outlined"
              size="small"
              defaultValue="EN"
              sx={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "grey.700",
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
          </Box>
          <Typography variant="caption">Netflix South Korea</Typography>
        </Stack>

        <Grid container>
          <Grid item xs={12}>
            <Typography variant="caption">
              Netflix Services Korea Ltd. E-Commerce Registration Number: Je
              2018-Seoul Jong-ro-0426 Ho. Phone: 080-001-9588
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              Representative: Reginald Shawn Thompson
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">Email: korea@netflix.com</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro,
              Jongno-gu, Seoul, 03161 Republic of Korea
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              Business registration number: 165-87-00119
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              Hosted by: Amazon Web Services Inc.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">KFTC website</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
