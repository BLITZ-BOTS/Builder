/**
 * Represents the action function that will be executed for an event.
 * @callback EventAction
 * @param {...any} args - A variadic list of arguments passed to the event action.
 */
interface EventAction {
  (...args: any[]): void;
}

/**
 * Class representing an event with a name, event type, description, and action.
 * Used to define and configure events within an application.
 */
class EventBuilder {
  /** @property {string} name - The name of the event handler. */
  name: string;

  /** @property {string} event - The type or identifier of the event to listen for. */
  event: string;

  /** @property {string} description - A brief description of the event's purpose or functionality. */
  description: string;

  /** @property {EventAction} action - The function to execute when the event is triggered. */
  action: EventAction;

  /**
   * Constructs a new EventBuilder instance.
   * @param {Object} config - The configuration object for the event.
   * @param {string} config.name - The name of the event handler.
   * @param {string} config.event - The event type or identifier to listen for.
   * @param {string} config.description - A description of the event's functionality.
   * @param {EventAction} config.action - The function to execute when the event is triggered.
   */
  constructor({ name, event, description, action }: { name: string; event: string; description: string; action: EventAction }) {
    this.name = name;
    this.event = event;
    this.description = description;
    this.action = action;
  }
}

export { EventBuilder };
