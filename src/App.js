import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { get as getUser } from 'services/user';
import './App.css';

import Profile from 'components/Profile';
import Chart from 'components/Chart';
import CircularProgress from 'components/CircularProgress';

const App = () => {
  const [user, setUser] = useState();
  const [metric, setMetric] = useState(0);

  const metrics = useMemo(
    () => ({
      categories: user ? user.metrics.map(({ year }) => year) : [],
      series: user ? user.metrics.map(({ units }) => units) : []
    }),
    [user]
  );

  const growth = useMemo(
    () =>
      user
        ? [
            user.metrics[metric].orange_metric,
            user.metrics[metric].gray_metric,
            user.metrics[metric].blue_metric
          ]
        : [0, 0, 0],
    [metric, user]
  );

  const onClickYear = useCallback(
    serie => {
      const index = user
        ? user.metrics.findIndex(({ year }) => year === serie)
        : 0;

      setMetric(index);
    },
    [user]
  );

  const fetchUser = async id => {
    const user = await getUser(id);

    setUser(user);
  };

  useEffect(() => {
    fetchUser('1ce438ab-c6c2-4f98-abb6-b318bd83240c');
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <Profile user={user} />
          <div>
            <h1>Dashboard</h1>
            <div className="metrics">
              <CircularProgress color="#E4733B" value={growth[0]} />
              <CircularProgress color="#6B7886" value={growth[1]} />
              <CircularProgress color="#5EBECF" value={growth[2]} />
            </div>
            <Chart
              series={metrics.series}
              categories={metrics.categories}
              onClick={onClickYear}
            />
          </div>
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default App;
