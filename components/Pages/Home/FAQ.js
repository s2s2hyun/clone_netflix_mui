import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BorderedBottomBox from "./../../Wrapper/BorderedBottom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.common.black}`,
  padding: theme.spacing(1, 3),
  "&.Mui-expanded": {
    padding: theme.spacing(0, 3),
  },
}));

export default function FAQ() {
  const [activeItem, setActiveItem] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setActiveItem(isExpanded ? panel : false);

    console.log("클릭");
  };

  return (
    <BorderedBottomBox>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h3"
          color="common.white"
          align="center"
          sx={{ mb: 6 }}
        >
          Frequently Asked Questions
        </Typography>
        <Stack spacing={1} mb={8}>
          <CustomAccordion
            square
            expanded={activeItem === "panel1"}
            onChange={handleChange("panel1")}
          >
            <CustomAccordionSummary
              //   expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h4">What can i watch on Netflix?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </Typography>
              <Typography>Check out some of our content.</Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion
            square
            expanded={activeItem === "panel2"}
            onChange={handleChange("panel2")}
          >
            <CustomAccordionSummary
              //   expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="h5">What is Netflix?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
              </Typography>
              <Typography>
                You can watch as much as you want, whenever you want – all for
                one low monthly price. There&apos;s always something new to
                discover and new TV shows and movies are added every week!
              </Typography>
            </AccordionDetails>
          </CustomAccordion>

          <CustomAccordion
            square
            expanded={activeItem === "panel3"}
            onChange={handleChange("panel3")}
          >
            <CustomAccordionSummary
              //   expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography variant="h4">How much does Netflix cost?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from KRW5,500 to KRW17,000 a month. No extra costs, no
                contracts.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>

          <CustomAccordion
            square
            expanded={activeItem === "panel4"}
            onChange={handleChange("panel4")}
          >
            <CustomAccordionSummary
              //   expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography variant="h4">
                What`s different on an ad-supported plan?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography>
                An ad-supported plan is a great way to enjoy movies and TV shows
                at a lower price. You can stream your favorites with limited ad
                breaks (some location and device restrictions apply). Downloads
                are not supported and a limited number of movies and TV shows
                are not available due to licensing restrictions.
              </Typography>
              <Typography>Learn more.</Typography>
            </AccordionDetails>
          </CustomAccordion>

          <CustomAccordion
            square
            expanded={activeItem === "panel5"}
            onChange={handleChange("panel5")}
          >
            <CustomAccordionSummary
              //   expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography variant="h4">Where can i watch?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </Typography>
              <Typography>
                You can also download your favorite shows with the iOS, Android,
                or Windows 10 app. Use downloads to watch while you&apos;re on
                the go and without an internet connection. Take Netflix with you
                anywhere.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>

          <CustomAccordion
            square
            expanded={activeItem === "panel6"}
            onChange={handleChange("panel6")}
          >
            <CustomAccordionSummary
              //   expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6-content"
              id="panel6-header"
            >
              <Typography variant="h4">How do i cancel?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>

          <CustomAccordion
            square
            expanded={activeItem === "panel7"}
            onChange={handleChange("panel7")}
          >
            <CustomAccordionSummary
              //   expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7-content"
              id="panel7-header"
            >
              <Typography variant="h4">Is Netflix good for kids?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space.
              </Typography>
              <Typography>
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
        </Stack>

        <Typography
          variant="h6"
          component="p"
          color="common.white"
          textAlign="center"
          sx={{ my: 3 }}
        >
          Ready to watch? Enter your email to create or restart your membership.
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
    </BorderedBottomBox>
  );
}
