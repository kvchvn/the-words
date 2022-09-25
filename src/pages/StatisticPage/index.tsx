import React from 'react';

import DayStatistic from '../../components/DayStatistic';
import Loading from '../../components/Loading';
import WeekStatistic from '../../components/WeekStatistic';
import { useUserStatistic } from '../../hooks';

function StatisticPage() {
  const { statistic } = useUserStatistic();

  return statistic ? (
    <article>
      <DayStatistic statistic={statistic} />
      <WeekStatistic statistic={statistic} />
    </article>
  ) : (
    <Loading size="SMALL" />
  );
}

export default StatisticPage;
