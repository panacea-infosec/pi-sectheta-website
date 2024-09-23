import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import { Intro } from "../components/Intro";
import { LiveDemo } from "../components/LiveDemo";
import { Highlight } from "./Highlight";
import { Reviews } from "./Reviews";
import { Info } from "./Info";
import { CourseDetails } from "./CourseDetails";
import { EnrollToday } from "./EnrollToday";
import { Why } from "./Why";
import { CareerPath } from "./CareerPath";
import { WhySec } from "./WhySec";
import { PanaceaLegacy } from "./PanaceaLegacy";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Box
        sx={{
          marginTop: "200px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on medium and above
        }}
      >
        <Box
          sx={{
            display:'grid',
            placeItems:'center',
            width: { xs: "100%", md: "50%" }, // Full width on small screens, 50% on medium and larger
            padding: 2, // Optional padding to create spacing between elements
          }}
        >
          <Intro />
        </Box>

        <Box
          sx={{
            display:'grid',
            placeItems:'center',
            width: { xs: "100%", md: "50%" }, // Full width on small screens, 50% on medium and larger
            padding: 2, // Optional padding
          }}
        >
          <LiveDemo />
        </Box>
      </Box>
      <Box sx={{mt:'5%'}}>
      <CourseDetails/>
      </Box>
      <EnrollToday/>
      <Why/>
      <CareerPath/>
      <WhySec/>
      <PanaceaLegacy/>
      <Reviews/>
      <Info />

    </div>
  );
}

export default Home;
