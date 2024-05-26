import { create } from 'zustand';
import { Stats, Score, Operation, Time } from '../class';
import moment from 'moment';
import i18n from '../i18n';

interface State {
  local: string;
  password: string;
  stats: Stats;
  score: Score;
  operation: Operation;
  time: Time;
}

const local = 'en';
const defaultPassword = '';

const createInitialState = (password = defaultPassword) => {
  const stats = new Stats(password);
  return {
    local,
    password,
    stats,
    score: new Score(stats),
    operation: new Operation(stats),
    time: new Time(),
  };
};

interface Actions {
  editLocal: (local: string) => void;
  editPassword: (password: string) => void;
  getResume: () => { Score: number; ScoreMax: number; Percent: number };
  optimizeTime: () => number;
}

const useStore = create<State & Actions>((set, get) => ({
  ...createInitialState(),

  editLocal: (local: string) => {
    if (!['en', 'fr'].includes(local)) {
      local = 'en';
    }
    i18n.changeLanguage(local);
    moment.locale(local);
    set({ local });
  },

  editPassword: (password: string) =>
    set(() => {
      const stats = new Stats(password);
      return {
        password,
        stats,
        score: new Score(stats),
        operation: new Operation(stats),
      };
    }),

  getResume: () => {
    const score = get().score;
    return score.Resume();
  },
  optimizeTime: () => {
    const comparator = get().operation.Comparator();
    return Math.floor(comparator[comparator.length - 1].Time);
  },
}));

export { useStore };
