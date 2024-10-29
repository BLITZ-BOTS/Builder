/**
 * @module CommandBuilderModule
 * 
 * This module defines a `CommandBuilder` class and a `CommandAction` interface, 
 * designed for creating and managing command structures that can be executed 
 * with specific actions in an application.
 *
 * ### Interfaces
 * 
 * - `CommandAction`: Represents a function type for actions associated with 
 *   commands. The function accepts a `message` (of any type) and an array of 
 *   arguments (`args`) as parameters, allowing flexibility in handling 
 *   various command inputs.
 * 
 * ### Classes
 * 
 * - `CommandBuilder`: A class representing a command with metadata and an 
 *   associated action. Each instance of `CommandBuilder` includes:
 * 
 *   - `name` (string): The name of the command.
 *   - `description` (string): A brief description of the command’s functionality.
 *   - `action` (CommandAction): A function that defines the command’s behavior 
 *     when executed.
 *
 * 
 *@example
 * ```typescript
 * import { CommandBuilder } from './CommandBuilderModule';
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
 * // To execute the command's action
 * greetCommand.action("someMessage", ["Alice"]);
 * ```
 */

 
interface CommandAction {
    (message: any, args: string[]): void;
  }
  
  class CommandBuilder {
    name: string;
    description: string;
    action: CommandAction;
  
    constructor({ name, description, action }: { name: string; description: string; action: CommandAction }) {
      this.name = name;
      this.description = description;
      this.action = action;
    }
  }
  
  export { CommandBuilder };
  