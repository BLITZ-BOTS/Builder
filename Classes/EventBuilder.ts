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
  