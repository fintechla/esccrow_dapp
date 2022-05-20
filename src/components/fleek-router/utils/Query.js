export class Query {
  static instance;
  urlSearchParams;
  params;

  constructor() {
    if (Query.instance) {
      return Query.instance;
    }
    this.init();
    Query.instance = this;
  }

  init() {
    this.urlSearchParams = new URLSearchParams(window.location.search);
    this.updateParams();
  }

  updateParams() {
    this.params = Object.fromEntries(this.urlSearchParams.entries());
  }

  cleanParams() {
    for (let param in this.params) {
      this.urlSearchParams.delete(param);
    }
  }

  setParams(params) {
    this.cleanParams();
    for (let param in params) {
      this.urlSearchParams.set(param, params[param]);
    }
    this.updateParams();
    const paramsStr = this.urlSearchParams.toString();
    window.history.pushState(
      "",
      "",
      `${window.location.pathname}?${paramsStr}`
    );
  }
}
