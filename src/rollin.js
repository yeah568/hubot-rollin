// Description:
//   A hubot script that allows for advanced dice rolls.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot roll <N>dX - <sets:?><num?:>d<sides><+/- mod>
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   yeah568

module.exports = robot => {
  robot.respond(/roll (?:([0-9]*):)?([0-9]*)?d([0-9]*)(?:([+-][0-9]*))?/, res => {
    if (!res.match[3]) {
      res.reply('invalid parameters');
      return;
    }

    const sets = res.match[1] ? parseInt(res.match[1], 10) : 1;
    const num = res.match[2] ? parseInt(res.match[2], 10) : 1;
    const sides = parseInt(res.match[3], 10);
    const mod = res.match[4] ? parseInt(res.match[4], 10) : 0;

    // more validation
    if (isNaN(num) || isNaN(sides)) {
      res.reply('invalid parameters.');
      return;
    }

    if (num <= 0 || sides <= 0) {
      res.reply('num and sides must be positive.');
      return;
    }

    if (num > 100 || sides > 200) {
      res.reply('num or sides too large.');
      return;
    }

    const rolls = [];

    for (let i = 0; i < sets; i++) {
      const results = [];

      let ret = '';

      for (let j = 0; j < num; j++) {
        results.push(Math.floor(Math.random() * sides) + 1);
      }

      ret += `${results.join(', ')}.`;

	    const sum = results.reduce((a, b) => a + b, 0);

      if (num > 1) {
        ret += ` Sum: ${sum}.`;
      }

      if (mod > 0) {
	      ret += ` Mod: +${mod} = ${sum + mod}.`;
	    } else if (mod < 0) {
	      ret += ` Mod: -${Math.abs(mod)} = ${sum + mod}.`;
	    }

      rolls.push(ret);
    }

    res.reply(`rolled:\n${rolls.join('\n')}`);
    return;
  })
}