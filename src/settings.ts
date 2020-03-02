export default class AppSettings {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  get lastTeam(): string | null {
    return this.storage.getItem("lastTeam");
  }

  set lastTeam(team: string | null) {
    if(!team) {
      this.storage.removeItem("lastTeam");
    } else {
      this.storage.setItem("lastTeam", team);
    }
  }
}
