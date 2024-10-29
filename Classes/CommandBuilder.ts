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
  