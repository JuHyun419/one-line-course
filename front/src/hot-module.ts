// https://v2.parceljs.org/features/hmr/

/**
 *  + HMR is automatically disabled when bundling in production phase.
 */
if (module.hot) {
  module.hot.accept(function onDependenciesUpdated() {
    // module or one of its dependencies was just updated
    const { updated } = module.hot?.data;
    if (updated) {
      console.log("dependencies updated! HMR functioning!", updated);
    }
  });
}
