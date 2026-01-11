import config from "../config/config.js";

export const PREFIX = config.app.commandPrefix;

export const COMMANDS = {
  PING: `${PREFIX}ping`,
  NEKO: `${PREFIX}neko`,
  KUCINK: `${PREFIX}kucink`,
  MENU: `${PREFIX}menu`,
  AI: `${PREFIX}ai`,
  PRICE: `${PREFIX}price`,
};

export const COMMAND_USAGE = {
  [COMMANDS.AI]: "Contoh penggunaan:\n!ai halo",
  [COMMANDS.PRICE]: "Contoh penggunaan:\n!price BTC",
};
