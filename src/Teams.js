import React from "react";
import fetcher from "./fetcher";

const Team = ({ teamId }) => {
  let teams = fetcher.read(
    `https://statsapi.web.nhl.com/api/v1/teams/${teamId}`
  );
  return (
    <React.Fragment>
      {teams.teams.map(t => (
        <h1>{t.name}</h1>
      ))}
    </React.Fragment>
  );
};

export default Team;
