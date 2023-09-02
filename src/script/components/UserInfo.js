export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._name = profileName;
    this._job = profileJob;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent,
    };
  }

  setUserInfo(data) {
    debugger
    this._name.textContent = data.name;
    this._job.textContent = data.job;
  }
}