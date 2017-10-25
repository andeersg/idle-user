# Idle User

This package exports a promise that will return the number of seconds since mouse/keyboard was last used.

**For now only macOS is supported, but if you know how to get this information on other systems feel free to add a pull request or open an issue.**

## Example
```
const idleUser = require('idle-user');

idleUser().then(secondsSinceActivity => {
  console.log(`No activity for ${secondsSinceActivity} seconds`);
});
```
