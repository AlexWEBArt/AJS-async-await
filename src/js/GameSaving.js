export default class GameSaving {
  constructor(saving) {
    const saveHero = JSON.parse(saving);
    this.id = saveHero.id;
    this.created = saveHero.created;
    this.userInfo = saveHero.userInfo;
  }
}
