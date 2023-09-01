export class UserInfo {
  constructor({ profileName, profileJob }) {
    this._name = document.querySelector(profileName);
    this._job = document.querySelector(profileJob);
  }

  getUserInfo() {
    this._userData = {
      userName: this._name.textContent,
      userJob: this._job.textContent,
    }
    return this._userData;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.job;
  }
}