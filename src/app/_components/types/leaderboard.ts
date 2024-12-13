export interface Participant {
  id: string;
  name: string;
  score: number;
  hasChanged?: boolean;
  scoreChange?: number;
}
