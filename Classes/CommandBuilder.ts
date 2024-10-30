/**
 * Represents the action function that will be executed for a command.
 * @callback CommandAction
 * @param {any} message - The message object that triggered the command.
 * @param {string[]} args - Array of arguments passed to the command.
 */
interface CommandAction {
  (message: any, args: string[]): void;
}

/**
 * Class representing a command with a name, description, and action.
 * This is used to build and define commands within an application.
 */
class CommandBuilder {
  /** @property {string} name - The name of the command. */
  name: string;

  /** @property {string} description - A brief description of the command's functionality. */
  description: string;

  /** @property {CommandAction} action - The function to be executed when the command is called. */
  action: CommandAction;

  /**
   * Constructs a new CommandBuilder instance.
   * @param {Object} config - The configuration object for the command.
   * @param {string} config.name - The name of the command.
   * @param {string} config.description - The description of the command.
   * @param {CommandAction} config.action - The function to execute for the command.
   */
  constructor({ name, description, action }: { name: string; description: string; action: CommandAction }) {
    this.name = name;
    this.description = description;
    this.action = action;
  }
}

export { CommandBuilder };
