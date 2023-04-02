import { Events, EventType, Listener } from '@/app/events';

export function createEventSystem() {
  const listeners: Record<EventType, Array<(payload: unknown) => void>> = {};

  function registerEvent<EventType extends Events['type']>(
    eventType: EventType,
    listener: Listener<Extract<Events, { type: EventType }>>
  ) {
    if (!listeners[eventType]) {
      listeners[eventType] = [];
    }

    listeners[eventType].push(listener);
  }

  function dispatch<EventType extends Events['type']>(
    eventType: EventType,
    payload?: Extract<Events, { type: EventType }> extends { payload: infer P }
      ? P extends undefined
        ? undefined
        : P
      : never
  ) {
    const handlers = listeners[eventType];
    if (handlers) {
      for (const handler of handlers) {
        handler(payload);
      }
    } else {
      throw new Error(`No handlers registered for event: ${eventType}`);
    }
  }

  return { registerEvent, dispatch };
}

export const { dispatch, registerEvent } = createEventSystem();
