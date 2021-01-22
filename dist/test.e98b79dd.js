// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "\n.skin {\n  min-width: 100%; \n  position: relative;\n  background-color: #FFDB00;\n  box-sizing: border-box;\n  margin:0;\n  padding: 0;\n}\n/* \u8BBE\u7F6E\u4E09\u89D2\u5F62\u7684\u9F3B\u5B50 */\n.nose {\n  position: relative;\n  border: 10px solid black;\n  border-color: black transparent  transparent;\n  border-bottom: none;\n  width: 0px;\n  height: 0px;\n  left: 50%;\n  top: 200px;\n  transform: translateX(-50%);\n  z-index: 10;\n}\n/* \u8BBE\u7F6E\u5173\u952E\u5E27 */\n@keyframes wave {\n 0% {\n   transform: translateX(-50%) rotate(0deg);\n }\n 33% {\n   transform: translateX(-50%) rotate(-10deg);\n }\n 66% {\n   transform: translateX(-50%) rotate(0deg);;\n }\n 100% {\n  transform: translateX(-50%) rotate(10deg);;\n}\n}\n.nose:hover{\n  /* \u8BBE\u7F6E\u52A8\u753B\u4EE5\u4EC0\u4E48\u4E3A\u57FA\u51C6 */\n  transform-origin: center bottom;\n  animation: wave 800ms infinite linear;\n}\n/* \u8BBE\u7F6E\u9F3B\u5B50\u4E0A\u7684\u5706\u5F62 */\n.yuan{\n  position: absolute;\n  width: 20px;\n  height: 10px;\n  background: black;\n  top: -20px;\n  left: 50%;\n  margin-left: -10px;\n  border-radius: 8px 8px 0 0 ;\n}\n/* \u8BBE\u7F6E\u773C\u775B */\n.eye {\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  border: 3px solid black;\n  background: #2D2D2D;\n  left: 50%;\n  top: 150px;\n  margin-left: -32px;\n  border-radius: 50%;\n}\n/* \u7ED9\u773C\u775B\u52A0\u4E0A\u767D\u8272 */\n.eye::after {\n  position: relative;\n  content: '';\n  display: block;\n  width: 28px;\n  height: 28px;\n  border: 3px solid black;\n  background: #fff;\n  border-radius: 50%;\n  left: 10px;\n}\n.eye.left {\n  transform: translateX(100px);\n}\n.eye.right {\n  transform: translateX(-100px);\n}\n/* \u5236\u4F5C\u5634\u5DF4 */\n.mouth {\n  position: relative;\n  left: 0;\n  height: 200px;\n  width: 200px;\n  left: 50%;\n  margin-left: -100px;\n  margin-top: 230px;\n}\n.mouth .up {\n  position: relative;\n  top: -40px;\n  z-index: 1;\n}\n.up .left {\n  position: absolute;\n  width: 100px;\n  height: 30px;\n  border: 5px solid black;\n  border-radius: 0 0 0 50px;\n  background: #FFDB00;\n  border-color: transparent transparent black black;\n  transform: rotate(-20deg) translateX(-53px);\n  left: 50%;\n  margin-left:-50px ;\n}\n.up .right {\n  position: absolute;\n  width: 100px;\n  background: #FFDB00;\n\n  height: 30px;\n  border: 5px solid black;\n  border-radius: 0 0 50px 0;\n  border-color: transparent transparent black black;\n  transform: rotate(20deg) translateX(61px);\n  left: 50%;\n  margin-left:-50px ;\n}\n.up .left::after {\n  position: absolute;\n  content: '';\n  display: block;\n  height: 30px;\n  width: 7px;\n  right: -6px;\n  background: #FFDB00;\n  bottom: 0;\n}\n.up .right::after {\n  position: absolute;\n  content: '';\n  display: block;\n  height: 35px;\n  width: 7px;\n  left:  -6px;\n  background: #FFDB00;\n  bottom: 0;\n}\n.down {\n  position: absolute;\n  height: 180px;\n  width: 100%;\n  top: -9px;\n  overflow: hidden;\n}\n.down .yuan1 {\n  position: absolute;\n  height: 1000px;\n  width: 150px;\n  background-color: #A91008;\n  left: 50%;\n  bottom: 0;\n  margin-left: -75px;\n  border-radius: 80px / 300px;\n  overflow: hidden;\n}\n.down .yuan2 {\n  position: absolute;\n  height: 300px;\n  width: 200px;\n  background: #FF5B5D;\n  left: 50%;\n  margin-left:-100px ;\n  bottom: -150px;\n  border-radius: 100px;\n}\n.face {\n  position: absolute;\n  height: 88px;\n  width: 88px;\n  border: 3px solid black;\n  left: 50%;\n  margin-left: -44px;\n  top: 250px;\n  background: #FE1800;\n  border-radius: 50%;\n}\n.face.left {\n  transform: translateX(-180px);\n}\n.face.left >img {\n  transform: rotateY(180deg);\n  transform-origin: 0 0;\n  position: absolute;\n  left: 50%;\n}\n.face.right {\n  transform: translateX(180px);\n}\n.face.right >img {\n  transform-origin: 0 0;\n  position: absolute;\n  left: 50%;\n}";
var time;
var run;
var player = {
  // 在这个项目中,这样写会有问题,因为不允许直接用定义的对象,需要拆出来遍历
  // bindEvents: () => {
  //   let hash = {
  //     '#btnPause': player.pause,
  //     '#btnPlay': player.play(),
  //     '#btnSlow': player.slow,
  //     '#btnNormal': player.normal,
  //     '#btnFast': player.fast
  //   }
  //   for(let key in hash) {
  //     document.querySelector(key).onclick = hash[key]
  //   }
  // },
  // 定义文字增加的长度
  n: 1,
  // 定义的是要下面动态获取绑定click
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  // 获取dom节点
  ui: {
    demo: document.querySelector('#demo'),
    style: document.querySelector('#style')
  },
  x: function x() {
    player.n += 1; // 增加到屏幕显示文本上

    player.ui.demo.innerText = string.substr(0, player.n); // 增加到style内

    player.ui.style.innerHTML = string.substr(0, player.n); // 当长度相等时 清除定时器

    if (player.n === string.length) {
      clearInterval(run);
    } // 自动滚动到最下


    demo.scrollTop = 9999;
  },
  // 在这里通过for in 遍历 然后找到对应的dom标签 绑定click 通过events的下标 获取到player.下标值的内容
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      console.log(key);
      document.querySelector(key).onclick = player[player.events[key]];
    }
  },
  init: function init() {
    time = 300;
    run = player.play(), player.bindEvents();
  },
  play: function play() {
    return run = setInterval(player.x, time);
  },
  pause: function pause() {
    clearInterval(run);
  },
  slow: function slow() {
    player.pause();
    time = 500;
    player.play();
  },
  normal: function normal() {
    player.pause();
    time = 200;
    player.play();
  },
  fast: function fast() {
    player.pause();
    time = 0;
    player.play();
  }
};
player.init();
},{}],"C:/Users/苏/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55298" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/苏/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map