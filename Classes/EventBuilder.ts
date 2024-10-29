/**
 * @module
 * 
 * This module defines an `EventBuilder` class and an `EventAction` interface, 
 * designed to facilitate the creation and management of custom events with 
 * associated metadata and actions.
 *
 * ### Interfaces
 * 
 * - `EventAction`: Defines a generic function type for actions associated 
 *   with events. Actions can accept any arguments, making this interface 
 *   flexible for various use cases.
 * 
 * ### Classes
 * 
 * - `EventBuilder`: A class representing a custom event. Each `EventBuilder`
 *   instance encapsulates essential information about an event, including:
 * 
 *   - `name` (string): The name of the event.
 *   - `event` (string): A unique identifier or key representing the event type.
 *   - `description` (string): A brief explanation of the event's purpose.
 *   - `action` (EventAction): A function that is triggered when the event occurs.
 *

 *@example
 * ```typescript
 * import { EventBuilder } from './EventBuilderModule';
 * 
 * const ReadyEvent = new EventBuilder({
 *   name: "Log Client Ready",
 *   event: "ready",
 *   description: "Log When The Client Is Online",
 *   action: () => {
 *      console.log("Client Is Online")
 *  },
 * });
 *
 * // To trigger the action associated with this event
 * ReadyEvent.action();
 * ```
 */


interface EventAction {
    (...args: any[]): void;
  }
  
  class EventBuilder {
    name: string;
    event: string;
    description: string;
    action: EventAction;
  
    constructor({ name, event, description, action }: { name: string; event: string; description: string; action: EventAction }) {
      this.name = name;
      this.event = event;
      this.description = description;
      this.action = action;
    }
  }
  
  export { EventBuilder };
  