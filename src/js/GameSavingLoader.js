import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const readResponse = await read();
    const jsonRespose = await json(readResponse);
    return jsonRespose;
  }
}
