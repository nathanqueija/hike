import { Events as AuthEvents } from '@/hike/auth';
import { Events as DashboardEvents } from '@/hike/dashboard';

export type EventType = string;

export interface Event<T> {
  type: EventType;
  payload?: T;
}

export type Listener<T extends { type: string; payload?: unknown }> =
  T extends {
    type: infer _EventType;
    payload: infer Payload;
  }
    ? (payload: Payload) => void
    : T extends { type: infer _EventType; payload?: infer Payload }
    ? (payload?: Payload) => void
    : never;

export type Events = AuthEvents | DashboardEvents;
