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

  const boldenText = (value: string | number): JSX.Element => {
    if (typeof value === 'string') {
      const parts = value.split('mancyDev');
      return (
        <>
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < parts.length - 1 && <strong>mancyDev</strong>}
            </React.Fragment>
          ))}
        </>
      );
    }
    return <>{value}</>;
  };

  return (
    <div className='px-6 lg:px-8 py-3 lg:py-6'>
      <div className='text-center'>
        <p className='text-xs md:text-sm'>
          {`${t('timeto.time')} `}
          {moment(new Date().getTime() + optimizedTime).fromNow()}
        </p>
        <p className='text-xs md:text-sm'>
          {boldenText(TimeTo.Seconds(optimizedTime / 3600)[Local])}
        </p>
      </div>
    </div>
  );
};

export default TimeCard;
