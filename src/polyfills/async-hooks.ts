type Callback<TArgs extends unknown[], TResult> = (...args: TArgs) => TResult;

export class AsyncLocalStorage<TStore = unknown> {
  private currentStore: TStore | undefined;

  disable() {
    this.currentStore = undefined;
  }

  getStore() {
    return this.currentStore;
  }

  run<TArgs extends unknown[], TResult>(store: TStore, callback: Callback<TArgs, TResult>, ...args: TArgs) {
    const previousStore = this.currentStore;
    this.currentStore = store;

    try {
      return callback(...args);
    } finally {
      this.currentStore = previousStore;
    }
  }

  enterWith(store: TStore) {
    this.currentStore = store;
  }

  exit<TArgs extends unknown[], TResult>(callback: Callback<TArgs, TResult>, ...args: TArgs) {
    const previousStore = this.currentStore;
    this.currentStore = undefined;

    try {
      return callback(...args);
    } finally {
      this.currentStore = previousStore;
    }
  }
}

export function createHook() {
  return {
    enable() {
      return this;
    },
    disable() {
      return this;
    },
  };
}

export function executionAsyncId() {
  return 0;
}

export function triggerAsyncId() {
  return 0;
}

export function executionAsyncResource() {
  return {};
}

export class AsyncResource {
  runInAsyncScope<TArgs extends unknown[], TResult>(callback: Callback<TArgs, TResult>, thisArg?: unknown, ...args: TArgs) {
    return callback.apply(thisArg, args);
  }

  emitDestroy() {
    return this;
  }

  asyncId() {
    return 0;
  }

  triggerAsyncId() {
    return 0;
  }
}