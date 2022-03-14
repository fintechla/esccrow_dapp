export class UtilService {
  static instancia;

  constructor() {
    if (!!UtilService.instancia) {
      return UtilService.instancia;
    }
    UtilService.instancia = this;
  }

  setThemeMode(mode) {
    localStorage.setItem("themeMode", mode);
    if (this.changeThemeListeners) {
      this.changeThemeListeners.forEach((callback) => {
        callback(mode);
      });
    }
  }

  listenChangeThemeMode(callback) {
    if (this.changeThemeListeners) {
      this.changeThemeListeners.push(callback);
    } else {
      this.changeThemeListeners = [callback];
    }
  }

  getThemeMode() {
    const lsThemeMode = localStorage.getItem("themeMode");
    if (!lsThemeMode) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      } else {
        return "light";
      }
    } else {
      return lsThemeMode;
    }
  }
}
