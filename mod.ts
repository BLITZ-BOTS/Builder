/**
 * @module
 * 
 * This module defines two primary classes, `EventBuilder` and `CommandBuilder`, 
 * as well as their associated function types, `EventAction` and `CommandAction`.
 * These classes and interfaces enable the creation and management of custom 
 * events and commands within an application, each with specific actions, 
 * metadata, and descriptions.
 *
 * ### Interfaces
 * 
 * - `EventAction`: Defines a generic function type for actions associated 
 *   with events. It accepts any number of arguments, allowing flexibility 
 *   for various event types and contexts.
 * - `CommandAction`: Represents a function type for actions associated with 
 *   commands. The function takes a `message` (of any type) and an array of 
 *   arguments (`args`), providing flexibility for different command inputs.
 *
 * ### Classes
 * 
 * - `EventBuilder`: A class representing a custom event, encapsulating 
 *   essential information such as the event's name, identifier, description, 
 *   and action to be triggered.
 * 
 *   - **Properties**:
 *     - `name` (string): The name of the event.
 *     - `event` (string): A unique identifier for the event.
 *     - `description` (string): Describes the purpose of the event.
 *     - `action` (EventAction): Function that defines the behavior when the 
 *       event is triggered.
 * 
 * - `CommandBuilder`: A class representing a command, including metadata and 
 *   an action function. Useful for defining commands that can be executed with 
 *   specific arguments and messages.
 * 
 *   - **Properties**:
 *     - `name` (string): The name of the command.
 *     - `description` (string): Briefly describes the command's purpose.
 *     - `action` (CommandAction): Function that defines the behavior when the 
 *       command is executed.
 *
 * ### Usage Examples
 * 
 * @example
 * ```typescript
 * import { EventBuilder } from './EventCommandModule';
 * 
 * const ReadyEvent = new EventBuilder({
 *   name: "Log Client Ready",
 *   event: "ready",
 *   description: "Log When The Client Is Online",
 *   action: () => {
 *     console.log("Client Is Online");
 *   },
 * });
 *
 * // Triggering the action associated with this event
 * ReadyEvent.action();
 * ```
 * 
 * @example
 * ```typescript
 * import { CommandBuilder } from './EventCommandModule';
 * 
 * const greetCommand = new CommandBuilder({
 *   name: "greet",
 *   description: "Greets the user with a personalized message",
 *   action: (message, args) => {
 *     const userName = args[0] || "User";
 *     console.log(`Hello, ${userName}!`);
 *   },
 * });
 *
 * // Executing the command's action
 * greetCommand.action("someMessage", ["Alice"]);
 * ```
 */

export { CommandBuilder } from "./Classes/CommandBuilder.ts";
export { EventBuilder } from "./Classes/EventBuilder.ts";