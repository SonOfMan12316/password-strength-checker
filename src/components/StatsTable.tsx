import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store';
import { TableData, TableColumn } from '../compositions';
import { ColorGenerator } from '../class';
import { Checkmark, Triangle } from './icons';

const Stats: React.FC = () => {
  const { t } = useTranslation();
  const column = TableColumn();
  const table = TableData();

  const Color = new ColorGenerator();

  return (
    <div className='bg-white shadow-md rounded-lg p-6 lg:p-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {table.map((tableData, index) => (
          <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden'>
            <div
              className='p-4 text-center text-white'
              style={{
                backgroundColor: Color.GetHexByValues(
                  tableData.number,
                  tableData.recommendations,
                  tableData.inverted,
                ),
              }}
            >
              <strong className='flex items-center justify-center text-xs md:text-sm'>
                {tableData.check ? <Checkmark className='mr-2' /> : <Triangle className='mr-2' />}
                {tableData.title}
              </strong>
            </div>
            <hr />
            <div className='p-4 text-center'>
              <p className='text-sm'>{`${t('stats.array.number')} / ${t(
                'stats.array.recommendations',
              )}`}</p>
              <p className='text-sm text-center'>{`${tableData.number} / ${tableData.recommendations}`}</p>
            </div>
            <hr />
            <div className='p-4 text-center'>
              <p className='text-sm'>{t('stats.array.score')}</p>
              <strong className='text-base'>{tableData.score}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
