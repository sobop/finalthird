import Fotmob from "fotmob";
import { useEffect } from "react";
const test = async () => {
  const fotmob = new Fotmob();
  let league = await fotmob.getTeam(
    64,
    "overview",
    "Premier League",
    "America/New_York"
  );
  console.log(league);

  return <div></div>;
};

export default test;
