(function (exports) {'use strict';

  const
    Mainloop = imports.mainloop,
    global = imports.jsgtk.System.global
  ;

  global.clearInterval  = (exports.clearInterval = clear());
  global.clearTimeout   = (exports.clearTimeout = clear());
  global.setInterval    = (exports.setInterval = set(true));
  global.setTimeout     = (exports.setTimeout = set(false));

  function clear() {
    return (id) => Mainloop.source_remove(id);
  }

  function set(repeat) {
    return function (fn, ms, ...args) {
      return Mainloop.timeout_add((ms * 1) || 0, () => {
        fn.apply(null, args);
        return repeat;
      });
    };
  }

}(this));