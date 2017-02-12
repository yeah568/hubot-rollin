# hubot-rollin

A hubot script that allows for advanced dice rolls.

See [`src/rollin.js`](src/rollin.js) for full documentation.

## Installation

In hubot project repo, run:

`npm install hubot-rollin --save`

Then add **hubot-rollin** to your `external-scripts.json`:

```json
[
  "hubot-rollin"
]
```

## Sample Interaction

```
user>> hubot roll d20
hubot>> user rolled:
        16.
user>> hubot roll 3d20
hubot>> user rolled:
        16, 12, 4. Sum: 32.
user>> hubot roll 2:2d20
hubot>> user rolled:
        10, 4. Sum: 14.
        3, 17. Sum: 20.
user>> hubot roll 2d20+3
hubot>> user rolled:
        8, 7. Sum: 15 + 3 = 18.
user>> hubot roll 2:3d20+4
hubot>> user rolled:
        13, 2, 12. Sum: 27 + 4 = 31.
        17, 18, 4. Sum: 39 + 4 = 43.
```

## NPM Module

https://www.npmjs.com/package/hubot-rollin
