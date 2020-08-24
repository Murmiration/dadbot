var chalk = require("chalk");
var date = function getNowDateTimeStr() {
  var now = new Date();
  var hour = now.getHours();
  return [
    [
      AddZero(now.getDate()),
      AddZero(now.getMonth() + 1),
      now.getFullYear(),
    ].join("/"),
    [AddZero(hour), AddZero(now.getMinutes()), AddZero(now.getSeconds())].join(
      ":"
    ),
  ].join(" ");
};

function AddZero(num) {
  return num >= 0 && num < 10 ? "0" + num : num + "";
}

class Logger {
  log(thing, ...args) {
    console.log(
      `${chalk.blue.inverse(date())} ${chalk.inverse(`[LOG]`)} ${chalk.white(
        thing
      )}`,
      !args.length ? " " : args
    );
  }
  warn(thing, ...args) {
    console.log(
      `${chalk.blue.inverse(date())} ${chalk
        .rgb(255, 124, 43)
        .inverse(`[WARN]`)} ${chalk.white(thing)}`,
      !args.length ? " " : args
    );
  }
  debug(thing, ...args) {
    console.log(
      `${chalk.blue.inverse(date())} ${chalk.grey.inverse(
        `[DEBUG]`
      )} ${chalk.white(thing)}`,
      !args.length ? " " : args
    );
  }
  info(thing, ...args) {
    console.log(
      `${chalk.blue.inverse(date())} ${chalk
        .rgb(255, 255, 0)
        .inverse(`[INFO]`)} ${chalk.white(thing)}`,
      !args.length ? " " : args
    );
  }
  error(thing, ...args) {
    console.log(
      `${chalk.blue.inverse(date())} ${chalk.bgRgb(
        255,
        0,
        0
      )(`[ERROR]`)} ${chalk.white(thing)}`,
      !args.length ? " " : args
    );
  }
}
module.exports = Logger;
