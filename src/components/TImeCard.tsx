import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { useStore } from '../store';
import { Time } from '../class';

type Locale = 'fr' | 'en';

const TimeCard: React.FC = () => {
  const { t } = useTranslation();
  const Local = useStore((state) => state.local) as Locale;
  const comparator = useStore((state) => state.operation.Comparator());
  const TimeTo = new Time();

  const TimeOptimyze = () => {
    return Math.floor(comparator[comparator.length - 1].Time);
  };

  useEffect(() => {
    moment.locale(Local);
  }, [Local]);

  const optimizedTime = TimeOptimyze();

  return (
    <div>
      <div className='text-center'>
        <p>
          {`${t('timeto.time')} `}
          {moment(new Date().getTime() + optimizedTime).fromNow()}
        </p>
        <p>{TimeTo.Seconds(optimizedTime / 3600)[Local]}</p>
      </div>
    </div>
  );
};

export default TimeCard;
