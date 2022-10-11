import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import DayStatistic from '../../components/DayStatistic';
import Loading from '../../components/Loading';
import WeekStatistic from '../../components/WeekStatistic';
import { ROUTER_PATHS } from '../../constants';
import { useUserStatistic } from '../../hooks';
import { useUserSelector } from '../../redux';

function StatisticPage() {
  const { statistic } = useUserStatistic();
  const user = useUserSelector();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTER_PATHS.main);
    }
  }, [user, navigate]);

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
