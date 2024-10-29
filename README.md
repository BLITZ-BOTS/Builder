# <img src="./blitz_builder.png">

The **BLITZ Builder** is a robust package designed to facilitate the seamless creation of commands and events for BLITZ plugins. This powerful toolkit offers a set of classes and methods that empower developers to efficiently build, customize, and extend bot functionality. By utilizing the BLITZ Builder, you can create interactive and responsive bots that enhance user engagement within the BLITZ ecosystem.

## Key Features

- **Streamlined Development**: Simplifies the process of creating commands and events for your bots.
- **Customizable Actions**: Easily define custom behaviors for commands and events.
- **User-Friendly Interface**: Intuitive class structure that allows for quick integration and development.

## Classes

### [EventBuilder](/Classes/EventBuilder.ts)

The `EventBuilder` class is used to define events for your bot. It takes the following parameters:

- **`name`** (string): The name of the event.
- **`event`** (string): A unique identifier representing the event type.
- **`description`** (string): A concise explanation of the event's purpose.
- **`action`** (EventAction): A callback function triggered when the event occurs.

**Example:**

```typescript
import { EventBuilder } from '@blitz-bots/builders';

const readyEvent = new EventBuilder({
  name: "Log Client Ready",
  event: "ready",
  description: "Logs when the client is online",
  action: () => {
    console.log("Client is online");
  },
});
```

### [CommandBuilder](/Classes/CommandBuilder.ts)

The `CommandBuilder` class is utilized to create commands for your bot. It requires the following parameters:

- **`name`** (string): The name of the command.
- **`description`** (string): A brief description of the command’s functionality.
- **`action`** (CommandAction): A function that defines the command’s behavior when executed.

**Example:**

```typescript
import { CommandBuilder } from '@blitz-bots/builders';

const greetCommand = new CommandBuilder({
  name: "greet",
  description: "Greets the user with a personalized message",
  action: (message, args) => {
    const userName = args[0] || "User";
    console.log(`Hello, ${userName}!`);
  },
});
```

## Conclusion

The **BLITZ Builder** package is an essential tool for developers looking to enhance their bot capabilities within the BLITZ framework. With the easy-to-use `EventBuilder` and `CommandBuilder` classes, you can create dynamic and engaging interactions that improve user experience. Start building your commands and events today, and unlock the full potential of your bots!

