function Observable(initialState) {
  let state = { value: initialState }
  const observables = new Set()

  function notify(data) {
    observables.forEach((fn) => fn(data))
  }

  return {
    get value() {
      return state.value
    },
    set value(newState) {
      if (newState !== state.value) state.value = newState
      notify(state.value)
    },
    getObservables: () => observables,
    subscribe: (fn) => {
      observables.add(fn)
      return () => observables.delete(fn)
    },
    subscribeAll: (array) => array.forEach((fn) => observables.add(fn)),
    unsubscribeAll: () => observables.clear(),
  }
}

/**
 * Description placeholder
 *
 * @type {{ lang: any; data: any; currentCategory: any; }}
 */
const store = {
  lang: new Observable(),
  data: new Observable(),
  currentCategory: new Observable(),
}

export { store }
