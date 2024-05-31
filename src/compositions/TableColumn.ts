import { useTranslation } from 'react-i18next';

const TableColumns = () => {
  const { t } = useTranslation();

  const columns = [
    {
      label: t('stats.array.title'),
      name: 'title',
      field: 'title',
      align: 'left',
    },
    {
      label: t('stats.array.number'),
      name: 'number',
      field: 'number',
      sortable: true,
    },
    {
      label: t('stats.array.recommendations'),
      name: 'recommendations',
      field: 'recommendations',
    },
    {
      label: t('stats.array.score'),
      name: 'score',
      field: 'score',
    },
    {
      label: '',
      name: 'inverted',
      field: 'inverted',
    },
  ];

  return columns;
};

export default TableColumns;
