import { useTranslation } from 'react-i18next';
import { useStore } from '../store';

const TableData = () => {
  const { t } = useTranslation();
  const score = useStore((state) => state.score);

  const tableData = [
    {
      title: t('stats.array.character'),
      number: score.Characters().Total,
      recommendations: score.Characters().Recommend,
      score: `${score.Characters().Score}/${score.Characters().ScoreMax}`,
      check: score.Characters().Check,
      inverted: false,
    },
    {
      title: t('stats.array.unique'),
      number: score.Unique().Total,
      recommendations: score.Unique().Recommend,
      score: `${score.Unique().Score}/${score.Unique().ScoreMax}`,
      check: score.Unique().Check,
      inverted: false,
    },
    {
      title: t('stats.array.repeat'),
      number: score.Repeat().Total,
      recommendations: score.Repeat().Recommend,
      score: `${score.Repeat().Score}/${score.Repeat().ScoreMax}`,
      check: score.Repeat().Check,
      inverted: true,
    },
    {
      title: t('stats.array.upper'),
      number: score.UpperCase().Total,
      recommendations: score.UpperCase().Recommend,
      score: `${score.UpperCase().Score}/${score.UpperCase().ScoreMax}`,
      check: score.UpperCase().Check,
      inverted: false,
    },
    {
      title: t('stats.array.lower'),
      number: score.LowerCase().Total,
      recommendations: score.LowerCase().Recommend,
      score: `${score.LowerCase().Score}/${score.LowerCase().ScoreMax}`,
      check: score.LowerCase().Check,
      inverted: false,
    },
    {
      title: t('stats.array.digit'),
      number: score.Number().Total,
      recommendations: score.Number().Recommend,
      score: `${score.Number().Score}/${score.Number().ScoreMax}`,
      check: score.Number().Check,
      inverted: false,
    },
    {
      title: t('stats.array.special'),
      number: score.SpecialChar().Total,
      recommendations: score.SpecialChar().Recommend,
      score: `${score.SpecialChar().Score}/${score.SpecialChar().ScoreMax}`,
      check: score.SpecialChar().Check,
      inverted: false,
    },
  ];

  return tableData;
};

export default TableData;
