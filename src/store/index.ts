import { create } from 'zustand';
import { Stats, Score, Operation } from '../class';

interface State {
  local: string;
  password: string;
  stats: Stats;
  score: Score;
  operation: Operation;
}

const defaultLocal = 'en';
const defaultPassword: string = '';
const defaultStats = new Stats(defaultPassword);
const defaultScore = new Score(defaultStats);
const defaultOperation = new Operation(defaultStats);

const initialState = {
  local: defaultLocal,
  password: defaultPassword,
  stats: defaultStats,
  score: defaultScore,
  operation: defaultOperation,
};

interface Actions {
  editLocal: (local: string) => void;
  editPassword: (password: string) => void;
}

const useStore = create<State & Actions>((set) => ({
  ...initialState,

  editLocal: (local: string) =>
    set((state) => ({
      ...state,
      local: local,
    })),
  editPassword: (password: string) =>
    set((state) => ({
      ...state,
      password: password,
      stats: new Stats(password),
      score: new Score(state.stats),
      operation: new Operation(state.stats),
    })),
}));

export default useStore;
