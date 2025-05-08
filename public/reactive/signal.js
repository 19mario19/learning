function createSignalEnvironment() {
  let currentFn = null

  function Signal(initialValue) {
    const state = { value: initialValue }
    const dependencies = new Set()

    function read() {
      if (currentFn) dependencies.add(currentFn)
      console.log(dependencies)

      return state.value
    }
    function set(newValue) {
      state.value = newValue

      dependencies.forEach((fn) => fn(state.value))
    }
    return [read, set]
  }

  function effect(fn) {
    const wrapped = () => {
      // currentfn becomes the function passed
      // that way it becomes a part of the dependentcies when read is used
      currentFn = fn
      fn()
      //cleaning up
      currentFn = null
    }
    // initial run
    wrapped()
  }

  return {
    Signal,
    effect,
  }
}

const env = createSignalEnvironment()

const store = {
  count: {
    signal: env.Signal,
    effect: env.effect,
  },
}

export { store }
