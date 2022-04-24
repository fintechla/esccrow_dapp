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

  setParams(params) {
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
