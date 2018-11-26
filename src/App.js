import React, { Suspense, memo, lazy } from "react";

const Spinner = memo(() => <div>🌀</div>);

const sleep = ms => new Promise(r => setTimeout(r, ms));

const Team = lazy(async () => {
  await sleep(1000);
  return import("./Teams");
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Spinner />} maxDuration={1000}>
          <Team teamId={6} />
        </Suspense>
      </div>
    );
  }
}

export default App;
