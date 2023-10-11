import Fotmob from "fotmob";
import { useEffect } from "react";

export default async function handler() {
  let matches = await fotmob.getMatchesByDate("20230924");
  const fotmob = new Fotmob();

  return console.log(matches);
}
