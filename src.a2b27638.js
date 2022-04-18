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
})({"src/EmediaSDK.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! For license information please see EmediaSDK.js.LICENSE.txt */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.EmediaSDK = t() : e.EmediaSDK = t();
}(self, function () {
  return function () {
    var e = {
      3133: function _(e, t, n) {
        e.exports = n(7185);
      },
      4422: function _(e, t, n) {
        e.exports = n(3285);
      },
      3029: function _(e, t, n) {
        e.exports = n(4779);
      },
      4720: function _(e, t, n) {
        e.exports = n(2742);
      },
      6406: function _(e, t, n) {
        e.exports = n(6981);
      },
      200: function _(e, t, n) {
        e.exports = n(5627);
      },
      8548: function _(e, t, n) {
        e.exports = n(3391);
      },
      4100: function _(e, t, n) {
        e.exports = n(381);
      },
      3929: function _(e, t, n) {
        e.exports = n(8613);
      },
      4255: function _(e, t, n) {
        e.exports = n(433);
      },
      9204: function _(e, t, n) {
        e.exports = n(1955);
      },
      4504: function _(e, t, n) {
        e.exports = n(7794);
      },
      3497: function _(e, t, n) {
        e.exports = n(8318);
      },
      7219: function _(e, t, n) {
        e.exports = n(25);
      },
      7544: function _(e, t, n) {
        e.exports = n(2392);
      },
      4050: function _() {
        window.emedia = {};
      },
      7185: function _(e, t, n) {
        n(1867), n(2586), e.exports = n(4579).Array.from;
      },
      3285: function _(e, t, n) {
        n(8691), e.exports = n(4579).Array.isArray;
      },
      4779: function _(e, t, n) {
        n(961), e.exports = n(4579).Date.now;
      },
      2742: function _(e, t, n) {
        var r = n(4579),
            i = r.JSON || (r.JSON = {
          stringify: JSON.stringify
        });

        e.exports = function (e) {
          return i.stringify.apply(i, arguments);
        };
      },
      6981: function _(e, t, n) {
        n(2699), e.exports = n(4579).Object.assign;
      },
      5627: function _(e, t, n) {
        n(6760);
        var r = n(4579).Object;

        e.exports = function (e, t) {
          return r.create(e, t);
        };
      },
      3391: function _(e, t, n) {
        n(1477);
        var r = n(4579).Object;

        e.exports = function (e, t, n) {
          return r.defineProperty(e, t, n);
        };
      },
      381: function _(e, t, n) {
        n(7220), e.exports = n(4579).Object.getPrototypeOf;
      },
      8613: function _(e, t, n) {
        n(6203), e.exports = n(4579).Object.keys;
      },
      433: function _(e, t, n) {
        n(9349), e.exports = n(4579).Object.setPrototypeOf;
      },
      1955: function _(e, t, n) {
        n(3136), e.exports = n(4579).parseFloat;
      },
      7794: function _(e, t, n) {
        n(7609), e.exports = n(4579).parseInt;
      },
      8318: function _(e, t, n) {
        n(9650), e.exports = n(4579).Reflect.construct;
      },
      25: function _(e, t, n) {
        n(6840), n(4058), n(8174), n(6461), e.exports = n(4579).Symbol;
      },
      2392: function _(e, t, n) {
        n(1867), n(3871), e.exports = n(5103).f("iterator");
      },
      5663: function _(e) {
        e.exports = function (e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e;
        };
      },
      9003: function _(e) {
        e.exports = function () {};
      },
      2159: function _(e, t, n) {
        var r = n(6727);

        e.exports = function (e) {
          if (!r(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      7428: function _(e, t, n) {
        var r = n(7932),
            i = n(8728),
            o = n(6531);

        e.exports = function (e) {
          return function (t, n, a) {
            var s,
                c = r(t),
                u = i(c.length),
                d = o(a, u);

            if (e && n != n) {
              for (; u > d;) {
                if ((s = c[d++]) != s) return !0;
              }
            } else for (; u > d; d++) {
              if ((e || d in c) && c[d] === n) return e || d || 0;
            }

            return !e && -1;
          };
        };
      },
      4094: function _(e, t, n) {
        "use strict";

        var r = n(5663),
            i = n(6727),
            o = n(6778),
            a = [].slice,
            s = {},
            c = function c(e, t, n) {
          if (!(t in s)) {
            for (var r = [], i = 0; i < t; i++) {
              r[i] = "a[" + i + "]";
            }

            s[t] = Function("F,a", "return new F(" + r.join(",") + ")");
          }

          return s[t](e, n);
        };

        e.exports = Function.bind || function (e) {
          var t = r(this),
              n = a.call(arguments, 1),
              s = function s() {
            var r = n.concat(a.call(arguments));
            return this instanceof s ? c(t, r.length, r) : o(t, r, e);
          };

          return i(t.prototype) && (s.prototype = t.prototype), s;
        };
      },
      4677: function _(e, t, n) {
        var r = n(2894),
            i = n(2939)("toStringTag"),
            o = "Arguments" == r(function () {
          return arguments;
        }());

        e.exports = function (e) {
          var t, n, a;
          return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
              return e[t];
            } catch (e) {}
          }(t = Object(e), i)) ? n : o ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a;
        };
      },
      2894: function _(e) {
        var t = {}.toString;

        e.exports = function (e) {
          return t.call(e).slice(8, -1);
        };
      },
      4579: function _(e) {
        var t = e.exports = {
          version: "2.6.12"
        };
        "number" == typeof __e && (__e = t);
      },
      2445: function _(e, t, n) {
        "use strict";

        var r = n(4743),
            i = n(3101);

        e.exports = function (e, t, n) {
          t in e ? r.f(e, t, i(0, n)) : e[t] = n;
        };
      },
      9216: function _(e, t, n) {
        var r = n(5663);

        e.exports = function (e, t, n) {
          if (r(e), void 0 === t) return e;

          switch (n) {
            case 1:
              return function (n) {
                return e.call(t, n);
              };

            case 2:
              return function (n, r) {
                return e.call(t, n, r);
              };

            case 3:
              return function (n, r, i) {
                return e.call(t, n, r, i);
              };
          }

          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      8333: function _(e) {
        e.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      9666: function _(e, t, n) {
        e.exports = !n(7929)(function () {
          return 7 != Object.defineProperty({}, "a", {
            get: function get() {
              return 7;
            }
          }).a;
        });
      },
      7467: function _(e, t, n) {
        var r = n(6727),
            i = n(3938).document,
            o = r(i) && r(i.createElement);

        e.exports = function (e) {
          return o ? i.createElement(e) : {};
        };
      },
      3338: function _(e) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      337: function _(e, t, n) {
        var r = n(6162),
            i = n(8195),
            o = n(6274);

        e.exports = function (e) {
          var t = r(e),
              n = i.f;
          if (n) for (var a, s = n(e), c = o.f, u = 0; s.length > u;) {
            c.call(e, a = s[u++]) && t.push(a);
          }
          return t;
        };
      },
      3856: function _(e, t, n) {
        var r = n(3938),
            i = n(4579),
            o = n(9216),
            a = n(1818),
            s = n(7069),
            c = function c(e, t, n) {
          var u,
              d,
              f,
              l = e & c.F,
              p = e & c.G,
              h = e & c.S,
              v = e & c.P,
              m = e & c.B,
              g = e & c.W,
              _ = p ? i : i[t] || (i[t] = {}),
              y = _.prototype,
              b = p ? r : h ? r[t] : (r[t] || {}).prototype;

          for (u in p && (n = t), n) {
            (d = !l && b && void 0 !== b[u]) && s(_, u) || (f = d ? b[u] : n[u], _[u] = p && "function" != typeof b[u] ? n[u] : m && d ? o(f, r) : g && b[u] == f ? function (e) {
              var t = function t(_t2, n, r) {
                if (this instanceof e) {
                  switch (arguments.length) {
                    case 0:
                      return new e();

                    case 1:
                      return new e(_t2);

                    case 2:
                      return new e(_t2, n);
                  }

                  return new e(_t2, n, r);
                }

                return e.apply(this, arguments);
              };

              return t.prototype = e.prototype, t;
            }(f) : v && "function" == typeof f ? o(Function.call, f) : f, v && ((_.virtual || (_.virtual = {}))[u] = f, e & c.R && y && !y[u] && a(y, u, f)));
          }
        };

        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c;
      },
      7929: function _(e) {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      3938: function _(e) {
        var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t);
      },
      7069: function _(e) {
        var t = {}.hasOwnProperty;

        e.exports = function (e, n) {
          return t.call(e, n);
        };
      },
      1818: function _(e, t, n) {
        var r = n(4743),
            i = n(3101);
        e.exports = n(9666) ? function (e, t, n) {
          return r.f(e, t, i(1, n));
        } : function (e, t, n) {
          return e[t] = n, e;
        };
      },
      4881: function _(e, t, n) {
        var r = n(3938).document;
        e.exports = r && r.documentElement;
      },
      3758: function _(e, t, n) {
        e.exports = !n(9666) && !n(7929)(function () {
          return 7 != Object.defineProperty(n(7467)("div"), "a", {
            get: function get() {
              return 7;
            }
          }).a;
        });
      },
      6778: function _(e) {
        e.exports = function (e, t, n) {
          var r = void 0 === n;

          switch (t.length) {
            case 0:
              return r ? e() : e.call(n);

            case 1:
              return r ? e(t[0]) : e.call(n, t[0]);

            case 2:
              return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);

            case 3:
              return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);

            case 4:
              return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
          }

          return e.apply(n, t);
        };
      },
      799: function _(e, t, n) {
        var r = n(2894);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
          return "String" == r(e) ? e.split("") : Object(e);
        };
      },
      5991: function _(e, t, n) {
        var r = n(5449),
            i = n(2939)("iterator"),
            o = Array.prototype;

        e.exports = function (e) {
          return void 0 !== e && (r.Array === e || o[i] === e);
        };
      },
      1421: function _(e, t, n) {
        var r = n(2894);

        e.exports = Array.isArray || function (e) {
          return "Array" == r(e);
        };
      },
      6727: function _(e) {
        e.exports = function (e) {
          return "object" == _typeof(e) ? null !== e : "function" == typeof e;
        };
      },
      5602: function _(e, t, n) {
        var r = n(2159);

        e.exports = function (e, t, n, i) {
          try {
            return i ? t(r(n)[0], n[1]) : t(n);
          } catch (t) {
            var o = e.return;
            throw void 0 !== o && r(o.call(e)), t;
          }
        };
      },
      3945: function _(e, t, n) {
        "use strict";

        var r = n(526),
            i = n(3101),
            o = n(5378),
            a = {};
        n(1818)(a, n(2939)("iterator"), function () {
          return this;
        }), e.exports = function (e, t, n) {
          e.prototype = r(a, {
            next: i(1, n)
          }), o(e, t + " Iterator");
        };
      },
      5700: function _(e, t, n) {
        "use strict";

        var r = n(6227),
            i = n(3856),
            o = n(7470),
            a = n(1818),
            s = n(5449),
            c = n(3945),
            u = n(5378),
            d = n(5089),
            f = n(2939)("iterator"),
            l = !([].keys && "next" in [].keys()),
            p = "keys",
            h = "values",
            v = function v() {
          return this;
        };

        e.exports = function (e, t, n, m, g, _, y) {
          c(n, t, m);

          var b,
              S,
              C,
              w = function w(e) {
            if (!l && e in R) return R[e];

            switch (e) {
              case p:
              case h:
                return function () {
                  return new n(this, e);
                };
            }

            return function () {
              return new n(this, e);
            };
          },
              k = t + " Iterator",
              x = g == h,
              I = !1,
              R = e.prototype,
              T = R[f] || R["@@iterator"] || g && R[g],
              E = T || w(g),
              M = g ? x ? w("entries") : E : void 0,
              P = "Array" == t && R.entries || T;

          if (P && (C = d(P.call(new e()))) !== Object.prototype && C.next && (u(C, k, !0), r || "function" == typeof C[f] || a(C, f, v)), x && T && T.name !== h && (I = !0, E = function E() {
            return T.call(this);
          }), r && !y || !l && !I && R[f] || a(R, f, E), s[t] = E, s[k] = v, g) if (b = {
            values: x ? E : w(h),
            keys: _ ? E : w(p),
            entries: M
          }, y) for (S in b) {
            S in R || o(R, S, b[S]);
          } else i(i.P + i.F * (l || I), t, b);
          return b;
        };
      },
      6630: function _(e, t, n) {
        var r = n(2939)("iterator"),
            i = !1;

        try {
          var o = [7][r]();
          o.return = function () {
            i = !0;
          }, Array.from(o, function () {
            throw 2;
          });
        } catch (e) {}

        e.exports = function (e, t) {
          if (!t && !i) return !1;
          var n = !1;

          try {
            var o = [7],
                a = o[r]();
            a.next = function () {
              return {
                done: n = !0
              };
            }, o[r] = function () {
              return a;
            }, e(o);
          } catch (e) {}

          return n;
        };
      },
      5084: function _(e) {
        e.exports = function (e, t) {
          return {
            value: t,
            done: !!e
          };
        };
      },
      5449: function _(e) {
        e.exports = {};
      },
      6227: function _(e) {
        e.exports = !0;
      },
      7177: function _(e, t, n) {
        var r = n(5730)("meta"),
            i = n(6727),
            o = n(7069),
            a = n(4743).f,
            s = 0,
            c = Object.isExtensible || function () {
          return !0;
        },
            u = !n(7929)(function () {
          return c(Object.preventExtensions({}));
        }),
            d = function d(e) {
          a(e, r, {
            value: {
              i: "O" + ++s,
              w: {}
            }
          });
        },
            f = e.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function fastKey(e, t) {
            if (!i(e)) return "symbol" == _typeof(e) ? e : ("string" == typeof e ? "S" : "P") + e;

            if (!o(e, r)) {
              if (!c(e)) return "F";
              if (!t) return "E";
              d(e);
            }

            return e[r].i;
          },
          getWeak: function getWeak(e, t) {
            if (!o(e, r)) {
              if (!c(e)) return !0;
              if (!t) return !1;
              d(e);
            }

            return e[r].w;
          },
          onFreeze: function onFreeze(e) {
            return u && f.NEED && c(e) && !o(e, r) && d(e), e;
          }
        };
      },
      8082: function _(e, t, n) {
        "use strict";

        var r = n(9666),
            i = n(6162),
            o = n(8195),
            a = n(6274),
            s = n(6530),
            c = n(799),
            u = Object.assign;
        e.exports = !u || n(7929)(function () {
          var e = {},
              t = {},
              n = Symbol(),
              r = "abcdefghijklmnopqrst";
          return e[n] = 7, r.split("").forEach(function (e) {
            t[e] = e;
          }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r;
        }) ? function (e, t) {
          for (var n = s(e), u = arguments.length, d = 1, f = o.f, l = a.f; u > d;) {
            for (var p, h = c(arguments[d++]), v = f ? i(h).concat(f(h)) : i(h), m = v.length, g = 0; m > g;) {
              p = v[g++], r && !l.call(h, p) || (n[p] = h[p]);
            }
          }

          return n;
        } : u;
      },
      526: function _(e, t, n) {
        var r = n(2159),
            i = n(7856),
            o = n(3338),
            a = n(8989)("IE_PROTO"),
            s = function s() {},
            _c2 = function c() {
          var e,
              t = n(7467)("iframe"),
              r = o.length;

          for (t.style.display = "none", n(4881).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), _c2 = e.F; r--;) {
            delete _c2.prototype[o[r]];
          }

          return _c2();
        };

        e.exports = Object.create || function (e, t) {
          var n;
          return null !== e ? (s.prototype = r(e), n = new s(), s.prototype = null, n[a] = e) : n = _c2(), void 0 === t ? n : i(n, t);
        };
      },
      4743: function _(e, t, n) {
        var r = n(2159),
            i = n(3758),
            o = n(3206),
            a = Object.defineProperty;
        t.f = n(9666) ? Object.defineProperty : function (e, t, n) {
          if (r(e), t = o(t, !0), r(n), i) try {
            return a(e, t, n);
          } catch (e) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
      },
      7856: function _(e, t, n) {
        var r = n(4743),
            i = n(2159),
            o = n(6162);
        e.exports = n(9666) ? Object.defineProperties : function (e, t) {
          i(e);

          for (var n, a = o(t), s = a.length, c = 0; s > c;) {
            r.f(e, n = a[c++], t[n]);
          }

          return e;
        };
      },
      6183: function _(e, t, n) {
        var r = n(6274),
            i = n(3101),
            o = n(7932),
            a = n(3206),
            s = n(7069),
            c = n(3758),
            u = Object.getOwnPropertyDescriptor;
        t.f = n(9666) ? u : function (e, t) {
          if (e = o(e), t = a(t, !0), c) try {
            return u(e, t);
          } catch (e) {}
          if (s(e, t)) return i(!r.f.call(e, t), e[t]);
        };
      },
      4368: function _(e, t, n) {
        var r = n(7932),
            i = n(3230).f,
            o = {}.toString,
            a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

        e.exports.f = function (e) {
          return a && "[object Window]" == o.call(e) ? function (e) {
            try {
              return i(e);
            } catch (e) {
              return a.slice();
            }
          }(e) : i(r(e));
        };
      },
      3230: function _(e, t, n) {
        var r = n(2963),
            i = n(3338).concat("length", "prototype");

        t.f = Object.getOwnPropertyNames || function (e) {
          return r(e, i);
        };
      },
      8195: function _(e, t) {
        t.f = Object.getOwnPropertySymbols;
      },
      5089: function _(e, t, n) {
        var r = n(7069),
            i = n(6530),
            o = n(8989)("IE_PROTO"),
            a = Object.prototype;

        e.exports = Object.getPrototypeOf || function (e) {
          return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
        };
      },
      2963: function _(e, t, n) {
        var r = n(7069),
            i = n(7932),
            o = n(7428)(!1),
            a = n(8989)("IE_PROTO");

        e.exports = function (e, t) {
          var n,
              s = i(e),
              c = 0,
              u = [];

          for (n in s) {
            n != a && r(s, n) && u.push(n);
          }

          for (; t.length > c;) {
            r(s, n = t[c++]) && (~o(u, n) || u.push(n));
          }

          return u;
        };
      },
      6162: function _(e, t, n) {
        var r = n(2963),
            i = n(3338);

        e.exports = Object.keys || function (e) {
          return r(e, i);
        };
      },
      6274: function _(e, t) {
        t.f = {}.propertyIsEnumerable;
      },
      2584: function _(e, t, n) {
        var r = n(3856),
            i = n(4579),
            o = n(7929);

        e.exports = function (e, t) {
          var n = (i.Object || {})[e] || Object[e],
              a = {};
          a[e] = t(n), r(r.S + r.F * o(function () {
            n(1);
          }), "Object", a);
        };
      },
      9592: function _(e, t, n) {
        var r = n(3938).parseFloat,
            i = n(2422).trim;
        e.exports = 1 / r(n(9617) + "-0") != -1 / 0 ? function (e) {
          var t = i(String(e), 3),
              n = r(t);
          return 0 === n && "-" == t.charAt(0) ? -0 : n;
        } : r;
      },
      9115: function _(e, t, n) {
        var r = n(3938).parseInt,
            i = n(2422).trim,
            o = n(9617),
            a = /^[-+]?0[xX]/;
        e.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function (e, t) {
          var n = i(String(e), 3);
          return r(n, t >>> 0 || (a.test(n) ? 16 : 10));
        } : r;
      },
      3101: function _(e) {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
          };
        };
      },
      7470: function _(e, t, n) {
        e.exports = n(1818);
      },
      2906: function _(e, t, n) {
        var r = n(6727),
            i = n(2159),
            o = function o(e, t) {
          if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
        };

        e.exports = {
          set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, r) {
            try {
              (r = n(9216)(Function.call, n(6183).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array);
            } catch (e) {
              t = !0;
            }

            return function (e, n) {
              return o(e, n), t ? e.__proto__ = n : r(e, n), e;
            };
          }({}, !1) : void 0),
          check: o
        };
      },
      5378: function _(e, t, n) {
        var r = n(4743).f,
            i = n(7069),
            o = n(2939)("toStringTag");

        e.exports = function (e, t, n) {
          e && !i(e = n ? e : e.prototype, o) && r(e, o, {
            configurable: !0,
            value: t
          });
        };
      },
      8989: function _(e, t, n) {
        var r = n(250)("keys"),
            i = n(5730);

        e.exports = function (e) {
          return r[e] || (r[e] = i(e));
        };
      },
      250: function _(e, t, n) {
        var r = n(4579),
            i = n(3938),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function (e, t) {
          return a[e] || (a[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: r.version,
          mode: n(6227) ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      510: function _(e, t, n) {
        var r = n(1052),
            i = n(8333);

        e.exports = function (e) {
          return function (t, n) {
            var o,
                a,
                s = String(i(t)),
                c = r(n),
                u = s.length;
            return c < 0 || c >= u ? e ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : o : e ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536;
          };
        };
      },
      2422: function _(e, t, n) {
        var r = n(3856),
            i = n(8333),
            o = n(7929),
            a = n(9617),
            s = "[" + a + "]",
            c = RegExp("^" + s + s + "*"),
            u = RegExp(s + s + "*$"),
            d = function d(e, t, n) {
          var i = {},
              s = o(function () {
            return !!a[e]() || "​" != "​"[e]();
          }),
              c = i[e] = s ? t(f) : a[e];
          n && (i[n] = c), r(r.P + r.F * s, "String", i);
        },
            f = d.trim = function (e, t) {
          return e = String(i(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(u, "")), e;
        };

        e.exports = d;
      },
      9617: function _(e) {
        e.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
      },
      6531: function _(e, t, n) {
        var r = n(1052),
            i = Math.max,
            o = Math.min;

        e.exports = function (e, t) {
          return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
        };
      },
      1052: function _(e) {
        var t = Math.ceil,
            n = Math.floor;

        e.exports = function (e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e);
        };
      },
      7932: function _(e, t, n) {
        var r = n(799),
            i = n(8333);

        e.exports = function (e) {
          return r(i(e));
        };
      },
      8728: function _(e, t, n) {
        var r = n(1052),
            i = Math.min;

        e.exports = function (e) {
          return e > 0 ? i(r(e), 9007199254740991) : 0;
        };
      },
      6530: function _(e, t, n) {
        var r = n(8333);

        e.exports = function (e) {
          return Object(r(e));
        };
      },
      3206: function _(e, t, n) {
        var r = n(6727);

        e.exports = function (e, t) {
          if (!r(e)) return e;
          var n, i;
          if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
          if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
          if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      5730: function _(e) {
        var t = 0,
            n = Math.random();

        e.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + n).toString(36));
        };
      },
      6347: function _(e, t, n) {
        var r = n(3938),
            i = n(4579),
            o = n(6227),
            a = n(5103),
            s = n(4743).f;

        e.exports = function (e) {
          var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
          "_" == e.charAt(0) || e in t || s(t, e, {
            value: a.f(e)
          });
        };
      },
      5103: function _(e, t, n) {
        t.f = n(2939);
      },
      2939: function _(e, t, n) {
        var r = n(250)("wks"),
            i = n(5730),
            o = n(3938).Symbol,
            a = "function" == typeof o;
        (e.exports = function (e) {
          return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e));
        }).store = r;
      },
      3728: function _(e, t, n) {
        var r = n(4677),
            i = n(2939)("iterator"),
            o = n(5449);

        e.exports = n(4579).getIteratorMethod = function (e) {
          if (null != e) return e[i] || e["@@iterator"] || o[r(e)];
        };
      },
      2586: function _(e, t, n) {
        "use strict";

        var r = n(9216),
            i = n(3856),
            o = n(6530),
            a = n(5602),
            s = n(5991),
            c = n(8728),
            u = n(2445),
            d = n(3728);
        i(i.S + i.F * !n(6630)(function (e) {
          Array.from(e);
        }), "Array", {
          from: function from(e) {
            var t,
                n,
                i,
                f,
                l = o(e),
                p = "function" == typeof this ? this : Array,
                h = arguments.length,
                v = h > 1 ? arguments[1] : void 0,
                m = void 0 !== v,
                g = 0,
                _ = d(l);

            if (m && (v = r(v, h > 2 ? arguments[2] : void 0, 2)), null == _ || p == Array && s(_)) for (n = new p(t = c(l.length)); t > g; g++) {
              u(n, g, m ? v(l[g], g) : l[g]);
            } else for (f = _.call(l), n = new p(); !(i = f.next()).done; g++) {
              u(n, g, m ? a(f, v, [i.value, g], !0) : i.value);
            }
            return n.length = g, n;
          }
        });
      },
      8691: function _(e, t, n) {
        var r = n(3856);
        r(r.S, "Array", {
          isArray: n(1421)
        });
      },
      3882: function _(e, t, n) {
        "use strict";

        var r = n(9003),
            i = n(5084),
            o = n(5449),
            a = n(7932);
        e.exports = n(5700)(Array, "Array", function (e, t) {
          this._t = a(e), this._i = 0, this._k = t;
        }, function () {
          var e = this._t,
              t = this._k,
              n = this._i++;
          return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
      },
      961: function _(e, t, n) {
        var r = n(3856);
        r(r.S, "Date", {
          now: function now() {
            return new Date().getTime();
          }
        });
      },
      2699: function _(e, t, n) {
        var r = n(3856);
        r(r.S + r.F, "Object", {
          assign: n(8082)
        });
      },
      6760: function _(e, t, n) {
        var r = n(3856);
        r(r.S, "Object", {
          create: n(526)
        });
      },
      1477: function _(e, t, n) {
        var r = n(3856);
        r(r.S + r.F * !n(9666), "Object", {
          defineProperty: n(4743).f
        });
      },
      7220: function _(e, t, n) {
        var r = n(6530),
            i = n(5089);
        n(2584)("getPrototypeOf", function () {
          return function (e) {
            return i(r(e));
          };
        });
      },
      6203: function _(e, t, n) {
        var r = n(6530),
            i = n(6162);
        n(2584)("keys", function () {
          return function (e) {
            return i(r(e));
          };
        });
      },
      9349: function _(e, t, n) {
        var r = n(3856);
        r(r.S, "Object", {
          setPrototypeOf: n(2906).set
        });
      },
      4058: function _() {},
      3136: function _(e, t, n) {
        var r = n(3856),
            i = n(9592);
        r(r.G + r.F * (parseFloat != i), {
          parseFloat: i
        });
      },
      7609: function _(e, t, n) {
        var r = n(3856),
            i = n(9115);
        r(r.G + r.F * (parseInt != i), {
          parseInt: i
        });
      },
      9650: function _(e, t, n) {
        var r = n(3856),
            i = n(526),
            o = n(5663),
            a = n(2159),
            s = n(6727),
            c = n(7929),
            u = n(4094),
            d = (n(3938).Reflect || {}).construct,
            f = c(function () {
          function e() {}

          return !(d(function () {}, [], e) instanceof e);
        }),
            l = !c(function () {
          d(function () {});
        });
        r(r.S + r.F * (f || l), "Reflect", {
          construct: function construct(e, t) {
            o(e), a(t);
            var n = arguments.length < 3 ? e : o(arguments[2]);
            if (l && !f) return d(e, t, n);

            if (e == n) {
              switch (t.length) {
                case 0:
                  return new e();

                case 1:
                  return new e(t[0]);

                case 2:
                  return new e(t[0], t[1]);

                case 3:
                  return new e(t[0], t[1], t[2]);

                case 4:
                  return new e(t[0], t[1], t[2], t[3]);
              }

              var r = [null];
              return r.push.apply(r, t), new (u.apply(e, r))();
            }

            var c = n.prototype,
                p = i(s(c) ? c : Object.prototype),
                h = Function.apply.call(e, p, t);
            return s(h) ? h : p;
          }
        });
      },
      1867: function _(e, t, n) {
        "use strict";

        var r = n(510)(!0);
        n(5700)(String, "String", function (e) {
          this._t = String(e), this._i = 0;
        }, function () {
          var e,
              t = this._t,
              n = this._i;
          return n >= t.length ? {
            value: void 0,
            done: !0
          } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
          });
        });
      },
      6840: function _(e, t, n) {
        "use strict";

        var r = n(3938),
            i = n(7069),
            o = n(9666),
            a = n(3856),
            s = n(7470),
            c = n(7177).KEY,
            u = n(7929),
            d = n(250),
            f = n(5378),
            l = n(5730),
            p = n(2939),
            h = n(5103),
            v = n(6347),
            m = n(337),
            g = n(1421),
            _ = n(2159),
            y = n(6727),
            b = n(6530),
            S = n(7932),
            C = n(3206),
            w = n(3101),
            k = n(526),
            x = n(4368),
            I = n(6183),
            R = n(8195),
            T = n(4743),
            E = n(6162),
            M = I.f,
            P = T.f,
            A = x.f,
            _O = r.Symbol,
            j = r.JSON,
            D = j && j.stringify,
            L = p("_hidden"),
            F = p("toPrimitive"),
            W = {}.propertyIsEnumerable,
            N = d("symbol-registry"),
            V = d("symbols"),
            U = d("op-symbols"),
            B = Object.prototype,
            q = "function" == typeof _O && !!R.f,
            G = r.QObject,
            z = !G || !G.prototype || !G.prototype.findChild,
            H = o && u(function () {
          return 7 != k(P({}, "a", {
            get: function get() {
              return P(this, "a", {
                value: 7
              }).a;
            }
          })).a;
        }) ? function (e, t, n) {
          var r = M(B, t);
          r && delete B[t], P(e, t, n), r && e !== B && P(B, t, r);
        } : P,
            J = function J(e) {
          var t = V[e] = k(_O.prototype);
          return t._k = e, t;
        },
            $ = q && "symbol" == _typeof(_O.iterator) ? function (e) {
          return "symbol" == _typeof(e);
        } : function (e) {
          return e instanceof _O;
        },
            K = function K(e, t, n) {
          return e === B && K(U, t, n), _(e), t = C(t, !0), _(n), i(V, t) ? (n.enumerable ? (i(e, L) && e[L][t] && (e[L][t] = !1), n = k(n, {
            enumerable: w(0, !1)
          })) : (i(e, L) || P(e, L, w(1, {})), e[L][t] = !0), H(e, t, n)) : P(e, t, n);
        },
            Y = function Y(e, t) {
          _(e);

          for (var n, r = m(t = S(t)), i = 0, o = r.length; o > i;) {
            K(e, n = r[i++], t[n]);
          }

          return e;
        },
            X = function X(e) {
          var t = W.call(this, e = C(e, !0));
          return !(this === B && i(V, e) && !i(U, e)) && (!(t || !i(this, e) || !i(V, e) || i(this, L) && this[L][e]) || t);
        },
            Z = function Z(e, t) {
          if (e = S(e), t = C(t, !0), e !== B || !i(V, t) || i(U, t)) {
            var n = M(e, t);
            return !n || !i(V, t) || i(e, L) && e[L][t] || (n.enumerable = !0), n;
          }
        },
            Q = function Q(e) {
          for (var t, n = A(S(e)), r = [], o = 0; n.length > o;) {
            i(V, t = n[o++]) || t == L || t == c || r.push(t);
          }

          return r;
        },
            ee = function ee(e) {
          for (var t, n = e === B, r = A(n ? U : S(e)), o = [], a = 0; r.length > a;) {
            !i(V, t = r[a++]) || n && !i(B, t) || o.push(V[t]);
          }

          return o;
        };

        q || (s((_O = function O() {
          if (this instanceof _O) throw TypeError("Symbol is not a constructor!");

          var e = l(arguments.length > 0 ? arguments[0] : void 0),
              t = function t(n) {
            this === B && t.call(U, n), i(this, L) && i(this[L], e) && (this[L][e] = !1), H(this, e, w(1, n));
          };

          return o && z && H(B, e, {
            configurable: !0,
            set: t
          }), J(e);
        }).prototype, "toString", function () {
          return this._k;
        }), I.f = Z, T.f = K, n(3230).f = x.f = Q, n(6274).f = X, R.f = ee, o && !n(6227) && s(B, "propertyIsEnumerable", X, !0), h.f = function (e) {
          return J(p(e));
        }), a(a.G + a.W + a.F * !q, {
          Symbol: _O
        });

        for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) {
          p(te[ne++]);
        }

        for (var re = E(p.store), ie = 0; re.length > ie;) {
          v(re[ie++]);
        }

        a(a.S + a.F * !q, "Symbol", {
          for: function _for(e) {
            return i(N, e += "") ? N[e] : N[e] = _O(e);
          },
          keyFor: function keyFor(e) {
            if (!$(e)) throw TypeError(e + " is not a symbol!");

            for (var t in N) {
              if (N[t] === e) return t;
            }
          },
          useSetter: function useSetter() {
            z = !0;
          },
          useSimple: function useSimple() {
            z = !1;
          }
        }), a(a.S + a.F * !q, "Object", {
          create: function create(e, t) {
            return void 0 === t ? k(e) : Y(k(e), t);
          },
          defineProperty: K,
          defineProperties: Y,
          getOwnPropertyDescriptor: Z,
          getOwnPropertyNames: Q,
          getOwnPropertySymbols: ee
        });
        var oe = u(function () {
          R.f(1);
        });
        a(a.S + a.F * oe, "Object", {
          getOwnPropertySymbols: function getOwnPropertySymbols(e) {
            return R.f(b(e));
          }
        }), j && a(a.S + a.F * (!q || u(function () {
          var e = _O();

          return "[null]" != D([e]) || "{}" != D({
            a: e
          }) || "{}" != D(Object(e));
        })), "JSON", {
          stringify: function stringify(e) {
            for (var t, n, r = [e], i = 1; arguments.length > i;) {
              r.push(arguments[i++]);
            }

            if (n = t = r[1], (y(t) || void 0 !== e) && !$(e)) return g(t) || (t = function t(e, _t3) {
              if ("function" == typeof n && (_t3 = n.call(this, e, _t3)), !$(_t3)) return _t3;
            }), r[1] = t, D.apply(j, r);
          }
        }), _O.prototype[F] || n(1818)(_O.prototype, F, _O.prototype.valueOf), f(_O, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0);
      },
      8174: function _(e, t, n) {
        n(6347)("asyncIterator");
      },
      6461: function _(e, t, n) {
        n(6347)("observable");
      },
      3871: function _(e, t, n) {
        n(3882);

        for (var r = n(3938), i = n(1818), o = n(5449), a = n(2939)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
          var u = s[c],
              d = r[u],
              f = d && d.prototype;
          f && !f[a] && i(f, a, u), o[u] = o.Array;
        }
      },
      7750: function _(e, t, n) {
        "use strict";

        n.r(t), n.d(t, {
          add: function add() {
            return w;
          },
          after: function after() {
            return L;
          },
          ary: function ary() {
            return tt;
          },
          assign: function assign() {
            return qt;
          },
          assignIn: function assignIn() {
            return Jt;
          },
          assignInWith: function assignInWith() {
            return $t;
          },
          assignWith: function assignWith() {
            return Kt;
          },
          at: function at() {
            return An;
          },
          attempt: function attempt() {
            return Un;
          },
          before: function before() {
            return Bn;
          },
          bind: function bind() {
            return Gn;
          },
          bindAll: function bindAll() {
            return zn;
          },
          bindKey: function bindKey() {
            return Jn;
          },
          camelCase: function camelCase() {
            return Br;
          },
          capitalize: function capitalize() {
            return fr;
          },
          castArray: function castArray() {
            return qr;
          },
          ceil: function ceil() {
            return Jr;
          },
          chain: function chain() {
            return $r;
          },
          chunk: function chunk() {
            return Xr;
          },
          clamp: function clamp() {
            return Qr;
          },
          clone: function clone() {
            return Ki;
          },
          cloneDeep: function cloneDeep() {
            return Yi;
          },
          cloneDeepWith: function cloneDeepWith() {
            return Xi;
          },
          cloneWith: function cloneWith() {
            return Zi;
          },
          commit: function commit() {
            return Qi;
          },
          compact: function compact() {
            return eo;
          },
          concat: function concat() {
            return to;
          },
          cond: function cond() {
            return Po;
          },
          conforms: function conforms() {
            return Oo;
          },
          conformsTo: function conformsTo() {
            return jo;
          },
          constant: function constant() {
            return Ae;
          },
          countBy: function countBy() {
            return Go;
          },
          create: function create() {
            return zo;
          },
          curry: function curry() {
            return Jo;
          },
          curryRight: function curryRight() {
            return Ko;
          },
          debounce: function debounce() {
            return Qo;
          },
          deburr: function deburr() {
            return gr;
          },
          default: function _default() {
            return Vp;
          },
          defaultTo: function defaultTo() {
            return ea;
          },
          defaults: function defaults() {
            return ra;
          },
          defaultsDeep: function defaultsDeep() {
            return fa;
          },
          defer: function defer() {
            return pa;
          },
          delay: function delay() {
            return ha;
          },
          difference: function difference() {
            return ga;
          },
          differenceBy: function differenceBy() {
            return ya;
          },
          differenceWith: function differenceWith() {
            return ba;
          },
          divide: function divide() {
            return Sa;
          },
          drop: function drop() {
            return Ca;
          },
          dropRight: function dropRight() {
            return wa;
          },
          dropRightWhile: function dropRightWhile() {
            return xa;
          },
          dropWhile: function dropWhile() {
            return Ia;
          },
          each: function each() {
            return Ta;
          },
          eachRight: function eachRight() {
            return Oa;
          },
          endsWith: function endsWith() {
            return ja;
          },
          entries: function entries() {
            return La;
          },
          entriesIn: function entriesIn() {
            return Fa;
          },
          eq: function eq() {
            return rt;
          },
          escape: function escape() {
            return Ua;
          },
          escapeRegExp: function escapeRegExp() {
            return Ga;
          },
          every: function every() {
            return Ja;
          },
          extend: function extend() {
            return Jt;
          },
          extendWith: function extendWith() {
            return $t;
          },
          fill: function fill() {
            return Ka;
          },
          filter: function filter() {
            return Xa;
          },
          find: function find() {
            return ts;
          },
          findIndex: function findIndex() {
            return es;
          },
          findKey: function findKey() {
            return rs;
          },
          findLast: function findLast() {
            return ss;
          },
          findLastIndex: function findLastIndex() {
            return as;
          },
          findLastKey: function findLastKey() {
            return cs;
          },
          first: function first() {
            return us;
          },
          flatMap: function flatMap() {
            return ls;
          },
          flatMapDeep: function flatMapDeep() {
            return ps;
          },
          flatMapDepth: function flatMapDepth() {
            return hs;
          },
          flatten: function flatten() {
            return Mn;
          },
          flattenDeep: function flattenDeep() {
            return vs;
          },
          flattenDepth: function flattenDepth() {
            return ms;
          },
          flip: function flip() {
            return gs;
          },
          floor: function floor() {
            return _s;
          },
          flow: function flow() {
            return bs;
          },
          flowRight: function flowRight() {
            return Ss;
          },
          forEach: function forEach() {
            return Ta;
          },
          forEachRight: function forEachRight() {
            return Oa;
          },
          forIn: function forIn() {
            return Cs;
          },
          forInRight: function forInRight() {
            return ws;
          },
          forOwn: function forOwn() {
            return ks;
          },
          forOwnRight: function forOwnRight() {
            return xs;
          },
          fromPairs: function fromPairs() {
            return Is;
          },
          functions: function functions() {
            return Ts;
          },
          functionsIn: function functionsIn() {
            return Es;
          },
          get: function get() {
            return kn;
          },
          groupBy: function groupBy() {
            return Ps;
          },
          gt: function gt() {
            return js;
          },
          gte: function gte() {
            return Ds;
          },
          has: function has() {
            return Ws;
          },
          hasIn: function hasIn() {
            return Io;
          },
          head: function head() {
            return us;
          },
          identity: function identity() {
            return F;
          },
          inRange: function inRange() {
            return Us;
          },
          includes: function includes() {
            return Hs;
          },
          indexOf: function indexOf() {
            return $s;
          },
          initial: function initial() {
            return Ks;
          },
          intersection: function intersection() {
            return Qs;
          },
          intersectionBy: function intersectionBy() {
            return ec;
          },
          intersectionWith: function intersectionWith() {
            return tc;
          },
          invert: function invert() {
            return ic;
          },
          invertBy: function invertBy() {
            return cc;
          },
          invoke: function invoke() {
            return fc;
          },
          invokeMap: function invokeMap() {
            return lc;
          },
          isArguments: function isArguments() {
            return St;
          },
          isArray: function isArray() {
            return _;
          },
          isArrayBuffer: function isArrayBuffer() {
            return hc;
          },
          isArrayLike: function isArrayLike() {
            return ft;
          },
          isArrayLikeObject: function isArrayLikeObject() {
            return oa;
          },
          isBoolean: function isBoolean() {
            return vc;
          },
          isBuffer: function isBuffer() {
            return It;
          },
          isDate: function isDate() {
            return gc;
          },
          isElement: function isElement() {
            return _c;
          },
          isEmpty: function isEmpty() {
            return bc;
          },
          isEqual: function isEqual() {
            return Sc;
          },
          isEqualWith: function isEqualWith() {
            return Cc;
          },
          isError: function isError() {
            return Vn;
          },
          isFinite: function isFinite() {
            return kc;
          },
          isFunction: function isFunction() {
            return W;
          },
          isInteger: function isInteger() {
            return xc;
          },
          isLength: function isLength() {
            return dt;
          },
          isMap: function isMap() {
            return Bi;
          },
          isMatch: function isMatch() {
            return Ic;
          },
          isMatchWith: function isMatchWith() {
            return Rc;
          },
          isNaN: function isNaN() {
            return Ec;
          },
          isNative: function isNative() {
            return Pc;
          },
          isNil: function isNil() {
            return Ac;
          },
          isNull: function isNull() {
            return Oc;
          },
          isNumber: function isNumber() {
            return Tc;
          },
          isObject: function isObject() {
            return T;
          },
          isObjectLike: function isObjectLike() {
            return h;
          },
          isPlainObject: function isPlainObject() {
            return Nn;
          },
          isRegExp: function isRegExp() {
            return Dc;
          },
          isSafeInteger: function isSafeInteger() {
            return Lc;
          },
          isSet: function isSet() {
            return Gi;
          },
          isString: function isString() {
            return Bs;
          },
          isSymbol: function isSymbol() {
            return v;
          },
          isTypedArray: function isTypedArray() {
            return jt;
          },
          isUndefined: function isUndefined() {
            return Fc;
          },
          isWeakMap: function isWeakMap() {
            return Wc;
          },
          isWeakSet: function isWeakSet() {
            return Nc;
          },
          iteratee: function iteratee() {
            return Vc;
          },
          join: function join() {
            return Bc;
          },
          kebabCase: function kebabCase() {
            return qc;
          },
          keyBy: function keyBy() {
            return Gc;
          },
          keys: function keys() {
            return Ut;
          },
          keysIn: function keysIn() {
            return Ht;
          },
          last: function last() {
            return _a;
          },
          lastIndexOf: function lastIndexOf() {
            return Jc;
          },
          lodash: function lodash() {
            return ke;
          },
          lowerCase: function lowerCase() {
            return $c;
          },
          lowerFirst: function lowerFirst() {
            return Kc;
          },
          lt: function lt() {
            return Xc;
          },
          lte: function lte() {
            return Zc;
          },
          map: function map() {
            return fs;
          },
          mapKeys: function mapKeys() {
            return Qc;
          },
          mapValues: function mapValues() {
            return eu;
          },
          matches: function matches() {
            return tu;
          },
          matchesProperty: function matchesProperty() {
            return nu;
          },
          max: function max() {
            return iu;
          },
          maxBy: function maxBy() {
            return ou;
          },
          mean: function mean() {
            return cu;
          },
          meanBy: function meanBy() {
            return uu;
          },
          memoize: function memoize() {
            return hn;
          },
          merge: function merge() {
            return du;
          },
          mergeWith: function mergeWith() {
            return da;
          },
          method: function method() {
            return fu;
          },
          methodOf: function methodOf() {
            return lu;
          },
          min: function min() {
            return pu;
          },
          minBy: function minBy() {
            return hu;
          },
          mixin: function mixin() {
            return vu;
          },
          multiply: function multiply() {
            return mu;
          },
          negate: function negate() {
            return gu;
          },
          next: function next() {
            return bu;
          },
          noop: function noop() {
            return pe;
          },
          now: function now() {
            return Yo;
          },
          nth: function nth() {
            return Cu;
          },
          nthArg: function nthArg() {
            return wu;
          },
          omit: function omit() {
            return Iu;
          },
          omitBy: function omitBy() {
            return Mu;
          },
          once: function once() {
            return Pu;
          },
          orderBy: function orderBy() {
            return ju;
          },
          over: function over() {
            return Lu;
          },
          overArgs: function overArgs() {
            return Nu;
          },
          overEvery: function overEvery() {
            return Vu;
          },
          overSome: function overSome() {
            return Uu;
          },
          pad: function pad() {
            return od;
          },
          padEnd: function padEnd() {
            return ad;
          },
          padStart: function padStart() {
            return sd;
          },
          parseInt: function parseInt() {
            return dd;
          },
          partial: function partial() {
            return ld;
          },
          partialRight: function partialRight() {
            return hd;
          },
          partition: function partition() {
            return vd;
          },
          pick: function pick() {
            return md;
          },
          pickBy: function pickBy() {
            return Eu;
          },
          plant: function plant() {
            return gd;
          },
          property: function property() {
            return Eo;
          },
          propertyOf: function propertyOf() {
            return _d;
          },
          pull: function pull() {
            return wd;
          },
          pullAll: function pullAll() {
            return Cd;
          },
          pullAllBy: function pullAllBy() {
            return kd;
          },
          pullAllWith: function pullAllWith() {
            return xd;
          },
          pullAt: function pullAt() {
            return Td;
          },
          random: function random() {
            return Dd;
          },
          range: function range() {
            return Nd;
          },
          rangeRight: function rangeRight() {
            return Vd;
          },
          rearg: function rearg() {
            return Ud;
          },
          reduce: function reduce() {
            return qd;
          },
          reduceRight: function reduceRight() {
            return zd;
          },
          reject: function reject() {
            return Hd;
          },
          remove: function remove() {
            return Jd;
          },
          repeat: function repeat() {
            return $d;
          },
          replace: function replace() {
            return Kd;
          },
          rest: function rest() {
            return Yd;
          },
          result: function result() {
            return Xd;
          },
          reverse: function reverse() {
            return Qd;
          },
          round: function round() {
            return ef;
          },
          sample: function sample() {
            return rf;
          },
          sampleSize: function sampleSize() {
            return cf;
          },
          set: function set() {
            return uf;
          },
          setWith: function setWith() {
            return df;
          },
          shuffle: function shuffle() {
            return pf;
          },
          size: function size() {
            return hf;
          },
          slice: function slice() {
            return vf;
          },
          snakeCase: function snakeCase() {
            return mf;
          },
          some: function some() {
            return _f;
          },
          sortBy: function sortBy() {
            return yf;
          },
          sortedIndex: function sortedIndex() {
            return kf;
          },
          sortedIndexBy: function sortedIndexBy() {
            return xf;
          },
          sortedIndexOf: function sortedIndexOf() {
            return If;
          },
          sortedLastIndex: function sortedLastIndex() {
            return Rf;
          },
          sortedLastIndexBy: function sortedLastIndexBy() {
            return Tf;
          },
          sortedLastIndexOf: function sortedLastIndexOf() {
            return Ef;
          },
          sortedUniq: function sortedUniq() {
            return Pf;
          },
          sortedUniqBy: function sortedUniqBy() {
            return Af;
          },
          split: function split() {
            return Of;
          },
          spread: function spread() {
            return Df;
          },
          startCase: function startCase() {
            return Lf;
          },
          startsWith: function startsWith() {
            return Ff;
          },
          stubArray: function stubArray() {
            return ui;
          },
          stubFalse: function stubFalse() {
            return Ct;
          },
          stubObject: function stubObject() {
            return Wf;
          },
          stubString: function stubString() {
            return Nf;
          },
          stubTrue: function stubTrue() {
            return Vf;
          },
          subtract: function subtract() {
            return Uf;
          },
          sum: function sum() {
            return Bf;
          },
          sumBy: function sumBy() {
            return qf;
          },
          tail: function tail() {
            return Gf;
          },
          take: function take() {
            return zf;
          },
          takeRight: function takeRight() {
            return Hf;
          },
          takeRightWhile: function takeRightWhile() {
            return Jf;
          },
          takeWhile: function takeWhile() {
            return $f;
          },
          tap: function tap() {
            return Kf;
          },
          template: function template() {
            return fl;
          },
          templateSettings: function templateSettings() {
            return nl;
          },
          throttle: function throttle() {
            return ll;
          },
          thru: function thru() {
            return pl;
          },
          times: function times() {
            return ml;
          },
          toArray: function toArray() {
            return yu;
          },
          toFinite: function toFinite() {
            return j;
          },
          toInteger: function toInteger() {
            return D;
          },
          toIterator: function toIterator() {
            return gl;
          },
          toJSON: function toJSON() {
            return yl;
          },
          toLength: function toLength() {
            return $a;
          },
          toLower: function toLower() {
            return bl;
          },
          toNumber: function toNumber() {
            return O;
          },
          toPairs: function toPairs() {
            return La;
          },
          toPairsIn: function toPairsIn() {
            return Fa;
          },
          toPath: function toPath() {
            return Sl;
          },
          toPlainObject: function toPlainObject() {
            return sa;
          },
          toSafeInteger: function toSafeInteger() {
            return Cl;
          },
          toString: function toString() {
            return bn;
          },
          toUpper: function toUpper() {
            return wl;
          },
          transform: function transform() {
            return kl;
          },
          trim: function trim() {
            return Rl;
          },
          trimEnd: function trimEnd() {
            return Tl;
          },
          trimStart: function trimStart() {
            return Ml;
          },
          truncate: function truncate() {
            return Al;
          },
          unary: function unary() {
            return Ol;
          },
          unescape: function unescape() {
            return Fl;
          },
          union: function union() {
            return Vl;
          },
          unionBy: function unionBy() {
            return Ul;
          },
          unionWith: function unionWith() {
            return Bl;
          },
          uniq: function uniq() {
            return ql;
          },
          uniqBy: function uniqBy() {
            return Gl;
          },
          uniqWith: function uniqWith() {
            return zl;
          },
          uniqueId: function uniqueId() {
            return Jl;
          },
          unset: function unset() {
            return $l;
          },
          unzip: function unzip() {
            return Yl;
          },
          unzipWith: function unzipWith() {
            return Xl;
          },
          update: function update() {
            return Ql;
          },
          updateWith: function updateWith() {
            return ep;
          },
          upperCase: function upperCase() {
            return tp;
          },
          upperFirst: function upperFirst() {
            return dr;
          },
          value: function value() {
            return yl;
          },
          valueOf: function valueOf() {
            return yl;
          },
          values: function values() {
            return Gs;
          },
          valuesIn: function valuesIn() {
            return np;
          },
          without: function without() {
            return rp;
          },
          words: function words() {
            return Nr;
          },
          wrap: function wrap() {
            return ip;
          },
          wrapperAt: function wrapperAt() {
            return op;
          },
          wrapperChain: function wrapperChain() {
            return ap;
          },
          wrapperCommit: function wrapperCommit() {
            return Qi;
          },
          wrapperLodash: function wrapperLodash() {
            return ke;
          },
          wrapperNext: function wrapperNext() {
            return bu;
          },
          wrapperPlant: function wrapperPlant() {
            return gd;
          },
          wrapperReverse: function wrapperReverse() {
            return sp;
          },
          wrapperToIterator: function wrapperToIterator() {
            return gl;
          },
          wrapperValue: function wrapperValue() {
            return yl;
          },
          xor: function xor() {
            return up;
          },
          xorBy: function xorBy() {
            return dp;
          },
          xorWith: function xorWith() {
            return fp;
          },
          zip: function zip() {
            return lp;
          },
          zipObject: function zipObject() {
            return hp;
          },
          zipObjectDeep: function zipObjectDeep() {
            return vp;
          },
          zipWith: function zipWith() {
            return mp;
          }
        });
        var r = "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global && global.Object === Object && global;
        var i = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self;
        var o = r || i || Function("return this")(),
            a = o.Symbol;
        var s = Object.prototype,
            c = s.hasOwnProperty,
            u = s.toString,
            d = a ? a.toStringTag : void 0;
        var f = Object.prototype.toString;
        var l = a ? a.toStringTag : void 0;

        var p = function p(e) {
          return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : l && l in Object(e) ? function (e) {
            var t = c.call(e, d),
                n = e[d];

            try {
              e[d] = void 0;
              var r = !0;
            } catch (e) {}

            var i = u.call(e);
            return r && (t ? e[d] = n : delete e[d]), i;
          }(e) : function (e) {
            return f.call(e);
          }(e);
        },
            h = function h(e) {
          return null != e && "object" == _typeof(e);
        },
            v = function v(e) {
          return "symbol" == _typeof(e) || h(e) && "[object Symbol]" == p(e);
        },
            m = function m(e) {
          return "number" == typeof e ? e : v(e) ? NaN : +e;
        },
            g = function g(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) {
            i[n] = t(e[n], n, e);
          }

          return i;
        },
            _ = Array.isArray;

        var y = a ? a.prototype : void 0,
            b = y ? y.toString : void 0;

        var S = function e(t) {
          if ("string" == typeof t) return t;
          if (_(t)) return g(t, e) + "";
          if (v(t)) return b ? b.call(t) : "";
          var n = t + "";
          return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
        },
            C = function C(e, t) {
          return function (n, r) {
            var i;
            if (void 0 === n && void 0 === r) return t;

            if (void 0 !== n && (i = n), void 0 !== r) {
              if (void 0 === i) return r;
              "string" == typeof n || "string" == typeof r ? (n = S(n), r = S(r)) : (n = m(n), r = m(r)), i = e(n, r);
            }

            return i;
          };
        },
            w = C(function (e, t) {
          return e + t;
        }, 0);

        var k = /\s/;

        var x = function x(e) {
          for (var t = e.length; t-- && k.test(e.charAt(t));) {
            ;
          }

          return t;
        };

        var I = /^\s+/;

        var R = function R(e) {
          return e ? e.slice(0, x(e) + 1).replace(I, "") : e;
        },
            T = function T(e) {
          var t = _typeof(e);

          return null != e && ("object" == t || "function" == t);
        };

        var E = /^[-+]0x[0-9a-f]+$/i,
            M = /^0b[01]+$/i,
            P = /^0o[0-7]+$/i,
            A = parseInt;

        var O = function O(e) {
          if ("number" == typeof e) return e;
          if (v(e)) return NaN;

          if (T(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = T(t) ? t + "" : t;
          }

          if ("string" != typeof e) return 0 === e ? e : +e;
          e = R(e);
          var n = M.test(e);
          return n || P.test(e) ? A(e.slice(2), n ? 2 : 8) : E.test(e) ? NaN : +e;
        };

        var j = function j(e) {
          return e ? Infinity === (e = O(e)) || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0;
        },
            D = function D(e) {
          var t = j(e),
              n = t % 1;
          return t == t ? n ? t - n : t : 0;
        },
            L = function L(e, t) {
          if ("function" != typeof t) throw new TypeError("Expected a function");
          return e = D(e), function () {
            if (--e < 1) return t.apply(this, arguments);
          };
        },
            F = function F(e) {
          return e;
        },
            W = function W(e) {
          if (!T(e)) return !1;
          var t = p(e);
          return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
        },
            N = o["__core-js_shared__"];

        var V,
            U = (V = /[^.]+$/.exec(N && N.keys && N.keys.IE_PROTO || "")) ? "Symbol(src)_1." + V : "";
        var B = Function.prototype.toString;

        var q = function q(e) {
          if (null != e) {
            try {
              return B.call(e);
            } catch (e) {}

            try {
              return e + "";
            } catch (e) {}
          }

          return "";
        };

        var G = /^\[object .+?Constructor\]$/,
            z = Function.prototype,
            H = Object.prototype,
            J = z.toString,
            $ = H.hasOwnProperty,
            K = RegExp("^" + J.call($).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        var Y = function Y(e) {
          return !(!T(e) || function (e) {
            return !!U && U in e;
          }(e)) && (W(e) ? K : G).test(q(e));
        },
            X = function X(e, t) {
          var n = function (e, t) {
            return null == e ? void 0 : e[t];
          }(e, t);

          return Y(n) ? n : void 0;
        },
            Z = X(o, "WeakMap"),
            Q = Z && new Z(),
            ee = Q ? function (e, t) {
          return Q.set(e, t), e;
        } : F;

        var te = Object.create;

        var ne = function () {
          function e() {}

          return function (t) {
            if (!T(t)) return {};
            if (te) return te(t);
            e.prototype = t;
            var n = new e();
            return e.prototype = void 0, n;
          };
        }(),
            re = function re(e) {
          return function () {
            var t = arguments;

            switch (t.length) {
              case 0:
                return new e();

              case 1:
                return new e(t[0]);

              case 2:
                return new e(t[0], t[1]);

              case 3:
                return new e(t[0], t[1], t[2]);

              case 4:
                return new e(t[0], t[1], t[2], t[3]);

              case 5:
                return new e(t[0], t[1], t[2], t[3], t[4]);

              case 6:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);

              case 7:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
            }

            var n = ne(e.prototype),
                r = e.apply(n, t);
            return T(r) ? r : n;
          };
        },
            ie = function ie(e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);

            case 1:
              return e.call(t, n[0]);

            case 2:
              return e.call(t, n[0], n[1]);

            case 3:
              return e.call(t, n[0], n[1], n[2]);
          }

          return e.apply(t, n);
        };

        var oe = Math.max;

        var ae = function ae(e, t, n, r) {
          for (var i = -1, o = e.length, a = n.length, s = -1, c = t.length, u = oe(o - a, 0), d = Array(c + u), f = !r; ++s < c;) {
            d[s] = t[s];
          }

          for (; ++i < a;) {
            (f || i < o) && (d[n[i]] = e[i]);
          }

          for (; u--;) {
            d[s++] = e[i++];
          }

          return d;
        };

        var se = Math.max;

        var ce = function ce(e, t, n, r) {
          for (var i = -1, o = e.length, a = -1, s = n.length, c = -1, u = t.length, d = se(o - s, 0), f = Array(d + u), l = !r; ++i < d;) {
            f[i] = e[i];
          }

          for (var p = i; ++c < u;) {
            f[p + c] = t[c];
          }

          for (; ++a < s;) {
            (l || i < o) && (f[p + n[a]] = e[i++]);
          }

          return f;
        },
            ue = function ue(e, t) {
          for (var n = e.length, r = 0; n--;) {
            e[n] === t && ++r;
          }

          return r;
        },
            de = function de() {};

        function fe(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
        }

        fe.prototype = ne(de.prototype), fe.prototype.constructor = fe;

        var le = fe,
            pe = function pe() {},
            he = Q ? function (e) {
          return Q.get(e);
        } : pe,
            ve = {};

        var me = Object.prototype.hasOwnProperty;

        var ge = function ge(e) {
          for (var t = e.name + "", n = ve[t], r = me.call(ve, t) ? n.length : 0; r--;) {
            var i = n[r],
                o = i.func;
            if (null == o || o == e) return i.name;
          }

          return t;
        };

        function _e(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0;
        }

        _e.prototype = ne(de.prototype), _e.prototype.constructor = _e;

        var ye = _e,
            be = function be(e, t) {
          var n = -1,
              r = e.length;

          for (t || (t = Array(r)); ++n < r;) {
            t[n] = e[n];
          }

          return t;
        },
            Se = function Se(e) {
          if (e instanceof le) return e.clone();
          var t = new ye(e.__wrapped__, e.__chain__);
          return t.__actions__ = be(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        };

        var Ce = Object.prototype.hasOwnProperty;

        function we(e) {
          if (h(e) && !_(e) && !(e instanceof le)) {
            if (e instanceof ye) return e;
            if (Ce.call(e, "__wrapped__")) return Se(e);
          }

          return new ye(e);
        }

        we.prototype = de.prototype, we.prototype.constructor = we;

        var ke = we,
            xe = function xe(e) {
          var t = ge(e),
              n = ke[t];
          if ("function" != typeof n || !(t in le.prototype)) return !1;
          if (e === n) return !0;
          var r = he(n);
          return !!r && e === r[0];
        };

        var Ie = Date.now;

        var Re = function Re(e) {
          var t = 0,
              n = 0;
          return function () {
            var r = Ie(),
                i = 16 - (r - n);

            if (n = r, i > 0) {
              if (++t >= 800) return arguments[0];
            } else t = 0;

            return e.apply(void 0, arguments);
          };
        },
            Te = Re(ee);

        var Ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
            Me = /,? & /;
        var Pe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

        var Ae = function Ae(e) {
          return function () {
            return e;
          };
        },
            Oe = function () {
          try {
            var e = X(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        }(),
            je = Re(Oe ? function (e, t) {
          return Oe(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Ae(t),
            writable: !0
          });
        } : F),
            De = function De(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e);) {
            ;
          }

          return e;
        },
            Le = function Le(e, t, n, r) {
          for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) {
            if (t(e[o], o, e)) return o;
          }

          return -1;
        },
            Fe = function Fe(e) {
          return e != e;
        },
            We = function We(e, t, n) {
          return t == t ? function (e, t, n) {
            for (var r = n - 1, i = e.length; ++r < i;) {
              if (e[r] === t) return r;
            }

            return -1;
          }(e, t, n) : Le(e, Fe, n);
        },
            Ne = function Ne(e, t) {
          return !(null == e || !e.length) && We(e, t, 0) > -1;
        };

        var Ve = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]];

        var Ue = function Ue(e, t, n) {
          var r = t + "";
          return je(e, function (e, t) {
            var n = t.length;
            if (!n) return e;
            var r = n - 1;
            return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(Pe, "{\n/* [wrapped with " + t + "] */\n");
          }(r, function (e, t) {
            return De(Ve, function (n) {
              var r = "_." + n[0];
              t & n[1] && !Ne(e, r) && e.push(r);
            }), e.sort();
          }(function (e) {
            var t = e.match(Ee);
            return t ? t[1].split(Me) : [];
          }(r), n)));
        },
            Be = function Be(e, t, n, r, i, o, a, s, c, u) {
          var d = 8 & t;
          t |= d ? 32 : 64, 4 & (t &= ~(d ? 64 : 32)) || (t &= -4);
          var f = [e, t, i, d ? o : void 0, d ? a : void 0, d ? void 0 : o, d ? void 0 : a, s, c, u],
              l = n.apply(void 0, f);
          return xe(e) && Te(l, f), l.placeholder = r, Ue(l, e, t);
        },
            qe = function qe(e) {
          return e.placeholder;
        };

        var Ge = /^(?:0|[1-9]\d*)$/;

        var ze = function ze(e, t) {
          var n = _typeof(e);

          return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && Ge.test(e)) && e > -1 && e % 1 == 0 && e < t;
        };

        var He = Math.min;

        var Je = function Je(e, t) {
          for (var n = e.length, r = He(t.length, n), i = be(e); r--;) {
            var o = t[r];
            e[r] = ze(o, n) ? i[o] : void 0;
          }

          return e;
        };

        var $e = "__lodash_placeholder__";

        var Ke = function Ke(e, t) {
          for (var n = -1, r = e.length, i = 0, o = []; ++n < r;) {
            var a = e[n];
            a !== t && a !== $e || (e[n] = $e, o[i++] = n);
          }

          return o;
        },
            Ye = function e(t, n, r, i, a, s, c, u, d, f) {
          var l = 128 & n,
              p = 1 & n,
              h = 2 & n,
              v = 24 & n,
              m = 512 & n,
              g = h ? void 0 : re(t);
          return function _() {
            for (var y = arguments.length, b = Array(y), S = y; S--;) {
              b[S] = arguments[S];
            }

            if (v) var C = qe(_),
                w = ue(b, C);

            if (i && (b = ae(b, i, a, v)), s && (b = ce(b, s, c, v)), y -= w, v && y < f) {
              var k = Ke(b, C);
              return Be(t, n, e, _.placeholder, r, b, k, u, d, f - y);
            }

            var x = p ? r : this,
                I = h ? x[t] : t;
            return y = b.length, u ? b = Je(b, u) : m && y > 1 && b.reverse(), l && d < y && (b.length = d), this && this !== o && this instanceof _ && (I = g || re(I)), I.apply(x, b);
          };
        };

        var Xe = "__lodash_placeholder__",
            Ze = Math.min;
        var Qe = Math.max;

        var et = function et(e, t, n, r, i, a, s, c) {
          var u = 2 & t;
          if (!u && "function" != typeof e) throw new TypeError("Expected a function");
          var d = r ? r.length : 0;

          if (d || (t &= -97, r = i = void 0), s = void 0 === s ? s : Qe(D(s), 0), c = void 0 === c ? c : D(c), d -= i ? i.length : 0, 64 & t) {
            var f = r,
                l = i;
            r = i = void 0;
          }

          var p = u ? void 0 : he(e),
              h = [e, t, n, r, i, f, l, a, s, c];
          if (p && function (e, t) {
            var n = e[1],
                r = t[1],
                i = n | r,
                o = i < 131,
                a = 128 == r && 8 == n || 128 == r && 256 == n && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == n;
            if (!o && !a) return e;
            1 & r && (e[2] = t[2], i |= 1 & n ? 0 : 4);
            var s = t[3];

            if (s) {
              var c = e[3];
              e[3] = c ? ae(c, s, t[4]) : s, e[4] = c ? Ke(e[3], Xe) : t[4];
            }

            (s = t[5]) && (c = e[5], e[5] = c ? ce(c, s, t[6]) : s, e[6] = c ? Ke(e[5], Xe) : t[6]), (s = t[7]) && (e[7] = s), 128 & r && (e[8] = null == e[8] ? t[8] : Ze(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i;
          }(h, p), e = h[0], t = h[1], n = h[2], r = h[3], i = h[4], !(c = h[9] = void 0 === h[9] ? u ? 0 : e.length : Qe(h[9] - d, 0)) && 24 & t && (t &= -25), t && 1 != t) v = 8 == t || 16 == t ? function (e, t, n) {
            var r = re(e);
            return function i() {
              for (var a = arguments.length, s = Array(a), c = a, u = qe(i); c--;) {
                s[c] = arguments[c];
              }

              var d = a < 3 && s[0] !== u && s[a - 1] !== u ? [] : Ke(s, u);
              return (a -= d.length) < n ? Be(e, t, Ye, i.placeholder, void 0, s, d, void 0, void 0, n - a) : ie(this && this !== o && this instanceof i ? r : e, this, s);
            };
          }(e, t, c) : 32 != t && 33 != t || i.length ? Ye.apply(void 0, h) : function (e, t, n, r) {
            var i = 1 & t,
                a = re(e);
            return function t() {
              for (var s = -1, c = arguments.length, u = -1, d = r.length, f = Array(d + c), l = this && this !== o && this instanceof t ? a : e; ++u < d;) {
                f[u] = r[u];
              }

              for (; c--;) {
                f[u++] = arguments[++s];
              }

              return ie(l, i ? n : this, f);
            };
          }(e, t, n, r);else var v = function (e, t, n) {
            var r = 1 & t,
                i = re(e);
            return function t() {
              return (this && this !== o && this instanceof t ? i : e).apply(r ? n : this, arguments);
            };
          }(e, t, n);
          return Ue((p ? ee : Te)(v, h), e, t);
        },
            tt = function tt(e, t, n) {
          return t = n ? void 0 : t, t = e && null == t ? e.length : t, et(e, 128, void 0, void 0, void 0, void 0, t);
        },
            nt = function nt(e, t, n) {
          "__proto__" == t && Oe ? Oe(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
          }) : e[t] = n;
        },
            rt = function rt(e, t) {
          return e === t || e != e && t != t;
        };

        var it = Object.prototype.hasOwnProperty;

        var ot = function ot(e, t, n) {
          var r = e[t];
          it.call(e, t) && rt(r, n) && (void 0 !== n || t in e) || nt(e, t, n);
        },
            at = function at(e, t, n, r) {
          var i = !n;
          n || (n = {});

          for (var o = -1, a = t.length; ++o < a;) {
            var s = t[o],
                c = r ? r(n[s], e[s], s, n, e) : void 0;
            void 0 === c && (c = e[s]), i ? nt(n, s, c) : ot(n, s, c);
          }

          return n;
        };

        var st = Math.max;

        var ct = function ct(e, t, n) {
          return t = st(void 0 === t ? e.length - 1 : t, 0), function () {
            for (var r = arguments, i = -1, o = st(r.length - t, 0), a = Array(o); ++i < o;) {
              a[i] = r[t + i];
            }

            i = -1;

            for (var s = Array(t + 1); ++i < t;) {
              s[i] = r[i];
            }

            return s[t] = n(a), ie(e, this, s);
          };
        },
            ut = function ut(e, t) {
          return je(ct(e, t, F), e + "");
        },
            dt = function dt(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
        },
            ft = function ft(e) {
          return null != e && dt(e.length) && !W(e);
        },
            lt = function lt(e, t, n) {
          if (!T(n)) return !1;

          var r = _typeof(t);

          return !!("number" == r ? ft(n) && ze(t, n.length) : "string" == r && t in n) && rt(n[t], e);
        },
            pt = function pt(e) {
          return ut(function (t, n) {
            var r = -1,
                i = n.length,
                o = i > 1 ? n[i - 1] : void 0,
                a = i > 2 ? n[2] : void 0;

            for (o = e.length > 3 && "function" == typeof o ? (i--, o) : void 0, a && lt(n[0], n[1], a) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++r < i;) {
              var s = n[r];
              s && e(t, s, r, o);
            }

            return t;
          });
        };

        var ht = Object.prototype;

        var vt = function vt(e) {
          var t = e && e.constructor;
          return e === ("function" == typeof t && t.prototype || ht);
        },
            mt = function mt(e, t) {
          for (var n = -1, r = Array(e); ++n < e;) {
            r[n] = t(n);
          }

          return r;
        },
            gt = function gt(e) {
          return h(e) && "[object Arguments]" == p(e);
        };

        var _t = Object.prototype,
            yt = _t.hasOwnProperty,
            bt = _t.propertyIsEnumerable;

        var St = gt(function () {
          return arguments;
        }()) ? gt : function (e) {
          return h(e) && yt.call(e, "callee") && !bt.call(e, "callee");
        },
            Ct = function Ct() {
          return !1;
        };

        var wt = "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports,
            kt = wt && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module && !module.nodeType && module,
            xt = kt && kt.exports === wt ? o.Buffer : void 0;
        var It = (xt ? xt.isBuffer : void 0) || Ct;
        var Rt = {};
        Rt["[object Float32Array]"] = Rt["[object Float64Array]"] = Rt["[object Int8Array]"] = Rt["[object Int16Array]"] = Rt["[object Int32Array]"] = Rt["[object Uint8Array]"] = Rt["[object Uint8ClampedArray]"] = Rt["[object Uint16Array]"] = Rt["[object Uint32Array]"] = !0, Rt["[object Arguments]"] = Rt["[object Array]"] = Rt["[object ArrayBuffer]"] = Rt["[object Boolean]"] = Rt["[object DataView]"] = Rt["[object Date]"] = Rt["[object Error]"] = Rt["[object Function]"] = Rt["[object Map]"] = Rt["[object Number]"] = Rt["[object Object]"] = Rt["[object RegExp]"] = Rt["[object Set]"] = Rt["[object String]"] = Rt["[object WeakMap]"] = !1;

        var Tt = function Tt(e) {
          return function (t) {
            return e(t);
          };
        };

        var Et = "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports,
            Mt = Et && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module && !module.nodeType && module,
            Pt = Mt && Mt.exports === Et && r.process;

        var At = function () {
          try {
            return Mt && Mt.require && Mt.require("util").types || Pt && Pt.binding && Pt.binding("util");
          } catch (e) {}
        }();

        var Ot = At && At.isTypedArray;
        var jt = Ot ? Tt(Ot) : function (e) {
          return h(e) && dt(e.length) && !!Rt[p(e)];
        };
        var Dt = Object.prototype.hasOwnProperty;

        var Lt = function Lt(e, t) {
          var n = _(e),
              r = !n && St(e),
              i = !n && !r && It(e),
              o = !n && !r && !i && jt(e),
              a = n || r || i || o,
              s = a ? mt(e.length, String) : [],
              c = s.length;

          for (var u in e) {
            !t && !Dt.call(e, u) || a && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ze(u, c)) || s.push(u);
          }

          return s;
        },
            Ft = function Ft(e, t) {
          return function (n) {
            return e(t(n));
          };
        },
            Wt = Ft(Object.keys, Object);

        var Nt = Object.prototype.hasOwnProperty;

        var Vt = function Vt(e) {
          if (!vt(e)) return Wt(e);
          var t = [];

          for (var n in Object(e)) {
            Nt.call(e, n) && "constructor" != n && t.push(n);
          }

          return t;
        },
            Ut = function Ut(e) {
          return ft(e) ? Lt(e) : Vt(e);
        };

        var Bt = Object.prototype.hasOwnProperty;
        var qt = pt(function (e, t) {
          if (vt(t) || ft(t)) at(t, Ut(t), e);else for (var n in t) {
            Bt.call(t, n) && ot(e, n, t[n]);
          }
        });
        var Gt = Object.prototype.hasOwnProperty;

        var zt = function zt(e) {
          if (!T(e)) return function (e) {
            var t = [];
            if (null != e) for (var n in Object(e)) {
              t.push(n);
            }
            return t;
          }(e);
          var t = vt(e),
              n = [];

          for (var r in e) {
            ("constructor" != r || !t && Gt.call(e, r)) && n.push(r);
          }

          return n;
        },
            Ht = function Ht(e) {
          return ft(e) ? Lt(e, !0) : zt(e);
        },
            Jt = pt(function (e, t) {
          at(t, Ht(t), e);
        }),
            $t = pt(function (e, t, n, r) {
          at(t, Ht(t), e, r);
        }),
            Kt = pt(function (e, t, n, r) {
          at(t, Ut(t), e, r);
        });

        var Yt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Xt = /^\w*$/;

        var Zt = function Zt(e, t) {
          if (_(e)) return !1;

          var n = _typeof(e);

          return !("number" != n && "symbol" != n && "boolean" != n && null != e && !v(e)) || Xt.test(e) || !Yt.test(e) || null != t && e in Object(t);
        },
            Qt = X(Object, "create");

        var en = Object.prototype.hasOwnProperty;
        var tn = Object.prototype.hasOwnProperty;

        function nn(e) {
          var t = -1,
              n = null == e ? 0 : e.length;

          for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }

        nn.prototype.clear = function () {
          this.__data__ = Qt ? Qt(null) : {}, this.size = 0;
        }, nn.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }, nn.prototype.get = function (e) {
          var t = this.__data__;

          if (Qt) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }

          return en.call(t, e) ? t[e] : void 0;
        }, nn.prototype.has = function (e) {
          var t = this.__data__;
          return Qt ? void 0 !== t[e] : tn.call(t, e);
        }, nn.prototype.set = function (e, t) {
          var n = this.__data__;
          return this.size += this.has(e) ? 0 : 1, n[e] = Qt && void 0 === t ? "__lodash_hash_undefined__" : t, this;
        };

        var rn = nn,
            on = function on(e, t) {
          for (var n = e.length; n--;) {
            if (rt(e[n][0], t)) return n;
          }

          return -1;
        };

        var an = Array.prototype.splice;

        function sn(e) {
          var t = -1,
              n = null == e ? 0 : e.length;

          for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }

        sn.prototype.clear = function () {
          this.__data__ = [], this.size = 0;
        }, sn.prototype.delete = function (e) {
          var t = this.__data__,
              n = on(t, e);
          return !(n < 0 || (n == t.length - 1 ? t.pop() : an.call(t, n, 1), --this.size, 0));
        }, sn.prototype.get = function (e) {
          var t = this.__data__,
              n = on(t, e);
          return n < 0 ? void 0 : t[n][1];
        }, sn.prototype.has = function (e) {
          return on(this.__data__, e) > -1;
        }, sn.prototype.set = function (e, t) {
          var n = this.__data__,
              r = on(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
        };

        var cn = sn,
            un = X(o, "Map"),
            dn = function dn(e, t) {
          var n,
              r,
              i = e.__data__;
          return ("string" == (r = _typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map;
        };

        function fn(e) {
          var t = -1,
              n = null == e ? 0 : e.length;

          for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }

        fn.prototype.clear = function () {
          this.size = 0, this.__data__ = {
            hash: new rn(),
            map: new (un || cn)(),
            string: new rn()
          };
        }, fn.prototype.delete = function (e) {
          var t = dn(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }, fn.prototype.get = function (e) {
          return dn(this, e).get(e);
        }, fn.prototype.has = function (e) {
          return dn(this, e).has(e);
        }, fn.prototype.set = function (e, t) {
          var n = dn(this, e),
              r = n.size;
          return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
        };
        var ln = fn;

        function pn(e, t) {
          if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");

          var n = function n() {
            var r = arguments,
                i = t ? t.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = e.apply(this, r);
            return n.cache = o.set(i, a) || o, a;
          };

          return n.cache = new (pn.Cache || ln)(), n;
        }

        pn.Cache = ln;
        var hn = pn;
        var vn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            mn = /\\(\\)?/g;
        var gn = (_n = hn(function (e) {
          var t = [];
          return 46 === e.charCodeAt(0) && t.push(""), e.replace(vn, function (e, n, r, i) {
            t.push(r ? i.replace(mn, "$1") : n || e);
          }), t;
        }, function (e) {
          return 500 === yn.size && yn.clear(), e;
        }), yn = _n.cache, _n);

        var _n, yn;

        var bn = function bn(e) {
          return null == e ? "" : S(e);
        },
            Sn = function Sn(e, t) {
          return _(e) ? e : Zt(e, t) ? [e] : gn(bn(e));
        },
            Cn = function Cn(e) {
          if ("string" == typeof e || v(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
        },
            wn = function wn(e, t) {
          for (var n = 0, r = (t = Sn(t, e)).length; null != e && n < r;) {
            e = e[Cn(t[n++])];
          }

          return n && n == r ? e : void 0;
        },
            kn = function kn(e, t, n) {
          var r = null == e ? void 0 : wn(e, t);
          return void 0 === r ? n : r;
        },
            xn = function xn(e, t) {
          for (var n = -1, r = t.length, i = Array(r), o = null == e; ++n < r;) {
            i[n] = o ? void 0 : kn(e, t[n]);
          }

          return i;
        },
            In = function In(e, t) {
          for (var n = -1, r = t.length, i = e.length; ++n < r;) {
            e[i + n] = t[n];
          }

          return e;
        };

        var Rn = a ? a.isConcatSpreadable : void 0;

        var Tn = function Tn(e) {
          return _(e) || St(e) || !!(Rn && e && e[Rn]);
        },
            En = function e(t, n, r, i, o) {
          var a = -1,
              s = t.length;

          for (r || (r = Tn), o || (o = []); ++a < s;) {
            var c = t[a];
            n > 0 && r(c) ? n > 1 ? e(c, n - 1, r, i, o) : In(o, c) : i || (o[o.length] = c);
          }

          return o;
        },
            Mn = function Mn(e) {
          return null != e && e.length ? En(e, 1) : [];
        },
            Pn = function Pn(e) {
          return je(ct(e, void 0, Mn), e + "");
        },
            An = Pn(xn),
            On = Ft(Object.getPrototypeOf, Object);

        var jn = Function.prototype,
            Dn = Object.prototype,
            Ln = jn.toString,
            Fn = Dn.hasOwnProperty,
            Wn = Ln.call(Object);

        var Nn = function Nn(e) {
          if (!h(e) || "[object Object]" != p(e)) return !1;
          var t = On(e);
          if (null === t) return !0;
          var n = Fn.call(t, "constructor") && t.constructor;
          return "function" == typeof n && n instanceof n && Ln.call(n) == Wn;
        },
            Vn = function Vn(e) {
          if (!h(e)) return !1;
          var t = p(e);
          return "[object Error]" == t || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !Nn(e);
        },
            Un = ut(function (e, t) {
          try {
            return ie(e, void 0, t);
          } catch (e) {
            return Vn(e) ? e : new Error(e);
          }
        }),
            Bn = function Bn(e, t) {
          var n;
          if ("function" != typeof t) throw new TypeError("Expected a function");
          return e = D(e), function () {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n;
          };
        };

        var qn = ut(function (e, t, n) {
          var r = 1;

          if (n.length) {
            var i = Ke(n, qe(qn));
            r |= 32;
          }

          return et(e, r, t, n, i);
        });
        qn.placeholder = {};
        var Gn = qn,
            zn = Pn(function (e, t) {
          return De(t, function (t) {
            t = Cn(t), nt(e, t, Gn(e[t], e));
          }), e;
        });
        var Hn = ut(function (e, t, n) {
          var r = 3;

          if (n.length) {
            var i = Ke(n, qe(Hn));
            r |= 32;
          }

          return et(t, r, e, n, i);
        });
        Hn.placeholder = {};

        var Jn = Hn,
            $n = function $n(e, t, n) {
          var r = -1,
              i = e.length;
          t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;

          for (var o = Array(i); ++r < i;) {
            o[r] = e[r + t];
          }

          return o;
        },
            Kn = function Kn(e, t, n) {
          var r = e.length;
          return n = void 0 === n ? r : n, !t && n >= r ? e : $n(e, t, n);
        };

        var Yn = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");

        var Xn = function Xn(e) {
          return Yn.test(e);
        };

        var Zn = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            Qn = "\\ud83c[\\udffb-\\udfff]",
            er = "[^\\ud800-\\udfff]",
            tr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            nr = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            rr = "(?:" + Zn + "|" + Qn + ")?",
            ir = "[\\ufe0e\\ufe0f]?",
            or = ir + rr + "(?:\\u200d(?:" + [er, tr, nr].join("|") + ")" + ir + rr + ")*",
            ar = "(?:" + [er + Zn + "?", Zn, tr, nr, "[\\ud800-\\udfff]"].join("|") + ")",
            sr = RegExp(Qn + "(?=" + Qn + ")|" + ar + or, "g");

        var cr = function cr(e) {
          return Xn(e) ? function (e) {
            return e.match(sr) || [];
          }(e) : function (e) {
            return e.split("");
          }(e);
        },
            ur = function ur(e) {
          return function (t) {
            t = bn(t);
            var n = Xn(t) ? cr(t) : void 0,
                r = n ? n[0] : t.charAt(0),
                i = n ? Kn(n, 1).join("") : t.slice(1);
            return r[e]() + i;
          };
        },
            dr = ur("toUpperCase"),
            fr = function fr(e) {
          return dr(bn(e).toLowerCase());
        },
            lr = function lr(e, t, n, r) {
          var i = -1,
              o = null == e ? 0 : e.length;

          for (r && o && (n = e[++i]); ++i < o;) {
            n = t(n, e[i], i, e);
          }

          return n;
        },
            pr = function pr(e) {
          return function (t) {
            return null == e ? void 0 : e[t];
          };
        },
            hr = pr({
          À: "A",
          Á: "A",
          Â: "A",
          Ã: "A",
          Ä: "A",
          Å: "A",
          à: "a",
          á: "a",
          â: "a",
          ã: "a",
          ä: "a",
          å: "a",
          Ç: "C",
          ç: "c",
          Ð: "D",
          ð: "d",
          È: "E",
          É: "E",
          Ê: "E",
          Ë: "E",
          è: "e",
          é: "e",
          ê: "e",
          ë: "e",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ï: "I",
          ì: "i",
          í: "i",
          î: "i",
          ï: "i",
          Ñ: "N",
          ñ: "n",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Õ: "O",
          Ö: "O",
          Ø: "O",
          ò: "o",
          ó: "o",
          ô: "o",
          õ: "o",
          ö: "o",
          ø: "o",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ü: "U",
          ù: "u",
          ú: "u",
          û: "u",
          ü: "u",
          Ý: "Y",
          ý: "y",
          ÿ: "y",
          Æ: "Ae",
          æ: "ae",
          Þ: "Th",
          þ: "th",
          ß: "ss",
          Ā: "A",
          Ă: "A",
          Ą: "A",
          ā: "a",
          ă: "a",
          ą: "a",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          Ď: "D",
          Đ: "D",
          ď: "d",
          đ: "d",
          Ē: "E",
          Ĕ: "E",
          Ė: "E",
          Ę: "E",
          Ě: "E",
          ē: "e",
          ĕ: "e",
          ė: "e",
          ę: "e",
          ě: "e",
          Ĝ: "G",
          Ğ: "G",
          Ġ: "G",
          Ģ: "G",
          ĝ: "g",
          ğ: "g",
          ġ: "g",
          ģ: "g",
          Ĥ: "H",
          Ħ: "H",
          ĥ: "h",
          ħ: "h",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          Į: "I",
          İ: "I",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          į: "i",
          ı: "i",
          Ĵ: "J",
          ĵ: "j",
          Ķ: "K",
          ķ: "k",
          ĸ: "k",
          Ĺ: "L",
          Ļ: "L",
          Ľ: "L",
          Ŀ: "L",
          Ł: "L",
          ĺ: "l",
          ļ: "l",
          ľ: "l",
          ŀ: "l",
          ł: "l",
          Ń: "N",
          Ņ: "N",
          Ň: "N",
          Ŋ: "N",
          ń: "n",
          ņ: "n",
          ň: "n",
          ŋ: "n",
          Ō: "O",
          Ŏ: "O",
          Ő: "O",
          ō: "o",
          ŏ: "o",
          ő: "o",
          Ŕ: "R",
          Ŗ: "R",
          Ř: "R",
          ŕ: "r",
          ŗ: "r",
          ř: "r",
          Ś: "S",
          Ŝ: "S",
          Ş: "S",
          Š: "S",
          ś: "s",
          ŝ: "s",
          ş: "s",
          š: "s",
          Ţ: "T",
          Ť: "T",
          Ŧ: "T",
          ţ: "t",
          ť: "t",
          ŧ: "t",
          Ũ: "U",
          Ū: "U",
          Ŭ: "U",
          Ů: "U",
          Ű: "U",
          Ų: "U",
          ũ: "u",
          ū: "u",
          ŭ: "u",
          ů: "u",
          ű: "u",
          ų: "u",
          Ŵ: "W",
          ŵ: "w",
          Ŷ: "Y",
          ŷ: "y",
          Ÿ: "Y",
          Ź: "Z",
          Ż: "Z",
          Ž: "Z",
          ź: "z",
          ż: "z",
          ž: "z",
          Ĳ: "IJ",
          ĳ: "ij",
          Œ: "Oe",
          œ: "oe",
          ŉ: "'n",
          ſ: "s"
        });

        var vr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            mr = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");

        var gr = function gr(e) {
          return (e = bn(e)) && e.replace(vr, hr).replace(mr, "");
        };

        var _r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var yr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var br = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Sr = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Cr = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            wr = "[" + Cr + "]",
            kr = "\\d+",
            xr = "[" + br + "]",
            Ir = "[^\\ud800-\\udfff" + Cr + kr + "\\u2700-\\u27bf" + br + Sr + "]",
            Rr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Tr = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            Er = "[" + Sr + "]",
            Mr = "(?:" + xr + "|" + Ir + ")",
            Pr = "(?:" + Er + "|" + Ir + ")",
            Ar = "(?:['’](?:d|ll|m|re|s|t|ve))?",
            Or = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
            jr = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
            Dr = "[\\ufe0e\\ufe0f]?",
            Lr = Dr + jr + "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", Rr, Tr].join("|") + ")" + Dr + jr + ")*",
            Fr = "(?:" + ["[\\u2700-\\u27bf]", Rr, Tr].join("|") + ")" + Lr,
            Wr = RegExp([Er + "?" + xr + "+" + Ar + "(?=" + [wr, Er, "$"].join("|") + ")", Pr + "+" + Or + "(?=" + [wr, Er + Mr, "$"].join("|") + ")", Er + "?" + Mr + "+" + Ar, Er + "+" + Or, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", kr, Fr].join("|"), "g");

        var Nr = function Nr(e, t, n) {
          return e = bn(e), void 0 === (t = n ? void 0 : t) ? function (e) {
            return yr.test(e);
          }(e) ? function (e) {
            return e.match(Wr) || [];
          }(e) : function (e) {
            return e.match(_r) || [];
          }(e) : e.match(t) || [];
        };

        var Vr = RegExp("['’]", "g");

        var Ur = function Ur(e) {
          return function (t) {
            return lr(Nr(gr(t).replace(Vr, "")), e, "");
          };
        },
            Br = Ur(function (e, t, n) {
          return t = t.toLowerCase(), e + (n ? fr(t) : t);
        }),
            qr = function qr() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return _(e) ? e : [e];
        };

        var Gr = o.isFinite,
            zr = Math.min;

        var Hr = function Hr(e) {
          var t = Math[e];
          return function (e, n) {
            if (e = O(e), (n = null == n ? 0 : zr(D(n), 292)) && Gr(e)) {
              var r = (bn(e) + "e").split("e"),
                  i = t(r[0] + "e" + (+r[1] + n));
              return +((r = (bn(i) + "e").split("e"))[0] + "e" + (+r[1] - n));
            }

            return t(e);
          };
        },
            Jr = Hr("ceil"),
            $r = function $r(e) {
          var t = ke(e);
          return t.__chain__ = !0, t;
        };

        var Kr = Math.ceil,
            Yr = Math.max;

        var Xr = function Xr(e, t, n) {
          t = (n ? lt(e, t, n) : void 0 === t) ? 1 : Yr(D(t), 0);
          var r = null == e ? 0 : e.length;
          if (!r || t < 1) return [];

          for (var i = 0, o = 0, a = Array(Kr(r / t)); i < r;) {
            a[o++] = $n(e, i, i += t);
          }

          return a;
        },
            Zr = function Zr(e, t, n) {
          return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e;
        },
            Qr = function Qr(e, t, n) {
          return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = O(n)) == n ? n : 0), void 0 !== t && (t = (t = O(t)) == t ? t : 0), Zr(O(e), t, n);
        };

        function ei(e) {
          var t = this.__data__ = new cn(e);
          this.size = t.size;
        }

        ei.prototype.clear = function () {
          this.__data__ = new cn(), this.size = 0;
        }, ei.prototype.delete = function (e) {
          var t = this.__data__,
              n = t.delete(e);
          return this.size = t.size, n;
        }, ei.prototype.get = function (e) {
          return this.__data__.get(e);
        }, ei.prototype.has = function (e) {
          return this.__data__.has(e);
        }, ei.prototype.set = function (e, t) {
          var n = this.__data__;

          if (n instanceof cn) {
            var r = n.__data__;
            if (!un || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new ln(r);
          }

          return n.set(e, t), this.size = n.size, this;
        };

        var ti = ei,
            ni = function ni(e, t) {
          return e && at(t, Ut(t), e);
        };

        var ri = "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports,
            ii = ri && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module && !module.nodeType && module,
            oi = ii && ii.exports === ri ? o.Buffer : void 0,
            ai = oi ? oi.allocUnsafe : void 0;

        var si = function si(e, t) {
          if (t) return e.slice();
          var n = e.length,
              r = ai ? ai(n) : new e.constructor(n);
          return e.copy(r), r;
        },
            ci = function ci(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
            var a = e[n];
            t(a, n, e) && (o[i++] = a);
          }

          return o;
        },
            ui = function ui() {
          return [];
        };

        var di = Object.prototype.propertyIsEnumerable,
            fi = Object.getOwnPropertySymbols;

        var li = fi ? function (e) {
          return null == e ? [] : (e = Object(e), ci(fi(e), function (t) {
            return di.call(e, t);
          }));
        } : ui,
            pi = Object.getOwnPropertySymbols ? function (e) {
          for (var t = []; e;) {
            In(t, li(e)), e = On(e);
          }

          return t;
        } : ui,
            hi = function hi(e, t, n) {
          var r = t(e);
          return _(e) ? r : In(r, n(e));
        },
            vi = function vi(e) {
          return hi(e, Ut, li);
        },
            mi = function mi(e) {
          return hi(e, Ht, pi);
        },
            gi = X(o, "DataView"),
            _i = X(o, "Promise"),
            yi = X(o, "Set");

        var bi = "[object Map]",
            Si = "[object Promise]",
            Ci = "[object Set]",
            wi = "[object WeakMap]",
            ki = "[object DataView]",
            xi = q(gi),
            Ii = q(un),
            Ri = q(_i),
            Ti = q(yi),
            Ei = q(Z),
            Mi = p;
        (gi && Mi(new gi(new ArrayBuffer(1))) != ki || un && Mi(new un()) != bi || _i && Mi(_i.resolve()) != Si || yi && Mi(new yi()) != Ci || Z && Mi(new Z()) != wi) && (Mi = function Mi(e) {
          var t = p(e),
              n = "[object Object]" == t ? e.constructor : void 0,
              r = n ? q(n) : "";
          if (r) switch (r) {
            case xi:
              return ki;

            case Ii:
              return bi;

            case Ri:
              return Si;

            case Ti:
              return Ci;

            case Ei:
              return wi;
          }
          return t;
        });
        var Pi = Mi;
        var Ai = Object.prototype.hasOwnProperty;

        var Oi = o.Uint8Array,
            ji = function ji(e) {
          var t = new e.constructor(e.byteLength);
          return new Oi(t).set(new Oi(e)), t;
        };

        var Di = /\w*$/;
        var Li = a ? a.prototype : void 0,
            Fi = Li ? Li.valueOf : void 0;

        var Wi = function Wi(e, t) {
          var n = t ? ji(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.length);
        },
            Ni = function Ni(e, t, n) {
          var r,
              i = e.constructor;

          switch (t) {
            case "[object ArrayBuffer]":
              return ji(e);

            case "[object Boolean]":
            case "[object Date]":
              return new i(+e);

            case "[object DataView]":
              return function (e, t) {
                var n = t ? ji(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.byteLength);
              }(e, n);

            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
              return Wi(e, n);

            case "[object Map]":
              return new i();

            case "[object Number]":
            case "[object String]":
              return new i(e);

            case "[object RegExp]":
              return function (e) {
                var t = new e.constructor(e.source, Di.exec(e));
                return t.lastIndex = e.lastIndex, t;
              }(e);

            case "[object Set]":
              return new i();

            case "[object Symbol]":
              return r = e, Fi ? Object(Fi.call(r)) : {};
          }
        },
            Vi = function Vi(e) {
          return "function" != typeof e.constructor || vt(e) ? {} : ne(On(e));
        };

        var Ui = At && At.isMap;
        var Bi = Ui ? Tt(Ui) : function (e) {
          return h(e) && "[object Map]" == Pi(e);
        };
        var qi = At && At.isSet;
        var Gi = qi ? Tt(qi) : function (e) {
          return h(e) && "[object Set]" == Pi(e);
        };
        var zi = "[object Arguments]",
            Hi = "[object Function]",
            Ji = {};
        Ji[zi] = Ji["[object Array]"] = Ji["[object ArrayBuffer]"] = Ji["[object DataView]"] = Ji["[object Boolean]"] = Ji["[object Date]"] = Ji["[object Float32Array]"] = Ji["[object Float64Array]"] = Ji["[object Int8Array]"] = Ji["[object Int16Array]"] = Ji["[object Int32Array]"] = Ji["[object Map]"] = Ji["[object Number]"] = Ji["[object Object]"] = Ji["[object RegExp]"] = Ji["[object Set]"] = Ji["[object String]"] = Ji["[object Symbol]"] = Ji["[object Uint8Array]"] = Ji["[object Uint8ClampedArray]"] = Ji["[object Uint16Array]"] = Ji["[object Uint32Array]"] = !0, Ji["[object Error]"] = Ji[Hi] = Ji["[object WeakMap]"] = !1;

        var $i = function e(t, n, r, i, o, a) {
          var s,
              c = 1 & n,
              u = 2 & n,
              d = 4 & n;
          if (r && (s = o ? r(t, i, o, a) : r(t)), void 0 !== s) return s;
          if (!T(t)) return t;

          var f = _(t);

          if (f) {
            if (s = function (e) {
              var t = e.length,
                  n = new e.constructor(t);
              return t && "string" == typeof e[0] && Ai.call(e, "index") && (n.index = e.index, n.input = e.input), n;
            }(t), !c) return be(t, s);
          } else {
            var l = Pi(t),
                p = l == Hi || "[object GeneratorFunction]" == l;
            if (It(t)) return si(t, c);

            if ("[object Object]" == l || l == zi || p && !o) {
              if (s = u || p ? {} : Vi(t), !c) return u ? function (e, t) {
                return at(e, pi(e), t);
              }(t, function (e, t) {
                return e && at(t, Ht(t), e);
              }(s, t)) : function (e, t) {
                return at(e, li(e), t);
              }(t, ni(s, t));
            } else {
              if (!Ji[l]) return o ? t : {};
              s = Ni(t, l, c);
            }
          }

          a || (a = new ti());
          var h = a.get(t);
          if (h) return h;
          a.set(t, s), Gi(t) ? t.forEach(function (i) {
            s.add(e(i, n, r, i, t, a));
          }) : Bi(t) && t.forEach(function (i, o) {
            s.set(o, e(i, n, r, o, t, a));
          });
          var v = f ? void 0 : (d ? u ? mi : vi : u ? Ht : Ut)(t);
          return De(v || t, function (i, o) {
            v && (i = t[o = i]), ot(s, o, e(i, n, r, o, t, a));
          }), s;
        },
            Ki = function Ki(e) {
          return $i(e, 4);
        },
            Yi = function Yi(e) {
          return $i(e, 5);
        },
            Xi = function Xi(e, t) {
          return $i(e, 5, t = "function" == typeof t ? t : void 0);
        },
            Zi = function Zi(e, t) {
          return $i(e, 4, t = "function" == typeof t ? t : void 0);
        },
            Qi = function Qi() {
          return new ye(this.value(), this.__chain__);
        },
            eo = function eo(e) {
          for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n;) {
            var o = e[t];
            o && (i[r++] = o);
          }

          return i;
        },
            to = function to() {
          var e = arguments.length;
          if (!e) return [];

          for (var t = Array(e - 1), n = arguments[0], r = e; r--;) {
            t[r - 1] = arguments[r];
          }

          return In(_(n) ? be(n) : [n], En(t, 1));
        };

        function no(e) {
          var t = -1,
              n = null == e ? 0 : e.length;

          for (this.__data__ = new ln(); ++t < n;) {
            this.add(e[t]);
          }
        }

        no.prototype.add = no.prototype.push = function (e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this;
        }, no.prototype.has = function (e) {
          return this.__data__.has(e);
        };

        var ro = no,
            io = function io(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) {
            if (t(e[n], n, e)) return !0;
          }

          return !1;
        },
            oo = function oo(e, t) {
          return e.has(t);
        },
            ao = function ao(e, t, n, r, i, o) {
          var a = 1 & n,
              s = e.length,
              c = t.length;
          if (s != c && !(a && c > s)) return !1;
          var u = o.get(e),
              d = o.get(t);
          if (u && d) return u == t && d == e;
          var f = -1,
              l = !0,
              p = 2 & n ? new ro() : void 0;

          for (o.set(e, t), o.set(t, e); ++f < s;) {
            var h = e[f],
                v = t[f];
            if (r) var m = a ? r(v, h, f, t, e, o) : r(h, v, f, e, t, o);

            if (void 0 !== m) {
              if (m) continue;
              l = !1;
              break;
            }

            if (p) {
              if (!io(t, function (e, t) {
                if (!oo(p, t) && (h === e || i(h, e, n, r, o))) return p.push(t);
              })) {
                l = !1;
                break;
              }
            } else if (h !== v && !i(h, v, n, r, o)) {
              l = !1;
              break;
            }
          }

          return o.delete(e), o.delete(t), l;
        },
            so = function so(e) {
          var t = -1,
              n = Array(e.size);
          return e.forEach(function (e, r) {
            n[++t] = [r, e];
          }), n;
        },
            co = function co(e) {
          var t = -1,
              n = Array(e.size);
          return e.forEach(function (e) {
            n[++t] = e;
          }), n;
        };

        var uo = a ? a.prototype : void 0,
            fo = uo ? uo.valueOf : void 0;
        var lo = Object.prototype.hasOwnProperty;
        var po = "[object Arguments]",
            ho = "[object Array]",
            vo = "[object Object]",
            mo = Object.prototype.hasOwnProperty;

        var go = function go(e, t, n, r, i, o) {
          var a = _(e),
              s = _(t),
              c = a ? ho : Pi(e),
              u = s ? ho : Pi(t),
              d = (c = c == po ? vo : c) == vo,
              f = (u = u == po ? vo : u) == vo,
              l = c == u;

          if (l && It(e)) {
            if (!It(t)) return !1;
            a = !0, d = !1;
          }

          if (l && !d) return o || (o = new ti()), a || jt(e) ? ao(e, t, n, r, i, o) : function (e, t, n, r, i, o, a) {
            switch (n) {
              case "[object DataView]":
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;

              case "[object ArrayBuffer]":
                return !(e.byteLength != t.byteLength || !o(new Oi(e), new Oi(t)));

              case "[object Boolean]":
              case "[object Date]":
              case "[object Number]":
                return rt(+e, +t);

              case "[object Error]":
                return e.name == t.name && e.message == t.message;

              case "[object RegExp]":
              case "[object String]":
                return e == t + "";

              case "[object Map]":
                var s = so;

              case "[object Set]":
                var c = 1 & r;
                if (s || (s = co), e.size != t.size && !c) return !1;
                var u = a.get(e);
                if (u) return u == t;
                r |= 2, a.set(e, t);
                var d = ao(s(e), s(t), r, i, o, a);
                return a.delete(e), d;

              case "[object Symbol]":
                if (fo) return fo.call(e) == fo.call(t);
            }

            return !1;
          }(e, t, c, n, r, i, o);

          if (!(1 & n)) {
            var p = d && mo.call(e, "__wrapped__"),
                h = f && mo.call(t, "__wrapped__");

            if (p || h) {
              var v = p ? e.value() : e,
                  m = h ? t.value() : t;
              return o || (o = new ti()), i(v, m, n, r, o);
            }
          }

          return !!l && (o || (o = new ti()), function (e, t, n, r, i, o) {
            var a = 1 & n,
                s = vi(e),
                c = s.length;
            if (c != vi(t).length && !a) return !1;

            for (var u = c; u--;) {
              var d = s[u];
              if (!(a ? d in t : lo.call(t, d))) return !1;
            }

            var f = o.get(e),
                l = o.get(t);
            if (f && l) return f == t && l == e;
            var p = !0;
            o.set(e, t), o.set(t, e);

            for (var h = a; ++u < c;) {
              var v = e[d = s[u]],
                  m = t[d];
              if (r) var g = a ? r(m, v, d, t, e, o) : r(v, m, d, e, t, o);

              if (!(void 0 === g ? v === m || i(v, m, n, r, o) : g)) {
                p = !1;
                break;
              }

              h || (h = "constructor" == d);
            }

            if (p && !h) {
              var _ = e.constructor,
                  y = t.constructor;
              _ == y || !("constructor" in e) || !("constructor" in t) || "function" == typeof _ && _ instanceof _ && "function" == typeof y && y instanceof y || (p = !1);
            }

            return o.delete(e), o.delete(t), p;
          }(e, t, n, r, i, o));
        },
            _o = function e(t, n, r, i, o) {
          return t === n || (null == t || null == n || !h(t) && !h(n) ? t != t && n != n : go(t, n, r, i, e, o));
        },
            yo = function yo(e, t, n, r) {
          var i = n.length,
              o = i,
              a = !r;
          if (null == e) return !o;

          for (e = Object(e); i--;) {
            var s = n[i];
            if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
          }

          for (; ++i < o;) {
            var c = (s = n[i])[0],
                u = e[c],
                d = s[1];

            if (a && s[2]) {
              if (void 0 === u && !(c in e)) return !1;
            } else {
              var f = new ti();
              if (r) var l = r(u, d, c, e, t, f);
              if (!(void 0 === l ? _o(d, u, 3, r, f) : l)) return !1;
            }
          }

          return !0;
        },
            bo = function bo(e) {
          return e == e && !T(e);
        },
            So = function So(e) {
          for (var t = Ut(e), n = t.length; n--;) {
            var r = t[n],
                i = e[r];
            t[n] = [r, i, bo(i)];
          }

          return t;
        },
            Co = function Co(e, t) {
          return function (n) {
            return null != n && n[e] === t && (void 0 !== t || e in Object(n));
          };
        },
            wo = function wo(e) {
          var t = So(e);
          return 1 == t.length && t[0][2] ? Co(t[0][0], t[0][1]) : function (n) {
            return n === e || yo(n, e, t);
          };
        },
            ko = function ko(e, t) {
          return null != e && t in Object(e);
        },
            xo = function xo(e, t, n) {
          for (var r = -1, i = (t = Sn(t, e)).length, o = !1; ++r < i;) {
            var a = Cn(t[r]);
            if (!(o = null != e && n(e, a))) break;
            e = e[a];
          }

          return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && dt(i) && ze(a, i) && (_(e) || St(e));
        },
            Io = function Io(e, t) {
          return null != e && xo(e, t, ko);
        },
            Ro = function Ro(e, t) {
          return Zt(e) && bo(t) ? Co(Cn(e), t) : function (n) {
            var r = kn(n, e);
            return void 0 === r && r === t ? Io(n, e) : _o(t, r, 3);
          };
        },
            To = function To(e) {
          return function (t) {
            return null == t ? void 0 : t[e];
          };
        },
            Eo = function Eo(e) {
          return Zt(e) ? To(Cn(e)) : function (e) {
            return function (t) {
              return wn(t, e);
            };
          }(e);
        },
            Mo = function Mo(e) {
          return "function" == typeof e ? e : null == e ? F : "object" == _typeof(e) ? _(e) ? Ro(e[0], e[1]) : wo(e) : Eo(e);
        },
            Po = function Po(e) {
          var t = null == e ? 0 : e.length,
              n = Mo;
          return e = t ? g(e, function (e) {
            if ("function" != typeof e[1]) throw new TypeError("Expected a function");
            return [n(e[0]), e[1]];
          }) : [], ut(function (n) {
            for (var r = -1; ++r < t;) {
              var i = e[r];
              if (ie(i[0], this, n)) return ie(i[1], this, n);
            }
          });
        },
            Ao = function Ao(e, t, n) {
          var r = n.length;
          if (null == e) return !r;

          for (e = Object(e); r--;) {
            var i = n[r],
                o = t[i],
                a = e[i];
            if (void 0 === a && !(i in e) || !o(a)) return !1;
          }

          return !0;
        },
            Oo = function Oo(e) {
          return function (e) {
            var t = Ut(e);
            return function (n) {
              return Ao(n, e, t);
            };
          }($i(e, 1));
        },
            jo = function jo(e, t) {
          return null == t || Ao(e, t, Ut(t));
        },
            Do = function Do(e, t, n, r) {
          for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) {
            var a = e[i];
            t(r, a, n(a), e);
          }

          return r;
        },
            Lo = function Lo(e) {
          return function (t, n, r) {
            for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
              var c = a[e ? s : ++i];
              if (!1 === n(o[c], c, o)) break;
            }

            return t;
          };
        },
            Fo = Lo(),
            Wo = function Wo(e, t) {
          return e && Fo(e, t, Ut);
        },
            No = function No(e, t) {
          return function (n, r) {
            if (null == n) return n;
            if (!ft(n)) return e(n, r);

            for (var i = n.length, o = t ? i : -1, a = Object(n); (t ? o-- : ++o < i) && !1 !== r(a[o], o, a);) {
              ;
            }

            return n;
          };
        },
            Vo = No(Wo),
            Uo = function Uo(e, t, n, r) {
          return Vo(e, function (e, i, o) {
            t(r, e, n(e), o);
          }), r;
        },
            Bo = function Bo(e, t) {
          return function (n, r) {
            var i = _(n) ? Do : Uo,
                o = t ? t() : {};
            return i(n, e, Mo(r), o);
          };
        };

        var qo = Object.prototype.hasOwnProperty;

        var Go = Bo(function (e, t, n) {
          qo.call(e, n) ? ++e[n] : nt(e, n, 1);
        }),
            zo = function zo(e, t) {
          var n = ne(e);
          return null == t ? n : ni(n, t);
        };

        function Ho(e, t, n) {
          var r = et(e, 8, void 0, void 0, void 0, void 0, void 0, t = n ? void 0 : t);
          return r.placeholder = Ho.placeholder, r;
        }

        Ho.placeholder = {};
        var Jo = Ho;

        function $o(e, t, n) {
          var r = et(e, 16, void 0, void 0, void 0, void 0, void 0, t = n ? void 0 : t);
          return r.placeholder = $o.placeholder, r;
        }

        $o.placeholder = {};

        var Ko = $o,
            Yo = function Yo() {
          return o.Date.now();
        };

        var Xo = Math.max,
            Zo = Math.min;

        var Qo = function Qo(e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              c,
              u = 0,
              d = !1,
              f = !1,
              l = !0;
          if ("function" != typeof e) throw new TypeError("Expected a function");

          function p(t) {
            var n = r,
                o = i;
            return r = i = void 0, u = t, a = e.apply(o, n);
          }

          function h(e) {
            return u = e, s = setTimeout(m, t), d ? p(e) : a;
          }

          function v(e) {
            var n = e - c;
            return void 0 === c || n >= t || n < 0 || f && e - u >= o;
          }

          function m() {
            var e = Yo();
            if (v(e)) return g(e);
            s = setTimeout(m, function (e) {
              var n = t - (e - c);
              return f ? Zo(n, o - (e - u)) : n;
            }(e));
          }

          function g(e) {
            return s = void 0, l && r ? p(e) : (r = i = void 0, a);
          }

          function _() {
            var e = Yo(),
                n = v(e);

            if (r = arguments, i = this, c = e, n) {
              if (void 0 === s) return h(c);
              if (f) return clearTimeout(s), s = setTimeout(m, t), p(c);
            }

            return void 0 === s && (s = setTimeout(m, t)), a;
          }

          return t = O(t) || 0, T(n) && (d = !!n.leading, o = (f = "maxWait" in n) ? Xo(O(n.maxWait) || 0, t) : o, l = "trailing" in n ? !!n.trailing : l), _.cancel = function () {
            void 0 !== s && clearTimeout(s), u = 0, r = c = i = s = void 0;
          }, _.flush = function () {
            return void 0 === s ? a : g(Yo());
          }, _;
        },
            ea = function ea(e, t) {
          return null == e || e != e ? t : e;
        };

        var ta = Object.prototype,
            na = ta.hasOwnProperty;

        var ra = ut(function (e, t) {
          e = Object(e);
          var n = -1,
              r = t.length,
              i = r > 2 ? t[2] : void 0;

          for (i && lt(t[0], t[1], i) && (r = 1); ++n < r;) {
            for (var o = t[n], a = Ht(o), s = -1, c = a.length; ++s < c;) {
              var u = a[s],
                  d = e[u];
              (void 0 === d || rt(d, ta[u]) && !na.call(e, u)) && (e[u] = o[u]);
            }
          }

          return e;
        }),
            ia = function ia(e, t, n) {
          (void 0 !== n && !rt(e[t], n) || void 0 === n && !(t in e)) && nt(e, t, n);
        },
            oa = function oa(e) {
          return h(e) && ft(e);
        },
            aa = function aa(e, t) {
          if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
        },
            sa = function sa(e) {
          return at(e, Ht(e));
        },
            ca = function e(t, n, r, i, o) {
          t !== n && Fo(n, function (a, s) {
            if (o || (o = new ti()), T(a)) !function (e, t, n, r, i, o, a) {
              var s = aa(e, n),
                  c = aa(t, n),
                  u = a.get(c);
              if (u) ia(e, n, u);else {
                var d = o ? o(s, c, n + "", e, t, a) : void 0,
                    f = void 0 === d;

                if (f) {
                  var l = _(c),
                      p = !l && It(c),
                      h = !l && !p && jt(c);

                  d = c, l || p || h ? _(s) ? d = s : oa(s) ? d = be(s) : p ? (f = !1, d = si(c, !0)) : h ? (f = !1, d = Wi(c, !0)) : d = [] : Nn(c) || St(c) ? (d = s, St(s) ? d = sa(s) : T(s) && !W(s) || (d = Vi(c))) : f = !1;
                }

                f && (a.set(c, d), i(d, c, r, o, a), a.delete(c)), ia(e, n, d);
              }
            }(t, n, s, r, e, i, o);else {
              var c = i ? i(aa(t, s), a, s + "", t, n, o) : void 0;
              void 0 === c && (c = a), ia(t, s, c);
            }
          }, Ht);
        },
            ua = function e(t, n, r, i, o, a) {
          return T(t) && T(n) && (a.set(n, t), ca(t, n, void 0, e, a), a.delete(n)), t;
        },
            da = pt(function (e, t, n, r) {
          ca(e, t, n, r);
        }),
            fa = ut(function (e) {
          return e.push(void 0, ua), ie(da, void 0, e);
        }),
            la = function la(e, t, n) {
          if ("function" != typeof e) throw new TypeError("Expected a function");
          return setTimeout(function () {
            e.apply(void 0, n);
          }, t);
        },
            pa = ut(function (e, t) {
          return la(e, 1, t);
        }),
            ha = ut(function (e, t, n) {
          return la(e, O(t) || 0, n);
        }),
            va = function va(e, t, n) {
          for (var r = -1, i = null == e ? 0 : e.length; ++r < i;) {
            if (n(t, e[r])) return !0;
          }

          return !1;
        },
            ma = function ma(e, t, n, r) {
          var i = -1,
              o = Ne,
              a = !0,
              s = e.length,
              c = [],
              u = t.length;
          if (!s) return c;
          n && (t = g(t, Tt(n))), r ? (o = va, a = !1) : t.length >= 200 && (o = oo, a = !1, t = new ro(t));

          e: for (; ++i < s;) {
            var d = e[i],
                f = null == n ? d : n(d);

            if (d = r || 0 !== d ? d : 0, a && f == f) {
              for (var l = u; l--;) {
                if (t[l] === f) continue e;
              }

              c.push(d);
            } else o(t, f, r) || c.push(d);
          }

          return c;
        },
            ga = ut(function (e, t) {
          return oa(e) ? ma(e, En(t, 1, oa, !0)) : [];
        }),
            _a = function _a(e) {
          var t = null == e ? 0 : e.length;
          return t ? e[t - 1] : void 0;
        },
            ya = ut(function (e, t) {
          var n = _a(t);

          return oa(n) && (n = void 0), oa(e) ? ma(e, En(t, 1, oa, !0), Mo(n)) : [];
        }),
            ba = ut(function (e, t) {
          var n = _a(t);

          return oa(n) && (n = void 0), oa(e) ? ma(e, En(t, 1, oa, !0), void 0, n) : [];
        }),
            Sa = C(function (e, t) {
          return e / t;
        }, 1),
            Ca = function Ca(e, t, n) {
          var r = null == e ? 0 : e.length;
          return r ? (t = n || void 0 === t ? 1 : D(t), $n(e, t < 0 ? 0 : t, r)) : [];
        },
            wa = function wa(e, t, n) {
          var r = null == e ? 0 : e.length;
          return r ? (t = n || void 0 === t ? 1 : D(t), $n(e, 0, (t = r - t) < 0 ? 0 : t)) : [];
        },
            ka = function ka(e, t, n, r) {
          for (var i = e.length, o = r ? i : -1; (r ? o-- : ++o < i) && t(e[o], o, e);) {
            ;
          }

          return n ? $n(e, r ? 0 : o, r ? o + 1 : i) : $n(e, r ? o + 1 : 0, r ? i : o);
        },
            xa = function xa(e, t) {
          return e && e.length ? ka(e, Mo(t), !0, !0) : [];
        },
            Ia = function Ia(e, t) {
          return e && e.length ? ka(e, Mo(t), !0) : [];
        },
            Ra = function Ra(e) {
          return "function" == typeof e ? e : F;
        },
            Ta = function Ta(e, t) {
          return (_(e) ? De : Vo)(e, Ra(t));
        },
            Ea = function Ea(e, t) {
          for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e);) {
            ;
          }

          return e;
        },
            Ma = Lo(!0),
            Pa = function Pa(e, t) {
          return e && Ma(e, t, Ut);
        },
            Aa = No(Pa, !0),
            Oa = function Oa(e, t) {
          return (_(e) ? Ea : Aa)(e, Ra(t));
        },
            ja = function ja(e, t, n) {
          e = bn(e), t = S(t);
          var r = e.length,
              i = n = void 0 === n ? r : Zr(D(n), 0, r);
          return (n -= t.length) >= 0 && e.slice(n, i) == t;
        },
            Da = function Da(e) {
          return function (t) {
            var n = Pi(t);
            return "[object Map]" == n ? so(t) : "[object Set]" == n ? function (e) {
              var t = -1,
                  n = Array(e.size);
              return e.forEach(function (e) {
                n[++t] = [e, e];
              }), n;
            }(t) : function (e, t) {
              return g(t, function (t) {
                return [t, e[t]];
              });
            }(t, e(t));
          };
        },
            La = Da(Ut),
            Fa = Da(Ht),
            Wa = pr({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        });

        var Na = /[&<>"']/g,
            Va = RegExp(Na.source);

        var Ua = function Ua(e) {
          return (e = bn(e)) && Va.test(e) ? e.replace(Na, Wa) : e;
        };

        var Ba = /[\\^$.*+?()[\]{}|]/g,
            qa = RegExp(Ba.source);

        var Ga = function Ga(e) {
          return (e = bn(e)) && qa.test(e) ? e.replace(Ba, "\\$&") : e;
        },
            za = function za(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) {
            if (!t(e[n], n, e)) return !1;
          }

          return !0;
        },
            Ha = function Ha(e, t) {
          var n = !0;
          return Vo(e, function (e, r, i) {
            return n = !!t(e, r, i);
          }), n;
        },
            Ja = function Ja(e, t, n) {
          var r = _(e) ? za : Ha;
          return n && lt(e, t, n) && (t = void 0), r(e, Mo(t));
        },
            $a = function $a(e) {
          return e ? Zr(D(e), 0, 4294967295) : 0;
        },
            Ka = function Ka(e, t, n, r) {
          var i = null == e ? 0 : e.length;
          return i ? (n && "number" != typeof n && lt(e, t, n) && (n = 0, r = i), function (e, t, n, r) {
            var i = e.length;

            for ((n = D(n)) < 0 && (n = -n > i ? 0 : i + n), (r = void 0 === r || r > i ? i : D(r)) < 0 && (r += i), r = n > r ? 0 : $a(r); n < r;) {
              e[n++] = t;
            }

            return e;
          }(e, t, n, r)) : [];
        },
            Ya = function Ya(e, t) {
          var n = [];
          return Vo(e, function (e, r, i) {
            t(e, r, i) && n.push(e);
          }), n;
        },
            Xa = function Xa(e, t) {
          return (_(e) ? ci : Ya)(e, Mo(t));
        },
            Za = function Za(e) {
          return function (t, n, r) {
            var i = Object(t);

            if (!ft(t)) {
              var o = Mo(n);
              t = Ut(t), n = function n(e) {
                return o(i[e], e, i);
              };
            }

            var a = e(t, n, r);
            return a > -1 ? i[o ? t[a] : a] : void 0;
          };
        };

        var Qa = Math.max;

        var es = function es(e, t, n) {
          var r = null == e ? 0 : e.length;
          if (!r) return -1;
          var i = null == n ? 0 : D(n);
          return i < 0 && (i = Qa(r + i, 0)), Le(e, Mo(t), i);
        },
            ts = Za(es),
            ns = function ns(e, t, n) {
          var r;
          return n(e, function (e, n, i) {
            if (t(e, n, i)) return r = n, !1;
          }), r;
        },
            rs = function rs(e, t) {
          return ns(e, Mo(t), Wo);
        };

        var is = Math.max,
            os = Math.min;

        var as = function as(e, t, n) {
          var r = null == e ? 0 : e.length;
          if (!r) return -1;
          var i = r - 1;
          return void 0 !== n && (i = D(n), i = n < 0 ? is(r + i, 0) : os(i, r - 1)), Le(e, Mo(t), i, !0);
        },
            ss = Za(as),
            cs = function cs(e, t) {
          return ns(e, Mo(t), Pa);
        },
            us = function us(e) {
          return e && e.length ? e[0] : void 0;
        },
            ds = function ds(e, t) {
          var n = -1,
              r = ft(e) ? Array(e.length) : [];
          return Vo(e, function (e, i, o) {
            r[++n] = t(e, i, o);
          }), r;
        },
            fs = function fs(e, t) {
          return (_(e) ? g : ds)(e, Mo(t));
        },
            ls = function ls(e, t) {
          return En(fs(e, t), 1);
        },
            ps = function ps(e, t) {
          return En(fs(e, t), 1 / 0);
        },
            hs = function hs(e, t, n) {
          return n = void 0 === n ? 1 : D(n), En(fs(e, t), n);
        },
            vs = function vs(e) {
          return null != e && e.length ? En(e, 1 / 0) : [];
        },
            ms = function ms(e, t) {
          return null != e && e.length ? (t = void 0 === t ? 1 : D(t), En(e, t)) : [];
        },
            gs = function gs(e) {
          return et(e, 512);
        },
            _s = Hr("floor"),
            ys = function ys(e) {
          return Pn(function (t) {
            var n = t.length,
                r = n,
                i = ye.prototype.thru;

            for (e && t.reverse(); r--;) {
              var o = t[r];
              if ("function" != typeof o) throw new TypeError("Expected a function");
              if (i && !a && "wrapper" == ge(o)) var a = new ye([], !0);
            }

            for (r = a ? r : n; ++r < n;) {
              o = t[r];
              var s = ge(o),
                  c = "wrapper" == s ? he(o) : void 0;
              a = c && xe(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9] ? a[ge(c[0])].apply(a, c[3]) : 1 == o.length && xe(o) ? a[s]() : a.thru(o);
            }

            return function () {
              var e = arguments,
                  r = e[0];
              if (a && 1 == e.length && _(r)) return a.plant(r).value();

              for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n;) {
                o = t[i].call(this, o);
              }

              return o;
            };
          });
        },
            bs = ys(),
            Ss = ys(!0),
            Cs = function Cs(e, t) {
          return null == e ? e : Fo(e, Ra(t), Ht);
        },
            ws = function ws(e, t) {
          return null == e ? e : Ma(e, Ra(t), Ht);
        },
            ks = function ks(e, t) {
          return e && Wo(e, Ra(t));
        },
            xs = function xs(e, t) {
          return e && Pa(e, Ra(t));
        },
            Is = function Is(e) {
          for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
            var i = e[t];
            r[i[0]] = i[1];
          }

          return r;
        },
            Rs = function Rs(e, t) {
          return ci(t, function (t) {
            return W(e[t]);
          });
        },
            Ts = function Ts(e) {
          return null == e ? [] : Rs(e, Ut(e));
        },
            Es = function Es(e) {
          return null == e ? [] : Rs(e, Ht(e));
        };

        var Ms = Object.prototype.hasOwnProperty;

        var Ps = Bo(function (e, t, n) {
          Ms.call(e, n) ? e[n].push(t) : nt(e, n, [t]);
        }),
            As = function As(e, t) {
          return e > t;
        },
            Os = function Os(e) {
          return function (t, n) {
            return "string" == typeof t && "string" == typeof n || (t = O(t), n = O(n)), e(t, n);
          };
        },
            js = Os(As),
            Ds = Os(function (e, t) {
          return e >= t;
        });

        var Ls = Object.prototype.hasOwnProperty;

        var Fs = function Fs(e, t) {
          return null != e && Ls.call(e, t);
        },
            Ws = function Ws(e, t) {
          return null != e && xo(e, t, Fs);
        };

        var Ns = Math.max,
            Vs = Math.min;

        var Us = function Us(e, t, n) {
          return t = j(t), void 0 === n ? (n = t, t = 0) : n = j(n), function (e, t, n) {
            return e >= Vs(t, n) && e < Ns(t, n);
          }(e = O(e), t, n);
        },
            Bs = function Bs(e) {
          return "string" == typeof e || !_(e) && h(e) && "[object String]" == p(e);
        },
            qs = function qs(e, t) {
          return g(t, function (t) {
            return e[t];
          });
        },
            Gs = function Gs(e) {
          return null == e ? [] : qs(e, Ut(e));
        };

        var zs = Math.max;

        var Hs = function Hs(e, t, n, r) {
          e = ft(e) ? e : Gs(e), n = n && !r ? D(n) : 0;
          var i = e.length;
          return n < 0 && (n = zs(i + n, 0)), Bs(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && We(e, t, n) > -1;
        };

        var Js = Math.max;

        var $s = function $s(e, t, n) {
          var r = null == e ? 0 : e.length;
          if (!r) return -1;
          var i = null == n ? 0 : D(n);
          return i < 0 && (i = Js(r + i, 0)), We(e, t, i);
        },
            Ks = function Ks(e) {
          return null != e && e.length ? $n(e, 0, -1) : [];
        };

        var Ys = Math.min;

        var Xs = function Xs(e, t, n) {
          for (var r = n ? va : Ne, i = e[0].length, o = e.length, a = o, s = Array(o), c = 1 / 0, u = []; a--;) {
            var d = e[a];
            a && t && (d = g(d, Tt(t))), c = Ys(d.length, c), s[a] = !n && (t || i >= 120 && d.length >= 120) ? new ro(a && d) : void 0;
          }

          d = e[0];
          var f = -1,
              l = s[0];

          e: for (; ++f < i && u.length < c;) {
            var p = d[f],
                h = t ? t(p) : p;

            if (p = n || 0 !== p ? p : 0, !(l ? oo(l, h) : r(u, h, n))) {
              for (a = o; --a;) {
                var v = s[a];
                if (!(v ? oo(v, h) : r(e[a], h, n))) continue e;
              }

              l && l.push(h), u.push(p);
            }
          }

          return u;
        },
            Zs = function Zs(e) {
          return oa(e) ? e : [];
        },
            Qs = ut(function (e) {
          var t = g(e, Zs);
          return t.length && t[0] === e[0] ? Xs(t) : [];
        }),
            ec = ut(function (e) {
          var t = _a(e),
              n = g(e, Zs);

          return t === _a(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? Xs(n, Mo(t)) : [];
        }),
            tc = ut(function (e) {
          var t = _a(e),
              n = g(e, Zs);

          return (t = "function" == typeof t ? t : void 0) && n.pop(), n.length && n[0] === e[0] ? Xs(n, void 0, t) : [];
        }),
            nc = function nc(e, t) {
          return function (n, r) {
            return function (e, t, n, r) {
              return Wo(e, function (e, i, o) {
                t(r, n(e), i, o);
              }), r;
            }(n, e, t(r), {});
          };
        };

        var rc = Object.prototype.toString;
        var ic = nc(function (e, t, n) {
          null != t && "function" != typeof t.toString && (t = rc.call(t)), e[t] = n;
        }, Ae(F));
        var oc = Object.prototype,
            ac = oc.hasOwnProperty,
            sc = oc.toString;

        var cc = nc(function (e, t, n) {
          null != t && "function" != typeof t.toString && (t = sc.call(t)), ac.call(e, t) ? e[t].push(n) : e[t] = [n];
        }, Mo),
            uc = function uc(e, t) {
          return t.length < 2 ? e : wn(e, $n(t, 0, -1));
        },
            dc = function dc(e, t, n) {
          t = Sn(t, e);
          var r = null == (e = uc(e, t)) ? e : e[Cn(_a(t))];
          return null == r ? void 0 : ie(r, e, n);
        },
            fc = ut(dc),
            lc = ut(function (e, t, n) {
          var r = -1,
              i = "function" == typeof t,
              o = ft(e) ? Array(e.length) : [];
          return Vo(e, function (e) {
            o[++r] = i ? ie(t, e, n) : dc(e, t, n);
          }), o;
        });

        var pc = At && At.isArrayBuffer;

        var hc = pc ? Tt(pc) : function (e) {
          return h(e) && "[object ArrayBuffer]" == p(e);
        },
            vc = function vc(e) {
          return !0 === e || !1 === e || h(e) && "[object Boolean]" == p(e);
        };

        var mc = At && At.isDate;

        var gc = mc ? Tt(mc) : function (e) {
          return h(e) && "[object Date]" == p(e);
        },
            _c = function _c(e) {
          return h(e) && 1 === e.nodeType && !Nn(e);
        };

        var yc = Object.prototype.hasOwnProperty;

        var bc = function bc(e) {
          if (null == e) return !0;
          if (ft(e) && (_(e) || "string" == typeof e || "function" == typeof e.splice || It(e) || jt(e) || St(e))) return !e.length;
          var t = Pi(e);
          if ("[object Map]" == t || "[object Set]" == t) return !e.size;
          if (vt(e)) return !Vt(e).length;

          for (var n in e) {
            if (yc.call(e, n)) return !1;
          }

          return !0;
        },
            Sc = function Sc(e, t) {
          return _o(e, t);
        },
            Cc = function Cc(e, t, n) {
          var r = (n = "function" == typeof n ? n : void 0) ? n(e, t) : void 0;
          return void 0 === r ? _o(e, t, void 0, n) : !!r;
        };

        var wc = o.isFinite;

        var kc = function kc(e) {
          return "number" == typeof e && wc(e);
        },
            xc = function xc(e) {
          return "number" == typeof e && e == D(e);
        },
            Ic = function Ic(e, t) {
          return e === t || yo(e, t, So(t));
        },
            Rc = function Rc(e, t, n) {
          return n = "function" == typeof n ? n : void 0, yo(e, t, So(t), n);
        },
            Tc = function Tc(e) {
          return "number" == typeof e || h(e) && "[object Number]" == p(e);
        },
            Ec = function Ec(e) {
          return Tc(e) && e != +e;
        },
            Mc = N ? W : Ct,
            Pc = function Pc(e) {
          if (Mc(e)) throw new Error("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
          return Y(e);
        },
            Ac = function Ac(e) {
          return null == e;
        },
            Oc = function Oc(e) {
          return null === e;
        };

        var jc = At && At.isRegExp;
        var Dc = jc ? Tt(jc) : function (e) {
          return h(e) && "[object RegExp]" == p(e);
        };

        var Lc = function Lc(e) {
          return xc(e) && e >= -9007199254740991 && e <= 9007199254740991;
        },
            Fc = function Fc(e) {
          return void 0 === e;
        },
            Wc = function Wc(e) {
          return h(e) && "[object WeakMap]" == Pi(e);
        },
            Nc = function Nc(e) {
          return h(e) && "[object WeakSet]" == p(e);
        },
            Vc = function Vc(e) {
          return Mo("function" == typeof e ? e : $i(e, 1));
        };

        var Uc = Array.prototype.join;

        var Bc = function Bc(e, t) {
          return null == e ? "" : Uc.call(e, t);
        },
            qc = Ur(function (e, t, n) {
          return e + (n ? "-" : "") + t.toLowerCase();
        }),
            Gc = Bo(function (e, t, n) {
          nt(e, n, t);
        });

        var zc = Math.max,
            Hc = Math.min;

        var Jc = function Jc(e, t, n) {
          var r = null == e ? 0 : e.length;
          if (!r) return -1;
          var i = r;
          return void 0 !== n && (i = (i = D(n)) < 0 ? zc(r + i, 0) : Hc(i, r - 1)), t == t ? function (e, t, n) {
            for (var r = n + 1; r--;) {
              if (e[r] === t) return r;
            }

            return r;
          }(e, t, i) : Le(e, Fe, i, !0);
        },
            $c = Ur(function (e, t, n) {
          return e + (n ? " " : "") + t.toLowerCase();
        }),
            Kc = ur("toLowerCase"),
            Yc = function Yc(e, t) {
          return e < t;
        },
            Xc = Os(Yc),
            Zc = Os(function (e, t) {
          return e <= t;
        }),
            Qc = function Qc(e, t) {
          var n = {};
          return t = Mo(t), Wo(e, function (e, r, i) {
            nt(n, t(e, r, i), e);
          }), n;
        },
            eu = function eu(e, t) {
          var n = {};
          return t = Mo(t), Wo(e, function (e, r, i) {
            nt(n, r, t(e, r, i));
          }), n;
        },
            tu = function tu(e) {
          return wo($i(e, 1));
        },
            nu = function nu(e, t) {
          return Ro(e, $i(t, 1));
        },
            ru = function ru(e, t, n) {
          for (var r = -1, i = e.length; ++r < i;) {
            var o = e[r],
                a = t(o);
            if (null != a && (void 0 === s ? a == a && !v(a) : n(a, s))) var s = a,
                c = o;
          }

          return c;
        },
            iu = function iu(e) {
          return e && e.length ? ru(e, F, As) : void 0;
        },
            ou = function ou(e, t) {
          return e && e.length ? ru(e, Mo(t), As) : void 0;
        },
            au = function au(e, t) {
          for (var n, r = -1, i = e.length; ++r < i;) {
            var o = t(e[r]);
            void 0 !== o && (n = void 0 === n ? o : n + o);
          }

          return n;
        },
            su = function su(e, t) {
          var n = null == e ? 0 : e.length;
          return n ? au(e, t) / n : NaN;
        },
            cu = function cu(e) {
          return su(e, F);
        },
            uu = function uu(e, t) {
          return su(e, Mo(t));
        },
            du = pt(function (e, t, n) {
          ca(e, t, n);
        }),
            fu = ut(function (e, t) {
          return function (n) {
            return dc(n, e, t);
          };
        }),
            lu = ut(function (e, t) {
          return function (n) {
            return dc(e, n, t);
          };
        }),
            pu = function pu(e) {
          return e && e.length ? ru(e, F, Yc) : void 0;
        },
            hu = function hu(e, t) {
          return e && e.length ? ru(e, Mo(t), Yc) : void 0;
        },
            vu = function vu(e, t, n) {
          var r = Ut(t),
              i = Rs(t, r),
              o = !(T(n) && "chain" in n && !n.chain),
              a = W(e);
          return De(i, function (n) {
            var r = t[n];
            e[n] = r, a && (e.prototype[n] = function () {
              var t = this.__chain__;

              if (o || t) {
                var n = e(this.__wrapped__),
                    i = n.__actions__ = be(this.__actions__);
                return i.push({
                  func: r,
                  args: arguments,
                  thisArg: e
                }), n.__chain__ = t, n;
              }

              return r.apply(e, In([this.value()], arguments));
            });
          }), e;
        },
            mu = C(function (e, t) {
          return e * t;
        }, 1),
            gu = function gu(e) {
          if ("function" != typeof e) throw new TypeError("Expected a function");
          return function () {
            var t = arguments;

            switch (t.length) {
              case 0:
                return !e.call(this);

              case 1:
                return !e.call(this, t[0]);

              case 2:
                return !e.call(this, t[0], t[1]);

              case 3:
                return !e.call(this, t[0], t[1], t[2]);
            }

            return !e.apply(this, t);
          };
        };

        var _u = a ? a.iterator : void 0;

        var yu = function yu(e) {
          if (!e) return [];
          if (ft(e)) return Bs(e) ? cr(e) : be(e);
          if (_u && e[_u]) return function (e) {
            for (var t, n = []; !(t = e.next()).done;) {
              n.push(t.value);
            }

            return n;
          }(e[_u]());
          var t = Pi(e);
          return ("[object Map]" == t ? so : "[object Set]" == t ? co : Gs)(e);
        },
            bu = function bu() {
          void 0 === this.__values__ && (this.__values__ = yu(this.value()));
          var e = this.__index__ >= this.__values__.length;
          return {
            done: e,
            value: e ? void 0 : this.__values__[this.__index__++]
          };
        },
            Su = function Su(e, t) {
          var n = e.length;
          if (n) return ze(t += t < 0 ? n : 0, n) ? e[t] : void 0;
        },
            Cu = function Cu(e, t) {
          return e && e.length ? Su(e, D(t)) : void 0;
        },
            wu = function wu(e) {
          return e = D(e), ut(function (t) {
            return Su(t, e);
          });
        },
            ku = function ku(e, t) {
          return t = Sn(t, e), null == (e = uc(e, t)) || delete e[Cn(_a(t))];
        },
            xu = function xu(e) {
          return Nn(e) ? void 0 : e;
        },
            Iu = Pn(function (e, t) {
          var n = {};
          if (null == e) return n;
          var r = !1;
          t = g(t, function (t) {
            return t = Sn(t, e), r || (r = t.length > 1), t;
          }), at(e, mi(e), n), r && (n = $i(n, 7, xu));

          for (var i = t.length; i--;) {
            ku(n, t[i]);
          }

          return n;
        }),
            Ru = function Ru(e, t, n, r) {
          if (!T(e)) return e;

          for (var i = -1, o = (t = Sn(t, e)).length, a = o - 1, s = e; null != s && ++i < o;) {
            var c = Cn(t[i]),
                u = n;
            if ("__proto__" === c || "constructor" === c || "prototype" === c) return e;

            if (i != a) {
              var d = s[c];
              void 0 === (u = r ? r(d, c, s) : void 0) && (u = T(d) ? d : ze(t[i + 1]) ? [] : {});
            }

            ot(s, c, u), s = s[c];
          }

          return e;
        },
            Tu = function Tu(e, t, n) {
          for (var r = -1, i = t.length, o = {}; ++r < i;) {
            var a = t[r],
                s = wn(e, a);
            n(s, a) && Ru(o, Sn(a, e), s);
          }

          return o;
        },
            Eu = function Eu(e, t) {
          if (null == e) return {};
          var n = g(mi(e), function (e) {
            return [e];
          });
          return t = Mo(t), Tu(e, n, function (e, n) {
            return t(e, n[0]);
          });
        },
            Mu = function Mu(e, t) {
          return Eu(e, gu(Mo(t)));
        },
            Pu = function Pu(e) {
          return Bn(2, e);
        },
            Au = function Au(e, t) {
          if (e !== t) {
            var n = void 0 !== e,
                r = null === e,
                i = e == e,
                o = v(e),
                a = void 0 !== t,
                s = null === t,
                c = t == t,
                u = v(t);
            if (!s && !u && !o && e > t || o && a && c && !s && !u || r && a && c || !n && c || !i) return 1;
            if (!r && !o && !u && e < t || u && n && i && !r && !o || s && n && i || !a && i || !c) return -1;
          }

          return 0;
        },
            Ou = function Ou(e, t, n) {
          t = t.length ? g(t, function (e) {
            return _(e) ? function (t) {
              return wn(t, 1 === e.length ? e[0] : e);
            } : e;
          }) : [F];
          var r = -1;
          return t = g(t, Tt(Mo)), function (e, t) {
            var n = e.length;

            for (e.sort(t); n--;) {
              e[n] = e[n].value;
            }

            return e;
          }(ds(e, function (e, n, i) {
            return {
              criteria: g(t, function (t) {
                return t(e);
              }),
              index: ++r,
              value: e
            };
          }), function (e, t) {
            return function (e, t, n) {
              for (var r = -1, i = e.criteria, o = t.criteria, a = i.length, s = n.length; ++r < a;) {
                var c = Au(i[r], o[r]);
                if (c) return r >= s ? c : c * ("desc" == n[r] ? -1 : 1);
              }

              return e.index - t.index;
            }(e, t, n);
          });
        },
            ju = function ju(e, t, n, r) {
          return null == e ? [] : (_(t) || (t = null == t ? [] : [t]), _(n = r ? void 0 : n) || (n = null == n ? [] : [n]), Ou(e, t, n));
        },
            Du = function Du(e) {
          return Pn(function (t) {
            return t = g(t, Tt(Mo)), ut(function (n) {
              var r = this;
              return e(t, function (e) {
                return ie(e, r, n);
              });
            });
          });
        },
            Lu = Du(g),
            Fu = ut;

        var Wu = Math.min;
        var Nu = Fu(function (e, t) {
          var n = (t = 1 == t.length && _(t[0]) ? g(t[0], Tt(Mo)) : g(En(t, 1), Tt(Mo))).length;
          return ut(function (r) {
            for (var i = -1, o = Wu(r.length, n); ++i < o;) {
              r[i] = t[i].call(this, r[i]);
            }

            return ie(e, this, r);
          });
        }),
            Vu = Du(za),
            Uu = Du(io);
        var Bu = Math.floor;

        var qu = function qu(e, t) {
          var n = "";
          if (!e || t < 1 || t > 9007199254740991) return n;

          do {
            t % 2 && (n += e), (t = Bu(t / 2)) && (e += e);
          } while (t);

          return n;
        },
            Gu = To("length");

        var zu = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            Hu = "[^\\ud800-\\udfff]",
            Ju = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            $u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            Ku = "(?:" + zu + "|\\ud83c[\\udffb-\\udfff])?",
            Yu = "[\\ufe0e\\ufe0f]?",
            Xu = Yu + Ku + "(?:\\u200d(?:" + [Hu, Ju, $u].join("|") + ")" + Yu + Ku + ")*",
            Zu = "(?:" + [Hu + zu + "?", zu, Ju, $u, "[\\ud800-\\udfff]"].join("|") + ")",
            Qu = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Zu + Xu, "g");

        var ed = function ed(e) {
          return Xn(e) ? function (e) {
            for (var t = Qu.lastIndex = 0; Qu.test(e);) {
              ++t;
            }

            return t;
          }(e) : Gu(e);
        };

        var td = Math.ceil;

        var nd = function nd(e, t) {
          var n = (t = void 0 === t ? " " : S(t)).length;
          if (n < 2) return n ? qu(t, e) : t;
          var r = qu(t, td(e / ed(t)));
          return Xn(t) ? Kn(cr(r), 0, e).join("") : r.slice(0, e);
        };

        var rd = Math.ceil,
            id = Math.floor;

        var od = function od(e, t, n) {
          e = bn(e);
          var r = (t = D(t)) ? ed(e) : 0;
          if (!t || r >= t) return e;
          var i = (t - r) / 2;
          return nd(id(i), n) + e + nd(rd(i), n);
        },
            ad = function ad(e, t, n) {
          e = bn(e);
          var r = (t = D(t)) ? ed(e) : 0;
          return t && r < t ? e + nd(t - r, n) : e;
        },
            sd = function sd(e, t, n) {
          e = bn(e);
          var r = (t = D(t)) ? ed(e) : 0;
          return t && r < t ? nd(t - r, n) + e : e;
        };

        var cd = /^\s+/,
            ud = o.parseInt;

        var dd = function dd(e, t, n) {
          return n || null == t ? t = 0 : t && (t = +t), ud(bn(e).replace(cd, ""), t || 0);
        };

        var fd = ut(function (e, t) {
          var n = Ke(t, qe(fd));
          return et(e, 32, void 0, t, n);
        });
        fd.placeholder = {};
        var ld = fd;
        var pd = ut(function (e, t) {
          var n = Ke(t, qe(pd));
          return et(e, 64, void 0, t, n);
        });
        pd.placeholder = {};

        var hd = pd,
            vd = Bo(function (e, t, n) {
          e[n ? 0 : 1].push(t);
        }, function () {
          return [[], []];
        }),
            md = Pn(function (e, t) {
          return null == e ? {} : function (e, t) {
            return Tu(e, t, function (t, n) {
              return Io(e, n);
            });
          }(e, t);
        }),
            gd = function gd(e) {
          for (var t, n = this; n instanceof de;) {
            var r = Se(n);
            r.__index__ = 0, r.__values__ = void 0, t ? i.__wrapped__ = r : t = r;
            var i = r;
            n = n.__wrapped__;
          }

          return i.__wrapped__ = e, t;
        },
            _d = function _d(e) {
          return function (t) {
            return null == e ? void 0 : wn(e, t);
          };
        },
            yd = function yd(e, t, n, r) {
          for (var i = n - 1, o = e.length; ++i < o;) {
            if (r(e[i], t)) return i;
          }

          return -1;
        };

        var bd = Array.prototype.splice;

        var Sd = function Sd(e, t, n, r) {
          var i = r ? yd : We,
              o = -1,
              a = t.length,
              s = e;

          for (e === t && (t = be(t)), n && (s = g(e, Tt(n))); ++o < a;) {
            for (var c = 0, u = t[o], d = n ? n(u) : u; (c = i(s, d, c, r)) > -1;) {
              s !== e && bd.call(s, c, 1), bd.call(e, c, 1);
            }
          }

          return e;
        },
            Cd = function Cd(e, t) {
          return e && e.length && t && t.length ? Sd(e, t) : e;
        },
            wd = ut(Cd),
            kd = function kd(e, t, n) {
          return e && e.length && t && t.length ? Sd(e, t, Mo(n)) : e;
        },
            xd = function xd(e, t, n) {
          return e && e.length && t && t.length ? Sd(e, t, void 0, n) : e;
        };

        var Id = Array.prototype.splice;

        var Rd = function Rd(e, t) {
          for (var n = e ? t.length : 0, r = n - 1; n--;) {
            var i = t[n];

            if (n == r || i !== o) {
              var o = i;
              ze(i) ? Id.call(e, i, 1) : ku(e, i);
            }
          }

          return e;
        },
            Td = Pn(function (e, t) {
          var n = null == e ? 0 : e.length,
              r = xn(e, t);
          return Rd(e, g(t, function (e) {
            return ze(e, n) ? +e : e;
          }).sort(Au)), r;
        });

        var Ed = Math.floor,
            Md = Math.random;

        var Pd = function Pd(e, t) {
          return e + Ed(Md() * (t - e + 1));
        };

        var Ad = parseFloat,
            Od = Math.min,
            jd = Math.random;

        var Dd = function Dd(e, t, n) {
          if (n && "boolean" != typeof n && lt(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = j(e), void 0 === t ? (t = e, e = 0) : t = j(t)), e > t) {
            var r = e;
            e = t, t = r;
          }

          if (n || e % 1 || t % 1) {
            var i = jd();
            return Od(e + i * (t - e + Ad("1e-" + ((i + "").length - 1))), t);
          }

          return Pd(e, t);
        };

        var Ld = Math.ceil,
            Fd = Math.max;

        var Wd = function Wd(e) {
          return function (t, n, r) {
            return r && "number" != typeof r && lt(t, n, r) && (n = r = void 0), t = j(t), void 0 === n ? (n = t, t = 0) : n = j(n), function (e, t, n, r) {
              for (var i = -1, o = Fd(Ld((t - e) / (n || 1)), 0), a = Array(o); o--;) {
                a[r ? o : ++i] = e, e += n;
              }

              return a;
            }(t, n, r = void 0 === r ? t < n ? 1 : -1 : j(r), e);
          };
        },
            Nd = Wd(),
            Vd = Wd(!0),
            Ud = Pn(function (e, t) {
          return et(e, 256, void 0, void 0, void 0, t);
        }),
            Bd = function Bd(e, t, n, r, i) {
          return i(e, function (e, i, o) {
            n = r ? (r = !1, e) : t(n, e, i, o);
          }), n;
        },
            qd = function qd(e, t, n) {
          var r = _(e) ? lr : Bd,
              i = arguments.length < 3;
          return r(e, Mo(t), n, i, Vo);
        },
            Gd = function Gd(e, t, n, r) {
          var i = null == e ? 0 : e.length;

          for (r && i && (n = e[--i]); i--;) {
            n = t(n, e[i], i, e);
          }

          return n;
        },
            zd = function zd(e, t, n) {
          var r = _(e) ? Gd : Bd,
              i = arguments.length < 3;
          return r(e, Mo(t), n, i, Aa);
        },
            Hd = function Hd(e, t) {
          return (_(e) ? ci : Ya)(e, gu(Mo(t)));
        },
            Jd = function Jd(e, t) {
          var n = [];
          if (!e || !e.length) return n;
          var r = -1,
              i = [],
              o = e.length;

          for (t = Mo(t); ++r < o;) {
            var a = e[r];
            t(a, r, e) && (n.push(a), i.push(r));
          }

          return Rd(e, i), n;
        },
            $d = function $d(e, t, n) {
          return t = (n ? lt(e, t, n) : void 0 === t) ? 1 : D(t), qu(bn(e), t);
        },
            Kd = function Kd() {
          var e = arguments,
              t = bn(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        },
            Yd = function Yd(e, t) {
          if ("function" != typeof e) throw new TypeError("Expected a function");
          return t = void 0 === t ? t : D(t), ut(e, t);
        },
            Xd = function Xd(e, t, n) {
          var r = -1,
              i = (t = Sn(t, e)).length;

          for (i || (i = 1, e = void 0); ++r < i;) {
            var o = null == e ? void 0 : e[Cn(t[r])];
            void 0 === o && (r = i, o = n), e = W(o) ? o.call(e) : o;
          }

          return e;
        };

        var Zd = Array.prototype.reverse;

        var Qd = function Qd(e) {
          return null == e ? e : Zd.call(e);
        },
            ef = Hr("round"),
            tf = function tf(e) {
          var t = e.length;
          return t ? e[Pd(0, t - 1)] : void 0;
        },
            nf = function nf(e) {
          return tf(Gs(e));
        },
            rf = function rf(e) {
          return (_(e) ? tf : nf)(e);
        },
            of = function of(e, t) {
          var n = -1,
              r = e.length,
              i = r - 1;

          for (t = void 0 === t ? r : t; ++n < t;) {
            var o = Pd(n, i),
                a = e[o];
            e[o] = e[n], e[n] = a;
          }

          return e.length = t, e;
        },
            af = function af(e, t) {
          return of(be(e), Zr(t, 0, e.length));
        },
            sf = function sf(e, t) {
          var n = Gs(e);
          return of(n, Zr(t, 0, n.length));
        },
            cf = function cf(e, t, n) {
          return t = (n ? lt(e, t, n) : void 0 === t) ? 1 : D(t), (_(e) ? af : sf)(e, t);
        },
            uf = function uf(e, t, n) {
          return null == e ? e : Ru(e, t, n);
        },
            df = function df(e, t, n, r) {
          return r = "function" == typeof r ? r : void 0, null == e ? e : Ru(e, t, n, r);
        },
            ff = function ff(e) {
          return of(be(e));
        },
            lf = function lf(e) {
          return of(Gs(e));
        },
            pf = function pf(e) {
          return (_(e) ? ff : lf)(e);
        },
            hf = function hf(e) {
          if (null == e) return 0;
          if (ft(e)) return Bs(e) ? ed(e) : e.length;
          var t = Pi(e);
          return "[object Map]" == t || "[object Set]" == t ? e.size : Vt(e).length;
        },
            vf = function vf(e, t, n) {
          var r = null == e ? 0 : e.length;
          return r ? (n && "number" != typeof n && lt(e, t, n) ? (t = 0, n = r) : (t = null == t ? 0 : D(t), n = void 0 === n ? r : D(n)), $n(e, t, n)) : [];
        },
            mf = Ur(function (e, t, n) {
          return e + (n ? "_" : "") + t.toLowerCase();
        }),
            gf = function gf(e, t) {
          var n;
          return Vo(e, function (e, r, i) {
            return !(n = t(e, r, i));
          }), !!n;
        },
            _f = function _f(e, t, n) {
          var r = _(e) ? io : gf;
          return n && lt(e, t, n) && (t = void 0), r(e, Mo(t));
        },
            yf = ut(function (e, t) {
          if (null == e) return [];
          var n = t.length;
          return n > 1 && lt(e, t[0], t[1]) ? t = [] : n > 2 && lt(t[0], t[1], t[2]) && (t = [t[0]]), Ou(e, En(t, 1), []);
        });

        var bf = Math.floor,
            Sf = Math.min;

        var Cf = function Cf(e, t, n, r) {
          var i = 0,
              o = null == e ? 0 : e.length;
          if (0 === o) return 0;

          for (var a = (t = n(t)) != t, s = null === t, c = v(t), u = void 0 === t; i < o;) {
            var d = bf((i + o) / 2),
                f = n(e[d]),
                l = void 0 !== f,
                p = null === f,
                h = f == f,
                m = v(f);
            if (a) var g = r || h;else g = u ? h && (r || l) : s ? h && l && (r || !p) : c ? h && l && !p && (r || !m) : !p && !m && (r ? f <= t : f < t);
            g ? i = d + 1 : o = d;
          }

          return Sf(o, 4294967294);
        },
            wf = function wf(e, t, n) {
          var r = 0,
              i = null == e ? r : e.length;

          if ("number" == typeof t && t == t && i <= 2147483647) {
            for (; r < i;) {
              var o = r + i >>> 1,
                  a = e[o];
              null !== a && !v(a) && (n ? a <= t : a < t) ? r = o + 1 : i = o;
            }

            return i;
          }

          return Cf(e, t, F, n);
        },
            kf = function kf(e, t) {
          return wf(e, t);
        },
            xf = function xf(e, t, n) {
          return Cf(e, t, Mo(n));
        },
            If = function If(e, t) {
          var n = null == e ? 0 : e.length;

          if (n) {
            var r = wf(e, t);
            if (r < n && rt(e[r], t)) return r;
          }

          return -1;
        },
            Rf = function Rf(e, t) {
          return wf(e, t, !0);
        },
            Tf = function Tf(e, t, n) {
          return Cf(e, t, Mo(n), !0);
        },
            Ef = function Ef(e, t) {
          if (null != e && e.length) {
            var n = wf(e, t, !0) - 1;
            if (rt(e[n], t)) return n;
          }

          return -1;
        },
            Mf = function Mf(e, t) {
          for (var n = -1, r = e.length, i = 0, o = []; ++n < r;) {
            var a = e[n],
                s = t ? t(a) : a;

            if (!n || !rt(s, c)) {
              var c = s;
              o[i++] = 0 === a ? 0 : a;
            }
          }

          return o;
        },
            Pf = function Pf(e) {
          return e && e.length ? Mf(e) : [];
        },
            Af = function Af(e, t) {
          return e && e.length ? Mf(e, Mo(t)) : [];
        },
            Of = function Of(e, t, n) {
          return n && "number" != typeof n && lt(e, t, n) && (t = n = void 0), (n = void 0 === n ? 4294967295 : n >>> 0) ? (e = bn(e)) && ("string" == typeof t || null != t && !Dc(t)) && !(t = S(t)) && Xn(e) ? Kn(cr(e), 0, n) : e.split(t, n) : [];
        };

        var jf = Math.max;

        var Df = function Df(e, t) {
          if ("function" != typeof e) throw new TypeError("Expected a function");
          return t = null == t ? 0 : jf(D(t), 0), ut(function (n) {
            var r = n[t],
                i = Kn(n, 0, t);
            return r && In(i, r), ie(e, this, i);
          });
        },
            Lf = Ur(function (e, t, n) {
          return e + (n ? " " : "") + dr(t);
        }),
            Ff = function Ff(e, t, n) {
          return e = bn(e), n = null == n ? 0 : Zr(D(n), 0, e.length), t = S(t), e.slice(n, n + t.length) == t;
        },
            Wf = function Wf() {
          return {};
        },
            Nf = function Nf() {
          return "";
        },
            Vf = function Vf() {
          return !0;
        },
            Uf = C(function (e, t) {
          return e - t;
        }, 0),
            Bf = function Bf(e) {
          return e && e.length ? au(e, F) : 0;
        },
            qf = function qf(e, t) {
          return e && e.length ? au(e, Mo(t)) : 0;
        },
            Gf = function Gf(e) {
          var t = null == e ? 0 : e.length;
          return t ? $n(e, 1, t) : [];
        },
            zf = function zf(e, t, n) {
          return e && e.length ? (t = n || void 0 === t ? 1 : D(t), $n(e, 0, t < 0 ? 0 : t)) : [];
        },
            Hf = function Hf(e, t, n) {
          var r = null == e ? 0 : e.length;
          return r ? (t = n || void 0 === t ? 1 : D(t), $n(e, (t = r - t) < 0 ? 0 : t, r)) : [];
        },
            Jf = function Jf(e, t) {
          return e && e.length ? ka(e, Mo(t), !1, !0) : [];
        },
            $f = function $f(e, t) {
          return e && e.length ? ka(e, Mo(t)) : [];
        },
            Kf = function Kf(e, t) {
          return t(e), e;
        };

        var Yf = Object.prototype,
            Xf = Yf.hasOwnProperty;

        var Zf = function Zf(e, t, n, r) {
          return void 0 === e || rt(e, Yf[n]) && !Xf.call(r, n) ? t : e;
        };

        var Qf = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };

        var el = function el(e) {
          return "\\" + Qf[e];
        },
            tl = /<%=([\s\S]+?)%>/g,
            nl = {
          escape: /<%-([\s\S]+?)%>/g,
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: tl,
          variable: "",
          imports: {
            _: {
              escape: Ua
            }
          }
        };

        var rl = /\b__p \+= '';/g,
            il = /\b(__p \+=) '' \+/g,
            ol = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            al = /[()=,{}\[\]\/\s]/,
            sl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            cl = /($^)/,
            ul = /['\n\r\u2028\u2029\\]/g,
            dl = Object.prototype.hasOwnProperty;

        var fl = function fl(e, t, n) {
          var r = nl.imports._.templateSettings || nl;
          n && lt(e, t, n) && (t = void 0), e = bn(e), t = $t({}, t, r, Zf);
          var i,
              o,
              a = $t({}, t.imports, r.imports, Zf),
              s = Ut(a),
              c = qs(a, s),
              u = 0,
              d = t.interpolate || cl,
              f = "__p += '",
              l = RegExp((t.escape || cl).source + "|" + d.source + "|" + (d === tl ? sl : cl).source + "|" + (t.evaluate || cl).source + "|$", "g"),
              p = dl.call(t, "sourceURL") ? "//# sourceURL=" + (t.sourceURL + "").replace(/\s/g, " ") + "\n" : "";
          e.replace(l, function (t, n, r, a, s, c) {
            return r || (r = a), f += e.slice(u, c).replace(ul, el), n && (i = !0, f += "' +\n__e(" + n + ") +\n'"), s && (o = !0, f += "';\n" + s + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), u = c + t.length, t;
          }), f += "';\n";
          var h = dl.call(t, "variable") && t.variable;

          if (h) {
            if (al.test(h)) throw new Error("Invalid `variable` option passed into `_.template`");
          } else f = "with (obj) {\n" + f + "\n}\n";

          f = (o ? f.replace(rl, "") : f).replace(il, "$1").replace(ol, "$1;"), f = "function(" + (h || "obj") + ") {\n" + (h ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
          var v = Un(function () {
            return Function(s, p + "return " + f).apply(void 0, c);
          });
          if (v.source = f, Vn(v)) throw v;
          return v;
        },
            ll = function ll(e, t, n) {
          var r = !0,
              i = !0;
          if ("function" != typeof e) throw new TypeError("Expected a function");
          return T(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Qo(e, t, {
            leading: r,
            maxWait: t,
            trailing: i
          });
        },
            pl = function pl(e, t) {
          return t(e);
        };

        var hl = 4294967295,
            vl = Math.min;

        var ml = function ml(e, t) {
          if ((e = D(e)) < 1 || e > 9007199254740991) return [];
          var n = hl,
              r = vl(e, hl);
          t = Ra(t), e -= hl;

          for (var i = mt(r, t); ++n < e;) {
            t(n);
          }

          return i;
        },
            gl = function gl() {
          return this;
        },
            _l = function _l(e, t) {
          var n = e;
          return n instanceof le && (n = n.value()), lr(t, function (e, t) {
            return t.func.apply(t.thisArg, In([e], t.args));
          }, n);
        },
            yl = function yl() {
          return _l(this.__wrapped__, this.__actions__);
        },
            bl = function bl(e) {
          return bn(e).toLowerCase();
        },
            Sl = function Sl(e) {
          return _(e) ? g(e, Cn) : v(e) ? [e] : be(gn(bn(e)));
        };

        var Cl = function Cl(e) {
          return e ? Zr(D(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0;
        },
            wl = function wl(e) {
          return bn(e).toUpperCase();
        },
            kl = function kl(e, t, n) {
          var r = _(e),
              i = r || It(e) || jt(e);

          if (t = Mo(t), null == n) {
            var o = e && e.constructor;
            n = i ? r ? new o() : [] : T(e) && W(o) ? ne(On(e)) : {};
          }

          return (i ? De : Wo)(e, function (e, r, i) {
            return t(n, e, r, i);
          }), n;
        },
            xl = function xl(e, t) {
          for (var n = e.length; n-- && We(t, e[n], 0) > -1;) {
            ;
          }

          return n;
        },
            Il = function Il(e, t) {
          for (var n = -1, r = e.length; ++n < r && We(t, e[n], 0) > -1;) {
            ;
          }

          return n;
        },
            Rl = function Rl(e, t, n) {
          if ((e = bn(e)) && (n || void 0 === t)) return R(e);
          if (!e || !(t = S(t))) return e;
          var r = cr(e),
              i = cr(t),
              o = Il(r, i),
              a = xl(r, i) + 1;
          return Kn(r, o, a).join("");
        },
            Tl = function Tl(e, t, n) {
          if ((e = bn(e)) && (n || void 0 === t)) return e.slice(0, x(e) + 1);
          if (!e || !(t = S(t))) return e;
          var r = cr(e),
              i = xl(r, cr(t)) + 1;
          return Kn(r, 0, i).join("");
        };

        var El = /^\s+/;

        var Ml = function Ml(e, t, n) {
          if ((e = bn(e)) && (n || void 0 === t)) return e.replace(El, "");
          if (!e || !(t = S(t))) return e;
          var r = cr(e),
              i = Il(r, cr(t));
          return Kn(r, i).join("");
        };

        var Pl = /\w*$/;

        var Al = function Al(e, t) {
          var n = 30,
              r = "...";

          if (T(t)) {
            var i = "separator" in t ? t.separator : i;
            n = "length" in t ? D(t.length) : n, r = "omission" in t ? S(t.omission) : r;
          }

          var o = (e = bn(e)).length;

          if (Xn(e)) {
            var a = cr(e);
            o = a.length;
          }

          if (n >= o) return e;
          var s = n - ed(r);
          if (s < 1) return r;
          var c = a ? Kn(a, 0, s).join("") : e.slice(0, s);
          if (void 0 === i) return c + r;

          if (a && (s += c.length - s), Dc(i)) {
            if (e.slice(s).search(i)) {
              var u,
                  d = c;

              for (i.global || (i = RegExp(i.source, bn(Pl.exec(i)) + "g")), i.lastIndex = 0; u = i.exec(d);) {
                var f = u.index;
              }

              c = c.slice(0, void 0 === f ? s : f);
            }
          } else if (e.indexOf(S(i), s) != s) {
            var l = c.lastIndexOf(i);
            l > -1 && (c = c.slice(0, l));
          }

          return c + r;
        },
            Ol = function Ol(e) {
          return tt(e, 1);
        },
            jl = pr({
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        });

        var Dl = /&(?:amp|lt|gt|quot|#39);/g,
            Ll = RegExp(Dl.source);

        var Fl = function Fl(e) {
          return (e = bn(e)) && Ll.test(e) ? e.replace(Dl, jl) : e;
        },
            Wl = yi && 1 / co(new yi([, -0]))[1] == 1 / 0 ? function (e) {
          return new yi(e);
        } : pe,
            Nl = function Nl(e, t, n) {
          var r = -1,
              i = Ne,
              o = e.length,
              a = !0,
              s = [],
              c = s;
          if (n) a = !1, i = va;else if (o >= 200) {
            var u = t ? null : Wl(e);
            if (u) return co(u);
            a = !1, i = oo, c = new ro();
          } else c = t ? [] : s;

          e: for (; ++r < o;) {
            var d = e[r],
                f = t ? t(d) : d;

            if (d = n || 0 !== d ? d : 0, a && f == f) {
              for (var l = c.length; l--;) {
                if (c[l] === f) continue e;
              }

              t && c.push(f), s.push(d);
            } else i(c, f, n) || (c !== s && c.push(f), s.push(d));
          }

          return s;
        },
            Vl = ut(function (e) {
          return Nl(En(e, 1, oa, !0));
        }),
            Ul = ut(function (e) {
          var t = _a(e);

          return oa(t) && (t = void 0), Nl(En(e, 1, oa, !0), Mo(t));
        }),
            Bl = ut(function (e) {
          var t = _a(e);

          return t = "function" == typeof t ? t : void 0, Nl(En(e, 1, oa, !0), void 0, t);
        }),
            ql = function ql(e) {
          return e && e.length ? Nl(e) : [];
        },
            Gl = function Gl(e, t) {
          return e && e.length ? Nl(e, Mo(t)) : [];
        },
            zl = function zl(e, t) {
          return t = "function" == typeof t ? t : void 0, e && e.length ? Nl(e, void 0, t) : [];
        };

        var Hl = 0;

        var Jl = function Jl(e) {
          var t = ++Hl;
          return bn(e) + t;
        },
            $l = function $l(e, t) {
          return null == e || ku(e, t);
        };

        var Kl = Math.max;

        var Yl = function Yl(e) {
          if (!e || !e.length) return [];
          var t = 0;
          return e = ci(e, function (e) {
            if (oa(e)) return t = Kl(e.length, t), !0;
          }), mt(t, function (t) {
            return g(e, To(t));
          });
        },
            Xl = function Xl(e, t) {
          if (!e || !e.length) return [];
          var n = Yl(e);
          return null == t ? n : g(n, function (e) {
            return ie(t, void 0, e);
          });
        },
            Zl = function Zl(e, t, n, r) {
          return Ru(e, t, n(wn(e, t)), r);
        },
            Ql = function Ql(e, t, n) {
          return null == e ? e : Zl(e, t, Ra(n));
        },
            ep = function ep(e, t, n, r) {
          return r = "function" == typeof r ? r : void 0, null == e ? e : Zl(e, t, Ra(n), r);
        },
            tp = Ur(function (e, t, n) {
          return e + (n ? " " : "") + t.toUpperCase();
        }),
            np = function np(e) {
          return null == e ? [] : qs(e, Ht(e));
        },
            rp = ut(function (e, t) {
          return oa(e) ? ma(e, t) : [];
        }),
            ip = function ip(e, t) {
          return ld(Ra(t), e);
        },
            op = Pn(function (e) {
          var t = e.length,
              n = t ? e[0] : 0,
              r = this.__wrapped__,
              i = function i(t) {
            return xn(t, e);
          };

          return !(t > 1 || this.__actions__.length) && r instanceof le && ze(n) ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
            func: pl,
            args: [i],
            thisArg: void 0
          }), new ye(r, this.__chain__).thru(function (e) {
            return t && !e.length && e.push(void 0), e;
          })) : this.thru(i);
        }),
            ap = function ap() {
          return $r(this);
        },
            sp = function sp() {
          var e = this.__wrapped__;

          if (e instanceof le) {
            var t = e;
            return this.__actions__.length && (t = new le(this)), (t = t.reverse()).__actions__.push({
              func: pl,
              args: [Qd],
              thisArg: void 0
            }), new ye(t, this.__chain__);
          }

          return this.thru(Qd);
        },
            cp = function cp(e, t, n) {
          var r = e.length;
          if (r < 2) return r ? Nl(e[0]) : [];

          for (var i = -1, o = Array(r); ++i < r;) {
            for (var a = e[i], s = -1; ++s < r;) {
              s != i && (o[i] = ma(o[i] || a, e[s], t, n));
            }
          }

          return Nl(En(o, 1), t, n);
        },
            up = ut(function (e) {
          return cp(ci(e, oa));
        }),
            dp = ut(function (e) {
          var t = _a(e);

          return oa(t) && (t = void 0), cp(ci(e, oa), Mo(t));
        }),
            fp = ut(function (e) {
          var t = _a(e);

          return t = "function" == typeof t ? t : void 0, cp(ci(e, oa), void 0, t);
        }),
            lp = ut(Yl),
            pp = function pp(e, t, n) {
          for (var r = -1, i = e.length, o = t.length, a = {}; ++r < i;) {
            var s = r < o ? t[r] : void 0;
            n(a, e[r], s);
          }

          return a;
        },
            hp = function hp(e, t) {
          return pp(e || [], t || [], ot);
        },
            vp = function vp(e, t) {
          return pp(e || [], t || [], Ru);
        },
            mp = ut(function (e) {
          var t = e.length,
              n = t > 1 ? e[t - 1] : void 0;
          return n = "function" == typeof n ? (e.pop(), n) : void 0, Xl(e, n);
        }),
            gp = {
          chunk: Xr,
          compact: eo,
          concat: to,
          difference: ga,
          differenceBy: ya,
          differenceWith: ba,
          drop: Ca,
          dropRight: wa,
          dropRightWhile: xa,
          dropWhile: Ia,
          fill: Ka,
          findIndex: es,
          findLastIndex: as,
          first: us,
          flatten: Mn,
          flattenDeep: vs,
          flattenDepth: ms,
          fromPairs: Is,
          head: us,
          indexOf: $s,
          initial: Ks,
          intersection: Qs,
          intersectionBy: ec,
          intersectionWith: tc,
          join: Bc,
          last: _a,
          lastIndexOf: Jc,
          nth: Cu,
          pull: wd,
          pullAll: Cd,
          pullAllBy: kd,
          pullAllWith: xd,
          pullAt: Td,
          remove: Jd,
          reverse: Qd,
          slice: vf,
          sortedIndex: kf,
          sortedIndexBy: xf,
          sortedIndexOf: If,
          sortedLastIndex: Rf,
          sortedLastIndexBy: Tf,
          sortedLastIndexOf: Ef,
          sortedUniq: Pf,
          sortedUniqBy: Af,
          tail: Gf,
          take: zf,
          takeRight: Hf,
          takeRightWhile: Jf,
          takeWhile: $f,
          union: Vl,
          unionBy: Ul,
          unionWith: Bl,
          uniq: ql,
          uniqBy: Gl,
          uniqWith: zl,
          unzip: Yl,
          unzipWith: Xl,
          without: rp,
          xor: up,
          xorBy: dp,
          xorWith: fp,
          zip: lp,
          zipObject: hp,
          zipObjectDeep: vp,
          zipWith: mp
        },
            _p = {
          countBy: Go,
          each: Ta,
          eachRight: Oa,
          every: Ja,
          filter: Xa,
          find: ts,
          findLast: ss,
          flatMap: ls,
          flatMapDeep: ps,
          flatMapDepth: hs,
          forEach: Ta,
          forEachRight: Oa,
          groupBy: Ps,
          includes: Hs,
          invokeMap: lc,
          keyBy: Gc,
          map: fs,
          orderBy: ju,
          partition: vd,
          reduce: qd,
          reduceRight: zd,
          reject: Hd,
          sample: rf,
          sampleSize: cf,
          shuffle: pf,
          size: hf,
          some: _f,
          sortBy: yf
        },
            yp = {
          now: Yo
        },
            bp = {
          after: L,
          ary: tt,
          before: Bn,
          bind: Gn,
          bindKey: Jn,
          curry: Jo,
          curryRight: Ko,
          debounce: Qo,
          defer: pa,
          delay: ha,
          flip: gs,
          memoize: hn,
          negate: gu,
          once: Pu,
          overArgs: Nu,
          partial: ld,
          partialRight: hd,
          rearg: Ud,
          rest: Yd,
          spread: Df,
          throttle: ll,
          unary: Ol,
          wrap: ip
        },
            Sp = {
          castArray: qr,
          clone: Ki,
          cloneDeep: Yi,
          cloneDeepWith: Xi,
          cloneWith: Zi,
          conformsTo: jo,
          eq: rt,
          gt: js,
          gte: Ds,
          isArguments: St,
          isArray: _,
          isArrayBuffer: hc,
          isArrayLike: ft,
          isArrayLikeObject: oa,
          isBoolean: vc,
          isBuffer: It,
          isDate: gc,
          isElement: _c,
          isEmpty: bc,
          isEqual: Sc,
          isEqualWith: Cc,
          isError: Vn,
          isFinite: kc,
          isFunction: W,
          isInteger: xc,
          isLength: dt,
          isMap: Bi,
          isMatch: Ic,
          isMatchWith: Rc,
          isNaN: Ec,
          isNative: Pc,
          isNil: Ac,
          isNull: Oc,
          isNumber: Tc,
          isObject: T,
          isObjectLike: h,
          isPlainObject: Nn,
          isRegExp: Dc,
          isSafeInteger: Lc,
          isSet: Gi,
          isString: Bs,
          isSymbol: v,
          isTypedArray: jt,
          isUndefined: Fc,
          isWeakMap: Wc,
          isWeakSet: Nc,
          lt: Xc,
          lte: Zc,
          toArray: yu,
          toFinite: j,
          toInteger: D,
          toLength: $a,
          toNumber: O,
          toPlainObject: sa,
          toSafeInteger: Cl,
          toString: bn
        },
            Cp = {
          add: w,
          ceil: Jr,
          divide: Sa,
          floor: _s,
          max: iu,
          maxBy: ou,
          mean: cu,
          meanBy: uu,
          min: pu,
          minBy: hu,
          multiply: mu,
          round: ef,
          subtract: Uf,
          sum: Bf,
          sumBy: qf
        },
            wp = {
          clamp: Qr,
          inRange: Us,
          random: Dd
        },
            kp = {
          assign: qt,
          assignIn: Jt,
          assignInWith: $t,
          assignWith: Kt,
          at: An,
          create: zo,
          defaults: ra,
          defaultsDeep: fa,
          entries: La,
          entriesIn: Fa,
          extend: Jt,
          extendWith: $t,
          findKey: rs,
          findLastKey: cs,
          forIn: Cs,
          forInRight: ws,
          forOwn: ks,
          forOwnRight: xs,
          functions: Ts,
          functionsIn: Es,
          get: kn,
          has: Ws,
          hasIn: Io,
          invert: ic,
          invertBy: cc,
          invoke: fc,
          keys: Ut,
          keysIn: Ht,
          mapKeys: Qc,
          mapValues: eu,
          merge: du,
          mergeWith: da,
          omit: Iu,
          omitBy: Mu,
          pick: md,
          pickBy: Eu,
          result: Xd,
          set: uf,
          setWith: df,
          toPairs: La,
          toPairsIn: Fa,
          transform: kl,
          unset: $l,
          update: Ql,
          updateWith: ep,
          values: Gs,
          valuesIn: np
        },
            xp = {
          at: op,
          chain: $r,
          commit: Qi,
          lodash: ke,
          next: bu,
          plant: gd,
          reverse: sp,
          tap: Kf,
          thru: pl,
          toIterator: gl,
          toJSON: yl,
          value: yl,
          valueOf: yl,
          wrapperChain: ap
        },
            Ip = {
          camelCase: Br,
          capitalize: fr,
          deburr: gr,
          endsWith: ja,
          escape: Ua,
          escapeRegExp: Ga,
          kebabCase: qc,
          lowerCase: $c,
          lowerFirst: Kc,
          pad: od,
          padEnd: ad,
          padStart: sd,
          parseInt: dd,
          repeat: $d,
          replace: Kd,
          snakeCase: mf,
          split: Of,
          startCase: Lf,
          startsWith: Ff,
          template: fl,
          templateSettings: nl,
          toLower: bl,
          toUpper: wl,
          trim: Rl,
          trimEnd: Tl,
          trimStart: Ml,
          truncate: Al,
          unescape: Fl,
          upperCase: tp,
          upperFirst: dr,
          words: Nr
        },
            Rp = {
          attempt: Un,
          bindAll: zn,
          cond: Po,
          conforms: Oo,
          constant: Ae,
          defaultTo: ea,
          flow: bs,
          flowRight: Ss,
          identity: F,
          iteratee: Vc,
          matches: tu,
          matchesProperty: nu,
          method: fu,
          methodOf: lu,
          mixin: vu,
          noop: pe,
          nthArg: wu,
          over: Lu,
          overEvery: Vu,
          overSome: Uu,
          property: Eo,
          propertyOf: _d,
          range: Nd,
          rangeRight: Vd,
          stubArray: ui,
          stubFalse: Ct,
          stubObject: Wf,
          stubString: Nf,
          stubTrue: Vf,
          times: ml,
          toPath: Sl,
          uniqueId: Jl
        };

        var Tp = Math.max,
            Ep = Math.min;
        var Mp = Math.min;
        var Pp,
            Ap,
            Op = 4294967295,
            jp = Array.prototype,
            Dp = Object.prototype.hasOwnProperty,
            Lp = a ? a.iterator : void 0,
            Fp = Math.max,
            Wp = Math.min,
            Np = (Pp = vu, function (e, t, n) {
          if (null == n) {
            var r = T(t),
                i = r && Ut(t),
                o = i && i.length && Rs(t, i);
            (o ? o.length : r) || (n = t, t = e, e = this);
          }

          return Pp(e, t, n);
        });
        ke.after = bp.after, ke.ary = bp.ary, ke.assign = kp.assign, ke.assignIn = kp.assignIn, ke.assignInWith = kp.assignInWith, ke.assignWith = kp.assignWith, ke.at = kp.at, ke.before = bp.before, ke.bind = bp.bind, ke.bindAll = Rp.bindAll, ke.bindKey = bp.bindKey, ke.castArray = Sp.castArray, ke.chain = xp.chain, ke.chunk = gp.chunk, ke.compact = gp.compact, ke.concat = gp.concat, ke.cond = Rp.cond, ke.conforms = Rp.conforms, ke.constant = Rp.constant, ke.countBy = _p.countBy, ke.create = kp.create, ke.curry = bp.curry, ke.curryRight = bp.curryRight, ke.debounce = bp.debounce, ke.defaults = kp.defaults, ke.defaultsDeep = kp.defaultsDeep, ke.defer = bp.defer, ke.delay = bp.delay, ke.difference = gp.difference, ke.differenceBy = gp.differenceBy, ke.differenceWith = gp.differenceWith, ke.drop = gp.drop, ke.dropRight = gp.dropRight, ke.dropRightWhile = gp.dropRightWhile, ke.dropWhile = gp.dropWhile, ke.fill = gp.fill, ke.filter = _p.filter, ke.flatMap = _p.flatMap, ke.flatMapDeep = _p.flatMapDeep, ke.flatMapDepth = _p.flatMapDepth, ke.flatten = gp.flatten, ke.flattenDeep = gp.flattenDeep, ke.flattenDepth = gp.flattenDepth, ke.flip = bp.flip, ke.flow = Rp.flow, ke.flowRight = Rp.flowRight, ke.fromPairs = gp.fromPairs, ke.functions = kp.functions, ke.functionsIn = kp.functionsIn, ke.groupBy = _p.groupBy, ke.initial = gp.initial, ke.intersection = gp.intersection, ke.intersectionBy = gp.intersectionBy, ke.intersectionWith = gp.intersectionWith, ke.invert = kp.invert, ke.invertBy = kp.invertBy, ke.invokeMap = _p.invokeMap, ke.iteratee = Rp.iteratee, ke.keyBy = _p.keyBy, ke.keys = Ut, ke.keysIn = kp.keysIn, ke.map = _p.map, ke.mapKeys = kp.mapKeys, ke.mapValues = kp.mapValues, ke.matches = Rp.matches, ke.matchesProperty = Rp.matchesProperty, ke.memoize = bp.memoize, ke.merge = kp.merge, ke.mergeWith = kp.mergeWith, ke.method = Rp.method, ke.methodOf = Rp.methodOf, ke.mixin = Np, ke.negate = gu, ke.nthArg = Rp.nthArg, ke.omit = kp.omit, ke.omitBy = kp.omitBy, ke.once = bp.once, ke.orderBy = _p.orderBy, ke.over = Rp.over, ke.overArgs = bp.overArgs, ke.overEvery = Rp.overEvery, ke.overSome = Rp.overSome, ke.partial = bp.partial, ke.partialRight = bp.partialRight, ke.partition = _p.partition, ke.pick = kp.pick, ke.pickBy = kp.pickBy, ke.property = Rp.property, ke.propertyOf = Rp.propertyOf, ke.pull = gp.pull, ke.pullAll = gp.pullAll, ke.pullAllBy = gp.pullAllBy, ke.pullAllWith = gp.pullAllWith, ke.pullAt = gp.pullAt, ke.range = Rp.range, ke.rangeRight = Rp.rangeRight, ke.rearg = bp.rearg, ke.reject = _p.reject, ke.remove = gp.remove, ke.rest = bp.rest, ke.reverse = gp.reverse, ke.sampleSize = _p.sampleSize, ke.set = kp.set, ke.setWith = kp.setWith, ke.shuffle = _p.shuffle, ke.slice = gp.slice, ke.sortBy = _p.sortBy, ke.sortedUniq = gp.sortedUniq, ke.sortedUniqBy = gp.sortedUniqBy, ke.split = Ip.split, ke.spread = bp.spread, ke.tail = gp.tail, ke.take = gp.take, ke.takeRight = gp.takeRight, ke.takeRightWhile = gp.takeRightWhile, ke.takeWhile = gp.takeWhile, ke.tap = xp.tap, ke.throttle = bp.throttle, ke.thru = pl, ke.toArray = Sp.toArray, ke.toPairs = kp.toPairs, ke.toPairsIn = kp.toPairsIn, ke.toPath = Rp.toPath, ke.toPlainObject = Sp.toPlainObject, ke.transform = kp.transform, ke.unary = bp.unary, ke.union = gp.union, ke.unionBy = gp.unionBy, ke.unionWith = gp.unionWith, ke.uniq = gp.uniq, ke.uniqBy = gp.uniqBy, ke.uniqWith = gp.uniqWith, ke.unset = kp.unset, ke.unzip = gp.unzip, ke.unzipWith = gp.unzipWith, ke.update = kp.update, ke.updateWith = kp.updateWith, ke.values = kp.values, ke.valuesIn = kp.valuesIn, ke.without = gp.without, ke.words = Ip.words, ke.wrap = bp.wrap, ke.xor = gp.xor, ke.xorBy = gp.xorBy, ke.xorWith = gp.xorWith, ke.zip = gp.zip, ke.zipObject = gp.zipObject, ke.zipObjectDeep = gp.zipObjectDeep, ke.zipWith = gp.zipWith, ke.entries = kp.toPairs, ke.entriesIn = kp.toPairsIn, ke.extend = kp.assignIn, ke.extendWith = kp.assignInWith, Np(ke, ke), ke.add = Cp.add, ke.attempt = Rp.attempt, ke.camelCase = Ip.camelCase, ke.capitalize = Ip.capitalize, ke.ceil = Cp.ceil, ke.clamp = wp.clamp, ke.clone = Sp.clone, ke.cloneDeep = Sp.cloneDeep, ke.cloneDeepWith = Sp.cloneDeepWith, ke.cloneWith = Sp.cloneWith, ke.conformsTo = Sp.conformsTo, ke.deburr = Ip.deburr, ke.defaultTo = Rp.defaultTo, ke.divide = Cp.divide, ke.endsWith = Ip.endsWith, ke.eq = Sp.eq, ke.escape = Ip.escape, ke.escapeRegExp = Ip.escapeRegExp, ke.every = _p.every, ke.find = _p.find, ke.findIndex = gp.findIndex, ke.findKey = kp.findKey, ke.findLast = _p.findLast, ke.findLastIndex = gp.findLastIndex, ke.findLastKey = kp.findLastKey, ke.floor = Cp.floor, ke.forEach = _p.forEach, ke.forEachRight = _p.forEachRight, ke.forIn = kp.forIn, ke.forInRight = kp.forInRight, ke.forOwn = kp.forOwn, ke.forOwnRight = kp.forOwnRight, ke.get = kp.get, ke.gt = Sp.gt, ke.gte = Sp.gte, ke.has = kp.has, ke.hasIn = kp.hasIn, ke.head = gp.head, ke.identity = F, ke.includes = _p.includes, ke.indexOf = gp.indexOf, ke.inRange = wp.inRange, ke.invoke = kp.invoke, ke.isArguments = Sp.isArguments, ke.isArray = _, ke.isArrayBuffer = Sp.isArrayBuffer, ke.isArrayLike = Sp.isArrayLike, ke.isArrayLikeObject = Sp.isArrayLikeObject, ke.isBoolean = Sp.isBoolean, ke.isBuffer = Sp.isBuffer, ke.isDate = Sp.isDate, ke.isElement = Sp.isElement, ke.isEmpty = Sp.isEmpty, ke.isEqual = Sp.isEqual, ke.isEqualWith = Sp.isEqualWith, ke.isError = Sp.isError, ke.isFinite = Sp.isFinite, ke.isFunction = Sp.isFunction, ke.isInteger = Sp.isInteger, ke.isLength = Sp.isLength, ke.isMap = Sp.isMap, ke.isMatch = Sp.isMatch, ke.isMatchWith = Sp.isMatchWith, ke.isNaN = Sp.isNaN, ke.isNative = Sp.isNative, ke.isNil = Sp.isNil, ke.isNull = Sp.isNull, ke.isNumber = Sp.isNumber, ke.isObject = T, ke.isObjectLike = Sp.isObjectLike, ke.isPlainObject = Sp.isPlainObject, ke.isRegExp = Sp.isRegExp, ke.isSafeInteger = Sp.isSafeInteger, ke.isSet = Sp.isSet, ke.isString = Sp.isString, ke.isSymbol = Sp.isSymbol, ke.isTypedArray = Sp.isTypedArray, ke.isUndefined = Sp.isUndefined, ke.isWeakMap = Sp.isWeakMap, ke.isWeakSet = Sp.isWeakSet, ke.join = gp.join, ke.kebabCase = Ip.kebabCase, ke.last = _a, ke.lastIndexOf = gp.lastIndexOf, ke.lowerCase = Ip.lowerCase, ke.lowerFirst = Ip.lowerFirst, ke.lt = Sp.lt, ke.lte = Sp.lte, ke.max = Cp.max, ke.maxBy = Cp.maxBy, ke.mean = Cp.mean, ke.meanBy = Cp.meanBy, ke.min = Cp.min, ke.minBy = Cp.minBy, ke.stubArray = Rp.stubArray, ke.stubFalse = Rp.stubFalse, ke.stubObject = Rp.stubObject, ke.stubString = Rp.stubString, ke.stubTrue = Rp.stubTrue, ke.multiply = Cp.multiply, ke.nth = gp.nth, ke.noop = Rp.noop, ke.now = yp.now, ke.pad = Ip.pad, ke.padEnd = Ip.padEnd, ke.padStart = Ip.padStart, ke.parseInt = Ip.parseInt, ke.random = wp.random, ke.reduce = _p.reduce, ke.reduceRight = _p.reduceRight, ke.repeat = Ip.repeat, ke.replace = Ip.replace, ke.result = kp.result, ke.round = Cp.round, ke.sample = _p.sample, ke.size = _p.size, ke.snakeCase = Ip.snakeCase, ke.some = _p.some, ke.sortedIndex = gp.sortedIndex, ke.sortedIndexBy = gp.sortedIndexBy, ke.sortedIndexOf = gp.sortedIndexOf, ke.sortedLastIndex = gp.sortedLastIndex, ke.sortedLastIndexBy = gp.sortedLastIndexBy, ke.sortedLastIndexOf = gp.sortedLastIndexOf, ke.startCase = Ip.startCase, ke.startsWith = Ip.startsWith, ke.subtract = Cp.subtract, ke.sum = Cp.sum, ke.sumBy = Cp.sumBy, ke.template = Ip.template, ke.times = Rp.times, ke.toFinite = Sp.toFinite, ke.toInteger = D, ke.toLength = Sp.toLength, ke.toLower = Ip.toLower, ke.toNumber = Sp.toNumber, ke.toSafeInteger = Sp.toSafeInteger, ke.toString = Sp.toString, ke.toUpper = Ip.toUpper, ke.trim = Ip.trim, ke.trimEnd = Ip.trimEnd, ke.trimStart = Ip.trimStart, ke.truncate = Ip.truncate, ke.unescape = Ip.unescape, ke.uniqueId = Rp.uniqueId, ke.upperCase = Ip.upperCase, ke.upperFirst = Ip.upperFirst, ke.each = _p.forEach, ke.eachRight = _p.forEachRight, ke.first = gp.head, Np(ke, (Ap = {}, Wo(ke, function (e, t) {
          Dp.call(ke.prototype, t) || (Ap[t] = e);
        }), Ap), {
          chain: !1
        }), ke.VERSION = "4.17.21", (ke.templateSettings = Ip.templateSettings).imports._ = ke, De(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
          ke[e].placeholder = ke;
        }), De(["drop", "take"], function (e, t) {
          le.prototype[e] = function (n) {
            n = void 0 === n ? 1 : Fp(D(n), 0);
            var r = this.__filtered__ && !t ? new le(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = Wp(n, r.__takeCount__) : r.__views__.push({
              size: Wp(n, Op),
              type: e + (r.__dir__ < 0 ? "Right" : "")
            }), r;
          }, le.prototype[e + "Right"] = function (t) {
            return this.reverse()[e](t).reverse();
          };
        }), De(["filter", "map", "takeWhile"], function (e, t) {
          var n = t + 1,
              r = 1 == n || 3 == n;

          le.prototype[e] = function (e) {
            var t = this.clone();
            return t.__iteratees__.push({
              iteratee: Mo(e),
              type: n
            }), t.__filtered__ = t.__filtered__ || r, t;
          };
        }), De(["head", "last"], function (e, t) {
          var n = "take" + (t ? "Right" : "");

          le.prototype[e] = function () {
            return this[n](1).value()[0];
          };
        }), De(["initial", "tail"], function (e, t) {
          var n = "drop" + (t ? "" : "Right");

          le.prototype[e] = function () {
            return this.__filtered__ ? new le(this) : this[n](1);
          };
        }), le.prototype.compact = function () {
          return this.filter(F);
        }, le.prototype.find = function (e) {
          return this.filter(e).head();
        }, le.prototype.findLast = function (e) {
          return this.reverse().find(e);
        }, le.prototype.invokeMap = ut(function (e, t) {
          return "function" == typeof e ? new le(this) : this.map(function (n) {
            return dc(n, e, t);
          });
        }), le.prototype.reject = function (e) {
          return this.filter(gu(Mo(e)));
        }, le.prototype.slice = function (e, t) {
          e = D(e);
          var n = this;
          return n.__filtered__ && (e > 0 || t < 0) ? new le(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), void 0 !== t && (n = (t = D(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n);
        }, le.prototype.takeRightWhile = function (e) {
          return this.reverse().takeWhile(e).reverse();
        }, le.prototype.toArray = function () {
          return this.take(Op);
        }, Wo(le.prototype, function (e, t) {
          var n = /^(?:filter|find|map|reject)|While$/.test(t),
              r = /^(?:head|last)$/.test(t),
              i = ke[r ? "take" + ("last" == t ? "Right" : "") : t],
              o = r || /^find/.test(t);
          i && (ke.prototype[t] = function () {
            var t = this.__wrapped__,
                a = r ? [1] : arguments,
                s = t instanceof le,
                c = a[0],
                u = s || _(t),
                d = function d(e) {
              var t = i.apply(ke, In([e], a));
              return r && f ? t[0] : t;
            };

            u && n && "function" == typeof c && 1 != c.length && (s = u = !1);
            var f = this.__chain__,
                l = !!this.__actions__.length,
                p = o && !f,
                h = s && !l;

            if (!o && u) {
              t = h ? t : new le(this);
              var v = e.apply(t, a);
              return v.__actions__.push({
                func: pl,
                args: [d],
                thisArg: void 0
              }), new ye(v, f);
            }

            return p && h ? e.apply(this, a) : (v = this.thru(d), p ? r ? v.value()[0] : v.value() : v);
          });
        }), De(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
          var t = jp[e],
              n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
              r = /^(?:pop|shift)$/.test(e);

          ke.prototype[e] = function () {
            var e = arguments;

            if (r && !this.__chain__) {
              var i = this.value();
              return t.apply(_(i) ? i : [], e);
            }

            return this[n](function (n) {
              return t.apply(_(n) ? n : [], e);
            });
          };
        }), Wo(le.prototype, function (e, t) {
          var n = ke[t];

          if (n) {
            var r = n.name + "";
            Dp.call(ve, r) || (ve[r] = []), ve[r].push({
              name: t,
              func: n
            });
          }
        }), ve[Ye(void 0, 2).name] = [{
          name: "wrapper",
          func: void 0
        }], le.prototype.clone = function () {
          var e = new le(this.__wrapped__);
          return e.__actions__ = be(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = be(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = be(this.__views__), e;
        }, le.prototype.reverse = function () {
          if (this.__filtered__) {
            var e = new le(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else (e = this.clone()).__dir__ *= -1;

          return e;
        }, le.prototype.value = function () {
          var e = this.__wrapped__.value(),
              t = this.__dir__,
              n = _(e),
              r = t < 0,
              i = n ? e.length : 0,
              o = function (e, t, n) {
            for (var r = -1, i = n.length; ++r < i;) {
              var o = n[r],
                  a = o.size;

              switch (o.type) {
                case "drop":
                  e += a;
                  break;

                case "dropRight":
                  t -= a;
                  break;

                case "take":
                  t = Ep(t, e + a);
                  break;

                case "takeRight":
                  e = Tp(e, t - a);
              }
            }

            return {
              start: e,
              end: t
            };
          }(0, i, this.__views__),
              a = o.start,
              s = o.end,
              c = s - a,
              u = r ? s : a - 1,
              d = this.__iteratees__,
              f = d.length,
              l = 0,
              p = Mp(c, this.__takeCount__);

          if (!n || !r && i == c && p == c) return _l(e, this.__actions__);
          var h = [];

          e: for (; c-- && l < p;) {
            for (var v = -1, m = e[u += t]; ++v < f;) {
              var g = d[v],
                  y = g.iteratee,
                  b = g.type,
                  S = y(m);
              if (2 == b) m = S;else if (!S) {
                if (1 == b) continue e;
                break e;
              }
            }

            h[l++] = m;
          }

          return h;
        }, ke.prototype.at = xp.at, ke.prototype.chain = xp.wrapperChain, ke.prototype.commit = xp.commit, ke.prototype.next = xp.next, ke.prototype.plant = xp.plant, ke.prototype.reverse = xp.reverse, ke.prototype.toJSON = ke.prototype.valueOf = ke.prototype.value = xp.value, ke.prototype.first = ke.prototype.head, Lp && (ke.prototype[Lp] = xp.toIterator);
        var Vp = ke;
      },
      4920: function _(e) {
        "use strict";

        var t = {
          generateIdentifier: function generateIdentifier() {
            return Math.random().toString(36).substr(2, 10);
          }
        };
        t.localCName = t.generateIdentifier(), t.splitLines = function (e) {
          return e.trim().split("\n").map(function (e) {
            return e.trim();
          });
        }, t.splitSections = function (e) {
          return e.split("\nm=").map(function (e, t) {
            return (t > 0 ? "m=" + e : e).trim() + "\r\n";
          });
        }, t.getDescription = function (e) {
          var n = t.splitSections(e);
          return n && n[0];
        }, t.getMediaSections = function (e) {
          var n = t.splitSections(e);
          return n.shift(), n;
        }, t.matchPrefix = function (e, n) {
          return t.splitLines(e).filter(function (e) {
            return 0 === e.indexOf(n);
          });
        }, t.parseCandidate = function (e) {
          for (var t, n = {
            foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
            component: parseInt(t[1], 10),
            protocol: t[2].toLowerCase(),
            priority: parseInt(t[3], 10),
            ip: t[4],
            port: parseInt(t[5], 10),
            type: t[7]
          }, r = 8; r < t.length; r += 2) {
            switch (t[r]) {
              case "raddr":
                n.relatedAddress = t[r + 1];
                break;

              case "rport":
                n.relatedPort = parseInt(t[r + 1], 10);
                break;

              case "tcptype":
                n.tcpType = t[r + 1];
                break;

              case "ufrag":
                n.ufrag = t[r + 1], n.usernameFragment = t[r + 1];
                break;

              default:
                n[t[r]] = t[r + 1];
            }
          }

          return n;
        }, t.writeCandidate = function (e) {
          var t = [];
          t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.ip), t.push(e.port);
          var n = e.type;
          return t.push("typ"), t.push(n), "host" !== n && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ");
        }, t.parseIceOptions = function (e) {
          return e.substr(14).split(" ");
        }, t.parseRtpMap = function (e) {
          var t = e.substr(9).split(" "),
              n = {
            payloadType: parseInt(t.shift(), 10)
          };
          return t = t[0].split("/"), n.name = t[0], n.clockRate = parseInt(t[1], 10), n.channels = 3 === t.length ? parseInt(t[2], 10) : 1, n.numChannels = n.channels, n;
        }, t.writeRtpMap = function (e) {
          var t = e.payloadType;
          void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
          var n = e.channels || e.numChannels || 1;
          return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== n ? "/" + n : "") + "\r\n";
        }, t.parseExtmap = function (e) {
          var t = e.substr(9).split(" ");
          return {
            id: parseInt(t[0], 10),
            direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
            uri: t[1]
          };
        }, t.writeExtmap = function (e) {
          return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n";
        }, t.parseFmtp = function (e) {
          for (var t, n = {}, r = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < r.length; i++) {
            n[(t = r[i].trim().split("="))[0].trim()] = t[1];
          }

          return n;
        }, t.writeFmtp = function (e) {
          var t = "",
              n = e.payloadType;

          if (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
            var r = [];
            Object.keys(e.parameters).forEach(function (t) {
              e.parameters[t] ? r.push(t + "=" + e.parameters[t]) : r.push(t);
            }), t += "a=fmtp:" + n + " " + r.join(";") + "\r\n";
          }

          return t;
        }, t.parseRtcpFb = function (e) {
          var t = e.substr(e.indexOf(" ") + 1).split(" ");
          return {
            type: t.shift(),
            parameter: t.join(" ")
          };
        }, t.writeRtcpFb = function (e) {
          var t = "",
              n = e.payloadType;
          return void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function (e) {
            t += "a=rtcp-fb:" + n + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n";
          }), t;
        }, t.parseSsrcMedia = function (e) {
          var t = e.indexOf(" "),
              n = {
            ssrc: parseInt(e.substr(7, t - 7), 10)
          },
              r = e.indexOf(":", t);
          return r > -1 ? (n.attribute = e.substr(t + 1, r - t - 1), n.value = e.substr(r + 1)) : n.attribute = e.substr(t + 1), n;
        }, t.getMid = function (e) {
          var n = t.matchPrefix(e, "a=mid:")[0];
          if (n) return n.substr(6);
        }, t.parseFingerprint = function (e) {
          var t = e.substr(14).split(" ");
          return {
            algorithm: t[0].toLowerCase(),
            value: t[1]
          };
        }, t.getDtlsParameters = function (e, n) {
          return {
            role: "auto",
            fingerprints: t.matchPrefix(e + n, "a=fingerprint:").map(t.parseFingerprint)
          };
        }, t.writeDtlsParameters = function (e, t) {
          var n = "a=setup:" + t + "\r\n";
          return e.fingerprints.forEach(function (e) {
            n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
          }), n;
        }, t.getIceParameters = function (e, n) {
          var r = t.splitLines(e);
          return {
            usernameFragment: (r = r.concat(t.splitLines(n))).filter(function (e) {
              return 0 === e.indexOf("a=ice-ufrag:");
            })[0].substr(12),
            password: r.filter(function (e) {
              return 0 === e.indexOf("a=ice-pwd:");
            })[0].substr(10)
          };
        }, t.writeIceParameters = function (e) {
          return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n";
        }, t.parseRtpParameters = function (e) {
          for (var n = {
            codecs: [],
            headerExtensions: [],
            fecMechanisms: [],
            rtcp: []
          }, r = t.splitLines(e)[0].split(" "), i = 3; i < r.length; i++) {
            var o = r[i],
                a = t.matchPrefix(e, "a=rtpmap:" + o + " ")[0];

            if (a) {
              var s = t.parseRtpMap(a),
                  c = t.matchPrefix(e, "a=fmtp:" + o + " ");

              switch (s.parameters = c.length ? t.parseFmtp(c[0]) : {}, s.rtcpFeedback = t.matchPrefix(e, "a=rtcp-fb:" + o + " ").map(t.parseRtcpFb), n.codecs.push(s), s.name.toUpperCase()) {
                case "RED":
                case "ULPFEC":
                  n.fecMechanisms.push(s.name.toUpperCase());
              }
            }
          }

          return t.matchPrefix(e, "a=extmap:").forEach(function (e) {
            n.headerExtensions.push(t.parseExtmap(e));
          }), n;
        }, t.writeRtpDescription = function (e, n) {
          var r = "";
          r += "m=" + e + " ", r += n.codecs.length > 0 ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += n.codecs.map(function (e) {
            return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType;
          }).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", n.codecs.forEach(function (e) {
            r += t.writeRtpMap(e), r += t.writeFmtp(e), r += t.writeRtcpFb(e);
          });
          var i = 0;
          return n.codecs.forEach(function (e) {
            e.maxptime > i && (i = e.maxptime);
          }), i > 0 && (r += "a=maxptime:" + i + "\r\n"), r += "a=rtcp-mux\r\n", n.headerExtensions && n.headerExtensions.forEach(function (e) {
            r += t.writeExtmap(e);
          }), r;
        }, t.parseRtpEncodingParameters = function (e) {
          var n,
              r = [],
              i = t.parseRtpParameters(e),
              o = -1 !== i.fecMechanisms.indexOf("RED"),
              a = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
              s = t.matchPrefix(e, "a=ssrc:").map(function (e) {
            return t.parseSsrcMedia(e);
          }).filter(function (e) {
            return "cname" === e.attribute;
          }),
              c = s.length > 0 && s[0].ssrc,
              u = t.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
            return e.substr(17).split(" ").map(function (e) {
              return parseInt(e, 10);
            });
          });
          u.length > 0 && u[0].length > 1 && u[0][0] === c && (n = u[0][1]), i.codecs.forEach(function (e) {
            if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
              var t = {
                ssrc: c,
                codecPayloadType: parseInt(e.parameters.apt, 10)
              };
              c && n && (t.rtx = {
                ssrc: n
              }), r.push(t), o && ((t = JSON.parse(JSON.stringify(t))).fec = {
                ssrc: n,
                mechanism: a ? "red+ulpfec" : "red"
              }, r.push(t));
            }
          }), 0 === r.length && c && r.push({
            ssrc: c
          });
          var d = t.matchPrefix(e, "b=");
          return d.length && (d = 0 === d[0].indexOf("b=TIAS:") ? parseInt(d[0].substr(7), 10) : 0 === d[0].indexOf("b=AS:") ? 1e3 * parseInt(d[0].substr(5), 10) * .95 - 16e3 : void 0, r.forEach(function (e) {
            e.maxBitrate = d;
          })), r;
        }, t.parseRtcpParameters = function (e) {
          var n = {},
              r = t.matchPrefix(e, "a=ssrc:").map(function (e) {
            return t.parseSsrcMedia(e);
          }).filter(function (e) {
            return "cname" === e.attribute;
          })[0];
          r && (n.cname = r.value, n.ssrc = r.ssrc);
          var i = t.matchPrefix(e, "a=rtcp-rsize");
          n.reducedSize = i.length > 0, n.compound = 0 === i.length;
          var o = t.matchPrefix(e, "a=rtcp-mux");
          return n.mux = o.length > 0, n;
        }, t.parseMsid = function (e) {
          var n,
              r = t.matchPrefix(e, "a=msid:");
          if (1 === r.length) return {
            stream: (n = r[0].substr(7).split(" "))[0],
            track: n[1]
          };
          var i = t.matchPrefix(e, "a=ssrc:").map(function (e) {
            return t.parseSsrcMedia(e);
          }).filter(function (e) {
            return "msid" === e.attribute;
          });
          return i.length > 0 ? {
            stream: (n = i[0].value.split(" "))[0],
            track: n[1]
          } : void 0;
        }, t.generateSessionId = function () {
          return Math.random().toString().substr(2, 21);
        }, t.writeSessionBoilerplate = function (e, n) {
          var r = void 0 !== n ? n : 2;
          return "v=0\r\no=thisisadapterortc " + (e || t.generateSessionId()) + " " + r + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
        }, t.writeMediaSection = function (e, n, r, i) {
          var o = t.writeRtpDescription(e.kind, n);

          if (o += t.writeIceParameters(e.iceGatherer.getLocalParameters()), o += t.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active"), o += "a=mid:" + e.mid + "\r\n", e.direction ? o += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? o += "a=sendrecv\r\n" : e.rtpSender ? o += "a=sendonly\r\n" : e.rtpReceiver ? o += "a=recvonly\r\n" : o += "a=inactive\r\n", e.rtpSender) {
            var a = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
            o += "a=" + a, o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + a, e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + a, o += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n");
          }

          return o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + t.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + t.localCName + "\r\n"), o;
        }, t.getDirection = function (e, n) {
          for (var r = t.splitLines(e), i = 0; i < r.length; i++) {
            switch (r[i]) {
              case "a=sendrecv":
              case "a=sendonly":
              case "a=recvonly":
              case "a=inactive":
                return r[i].substr(2);
            }
          }

          return n ? t.getDirection(n) : "sendrecv";
        }, t.getKind = function (e) {
          return t.splitLines(e)[0].split(" ")[0].substr(2);
        }, t.isRejected = function (e) {
          return "0" === e.split(" ", 2)[1];
        }, t.parseMLine = function (e) {
          var n = t.splitLines(e)[0].substr(2).split(" ");
          return {
            kind: n[0],
            port: parseInt(n[1], 10),
            protocol: n[2],
            fmt: n.slice(3).join(" ")
          };
        }, t.parseOLine = function (e) {
          var n = t.matchPrefix(e, "o=")[0].substr(2).split(" ");
          return {
            username: n[0],
            sessionId: n[1],
            sessionVersion: parseInt(n[2], 10),
            netType: n[3],
            addressType: n[4],
            address: n[5]
          };
        }, e.exports = t;
      },
      2539: function _(e, t, n) {
        "use strict";

        var r = n(4920);

        function i(e, t, n, i, o) {
          var a = r.writeRtpDescription(e.kind, t);

          if (a += r.writeIceParameters(e.iceGatherer.getLocalParameters()), a += r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === n ? "actpass" : o || "active"), a += "a=mid:" + e.mid + "\r\n", e.rtpSender && e.rtpReceiver ? a += "a=sendrecv\r\n" : e.rtpSender ? a += "a=sendonly\r\n" : e.rtpReceiver ? a += "a=recvonly\r\n" : a += "a=inactive\r\n", e.rtpSender) {
            var s = e.rtpSender._initialTrackId || e.rtpSender.track.id;
            e.rtpSender._initialTrackId = s;
            var c = "msid:" + (i ? i.id : "-") + " " + s + "\r\n";
            a += "a=" + c, a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + c, e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + c, a += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n");
          }

          return a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + r.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + r.localCName + "\r\n"), a;
        }

        function o(e, t) {
          var n = {
            codecs: [],
            headerExtensions: [],
            fecMechanisms: []
          },
              r = function r(e, t) {
            e = parseInt(e, 10);

            for (var n = 0; n < t.length; n++) {
              if (t[n].payloadType === e || t[n].preferredPayloadType === e) return t[n];
            }
          },
              i = function i(e, t, n, _i2) {
            var o = r(e.parameters.apt, n),
                a = r(t.parameters.apt, _i2);
            return o && a && o.name.toLowerCase() === a.name.toLowerCase();
          };

          return e.codecs.forEach(function (r) {
            for (var o = 0; o < t.codecs.length; o++) {
              var a = t.codecs[o];

              if (r.name.toLowerCase() === a.name.toLowerCase() && r.clockRate === a.clockRate) {
                if ("rtx" === r.name.toLowerCase() && r.parameters && a.parameters.apt && !i(r, a, e.codecs, t.codecs)) continue;
                (a = JSON.parse(JSON.stringify(a))).numChannels = Math.min(r.numChannels, a.numChannels), n.codecs.push(a), a.rtcpFeedback = a.rtcpFeedback.filter(function (e) {
                  for (var t = 0; t < r.rtcpFeedback.length; t++) {
                    if (r.rtcpFeedback[t].type === e.type && r.rtcpFeedback[t].parameter === e.parameter) return !0;
                  }

                  return !1;
                });
                break;
              }
            }
          }), e.headerExtensions.forEach(function (e) {
            for (var r = 0; r < t.headerExtensions.length; r++) {
              var i = t.headerExtensions[r];

              if (e.uri === i.uri) {
                n.headerExtensions.push(i);
                break;
              }
            }
          }), n;
        }

        function a(e, t, n) {
          return -1 !== {
            offer: {
              setLocalDescription: ["stable", "have-local-offer"],
              setRemoteDescription: ["stable", "have-remote-offer"]
            },
            answer: {
              setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
              setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
            }
          }[t][e].indexOf(n);
        }

        function s(e, t) {
          var n = e.getRemoteCandidates().find(function (e) {
            return t.foundation === e.foundation && t.ip === e.ip && t.port === e.port && t.priority === e.priority && t.protocol === e.protocol && t.type === e.type;
          });
          return n || e.addRemoteCandidate(t), !n;
        }

        function c(e, t) {
          var n = new Error(t);
          return n.name = e, n.code = {
            NotSupportedError: 9,
            InvalidStateError: 11,
            InvalidAccessError: 15,
            TypeError: void 0,
            OperationError: void 0
          }[e], n;
        }

        e.exports = function (e, t) {
          function n(t, n) {
            n.addTrack(t), n.dispatchEvent(new e.MediaStreamTrackEvent("addtrack", {
              track: t
            }));
          }

          function u(t, n, r, i) {
            var o = new Event("track");
            o.track = n, o.receiver = r, o.transceiver = {
              receiver: r
            }, o.streams = i, e.setTimeout(function () {
              t._dispatchEvent("track", o);
            });
          }

          var d = function d(n) {
            var i = this,
                o = document.createDocumentFragment();
            if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function (e) {
              i[e] = o[e].bind(o);
            }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", n = JSON.parse(JSON.stringify(n || {})), this.usingBundle = "max-bundle" === n.bundlePolicy, "negotiate" === n.rtcpMuxPolicy) throw c("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");

            switch (n.rtcpMuxPolicy || (n.rtcpMuxPolicy = "require"), n.iceTransportPolicy) {
              case "all":
              case "relay":
                break;

              default:
                n.iceTransportPolicy = "all";
            }

            switch (n.bundlePolicy) {
              case "balanced":
              case "max-compat":
              case "max-bundle":
                break;

              default:
                n.bundlePolicy = "balanced";
            }

            if (n.iceServers = function (e, t) {
              var n = !1;
              return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
                if (e && (e.urls || e.url)) {
                  var r = e.urls || e.url;
                  e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                  var i = "string" == typeof r;
                  return i && (r = [r]), r = r.filter(function (e) {
                    return 0 !== e.indexOf("turn:") || -1 === e.indexOf("transport=udp") || -1 !== e.indexOf("turn:[") || n ? 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp") : (n = !0, !0);
                  }), delete e.url, e.urls = i ? r[0] : r, !!r.length;
                }
              });
            }(n.iceServers || [], t), this._iceGatherers = [], n.iceCandidatePoolSize) for (var a = n.iceCandidatePoolSize; a > 0; a--) {
              this._iceGatherers.push(new e.RTCIceGatherer({
                iceServers: n.iceServers,
                gatherPolicy: n.iceTransportPolicy
              }));
            } else n.iceCandidatePoolSize = 0;
            this._config = n, this.transceivers = [], this._sdpSessionId = r.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1;
          };

          Object.defineProperty(d.prototype, "localDescription", {
            configurable: !0,
            get: function get() {
              return this._localDescription;
            }
          }), Object.defineProperty(d.prototype, "remoteDescription", {
            configurable: !0,
            get: function get() {
              return this._remoteDescription;
            }
          }), d.prototype.onicecandidate = null, d.prototype.onaddstream = null, d.prototype.ontrack = null, d.prototype.onremovestream = null, d.prototype.onsignalingstatechange = null, d.prototype.oniceconnectionstatechange = null, d.prototype.onconnectionstatechange = null, d.prototype.onicegatheringstatechange = null, d.prototype.onnegotiationneeded = null, d.prototype.ondatachannel = null, d.prototype._dispatchEvent = function (e, t) {
            this._isClosed || (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t));
          }, d.prototype._emitGatheringStateChange = function () {
            var e = new Event("icegatheringstatechange");

            this._dispatchEvent("icegatheringstatechange", e);
          }, d.prototype.getConfiguration = function () {
            return this._config;
          }, d.prototype.getLocalStreams = function () {
            return this.localStreams;
          }, d.prototype.getRemoteStreams = function () {
            return this.remoteStreams;
          }, d.prototype._createTransceiver = function (e, t) {
            var n = this.transceivers.length > 0,
                r = {
              track: null,
              iceGatherer: null,
              iceTransport: null,
              dtlsTransport: null,
              localCapabilities: null,
              remoteCapabilities: null,
              rtpSender: null,
              rtpReceiver: null,
              kind: e,
              mid: null,
              sendEncodingParameters: null,
              recvEncodingParameters: null,
              stream: null,
              associatedRemoteMediaStreams: [],
              wantReceive: !0
            };
            if (this.usingBundle && n) r.iceTransport = this.transceivers[0].iceTransport, r.dtlsTransport = this.transceivers[0].dtlsTransport;else {
              var i = this._createIceAndDtlsTransports();

              r.iceTransport = i.iceTransport, r.dtlsTransport = i.dtlsTransport;
            }
            return t || this.transceivers.push(r), r;
          }, d.prototype.addTrack = function (t, n) {
            if (this._isClosed) throw c("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
            var r;
            if (this.transceivers.find(function (e) {
              return e.track === t;
            })) throw c("InvalidAccessError", "Track already exists.");

            for (var i = 0; i < this.transceivers.length; i++) {
              this.transceivers[i].track || this.transceivers[i].kind !== t.kind || (r = this.transceivers[i]);
            }

            return r || (r = this._createTransceiver(t.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(n) && this.localStreams.push(n), r.track = t, r.stream = n, r.rtpSender = new e.RTCRtpSender(t, r.dtlsTransport), r.rtpSender;
          }, d.prototype.addStream = function (e) {
            var n = this;
            if (t >= 15025) e.getTracks().forEach(function (t) {
              n.addTrack(t, e);
            });else {
              var r = e.clone();
              e.getTracks().forEach(function (e, t) {
                var n = r.getTracks()[t];
                e.addEventListener("enabled", function (e) {
                  n.enabled = e.enabled;
                });
              }), r.getTracks().forEach(function (e) {
                n.addTrack(e, r);
              });
            }
          }, d.prototype.removeTrack = function (t) {
            if (this._isClosed) throw c("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
            if (!(t instanceof e.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
            var n = this.transceivers.find(function (e) {
              return e.rtpSender === t;
            });
            if (!n) throw c("InvalidAccessError", "Sender was not created by this connection.");
            var r = n.stream;
            n.rtpSender.stop(), n.rtpSender = null, n.track = null, n.stream = null, -1 === this.transceivers.map(function (e) {
              return e.stream;
            }).indexOf(r) && this.localStreams.indexOf(r) > -1 && this.localStreams.splice(this.localStreams.indexOf(r), 1), this._maybeFireNegotiationNeeded();
          }, d.prototype.removeStream = function (e) {
            var t = this;
            e.getTracks().forEach(function (e) {
              var n = t.getSenders().find(function (t) {
                return t.track === e;
              });
              n && t.removeTrack(n);
            });
          }, d.prototype.getSenders = function () {
            return this.transceivers.filter(function (e) {
              return !!e.rtpSender;
            }).map(function (e) {
              return e.rtpSender;
            });
          }, d.prototype.getReceivers = function () {
            return this.transceivers.filter(function (e) {
              return !!e.rtpReceiver;
            }).map(function (e) {
              return e.rtpReceiver;
            });
          }, d.prototype._createIceGatherer = function (t, n) {
            var r = this;
            if (n && t > 0) return this.transceivers[0].iceGatherer;
            if (this._iceGatherers.length) return this._iceGatherers.shift();
            var i = new e.RTCIceGatherer({
              iceServers: this._config.iceServers,
              gatherPolicy: this._config.iceTransportPolicy
            });
            return Object.defineProperty(i, "state", {
              value: "new",
              writable: !0
            }), this.transceivers[t].bufferedCandidateEvents = [], this.transceivers[t].bufferCandidates = function (e) {
              var n = !e.candidate || 0 === Object.keys(e.candidate).length;
              i.state = n ? "completed" : "gathering", null !== r.transceivers[t].bufferedCandidateEvents && r.transceivers[t].bufferedCandidateEvents.push(e);
            }, i.addEventListener("localcandidate", this.transceivers[t].bufferCandidates), i;
          }, d.prototype._gather = function (t, n) {
            var i = this,
                o = this.transceivers[n].iceGatherer;

            if (!o.onlocalcandidate) {
              var a = this.transceivers[n].bufferedCandidateEvents;
              this.transceivers[n].bufferedCandidateEvents = null, o.removeEventListener("localcandidate", this.transceivers[n].bufferCandidates), o.onlocalcandidate = function (e) {
                if (!(i.usingBundle && n > 0)) {
                  var a = new Event("icecandidate");
                  a.candidate = {
                    sdpMid: t,
                    sdpMLineIndex: n
                  };
                  var s = e.candidate,
                      c = !s || 0 === Object.keys(s).length;
                  if (c) "new" !== o.state && "gathering" !== o.state || (o.state = "completed");else {
                    "new" === o.state && (o.state = "gathering"), s.component = 1, s.ufrag = o.getLocalParameters().usernameFragment;
                    var u = r.writeCandidate(s);
                    a.candidate = Object.assign(a.candidate, r.parseCandidate(u)), a.candidate.candidate = u, a.candidate.toJSON = function () {
                      return {
                        candidate: a.candidate.candidate,
                        sdpMid: a.candidate.sdpMid,
                        sdpMLineIndex: a.candidate.sdpMLineIndex,
                        usernameFragment: a.candidate.usernameFragment
                      };
                    };
                  }
                  var d = r.getMediaSections(i._localDescription.sdp);
                  d[a.candidate.sdpMLineIndex] += c ? "a=end-of-candidates\r\n" : "a=" + a.candidate.candidate + "\r\n", i._localDescription.sdp = r.getDescription(i._localDescription.sdp) + d.join("");
                  var f = i.transceivers.every(function (e) {
                    return e.iceGatherer && "completed" === e.iceGatherer.state;
                  });
                  "gathering" !== i.iceGatheringState && (i.iceGatheringState = "gathering", i._emitGatheringStateChange()), c || i._dispatchEvent("icecandidate", a), f && (i._dispatchEvent("icecandidate", new Event("icecandidate")), i.iceGatheringState = "complete", i._emitGatheringStateChange());
                }
              }, e.setTimeout(function () {
                a.forEach(function (e) {
                  o.onlocalcandidate(e);
                });
              }, 0);
            }
          }, d.prototype._createIceAndDtlsTransports = function () {
            var t = this,
                n = new e.RTCIceTransport(null);

            n.onicestatechange = function () {
              t._updateIceConnectionState(), t._updateConnectionState();
            };

            var r = new e.RTCDtlsTransport(n);
            return r.ondtlsstatechange = function () {
              t._updateConnectionState();
            }, r.onerror = function () {
              Object.defineProperty(r, "state", {
                value: "failed",
                writable: !0
              }), t._updateConnectionState();
            }, {
              iceTransport: n,
              dtlsTransport: r
            };
          }, d.prototype._disposeIceAndDtlsTransports = function (e) {
            var t = this.transceivers[e].iceGatherer;
            t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
            var n = this.transceivers[e].iceTransport;
            n && (delete n.onicestatechange, delete this.transceivers[e].iceTransport);
            var r = this.transceivers[e].dtlsTransport;
            r && (delete r.ondtlsstatechange, delete r.onerror, delete this.transceivers[e].dtlsTransport);
          }, d.prototype._transceive = function (e, n, i) {
            var a = o(e.localCapabilities, e.remoteCapabilities);
            n && e.rtpSender && (a.encodings = e.sendEncodingParameters, a.rtcp = {
              cname: r.localCName,
              compound: e.rtcpParameters.compound
            }, e.recvEncodingParameters.length && (a.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(a)), i && e.rtpReceiver && a.codecs.length > 0 && ("video" === e.kind && e.recvEncodingParameters && t < 15019 && e.recvEncodingParameters.forEach(function (e) {
              delete e.rtx;
            }), e.recvEncodingParameters.length ? a.encodings = e.recvEncodingParameters : a.encodings = [{}], a.rtcp = {
              compound: e.rtcpParameters.compound
            }, e.rtcpParameters.cname && (a.rtcp.cname = e.rtcpParameters.cname), e.sendEncodingParameters.length && (a.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(a));
          }, d.prototype.setLocalDescription = function (e) {
            var t,
                n,
                i = this;
            if (-1 === ["offer", "answer"].indexOf(e.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + e.type + '"'));
            if (!a("setLocalDescription", e.type, i.signalingState) || i._isClosed) return Promise.reject(c("InvalidStateError", "Can not set local " + e.type + " in state " + i.signalingState));
            if ("offer" === e.type) t = r.splitSections(e.sdp), n = t.shift(), t.forEach(function (e, t) {
              var n = r.parseRtpParameters(e);
              i.transceivers[t].localCapabilities = n;
            }), i.transceivers.forEach(function (e, t) {
              i._gather(e.mid, t);
            });else if ("answer" === e.type) {
              t = r.splitSections(i._remoteDescription.sdp), n = t.shift();
              var s = r.matchPrefix(n, "a=ice-lite").length > 0;
              t.forEach(function (e, t) {
                var a = i.transceivers[t],
                    c = a.iceGatherer,
                    u = a.iceTransport,
                    d = a.dtlsTransport,
                    f = a.localCapabilities,
                    l = a.remoteCapabilities;

                if (!(r.isRejected(e) && 0 === r.matchPrefix(e, "a=bundle-only").length || a.rejected)) {
                  var p = r.getIceParameters(e, n),
                      h = r.getDtlsParameters(e, n);
                  s && (h.role = "server"), i.usingBundle && 0 !== t || (i._gather(a.mid, t), "new" === u.state && u.start(c, p, s ? "controlling" : "controlled"), "new" === d.state && d.start(h));
                  var v = o(f, l);

                  i._transceive(a, v.codecs.length > 0, !1);
                }
              });
            }
            return i._localDescription = {
              type: e.type,
              sdp: e.sdp
            }, "offer" === e.type ? i._updateSignalingState("have-local-offer") : i._updateSignalingState("stable"), Promise.resolve();
          }, d.prototype.setRemoteDescription = function (i) {
            var d = this;
            if (-1 === ["offer", "answer"].indexOf(i.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + i.type + '"'));
            if (!a("setRemoteDescription", i.type, d.signalingState) || d._isClosed) return Promise.reject(c("InvalidStateError", "Can not set remote " + i.type + " in state " + d.signalingState));
            var f = {};
            d.remoteStreams.forEach(function (e) {
              f[e.id] = e;
            });
            var l = [],
                p = r.splitSections(i.sdp),
                h = p.shift(),
                v = r.matchPrefix(h, "a=ice-lite").length > 0,
                m = r.matchPrefix(h, "a=group:BUNDLE ").length > 0;
            d.usingBundle = m;
            var g = r.matchPrefix(h, "a=ice-options:")[0];
            return d.canTrickleIceCandidates = !!g && g.substr(14).split(" ").indexOf("trickle") >= 0, p.forEach(function (a, c) {
              var u = r.splitLines(a),
                  p = r.getKind(a),
                  g = r.isRejected(a) && 0 === r.matchPrefix(a, "a=bundle-only").length,
                  _ = u[0].substr(2).split(" ")[2],
                  y = r.getDirection(a, h),
                  b = r.parseMsid(a),
                  S = r.getMid(a) || r.generateIdentifier();
              if (g || "application" === p && ("DTLS/SCTP" === _ || "UDP/DTLS/SCTP" === _)) d.transceivers[c] = {
                mid: S,
                kind: p,
                protocol: _,
                rejected: !0
              };else {
                var C, w, k, x, I, R, T, E, M;
                !g && d.transceivers[c] && d.transceivers[c].rejected && (d.transceivers[c] = d._createTransceiver(p, !0));
                var P,
                    A,
                    O = r.parseRtpParameters(a);
                g || (P = r.getIceParameters(a, h), (A = r.getDtlsParameters(a, h)).role = "client"), T = r.parseRtpEncodingParameters(a);
                var j = r.parseRtcpParameters(a),
                    D = r.matchPrefix(a, "a=end-of-candidates", h).length > 0,
                    L = r.matchPrefix(a, "a=candidate:").map(function (e) {
                  return r.parseCandidate(e);
                }).filter(function (e) {
                  return 1 === e.component;
                });
                if (("offer" === i.type || "answer" === i.type) && !g && m && c > 0 && d.transceivers[c] && (d._disposeIceAndDtlsTransports(c), d.transceivers[c].iceGatherer = d.transceivers[0].iceGatherer, d.transceivers[c].iceTransport = d.transceivers[0].iceTransport, d.transceivers[c].dtlsTransport = d.transceivers[0].dtlsTransport, d.transceivers[c].rtpSender && d.transceivers[c].rtpSender.setTransport(d.transceivers[0].dtlsTransport), d.transceivers[c].rtpReceiver && d.transceivers[c].rtpReceiver.setTransport(d.transceivers[0].dtlsTransport)), "offer" !== i.type || g) "answer" !== i.type || g || (w = (C = d.transceivers[c]).iceGatherer, k = C.iceTransport, x = C.dtlsTransport, I = C.rtpReceiver, R = C.sendEncodingParameters, E = C.localCapabilities, d.transceivers[c].recvEncodingParameters = T, d.transceivers[c].remoteCapabilities = O, d.transceivers[c].rtcpParameters = j, L.length && "new" === k.state && (!v && !D || m && 0 !== c ? L.forEach(function (e) {
                  s(C.iceTransport, e);
                }) : k.setRemoteCandidates(L)), m && 0 !== c || ("new" === k.state && k.start(w, P, "controlling"), "new" === x.state && x.start(A)), !o(C.localCapabilities, C.remoteCapabilities).codecs.filter(function (e) {
                  return "rtx" === e.name.toLowerCase();
                }).length && C.sendEncodingParameters[0].rtx && delete C.sendEncodingParameters[0].rtx, d._transceive(C, "sendrecv" === y || "recvonly" === y, "sendrecv" === y || "sendonly" === y), !I || "sendrecv" !== y && "sendonly" !== y ? delete C.rtpReceiver : (M = I.track, b ? (f[b.stream] || (f[b.stream] = new e.MediaStream()), n(M, f[b.stream]), l.push([M, I, f[b.stream]])) : (f.default || (f.default = new e.MediaStream()), n(M, f.default), l.push([M, I, f.default]))));else {
                  (C = d.transceivers[c] || d._createTransceiver(p)).mid = S, C.iceGatherer || (C.iceGatherer = d._createIceGatherer(c, m)), L.length && "new" === C.iceTransport.state && (!D || m && 0 !== c ? L.forEach(function (e) {
                    s(C.iceTransport, e);
                  }) : C.iceTransport.setRemoteCandidates(L)), E = e.RTCRtpReceiver.getCapabilities(p), t < 15019 && (E.codecs = E.codecs.filter(function (e) {
                    return "rtx" !== e.name;
                  })), R = C.sendEncodingParameters || [{
                    ssrc: 1001 * (2 * c + 2)
                  }];
                  var F,
                      W = !1;
                  "sendrecv" === y || "sendonly" === y ? (W = !C.rtpReceiver, I = C.rtpReceiver || new e.RTCRtpReceiver(C.dtlsTransport, p), W && (M = I.track, b && "-" === b.stream || (b ? (f[b.stream] || (f[b.stream] = new e.MediaStream(), Object.defineProperty(f[b.stream], "id", {
                    get: function get() {
                      return b.stream;
                    }
                  })), Object.defineProperty(M, "id", {
                    get: function get() {
                      return b.track;
                    }
                  }), F = f[b.stream]) : (f.default || (f.default = new e.MediaStream()), F = f.default)), F && (n(M, F), C.associatedRemoteMediaStreams.push(F)), l.push([M, I, F]))) : C.rtpReceiver && C.rtpReceiver.track && (C.associatedRemoteMediaStreams.forEach(function (t) {
                    var n = t.getTracks().find(function (e) {
                      return e.id === C.rtpReceiver.track.id;
                    });
                    n && function (t, n) {
                      n.removeTrack(t), n.dispatchEvent(new e.MediaStreamTrackEvent("removetrack", {
                        track: t
                      }));
                    }(n, t);
                  }), C.associatedRemoteMediaStreams = []), C.localCapabilities = E, C.remoteCapabilities = O, C.rtpReceiver = I, C.rtcpParameters = j, C.sendEncodingParameters = R, C.recvEncodingParameters = T, d._transceive(d.transceivers[c], !1, W);
                }
              }
            }), void 0 === d._dtlsRole && (d._dtlsRole = "offer" === i.type ? "active" : "passive"), d._remoteDescription = {
              type: i.type,
              sdp: i.sdp
            }, "offer" === i.type ? d._updateSignalingState("have-remote-offer") : d._updateSignalingState("stable"), Object.keys(f).forEach(function (t) {
              var n = f[t];

              if (n.getTracks().length) {
                if (-1 === d.remoteStreams.indexOf(n)) {
                  d.remoteStreams.push(n);
                  var r = new Event("addstream");
                  r.stream = n, e.setTimeout(function () {
                    d._dispatchEvent("addstream", r);
                  });
                }

                l.forEach(function (e) {
                  var t = e[0],
                      r = e[1];
                  n.id === e[2].id && u(d, t, r, [n]);
                });
              }
            }), l.forEach(function (e) {
              e[2] || u(d, e[0], e[1], []);
            }), e.setTimeout(function () {
              d && d.transceivers && d.transceivers.forEach(function (e) {
                e.iceTransport && "new" === e.iceTransport.state && e.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e.iceTransport.addRemoteCandidate({}));
              });
            }, 4e3), Promise.resolve();
          }, d.prototype.close = function () {
            this.transceivers.forEach(function (e) {
              e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop();
            }), this._isClosed = !0, this._updateSignalingState("closed");
          }, d.prototype._updateSignalingState = function (e) {
            this.signalingState = e;
            var t = new Event("signalingstatechange");

            this._dispatchEvent("signalingstatechange", t);
          }, d.prototype._maybeFireNegotiationNeeded = function () {
            var t = this;
            "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, e.setTimeout(function () {
              if (t.needNegotiation) {
                t.needNegotiation = !1;
                var e = new Event("negotiationneeded");

                t._dispatchEvent("negotiationneeded", e);
              }
            }, 0));
          }, d.prototype._updateIceConnectionState = function () {
            var e,
                t = {
              new: 0,
              closed: 0,
              checking: 0,
              connected: 0,
              completed: 0,
              disconnected: 0,
              failed: 0
            };

            if (this.transceivers.forEach(function (e) {
              e.iceTransport && !e.rejected && t[e.iceTransport.state]++;
            }), e = "new", t.failed > 0 ? e = "failed" : t.checking > 0 ? e = "checking" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 ? e = "connected" : t.completed > 0 && (e = "completed"), e !== this.iceConnectionState) {
              this.iceConnectionState = e;
              var n = new Event("iceconnectionstatechange");

              this._dispatchEvent("iceconnectionstatechange", n);
            }
          }, d.prototype._updateConnectionState = function () {
            var e,
                t = {
              new: 0,
              closed: 0,
              connecting: 0,
              connected: 0,
              completed: 0,
              disconnected: 0,
              failed: 0
            };

            if (this.transceivers.forEach(function (e) {
              e.iceTransport && e.dtlsTransport && !e.rejected && (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++);
            }), t.connected += t.completed, e = "new", t.failed > 0 ? e = "failed" : t.connecting > 0 ? e = "connecting" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 && (e = "connected"), e !== this.connectionState) {
              this.connectionState = e;
              var n = new Event("connectionstatechange");

              this._dispatchEvent("connectionstatechange", n);
            }
          }, d.prototype.createOffer = function () {
            var n = this;
            if (n._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createOffer after close"));
            var o = n.transceivers.filter(function (e) {
              return "audio" === e.kind;
            }).length,
                a = n.transceivers.filter(function (e) {
              return "video" === e.kind;
            }).length,
                s = arguments[0];

            if (s) {
              if (s.mandatory || s.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
              void 0 !== s.offerToReceiveAudio && (o = !0 === s.offerToReceiveAudio ? 1 : !1 === s.offerToReceiveAudio ? 0 : s.offerToReceiveAudio), void 0 !== s.offerToReceiveVideo && (a = !0 === s.offerToReceiveVideo ? 1 : !1 === s.offerToReceiveVideo ? 0 : s.offerToReceiveVideo);
            }

            for (n.transceivers.forEach(function (e) {
              "audio" === e.kind ? --o < 0 && (e.wantReceive = !1) : "video" === e.kind && --a < 0 && (e.wantReceive = !1);
            }); o > 0 || a > 0;) {
              o > 0 && (n._createTransceiver("audio"), o--), a > 0 && (n._createTransceiver("video"), a--);
            }

            var u = r.writeSessionBoilerplate(n._sdpSessionId, n._sdpSessionVersion++);
            n.transceivers.forEach(function (i, o) {
              var a = i.track,
                  s = i.kind,
                  c = i.mid || r.generateIdentifier();
              i.mid = c, i.iceGatherer || (i.iceGatherer = n._createIceGatherer(o, n.usingBundle));
              var u = e.RTCRtpSender.getCapabilities(s);
              t < 15019 && (u.codecs = u.codecs.filter(function (e) {
                return "rtx" !== e.name;
              })), u.codecs.forEach(function (e) {
                "H264" === e.name && void 0 === e.parameters["level-asymmetry-allowed"] && (e.parameters["level-asymmetry-allowed"] = "1"), i.remoteCapabilities && i.remoteCapabilities.codecs && i.remoteCapabilities.codecs.forEach(function (t) {
                  e.name.toLowerCase() === t.name.toLowerCase() && e.clockRate === t.clockRate && (e.preferredPayloadType = t.payloadType);
                });
              }), u.headerExtensions.forEach(function (e) {
                (i.remoteCapabilities && i.remoteCapabilities.headerExtensions || []).forEach(function (t) {
                  e.uri === t.uri && (e.id = t.id);
                });
              });
              var d = i.sendEncodingParameters || [{
                ssrc: 1001 * (2 * o + 1)
              }];
              a && t >= 15019 && "video" === s && !d[0].rtx && (d[0].rtx = {
                ssrc: d[0].ssrc + 1
              }), i.wantReceive && (i.rtpReceiver = new e.RTCRtpReceiver(i.dtlsTransport, s)), i.localCapabilities = u, i.sendEncodingParameters = d;
            }), "max-compat" !== n._config.bundlePolicy && (u += "a=group:BUNDLE " + n.transceivers.map(function (e) {
              return e.mid;
            }).join(" ") + "\r\n"), u += "a=ice-options:trickle\r\n", n.transceivers.forEach(function (e, t) {
              u += i(e, e.localCapabilities, "offer", e.stream, n._dtlsRole), u += "a=rtcp-rsize\r\n", !e.iceGatherer || "new" === n.iceGatheringState || 0 !== t && n.usingBundle || (e.iceGatherer.getLocalCandidates().forEach(function (e) {
                e.component = 1, u += "a=" + r.writeCandidate(e) + "\r\n";
              }), "completed" === e.iceGatherer.state && (u += "a=end-of-candidates\r\n"));
            });
            var d = new e.RTCSessionDescription({
              type: "offer",
              sdp: u
            });
            return Promise.resolve(d);
          }, d.prototype.createAnswer = function () {
            var n = this;
            if (n._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createAnswer after close"));
            if ("have-remote-offer" !== n.signalingState && "have-local-pranswer" !== n.signalingState) return Promise.reject(c("InvalidStateError", "Can not call createAnswer in signalingState " + n.signalingState));
            var a = r.writeSessionBoilerplate(n._sdpSessionId, n._sdpSessionVersion++);
            n.usingBundle && (a += "a=group:BUNDLE " + n.transceivers.map(function (e) {
              return e.mid;
            }).join(" ") + "\r\n"), a += "a=ice-options:trickle\r\n";
            var s = r.getMediaSections(n._remoteDescription.sdp).length;
            n.transceivers.forEach(function (e, r) {
              if (!(r + 1 > s)) {
                if (e.rejected) return "application" === e.kind ? "DTLS/SCTP" === e.protocol ? a += "m=application 0 DTLS/SCTP 5000\r\n" : a += "m=application 0 " + e.protocol + " webrtc-datachannel\r\n" : "audio" === e.kind ? a += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e.kind && (a += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void (a += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n");
                var c;
                e.stream && ("audio" === e.kind ? c = e.stream.getAudioTracks()[0] : "video" === e.kind && (c = e.stream.getVideoTracks()[0]), c && t >= 15019 && "video" === e.kind && !e.sendEncodingParameters[0].rtx && (e.sendEncodingParameters[0].rtx = {
                  ssrc: e.sendEncodingParameters[0].ssrc + 1
                }));
                var u = o(e.localCapabilities, e.remoteCapabilities);
                !u.codecs.filter(function (e) {
                  return "rtx" === e.name.toLowerCase();
                }).length && e.sendEncodingParameters[0].rtx && delete e.sendEncodingParameters[0].rtx, a += i(e, u, "answer", e.stream, n._dtlsRole), e.rtcpParameters && e.rtcpParameters.reducedSize && (a += "a=rtcp-rsize\r\n");
              }
            });
            var u = new e.RTCSessionDescription({
              type: "answer",
              sdp: a
            });
            return Promise.resolve(u);
          }, d.prototype.addIceCandidate = function (e) {
            var t,
                n = this;
            return e && void 0 === e.sdpMLineIndex && !e.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise(function (i, o) {
              if (!n._remoteDescription) return o(c("InvalidStateError", "Can not add ICE candidate without a remote description"));

              if (e && "" !== e.candidate) {
                var a = e.sdpMLineIndex;
                if (e.sdpMid) for (var u = 0; u < n.transceivers.length; u++) {
                  if (n.transceivers[u].mid === e.sdpMid) {
                    a = u;
                    break;
                  }
                }
                var d = n.transceivers[a];
                if (!d) return o(c("OperationError", "Can not add ICE candidate"));
                if (d.rejected) return i();
                var f = Object.keys(e.candidate).length > 0 ? r.parseCandidate(e.candidate) : {};
                if ("tcp" === f.protocol && (0 === f.port || 9 === f.port)) return i();
                if (f.component && 1 !== f.component) return i();
                if ((0 === a || a > 0 && d.iceTransport !== n.transceivers[0].iceTransport) && !s(d.iceTransport, f)) return o(c("OperationError", "Can not add ICE candidate"));
                var l = e.candidate.trim();
                0 === l.indexOf("a=") && (l = l.substr(2)), (t = r.getMediaSections(n._remoteDescription.sdp))[a] += "a=" + (f.type ? l : "end-of-candidates") + "\r\n", n._remoteDescription.sdp = r.getDescription(n._remoteDescription.sdp) + t.join("");
              } else for (var p = 0; p < n.transceivers.length && (n.transceivers[p].rejected || (n.transceivers[p].iceTransport.addRemoteCandidate({}), (t = r.getMediaSections(n._remoteDescription.sdp))[p] += "a=end-of-candidates\r\n", n._remoteDescription.sdp = r.getDescription(n._remoteDescription.sdp) + t.join(""), !n.usingBundle)); p++) {
                ;
              }

              i();
            });
          }, d.prototype.getStats = function (t) {
            if (t && t instanceof e.MediaStreamTrack) {
              var n = null;
              if (this.transceivers.forEach(function (e) {
                e.rtpSender && e.rtpSender.track === t ? n = e.rtpSender : e.rtpReceiver && e.rtpReceiver.track === t && (n = e.rtpReceiver);
              }), !n) throw c("InvalidAccessError", "Invalid selector.");
              return n.getStats();
            }

            var r = [];
            return this.transceivers.forEach(function (e) {
              ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function (t) {
                e[t] && r.push(e[t].getStats());
              });
            }), Promise.all(r).then(function (e) {
              var t = new Map();
              return e.forEach(function (e) {
                e.forEach(function (e) {
                  t.set(e.id, e);
                });
              }), t;
            });
          }, ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach(function (t) {
            var n = e[t];

            if (n && n.prototype && n.prototype.getStats) {
              var r = n.prototype.getStats;

              n.prototype.getStats = function () {
                return r.apply(this).then(function (e) {
                  var t = new Map();
                  return Object.keys(e).forEach(function (n) {
                    var r;
                    e[n].type = {
                      inboundrtp: "inbound-rtp",
                      outboundrtp: "outbound-rtp",
                      candidatepair: "candidate-pair",
                      localcandidate: "local-candidate",
                      remotecandidate: "remote-candidate"
                    }[(r = e[n]).type] || r.type, t.set(n, e[n]);
                  }), t;
                });
              };
            }
          });
          var f = ["createOffer", "createAnswer"];
          return f.forEach(function (e) {
            var t = d.prototype[e];

            d.prototype[e] = function () {
              var e = arguments;
              return "function" == typeof e[0] || "function" == typeof e[1] ? t.apply(this, [arguments[2]]).then(function (t) {
                "function" == typeof e[0] && e[0].apply(null, [t]);
              }, function (t) {
                "function" == typeof e[1] && e[1].apply(null, [t]);
              }) : t.apply(this, arguments);
            };
          }), (f = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach(function (e) {
            var t = d.prototype[e];

            d.prototype[e] = function () {
              var e = arguments;
              return "function" == typeof e[1] || "function" == typeof e[2] ? t.apply(this, arguments).then(function () {
                "function" == typeof e[1] && e[1].apply(null);
              }, function (t) {
                "function" == typeof e[2] && e[2].apply(null, [t]);
              }) : t.apply(this, arguments);
            };
          }), ["getStats"].forEach(function (e) {
            var t = d.prototype[e];

            d.prototype[e] = function () {
              var e = arguments;
              return "function" == typeof e[1] ? t.apply(this, arguments).then(function () {
                "function" == typeof e[1] && e[1].apply(null);
              }) : t.apply(this, arguments);
            };
          }), d;
        };
      },
      7539: function _(e) {
        "use strict";

        var t = {
          generateIdentifier: function generateIdentifier() {
            return Math.random().toString(36).substr(2, 10);
          }
        };
        t.localCName = t.generateIdentifier(), t.splitLines = function (e) {
          return e.trim().split("\n").map(function (e) {
            return e.trim();
          });
        }, t.splitSections = function (e) {
          return e.split("\nm=").map(function (e, t) {
            return (t > 0 ? "m=" + e : e).trim() + "\r\n";
          });
        }, t.getDescription = function (e) {
          var n = t.splitSections(e);
          return n && n[0];
        }, t.getMediaSections = function (e) {
          var n = t.splitSections(e);
          return n.shift(), n;
        }, t.matchPrefix = function (e, n) {
          return t.splitLines(e).filter(function (e) {
            return 0 === e.indexOf(n);
          });
        }, t.parseCandidate = function (e) {
          for (var t, n = {
            foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
            component: parseInt(t[1], 10),
            protocol: t[2].toLowerCase(),
            priority: parseInt(t[3], 10),
            ip: t[4],
            address: t[4],
            port: parseInt(t[5], 10),
            type: t[7]
          }, r = 8; r < t.length; r += 2) {
            switch (t[r]) {
              case "raddr":
                n.relatedAddress = t[r + 1];
                break;

              case "rport":
                n.relatedPort = parseInt(t[r + 1], 10);
                break;

              case "tcptype":
                n.tcpType = t[r + 1];
                break;

              case "ufrag":
                n.ufrag = t[r + 1], n.usernameFragment = t[r + 1];
                break;

              default:
                n[t[r]] = t[r + 1];
            }
          }

          return n;
        }, t.writeCandidate = function (e) {
          var t = [];
          t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
          var n = e.type;
          return t.push("typ"), t.push(n), "host" !== n && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ");
        }, t.parseIceOptions = function (e) {
          return e.substr(14).split(" ");
        }, t.parseRtpMap = function (e) {
          var t = e.substr(9).split(" "),
              n = {
            payloadType: parseInt(t.shift(), 10)
          };
          return t = t[0].split("/"), n.name = t[0], n.clockRate = parseInt(t[1], 10), n.channels = 3 === t.length ? parseInt(t[2], 10) : 1, n.numChannels = n.channels, n;
        }, t.writeRtpMap = function (e) {
          var t = e.payloadType;
          void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
          var n = e.channels || e.numChannels || 1;
          return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== n ? "/" + n : "") + "\r\n";
        }, t.parseExtmap = function (e) {
          var t = e.substr(9).split(" ");
          return {
            id: parseInt(t[0], 10),
            direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
            uri: t[1]
          };
        }, t.writeExtmap = function (e) {
          return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n";
        }, t.parseFmtp = function (e) {
          for (var t, n = {}, r = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < r.length; i++) {
            n[(t = r[i].trim().split("="))[0].trim()] = t[1];
          }

          return n;
        }, t.writeFmtp = function (e) {
          var t = "",
              n = e.payloadType;

          if (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
            var r = [];
            Object.keys(e.parameters).forEach(function (t) {
              e.parameters[t] ? r.push(t + "=" + e.parameters[t]) : r.push(t);
            }), t += "a=fmtp:" + n + " " + r.join(";") + "\r\n";
          }

          return t;
        }, t.parseRtcpFb = function (e) {
          var t = e.substr(e.indexOf(" ") + 1).split(" ");
          return {
            type: t.shift(),
            parameter: t.join(" ")
          };
        }, t.writeRtcpFb = function (e) {
          var t = "",
              n = e.payloadType;
          return void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function (e) {
            t += "a=rtcp-fb:" + n + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n";
          }), t;
        }, t.parseSsrcMedia = function (e) {
          var t = e.indexOf(" "),
              n = {
            ssrc: parseInt(e.substr(7, t - 7), 10)
          },
              r = e.indexOf(":", t);
          return r > -1 ? (n.attribute = e.substr(t + 1, r - t - 1), n.value = e.substr(r + 1)) : n.attribute = e.substr(t + 1), n;
        }, t.parseSsrcGroup = function (e) {
          var t = e.substr(13).split(" ");
          return {
            semantics: t.shift(),
            ssrcs: t.map(function (e) {
              return parseInt(e, 10);
            })
          };
        }, t.getMid = function (e) {
          var n = t.matchPrefix(e, "a=mid:")[0];
          if (n) return n.substr(6);
        }, t.parseFingerprint = function (e) {
          var t = e.substr(14).split(" ");
          return {
            algorithm: t[0].toLowerCase(),
            value: t[1]
          };
        }, t.getDtlsParameters = function (e, n) {
          return {
            role: "auto",
            fingerprints: t.matchPrefix(e + n, "a=fingerprint:").map(t.parseFingerprint)
          };
        }, t.writeDtlsParameters = function (e, t) {
          var n = "a=setup:" + t + "\r\n";
          return e.fingerprints.forEach(function (e) {
            n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
          }), n;
        }, t.parseCryptoLine = function (e) {
          var t = e.substr(9).split(" ");
          return {
            tag: parseInt(t[0], 10),
            cryptoSuite: t[1],
            keyParams: t[2],
            sessionParams: t.slice(3)
          };
        }, t.writeCryptoLine = function (e) {
          return "a=crypto:" + e.tag + " " + e.cryptoSuite + " " + ("object" == _typeof(e.keyParams) ? t.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? " " + e.sessionParams.join(" ") : "") + "\r\n";
        }, t.parseCryptoKeyParams = function (e) {
          if (0 !== e.indexOf("inline:")) return null;
          var t = e.substr(7).split("|");
          return {
            keyMethod: "inline",
            keySalt: t[0],
            lifeTime: t[1],
            mkiValue: t[2] ? t[2].split(":")[0] : void 0,
            mkiLength: t[2] ? t[2].split(":")[1] : void 0
          };
        }, t.writeCryptoKeyParams = function (e) {
          return e.keyMethod + ":" + e.keySalt + (e.lifeTime ? "|" + e.lifeTime : "") + (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "");
        }, t.getCryptoParameters = function (e, n) {
          return t.matchPrefix(e + n, "a=crypto:").map(t.parseCryptoLine);
        }, t.getIceParameters = function (e, n) {
          var r = t.matchPrefix(e + n, "a=ice-ufrag:")[0],
              i = t.matchPrefix(e + n, "a=ice-pwd:")[0];
          return r && i ? {
            usernameFragment: r.substr(12),
            password: i.substr(10)
          } : null;
        }, t.writeIceParameters = function (e) {
          return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n";
        }, t.parseRtpParameters = function (e) {
          for (var n = {
            codecs: [],
            headerExtensions: [],
            fecMechanisms: [],
            rtcp: []
          }, r = t.splitLines(e)[0].split(" "), i = 3; i < r.length; i++) {
            var o = r[i],
                a = t.matchPrefix(e, "a=rtpmap:" + o + " ")[0];

            if (a) {
              var s = t.parseRtpMap(a),
                  c = t.matchPrefix(e, "a=fmtp:" + o + " ");

              switch (s.parameters = c.length ? t.parseFmtp(c[0]) : {}, s.rtcpFeedback = t.matchPrefix(e, "a=rtcp-fb:" + o + " ").map(t.parseRtcpFb), n.codecs.push(s), s.name.toUpperCase()) {
                case "RED":
                case "ULPFEC":
                  n.fecMechanisms.push(s.name.toUpperCase());
              }
            }
          }

          return t.matchPrefix(e, "a=extmap:").forEach(function (e) {
            n.headerExtensions.push(t.parseExtmap(e));
          }), n;
        }, t.writeRtpDescription = function (e, n) {
          var r = "";
          r += "m=" + e + " ", r += n.codecs.length > 0 ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += n.codecs.map(function (e) {
            return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType;
          }).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", n.codecs.forEach(function (e) {
            r += t.writeRtpMap(e), r += t.writeFmtp(e), r += t.writeRtcpFb(e);
          });
          var i = 0;
          return n.codecs.forEach(function (e) {
            e.maxptime > i && (i = e.maxptime);
          }), i > 0 && (r += "a=maxptime:" + i + "\r\n"), r += "a=rtcp-mux\r\n", n.headerExtensions && n.headerExtensions.forEach(function (e) {
            r += t.writeExtmap(e);
          }), r;
        }, t.parseRtpEncodingParameters = function (e) {
          var n,
              r = [],
              i = t.parseRtpParameters(e),
              o = -1 !== i.fecMechanisms.indexOf("RED"),
              a = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
              s = t.matchPrefix(e, "a=ssrc:").map(function (e) {
            return t.parseSsrcMedia(e);
          }).filter(function (e) {
            return "cname" === e.attribute;
          }),
              c = s.length > 0 && s[0].ssrc,
              u = t.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
            return e.substr(17).split(" ").map(function (e) {
              return parseInt(e, 10);
            });
          });
          u.length > 0 && u[0].length > 1 && u[0][0] === c && (n = u[0][1]), i.codecs.forEach(function (e) {
            if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
              var t = {
                ssrc: c,
                codecPayloadType: parseInt(e.parameters.apt, 10)
              };
              c && n && (t.rtx = {
                ssrc: n
              }), r.push(t), o && ((t = JSON.parse(JSON.stringify(t))).fec = {
                ssrc: c,
                mechanism: a ? "red+ulpfec" : "red"
              }, r.push(t));
            }
          }), 0 === r.length && c && r.push({
            ssrc: c
          });
          var d = t.matchPrefix(e, "b=");
          return d.length && (d = 0 === d[0].indexOf("b=TIAS:") ? parseInt(d[0].substr(7), 10) : 0 === d[0].indexOf("b=AS:") ? 1e3 * parseInt(d[0].substr(5), 10) * .95 - 16e3 : void 0, r.forEach(function (e) {
            e.maxBitrate = d;
          })), r;
        }, t.parseRtcpParameters = function (e) {
          var n = {},
              r = t.matchPrefix(e, "a=ssrc:").map(function (e) {
            return t.parseSsrcMedia(e);
          }).filter(function (e) {
            return "cname" === e.attribute;
          })[0];
          r && (n.cname = r.value, n.ssrc = r.ssrc);
          var i = t.matchPrefix(e, "a=rtcp-rsize");
          n.reducedSize = i.length > 0, n.compound = 0 === i.length;
          var o = t.matchPrefix(e, "a=rtcp-mux");
          return n.mux = o.length > 0, n;
        }, t.parseMsid = function (e) {
          var n,
              r = t.matchPrefix(e, "a=msid:");
          if (1 === r.length) return {
            stream: (n = r[0].substr(7).split(" "))[0],
            track: n[1]
          };
          var i = t.matchPrefix(e, "a=ssrc:").map(function (e) {
            return t.parseSsrcMedia(e);
          }).filter(function (e) {
            return "msid" === e.attribute;
          });
          return i.length > 0 ? {
            stream: (n = i[0].value.split(" "))[0],
            track: n[1]
          } : void 0;
        }, t.parseSctpDescription = function (e) {
          var n,
              r = t.parseMLine(e),
              i = t.matchPrefix(e, "a=max-message-size:");
          i.length > 0 && (n = parseInt(i[0].substr(19), 10)), isNaN(n) && (n = 65536);
          var o = t.matchPrefix(e, "a=sctp-port:");
          if (o.length > 0) return {
            port: parseInt(o[0].substr(12), 10),
            protocol: r.fmt,
            maxMessageSize: n
          };

          if (t.matchPrefix(e, "a=sctpmap:").length > 0) {
            var a = t.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
            return {
              port: parseInt(a[0], 10),
              protocol: a[1],
              maxMessageSize: n
            };
          }
        }, t.writeSctpDescription = function (e, t) {
          var n = [];
          return n = "DTLS/SCTP" !== e.protocol ? ["m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t.port + "\r\n"] : ["m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n"], void 0 !== t.maxMessageSize && n.push("a=max-message-size:" + t.maxMessageSize + "\r\n"), n.join("");
        }, t.generateSessionId = function () {
          return Math.random().toString().substr(2, 21);
        }, t.writeSessionBoilerplate = function (e, n, r) {
          var i = void 0 !== n ? n : 2;
          return "v=0\r\no=" + (r || "thisisadapterortc") + " " + (e || t.generateSessionId()) + " " + i + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
        }, t.writeMediaSection = function (e, n, r, i) {
          var o = t.writeRtpDescription(e.kind, n);

          if (o += t.writeIceParameters(e.iceGatherer.getLocalParameters()), o += t.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active"), o += "a=mid:" + e.mid + "\r\n", e.direction ? o += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? o += "a=sendrecv\r\n" : e.rtpSender ? o += "a=sendonly\r\n" : e.rtpReceiver ? o += "a=recvonly\r\n" : o += "a=inactive\r\n", e.rtpSender) {
            var a = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
            o += "a=" + a, o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + a, e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + a, o += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n");
          }

          return o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + t.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + t.localCName + "\r\n"), o;
        }, t.getDirection = function (e, n) {
          for (var r = t.splitLines(e), i = 0; i < r.length; i++) {
            switch (r[i]) {
              case "a=sendrecv":
              case "a=sendonly":
              case "a=recvonly":
              case "a=inactive":
                return r[i].substr(2);
            }
          }

          return n ? t.getDirection(n) : "sendrecv";
        }, t.getKind = function (e) {
          return t.splitLines(e)[0].split(" ")[0].substr(2);
        }, t.isRejected = function (e) {
          return "0" === e.split(" ", 2)[1];
        }, t.parseMLine = function (e) {
          var n = t.splitLines(e)[0].substr(2).split(" ");
          return {
            kind: n[0],
            port: parseInt(n[1], 10),
            protocol: n[2],
            fmt: n.slice(3).join(" ")
          };
        }, t.parseOLine = function (e) {
          var n = t.matchPrefix(e, "o=")[0].substr(2).split(" ");
          return {
            username: n[0],
            sessionId: n[1],
            sessionVersion: parseInt(n[2], 10),
            netType: n[3],
            addressType: n[4],
            address: n[5]
          };
        }, t.isValidSDP = function (e) {
          if ("string" != typeof e || 0 === e.length) return !1;

          for (var n = t.splitLines(e), r = 0; r < n.length; r++) {
            if (n[r].length < 2 || "=" !== n[r].charAt(1)) return !1;
          }

          return !0;
        }, e.exports = t;
      }
    },
        t = {};

    function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = t[r] = {
        exports: {}
      };
      return e[r](o, o.exports, n), o.exports;
    }

    n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, {
        a: t
      }), t;
    }, n.d = function (e, t) {
      for (var r in t) {
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
          enumerable: !0,
          get: t[r]
        });
      }
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    };
    var r = {};
    return function () {
      "use strict";

      n.d(r, {
        default: function _default() {
          return Sn;
        }
      });
      var e = {};
      n.r(e), n.d(e, {
        fixNegotiationNeeded: function fixNegotiationNeeded() {
          return z;
        },
        shimAddTrackRemoveTrack: function shimAddTrackRemoveTrack() {
          return q;
        },
        shimAddTrackRemoveTrackWithNative: function shimAddTrackRemoveTrackWithNative() {
          return B;
        },
        shimGetDisplayMedia: function shimGetDisplayMedia() {
          return L;
        },
        shimGetSendersWithDtmf: function shimGetSendersWithDtmf() {
          return N;
        },
        shimGetStats: function shimGetStats() {
          return V;
        },
        shimGetUserMedia: function shimGetUserMedia() {
          return D;
        },
        shimMediaStream: function shimMediaStream() {
          return F;
        },
        shimOnTrack: function shimOnTrack() {
          return W;
        },
        shimPeerConnection: function shimPeerConnection() {
          return G;
        },
        shimSenderReceiverGetStats: function shimSenderReceiverGetStats() {
          return U;
        }
      });
      var t = {};
      n.r(t), n.d(t, {
        shimGetDisplayMedia: function shimGetDisplayMedia() {
          return K;
        },
        shimGetUserMedia: function shimGetUserMedia() {
          return $;
        },
        shimPeerConnection: function shimPeerConnection() {
          return Y;
        },
        shimReplaceTrack: function shimReplaceTrack() {
          return X;
        }
      });
      var i = {};
      n.r(i), n.d(i, {
        shimAddTransceiver: function shimAddTransceiver() {
          return ae;
        },
        shimCreateAnswer: function shimCreateAnswer() {
          return ue;
        },
        shimCreateOffer: function shimCreateOffer() {
          return ce;
        },
        shimGetDisplayMedia: function shimGetDisplayMedia() {
          return Q;
        },
        shimGetParameters: function shimGetParameters() {
          return se;
        },
        shimGetUserMedia: function shimGetUserMedia() {
          return Z;
        },
        shimOnTrack: function shimOnTrack() {
          return ee;
        },
        shimPeerConnection: function shimPeerConnection() {
          return te;
        },
        shimRTCDataChannel: function shimRTCDataChannel() {
          return oe;
        },
        shimReceiverGetStats: function shimReceiverGetStats() {
          return re;
        },
        shimRemoveStream: function shimRemoveStream() {
          return ie;
        },
        shimSenderGetStats: function shimSenderGetStats() {
          return ne;
        }
      });
      var o = {};
      n.r(o), n.d(o, {
        shimAudioContext: function shimAudioContext() {
          return _e;
        },
        shimCallbacksAPI: function shimCallbacksAPI() {
          return le;
        },
        shimConstraints: function shimConstraints() {
          return he;
        },
        shimCreateOfferLegacy: function shimCreateOfferLegacy() {
          return ge;
        },
        shimGetUserMedia: function shimGetUserMedia() {
          return pe;
        },
        shimLocalStreamsAPI: function shimLocalStreamsAPI() {
          return de;
        },
        shimRTCIceServerUrls: function shimRTCIceServerUrls() {
          return ve;
        },
        shimRemoteStreamsAPI: function shimRemoteStreamsAPI() {
          return fe;
        },
        shimTrackEventTransceiver: function shimTrackEventTransceiver() {
          return me;
        }
      });
      var a = {};

      function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      n.r(a), n.d(a, {
        removeExtmapAllowMixed: function removeExtmapAllowMixed() {
          return xe;
        },
        shimAddIceCandidateNullOrEmpty: function shimAddIceCandidateNullOrEmpty() {
          return Ie;
        },
        shimConnectionState: function shimConnectionState() {
          return ke;
        },
        shimMaxMessageSize: function shimMaxMessageSize() {
          return Ce;
        },
        shimRTCIceCandidate: function shimRTCIceCandidate() {
          return Se;
        },
        shimSendThrowTypeError: function shimSendThrowTypeError() {
          return we;
        }
      });
      var c = n(8548);

      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), c(e, r.key, r);
        }
      }

      function d(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), e;
      }

      function f(e, t, n) {
        return t in e ? c(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }

      var l = n(6406),
          p = n.n(l),
          h = {
        clientType: "WEB",
        LOG_LEVEL: 0,
        version: "0.0.1",
        autoSub: !0,
        onlyEnter: !1,
        reconnect: 13,
        reconnectDelay: 3e3,
        getCopyIntervalMillis: 3e4,
        checkConnectIntervalMillis: 1e3,
        iceRebuildCount: 3,
        iceRebuildIntervalMillis: 500,
        enterTimeout: 2e4,
        useRTCCfgIfServerReturn: !1,
        forceUseRTCCfgIfServerReturnWhenP2P: !0,
        allowRepeatAudioMixerPublish: !1,
        logVolumeWhenInstantGE: .5,
        getMediaMeterIntervalMillis: 400,
        _useRequestAnimationFrame: !1,
        meterWithTrackAudioLevel: !1,
        judgeTalkingByInstantGE: .05,
        _printSoundData: !1,
        trackBufferSize: 20,
        allowSendWhenLessThan: 4,
        disableTrack: !1,
        ctrlCheckIntervalMillis: 1e4,
        ctrlTimeoutMillis: 3e4,
        _printDebugStats: !1,
        statsSeconds: 10,
        remainLastStatsCount: 120,
        loglastConfrCount: 2,
        loglastStoreArray: !0,
        consoleLogger: !0,
        printStatsWhenPCClose: !0,
        rebuildPeerConnectionWhenNetworkChanaged: !0,
        rtcStatsTypeMath: function rtcStatsTypeMath(e, t) {
          switch (e.type) {
            case "remote-candidate":
            case "local-candidate":
            case "track":
            case "stream":
            case "inbound-rtp":
            case "outbound-rtp":
            case "transport":
              return !0;
          }

          return !1;
        },
        baseAcptOps: [102, 104, 105, 106, 107, 300, 302, 303, 304, 301, 204, 206, 400, 401, 1001, 100201, 100202, 100203],
        acptOps: [100230, 100205, 1003, 1004],
        globalConstraints: {}
      },
          v = n(7219),
          m = n(7544);

      function g(e) {
        return (g = "function" == typeof v && "symbol" == _typeof(m) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof v && e.constructor === v && e !== v.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      var _ = n(4504),
          y = n.n(_),
          b = n(9204),
          S = n.n(b);

      var C = !0,
          w = !0;

      function k(e, t, n) {
        var r = e.match(t);
        return r && r.length >= n && parseInt(r[n], 10);
      }

      function x(e, t, n) {
        if (!e.RTCPeerConnection) return;
        var r = e.RTCPeerConnection.prototype,
            i = r.addEventListener;

        r.addEventListener = function (e, r) {
          if (e !== t) return i.apply(this, arguments);

          var o = function o(e) {
            var t = n(e);
            t && (r.handleEvent ? r.handleEvent(t) : r(t));
          };

          return this._eventMap = this._eventMap || {}, this._eventMap[t] || (this._eventMap[t] = new Map()), this._eventMap[t].set(r, o), i.apply(this, [e, o]);
        };

        var o = r.removeEventListener;
        r.removeEventListener = function (e, n) {
          if (e !== t || !this._eventMap || !this._eventMap[t]) return o.apply(this, arguments);
          if (!this._eventMap[t].has(n)) return o.apply(this, arguments);

          var r = this._eventMap[t].get(n);

          return this._eventMap[t].delete(n), 0 === this._eventMap[t].size && delete this._eventMap[t], 0 === Object.keys(this._eventMap).length && delete this._eventMap, o.apply(this, [e, r]);
        }, Object.defineProperty(r, "on" + t, {
          get: function get() {
            return this["_on" + t];
          },
          set: function set(e) {
            this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e);
          },
          enumerable: !0,
          configurable: !0
        });
      }

      function I(e) {
        return "boolean" != typeof e ? new Error("Argument type: " + _typeof(e) + ". Please use a boolean.") : (C = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled");
      }

      function R(e) {
        return "boolean" != typeof e ? new Error("Argument type: " + _typeof(e) + ". Please use a boolean.") : (w = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
      }

      function T() {
        if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) {
          if (C) return;
          "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments);
        }
      }

      function E(e, t) {
        w && console.warn(e + " is deprecated, please use " + t + " instead.");
      }

      function M(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }

      function P(e) {
        return M(e) ? Object.keys(e).reduce(function (t, n) {
          var r = M(e[n]),
              i = r ? P(e[n]) : e[n],
              o = r && !Object.keys(i).length;
          return void 0 === i || o ? t : Object.assign(t, _defineProperty({}, n, i));
        }, {}) : e;
      }

      function A(e, t, n) {
        t && !n.has(t.id) && (n.set(t.id, t), Object.keys(t).forEach(function (r) {
          r.endsWith("Id") ? A(e, e.get(t[r]), n) : r.endsWith("Ids") && t[r].forEach(function (t) {
            A(e, e.get(t), n);
          });
        }));
      }

      function O(e, t, n) {
        var r = n ? "outbound-rtp" : "inbound-rtp",
            i = new Map();
        if (null === t) return i;
        var o = [];
        return e.forEach(function (e) {
          "track" === e.type && e.trackIdentifier === t.id && o.push(e);
        }), o.forEach(function (t) {
          e.forEach(function (n) {
            n.type === r && n.trackId === t.id && A(e, n, i);
          });
        }), i;
      }

      var j = T;

      function D(e, t) {
        var n = e && e.navigator;
        if (!n.mediaDevices) return;

        var r = function r(e) {
          if ("object" != _typeof(e) || e.mandatory || e.optional) return e;
          var t = {};
          return Object.keys(e).forEach(function (n) {
            if ("require" === n || "advanced" === n || "mediaSource" === n) return;
            var r = "object" == _typeof(e[n]) ? e[n] : {
              ideal: e[n]
            };
            void 0 !== r.exact && "number" == typeof r.exact && (r.min = r.max = r.exact);

            var i = function i(e, t) {
              return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t;
            };

            if (void 0 !== r.ideal) {
              t.optional = t.optional || [];
              var _e2 = {};
              "number" == typeof r.ideal ? (_e2[i("min", n)] = r.ideal, t.optional.push(_e2), _e2 = {}, _e2[i("max", n)] = r.ideal, t.optional.push(_e2)) : (_e2[i("", n)] = r.ideal, t.optional.push(_e2));
            }

            void 0 !== r.exact && "number" != typeof r.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[i("", n)] = r.exact) : ["min", "max"].forEach(function (e) {
              void 0 !== r[e] && (t.mandatory = t.mandatory || {}, t.mandatory[i(e, n)] = r[e]);
            });
          }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t;
        },
            i = function i(e, _i3) {
          if (t.version >= 61) return _i3(e);

          if ((e = JSON.parse(JSON.stringify(e))) && "object" == _typeof(e.audio)) {
            var _t4 = function _t4(e, t, n) {
              t in e && !(n in e) && (e[n] = e[t], delete e[t]);
            };

            _t4((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), _t4(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = r(e.audio);
          }

          if (e && "object" == _typeof(e.video)) {
            var _o2 = e.video.facingMode;
            _o2 = _o2 && ("object" == _typeof(_o2) ? _o2 : {
              ideal: _o2
            });

            var _a2 = t.version < 66;

            if (_o2 && ("user" === _o2.exact || "environment" === _o2.exact || "user" === _o2.ideal || "environment" === _o2.ideal) && (!n.mediaDevices.getSupportedConstraints || !n.mediaDevices.getSupportedConstraints().facingMode || _a2)) {
              var _t5;

              if (delete e.video.facingMode, "environment" === _o2.exact || "environment" === _o2.ideal ? _t5 = ["back", "rear"] : "user" !== _o2.exact && "user" !== _o2.ideal || (_t5 = ["front"]), _t5) return n.mediaDevices.enumerateDevices().then(function (n) {
                var a = (n = n.filter(function (e) {
                  return "videoinput" === e.kind;
                })).find(function (e) {
                  return _t5.some(function (t) {
                    return e.label.toLowerCase().includes(t);
                  });
                });
                return !a && n.length && _t5.includes("back") && (a = n[n.length - 1]), a && (e.video.deviceId = _o2.exact ? {
                  exact: a.deviceId
                } : {
                  ideal: a.deviceId
                }), e.video = r(e.video), j("chrome: " + JSON.stringify(e)), _i3(e);
              });
            }

            e.video = r(e.video);
          }

          return j("chrome: " + JSON.stringify(e)), _i3(e);
        },
            o = function o(e) {
          return t.version >= 64 ? e : {
            name: {
              PermissionDeniedError: "NotAllowedError",
              PermissionDismissedError: "NotAllowedError",
              InvalidStateError: "NotAllowedError",
              DevicesNotFoundError: "NotFoundError",
              ConstraintNotSatisfiedError: "OverconstrainedError",
              TrackStartError: "NotReadableError",
              MediaDeviceFailedDueToShutdown: "NotAllowedError",
              MediaDeviceKillSwitchOn: "NotAllowedError",
              TabCaptureError: "AbortError",
              ScreenCaptureError: "AbortError",
              DeviceCaptureError: "AbortError"
            }[e.name] || e.name,
            message: e.message,
            constraint: e.constraint || e.constraintName,
            toString: function toString() {
              return this.name + (this.message && ": ") + this.message;
            }
          };
        };

        if (n.getUserMedia = function (e, t, r) {
          i(e, function (e) {
            n.webkitGetUserMedia(e, t, function (e) {
              r && r(o(e));
            });
          });
        }.bind(n), n.mediaDevices.getUserMedia) {
          var _e3 = n.mediaDevices.getUserMedia.bind(n.mediaDevices);

          n.mediaDevices.getUserMedia = function (t) {
            return i(t, function (t) {
              return _e3(t).then(function (e) {
                if (t.audio && !e.getAudioTracks().length || t.video && !e.getVideoTracks().length) throw e.getTracks().forEach(function (e) {
                  e.stop();
                }), new DOMException("", "NotFoundError");
                return e;
              }, function (e) {
                return Promise.reject(o(e));
              });
            });
          };
        }
      }

      function L(e, t) {
        e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && ("function" == typeof t ? e.navigator.mediaDevices.getDisplayMedia = function (n) {
          return t(n).then(function (t) {
            var r = n.video && n.video.width,
                i = n.video && n.video.height,
                o = n.video && n.video.frameRate;
            return n.video = {
              mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: t,
                maxFrameRate: o || 3
              }
            }, r && (n.video.mandatory.maxWidth = r), i && (n.video.mandatory.maxHeight = i), e.navigator.mediaDevices.getUserMedia(n);
          });
        } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"));
      }

      function F(e) {
        e.MediaStream = e.MediaStream || e.webkitMediaStream;
      }

      function W(e) {
        if ("object" == _typeof(e) && e.RTCPeerConnection && !("ontrack" in e.RTCPeerConnection.prototype)) {
          Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
            get: function get() {
              return this._ontrack;
            },
            set: function set(e) {
              this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e);
            },
            enumerable: !0,
            configurable: !0
          });
          var _t6 = e.RTCPeerConnection.prototype.setRemoteDescription;

          e.RTCPeerConnection.prototype.setRemoteDescription = function () {
            var _this = this;

            return this._ontrackpoly || (this._ontrackpoly = function (t) {
              t.stream.addEventListener("addtrack", function (n) {
                var r;
                r = e.RTCPeerConnection.prototype.getReceivers ? _this.getReceivers().find(function (e) {
                  return e.track && e.track.id === n.track.id;
                }) : {
                  track: n.track
                };
                var i = new Event("track");
                i.track = n.track, i.receiver = r, i.transceiver = {
                  receiver: r
                }, i.streams = [t.stream], _this.dispatchEvent(i);
              }), t.stream.getTracks().forEach(function (n) {
                var r;
                r = e.RTCPeerConnection.prototype.getReceivers ? _this.getReceivers().find(function (e) {
                  return e.track && e.track.id === n.id;
                }) : {
                  track: n
                };
                var i = new Event("track");
                i.track = n, i.receiver = r, i.transceiver = {
                  receiver: r
                }, i.streams = [t.stream], _this.dispatchEvent(i);
              });
            }, this.addEventListener("addstream", this._ontrackpoly)), _t6.apply(this, arguments);
          };
        } else x(e, "track", function (e) {
          return e.transceiver || Object.defineProperty(e, "transceiver", {
            value: {
              receiver: e.receiver
            }
          }), e;
        });
      }

      function N(e) {
        if ("object" == _typeof(e) && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
          var _t7 = function _t7(e, t) {
            return {
              track: t,

              get dtmf() {
                return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf;
              },

              _pc: e
            };
          };

          if (!e.RTCPeerConnection.prototype.getSenders) {
            e.RTCPeerConnection.prototype.getSenders = function () {
              return this._senders = this._senders || [], this._senders.slice();
            };

            var _n3 = e.RTCPeerConnection.prototype.addTrack;

            e.RTCPeerConnection.prototype.addTrack = function (e, r) {
              var i = _n3.apply(this, arguments);

              return i || (i = _t7(this, e), this._senders.push(i)), i;
            };

            var _r3 = e.RTCPeerConnection.prototype.removeTrack;

            e.RTCPeerConnection.prototype.removeTrack = function (e) {
              _r3.apply(this, arguments);

              var t = this._senders.indexOf(e);

              -1 !== t && this._senders.splice(t, 1);
            };
          }

          var _n2 = e.RTCPeerConnection.prototype.addStream;

          e.RTCPeerConnection.prototype.addStream = function (e) {
            var _this2 = this;

            this._senders = this._senders || [], _n2.apply(this, [e]), e.getTracks().forEach(function (e) {
              _this2._senders.push(_t7(_this2, e));
            });
          };

          var _r2 = e.RTCPeerConnection.prototype.removeStream;

          e.RTCPeerConnection.prototype.removeStream = function (e) {
            var _this3 = this;

            this._senders = this._senders || [], _r2.apply(this, [e]), e.getTracks().forEach(function (e) {
              var t = _this3._senders.find(function (t) {
                return t.track === e;
              });

              t && _this3._senders.splice(_this3._senders.indexOf(t), 1);
            });
          };
        } else if ("object" == _typeof(e) && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
          var _t8 = e.RTCPeerConnection.prototype.getSenders;
          e.RTCPeerConnection.prototype.getSenders = function () {
            var _this4 = this;

            var e = _t8.apply(this, []);

            return e.forEach(function (e) {
              return e._pc = _this4;
            }), e;
          }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
            get: function get() {
              return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
            }
          });
        }
      }

      function V(e) {
        if (!e.RTCPeerConnection) return;
        var t = e.RTCPeerConnection.prototype.getStats;

        e.RTCPeerConnection.prototype.getStats = function () {
          var _this5 = this;

          var _arguments = Array.prototype.slice.call(arguments),
              e = _arguments[0],
              n = _arguments[1],
              r = _arguments[2];

          if (arguments.length > 0 && "function" == typeof e) return t.apply(this, arguments);
          if (0 === t.length && (0 === arguments.length || "function" != typeof e)) return t.apply(this, []);

          var i = function i(e) {
            var t = {};
            return e.result().forEach(function (e) {
              var n = {
                id: e.id,
                timestamp: e.timestamp,
                type: {
                  localcandidate: "local-candidate",
                  remotecandidate: "remote-candidate"
                }[e.type] || e.type
              };
              e.names().forEach(function (t) {
                n[t] = e.stat(t);
              }), t[n.id] = n;
            }), t;
          },
              o = function o(e) {
            return new Map(Object.keys(e).map(function (t) {
              return [t, e[t]];
            }));
          };

          if (arguments.length >= 2) {
            var _r4 = function _r4(e) {
              n(o(i(e)));
            };

            return t.apply(this, [_r4, e]);
          }

          return new Promise(function (e, n) {
            t.apply(_this5, [function (t) {
              e(o(i(t)));
            }, n]);
          }).then(n, r);
        };
      }

      function U(e) {
        if (!("object" == _typeof(e) && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) return;

        if (!("getStats" in e.RTCRtpSender.prototype)) {
          var _t9 = e.RTCPeerConnection.prototype.getSenders;
          _t9 && (e.RTCPeerConnection.prototype.getSenders = function () {
            var _this6 = this;

            var e = _t9.apply(this, []);

            return e.forEach(function (e) {
              return e._pc = _this6;
            }), e;
          });
          var _n4 = e.RTCPeerConnection.prototype.addTrack;
          _n4 && (e.RTCPeerConnection.prototype.addTrack = function () {
            var e = _n4.apply(this, arguments);

            return e._pc = this, e;
          }), e.RTCRtpSender.prototype.getStats = function () {
            var e = this;
            return this._pc.getStats().then(function (t) {
              return O(t, e.track, !0);
            });
          };
        }

        if (!("getStats" in e.RTCRtpReceiver.prototype)) {
          var _t10 = e.RTCPeerConnection.prototype.getReceivers;
          _t10 && (e.RTCPeerConnection.prototype.getReceivers = function () {
            var _this7 = this;

            var e = _t10.apply(this, []);

            return e.forEach(function (e) {
              return e._pc = _this7;
            }), e;
          }), x(e, "track", function (e) {
            return e.receiver._pc = e.srcElement, e;
          }), e.RTCRtpReceiver.prototype.getStats = function () {
            var e = this;
            return this._pc.getStats().then(function (t) {
              return O(t, e.track, !1);
            });
          };
        }

        if (!("getStats" in e.RTCRtpSender.prototype) || !("getStats" in e.RTCRtpReceiver.prototype)) return;
        var t = e.RTCPeerConnection.prototype.getStats;

        e.RTCPeerConnection.prototype.getStats = function () {
          if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
            var _e4 = arguments[0];

            var _t11, _n5, _r5;

            return this.getSenders().forEach(function (n) {
              n.track === _e4 && (_t11 ? _r5 = !0 : _t11 = n);
            }), this.getReceivers().forEach(function (t) {
              return t.track === _e4 && (_n5 ? _r5 = !0 : _n5 = t), t.track === _e4;
            }), _r5 || _t11 && _n5 ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : _t11 ? _t11.getStats() : _n5 ? _n5.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
          }

          return t.apply(this, arguments);
        };
      }

      function B(e) {
        e.RTCPeerConnection.prototype.getLocalStreams = function () {
          var _this8 = this;

          return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(function (e) {
            return _this8._shimmedLocalStreams[e][0];
          });
        };

        var t = e.RTCPeerConnection.prototype.addTrack;

        e.RTCPeerConnection.prototype.addTrack = function (e, n) {
          if (!n) return t.apply(this, arguments);
          this._shimmedLocalStreams = this._shimmedLocalStreams || {};
          var r = t.apply(this, arguments);
          return this._shimmedLocalStreams[n.id] ? -1 === this._shimmedLocalStreams[n.id].indexOf(r) && this._shimmedLocalStreams[n.id].push(r) : this._shimmedLocalStreams[n.id] = [n, r], r;
        };

        var n = e.RTCPeerConnection.prototype.addStream;

        e.RTCPeerConnection.prototype.addStream = function (e) {
          var _this9 = this;

          this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach(function (e) {
            if (_this9.getSenders().find(function (t) {
              return t.track === e;
            })) throw new DOMException("Track already exists.", "InvalidAccessError");
          });
          var t = this.getSenders();
          n.apply(this, arguments);
          var r = this.getSenders().filter(function (e) {
            return -1 === t.indexOf(e);
          });
          this._shimmedLocalStreams[e.id] = [e].concat(r);
        };

        var r = e.RTCPeerConnection.prototype.removeStream;

        e.RTCPeerConnection.prototype.removeStream = function (e) {
          return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], r.apply(this, arguments);
        };

        var i = e.RTCPeerConnection.prototype.removeTrack;

        e.RTCPeerConnection.prototype.removeTrack = function (e) {
          var _this10 = this;

          return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach(function (t) {
            var n = _this10._shimmedLocalStreams[t].indexOf(e);

            -1 !== n && _this10._shimmedLocalStreams[t].splice(n, 1), 1 === _this10._shimmedLocalStreams[t].length && delete _this10._shimmedLocalStreams[t];
          }), i.apply(this, arguments);
        };
      }

      function q(e, t) {
        if (!e.RTCPeerConnection) return;
        if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return B(e);
        var n = e.RTCPeerConnection.prototype.getLocalStreams;

        e.RTCPeerConnection.prototype.getLocalStreams = function () {
          var _this11 = this;

          var e = n.apply(this);
          return this._reverseStreams = this._reverseStreams || {}, e.map(function (e) {
            return _this11._reverseStreams[e.id];
          });
        };

        var r = e.RTCPeerConnection.prototype.addStream;

        e.RTCPeerConnection.prototype.addStream = function (t) {
          var _this12 = this;

          if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t.getTracks().forEach(function (e) {
            if (_this12.getSenders().find(function (t) {
              return t.track === e;
            })) throw new DOMException("Track already exists.", "InvalidAccessError");
          }), !this._reverseStreams[t.id]) {
            var _n6 = new e.MediaStream(t.getTracks());

            this._streams[t.id] = _n6, this._reverseStreams[_n6.id] = t, t = _n6;
          }

          r.apply(this, [t]);
        };

        var i = e.RTCPeerConnection.prototype.removeStream;

        function o(e, t) {
          var n = t.sdp;
          return Object.keys(e._reverseStreams || []).forEach(function (t) {
            var r = e._reverseStreams[t],
                i = e._streams[r.id];
            n = n.replace(new RegExp(i.id, "g"), r.id);
          }), new RTCSessionDescription({
            type: t.type,
            sdp: n
          });
        }

        function a(e, t) {
          var n = t.sdp;
          return Object.keys(e._reverseStreams || []).forEach(function (t) {
            var r = e._reverseStreams[t],
                i = e._streams[r.id];
            n = n.replace(new RegExp(r.id, "g"), i.id);
          }), new RTCSessionDescription({
            type: t.type,
            sdp: n
          });
        }

        e.RTCPeerConnection.prototype.removeStream = function (e) {
          this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, i.apply(this, [this._streams[e.id] || e]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id];
        }, e.RTCPeerConnection.prototype.addTrack = function (t, n) {
          var _this13 = this;

          if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
          var r = [].slice.call(arguments, 1);
          if (1 !== r.length || !r[0].getTracks().find(function (e) {
            return e === t;
          })) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
          var i = this.getSenders().find(function (e) {
            return e.track === t;
          });
          if (i) throw new DOMException("Track already exists.", "InvalidAccessError");
          this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
          var o = this._streams[n.id];
          if (o) o.addTrack(t), Promise.resolve().then(function () {
            _this13.dispatchEvent(new Event("negotiationneeded"));
          });else {
            var _r6 = new e.MediaStream([t]);

            this._streams[n.id] = _r6, this._reverseStreams[_r6.id] = n, this.addStream(_r6);
          }
          return this.getSenders().find(function (e) {
            return e.track === t;
          });
        }, ["createOffer", "createAnswer"].forEach(function (t) {
          var n = e.RTCPeerConnection.prototype[t],
              r = _defineProperty({}, t, function () {
            var _this14 = this;

            var e = arguments;
            return arguments.length && "function" == typeof arguments[0] ? n.apply(this, [function (t) {
              var n = o(_this14, t);
              e[0].apply(null, [n]);
            }, function (t) {
              e[1] && e[1].apply(null, t);
            }, arguments[2]]) : n.apply(this, arguments).then(function (e) {
              return o(_this14, e);
            });
          });

          e.RTCPeerConnection.prototype[t] = r[t];
        });
        var s = e.RTCPeerConnection.prototype.setLocalDescription;

        e.RTCPeerConnection.prototype.setLocalDescription = function () {
          return arguments.length && arguments[0].type ? (arguments[0] = a(this, arguments[0]), s.apply(this, arguments)) : s.apply(this, arguments);
        };

        var c = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
        Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
          get: function get() {
            var e = c.get.apply(this);
            return "" === e.type ? e : o(this, e);
          }
        }), e.RTCPeerConnection.prototype.removeTrack = function (e) {
          var _this15 = this;

          if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
          if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
          if (e._pc !== this) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
          var t;
          this._streams = this._streams || {}, Object.keys(this._streams).forEach(function (n) {
            _this15._streams[n].getTracks().find(function (t) {
              return e.track === t;
            }) && (t = _this15._streams[n]);
          }), t && (1 === t.getTracks().length ? this.removeStream(this._reverseStreams[t.id]) : t.removeTrack(e.track), this.dispatchEvent(new Event("negotiationneeded")));
        };
      }

      function G(e, t) {
        !e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), e.RTCPeerConnection && t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
          var n = e.RTCPeerConnection.prototype[t],
              r = _defineProperty({}, t, function () {
            return arguments[0] = new ("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), n.apply(this, arguments);
          });

          e.RTCPeerConnection.prototype[t] = r[t];
        });
      }

      function z(e, t) {
        x(e, "negotiationneeded", function (e) {
          var n = e.target;
          if (!(t.version < 72 || n.getConfiguration && "plan-b" === n.getConfiguration().sdpSemantics) || "stable" === n.signalingState) return e;
        });
      }

      var H = n(2539),
          J = n.n(H);

      function $(e) {
        var t = e && e.navigator,
            n = t.mediaDevices.getUserMedia.bind(t.mediaDevices);

        t.mediaDevices.getUserMedia = function (e) {
          return n(e).catch(function (e) {
            return Promise.reject(function (e) {
              return {
                name: {
                  PermissionDeniedError: "NotAllowedError"
                }[e.name] || e.name,
                message: e.message,
                constraint: e.constraint,
                toString: function toString() {
                  return this.name;
                }
              };
            }(e));
          });
        };
      }

      function K(e) {
        "getDisplayMedia" in e.navigator && e.navigator.mediaDevices && (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator)));
      }

      function Y(e, t) {
        if (e.RTCIceGatherer && (e.RTCIceCandidate || (e.RTCIceCandidate = function (e) {
          return e;
        }), e.RTCSessionDescription || (e.RTCSessionDescription = function (e) {
          return e;
        }), t.version < 15025)) {
          var _t12 = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");

          Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
            set: function set(e) {
              _t12.set.call(this, e);

              var n = new Event("enabled");
              n.enabled = e, this.dispatchEvent(n);
            }
          });
        }

        e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype) && Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
          get: function get() {
            return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf;
          }
        }), e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
        var n = J()(e, t.version);
        e.RTCPeerConnection = function (e) {
          return e && e.iceServers && (e.iceServers = function (e, t) {
            var n = !1;
            return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
              if (e && (e.urls || e.url)) {
                var _t13 = e.urls || e.url;

                e.url && !e.urls && E("RTCIceServer.url", "RTCIceServer.urls");

                var _r9 = "string" == typeof _t13;

                return _r9 && (_t13 = [_t13]), _t13 = _t13.filter(function (e) {
                  if (0 === e.indexOf("stun:")) return !1;
                  var t = e.startsWith("turn") && !e.startsWith("turn:[") && e.includes("transport=udp");
                  return t && !n ? (n = !0, !0) : t && !n;
                }), delete e.url, e.urls = _r9 ? _t13[0] : _t13, !!_t13.length;
              }
            });
          }(e.iceServers, t.version), T("ICE servers after filtering:", e.iceServers)), new n(e);
        }, e.RTCPeerConnection.prototype = n.prototype;
      }

      function X(e) {
        e.RTCRtpSender && !("replaceTrack" in e.RTCRtpSender.prototype) && (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack);
      }

      function Z(e, t) {
        var n = e && e.navigator,
            r = e && e.MediaStreamTrack;

        if (n.getUserMedia = function (e, t, r) {
          E("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n.mediaDevices.getUserMedia(e).then(t, r);
        }, !(t.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints())) {
          var _e5 = function _e5(e, t, n) {
            t in e && !(n in e) && (e[n] = e[t], delete e[t]);
          },
              _t14 = n.mediaDevices.getUserMedia.bind(n.mediaDevices);

          if (n.mediaDevices.getUserMedia = function (n) {
            return "object" == _typeof(n) && "object" == _typeof(n.audio) && (n = JSON.parse(JSON.stringify(n)), _e5(n.audio, "autoGainControl", "mozAutoGainControl"), _e5(n.audio, "noiseSuppression", "mozNoiseSuppression")), _t14(n);
          }, r && r.prototype.getSettings) {
            var _t15 = r.prototype.getSettings;

            r.prototype.getSettings = function () {
              var n = _t15.apply(this, arguments);

              return _e5(n, "mozAutoGainControl", "autoGainControl"), _e5(n, "mozNoiseSuppression", "noiseSuppression"), n;
            };
          }

          if (r && r.prototype.applyConstraints) {
            var _t16 = r.prototype.applyConstraints;

            r.prototype.applyConstraints = function (n) {
              return "audio" === this.kind && "object" == _typeof(n) && (n = JSON.parse(JSON.stringify(n)), _e5(n, "autoGainControl", "mozAutoGainControl"), _e5(n, "noiseSuppression", "mozNoiseSuppression")), _t16.apply(this, [n]);
            };
          }
        }
      }

      function Q(e, t) {
        e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function (n) {
          if (!n || !n.video) {
            var _e6 = new DOMException("getDisplayMedia without video constraints is undefined");

            return _e6.name = "NotFoundError", _e6.code = 8, Promise.reject(_e6);
          }

          return !0 === n.video ? n.video = {
            mediaSource: t
          } : n.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(n);
        });
      }

      function ee(e) {
        "object" == _typeof(e) && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
          get: function get() {
            return {
              receiver: this.receiver
            };
          }
        });
      }

      function te(e, t) {
        if ("object" != _typeof(e) || !e.RTCPeerConnection && !e.mozRTCPeerConnection) return;
        !e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
          var n = e.RTCPeerConnection.prototype[t],
              r = _defineProperty({}, t, function () {
            return arguments[0] = new ("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), n.apply(this, arguments);
          });

          e.RTCPeerConnection.prototype[t] = r[t];
        });
        var n = {
          inboundrtp: "inbound-rtp",
          outboundrtp: "outbound-rtp",
          candidatepair: "candidate-pair",
          localcandidate: "local-candidate",
          remotecandidate: "remote-candidate"
        },
            r = e.RTCPeerConnection.prototype.getStats;

        e.RTCPeerConnection.prototype.getStats = function () {
          var _arguments2 = Array.prototype.slice.call(arguments),
              e = _arguments2[0],
              i = _arguments2[1],
              o = _arguments2[2];

          return r.apply(this, [e || null]).then(function (e) {
            if (t.version < 53 && !i) try {
              e.forEach(function (e) {
                e.type = n[e.type] || e.type;
              });
            } catch (t) {
              if ("TypeError" !== t.name) throw t;
              e.forEach(function (t, r) {
                e.set(r, Object.assign({}, t, {
                  type: n[t.type] || t.type
                }));
              });
            }
            return e;
          }).then(i, o);
        };
      }

      function ne(e) {
        if ("object" != _typeof(e) || !e.RTCPeerConnection || !e.RTCRtpSender) return;
        if (e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
        var t = e.RTCPeerConnection.prototype.getSenders;
        t && (e.RTCPeerConnection.prototype.getSenders = function () {
          var _this16 = this;

          var e = t.apply(this, []);
          return e.forEach(function (e) {
            return e._pc = _this16;
          }), e;
        });
        var n = e.RTCPeerConnection.prototype.addTrack;
        n && (e.RTCPeerConnection.prototype.addTrack = function () {
          var e = n.apply(this, arguments);
          return e._pc = this, e;
        }), e.RTCRtpSender.prototype.getStats = function () {
          return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
        };
      }

      function re(e) {
        if ("object" != _typeof(e) || !e.RTCPeerConnection || !e.RTCRtpSender) return;
        if (e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
        var t = e.RTCPeerConnection.prototype.getReceivers;
        t && (e.RTCPeerConnection.prototype.getReceivers = function () {
          var _this17 = this;

          var e = t.apply(this, []);
          return e.forEach(function (e) {
            return e._pc = _this17;
          }), e;
        }), x(e, "track", function (e) {
          return e.receiver._pc = e.srcElement, e;
        }), e.RTCRtpReceiver.prototype.getStats = function () {
          return this._pc.getStats(this.track);
        };
      }

      function ie(e) {
        e.RTCPeerConnection && !("removeStream" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.removeStream = function (e) {
          var _this18 = this;

          E("removeStream", "removeTrack"), this.getSenders().forEach(function (t) {
            t.track && e.getTracks().includes(t.track) && _this18.removeTrack(t);
          });
        });
      }

      function oe(e) {
        e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
      }

      function ae(e) {
        if ("object" != _typeof(e) || !e.RTCPeerConnection) return;
        var t = e.RTCPeerConnection.prototype.addTransceiver;
        t && (e.RTCPeerConnection.prototype.addTransceiver = function () {
          this.setParametersPromises = [];
          var e = arguments[1],
              n = e && "sendEncodings" in e;
          n && e.sendEncodings.forEach(function (e) {
            if ("rid" in e && !/^[a-z0-9]{0,16}$/i.test(e.rid)) throw new TypeError("Invalid RID value provided.");
            if ("scaleResolutionDownBy" in e && !(parseFloat(e.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
            if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
          });
          var r = t.apply(this, arguments);

          if (n) {
            var _t17 = r.sender,
                _n7 = _t17.getParameters();

            (!("encodings" in _n7) || 1 === _n7.encodings.length && 0 === Object.keys(_n7.encodings[0]).length) && (_n7.encodings = e.sendEncodings, _t17.sendEncodings = e.sendEncodings, this.setParametersPromises.push(_t17.setParameters(_n7).then(function () {
              delete _t17.sendEncodings;
            }).catch(function () {
              delete _t17.sendEncodings;
            })));
          }

          return r;
        });
      }

      function se(e) {
        if ("object" != _typeof(e) || !e.RTCRtpSender) return;
        var t = e.RTCRtpSender.prototype.getParameters;
        t && (e.RTCRtpSender.prototype.getParameters = function () {
          var e = t.apply(this, arguments);
          return "encodings" in e || (e.encodings = [].concat(this.sendEncodings || [{}])), e;
        });
      }

      function ce(e) {
        if ("object" != _typeof(e) || !e.RTCPeerConnection) return;
        var t = e.RTCPeerConnection.prototype.createOffer;

        e.RTCPeerConnection.prototype.createOffer = function () {
          var _arguments3 = arguments,
              _this19 = this;

          return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function () {
            return t.apply(_this19, _arguments3);
          }).finally(function () {
            _this19.setParametersPromises = [];
          }) : t.apply(this, arguments);
        };
      }

      function ue(e) {
        if ("object" != _typeof(e) || !e.RTCPeerConnection) return;
        var t = e.RTCPeerConnection.prototype.createAnswer;

        e.RTCPeerConnection.prototype.createAnswer = function () {
          var _arguments4 = arguments,
              _this20 = this;

          return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function () {
            return t.apply(_this20, _arguments4);
          }).finally(function () {
            _this20.setParametersPromises = [];
          }) : t.apply(this, arguments);
        };
      }

      function de(e) {
        if ("object" == _typeof(e) && e.RTCPeerConnection) {
          if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function () {
            return this._localStreams || (this._localStreams = []), this._localStreams;
          }), !("addStream" in e.RTCPeerConnection.prototype)) {
            var _t18 = e.RTCPeerConnection.prototype.addTrack;
            e.RTCPeerConnection.prototype.addStream = function (e) {
              var _this21 = this;

              this._localStreams || (this._localStreams = []), this._localStreams.includes(e) || this._localStreams.push(e), e.getAudioTracks().forEach(function (n) {
                return _t18.call(_this21, n, e);
              }), e.getVideoTracks().forEach(function (n) {
                return _t18.call(_this21, n, e);
              });
            }, e.RTCPeerConnection.prototype.addTrack = function (e) {
              var _this22 = this;

              for (var _len = arguments.length, n = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                n[_key - 1] = arguments[_key];
              }

              return n && n.forEach(function (e) {
                _this22._localStreams ? _this22._localStreams.includes(e) || _this22._localStreams.push(e) : _this22._localStreams = [e];
              }), _t18.apply(this, arguments);
            };
          }

          "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function (e) {
            var _this23 = this;

            this._localStreams || (this._localStreams = []);

            var t = this._localStreams.indexOf(e);

            if (-1 === t) return;

            this._localStreams.splice(t, 1);

            var n = e.getTracks();
            this.getSenders().forEach(function (e) {
              n.includes(e.track) && _this23.removeTrack(e);
            });
          });
        }
      }

      function fe(e) {
        if ("object" == _typeof(e) && e.RTCPeerConnection && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
          return this._remoteStreams ? this._remoteStreams : [];
        }), !("onaddstream" in e.RTCPeerConnection.prototype))) {
          Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
            get: function get() {
              return this._onaddstream;
            },
            set: function set(e) {
              var _this24 = this;

              this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = function (e) {
                e.streams.forEach(function (e) {
                  if (_this24._remoteStreams || (_this24._remoteStreams = []), _this24._remoteStreams.includes(e)) return;

                  _this24._remoteStreams.push(e);

                  var t = new Event("addstream");
                  t.stream = e, _this24.dispatchEvent(t);
                });
              });
            }
          });
          var _t19 = e.RTCPeerConnection.prototype.setRemoteDescription;

          e.RTCPeerConnection.prototype.setRemoteDescription = function () {
            var e = this;
            return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function (t) {
              t.streams.forEach(function (t) {
                if (e._remoteStreams || (e._remoteStreams = []), e._remoteStreams.indexOf(t) >= 0) return;

                e._remoteStreams.push(t);

                var n = new Event("addstream");
                n.stream = t, e.dispatchEvent(n);
              });
            }), _t19.apply(e, arguments);
          };
        }
      }

      function le(e) {
        if ("object" != _typeof(e) || !e.RTCPeerConnection) return;
        var t = e.RTCPeerConnection.prototype,
            n = t.createOffer,
            r = t.createAnswer,
            i = t.setLocalDescription,
            o = t.setRemoteDescription,
            a = t.addIceCandidate;
        t.createOffer = function (e, t) {
          var r = arguments.length >= 2 ? arguments[2] : arguments[0],
              i = n.apply(this, [r]);
          return t ? (i.then(e, t), Promise.resolve()) : i;
        }, t.createAnswer = function (e, t) {
          var n = arguments.length >= 2 ? arguments[2] : arguments[0],
              i = r.apply(this, [n]);
          return t ? (i.then(e, t), Promise.resolve()) : i;
        };

        var s = function s(e, t, n) {
          var r = i.apply(this, [e]);
          return n ? (r.then(t, n), Promise.resolve()) : r;
        };

        t.setLocalDescription = s, s = function s(e, t, n) {
          var r = o.apply(this, [e]);
          return n ? (r.then(t, n), Promise.resolve()) : r;
        }, t.setRemoteDescription = s, s = function s(e, t, n) {
          var r = a.apply(this, [e]);
          return n ? (r.then(t, n), Promise.resolve()) : r;
        }, t.addIceCandidate = s;
      }

      function pe(e) {
        var t = e && e.navigator;

        if (t.mediaDevices && t.mediaDevices.getUserMedia) {
          var _e7 = t.mediaDevices,
              _n8 = _e7.getUserMedia.bind(_e7);

          t.mediaDevices.getUserMedia = function (e) {
            return _n8(he(e));
          };
        }

        !t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function (e, n, r) {
          t.mediaDevices.getUserMedia(e).then(n, r);
        }.bind(t));
      }

      function he(e) {
        return e && void 0 !== e.video ? Object.assign({}, e, {
          video: P(e.video)
        }) : e;
      }

      function ve(e) {
        if (!e.RTCPeerConnection) return;
        var t = e.RTCPeerConnection;
        e.RTCPeerConnection = function (e, n) {
          if (e && e.iceServers) {
            var _t20 = [];

            for (var _n9 = 0; _n9 < e.iceServers.length; _n9++) {
              var _r11 = e.iceServers[_n9];
              !_r11.hasOwnProperty("urls") && _r11.hasOwnProperty("url") ? (E("RTCIceServer.url", "RTCIceServer.urls"), _r11 = JSON.parse(JSON.stringify(_r11)), _r11.urls = _r11.url, delete _r11.url, _t20.push(_r11)) : _t20.push(e.iceServers[_n9]);
            }

            e.iceServers = _t20;
          }

          return new t(e, n);
        }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in t && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
          get: function get() {
            return t.generateCertificate;
          }
        });
      }

      function me(e) {
        "object" == _typeof(e) && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
          get: function get() {
            return {
              receiver: this.receiver
            };
          }
        });
      }

      function ge(e) {
        var t = e.RTCPeerConnection.prototype.createOffer;

        e.RTCPeerConnection.prototype.createOffer = function (e) {
          if (e) {
            void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);

            var _t21 = this.getTransceivers().find(function (e) {
              return "audio" === e.receiver.track.kind;
            });

            !1 === e.offerToReceiveAudio && _t21 ? "sendrecv" === _t21.direction ? _t21.setDirection ? _t21.setDirection("sendonly") : _t21.direction = "sendonly" : "recvonly" === _t21.direction && (_t21.setDirection ? _t21.setDirection("inactive") : _t21.direction = "inactive") : !0 !== e.offerToReceiveAudio || _t21 || this.addTransceiver("audio"), void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);

            var _n10 = this.getTransceivers().find(function (e) {
              return "video" === e.receiver.track.kind;
            });

            !1 === e.offerToReceiveVideo && _n10 ? "sendrecv" === _n10.direction ? _n10.setDirection ? _n10.setDirection("sendonly") : _n10.direction = "sendonly" : "recvonly" === _n10.direction && (_n10.setDirection ? _n10.setDirection("inactive") : _n10.direction = "inactive") : !0 !== e.offerToReceiveVideo || _n10 || this.addTransceiver("video");
          }

          return t.apply(this, arguments);
        };
      }

      function _e(e) {
        "object" != _typeof(e) || e.AudioContext || (e.AudioContext = e.webkitAudioContext);
      }

      var ye = n(7539),
          be = n.n(ye);

      function Se(e) {
        if (!e.RTCIceCandidate || e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype) return;
        var t = e.RTCIceCandidate;
        e.RTCIceCandidate = function (e) {
          if ("object" == _typeof(e) && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) {
            var _n11 = new t(e),
                _r12 = be().parseCandidate(e.candidate),
                _i4 = Object.assign(_n11, _r12);

            return _i4.toJSON = function () {
              return {
                candidate: _i4.candidate,
                sdpMid: _i4.sdpMid,
                sdpMLineIndex: _i4.sdpMLineIndex,
                usernameFragment: _i4.usernameFragment
              };
            }, _i4;
          }

          return new t(e);
        }, e.RTCIceCandidate.prototype = t.prototype, x(e, "icecandidate", function (t) {
          return t.candidate && Object.defineProperty(t, "candidate", {
            value: new e.RTCIceCandidate(t.candidate),
            writable: "false"
          }), t;
        });
      }

      function Ce(e, t) {
        if (!e.RTCPeerConnection) return;
        "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
          get: function get() {
            return void 0 === this._sctp ? null : this._sctp;
          }
        });

        var n = function n(e) {
          if (!e || !e.sdp) return !1;
          var t = be().splitSections(e.sdp);
          return t.shift(), t.some(function (e) {
            var t = be().parseMLine(e);
            return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP");
          });
        },
            r = function r(e) {
          var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
          if (null === t || t.length < 2) return -1;
          var n = parseInt(t[1], 10);
          return n != n ? -1 : n;
        },
            i = function i(e) {
          var n = 65536;
          return "firefox" === t.browser && (n = t.version < 57 ? -1 === e ? 16384 : 2147483637 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 2147483637), n;
        },
            o = function o(e, n) {
          var r = 65536;
          "firefox" === t.browser && 57 === t.version && (r = 65535);
          var i = be().matchPrefix(e.sdp, "a=max-message-size:");
          return i.length > 0 ? r = parseInt(i[0].substr(19), 10) : "firefox" === t.browser && -1 !== n && (r = 2147483637), r;
        },
            a = e.RTCPeerConnection.prototype.setRemoteDescription;

        e.RTCPeerConnection.prototype.setRemoteDescription = function () {
          if (this._sctp = null, "chrome" === t.browser && t.version >= 76) {
            var _this$getConfiguratio = this.getConfiguration(),
                _e8 = _this$getConfiguratio.sdpSemantics;

            "plan-b" === _e8 && Object.defineProperty(this, "sctp", {
              get: function get() {
                return void 0 === this._sctp ? null : this._sctp;
              },
              enumerable: !0,
              configurable: !0
            });
          }

          if (n(arguments[0])) {
            var _e9 = r(arguments[0]),
                _t22 = i(_e9),
                _n12 = o(arguments[0], _e9);

            var _a3;

            _a3 = 0 === _t22 && 0 === _n12 ? Number.POSITIVE_INFINITY : 0 === _t22 || 0 === _n12 ? Math.max(_t22, _n12) : Math.min(_t22, _n12);
            var _s2 = {};
            Object.defineProperty(_s2, "maxMessageSize", {
              get: function get() {
                return _a3;
              }
            }), this._sctp = _s2;
          }

          return a.apply(this, arguments);
        };
      }

      function we(e) {
        if (!e.RTCPeerConnection || !("createDataChannel" in e.RTCPeerConnection.prototype)) return;

        function t(e, t) {
          var n = e.send;

          e.send = function () {
            var r = arguments[0],
                i = r.length || r.size || r.byteLength;
            if ("open" === e.readyState && t.sctp && i > t.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
            return n.apply(e, arguments);
          };
        }

        var n = e.RTCPeerConnection.prototype.createDataChannel;
        e.RTCPeerConnection.prototype.createDataChannel = function () {
          var e = n.apply(this, arguments);
          return t(e, this), e;
        }, x(e, "datachannel", function (e) {
          return t(e.channel, e.target), e;
        });
      }

      function ke(e) {
        if (!e.RTCPeerConnection || "connectionState" in e.RTCPeerConnection.prototype) return;
        var t = e.RTCPeerConnection.prototype;
        Object.defineProperty(t, "connectionState", {
          get: function get() {
            return {
              completed: "connected",
              checking: "connecting"
            }[this.iceConnectionState] || this.iceConnectionState;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t, "onconnectionstatechange", {
          get: function get() {
            return this._onconnectionstatechange || null;
          },
          set: function set(e) {
            this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e);
          },
          enumerable: !0,
          configurable: !0
        }), ["setLocalDescription", "setRemoteDescription"].forEach(function (e) {
          var n = t[e];

          t[e] = function () {
            return this._connectionstatechangepoly || (this._connectionstatechangepoly = function (e) {
              var t = e.target;

              if (t._lastConnectionState !== t.connectionState) {
                t._lastConnectionState = t.connectionState;

                var _n13 = new Event("connectionstatechange", e);

                t.dispatchEvent(_n13);
              }

              return e;
            }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), n.apply(this, arguments);
          };
        });
      }

      function xe(e, t) {
        if (!e.RTCPeerConnection) return;
        if ("chrome" === t.browser && t.version >= 71) return;
        if ("safari" === t.browser && t.version >= 605) return;
        var n = e.RTCPeerConnection.prototype.setRemoteDescription;

        e.RTCPeerConnection.prototype.setRemoteDescription = function (t) {
          if (t && t.sdp && -1 !== t.sdp.indexOf("\na=extmap-allow-mixed")) {
            var _n14 = t.sdp.split("\n").filter(function (e) {
              return "a=extmap-allow-mixed" !== e.trim();
            }).join("\n");

            e.RTCSessionDescription && t instanceof e.RTCSessionDescription ? arguments[0] = new e.RTCSessionDescription({
              type: t.type,
              sdp: _n14
            }) : t.sdp = _n14;
          }

          return n.apply(this, arguments);
        };
      }

      function Ie(e, t) {
        if (!e.RTCPeerConnection || !e.RTCPeerConnection.prototype) return;
        var n = e.RTCPeerConnection.prototype.addIceCandidate;
        n && 0 !== n.length && (e.RTCPeerConnection.prototype.addIceCandidate = function () {
          return arguments[0] ? ("chrome" === t.browser && t.version < 78 || "firefox" === t.browser && t.version < 68 || "safari" === t.browser) && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
        });
      }

      var Re = function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            n = _ref.window;

        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          shimChrome: !0,
          shimFirefox: !0,
          shimEdge: !0,
          shimSafari: !0
        };

        var s = T,
            c = function (e) {
          var t = {
            browser: null,
            version: null
          };
          if (void 0 === e || !e.navigator) return t.browser = "Not a browser.", t;
          var n = e.navigator;
          if (n.mozGetUserMedia) t.browser = "firefox", t.version = k(n.userAgent, /Firefox\/(\d+)\./, 1);else if (n.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer) t.browser = "chrome", t.version = k(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);else if (n.mediaDevices && n.userAgent.match(/Edge\/(\d+).(\d+)$/)) t.browser = "edge", t.version = k(n.userAgent, /Edge\/(\d+).(\d+)$/, 2);else {
            if (!e.RTCPeerConnection || !n.userAgent.match(/AppleWebKit\/(\d+)\./)) return t.browser = "Not a supported browser.", t;
            t.browser = "safari", t.version = k(n.userAgent, /AppleWebKit\/(\d+)\./, 1), t.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype;
          }
          return t;
        }(n),
            u = {
          browserDetails: c,
          commonShim: a,
          extractVersion: k,
          disableLog: I,
          disableWarnings: R
        };

        switch (c.browser) {
          case "chrome":
            if (!e || !G || !r.shimChrome) return s("Chrome shim is not included in this adapter release."), u;
            if (null === c.version) return s("Chrome shim can not determine version, not shimming."), u;
            s("adapter.js shimming chrome."), u.browserShim = e, Ie(n, c), D(n, c), F(n), G(n, c), W(n), q(n, c), N(n), V(n), U(n), z(n, c), Se(n), ke(n), Ce(n, c), we(n), xe(n, c);
            break;

          case "firefox":
            if (!i || !te || !r.shimFirefox) return s("Firefox shim is not included in this adapter release."), u;
            s("adapter.js shimming firefox."), u.browserShim = i, Ie(n, c), Z(n, c), te(n, c), ee(n), ie(n), ne(n), re(n), oe(n), ae(n), se(n), ce(n), ue(n), Se(n), ke(n), Ce(n, c), we(n);
            break;

          case "edge":
            if (!t || !Y || !r.shimEdge) return s("MS edge shim is not included in this adapter release."), u;
            s("adapter.js shimming edge."), u.browserShim = t, $(n), K(n), Y(n, c), X(n), Ce(n, c), we(n);
            break;

          case "safari":
            if (!o || !r.shimSafari) return s("Safari shim is not included in this adapter release."), u;
            s("adapter.js shimming safari."), u.browserShim = o, Ie(n, c), ve(n), ge(n), le(n), de(n), fe(n), me(n), pe(n), _e(n), Se(n), Ce(n, c), we(n), xe(n, c);
            break;

          default:
            s("Unsupported browser!");
        }

        return u;
      }({
        window: "undefined" == typeof window ? void 0 : window
      });

      var Te = Re.browserDetails.browser,
          Ee = Re.browserDetails.version;
      "Not a supported browser." === Te && console.error("Not a supported browser"), console.info("Current browser", Te, Ee);
      var Me,
          Pe = "firefox" === Te,
          Ae = "chrome" === Te,
          Oe = "safari" === Te,
          je = "edge" === Te,
          De = (window.RTCPeerConnection && /^https\:$/.test(window.location.protocol), window.AudioContext || window.webkitAudioContext);

      function Le(e) {
        var t = e.getBoundingClientRect();
        return {
          x: t.left + (window.pageXOffset || window.document.documentElement.scrollLeft),
          y: t.top + (window.pageYOffset || window.document.documentElement.scrollTop),
          width: t.width || e.offsetWidth,
          height: t.height || e.offsetHeight
        };
      }

      (Ae || Oe) && (Me = !0), Me = !1;
      var Fe = "object" === ("undefined" == typeof HTMLElement ? "undefined" : g(HTMLElement)) ? function (e) {
        return e instanceof HTMLElement;
      } : function (e) {
        return e && "object" === g(e) && 1 === e.nodeType && "string" == typeof e.nodeName;
      };
      n(4050);
      var We = n(4720),
          Ne = n.n(We),
          Ve = n(3133),
          Ue = n.n(Ve),
          Be = n(7750);

      function qe() {
        if (!(emedia._logContextIndex < 0) && emedia._logContext && emedia._logContext instanceof Array) {
          var e = emedia._logContextIndex % emedia._logContext.length,
              t = emedia._logContext[e];
          t && t instanceof Array || (t = emedia._logContext[e] = []);
          var n = [];
          n.push(emedia._logContextIndex);
          var r,
              i = new Date();
          "function" == typeof i.toLocaleString ? n.push(i.toLocaleString()) : i.toJSON ? n.push(i.toJSON()) : i.toISOString ? n.push(i.toISOString()) : n.push(i + "");

          for (var o = 0; o < arguments.length; o++) {
            var a = arguments[o];
            "string" != typeof a && a ? "string" != typeof a.message ? "function" != typeof a.message ? "string" != typeof a.stack ? a.event && "function" == typeof a.event.toString || a.event && "function" == typeof a.event.toString ? n.push(a.event.toString()) : "string" != typeof a.candidate ? "string" != typeof a.sdp ? Be.isPlainObject(a) ? n.push(Ne()(a)) : n.push(String(a)) : n.push(a.sdp) : n.push(a.candidate) : n.push(a.stack) : n.push(a.message()) : n.push(a.message) : n.push(a);
          }

          if (h.loglastStoreArray && t.push(r = n.join(" ")), "function" == typeof emedia.config.onSdkLog) try {
            r || (r = n.join(" ")), emedia.config.onSdkLog(r);
          } catch (e) {
            console.error(e);
          }
        }
      }

      function Ge() {
        try {
          qe.apply(null, arguments);
        } catch (e) {
          console.warn(e);
        }
      }

      function ze(e, t, n) {
        try {
          if (emedia && emedia.LOG_LEVEL && e < emedia.LOG_LEVEL) return;
          var r = [];
          r.push(e), n.tag && r.push(n.tag), Ue()(t).forEach(function (e, t) {
            r.push(e && e._toString ? e._toString.call(e) : e);
          }), n._log.apply(n, r);
        } catch (e) {
          throw e;
        }
      }

      var He = function () {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "EMEDIA";
          s(this, e), f(this, "LogLevel", {
            TRACE: 0,
            DEBUG: 1,
            INFO: 2,
            WARN: 3,
            ERROR: 4,
            FATAL: 5
          }), f(this, "LogLevelName", ["TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL"]), this.tag = t, h.loglastConfrCount && (this.logContext = new Array(h.loglastConfrCount), this.logContextIndex = -1);
        }

        return d(e, [{
          key: "_log",
          value: function value() {
            var e = arguments[0];
            e = arguments[0] = this.LogLevelName[e], this.logContext && Ge.apply(null, arguments), !0 === emedia.config.consoleLogger && console && e && (console[e.toLowerCase()] || console.warn).apply(console, arguments);
          }
        }, {
          key: "log",
          value: function value() {
            ze(this.LogLevel.INFO, arguments, this);
          }
        }, {
          key: "trace",
          value: function value() {
            ze(this.LogLevel.TRACE, arguments, this);
          }
        }, {
          key: "debug",
          value: function value() {
            ze(this.LogLevel.DEBUG, arguments, this);
          }
        }, {
          key: "info",
          value: function value() {
            ze(this.LogLevel.INFO, arguments, this);
          }
        }, {
          key: "warn",
          value: function value() {
            ze(this.LogLevel.WARN, arguments, this);
          }
        }, {
          key: "error",
          value: function value() {
            ze(this.LogLevel.ERROR, arguments, this);
          }
        }, {
          key: "fatal",
          value: function value() {
            ze(this.LogLevel.FATAL, arguments, this);
          }
        }, {
          key: "count",
          value: function value() {
            if (this.logContext) {
              this.logContextIndex++;
              var e = this.logContextIndex % this.logContext.length;
              0 === e && 0 !== this.logContextIndex && (this.logContext.loadlogs = this.logContext[e]), this.logContext[e] = [];
            }
          }
        }]), e;
      }(),
          Je = function Je(e) {
        return new He(e);
      };

      var $e = new He();
      var Ke = n(4422),
          Ye = n.n(Ke),
          Xe = n(7750);

      function Ze() {}

      Ze.prototype.extend = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = this,
            s = arguments[0] || {},
            c = 1,
            u = arguments.length,
            d = !1;

        for ("boolean" == typeof s && (d = s, s = arguments[c] || {}, c++), "object" === g(s) || a.isFunction(s) || (s = {}), c === u && (s = this, c--); c < u; c++) {
          if (null != (e = arguments[c])) for (t in e) {
            n = s[t], s !== (r = e[t]) && (d && r && (Xe.isPlainObject(r) || (i = Ye()(r))) ? (i ? (i = !1, o = n && Ye()(n) ? n : []) : o = n && Xe.isPlainObject(n) ? n : {}, s[t] = a.extend(d, o, r)) : void 0 !== r && (s[t] = r));
          }
        }

        return s;
      }, Ze.prototype.prototypeExtend = Ze.prototype.classExtend = function () {
        var e = this;

        function t() {
          for (var t = 0; t < arguments.length; t++) {
            var n = arguments[t] || {};
            e.extend(!0, this, n);
          }

          this.__init__ && this.__init__.apply(this, arguments);
        }

        for (var n = 0; n < arguments.length; n++) {
          var r = arguments[n] || {};
          "function" == typeof r && (r = r.prototype), e.extend(!0, t.prototype, r);
        }

        return t.extend || (t.extend = function (n) {
          return e.prototypeExtend(t, n);
        }), t;
      };
      var Qe = new Ze();
      var et = n(7750),
          tt = Je("CompositeCanvas");

      function nt() {}

      for (var rt in CanvasRenderingContext2D.prototype) {
        !function (e) {
          nt.prototype[e] = function () {
            if ("function" == typeof this._canvasContext[e]) this._canvasContext[e].apply(this._canvasContext, arguments);else {
              var t = arguments.length >= 1 ? arguments[0] : void 0;
              if (!t) return this._canvasContext[e];
              this._canvasContext[e] = t;
            }
          };
        }(rt);
      }

      var it = Qe.prototypeExtend(nt, {
        __init__: function __init__() {
          var e = this;
          e.compositeCanvasTag || (e.compositeCanvasTag = document.createElement("canvas")), e._canvasContext = e.compositeCanvasTag.getContext("2d"), e._canvasContext.globalAlpha = void 0 !== this._globalAlpha ? this._globalAlpha : 1, e._compositeOperation = e._compositeOperation || ot.source_over, e.globalCompositeOperation(e._compositeOperation);
        },
        setCanvas: function setCanvas() {
          for (var e, t = this, n = 0; n < arguments.length; n++) {
            "function" == typeof (e = arguments[n]) && e(this.compositeCanvasTag, this._canvasContext), "function" != typeof e && et.isPlainObject(e) && Qe.forEach(e, function (e, n) {
              tt.debug("Canvas set ", e, " = ", n), t.compositeCanvasTag.setAttribute(e, n);
            });
          }

          return t;
        },
        getCanvasImageData: function getCanvasImageData(e, t) {
          for (var n = [], r = 1; r < arguments.length; r++) {
            n.push(arguments[r]);
          }

          var i = e.getContext("2d");
          return i.globalAlpha = t || 0, i.getImageData.apply(i, n);
        },
        _composite: function _composite(e) {
          return new it(this, {
            _compositeOperation: e
          });
        },
        composite: function composite(e) {
          return this.globalCompositeOperation(e), this;
        },
        requestAnimationFrame: function requestAnimationFrame(e) {
          var t = this;
          return t.requestFrame(), t._requestAnimationFrameStart = window.requestAnimationFrame(function (e) {
            t.requestAnimationFrame(e);
          }), t;
        },
        cancelAnimationFrame: function cancelAnimationFrame() {
          var e = this;
          return e._requestAnimationFrameStart && window.cancelAnimationFrame(e._requestAnimationFrameStart), e;
        },
        requestFrame: function requestFrame(e) {
          var t;
          if ("function" != typeof this.requestOneFrame) throw tt.error("Pleas implement requestOneFrame()"), "Pleas implement requestOneFrame()";

          try {
            this.requestOneFrame();
          } catch (e) {
            tt.error(e);
          }

          if (e && (t = Math.floor(1e3 / e)), !t) return this;
          var n = this.requestFrame.bind(this);
          return this.intervalId = setInterval(function () {
            n(e);
          }, t), this;
        },
        stopRequestFrame: function stopRequestFrame() {
          return this.intervalId && clearInterval(this.intervalId), this;
        }
      });
      it.CompositeOperation = ["source-atop", "source-in", "source-out", "source-over", "destination-atop", "destination-in", "destination-out", "destination-over", "lighter", "darker", "xor", "copy"];
      var ot = it.operation = {
        source_atop: "source-atop",
        source_in: "source-in",
        source_out: "source-out",
        source_over: "source-over",
        destination_atop: "destination-atop",
        destination_in: "destination-in",
        destination_out: "destination-out",
        destination_over: "destination-over",
        lighter: "lighter",
        darker: "darker",
        xor: "xor",
        copy: "copy"
      };

      it.compositeVideoOverCanvas = function (e, t, n) {
        var r;
        return (r = e.compositeCanvas) || (r = new it({
          compositeCanvasTag: e,
          requestOneFrame: function requestOneFrame() {
            t && r.drawImage(t, 0, 0, e.width, e.height), n && r.drawImage(n, 0, 0, e.width, e.height);
          }
        }), e.compositeCanvas = r), r;
      };

      var at = it;

      function st(e) {
        return Number(e) === e && e % 1 != 0;
      }

      function ct(e, t) {
        if (null != e) {
          var n = e[t];
          return delete e[t], n;
        }
      }

      function ut(e, t) {
        if (e && !(Ye()(e) && 0 === e.length || void 0 !== e.length && 0 === e.length)) if (e.length) for (var n = 0; n < e.length; n++) {
          t(n, e[n]);
        } else if (e && !function (e) {
          var t;

          for (t in e) {
            return !1;
          }

          return !0;
        }(e)) {
          e = e || {};
          var r = p()({}, e);

          for (var i in r) {
            t(i, e[i]);
          }
        }
      }

      var dt = n(7750),
          ft = Je("PCStats"),
          lt = Qe.prototypeExtend({
        __init__: function __init__() {
          this._webrtc || this._stream && (this._webrtc = this._stream._webrtc), this.samplesDatas = {}, this.gatherResults = {}, this._bysamples = {}, !1 !== this._inbound_ && (this._bysamples["inbound-rtp"] = ["bytesRateReceived", "packageLossRate", "bytesReceived", "packetsLost", "packetsReceived", "pliCount", "framesDecoded"]), !1 !== this._outbound_ && (this._bysamples["outbound-rtp"] = ["bytesRateSent", "bytesSent", "packetsSent", "qpSum", "pliCount"]);
        },
        _onGatherResult: function _onGatherResult(e, t, n, r) {
          var i = this;

          if (i._service && i._service.current && emedia.config.remainLastStatsCount) {
            var o = i._service.current._trackStats;
            o || (o = i._service.current._trackStats = {});
            var a = (o[e] || (o[e] = {}))[t];
            a || (a = o[e][t] = {});
            var s = a[n];
            s || (s = a[n] = new Array(emedia.config.remainLastStatsCount)), void 0 === s.curIndex && (s.curIndex = 0), s[s.curIndex] = {
              data: r,
              timestamp: new Date()
            }, s.curIndex = (s.curIndex + 1) % emedia.config.remainLastStatsCount;
          }

          "function" == typeof this.onGatherResult && this.onGatherResult(e, t, n, r);
        },
        stats: function stats(e) {
          if (this._webrtc && this._webrtc._rtcPeerConnection) return this._webrtc._rtcPeerConnection.getStats(e);
          ft.warn("not found webrtc or peer connection");
        },
        statsOfTrack: function statsOfTrack(e) {
          if (!e instanceof window.MediaStreamTrack) throw ft.error("selector not a MediaStreamTrack"), "selector not a MediaStreamTrack";
          return this.stats(e);
        },
        audioTrack: function audioTrack(e) {
          var t = e && e.getAudioTracks();
          return t && t.length ? t[0] : void 0;
        },
        videoTrack: function videoTrack(e) {
          var t = e && e.getVideoTracks();
          return t && t.length ? t[0] : void 0;
        },
        gatherTrack: function gatherTrack(e, t) {
          var n = this;
          t = (t = e.kind || t) && t.toLowerCase();
          var r = e.id;
          this.statsOfTrack(e).then(function (i) {
            n.samplesDatas[r] || (n.samplesDatas[r] = {});
            var o = n.samplesDatas[r];
            i.forEach(function (r, i) {
              var a = n._bysamples[r.type],
                  s = r.mediaType || i.indexOf("ideo") >= 0 && "video" || i.indexOf("udio") >= 0 && "audio" || void 0;

              if (a && a.length && (emedia.config._printDebugStats, !s || s === t)) {
                var c = o[r.type] || (o[r.type] = {});
                a.forEach(function (n) {
                  var i = c[n] || (c[n] = []),
                      o = {
                    timestamp: r.timestamp,
                    kind: r.mediaType || e.kind || t
                  };
                  o[n] = "packageLossRate" === n ? {
                    packetsLost: r.packetsLost,
                    packetsReceived: r.packetsReceived
                  } : "bytesRateReceived" === n ? r.bytesReceived : "bytesRateSent" === n ? r.bytesSent : r[n], i.push(o);
                });
              }
            });
          });
        },
        gatherWebrtcMediaStream: function gatherWebrtcMediaStream(e, t) {
          var n = this;
          t ? "audio" !== t.toLowerCase() ? "video" !== t.toLowerCase() || e.getVideoTracks().forEach(function (e) {
            n.gatherTrack(e, e.kind || t.toLowerCase());
          }) : e.getAudioTracks().forEach(function (e) {
            n.gatherTrack(e, e.kind || t.toLowerCase());
          }) : e.getTracks().forEach(function (e) {
            n.gatherTrack(e);
          });
        },
        gatherWebrtc: function gatherWebrtc() {
          this._webrtc._localStream && this.gatherWebrtcMediaStream(this._webrtc._localStream), this._webrtc._remoteStream && this.gatherWebrtcMediaStream(this._webrtc._remoteStream);
        },
        _gather_inbound_rtp_packageLossRate: function _gather_inbound_rtp_packageLossRate(e) {
          if (!e || 0 === e.length) return 0;
          var t = 0,
              n = 0;
          if (e.length > 1) for (var r = 1; r < e.length; r++) {
            var i = e[r],
                o = e[r - 1];
            i.packageLossRate.packetsReceived != o.packageLossRate.packetsReceived ? (t += (i.packageLossRate.packetsLost - o.packageLossRate.packetsLost) / (i.packageLossRate.packetsReceived - o.packageLossRate.packetsReceived), n++) : (t = 0, n = 0);
          }
          return e.length >= emedia.config.statsSeconds && e.shift(), 0 == n ? 0 : t / n;
        },
        _gatherBytesRate: function _gatherBytesRate(e, t, n) {
          if (!n || 0 === n.length) return 0;
          var r = n[n.length - 1][t] - n[0][t],
              i = n[n.length - 1].timestamp - n[0].timestamp;
          return n.length >= emedia.config.statsSeconds && n.shift(), 0 === i ? 0 : S()(1e3 * r / i).toFixed(2);
        },
        _gather: function _gather(e, t, n) {
          var r = function () {
            return 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
          }("_gather", e = e.replace(/[^\w]/g, "_"), t = t.replace(/[^\w]/g, "_")).join("_");

          if ("function" == typeof this[r]) return this[r](n);
          if (t.startsWith("bytesRate")) return this._gatherBytesRate(e, t, n);
          var i = n.shift();
          return i && i[t] || 0;
        },
        _statsCount: function _statsCount() {
          var e = this;
          dt.forIn(e.samplesDatas, function (t, n) {
            !function (t, n, r) {
              dt.forIn(r, function (r, i) {
                var o = n[i] || (n[i] = {});
                !function (t, n, r, i) {
                  dt.forIn(i, function (i, o) {
                    var a = n[o] = e._gather(r, o, i);

                    e._onGatherResult(t, r, o, a);
                  });
                }(t, o, i, r);
              });
            }(n, e.gatherResults[n] = e.gatherResults[n] || {}, t);
          });
        },
        gather: function gather() {
          this.gatherWebrtc(), this._statsCount();
        },
        intervalGather: function intervalGather(e) {
          this._intervalId && clearInterval(this._intervalId), this._intervalId = setInterval(this.gather.bind(this), e || 1e3);
        },
        stopIntervalGather: function stopIntervalGather() {
          this._intervalId && clearInterval(this._intervalId);
        }
      }),
          pt = {},
          ht = lt.echo = function (e) {
        e.forEach(function (e, t) {
          var n;
          !pt[e.id] && e._webrtc && !e._webrtc.closed && e.getMediaStream() ? (pt[e.id] = n = new lt({
            _webrtc: e._webrtc
          }), n._mediaStream = e.getMediaStream()) : !pt[e.id] || e._webrtc && !e._webrtc.closed && e.getMediaStream() || ct(pt, e.id);
        });
        var t = [];
        dt.forIn(function (n, r) {
          e && e[r] ? (n.gatherWebrtcMediaStream(n._mediaStream), n._statsCount()) : t.push(r);
        }), t.forEach(function (e, t) {
          ct(pt, e);
        });
      };

      lt.intervalEcho = function (e, t) {
        return setInterval(function () {
          return ht(e);
        }, t);
      }, ["inbound", "outbound"].forEach(function (e, t) {
        ["Audio", "Video"].forEach(function (t, n) {
          !function (e, t) {
            var _n15;

            lt[e + t] = _n15 = function n(r, i, o) {
              var a;
              _n15.__intervalIds || (_n15.__intervalIds = {}), a = this instanceof emedia.Service ? this : emedia.useCurrentXService;
              var s = r.id + "___" + a.namespace,
                  c = _n15.__intervalIds && _n15.__intervalIds[s];
              return c && clearInterval(c), c = setInterval(function () {
                var o,
                    u = _n15[s];
                !u && r && r._webrtc && !r._webrtc.closed && r.getMediaStream() ? (_n15[s] = u = new lt({
                  _webrtc: r._webrtc,
                  _inbound_: "inbound" === e,
                  _outbound_: "outbound" === e
                }), u._service = a, i && (u.onGatherResult = i), u._mediaStream = r.getMediaStream()) : !u || r && r._webrtc && !r._webrtc.closed && r._webrtc.__id === u._webrtc.__id && r.getMediaStream() && u._mediaStream && u._mediaStream.id === r.getMediaStream().id || (ct(_n15, s), u = null), u ? (u.gatherWebrtcMediaStream(u._mediaStream, t), u._statsCount()) : r && a && (o = a.getStreamById(r.id)) ? r = o : c && clearInterval(c);
              }, o), _n15.__intervalIds[s] = c, c;
            };
          }(e, t);
        });
      });
      var vt = lt;

      function mt(e) {
        e.getAudioTracks().forEach(function (t) {
          t.stop(), $e.info("Media stream stop audio track. stream =", e.id, "track =", t.id, t.kind);
        });
      }

      function gt(e) {
        e.getAudioTracks().forEach(function (t) {
          t.stop(), removeTrack(t), $e.info("Media stream stop and remove audio tracks. stream =", e.id, "track =", t.id, t.kind);
        });
      }

      function _t(e) {
        try {
          if (!e || !1 === e.active) return void $e.debug("stream tracks had been stoped. it ", e && e.id);
          e.getTracks().forEach(function (t) {
            t.stop(), $e.info("Media stream stop track. stream =", e.id, " track =", t.id, t.kind);
          }), e._bindAttendee && (ct(e._bindAttendee._openedRtcMediaStreams, e.id), e._bindAttendee = null), $e.info("stream tracks stoped. it ", e.id);
        } catch (e) {
          $e.error(e);
        }
      }

      function yt(e, t) {
        null == e || e.getVideoTracks().forEach(function (n) {
          if ("function" == typeof n.enable) return n.enable(), $e.info("Media stream enable video track. stream =", e.id, "track =", n.kind, n.enabled, n.id), void (n.enabled === t || n.enable(t));
          n.enabled === t || (n.enabled = t);
        });
      }

      function bt(e, t) {
        null == e || e.getAudioTracks().forEach(function (n) {
          if ("function" == typeof n.enable) return n.enable(), $e.info("Media stream enable audio track. stream =", e.id, "track =", n.kind, n.enabled, n.id), void (n.enabled === t || n.enable(t));
          n.enabled === t || (n.enabled = t);
        });
      }

      function St(e) {
        if (!e || "function" != typeof e.getAudioTracks) return !1;
        if (!e.active) return !1;
        var t = e.getAudioTracks();
        if (0 === t.length) return !1;

        for (var n in t) {
          if ("function" == typeof t[n].enable && t[n].enable(), t[n].enabled) return !0;
        }

        return !1;
      }

      function Ct() {
        var e = function () {
          if (emedia._logContext && emedia._logContext instanceof Array && !(void 0 === emedia._logContextIndex || emedia._logContextIndex < 0)) {
            var e = 0,
                t = emedia._logContextIndex;
            emedia._logContextIndex >= emedia._logContext.length && (e = emedia._logContextIndex - emedia._logContext.length + 1);

            for (var n = "", r = e; r <= t; r++) {
              var i = r % emedia._logContext.length;
              n += emedia._logContext[i].join("\r\n") + "\r\n";
            }

            return emedia._logContext.loadlogs && emedia._logContext.loadlogs instanceof Array && (n += "-------------------------------------------------------------\r\n", n += emedia._logContext.loadlogs.join("\r\n") + "\r\n"), n;
          }
        }();

        if (e) {
          var t = encodeURIComponent(e),
              n = document.createElement("a");
          n.style.display = "none", n.download = "emedia-" + new Date().toJSON() + ".log", n.href = "data:text/plain;charset=utf-8," + t, document.body.appendChild(n), n.click(), n.parentNode.removeChild(n);
        }
      }

      var wt = n(3029),
          kt = n.n(wt),
          xt = n(3497),
          It = n.n(xt),
          Rt = n(200),
          Tt = n(4255);

      function Et(e, t) {
        return (Et = Tt || function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }

      function Mt(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Rt(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Et(e, t);
      }

      function Pt(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }

      function At(e, t) {
        return !t || "object" !== g(t) && "function" != typeof t ? Pt(e) : t;
      }

      var Ot = n(4100);

      function jt(e) {
        return (jt = Tt ? Ot : function (e) {
          return e.__proto__ || Ot(e);
        })(e);
      }

      function Dt(e) {
        var t = function () {
          if ("undefined" == typeof Reflect || !It()) return !1;
          if (It().sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Boolean.prototype.valueOf.call(It()(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }();

        return function () {
          var n,
              r = jt(e);

          if (t) {
            var i = jt(this).constructor;
            n = It()(r, arguments, i);
          } else n = r.apply(this, arguments);

          return At(this, n);
        };
      }

      var Lt = function () {
        function e(t) {
          s(this, e), f(this, "msg", ""), this.day = new Date(), this.registerProps(t);
        }

        return d(e, [{
          key: "registerProps",
          value: function value(e) {
            for (var t in e) {
              this[t] = e[t];
            }
          }
        }, {
          key: "execTime",
          value: function value() {
            var e = this.day.getHours();
            e < 10 && (e = "0" + e);
            var t = this.day.getMinutes();
            t < 10 && (t = "0" + t);
            var n = this.day.getSeconds();
            return n < 10 && (n = "0" + n), e + ":" + t + ":" + n;
          }
        }]), e;
      }(),
          Ft = function (e) {
        Mt(n, e);
        var t = Dt(n);

        function n() {
          return s(this, n), t.apply(this, arguments);
        }

        return d(n, [{
          key: "_webrtcDesc",
          value: function value() {
            return this.webrtc, this.webrtc.getRtcId();
          }
        }]), n;
      }(Lt);

      var Wt = {
        __ICEEvent: Ft,
        NetworkChanaged: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " : Network chanage (" + this.preIp + " -> " + this.nowIp + ").";
            }
          }]), n;
        }(Lt),
        WSClose: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              var e = this.execTime() + " WSClose: Websocket close (" + (this.retry || 0) + ").";
              return this.online || (e += " offline."), this.event && (e += " wscode: " + this.event.code), this.cause && (e += " cause: " + this.cause.message), this.url && (e += " url: " + this.url), e += " retry: " + (this.retry || 0), this.session && this.session.getSessionId() && (e = e + ", sess = " + this.session.getSessionId()), e;
            }
          }]), n;
        }(Lt),
        WSError: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              var e = this.execTime() + " WSError: Websocket error. ready state:" + (this.event.srcElement && this.event.srcElement.readyState || this.event.currentTarget.readyState) + ". online = " + this.online;
              return this.session && this.session.getSessionId() && (e = e + ", sess = " + this.session.getSessionId()), this.url && (e += " url: " + this.url), e;
            }
          }]), n;
        }(Lt),
        WSConnected: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              var e = this.execTime() + " WSConnected: Websocket success. ready state:" + (this.event.srcElement && this.event.srcElement.readyState || this.event.currentTarget.readyState);
              return this.session && this.session.getSessionId() && (e = e + ", sess = " + this.session.getSessionId()), e;
            }
          }]), n;
        }(Lt),
        ICEChanage: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " ICEChanage: " + this._webrtcDesc() + " state: " + this.state;
            }
          }]), n;
        }(Ft),
        AddIceCandError: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " AddIceCandError: " + this._webrtcDesc() + ", add cand error";
            }
          }]), n;
        }(Ft),
        ICEConnectFail: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " ICEConnectFail: " + this._webrtcDesc() + " failed";
            }
          }]), n;
        }(Ft),
        ICEConnected: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " ICEConnected: " + this._webrtcDesc() + " connected";
            }
          }]), n;
        }(Ft),
        ICEDisconnected: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " ICEDisconnected: " + this._webrtcDesc() + " disconnected";
            }
          }]), n;
        }(Ft),
        ICEClosed: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " ICEClosed: " + this._webrtcDesc() + " closed";
            }
          }]), n;
        }(Ft),
        ICERemoteMediaStream: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " ICERemoteMediaStream: " + this._webrtcDesc() + " got remote stream";
            }
          }]), n;
        }(Ft),
        StreamState: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " StreamState:  stream " + this.stream.id + " state: " + this.state + " " + this.msg;
            }
          }, {
            key: "iceFail",
            value: function value() {
              this.state = 1, this.msg = "network anomaly. media lost";
            }
          }]), n;
        }(Lt),
        OpenMediaError: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " OpenMediaError:  open media error. caused by " + (this.event.name ? this.event.name : this.event.message ? this.event.message : this.event.toString());
            }
          }]), n;
        }(Lt),
        Hangup: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.self ? "hangup id = " + (this.self.id || "--") + " reason：" + (this.reason || 0) : this.execTime() + " Hangup: " + (this.parnter && (this.parnter.name || this.parnter.id || " ") || "") + " hangup, reason：" + (this.reason || 0);
            }
          }]), n;
        }(Lt),
        ServerRefuseEnter: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " ServerRefuseEnter: server refuse, cause：" + this.failed + ", msg:" + (this.msg || "");
            }
          }]), n;
        }(Lt),
        RspFail: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n(e) {
            var r;
            return s(this, n), (r = t.call(this, e)).day = new Date(), r.failed = r.response.result, r.msg = r.response.msg || r.response.message || "--", r;
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " RspFail: " + this.request.tsxId + ", " + (this.response.sessId || "--") + " op: " + this.request.op + ", cause: " + this.failed + " " + this.msg;
            }
          }]), n;
        }(Lt),
        RecvResponse: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n(e) {
            var r;
            return s(this, n), (r = t.call(this, e)).day = new Date(), r.failed = r.response.result, r.msg = r.response.msg, r;
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.request ? this.execTime() + " RecvResponse: " + (this.request && this.request.tsxId) + ", " + (this.response.sessId || "--") + " op: " + (this.request && this.request.op) + ", cause: " + this.failed + " " + this.msg : this.execTime() + " RecvMessage: " + (this.response && this.response.tsxId) + ", " + (this.response.sessId || "--") + " op: " + (this.response && this.response.op) + " " + this.msg;
            }
          }]), n;
        }(Lt),
        EnterFail: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " EnterFail: enter fail：" + (this.cause ? this.cause.message() : "unkown");
            }
          }]), n;
        }(Lt),
        EnterSuccess: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " EnterSuccess: enter success " + (this.ip ? ", ip = " + this.ip : "");
            }
          }]), n;
        }(Lt),
        PushSuccess: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " PushSuccess: push success, streamId = " + this.stream.id + ", " + this.stream.optimalVideoCodecs + ", webrtc = " + this.stream.rtcId;
            }
          }]), n;
        }(Lt),
        PushFail: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " PushFail: push fail, streamId = " + this.stream.id + ", " + this.stream.optimalVideoCodecs + ", webrtc = " + this.stream.rtcId + " cause：" + (this.cause ? this.cause.message ? this.cause.message() : this.cause : "unkown");
            }
          }]), n;
        }(Lt),
        RemoteControlFail: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " RemoteControlFail: " + (this.type || "remote control") + " fail, " + (this.stream ? this.stream.id : "") + " failed = " + this.failed + " cause：" + (this.cause ? this.cause.message ? this.cause.message() : this.cause : "unkown");
            }
          }]), n;
        }(Lt),
        SubSuccess: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " SubSuccess: sub success, streamId = " + this.stream.id + ", " + this.stream.vcodes + ", webrtc = " + this.stream.rtcId;
            }
          }]), n;
        }(Lt),
        SubFail: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " SubFail: sub fail, streamId = " + this.stream.id + ", " + this.stream.vcodes + ", webrtc = " + this.stream.rtcId + " cause：" + (this.cause ? this.cause.message ? this.cause.message() : this.cause : "unkown");
            }
          }]), n;
        }(Lt),
        SubFailNotSupportVCodes: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " SubFailNotSupportVCodes: sub fail, streamId = " + this.stream.id + " cause：" + (this.cause ? this.cause.message ? this.cause.message() : this.cause : "unkown");
            }
          }]), n;
        }(Lt),
        SubFailSafariNotAllowSubBeforePub: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " SubFailSafariNotAllowSubBeforePub: sub fail, streamId = " + this.stream.id + " cause：Safari without access to capture devices, WebKit only exposes Server Reflexive and TURN ICE candidates, which expose IPs that could already be gathered by websites.";
            }
          }]), n;
        }(Lt),
        SwitchVCodes: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " SwitchVCodes: pub streamId = " + this.stream.id;
            }
          }]), n;
        }(Lt),
        CurrentCalling: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " CurrentCalling: warn! current calling...";
            }
          }]), n;
        }(Lt),
        OpenDesktopMedia: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " OpenDesktopMedia: shared desktop, desktopStreamId = " + desktopStreamId;
            }
          }]), n;
        }(Lt),
        OpenDesktopMediaAccessDenied: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " OpenDesktopMediaAccessDenied: shared desktop not allow";
            }
          }]), n;
        }(Lt),
        OtherDeviceAnswer: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " other device answer, webrtc = " + this.rtcId;
            }
          }]), n;
        }(Lt),
        AudioMixerStreamNotAllowSub: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " audio mixer stream not allow sub, webrtc = " + this.rtcId + ", streamId = " + this.stream.id;
            }
          }]), n;
        }(Lt),
        AudioMixerStreamNotAllowOnlySubVideo: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " audio mixer stream not allow only sub video, webrtc = " + this.rtcId + ", streamId = " + this.stream.id;
            }
          }]), n;
        }(Lt),
        AudioMixerStreamRepeatPublish: function (e) {
          Mt(n, e);
          var t = Dt(n);

          function n() {
            return s(this, n), t.apply(this, arguments);
          }

          return d(n, [{
            key: "message",
            value: function value() {
              return this.execTime() + " audio mixer stream repeat publish";
            }
          }]), n;
        }(Lt)
      };

      var Nt = n(7750),
          Vt = Je("Session"),
          Ut = 0,
          Bt = function () {
        function e() {
          s(this, e);
        }

        return d(e, [{
          key: "setSessId",
          value: function value(e) {
            return e && (this.sessId = e), this;
          }
        }, {
          key: "setOp",
          value: function value(e) {
            return e && (this.op = e), 200 === e && (this.res = {
              type: emedia.config.clientType,
              ver: window._emediaVersion || emedia.config.version,
              agent: navigator.userAgent,
              ops: emedia.config.acptOps
            }), this;
          }
        }, {
          key: "setTsxId",
          value: function value(e) {
            return e && (this.tsxId = e), this;
          }
        }, {
          key: "setTicket",
          value: function value(e) {
            return e && (this.tkt = e), this;
          }
        }, {
          key: "setSdp",
          value: function value(e) {
            return e && (this.sdp = e), this;
          }
        }, {
          key: "setCands",
          value: function value(e) {
            return e && (this.cands = e), this;
          }
        }, {
          key: "setSubSId",
          value: function value(e) {
            return e && (this.subSId = e), this;
          }
        }, {
          key: "setMemId",
          value: function value(e) {
            return e && (this.memId = e), this;
          }
        }, {
          key: "setPubS",
          value: function value(e) {
            e && (this.pubS = p()({}, e));
            var t = this.pubS;
            return t.ext && Nt.isPlainObject(t.ext) && (t.ext = Ne()(t.ext)), t && ut(t, function (e, n) {
              (Nt.isPlainObject(n) || "function" == typeof n) && ct(t, e);
            }), t && ct(t, "localStream"), t && ct(t, "_localMediaStream"), t && ct(t, "_webrtc"), this;
          }
        }, {
          key: "setRtcId",
          value: function value(e) {
            return e && (this.rtcId = e), this;
          }
        }, {
          key: "setCver",
          value: function value(e) {
            return e && (this.cver = e), this;
          }
        }, {
          key: "setEndReason",
          value: function value(e) {
            return e && (this.endReason = e), this;
          }
        }, {
          key: "setNickName",
          value: function value(e) {
            return e && (this.nickName = e), this;
          }
        }, {
          key: "setResource",
          value: function value(e) {
            return e && (this.resource = e), this;
          }
        }, {
          key: "setReason",
          value: function value(e) {
            return e && (this.reason = e), this;
          }
        }, {
          key: "setConfrId",
          value: function value(e) {
            return e && (this.confrId = e), this;
          }
        }, {
          key: "setVoff",
          value: function value(e) {
            return void 0 === e || (this.voff = e ? 1 : 0), this;
          }
        }, {
          key: "setAoff",
          value: function value(e) {
            return void 0 === e || (this.aoff = e ? 1 : 0), this;
          }
        }, {
          key: "setFlag",
          value: function value(e) {
            return 0 === e && (this.flag = 0), 1 === e && (this.flag = 1), this;
          }
        }, {
          key: "setExt",
          value: function value(e) {
            return e && Nt.isPlainObject(e) && (e = Ne()(e)), e && (this.ext = e), this;
          }
        }]), e;
      }();

      function qt(e, t, n) {
        var r = this;

        function i(e, i) {
          try {
            r.onWebsocketEvent(new Wt.WSClose({
              url: r.thisWsUri,
              retry: n,
              online: r.online,
              cause: e,
              event: i,
              session: r
            }));
          } finally {
            t && t(new Wt.WSClose({
              url: r.thisWsUri,
              retry: n,
              online: r.online,
              cause: e,
              event: i,
              session: r
            }));
          }
        }

        function o(e) {
          if (r.connected(r.thisWsUri)) {
            if (Nt.isPlainObject(e) && !(e instanceof Bt)) throw Vt.error("message not a Messages"), "message not a Messages";
            if (r.sessId && e.sessId != r.sessId) Vt.warn("self.sessId && message.sessId != self.sessId", e);else {
              var t = Ne()(e);
              r.thisWsUri === r._websocket.url && r._websocket.send(t), r.thisWsUri === r._websocket.url && Vt.debug("Done send req:", t, r._websocket.url), r.thisWsUri === r._websocket.url || Vt.debug("Donot send(url not equal): req:", t, r._websocket.url);
            }
          } else Vt.debug("current dont connect. the message = ", e);
        }

        if (r.connected(r.thisWsUri)) return e && e(r), Vt.info("Session connected. dont continue connect"), void (r.notifyNewMessage && r.notifyNewMessage());

        if (r.online) {
          r.notifyNewMessage = function () {
            if (r.connected(r.thisWsUri)) {
              if (0 === r._bufferedMessages.length) return;

              for (var e, t = []; e = r._bufferedMessages.shift();) {
                if (e.sessId || r.sessId || 200 == e.op) {
                  if (200 === e.op) {
                    o(e);
                    break;
                  }

                  r.sessId && !e.sessId && (e.sessId = r.sessId);
                  var i = o(e);
                  i && t.push(i);
                } else t.push(e), Vt.warn("tmp store message, util enter success!", e);
              }

              t.length > 0 && Array.prototype.push.apply(r._bufferedMessages, t);
            } else if (0 !== n && r.online) r.connected();else {
              var a = p()({}, r._callbacks),
                  s = [];

              for (var c in a) {
                var u = a[c];
                n > 0 && !r.online ? s.push(u) : r.onMessage({
                  op: 1001,
                  tsxId: c,
                  result: -9527,
                  msg: "sdk rsp fail. retry fail or online = " + r.online
                });
              }

              r._bufferedMessages = r._bufferedMessages || [], s.length > 0 && Array.prototype.push.apply(r._bufferedMessages, s);
            }
          }, Vt.info("Session begin connect.");
          var a = r._websocket;
          a && (Vt.warn("will close. websocket state", a.readyState, a.url, r.thisWsUri), a.close(1e3));

          try {
            Vt.info("Connecting", r.thisWsUri, n), a = r._websocket = new WebSocket(r.thisWsUri);
          } catch (e) {
            return Vt.warn(e), void i(e);
          }

          a.onopen = function (n) {
            var i = this.url;
            if (i === r.thisWsUri) try {
              Vt.info("websocket connected:", i), t && (t = null), e && e(r), r.onWebsocketEvent(new Wt.WSConnected({
                event: n,
                session: r
              }));
            } finally {} else Vt.warn("ignore the onopen. caused by websocket url not ", r.thisWsUri, i);
          }, a.onmessage = function (e) {
            var t = this.url;

            if (t === r.thisWsUri) {
              Vt.debug("recv data", e.data);
              var n = JSON.parse(e.data);
              n && 1001 == n.op && Vt.debug("recv message: rsp:", n), n && 1001 != n.op && Vt.debug("recv message: evt:", n), r.onMessage(n);
            } else Vt.warn("ignore recv data. caused by websocket url not ", r.thisWsUri, t, e.data);
          }, a.onclose = function (e) {
            var t = this.url;
            Vt.info("Disconnected:", t, r.thisWsUri, e), t === r.thisWsUri ? (r.notifyNewMessage(), 1e3 !== e.code && i(void 0, e)) : Vt.warn("ignore onclose. caused by websocket url not ", r.thisWsUri, t);
          }, a.onerror = function (e) {
            Vt.info("On error:", e), r.onWebsocketEvent(new Wt.WSError({
              event: e,
              online: r.online,
              session: r,
              url: this.url
            }));
          };
        } else i();
      }

      var Gt = function () {
        function e(t) {
          s(this, e), f(this, "_events", {
            0: "onReqP2P",
            1: "onNewCfr",
            2: "onDelCfr",
            3: "onReqTkt",
            100: "onPing",
            101: "onPong",
            102: "onInitC",
            103: "onReqC",
            104: "onAcptC",
            105: "onTcklC",
            106: "onAnsC",
            107: "onTermC",
            300: "onEnter",
            301: "onExit",
            302: "onPub",
            303: "onUnpub",
            304: "onMems",
            204: "onClose",
            400: "onStreamControl",
            401: "onJoin",
            412: "onRoleUpdate",
            1002: "onRemoteControl",
            1003: "onRecvRemoteMessage"
          });
          var n = this;
          n._bufferedMessages = [], n._callbacks = {}, navigator.onLine ? n.online = !0 : n.online = !1, window.addEventListener("online", function (e) {
            n.online = !0, Vt.warn("online online online"), n.closed || n._reconnect(emedia.config.reconnect);
          }, !0), window.addEventListener("offline", function (e) {
            n.online = !1, Vt.warn("offline offline offline"), n.__checkConnectIntervalId && clearTimeout(n.__checkConnectIntervalId), n.__retryConnectIntervalId && clearTimeout(n.__retryConnectIntervalId), n.__retryConnectIntervalId && delete n.__retryConnectIntervalId, n._websocket && n._websocket.close(1e3);
          }, !0), Vt.info("online status = ", n.online), this.registerProps(t);
        }

        return d(e, [{
          key: "registerProps",
          value: function value(e) {
            for (var t in e) {
              this[t] = e[t];
            }
          }
        }, {
          key: "_nextWsUri",
          value: function value() {
            var e = this.ticket.url,
                t = emedia.config && emedia.config.convertWebsocketURLOfTicket || emedia.convertWebsocketURLOfTicket;

            if ("function" == typeof t) {
              var n = e;
              e = t(e), Vt.warn(n, "--\x3e", e);
            }

            if (e.startsWith("/")) {
              if (emedia.config.wsorigin) e = emedia.config.wsorigin + e;else {
                var r = window.location.href,
                    i = r.startsWith("https") ? "wss://" : "ws://",
                    o = r.indexOf("://") + 3,
                    a = r.indexOf("/", o);
                e = i + r.substring(o, a) + e;
              }
              Vt.warn("websocket url. update. {} -> {}", this.ticket.url, e);
            } else emedia.config.wsorigin && Vt.warn("emedia.config.wsorigin invalidate. causeby server url {}", e);

            return e.indexOf("?") >= 0 ? e += "&" + Ut++ : e += "?" + Ut++, e;
          }
        }, {
          key: "_reconnect",
          value: function value(e) {
            var t = this;

            function n() {
              Vt.warn("Reconnected. at ", e, t._websocket.url), t.__retryConnectIntervalId && clearTimeout(t.__retryConnectIntervalId), t.__retryConnectIntervalId && delete t.__retryConnectIntervalId;
              var n = t.newMessage().setOp(200).setSessId(t._sessionId).setTicket(t.ticket).setNickName(t.nickName || t.ticket.memName).setResource(t.resource).setExt(t.owner.ext);
              t.postMessage(n, function (e) {
                if (0 == e.result) t.onEvent(new Wt.EnterSuccess({
                  ip: t.owner.ip
                })), t.owner.onMembers(e.cver, e.mems), t.owner.onStreams(e.cver, e.streams), t.notifyNewMessage();else try {
                  t.onEvent(new Wt.EnterFail({
                    me: t.owner,
                    cause: new Wt.RspFail({
                      request: n,
                      response: e
                    })
                  }));
                } finally {
                  -9527 !== e.result && t.onEvent(new Wt.ServerRefuseEnter({
                    failed: e.result,
                    msg: e.msg
                  }));
                }
              });
            }

            t.connect(n, function r(i) {
              if (e <= 0) return Vt.warn("Reconnect end. but fail.", i.url, e), void (t.__retryConnectIntervalId && delete t.__retryConnectIntervalId);
              e && (t.__retryConnectIntervalId = setTimeout(function () {
                t.connect(n, r, --e);
              }, emedia.config.reconnectDelay));
            }, --e);
          }
        }, {
          key: "__checkConnect",
          value: function value() {
            var e = this;
            e.__checkConnectIntervalId && clearTimeout(e.__checkConnectIntervalId), emedia.config.checkConnectIntervalMillis && (e.__checkConnectIntervalId = setTimeout(function () {
              try {
                e.online && !e.connected() && (e.__retryConnectIntervalId && Vt.debug("online, reconnecting..."), e.__retryConnectIntervalId || Vt.debug("online, but disconnect. will reconnect"), e.__retryConnectIntervalId || e._reconnect(emedia.config.reconnect));
              } finally {
                e.__checkConnect();
              }
            }, emedia.config.checkConnectIntervalMillis));
          }
        }, {
          key: "connect",
          value: function value(e, t, n) {
            var r = this,
                i = r.thisWsUri = r._nextWsUri();

            void 0 !== n && Vt.warn("begin connect... at retry = ", n, i), qt.call(r, function () {
              try {
                e.apply(r, arguments);
              } finally {
                r.__checkConnect();
              }
            }, function (e) {
              try {
                t.apply(r, arguments);
              } finally {
                n || e.url !== i || r.onEvent(new Wt.ServerRefuseEnter({
                  failed: -95270,
                  msg: "sdk reconnect fail. " + i + "|" + e.url
                }));
              }
            }, n);
          }
        }, {
          key: "connected",
          value: function value(e) {
            var t = this;
            return t.online && t._websocket && (!e || e === t._websocket.url) && t._websocket.readyState == WebSocket.OPEN;
          }
        }, {
          key: "onWebsocketEvent",
          value: function value(e) {
            this.onEvent(e);
          }
        }, {
          key: "register",
          value: function value(e) {
            if ("object" === g(e)) for (var t in e) {
              this.bind(t, e[t]);
            }
          }
        }, {
          key: "bind",
          value: function value(e, t) {
            var n;
            if (!(n = this._events[e])) throw Vt.error("Not supported event = ", e), "Not supported event = " + e;
            this[n] = t;
          }
        }, {
          key: "getSessionId",
          value: function value() {
            return this._sessionId;
          }
        }, {
          key: "newMessage",
          value: function value(e) {
            return new Bt(e);
          }
        }, {
          key: "__modifyMessage",
          value: function value(e) {
            if (e && e.sdp && ("string" == typeof e.sdp && (e.sdp = JSON.parse(e.sdp)), e.sdp.type && (e.sdp.type = e.sdp.type.toLowerCase()), e.cctx && (e.sdp.cctx = e.cctx)), e && e.cands) {
              "string" == typeof e.cands && (e.cands = JSON.parse(e.cands));

              for (var t = 0; t < e.cands.length; t++) {
                "string" == typeof e.cands[t] && (e.cands[t] = JSON.parse(e.cands[t])), e.cands[t].sdpMLineIndex = e.cands[t].mlineindex, e.cands[t].sdpMid = e.cands[t].mid, delete e.cands[t].mlineindex, delete e.cands[t].mid, e.cctx && (e.cands[t].cctx = e.cctx);
              }
            }

            if (e && e.mems) {
              if (!Ye()(e.mems)) return;
              var n = e.mems;
              e.mems = {}, ut(n, function (t, n) {
                n.name && (n.memName = n.name), e.mems[n.id] = n;
                var r = n.acptOps = {};
                if (ut(emedia.config.baseAcptOps, function (e, t) {
                  r[t] = !0;
                }), n.res && ut(n.res.ops, function (e, t) {
                  r[t] = !0;
                }), n && n.ext) try {
                  e.mems[n.id].ext = JSON.parse(n.ext);
                } catch (e) {
                  Vt.debug(e);
                }
              });
            }

            if (e && e.mem) {
              e.mem.name && (e.mem.memName = e.mem.name);
              var r = e.mem.acptOps = {};
              if (ut(emedia.config.baseAcptOps, function (e, t) {
                r[t] = !0;
              }), e.mem.res && ut(e.mem.res.ops, function (e, t) {
                r[t] = !0;
              }), e.mem && e.mem.ext) try {
                e.mem.ext = JSON.parse(e.mem.ext);
              } catch (e) {
                Vt.debug(e);
              }
            }

            if (e && e.streams) {
              if (!Ye()(e.streams)) return;
              var i = e.streams;
              e.streams = {}, ut(i, function (t, n) {
                if (e.streams[n.id] = n, n && n.ext) try {
                  e.streams[n.id].ext = JSON.parse(n.ext);
                } catch (e) {
                  Vt.debug(e);
                }
              });
            }

            if (e && e.pubS && e.pubS && e.pubS.ext) try {
              e.pubS.ext = JSON.parse(e.pubS.ext);
            } catch (e) {
              Vt.debug(e);
            }
            if (e && e.ext) try {
              e.ext = JSON.parse(e.ext);
            } catch (e) {
              Vt.debug(e);
            }
            return e;
          }
        }, {
          key: "onMessage",
          value: function value(e) {
            var t = this;

            function n(e) {
              var n,
                  r = e.op;
              (n = t._events[r]) && (n = t[n]) ? n.call(t, e) : Vt.warn("Not supported event = ", e);
            }

            if (1001 != e.op && !e.sessId) throw Vt.error("message sessId error. server evt data error"), "message sessId error. server evt data error";
            if (1001 != e.op && t._sessionId && t._sessionId != e.sessId) throw Vt.error("message sessId error. server and local not equal"), "message sessId error. server and local not equal";

            if (1004 !== e.op) {
              var r;
              e = t.__modifyMessage(e);
              var i = ct(t._callbacks, e.tsxId);

              if (i && 200 === i.op) {
                t._sessionId = e.sessId;
                var o = "string" == typeof e.yourIp ? e.yourIp : void 0;

                if ("string" == typeof t._session_ip && o != t._session_ip && (r = t._session_ip), Vt.info(t._sessionId, "ip is", o, r), t._session_ip = o, t.owner.ip = o, 0 === e.result) {
                  for (var a in t._bufferedMessages) {
                    var s = t._bufferedMessages[a];
                    s.sessId || 200 === s.op || (s.sessId = e.sessId);
                  }

                  setTimeout(function () {
                    t.notifyNewMessage();
                  }, 100);
                } else for (var c; c = t._bufferedMessages.shift();) {
                  200 !== c.op && t.onMessage({
                    op: 1001,
                    tsxId: c.tsxId,
                    result: -9527,
                    msg: "sdk enter fail. sdk callback. enter result = " + e.result
                  });
                }
              }

              if (t.owner && t.owner.closed) Vt.warn("self closed. me is " + t.owner.getMemberId() + ", session_id = " + t.getSessionId() + ". drop message", e);else {
                if (t.onEvent(new Wt.RecvResponse({
                  request: i,
                  response: e
                })), i && i.__callback__ && 1004 !== e.op) return i.__callback__(e), void (r && t.onWebsocketEvent(new Wt.NetworkChanaged({
                  preIp: r,
                  nowIp: t._session_ip
                })));
                e.op && 1001 != e.op ? (n(e), r && t.onWebsocketEvent(new Wt.NetworkChanaged({
                  preIp: r,
                  nowIp: t._session_ip
                }))) : Vt.debug("Igron message. caused by op not found.", e);
              }
            } else n(e);
          }
        }, {
          key: "__modifyMessageForPost",
          value: function value(e) {
            if (e.cands) {
              for (var t = [], n = e.cands, r = 0; r < n.length; r++) {
                var i;
                0 == r && n[r].cctx && (e.cctx = n[r].cctx), i = "string" == typeof n[r] ? {
                  type: "candidate",
                  candidate: n[r],
                  mlineindex: 0,
                  mid: "audio"
                } : {
                  type: "candidate",
                  candidate: n[r].candidate,
                  mlineindex: n[r].sdpMLineIndex,
                  mid: n[r].sdpMid
                }, t.push(Ne()(i));
              }

              e.cands = t;
            }

            if (e.sdp && "string" != typeof e.sdp) {
              var o = {
                type: e.sdp.type,
                sdp: e.sdp.sdp
              };
              e.sdp.cctx && (e.cctx = e.sdp.cctx), e.sdp = o, e.sdp.type = e.sdp.type.toUpperCase(), e.sdp = Ne()(e.sdp);
            }

            return e.pubS && ct(e.pubS, "_located"), e.pubS && ct(e.pubS, "mutedMuted"), e.pubS && ct(e.pubS, "mediaStream"), e.pubS && ct(e.pubS, "isRepublished"), e.pubS && ct(e.pubS, "optimalVideoCodecs"), "function" == typeof e.post && ct(e, "post"), e;
          }
        }, {
          key: "postMessage",
          value: function value(e, t, n) {
            var r = this,
                i = emedia.__session_globalCount = 0;

            if (e.tsxId || (e.tsxId = "MSG" + kt()() + "-" + i++), e.memId) {
              var o = r.owner._cacheMembers[e.memId];
              if (!o) return Vt.warn("Member not found at local. memberId = " + e.memId, e), void (t && t({
                op: 1001,
                tsxId: e.tsxId,
                result: -507,
                msg: " member not found at local. memberId = " + e.memId
              }));
              var a = e._reqOps;

              for (var s in a || (a = []).push(e.op), a) {
                var c = a[s];
                if (!o.acptOps[c]) return Vt.warn("Member not accept op " + c + ", " + e.memId, e), void (t && t({
                  op: 1001,
                  tsxId: e.tsxId,
                  result: -507,
                  msg: " member not accept op " + c + ", " + e.memId
                }));
              }
            }

            if (ct(e, "_reqOps"), r._sessionId && r._sessionId != e.sessId) return Vt.warn("sessionId not excepted. self._sessionId = " + r._sessionId, e), void (t && t({
              op: 1001,
              tsxId: e.tsxId,
              result: -9527,
              msg: "sessionId not excepted."
            }));
            if (r.closed) return Vt.warn("session closed.", e), void (t && t({
              op: 1001,
              tsxId: e.tsxId,
              result: -9527,
              msg: "session closed"
            }));
            var u = p()({}, e);
            if (!(e = r.__modifyMessageForPost(e))) return Vt.warn("Message drop. callback success.", e), void (t && t({
              op: 1001,
              tsxId: u.tsxId,
              result: 0,
              msg: "Message drop. callback success."
            }));
            200 === e.op ? (r._bufferedMessages.unshift(e), t && setTimeout(function () {
              r._callbacks[e.tsxId] && (Vt.error("Enter timeout. fail."), r.onMessage({
                op: 1001,
                tsxId: e.tsxId,
                result: -9527,
                msg: "enter timeout. millis = " + emedia.config.enterTimeout
              }));
            }, emedia.config.enterTimeout)) : r._bufferedMessages.push(e), t && (r._callbacks[e.tsxId] = p()(e, {
              __callback__: t.bind(r.owner)
            })), r.notifyNewMessage && r.notifyNewMessage(), n && t && setTimeout(function () {
              var e = r._callbacks[e.tsxId];
              e && e.__callback__ && e.__callback__({
                op: 1001,
                tsxId: u.tsxId,
                result: -408,
                msg: "Message request timeout."
              }), ct(r._callbacks, e.tsxId);
            }, n);
          }
        }, {
          key: "close",
          value: function value(e) {
            Vt.warn("sessiong closing, reason = ", e);
            var t = this;
            t.notifyNewMessage && t.notifyNewMessage(), t.closed = !0, t.seqno = 0, t._websocket && (0 == e || 100 == e ? t._websocket.close(1e3) : t._websocket.close()), t.__retryConnectIntervalId && clearTimeout(t.__retryConnectIntervalId), t.__retryConnectIntervalId && delete t.__retryConnectIntervalId, t.__checkConnectIntervalId && clearTimeout(t.__checkConnectIntervalId), t.__checkConnectIntervalId && delete t.__checkConnectIntervalId, t.owner = null, t._bufferedMessages = [], t._callbacks = {}, Vt.warn("session closed");
          }
        }]), e;
      }();

      function zt(e) {
        this.context = e, this.instant = 0, this.slow = 0, this.clip = 0, this.script = e.createScriptProcessor(2048, 1, 1);
        var t = this;

        this.script.onaudioprocess = function (e) {
          var n,
              r = e.inputBuffer.getChannelData(0),
              i = 0,
              o = 0;

          for (n = 0; n < r.length; ++n) {
            i += r[n] * r[n], Math.abs(r[n]) > .99 && (o += 1);
          }

          t.instant = Math.sqrt(i / r.length), t.slow = .95 * t.slow + .05 * t.instant, t.clip = o / r.length;
        };
      }

      zt.prototype.connectToSource = function (e, t) {
        console.log("SoundMeter connecting");

        try {
          this.mic = this.context.createMediaStreamSource(e), this.mic.connect(this.script), this.script.connect(this.context.destination), void 0 !== t && t(null);
        } catch (e) {
          console.error(e), void 0 !== t && t(e);
        }
      }, zt.prototype.stop = function () {
        this.mic.disconnect(), this.script.disconnect();
      };
      var Ht = zt;
      var Jt = n(7750);

      emedia.subscribed = function (e) {
        return !(!e._located && (2 === e.type ? e._located || !e._webrtc : void 0 === e._webrtc));
      };

      var $t = function () {
        function e(t) {
          var n = this;
          s(this, e), f(this, "voff", 0), f(this, "aoff", 0);
          var r = t.__audioContext,
              i = t._mediaStream;
          if (this.__audioContext = r, this._mediaStream = i, !this._mediaStream) throw _logger.error("_mediaStream empty"), "_mediaStream empty";

          if (this.hasEnabledTracks(this._mediaStream)) {
            if (!this.__audioContext) throw _logger.error("require audioContext"), "require audioContext";
            this.__soundMeter = new Ht(this.__audioContext), this.__soundMeter.connectToSource(this._mediaStream, function (e) {
              if (e) throw e;
              n.__worked = n.__soundMeter.__worked = !0;
            });
          }
        }

        return d(e, [{
          key: "hasEnabledTracks",
          value: function value(e) {
            return emedia.hasEnabledTracks(e);
          }
        }, {
          key: "getSoundMeters",
          value: function value() {
            if (this.__soundMeter && this.__worked) if (this._mediaStream.active) {
              if (this.hasEnabledTracks(this._mediaStream)) return {
                instant: this.__soundMeter.instant,
                slow: this.__soundMeter.slow,
                clip: this.__soundMeter.clip
              };
            } else this.__worked && this._finally();
          }
        }, {
          key: "_finally",
          value: function value() {
            this.__soundMeter && (this.__soundMeter.stop(), this.__worked = this.__soundMeter.__worked = !1);
          }
        }]), e;
      }(),
          Kt = Qe.prototypeExtend({
        __undefinedEQDelete: !0,
        located: function located() {
          return this._located || !1;
        },
        webrtc: function webrtc(e) {
          return e && (this._webrtc = e), this;
        },
        getMediaStream: function getMediaStream() {
          return void 0 !== this.mediaStream ? this.mediaStream : this._located ? this._localMediaStream : this._webrtc && (this._webrtc.getRemoteStream() || this._webrtc.getLocalStream());
        },
        requestFrame: function requestFrame() {
          this._localMediaStream && this._localMediaStream.getVideoTracks().forEach(function (e) {
            "function" == typeof e.requestFrame && e.requestFrame();
          });
        },
        getLocalMediaStream: function getLocalMediaStream() {
          return this._localMediaStream;
        },
        getRemoteMediaStream: function getRemoteMediaStream() {
          if (this._webrtc && void 0 !== this._webrtc.getRemoteStream()) return this._webrtc.getRemoteStream();
        },
        mutedNeed: function mutedNeed() {
          return this.mutedMuted || !1;
        },
        ifMediaStream: function ifMediaStream(e) {
          void 0 === this.mediaStream ? this._located && void 0 !== this._localMediaStream ? e(this._localMediaStream) : this._located || !this._webrtc || void 0 === this._webrtc.getRemoteStream() || e(this._webrtc.getRemoteStream()) : e(this.mediaStream);
        },
        subscribed: function subscribed() {
          return emedia.subscribed(this);
        },
        updateAttributes: function updateAttributes() {
          for (var e = this, t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (Jt.isPlainObject(n)) for (var r in n) {
              var i = n[r];
              e[r] = i;
            }
          }
        },
        getHtmlDOMID: function getHtmlDOMID() {
          return "_m_" + this.owner.id + "_s_" + this.id;
        },
        MediaSoundMeter: $t,
        StreamSoundMeter: Qe.prototypeExtend({
          __init__: function __init__() {
            var e = this;
            if (!e._stream || "function" != typeof e._stream.getMediaStream) throw _logger.error("_stream empty or not found method getMediaStream"), "_stream empty or not found method getMediaStream";
            if (e._streamId = e._stream.id, e._streamCreateId = e._stream.__create_id, e._mediaStream = e._mediaStream, 2 === e._stream.type && !e._stream.located() && !e._webrtc) throw _logger.error("require webrtc. when type = 2 and not located"), "require webrtc. when type = 2 and not located";
            e.__mediaSoundMeter = e.__mediaSoundMeter || new $t({
              __audioContext: e.__audioContext,
              _mediaStream: e._mediaStream
            }), e.__mediaSoundMeter.useCount = (e.__mediaSoundMeter.useCount || 0) + 1;
          },
          onSoundMeters: function onSoundMeters(e) {
            var t = this,
                n = {
              instant: 0,
              slow: 0,
              clip: 0
            };
            if (t._stream.aoff) return t._finally(), e(n), n;
            if (2 !== t._stream.type && t._stream.subArgs && void 0 !== t._stream.subArgs.subSAudio && !t._stream.subArgs.subSAudio) return t._finally(), e(n), n;

            if (0 == t._stream.id || 2 === t._stream.type && !t._stream.located() && (!t._stream.subArgs || !t._stream.subArgs.subSAudio)) {
              var r,
                  i = t._webrtc.getReceiversOfPeerConnection();

              if (!i || 0 === i.length) return e(n), n;

              for (var o in i) {
                "audio" === i[o].track.kind && (r = i[o]);
              }

              if (!r) return e(n), n;

              if ("function" == typeof r.getContributingSources) {
                var a,
                    s = r.getContributingSources();
                if (emedia.config._printSoundData && $e.debug(t._stream.id, t._stream.csrc, "rtpContributingSources ", s), !s || 0 === s.length) return e(n), n;

                for (var o in s) {
                  s[o].source == t._stream.csrc && (a = t._stream.csrc);
                }

                if (emedia.config._printSoundData && $e.debug(t._stream.id, t._stream.csrc, "source ", a), void 0 === a) return e(n), n;
              }
            }

            var c = t.__mediaSoundMeter.getSoundMeters() || n,
                u = 2 === t._stream.type ? t._webrtc : t._stream._webrtc;
            (emedia.meterWithTrackAudioLevel || 0 === c.instant) && u && !u.closed && u._rtcPeerConnection && u._rtcPeerConnection.getStats().then(function (t) {
              t.size > 0 && t.forEach(function (t) {
                "track" !== t.type || "audio" !== t.kind && "audio" !== t.trackIdentifier || (c.trackAudioLevel = t.audioLevel, c.trackTotalAudioEnergy = t.totalAudioEnergy, e(c));
              });
            }), e(c);
          },
          _finally: function _finally() {
            var e = this;
            2 === e._stream.type && e._stream.located() && e._remoteMediaSoundMeters && e._remoteMediaSoundMeters._finally(), e.__mediaSoundMeter.useCount--, 0 === e.__mediaSoundMeter.useCount && e.__mediaSoundMeter._finally();
          }
        })
      }),
          Yt = function () {
        function e(t) {
          s(this, e);
          var n = t.aoff,
              r = t.voff,
              i = t._stream,
              o = t.mediaStream;
          this.aoff = n, this.voff = r, this._stream = i, this.mediaStream = o;
        }

        return d(e, [{
          key: "ifAoff",
          value: function value(e) {
            this.if("aoff", e);
          }
        }, {
          key: "ifVoff",
          value: function value(e) {
            this.if("voff", e);
          }
        }, {
          key: "ifMediaStream",
          value: function value(e) {
            this.if("mediaStream", e);
          }
        }, {
          key: "if",
          value: function value(e, t) {
            void 0 !== this[e] && t(this[e]);
          }
        }]), e;
      }();

      var Xt = Kt;
      var Zt = Je("Handler");

      var Qt = function () {
        function e(t) {
          var n = this;
          s(this, e), f(this, "handleEvent", function (e) {
            var t = n;
            if (e instanceof Wt.RecvResponse) t._onRecvResponse(e);else if (e instanceof Wt.ServerRefuseEnter) Zt.warn("Server refuse, ", e.failed, e.msg), t.onServerRefuseEnter(e);else if (e instanceof Wt.NetworkChanaged) Zt.warn("Network chanaged, ", e.preIp, e.nowIp), t.onNetworkChanaged(e);else if (e instanceof Wt.EnterFail) Zt.warn("Enter fail, result = ", e.failed), t.onEnterFail();else if (e instanceof Wt.WSClose) t.onWSClose();else if (e instanceof Wt.WSConnected) Zt.warn("Websocket connected");else if (e instanceof Wt.ICEConnected) {
              var r = e.webrtc;
              t.onICEConnected(r);
            } else if (e instanceof Wt.ICEConnectFail) r = e.webrtc, t.onICEConnectFail(r);else if (e instanceof Wt.ICEDisconnected) r = e.webrtc, t.onICEDisconnected(r);else if (e instanceof Wt.ICEClosed) r = e.webrtc, t.onICEClosed(r);else if (e instanceof Wt.ICERemoteMediaStream) t.onICERemoteMediaStream(e.webrtc);else if (e instanceof Wt.PushSuccess) {
              t.context._cacheStreams[e.stream.id] = t.context._linkedStreams[e.stream.id] = e.stream;
              var i = t.context.newStream(e.stream);
              if (e.hidden && !t.context._maybeNotExistStreams[e.stream.id] && !i.isRepublished) return void t.context._onAddStream(i);
              emedia._yetGetUserMedia = !0;

              try {
                var o = new Yt({
                  voff: i.voff,
                  aoff: i.aoff,
                  mediaStream: i.getMediaStream()
                });
                !0 !== e.hidden && i && t.context.onUpdateStream(i, o);
              } finally {
                Oe && ut(t.context._cacheStreams, function (e, n) {
                  !0 === n._autoSubWhenPushStream && (ct(n, "_autoSubWhenPushStream"), t.context.createWebrtcAndSubscribeStream(n.id));
                });
              }
            } else if (e instanceof Wt.SubSuccess) t.context._linkedStreams[e.stream.id] = e.stream, e.stream.updateAttributes({
              _zoom: 1
            });else if (e instanceof Wt.PushFail) {
              if (!0 !== e.hidden) {
                var a = ct(t.context._linkedStreams, e.stream.id);
                Zt.warn("PushFail remove from _linkedStreams", e.stream.id, a), a && (i = t.context.newStream(e.stream), t.context.onRemoveStream(i));
              }
            } else if (e instanceof Wt.SubFail) !0 !== e.hidden && (ct(t.context._linkedStreams, e.stream.id), Zt.warn("SubFail remove from _linkedStreams", e.stream.id), (i = t.context.newStream(e.stream)).updateAttributes({
              rtcId: void 0,
              _webrtc: void 0,
              mediaStream: void 0
            }), t.context.onUpdateStream(i, new Yt(i)));else if (e instanceof Wt.SubFailNotSupportVCodes) {
              var s = e.stream;
              Zt.warn("Rtc donot support pub VCodes. close. sub fail.", s.rtcId, " -> ", s.id);

              try {
                t.onNotSupportPublishVideoCodecs && t.onNotSupportPublishVideoCodecs(s);
              } catch (e) {
                Zt.warn(e);
              }
            } else if (e instanceof Wt.EnterSuccess) t.onEnterSuccess();else if (e instanceof Wt.SwitchVCodes) {
              s = e.stream;
              var c,
                  u = e.useVCodes;

              if (r = s._webrtc, Zt.warn("Rtc switch VCodes. ", s.id, u), u && 0 != u.length || Zt.warn("Rtc switch VCodes. error! useVCodes is empty ", s.id, u), emedia.config && emedia.config.forceUseVideoCodecs && emedia.config.forceUseVideoCodecs.length > 0 && (c = emedia.config.forceUseVideoCodecs, Ye()(c) || (c = []).push(emedia.config.forceUseVideoCodecs)), c) {
                if ("string" == typeof c && c !== u[0]) return void Zt.warn("Rtc switch VCodes. igrone . useVCodes !== forceUseVideoCodecs ", s.id, r._rtcId, u, c);
                if (Ye()(c) && c[0] !== u[0]) return void Zt.warn("Rtc switch VCodes. igrone ddd . useVCodes == forceUseVideoCodecs ", s.id, r._rtcId, u, c);
              }

              if (r && r.optimalVideoCodecs) {
                if ("string" == typeof r.optimalVideoCodecs && r.optimalVideoCodecs == u[0]) return void Zt.warn("Rtc switch VCodes. igrone . useVCodes == optimalVideoCodecs ", s.id, r._rtcId, u);
                if (Ye()(r.optimalVideoCodecs) && r.optimalVideoCodecs.length > 0 && r.optimalVideoCodecs[0] == u[0]) return void Zt.warn("Rtc switch VCodes. igrone ddd . useVCodes == optimalVideoCodecs ", s.id, r._rtcId, u);
              }

              s.updateAttributes({
                optimalVideoCodecs: u
              }), r && t.context.closeWebrtc(r.getRtcId(), !0), setTimeout(function () {
                s.updateAttributes({
                  iceRebuildCount: 1
                }), t.iceRebuild(s), Zt.warn("Rtc switch VCodes. iceRebuild end.", s.id, u);
              }, 300);
            }
          }), this.onEvent = this.onEvent.bind(this), this.context = t;
        }

        return d(e, [{
          key: "onEvent",
          value: function value(e) {
            var t = this;

            function n() {
              try {
                t.handleEvent(e);
              } catch (e) {
                Zt.warn(e);
              }
            }

            if (e && Zt.info("[EVT]", e.message(), e.hidden || ""), e instanceof Wt.ServerRefuseEnter && e.failed && -95270 === e.failed && (e.failed = -9527), e instanceof emedia.event.StreamState && e.stream && e.stream.located()) n();else try {
              e.hidden || t.onNotifyEvent && t.onNotifyEvent(e);
            } finally {
              n();
            }
          }
        }, {
          key: "_onRecvResponse",
          value: function value(e) {
            var t = this,
                n = e.request,
                r = e.response;

            if (n && r && 200 !== n.op && 1002 !== n.op && 0 !== r.result) {
              Zt.warn("Server refuse. when request = ", n);
              var i = e.failed;

              switch (i) {
                case -9527:
                case -95270:
                  break;

                case -500:
                case -502:
                case -504:
                case -508:
                case -510:
                  t.context.close(4, i);
                  break;

                case -506:
                  t.context.close(11, i);
                  break;

                case -501:
                  t.context.close(11, i);
              }
            }
          }
        }, {
          key: "onServerRefuseEnter",
          value: function value(e) {
            var t = this,
                n = e.failed;

            switch (n) {
              case -9527:
              case -95270:
                t.context.close(4, -9527);
                break;

              case -500:
              case -502:
              case -504:
              case -508:
              case -510:
                t.context.close(4, n);
                break;

              case -506:
                t.context.close(11, n);
                break;

              default:
                t.context.close(2);
            }
          }
        }, {
          key: "onEnterFail",
          value: function value() {
            this.__getCopyInterval && clearInterval(this.__getCopyInterval);
          }
        }, {
          key: "onNetworkChanaged",
          value: function value(e) {
            var t = this,
                n = e.nowIp;
            emedia.config.rebuildPeerConnectionWhenNetworkChanaged && setTimeout(function () {
              var e = {};
              ut(t.context._cacheStreams, function (r, i) {
                if (!t.context._maybeNotExistStreams[r] && i._webrtc) {
                  var o = i._webrtc;
                  e[i.rtcId] || (o.closed || "string" != typeof o.useIp || o.useIp === n || (Zt.warn("network chanage. webrtc will rebuild.", o._rtcId, o.__id), t.onICEClosed(o)), e[i.rtcId] = !0);
                }
              });
            }, 100);
          }
        }, {
          key: "onEnterSuccess",
          value: function value() {
            var e = this;
            setTimeout(function () {
              e._failIcesRebuild();
            }, 50), e.context.getCopyIntervalMillis && e.context.getCopyIntervalMillis > 0 && (Zt.warn("Run interval get copy. interval = ", e.context.getCopyIntervalMillis), e.__getCopyInterval && clearInterval(e.__getCopyInterval), e.__getCopyInterval = setInterval(function () {
              e.context._session.connected() ? e._sysCopy.apply(e) : (Zt.warn("Warn! cannot get copy. cause offline."), e.__getCopyInterval && clearInterval(e.__getCopyInterval));
            }, e.context.getCopyIntervalMillis)), e.context.getMediaMeterIntervalMillis && e.context.getMediaMeterIntervalMillis > 0 && e._intervalGetMediaMeters();
          }
        }, {
          key: "_intervalGetMediaMeters",
          value: function value() {
            var e = this;
            !function t() {
              e.__getMediaMetersIntervalFlag && emedia.cancelAnimationFrame(e.__getMediaMetersIntervalFlag), e.context.getMediaMeterIntervalMillis ? e.__getMediaMetersIntervalFlag = emedia.requestAnimationFrame(function (n) {
                "function" == typeof De && e._flushMediaMetersByAudioContext.apply(e), !1 === e.context.closed && t();
              }, e.context.getMediaMeterIntervalMillis) : Zt.warn("Ontalking closed. please use getMediaMeterIntervalMillis");
            }();
          }
        }, {
          key: "_flushMediaMetersByAudioContext",
          value: function value() {
            var e = this;
            ut(e.context._cacheStreams, function (t, n) {
              e.context._monitSoundChanagedStreams && !e.context._monitSoundChanagedStreams[t] || "0" != n.id && e._updateMetersOrNewOne.call(e, t, n);
            });
            var t = [];
            ut(e.context._mediaMeters, function (n, r) {
              var i = e.context._cacheStreams[n];
              i && e._updateMetersOrNewOne.call(e, n, i), i || t.push(n);
            }), ut(t, function (t, n) {
              ct(e.context._mediaMeters, n);
            });
          }
        }, {
          key: "_updateMetersOrNewOne",
          value: function value(e, t) {
            var n = this,
                r = n.context._mediaMeters[e];

            if (!(2 !== t.type || t.located() || t.subArgs && t.subArgs.subSAudio)) {
              var i = n._oneAudioMixers();

              if (!i || r && r._webrtc && i._webrtc.__id != r._webrtc.__id) return r && r._finally(), ct(n.context._mediaMeters, e), void n.context._onSoundChanage(t.owner, t);
            }

            return r && r._streamCreateId === t.__create_id && r.__mediaSoundMeter.__worked ? (r.onSoundMeters(function (e) {
              n.context._onSoundChanage(t.owner, t, e);
            }), r) : (r && (r._streamCreateId !== t.__create_id || r.__mediaSoundMeter.__worked) && (r && r._finally(), ct(n.context._mediaMeters, e), n.context._onSoundChanage(t.owner, t)), t.aoff ? void 0 : ((r = n._newMediaMeters(t)) && (n.context._mediaMeters[e] && n.context._mediaMeters[e]._finally(), n.context._mediaMeters[e] = r), r));
          }
        }, {
          key: "_newAudioContext",
          value: function value() {
            if (emedia.__usingWebAudio) return emedia.__audioContext;
          }
        }, {
          key: "_newMediaMeters",
          value: function value(e) {
            var t,
                n = this;
            if (2 === e.type && e.subArgs && e.subArgs.subSAudio && e._webrtc && e._webrtc.getRemoteStream()) return new e.StreamSoundMeter({
              _stream: e,
              _mediaStream: e._webrtc.getRemoteStream(),
              _webrtc: e._webrtc,
              __audioContext: n._newAudioContext()
            });
            if (2 === e.type && e.located()) return new e.StreamSoundMeter({
              _stream: e,
              _mediaStream: e._localMediaStream,
              __audioContext: n._newAudioContext()
            });

            if (2 === e.type && !e.located()) {
              var r = n._oneAudioMixers();

              if (!r || !r._webrtc || r._webrtc.closed) return;
              if (r && (void 0 === r._remoteMediaSoundMeters || !r._remoteMediaSoundMeters.__worked) && r._webrtc && r._webrtc.getRemoteStream() && (r._remoteMediaSoundMeters = new r.MediaSoundMeter({
                _mediaStream: r._webrtc.getRemoteStream(),
                __audioContext: n._newAudioContext()
              })), !r._remoteMediaSoundMeters) return;
              return new e.StreamSoundMeter({
                _stream: e,
                _webrtc: r._webrtc,
                __mediaSoundMeter: r._remoteMediaSoundMeters
              });
            }

            return !e.aoff && (t = e.getMediaStream()) ? new e.StreamSoundMeter({
              _stream: e,
              _mediaStream: t,
              __audioContext: n._newAudioContext()
            }) : void 0;
          }
        }, {
          key: "_oneAudioMixers",
          value: function value() {
            var e = this,
                t = e.context._cacheStreams[0];
            if (t && t._webrtc && !t._webrtc.closed) return t;

            for (var n in e.context.audioMixers) {
              var r = e.context.audioMixers[n];
              if (r.located()) return r;
            }
          }
        }, {
          key: "onWSClose",
          value: function value() {
            this.__getCopyInterval && clearInterval(this.__getCopyInterval), Zt.info("Websocket closed.");
          }
        }, {
          key: "onICEDisconnected",
          value: function value(e) {
            var t = this;
            t.__networkWeakInterval && clearTimeout(t.__networkWeakInterval), t.__networkWeakInterval = setTimeout(function () {
              t.onNetworkWeak && t.onNetworkWeak();
            }, 1e3), ut(t.context._linkedStreams, function (n, r) {
              r.rtcId == e.getRtcId() && (t.context._maybeNotExistStreams[n] || (t.context._maybeNotExistStreams[n] = p()({}, r)).updateAttributes({
                iceRebuildCount: 1
              }), Zt.info("Stream maybe not exist. caused by disconnected", r.id));
            });
          }
        }, {
          key: "onICEConnectFail",
          value: function value(e) {
            var t = this;

            for (var n in t.context._linkedStreams) {
              var r = t.context._linkedStreams[n];

              if (r.rtcId == e.getRtcId()) {
                if (r._webrtc && r._webrtc.__id !== e.__id) {
                  Zt.warn("Stream use other webrtc rtcId = ", r.rtcId, ", id: ", r._webrtc.__id, e.__id);
                  continue;
                }

                var i;

                if ((i = t.context._maybeNotExistStreams[n]) || (i = t.context._maybeNotExistStreams[n] = p()({}, r)).updateAttributes({
                  iceRebuildCount: 1
                }), i) {
                  var o = new Wt.StreamState({
                    stream: i
                  });
                  o.iceFail(), t.onEvent(o);
                }

                if (Zt.info("ice fail. webrtc = ", e.getRtcId(), " problem stream is ", i.iceRebuildCount, i.id), i.iceRebuildCount > emedia.config.iceRebuildCount) Zt.info("ice fail. webrtc = ", e.getRtcId(), " rebuild fail. problem stream is ", i.id), i.located() ? t.onEvent(new Wt.PushFail({
                  stream: r,
                  cause: "pub ice rebuild failed."
                })) : t.onEvent(new Wt.SubFail({
                  stream: r,
                  cause: "sub ice rebuild failed."
                })), t.context.closeWebrtc(e.getRtcId(), !1);else {
                  var a = t.context._records[i.id];
                  i._localMediaStream ? Zt.info("ice fail. webrtc = ", e.getRtcId(), " will rebuild. remain local stream. ", i.id) : Zt.info("ice fail. webrtc = ", e.getRtcId(), " will rebuild.", i.id), t.context.closeWebrtc(e.getRtcId(), !0), a && (t.context._records[i.id] = a), function (e) {
                    setTimeout(function () {
                      t.iceRebuild(e);
                    }, emedia.config.iceRebuildIntervalMillis);
                  }(i), Zt.info("ice fail. webrtc = ", e.getRtcId(), " will rebuilding. problem stream is ", i.id);
                }
                2 === r.type && ct(t.context.audioMixers, r.id);
              }
            }
          }
        }, {
          key: "onICEClosed",
          value: function value(e) {
            var t = this;

            if (e.closed) {
              Zt.warn("Webrtc will be removed. by __id = ", e.__id, ", rtcId = ", e.getRtcId());
              var n = ct(t.context._ices, e.__id);
              n ? Zt.warn("Webrtc removed. by id = ", n.__id, ", rtcId = ", n.getRtcId()) : Zt.warn("Webrtc removed. by id = ", e.__id, ", rtcId = ", e.getRtcId());

              var r = t.context._ices[e.getRtcId()];

              r && r.__id === n.__id && (n = ct(t.context._ices, e.getRtcId()), Zt.warn("Webrtc removed. by rtcId = ", n.getRtcId(), ", __id = ", n.__id));
            } else Zt.info("ICE self closed. not allow. will rebuild", e.getRtcId()), t.onICEConnectFail(e);
          }
        }, {
          key: "onICEConnected",
          value: function value(e) {
            var t = this;
            ut(t.context._cacheStreams, function (n, r) {
              if (r.rtcId == e.getRtcId()) {
                if (r.updateAttributes({
                  finalVCodeChoices: e.finalVCodeChoices
                }), t.context._maybeNotExistStreams[n]) {
                  ct(t.context._maybeNotExistStreams, r.id), t.context._linkedStreams[n] = r, Zt.info("ice reconnected. webrtc = ", e.getRtcId(), "will update stream = ", r.id);
                  var i = t.context._records[r.id];
                  i && i.rtcId !== r.rtcId && (t.context.startRecord(r), Zt.warn("Re record. for ", r.id, ", after rebuild ice.", i.rtcId, "->", r.rtcId));
                } else Zt.info("ice connected. webrtc = ", e.getRtcId(), r.id), r.located() && t.onEvent(new Wt.PushSuccess({
                  stream: r
                })), r.located() || t.onEvent(new Wt.SubSuccess({
                  stream: r
                }));

                2 === r.type && (t.context.audioMixers[r.id] = r);
              }
            });
          }
        }, {
          key: "onICERemoteMediaStream",
          value: function value(e) {
            var t = this;
            ut(t.context._cacheStreams, function (n, r) {
              if (r.rtcId == e.getRtcId() && (!r.located() || 2 === r.type)) {
                var i = e.getRemoteStream();
                t.context._updateRemoteStream(r, i), r.onGotRemoteMediaStream ? r.onGotRemoteMediaStream.call(r, i) : ((r = t.context.newStream(r)).updateAttributes({
                  mediaStream: e.getRemoteStream()
                }), t.context.onUpdateStream(r, new Yt({
                  mediaStream: r.mediaStream
                })));
              }
            });
          }
        }, {
          key: "_failIcesRebuild",
          value: function value() {
            var e = this;
            ut(e.context._maybeNotExistStreams, function (t, n) {
              setTimeout(function () {
                e.iceRebuild(n);
              }, 100);
            });
          }
        }, {
          key: "iceRebuild",
          value: function value(e) {
            var t = this;
            return t.context.connected() ? t.context._linkedStreams[e.id] && t.context._cacheStreams[e.id] ? void (e.iceRebuildCount > emedia.config.iceRebuildCount ? (Zt.info("ice rebuild fail. count too many. stream is ", e.id), e.located() ? t.onEvent(new Wt.PushFail({
              stream: e,
              cause: "pub ice rebuild failed."
            })) : t.onEvent(new Wt.SubFail({
              stream: e,
              cause: "sub ice rebuild failed."
            }))) : t.context.connected() ? (Zt.info("ice try rebuild. count", e.iceRebuildCount, ". stream is ", e.id), t.rebuildIce(e), e.iceRebuildCount++) : Zt.warn("ice rebuild. stop. cause by not websocket disconnect", e.id)) : (Zt.info("ice rebuild fail. it yet closed. stream is ", e.id, e.rtcId), ct(t.context._maybeNotExistStreams, e.id), ct(t.context._linkedStreams, e.id), void Zt.warn("iceRebuild, remvoe from _linkedStreams", e.id)) : (e.updateAttributes({
              iceRebuildCount: 1
            }), void Zt.warn("Websocket disconnect. waiting. rebuild count reset", e.iceRebuildCount, e.id));
          }
        }, {
          key: "rebuildIce",
          value: function value(e) {
            var t = this;
            t.context._cacheStreams[e.id] ? (Zt.warn("Begin rebuild ice ", e.iceRebuildCount, e.id), e.located() ? (e.updateAttributes({
              isRepublished: !0
            }), t.context.push(e, void 0, void 0, !0)) : t.context.createWebrtcAndSubscribeStream(e.id), Zt.warn("Finish rebuild ice ", e.iceRebuildCount, e.id, t.context._cacheStreams[e.id].rtcId)) : Zt.warn("Begin rebuild ice. not found stream at local", e.iceRebuildCount, e.id);
          }
        }, {
          key: "_sysCopy",
          value: function value() {
            var e = this,
                t = e.context.newMessage().setOp(1e3).setCver(e.context._cver || 0);
            e.context.postMessage(t, function (t) {
              0 == t.result ? (e.context._cver || 0) < t.cver && (e.context._cver = t.cver, e.context.onMembers(t.cver, t.mems || {}), e.context.onStreams(t.cver, t.streams || {}), Zt.info("Got copy success.")) : Zt.warn("Get copy fail. result = ", t.result);
            });
          }
        }]), e;
      }();

      var en = n(3929),
          tn = n.n(en),
          nn = Je("SDPSection"),
          rn = {
        headerSection: null,
        audioSection: null,
        videoSection: null,
        _parseHeaderSection: function _parseHeaderSection(e, t, n) {
          var r = t;
          return -1 === n || (r = -1 === t ? n : Math.min(t, n)), r >= 0 ? e.slice(0, r) : e;
        },
        _parseAudioSection: function _parseAudioSection(e, t, n) {
          var r = t;
          if (r >= 0) return e.slice(r, n < r ? e.length : n);
        },
        _parseVideoSection: function _parseVideoSection(e, t, n) {
          var r = n;
          if (r >= 0) return e.slice(r, t < r ? e.length : t);
        },
        spiltSection: function spiltSection(e) {
          this._preSDP = e;
          var t = this._preAudioIndex = e.indexOf("m=audio"),
              n = this._preVideoIndex = e.indexOf("m=video");
          this.headerSection = this._parseHeaderSection(e, t, n), this.audioSection = this._parseAudioSection(e, t, n), this.videoSection = this._parseVideoSection(e, t, n);
        },
        setVideoBitrate: function setVideoBitrate(e) {
          e && this.videoSection && (this.videoSection = this.setBitrate(this.videoSection, e));
        },
        setVideoMinBitrate: function setVideoMinBitrate(e) {
          this.setAllFmtpBitrate({
            "x-google-min-bitrate": e
          });
        },
        setVideoMaxBitrate: function setVideoMaxBitrate(e) {
          this.setAllFmtpBitrate({
            "x-google-max-bitrate": e
          });
        },
        setVideoStartBitrate: function setVideoStartBitrate(e) {
          this.setAllFmtpBitrate({
            "x-google-start-bitrate": e
          });
        },
        setAllFmtpBitrate: function setAllFmtpBitrate(e) {
          if (this.videoSection) {
            var t = {};
            tn()(e).forEach(function (n) {
              var r = n + "=" + e[n],
                  i = new RegExp("(a=fmtp\\:\\d+\\s\\S*;?)(" + n + "=\\d+)(;?\\S*)", "g");
              t[n] = {
                field: r,
                regex: i
              };
            }), this.videoSection = this.videoSection.replace(/(a=fmtp\:\d+[^\r\n]+)([\r\n]+)/g, function (e, n, r) {
              return n.indexOf("apt=") >= 0 ? e : (tn()(t).forEach(function (e) {
                var r = t[e],
                    i = r.regex,
                    o = r.field,
                    a = n.replace(i, function (e, t, n, r) {
                  return t + o + r;
                });
                a.indexOf(e) < 0 ? (a.endsWith(";") || (a += ";"), n = a + o) : n = a;
              }), n + r);
            });
          }
        },
        setFmtpBitrate: function setFmtpBitrate(e, t) {
          if (t && this.videoSection) {
            var n = e + "=" + t,
                r = new RegExp("(a=fmtp\\:\\d+\\s\\S*;?)(" + e + "=\\d+)(;?\\S*)", "g");
            this.videoSection = this.videoSection.replace(/(a=fmtp\:\d+[^\r\n]+)([\r\n]+)/g, function (t, i, o) {
              var a = i.replace(r, function (e, t, r, i) {
                return t + n + i;
              });
              return a.indexOf(e) < 0 && (a.endsWith(";") || (a += ";"), a += n), a + o;
            });
          }
        },
        setAudioBitrate: function setAudioBitrate(e) {
          e && this.audioSection && (this.audioSection = this.setBitrate(this.audioSection, e));
        },
        setBitrate0: function setBitrate0(e, t) {
          return (e = e.replace(/(b=)(?:AS|TIAS)(\:)\d+/g, "$1AS$2" + t)).indexOf("b=AS") < 0 && (e = e.replace(/(m=(?:audio|video)[^\r\n]+)([\r\n]+)/g, "$1$2b=AS:" + t + "$2")), e;
        },
        setBitrate: function setBitrate(e, t) {
          var n = "AS";
          return Pe && (t = 1e3 * (t >>> 0), n = "TIAS"), (e = e.replace(/(b=)(?:AS|TIAS)(\:)\d+/g, "$1" + n + "$2" + t)).indexOf("b=" + n + ":") < 0 && (e = e.indexOf("c=IN ") < 0 ? e.replace(/(m=(?:audio|video)[^\r\n]+)([\r\n]+)/g, "$1$2b=" + n + ":" + t + "$2") : e.replace(/c=IN ([^\r\n]+)([\r\n]+)/, "c=IN $1$2b=" + n + ":" + t + "$2")), e;
        },
        updateVideoSection: function updateVideoSection(e, t) {
          this.videoSection && (this.videoSection = this.videoSection.replace(e, t));
        },
        updateAudioSection: function updateAudioSection(e, t) {
          this.audioSection && (this.audioSection = this.audioSection.replace(e, t));
        },
        updateVideoSendonly: function updateVideoSendonly() {
          this.videoSection && (this.videoSection = this.videoSection.replace(/sendrecv/g, "sendonly"));
        },
        updateVideoRecvonly: function updateVideoRecvonly() {
          this.videoSection && (this.videoSection = this.videoSection.replace(/sendrecv/g, "recvonly"));
        },
        updateAudioSendonly: function updateAudioSendonly() {
          this.audioSection && (this.audioSection = this.audioSection.replace(/sendrecv/g, "sendonly"));
        },
        updateAudioRecvonly: function updateAudioRecvonly() {
          this.audioSection && (this.audioSection = this.audioSection.replace(/sendrecv/g, "recvonly"));
        },
        updateACodes: function updateACodes(e) {
          if (e && this.audioSection) {
            "string" == typeof e && ((n = []).push(e), e = n);

            for (var t = {}, n = this._parseLine(this.audioSection, /a=rtpmap:(\d+) ([A-Za-z0-9]+)\/.*/gi), r = 0; r < n.length; r++) {
              var i = n[++r];
              t[n[++r]] = i;
            }

            var o = [];

            for (r = 0; r < e.length; r++) {
              var a = t[e[r]];
              a && o.push(a);
            }

            0 == o.length && (this._webrtc ? nn.warn("Not found acodes map", e, this._webrtc._rtcId, this._webrtc.__id) : nn.warn("Not found acodes map", e));
            var s = this.audioSection.indexOf("\r"),
                c = this.audioSection.substring(0, s),
                u = c.split(" ");
            Array.prototype.push.apply(o, u.slice(3));
            var d = [],
                f = {};
            o.forEach(function (e) {
              0 == d.length ? (d.push(e), f[e] = !0) : f[e] || (d.push(e), f[e] = !0);
            }), u.splice(3, u.length - 3, d.join(" ")), c = u.join(" "), this._webrtc && nn.warn(c, this._webrtc._rtcId, this._webrtc.__id), this.audioSection = c + this.audioSection.substring(s);
          }
        },
        updateVCodes: function updateVCodes(e) {
          if (e && this.videoSection) {
            "string" == typeof e && ((n = []).push(e), e = n);

            for (var t = {}, n = this._parseLine(this.videoSection, /a=rtpmap:(\d+) ([A-Za-z0-9]+)\/.*/gi), r = 0; r < n.length; r++) {
              var i = n[++r];
              t[n[++r]] = i;
            }

            var o = this._parseLine(this.videoSection, /a=fmtp:(\d+) .*profile-level-id=42e01f;?.*/gi);

            o && o.length >= 2 && (t.H264 = o[1]);
            var a = [];

            for (r = 0; r < e.length; r++) {
              var s = t[e[r]];
              s && a.push(s);
            }

            0 == a.length && (this._webrtc ? nn.warn("Not found vcodes map", e, this._webrtc._rtcId, this._webrtc.__id) : nn.warn("Not found vcodes map", e));
            var c = this.videoSection.indexOf("\r"),
                u = this.videoSection.substring(0, c),
                d = u.split(" ");
            Array.prototype.push.apply(a, d.slice(3));
            var f = [],
                l = {};
            a.forEach(function (e) {
              0 == f.length ? (f.push(e), l[e] = !0) : l[e] || (f.push(e), l[e] = !0);
            }), d.splice(3, d.length - 3, f.join(" ")), u = d.join(" "), this._webrtc && nn.warn(u, this._webrtc._rtcId, this._webrtc.__id), this.videoSection = u + this.videoSection.substring(c);
          }
        },
        removeSSRC: function removeSSRC(e) {
          for (var t = [], n = e.split(/a=ssrc:[^\n]+/g), r = 0; r < n.length; r++) {
            "\n" != n[r] && t.push(n[r]);
          }

          return t.join("\n");
        },
        removeField_msid: function removeField_msid(e) {
          for (var t = [], n = e.split(/a=msid:[^\n]+/g), r = 0; r < n.length; r++) {
            "\n" != n[r] && t.push(n[r]);
          }

          for (e = t.join("\n"), t = [], n = e.split(/[\n]+/g), r = 0; r < n.length; r++) {
            "\n" != n[r] && t.push(n[r]);
          }

          return t.join("\n");
        },
        updateHeaderMsidSemantic: function updateHeaderMsidSemantic(e) {
          var t = "a=msid-semantic: WMS " + e,
              n = this.headerSection.split(/a=msid\-semantic: WMS.*/g),
              r = [];

          switch (n.length) {
            case 1:
              r.push(n[0]);
              break;

            case 2:
              r.push(n[0]), r.push(t), r.push("\n");
              break;

            case 3:
              r.push(n[0]), r.push(t), r.push("\n"), r.push(n[2]), r.push("\n");
          }

          return this.headerSection = r.join("");
        },
        updateAudioSSRCSection: function updateAudioSSRCSection(e, t, n, r) {
          this.audioSection && (this.audioSection = this.removeSSRC(this.audioSection)), this.audioSection && (this.audioSection = this.removeField_msid(this.audioSection)), this.audioSection && (this.audioSection = this.audioSection + this.ssrcSection(e, t, n, r));
        },
        updateVideoSSRCSection: function updateVideoSSRCSection(e, t, n, r) {
          this.videoSection && (this.videoSection = this.removeSSRC(this.videoSection)), this.videoSection && (this.videoSection = this.removeField_msid(this.videoSection)), this.videoSection && (this.videoSection = this.videoSection + this.ssrcSection(e, t, n, r));
        },
        getUpdatedSDP: function getUpdatedSDP(e) {
          var t, n, r;

          if (void 0 !== e && null != e || (e = this._preAudioIndex < this._preVideoIndex), this.videoSection && this.videoSection.replace(/a=mid:([^\r\n]+)/, function (e, n) {
            return t = n, e;
          }), this.audioSection && this.audioSection.replace(/a=mid:([^\r\n]+)/, function (e, t) {
            return n = t, e;
          }), e) {
            var i = ["a=group:BUNDLE"];
            this.audioSection && i.push(n), this.videoSection && i.push(t), r = this.headerSection.replace(/a=group:BUNDLE [^\r\n]+/, i.join(" ")), this.audioSection && (r += this.audioSection), this.videoSection && (r += this.videoSection);
          } else i = ["a=group:BUNDLE"], this.videoSection && i.push(t), this.audioSection && i.push(n), r = this.headerSection.replace(/a=group:BUNDLE [^\r\n]+/, i.join(" ")), this.videoSection && (r += this.videoSection), this.audioSection && (r += this.audioSection);

          return r;
        },
        parseMsidSemantic: function parseMsidSemantic(e) {
          var t = this._parseLine(e, /a=msid\-semantic:\s*WMS (\S+)/gi);

          return t && 2 == t.length && (this.msidSemantic = {
            line: t[0],
            WMS: t[1]
          }), this.msidSemantic;
        },
        ssrcSection: function ssrcSection(e, t, n, r) {
          return ["a=ssrc:" + e + " cname:" + t, "a=ssrc:" + e + " msid:" + n + " " + r, "a=ssrc:" + e + " mslabel:" + n, "a=ssrc:" + e + " label:" + r, ""].join("\n");
        },
        parseSSRC: function parseSSRC(e) {
          var t = new RegExp("a=(ssrc):(\\d+) (\\S+):(\\S+)", "ig"),
              n = this._parseLine(e, t);

          if (n) {
            for (var r = {
              lines: [],
              updateSSRCSection: this.ssrcSection
            }, i = 0; i < n.length; i++) {
              var o = n[i];
              if (o.indexOf("a=ssrc") >= 0) r.lines.push(o);else switch (o) {
                case "ssrc":
                case "cname":
                case "msid":
                case "mslabel":
                case "label":
                  r[o] = n[++i];
              }
            }

            return r;
          }
        },
        _parseLine: function _parseLine(e, t) {
          for (var n, r = []; null != (n = t.exec(e));) {
            for (var i = 0; i < n.length; i++) {
              r.push(n[i]);
            }
          }

          if (r.length > 0) return r;
        }
      },
          on = function on(e, t) {
        p()(this, rn), this._webrtc = t, this.spiltSection(e);
      };

      on.isAudioVideo = function (e) {
        return e.indexOf("m=audio") < e.indexOf("m=video");
      }, on.isVideoPreAudio = function (e) {
        var t = e.indexOf("m=audio"),
            n = e.indexOf("m=video");
        return t >= 0 && n >= 0 && n < t;
      };
      var an = on;
      var sn = Je("Webrtc"),
          cn = n(7539),
          un = emedia.__rtc_globalCount = 0;

      var dn = function () {
        function e(t) {
          s(this, e), f(this, "closed", !1), f(this, "sdpConstraints", {
            mandatory: {
              OfferToReceiveAudio: !0,
              OfferToReceiveVideo: !0
            }
          }), f(this, "optimalVideoCodecs", null), f(this, "optimalAudioCodecs", null), f(this, "offerOptions", {
            offerToReceiveAudio: !0,
            offerToReceiveVideo: !0
          });
          var n = this;
          n._rtcId || (n._rtcId = "RTC" + un++), n.__id = "_i_" + un++, n.__setRemoteSDP = !1, n.__tmpRemoteCands = [], n.__tmpLocalCands = [], n._rtcPeerConnection = null, n.cctx = n.__id, emedia && emedia.config && emedia.config.forceUseVideoCodecs && emedia.config.forceUseVideoCodecs.length > 0 && (n.optimalVideoCodecs = emedia.config.forceUseVideoCodecs), emedia && emedia.config && emedia.config.forceUseAudioCodecs && emedia.config.forceUseAudioCodecs.length > 0 && (n.optimalAudioCodecs = emedia.config.forceUseAudioCodecs), emedia && emedia.config && "number" == typeof emedia.config.forceVideoBitrate && (n.vbitrate = emedia.config.forceVideoBitrate), emedia && emedia.config && "number" == typeof emedia.config.forceMinVideoBitrate && (n.vminBitrate = emedia.config.forceMinVideoBitrate), emedia && emedia.config && "number" == typeof emedia.config.forceAudioBitrate && (n.abitrate = emedia.config.forceAudioBitrate), sn.info("Webrtc created. optimal video codecs:", n.optimalVideoCodecs, "audio codecs:", n.optimalAudioCodecs, "vbitrate:", n.vbitrate, "vminBitrate:", n.vminBitrate, "abitrate:", n.abitrate, n._rtcId, n.__id), this.registerProps(t);
        }

        return d(e, [{
          key: "registerProps",
          value: function value(e) {
            for (var t in e) {
              this[t] = e[t];
            }
          }
        }, {
          key: "getRtcId",
          value: function value() {
            return this._rtcId;
          }
        }, {
          key: "iceState",
          value: function value() {
            return this._rtcPeerConnection.iceConnectionState;
          }
        }, {
          key: "setSubArgs",
          value: function value(e) {
            this.subArgs = e;
          }
        }, {
          key: "getReceiversOfPeerConnection",
          value: function value() {
            var e = this;
            if (e._rtcPeerConnection && "closed" != e._rtcPeerConnection.iceConnectionState) return e._rtcPeerConnection.getReceivers();
          }
        }, {
          key: "updateRemoteBySubArgs",
          value: function value() {
            var e = this;
            e.subArgs && e._remoteStream && (emedia.enableVideoTracks(e._remoteStream, !(e.subArgs && !1 === e.subArgs.subSVideo)), emedia.enableAudioTracks(e._remoteStream, !(e.subArgs && !1 === e.subArgs.subSAudio)), sn.info("enable tracks remote stream", e._remoteStream, e.subArgs, e._rtcId, e.__id, e.closed));
          }
        }, {
          key: "createRtcPeerConnection",
          value: function value(e) {
            var t = this;
            sn.debug("begin create peer connection ......", t._rtcId, t.__id, t.closed), e || (e = t.iceServerConfig), e || je ? (e || (e = {}), !e.iceServers && (e.iceServers = []), e.rtcpMuxPolicy = "require", e.bundlePolicy = "max-bundle", e.relayOnly && (e.iceTransportPolicy = "relay")) : e = null, emedia && emedia.config && "function" == typeof emedia.config.reconfigRTCConfiguration && (e = emedia.config.reconfigRTCConfiguration(e)), sn.info("create pc, set config:", e, t._rtcId, t.__id, t.closed);
            var n = t._rtcPeerConnection = new RTCPeerConnection(e);

            function r(e) {
              sn.info("states: connectionState", n.connectionState, ", iceConnectionState", n.iceConnectionState, "@", t._rtcId, t.__id, t.closed);

              try {
                var r = n.iceConnectionState || n.connectionState;
                "failed" != n.connectionState && "failed" != n.iceConnectionState || (r = "failed"), t.lastIceConnectionState !== r && (t.lastIceConnectionState = r, t.onIceStateChange(r));
              } finally {}
            }

            n.__peerId = t._rtcId, sn.debug("created local peer connection object", n, t._rtcId), n.onicecandidate = function (e) {
              var n = e.candidate;

              if ("icecandidate" != e.type || n && ("string" != typeof n.protocol || "tcp" !== n.protocol.toLowerCase()) && !/ TCP /.test(n.candidate)) {
                if (!n.candidate) throw sn.error("Not found candidate. candidate is error"), "Not found candidate. candidate is error,";
                if (n.cctx = t.cctx, !t.__setRemoteSDP) return (t.__tmpLocalCands || (t.__tmpLocalCands = {})).push(n), void sn.debug("On ICE candidate ok: but tmp buffer caused by not set remote sdp: ", n, t._rtcId, t.__id, t.closed);
                sn.debug("On ICE candidate ok: ", n, t._rtcId, t.__id, t.closed), t._onIceCandidate(n);
              } else sn.debug("On ICE candidate: drop", n, t._rtcId, t.__id, t.closed);
            }, t.lastIceConnectionState = "", n.onconnectionstatechange = r.bind(t), n.onicestatechange = r.bind(t), n.oniceconnectionstatechange = r.bind(t), n.onsignalingstatechange = function (e) {
              sn.info("states: signaling", n.signalingState, "@", t._rtcId, t.__id, t.closed);
            }, null === n.ontrack && t._onTrack && (n.ontrack = function (e) {
              t._onTrack(e);
            }), n.onaddstream = function (e) {
              t._onGotRemoteStream(e);
            };
          }
        }, {
          key: "addTrack",
          value: function value(e, t) {
            var n = this;
            e.forEach(function (e) {
              n._rtcPeerConnection.addTrack(e, t), sn.debug("Added track(", e.id, e.kind, e.label, ") of stream(", t.id, ") to RtcPeerConnection", n._rtcId, n.__id, n.closed);
            });
          }
        }, {
          key: "setLocalStream",
          value: function value(e) {
            var t = this;
            if (t._localStream = e, t._rtcPeerConnection.addTrack) e.getTracks().forEach(function (n) {
              t._rtcPeerConnection.addTrack(n, e), sn.debug("Added track(", n.enabled, n.id, n.kind, n.label, ") of localStream(", e.id, ") to RtcPeerConnection", t._rtcId, t.__id, t.closed);
            });else {
              t._rtcPeerConnection.addStream(e);

              var n = e.getVideoTracks(),
                  r = e.getAudioTracks();
              n && n.length > 0 && sn.debug("RtcPeerConnection video: ", n[0].enabled, n[0].id, n[0].kind, n[0].label, t._rtcId, t.__id, t.closed), r && r.length > 0 && sn.debug("RtcPeerConnection audio: ", r[0].enabled, r[0].id, r[0].kind, r[0].label, t._rtcId, t.__id, t.closed);
            }
            sn.debug("Added local stream to RtcPeerConnection", e.id, e.active, t._rtcId, t.__id, this.closed);
          }
        }, {
          key: "removeStream",
          value: function value(e) {
            this._rtcPeerConnection.removeStream(e), sn.debug("Remove stream from RtcPeerConnection", e, self._rtcId, self.__id, this.closed);
          }
        }, {
          key: "getLocalStream",
          value: function value() {
            return this._localStream;
          }
        }, {
          key: "getRemoteStream",
          value: function value() {
            return this._remoteStream;
          }
        }, {
          key: "createOffer",
          value: function value(e, t) {
            var n = this;
            sn.debug("createOffer start...", n.offerOptions, n._rtcId, n.__id);
            var r = p()({}, n.offerOptions);
            return n.subArgs && (r = {
              offerToReceiveAudio: !0,
              offerToReceiveVideo: !0
            }), n._rtcPeerConnection.createOffer(r).then(function (t) {
              if (n.offerDescription = t, je && (t.sdp = t.sdp.replace(/profile-level-id=[^;]+/, "profile-level-id=42e01f")), Pe ? n.fireFoxOfferVideoPreAudio = n.__offerVideoPreAudio = an.isVideoPreAudio(t.sdp) : n.__offerVideoPreAudio = an.isVideoPreAudio(t.sdp), t.sdp = t.sdp.replace(/m=video 0/g, "m=video 9"), sn.warn("setLocalDescription. modify offer. if 'm=video 0' -> 'm=video 9'; if H264, 'profile-level-id=42e01f'", n._rtcId, n.__id), n.optimalVideoCodecs && n.optimalVideoCodecs.length > 0 || n.optimalAudioCodecs && n.optimalAudioCodecs.length > 0 || n.offerOptions && (!1 === n.offerOptions.offerToReceiveVideo || !1 === n.offerOptions.offerToReceiveAudio)) {
                var r = new an(t.sdp, n);
                n.optimalVideoCodecs && r.updateVCodes(n.optimalVideoCodecs), n.optimalAudioCodecs && r.updateACodes(n.optimalAudioCodecs), n.offerOptions && !1 === n.offerOptions.offerToReceiveVideo && r.updateVideoSection(/a=sendrecv|a=recvonly/g, "a=sendonly"), n.offerOptions && !1 === n.offerOptions.offerToReceiveAudio && r.updateAudioSection(/a=sendrecv|a=recvonly/g, "a=sendonly"), t.sdp = r.getUpdatedSDP();
              }

              sn.debug("setLocalDescription start", n._rtcId, n.__id, n.closed, n.optimalVideoCodecs, n.optimalAudioCodecs), n._rtcPeerConnection.setLocalDescription(t).then(n._onSetLocalSessionDescriptionSuccess.bind(n), n._onSetSessionDescriptionError.bind(n, t)).then(function () {
                t.cctx = n.cctx, (e || n.onCreateOfferSuccess.bind(n))(t);
              });
            }, t || n._onCreateSessionDescriptionError.bind(n, r));
          }
        }, {
          key: "createPRAnswer",
          value: function value(e, t) {
            var n = this;
            return sn.info(" createPRAnswer start", n.closed, n.sdpConstraints), n._rtcPeerConnection.createAnswer(n.sdpConstraints).then(function (t) {
              sn.debug("_____________PRAnswer ", t.sdp, n._rtcId, n.__id, n.closed), t.type = "pranswer", t.sdp = t.sdp.replace(/a=recvonly/g, "a=inactive");
              var r = new an(t.sdp, n);
              n.optimalVideoCodecs && r.updateVCodes(n.optimalVideoCodecs), n.optimalAudioCodecs && r.updateACodes(n.optimalAudioCodecs), t.sdp = r.getUpdatedSDP(), n.__prAnswerDescription = t, sn.debug("inactive PRAnswer ", t.sdp, n._rtcId, n.__id, n.closed), sn.debug("setLocalDescription start", t, n._rtcId, n.__id, n.closed), n._rtcPeerConnection.setLocalDescription(t).then(n._onSetLocalSessionDescriptionSuccess.bind(n), n._onSetSessionDescriptionError.bind(n, t)).then(function () {
                r.updateHeaderMsidSemantic("MS_0000"), r.updateAudioSSRCSection(1e3, "CHROME0000", "MS_0000", "LABEL_AUDIO_1000"), r.updateVideoSSRCSection(2e3, "CHROME0000", "MS_0000", "LABEL_VIDEO_2000"), t.sdp = r.getUpdatedSDP(), sn.debug("Send PRAnswer ", t.sdp, n._rtcId, n.__id, n.closed), n.cctx && (t.cctx = n.cctx), (e || n.onCreatePRAnswerSuccess.bind(n))(t);
              });
            }, t || n._onCreateSessionDescriptionError.bind(n, n.sdpConstraints));
          }
        }, {
          key: "createAnswer",
          value: function value(e, t) {
            var n = this;
            return sn.info("createAnswer start", n.closed, n.sdpConstraints), n._rtcPeerConnection.createAnswer(n.sdpConstraints).then(function (t) {
              sn.debug("_____________________Answer ", n._rtcId, n.__id, n.closed), t.type = "answer";
              var r = new an(t.sdp, n);
              n.optimalVideoCodecs && r.updateVCodes(n.optimalVideoCodecs), n.optimalAudioCodecs && r.updateACodes(n.optimalAudioCodecs), Me ? function (e) {
                var n = e.parseMsidSemantic(e.headerSection);

                if (n) {
                  "*" == n.WMS && e.updateHeaderMsidSemantic(n.WMS = "MS_0000");
                  var r = e.parseSSRC(e.audioSection),
                      i = e.parseSSRC(e.videoSection);
                  r && e.updateAudioSSRCSection(1e3, "CHROME0000", n.WMS, r.label || "LABEL_AUDIO_1000"), i && e.updateVideoSSRCSection(2e3, "CHROME0000", n.WMS, i.label || "LABEL_VIDEO_2000"), t.sdp = e.getUpdatedSDP();
                }
              }(r) : t.sdp = r.getUpdatedSDP(), n.__answerDescription = t, sn.debug("Answer ", n._rtcId, n.__id, n.closed), sn.debug("setLocalDescription start", t, n._rtcId, n.__id, n.closed), n._rtcPeerConnection.setLocalDescription(t).then(n._onSetLocalSessionDescriptionSuccess.bind(n), n._onSetSessionDescriptionError.bind(n, t)).then(function () {
                Me && (r.updateHeaderMsidSemantic("MS_0000"), r.updateAudioSSRCSection(1e3, "CHROME0000", "MS_0000", "LABEL_AUDIO_1000"), r.updateVideoSSRCSection(2e3, "CHROME0000", "MS_0000", "LABEL_VIDEO_2000"), t.sdp = r.getUpdatedSDP()), sn.debug("Send Answer ", n._rtcId, n.__id, n.closed), n.cctx && (t.cctx = n.cctx), (e || n.onCreateAnswerSuccess.bind(n))(t);
              });
            }, t || n._onCreateSessionDescriptionError.bind(n, n.sdpConstraints));
          }
        }, {
          key: "_printStats",
          value: function value(e) {
            var t = this;
            t.confrAttendee && emedia.config.remainLastStatsCount && e && e.getTracks().forEach(function (e) {
              t._printTrackStats(e);
            });
          }
        }, {
          key: "_printTrackStats",
          value: function value(e) {
            var t = this;

            if (t.confrAttendee && emedia.config.remainLastStatsCount) {
              var n = t.confrAttendee._trackStats && t.confrAttendee._trackStats[e.id];

              if (n) {
                for (var r in n) {
                  var i = n[r];

                  for (var o in i) {
                    var a = i[o];
                    if (a) for (var s = a.curIndex, c = 0; c < emedia.config.remainLastStatsCount; c++) {
                      var u = a[s = (s - 1) % emedia.config.remainLastStatsCount];
                      if (!u || void 0 === u.data) break;
                      sn.info("[track]", t._rtcId, t.__id, e.kind, e.id, r, o, u.data, u.timestamp.toLocaleString());
                    }
                  }
                }

                ct(t.confrAttendee._trackStats, e.id);
              }
            }
          }
        }, {
          key: "close",
          value: function value(e, t, n) {
            var r = this;

            if (sn.warn("webrtc closing", r._rtcId, r.__id, r.closed), r.__iceWaitIntervalId && clearTimeout(r.__iceWaitIntervalId), !r.closed) {
              t = !0 === t, r.closed = !0;

              try {
                var i = function i() {
                  r._rtcPeerConnection && r._rtcPeerConnection.close(), sn.info("peer connection close. it is", r._rtcPeerConnection && r._rtcPeerConnection.__peerId), !n && Oe && (r._rtcPeerConnection.iceConnectionState || r._rtcPeerConnection.connectionState, setTimeout(function () {
                    r._rtcPeerConnection.iceConnectionState || r._rtcPeerConnection.connectionState, r.onIceStateChange && r.onIceStateChange("closed");
                  }, 200));
                },
                    o = r._localStream,
                    a = r._remoteStream;

                emedia.config.printStatsWhenPCClose ? r.getStats(function () {
                  i(), o && r._printStats(o), a && r._printStats(a);
                }) : i();
              } catch (e) {
                sn.warn(e);
              } finally {
                r._localStream && !1 === e && emedia.stopTracks(r._localStream), r._remoteStream && emedia.stopTracks(r._remoteStream), r._remoteStream = null, t || r.onClose && r.onClose(), !0 === n && (sn.info("Webrtc close. but retry build. will onIceStateChange(failed). eg. emedia.config iceWaitBuildMillis", r._rtcId, r.__id), r.onIceStateChange && r.onIceStateChange("failed")), sn.warn("webrtc closed. closed:", r._rtcId, r.__id, r.closed);
              }
            }
          }
        }, {
          key: "addIceCandidate",
          value: function value(e) {
            var t = Ye()(e) ? e : [e];

            if (emedia && emedia.config && "function" == typeof emedia.config.reChanageCandidate) {
              for (var n = [], r = 0; r < t.length; r++) {
                e = t[r];
                var i = emedia.config.reChanageCandidate(e);
                i && (sn.info("Candidate rechanage. addons. it =", e, "->", i), Ye()(i) ? Array.prototype.push.apply(n, i) : n.push(i));
              }

              t = n;
            }

            this._addIceCandidate(t);
          }
        }, {
          key: "_addIceCandidate",
          value: function value(e) {
            var t = this;

            if (t._rtcPeerConnection) {
              sn.debug("Add ICE candidate: ", e, t._rtcId, t.__id, t.closed);
              var n = Ye()(e) ? e : [e];
              if (!t.__setRemoteSDP) return Array.prototype.push.apply(t.__tmpRemoteCands || (t.__tmpRemoteCands = {}), n), void sn.debug("Add ICE candidate but tmp buffer caused by not set remote sdp: ", e, t._rtcId, t.__id, t.closed);

              for (var r = 0; r < n.length; r++) {
                if ((e = n[r]).cctx && e.cctx != t.cctx) sn.warn("addIceCandidate fail drop. cctx not equal. ", e, t._rtcId, t.__id, t.closed);else {
                  if (!0 === t.fireFoxOfferVideoPreAudio) {
                    var i = e.sdpMLineIndex;
                    e.sdpMLineIndex = y()(e.sdpMid.replace(/[^0-9]*/, "")), sn.warn("Firefox sdp section video pre audio, sdp mline index update ", i, "->", e.sdpMLineIndex);
                  }

                  e.candidate && "" !== e.candidate ? t._rtcPeerConnection.addIceCandidate(new RTCIceCandidate(e)).then(t.onAddIceCandidateSuccess.bind(t), t._onAddIceCandidateError.bind(t, e)) : sn.warn("Add ICE candidate fail. drop it ", e, t._rtcId, t.__id, t.closed);
                }
              }
            }
          }
        }, {
          key: "setRemoteDescription",
          value: function value(e) {
            return this._setRemoteDescription(e);
          }
        }, {
          key: "_setRemoteDescription",
          value: function value(e) {
            var t = this;

            if (t.__iceWaitIntervalId && (clearTimeout(t.__iceWaitIntervalId), t.__iceWaitIntervalId = null, sn.info("emedia.config iceWaitBuildMillis, clear ice wait interval id", t._rtcId, t.__id)), sn.debug("setRemoteDescription start. ", t._rtcId, t.__id, t.closed), t.offerDescription) {
              if (e.cctx && e.cctx != t.cctx) return void sn.warn("setRemoteDescription fail drop. cctx not equal. ", e, t._rtcId, t.__id, t.closed);

              if (!0 === t.fireFoxOfferVideoPreAudio || !0 === t.__offerVideoPreAudio) {
                var n = new an(e.sdp, t);
                e.sdp = n.getUpdatedSDP(!1), sn.info("Remote sdp.2. switch audio video", e.sdp);
              }
            } else e.cctx && (t.cctx = e.cctx);

            return e.sdp = e.sdp.replace(/UDP\/TLS\/RTP\/SAVPF/g, "RTP/SAVPF"), sn.warn("setRemoteDescription. UDP/TLS/RTP/SAVPF -> RTP/SAVPF; if firefox: switch audio video;", t._rtcId, t.__id), (t.vbitrate || t.abitrate || t.vminBitrate) && (n = new an(e.sdp, t), t.vbitrate && n.setVideoBitrate(t.vbitrate), t.vminBitrate && n.setVideoMinBitrate(t.vminBitrate), t.abitrate && n.setAudioBitrate(t.abitrate), sn.warn("vbitrate = ", t.vbitrate, "vminBitrate = ", this.vminBitrate, ", abitrate = ", t.abitrate, t._rtcId, t.__id), e.sdp = n.getUpdatedSDP(void 0 === t.__offerVideoPreAudio || null === t.__offerVideoPreAudio ? void 0 : !t.__offerVideoPreAudio)), sn.debug("final remote sdp =", e.sdp, t._rtcId, t.__id), e = t.__remoteDescription = new RTCSessionDescription(e), t._rtcPeerConnection.setRemoteDescription(e).then(function () {
              t.__setRemoteSDP = !0, t._onSetRemoteSuccess.apply(t, arguments), t.__tmpLocalCands && t.__tmpLocalCands.length > 0 && (sn.debug("After setRemoteDescription. send cands", t._rtcId, t.__id, t.closed), t._onIceCandidate(t.__tmpLocalCands), t.__tmpLocalCands = []), t.__tmpRemoteCands && t.__tmpRemoteCands.length > 0 && (sn.debug("After setRemoteDescription. add tmp cands", t._rtcId, t.__id, t.closed), t._addIceCandidate(t.__tmpRemoteCands), t.__tmpRemoteCands = []);
            }, t._onSetSessionDescriptionError.bind(t, e));
          }
        }, {
          key: "iceConnectionState",
          value: function value() {
            return this._rtcPeerConnection.iceConnectionState;
          }
        }, {
          key: "isConnected",
          value: function value() {
            var e = this.lastIceConnectionState;
            return "connected" === e || "completed" === e;
          }
        }, {
          key: "_onGotRemoteStream",
          value: function value(e) {
            var t = this;
            t._remoteStream = e.stream || e.streams[0], t._remoteStream._rtcId = t._rtcId, t._remoteStream.__rtc_c_id = t.__id, sn.debug("On got remote stream", t._remoteStream ? t._remoteStream.id + "_" + t._remoteStream.active : "null", t._rtcId, t.__id), t._remoteStream && t._remoteStream.getTracks().forEach(function (e) {
              sn.debug("remote stream", t._remoteStream.id, " track =", e.enabled, e.id, e.kind, e.label, t._rtcId, t.__id);
            }), t.updateRemoteBySubArgs(), this.onGotRemoteStream(this._remoteStream, e), sn.debug("received remote stream, you will see the other.", t._rtcId, t.__id, this.closed);
          }
        }, {
          key: "_onSetRemoteSuccess",
          value: function value() {
            sn.info("onSetRemoteSuccess success", this._rtcId, this.__id), this.onSetRemoteSuccess.apply(this, arguments), this.offerDescription && this.__remoteDescription && this.__remoteDescription.sdp && this._onAnswerCodes(this.__remoteDescription.sdp);
          }
        }, {
          key: "_onAnswerCodes",
          value: function value(e) {
            var t = this,
                n = new an(e, this);

            if (n.videoSection) {
              var r = cn.parseRtpParameters(n.videoSection);
              if (!r.codecs || 0 === r.codecs.length) return void sn.info("not found any video codes. @ ", t._rtcId, t.__id);
              var i = [];
              r.codecs.forEach(function (e) {
                return i.push(e.name);
              }), t.finalVCodeChoices = i, t.onVCodeChoices && t.onVCodeChoices(i);
            }
          }
        }, {
          key: "onSetRemoteSuccess",
          value: function value() {}
        }, {
          key: "onAddIceCandidateSuccess",
          value: function value() {
            sn.debug("addIceCandidate success", this._rtcId, this.__id);
          }
        }, {
          key: "_onAddIceCandidateError",
          value: function value(e, t) {
            sn.error("failed to add ICE Candidate: " + t.toString(), ", error candidate:", e, this._rtcId, this.__id), this.onAddIceCandidateError(t);
          }
        }, {
          key: "onAddIceCandidateError",
          value: function value(e) {}
        }, {
          key: "_onIceCandidate",
          value: function value(e) {
            sn.debug("onIceCandidate:", e, this._rtcId, this.__id), this.onIceCandidate(e);
          }
        }, {
          key: "onIceCandidate",
          value: function value(e) {}
        }, {
          key: "onIceStateChange",
          value: function value(e) {
            sn.debug("onIceStateChange : ICE state ", e);
          }
        }, {
          key: "_onCreateSessionDescriptionError",
          value: function value(e, t) {
            sn.error("Failed to create session description: " + t.toString(), " offerOptionsOrSDPConstraints:", e, this._rtcId, this.__id), this.onCreateSessionDescriptionError(t);
          }
        }, {
          key: "onCreateSessionDescriptionError",
          value: function value(e) {}
        }, {
          key: "onCreateOfferSuccess",
          value: function value(e) {
            sn.debug("create offer success", this._rtcId, this.__id);
          }
        }, {
          key: "onCreatePRAnswerSuccess",
          value: function value(e) {
            sn.debug("create answer success", this._rtcId, this.__id);
          }
        }, {
          key: "onCreateAnswerSuccess",
          value: function value(e) {
            sn.debug("create answer success", this._rtcId, this.__id);
          }
        }, {
          key: "_onSetSessionDescriptionError",
          value: function value(e, t) {
            sn.error("onSetSessionDescriptionError : Failed to set session description: ", t.toString(), this._rtcId, this.__id), e && e.type && e.sdp && sn.error("error sdp: type=", e.type, "sdp=", e.sdp, this._rtcId, this.__id), this.onSetSessionDescriptionError(t);
          }
        }, {
          key: "onSetSessionDescriptionError",
          value: function value(e) {}
        }, {
          key: "_onSetLocalSessionDescriptionSuccess",
          value: function value() {
            var e = this;
            sn.debug("onSetLocalSessionDescriptionSuccess : setLocalDescription complete", this._rtcId, this.__id), emedia.config.iceWaitBuildMillis && (this.__iceWaitIntervalId && clearTimeout(this.__iceWaitIntervalId), this.__iceWaitIntervalId = setTimeout(function () {
              sn.info("emedia.config iceWaitBuildMillis, timeout, will close webrtc, will retry build by onIceStateChange(failed)", e._rtcId, e.__id), e.onIceStateChange && e.onIceStateChange("failed");
            }, emedia.config.iceWaitBuildMillis), sn.info("emedia.config iceWaitBuildMillis, start timeout", e._rtcId, e.__id)), this.onSetLocalSessionDescriptionSuccess(), this.__answerDescription && this.__answerDescription.sdp && this._onAnswerCodes(this.__answerDescription.sdp);
          }
        }, {
          key: "onSetLocalSessionDescriptionSuccess",
          value: function value() {}
        }, {
          key: "onGotRemoteStream",
          value: function value(e) {
            sn.debug("Got remote stream. ", e, this._rtcId, this.__id);
          }
        }, {
          key: "getStats",
          value: function value(e) {
            var t = this;
            return t._rtcPeerConnection ? "function" != typeof emedia.config.rtcStatsTypeMath ? (sn.warn("Get stats, but config rtcStatsTypeMather, ", this._rtcId, this.__id), void (e && e())) : void t._rtcPeerConnection.getStats(null).then(function (n) {
              n.forEach(function (e, n) {
                emedia.config.rtcStatsTypeMath(e, n) && sn.info("Rtc stats", e, t._rtcId, t.__id);
              }), e && e(n);
            }) : (sn.warn("Get stats, but peer connection not exsits, ", this._rtcId, this.__id), void (e && e()));
          }
        }]), e;
      }();

      var fn = n(7750),
          ln = Je("Member");

      var pn = function () {
        function e(t) {
          for (var n in s(this, e), f(this, "closed", !1), f(this, "_ices", {}), f(this, "supportVCodes", {}), f(this, "audioMixers", {}), t) {
            this[n] = t[n];
          }

          if (this.evtHandler = new Qt(this), !this.sessionFactory) throw ln.error("Require session"), "Require session";
          this._session = this.sessionFactory(this);
        }

        return d(e, [{
          key: "onEvent",
          value: function value() {
            var e;
            (e = this.evtHandler).onEvent.apply(e, arguments);
          }
        }, {
          key: "reflushSupportVCodes",
          value: function value(e) {
            var t = this;
            this.supportVCodes = {}, this._orderVCodes = e, e && 0 != e.length ? e.forEach(function (e) {
              return t.supportVCodes[e] = 1;
            }) : ln.warn("Not config support vcodes");
          }
        }, {
          key: "getOptimalVideoCodecs",
          value: function value() {
            if (!this._orderVCodes || 0 == this._orderVCodes.length) return /Chrome/.test(navigator.userAgent) ? "VP8" : /Safari/.test(navigator.userAgent) ? "H264" : "VP8";

            for (var e, t = this._cacheMembers.length, n = 0, r = 0; r < this._orderVCodes.length; r++) {
              var i = this._orderVCodes[r];
              if (0 == n && (n = this.supportVCodes[i]), this.supportVCodes[i] > t) return i;
              this.supportVCodes[i] > n && (n = this.supportVCodes[i], e = i);
            }

            return e;
          }
        }, {
          key: "setMemberId",
          value: function value(e) {
            this._memberId = e;
          }
        }, {
          key: "getMemberId",
          value: function value() {
            return this._memberId || this.id;
          }
        }, {
          key: "createWebrtc",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = this;
            e._rebuildCount = t, !0 === this._service.useRTCCfg && this.__rtc_cfg ? e.iceServerConfig = fn.cloneDeep(this.__rtc_cfg) : fn.isPlainObject(this._service.useRTCCfg) && (e.iceServerConfig = fn.cloneDeep(this._service.useRTCCfg));
            var r = new dn({
              confrAttendee: this,
              useIp: this.ip,
              onIceStateChange: function onIceStateChange(e) {
                var t = e;
                ln.debug("evt.target ice state", t);

                try {
                  if ("failed" == t) return n.onEvent(new Wt.ICEConnectFail({
                    webrtc: r
                  })), void (r.onEvent && r.onEvent(new Wt.ICEConnectFail({
                    webrtc: r
                  })));
                  if ("connected" == t) return n.onEvent(new Wt.ICEConnected({
                    webrtc: r
                  })), void (r.onEvent = null);
                  if ("closed" == t) return n.onEvent(new Wt.ICEClosed({
                    webrtc: r
                  })), void (r.onEvent && r.onEvent(new Wt.ICEClosed({
                    webrtc: r
                  })));
                  if ("disconnected" == t) return n.onEvent(new Wt.ICEDisconnected({
                    webrtc: r
                  })), void (r.onEvent && r.onEvent(new Wt.ICEDisconnected({
                    webrtc: r
                  })));
                } finally {
                  n._onIceStateChange && n._onIceStateChange(r, e);
                }
              },
              onIceCandidate: function onIceCandidate(e) {
                n._onIceCandidate && e && n._onIceCandidate(r, e);
              },
              onGotRemoteStream: function onGotRemoteStream(e) {
                ln.info("got stream.", r._rtcId, r.__id, e), r.onGotMediaStream && r.onGotMediaStream(e), n.onEvent(new Wt.ICERemoteMediaStream({
                  webrtc: r
                }));
              },
              onAddIceCandidateError: function onAddIceCandidateError(e) {
                n.onEvent(new Wt.AddIceCandError({
                  webrtc: r,
                  event: e
                }));
              },
              onSetSessionDescriptionError: function onSetSessionDescriptionError(e) {
                ln.warn("onSetSessionDescriptionError : Failed to set session description: " + e.toString()), n.onEvent && n.onEvent(new Wt.ICEConnectFail({
                  webrtc: r,
                  event: e
                }));
              },
              onCreateSessionDescriptionError: function onCreateSessionDescriptionError(e) {
                ln.warn("Failed to create session description: " + e.toString()), n.onEvent && n.onEvent(new Wt.ICEConnectFail({
                  webrtc: r,
                  event: e
                }));
              }
            }, e);
            return this._ices || (this._ices = {}), this._ices[r.getRtcId()] && this._howDoWebrtcWhenCrtExsitsWebrtc(r), this._ices[r.getRtcId()] = r, this._ices[r.__id] = r, this._iceCreateRtcPeerConnection(r.getRtcId()), ln.debug("create rtc ", r), r;
          }
        }, {
          key: "_howDoWebrtcWhenCrtExsitsWebrtc",
          value: function value(e) {
            this.closeWebrtc(e.getRtcId(), !0, !1);
          }
        }, {
          key: "connect",
          value: function value(e, t) {
            this._session.connect(e, t);
          }
        }, {
          key: "connected",
          value: function value() {
            return this._session.connected();
          }
        }, {
          key: "newMessage",
          value: function value(e) {
            var t = this,
                n = this._session.newMessage(e);

            return n.post = function (e, n) {
              t.postMessage(this, e, n);
            }, n;
          }
        }, {
          key: "message",
          value: function value(e) {
            var t = this,
                n = this._session.newMessage(e);

            return n.post = function (e, n) {
              t.postMessage(this, e, n);
            }, n;
          }
        }, {
          key: "postMessage",
          value: function value(e, t, n) {
            try {
              e.sessId || (e.sessId = this._session._sessionId), this._session.postMessage(e, t, n);
            } catch (n) {
              t && t({
                op: 1001,
                tsxId: e.tsxId,
                result: -9527,
                msg: "post message. exception"
              }), ln.warn(n);
            }
          }
        }, {
          key: "_onIceStateChange",
          value: function value(e, t) {
            ln.info(e.getRtcId(), t), this.onEvent(new Wt.ICEChanage({
              webrtc: e,
              state: t
            }));
          }
        }, {
          key: "_onIceCandidate",
          value: function value(e, t) {
            var n,
                r = this;
            Ye()(t) ? n = t : (n = []).push(t);
            var i = this.newMessage().setOp(105).setRtcId(e.getRtcId()).setCands(n);
            this.postMessage(i, function (e) {
              0 != e.result && r.onEvent(new Wt.RspFail({
                request: i,
                response: e
              }));
            });
          }
        }, {
          key: "_initC",
          value: function value(e, t, n, r, i, o) {
            var a = this;
            if (t && t.rtcId !== e.getRtcId()) throw ln.error("stream and webrtc rtcId not equal."), "stream and webrtc rtcId not equal.";
            var s = this.newMessage().setOp(102).setRtcId(e.getRtcId()).setSdp(n).setSubSId(r);
            e.subArgs && p()(s, e.subArgs), null != t && t.located() && s.setPubS(t), this.postMessage(s, function (n) {
              if (0 != n.result) return a.onEvent(new Wt.RspFail({
                request: s,
                response: n
              })), void (i && i(new Wt.RspFail({
                request: s,
                response: n,
                hidden: !0 === n.retrying
              })));
              t && !t.id && n.streamId && t.updateAttributes({
                id: n.streamId
              });

              try {
                o && o();
              } catch (e) {
                ln.warn(e);
              }

              n.sdp && a.ansC(e.getRtcId(), n.sdp, n.cands), n.mems && (null == a || a.onMembers(n.cver, n.mems)), n.streams && (null == a || a.onStreams(n.cver, n.streams));
            });
          }
        }, {
          key: "_acptC",
          value: function value(e, t, n) {
            var r = this,
                i = this.newMessage().setOp(104).setRtcId(e.getRtcId()).setSdp(t);
            this.postMessage(i, function (e) {
              0 != e.result && (r.onEvent(new Wt.RspFail({
                request: i,
                response: e
              })), n && n(new Wt.RspFail({
                request: i,
                response: e
              })));
            });
          }
        }, {
          key: "_ansCAndPubstream",
          value: function value(e, t, n, r, i) {
            var o = this,
                a = this.newMessage().setOp(106).setRtcId(e.getRtcId()).setSdp(n);
            e.subArgs && p()(a, e.subArgs), null != t && t.located() && (ct(t, "mutedMuted"), ct(t, "_located"), a.setPubS(t)), this.postMessage(a, function (e) {
              if (0 != e.result) return o.onEvent(new Wt.RspFail({
                request: a,
                response: e
              })), void (r && r(new Wt.RspFail({
                request: a,
                response: e,
                hidden: !0 === e.retrying
              })));
              t && !t.id && e.streamId && t.updateAttributes({
                id: e.streamId
              });

              try {
                i && i();
              } catch (e) {
                ln.warn(e);
              }
            });
          }
        }, {
          key: "_ansC",
          value: function value(e, t, n) {
            var r = this,
                i = this.newMessage().setOp(106).setRtcId(e.getRtcId()).setSdp(t);
            this.postMessage(i, function (e) {
              if (0 != e.result) return r.onEvent(new Wt.RspFail({
                request: i,
                response: e
              })), void (n && n(new Wt.RspFail({
                request: i,
                response: e
              })));
            });
          }
        }, {
          key: "_termC",
          value: function value(e, t, n) {
            var r = this,
                i = "string" == typeof e ? e : e.getRtcId(),
                o = this.newMessage().setOp(107).setRtcId(i).setEndReason(t);
            this.postMessage(o, function (e) {
              0 != e.result && (r.onEvent(new Wt.RspFail({
                request: o,
                response: e
              })), n && n(new Wt.RspFail({
                request: o,
                response: e
              })));
            });
          }
        }, {
          key: "_iceCreateRtcPeerConnection",
          value: function value(e) {
            this._ices[e].createRtcPeerConnection(), ln.debug("create rtc peer connection", e);
          }
        }, {
          key: "doOffer",
          value: function value(e, t) {
            this._ices[e].createOffer(function (e) {
              return t(e);
            });
          }
        }, {
          key: "offerCall",
          value: function value(e, t, n, r, i) {
            var o = this,
                a = this._ices[e];
            a.createOffer(function (e) {
              return o._initC && o._initC(a, t, e, n, r, i);
            });
          }
        }, {
          key: "accept",
          value: function value(e, t) {
            var n = this,
                r = this._ices[e];
            r.createPRAnswer(function (e) {
              return null == n ? void 0 : n._acptC(r, e, t);
            });
          }
        }, {
          key: "answerCall",
          value: function value(e, t, n, r) {
            var i = this,
                o = this._ices[e];
            o.createAnswer(function (e) {
              return null == i ? void 0 : i._ansCAndPubstream(o, t, e, n, r);
            });
          }
        }, {
          key: "answer",
          value: function value(e, t) {
            var n = this,
                r = this._ices[e];
            r.createAnswer(function (e) {
              return null == n ? void 0 : n._ansC(r, e, t);
            });
          }
        }, {
          key: "onTcklC",
          value: function value(e, t) {
            this._addIceCandidate(t, e);
          }
        }, {
          key: "onAcptC",
          value: function value(e, t, n) {
            this._iceSetRemoteSDP(t, e), n && this._addIceCandidate(n, e);
          }
        }, {
          key: "onAnsC",
          value: function value(e, t, n) {
            this._iceSetRemoteSDP(t, e), n && this._addIceCandidate(n, e);
          }
        }, {
          key: "_addIceCandidate",
          value: function value(e, t) {
            if (e && 0 != e.length) {
              var n = this._ices[t];
              n && n.addIceCandidate(e);
            } else ln.warn("drop cands", e);
          }
        }, {
          key: "closeWebrtc",
          value: function value(e, t, n) {
            var r = this,
                i = this._ices[e];
            if (ut(this._cacheStreams, function (t, n) {
              if (n.rtcId === e && !n.located()) try {
                var i = ct(r._mediaMeters, t);
                i && i._finally();
              } catch (e) {
                ln.warn(e);
              }
              n.rtcId === e && 2 === n.type && ct(r.audioMixers, n.id);
            }), !i || i.closed) return ln.warn("Webrtc not exsits or closed", i && i.closed), n && i && ut(this._cacheStreams, function (t, n) {
              n.rtcId === e && (ct(r._linkedStreams, t), ln.warn("Webrtc close, remvoe from _linkedStreams", t));
            }), void (n || this._termC(e, 0));
            this._records && ut(this._records, function (t, n) {
              n.rtcId === e && function (e) {
                try {
                  this.stopRecord(e);
                } catch (e) {
                  ln.warn(e);
                } finally {
                  ct(this._records, e.id);
                }
              }(n);
            });

            try {
              n || i && this._termC(i, t && i._localStream ? -10 : 0);
            } finally {
              i && i.close(t), i && this.onWebrtcTermC && this.onWebrtcTermC(i), t || i && ut(this._cacheStreams, function (t, i) {
                i.rtcId === e && (i.located() && (emedia.stopTracks(i._localMediaStream), i && !i.closeReason && i.updateAttributes({
                  closeReason: "WebrtcClose"
                }), r._cacheStreams[t] && r._linkedStreams[t] && r.onRemoveStream(i), ct(r._cacheStreams, t), r._streamAutomators && ct(r._streamAutomators, t), r._monitSoundChanagedStreams && ct(r._monitSoundChanagedStreams, t), ln.info("Webrtc close. Remove stream", t, ". from cache")), n && (ct(r._linkedStreams, t), ln.info("Webrtc close. Remove stream", t, ". from _linkedStreams")));
              });
            }

            return i;
          }
        }, {
          key: "__close",
          value: function value(e) {
            if (ln.warn("closing, reason = ", e), !this.closed) {
              if (this.closed = !0, this.__getCopyInterval && (clearInterval(this.__getCopyInterval), ln.warn("Stop interval get copy")), this._ices) for (var t in this._ices) {
                this.closeWebrtc(t, !1);
              }
              var n = this.newMessage().setOp(201).setReason(e || 0);
              this.postMessage(n);
            }
          }
        }, {
          key: "exit",
          value: function value(e) {
            var t = this;
            e ? (e && this._closeMyConfr(11), setTimeout(function () {
              return t.close(0);
            }, 100)) : this.close(0);
          }
        }, {
          key: "_closeMyConfr",
          value: function value(e) {
            var t = this.newMessage().setOp(204).setReason(e || 0);
            this.postMessage(t, function (e) {
              return ln.warn("Close confr ", e.result, e.msg);
            });
          }
        }, {
          key: "close",
          value: function value(e, t) {
            var n = this;
            if (!this.closed) try {
              ut(this._cacheStreams || {}, function (e, t) {
                t.located() && t._localMediaStream && emedia.stopTracks(t._localMediaStream);
              }), this.__close(e), ut(this._cacheStreams, function (e, t) {
                n.onRemoveStream(t);
              }), ut(this._cacheMembers, function (e, t) {
                n.onRemoveMember(t);
              });
            } finally {
              try {
                setTimeout(function () {
                  return null == n ? void 0 : n._session.close(e);
                }, 500), this.onEvent(new Wt.Hangup({
                  reason: e,
                  failed: t,
                  this: {
                    id: this._memberId
                  }
                })), null == this || this.onMeExit(e, t);
              } catch (e) {
                ln.error(e);
              } finally {
                this._onFinally && this._onFinally();
              }
            }
          }
        }, {
          key: "webrtcState",
          value: function value(e) {
            return this._ices[e].iceConnectionState();
          }
        }, {
          key: "_iceSetRemoteSDP",
          value: function value(e, t) {
            this._ices[t].setRemoteDescription(e);
          }
        }, {
          key: "setLocalStream",
          value: function value(e, t) {
            this._ices[t].setLocalStream(e);
          }
        }, {
          key: "onWebrtcTermC",
          value: function value(e) {}
        }]), e;
      }();

      var hn = n(7750);
      var vn = Je("Me");

      var mn = function (e) {
        Mt(i, e);
        var t,
            n,
            r = (t = i, n = function () {
          if ("undefined" == typeof Reflect || !It()) return !1;
          if (It().sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Boolean.prototype.valueOf.call(It()(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }(), function () {
          var e,
              r = jt(t);

          if (n) {
            var i = jt(this).constructor;
            e = It()(r, arguments, i);
          } else e = r.apply(this, arguments);

          return At(this, e);
        });

        function i(e) {
          var t;
          s(this, i);
          var n = Pt(t = r.call(this, e)),
              o = e.listeners;
          if (n._session || n.sessionFactory && (n._session = n.sessionFactory()), !n._session) throw vn.error("Require session"), "Require session";
          return n._cver = 0, n._cacheMembers = {}, n._cacheStreams = {}, n._streamAutomators = {}, n._mediaMeters = {}, n._openedRtcMediaStreams = {}, n._linkedStreams = {}, n._maybeNotExistStreams = {}, n._records = {}, n._ices = {}, n.audioMixers = {}, n.closed = !1, n._nextStreamSeqno = 0, n.getMediaMeterIntervalMillis = n.getMediaMeterIntervalMillis || emedia.config.getMediaMeterIntervalMillis, t.registerListeners(o), t;
        }

        return d(i, [{
          key: "registerListeners",
          value: function value(e) {
            for (var t in e) {
              this[t] = e[t];
            }
          }
        }, {
          key: "getCurrentMembers",
          value: function value() {
            var e = [];
            return ut(this._cacheMembers, function (t, n) {
              var r = hn.cloneDeep(n);
              e.push(r);
            }), e;
          }
        }, {
          key: "newStream",
          value: function value(e) {
            var t = this;
            return new Xt(e, {
              __init__: function __init__() {
                var e = this;
                if (e.rtcId || e._webrtc && (e.rtcId = e._webrtc.getRtcId()), e._webrtc || e.rtcId && (e._webrtc = t._ices[e.rtcId]), e.__create_id = t._nextStreamSeqno++, e.memId && !e.owner && (e.owner = p()({}, t._cacheMembers[e.memId]), !e.owner && !e.located())) throw vn.error("Remote stream, not owner. it = ", e.id), "Remote stream, not owner. it = " + e.id;
              }
            });
          }
        }, {
          key: "getConfrId",
          value: function value() {
            return this.ticket.confrId;
          }
        }, {
          key: "isCaller",
          value: function value() {
            var e = this;
            return e.isP2P() && e.ticket.caller == e.ticket.memName;
          }
        }, {
          key: "isCallee",
          value: function value() {
            var e = this;
            return e.isP2P() && e.ticket.callee == e.ticket.memName;
          }
        }, {
          key: "isP2P",
          value: function value() {
            var e = this;
            return e.ticket && ("P2P" == e.ticket.type || "p2p" == e.ticket.type);
          }
        }, {
          key: "isConfr",
          value: function value() {
            var e = this;
            return e.ticket && ("CONFR" == e.ticket.type || "confr" == e.ticket.type);
          }
        }, {
          key: "join",
          value: function value(e, t) {
            this._join(e, t);
          }
        }, {
          key: "_join",
          value: function value(e, t) {
            vn.debug("begin join ...");
            var n,
                r = this;
            if (r._memberId) return vn.warn("Had joined. igrone it"), void (e && e(r.memId));

            function i(e) {
              try {
                if (e instanceof Wt.WSClose && e.retry) return;
                e instanceof Wt.EnterFail || (e = new Wt.EnterFail({
                  attendee: r,
                  cause: e
                })), r.onEvent(e), t && t(e);
              } finally {}
            }

            function o(t) {
              if (0 == t.result) {
                r.reflushSupportVCodes(t.vcodes), r.setMemberId(t.memId), r.role = t.role, r.onEvent(new Wt.EnterSuccess({
                  ip: r.ip
                })), e && e(t.memId);

                try {
                  r.__rtc_cfg = t.rtcCfg, "string" == typeof t.rtcCfg && (r.__rtc_cfg = JSON.parse(t.rtcCfg));
                } finally {
                  r.onMembers(t.cver, t.mems), r.onStreams(t.cver, t.streams);
                }
              } else try {
                i(new Wt.RspFail({
                  request: n,
                  response: t
                }));
              } finally {
                -9527 !== t.result && r.onEvent(new Wt.ServerRefuseEnter({
                  failed: t.result,
                  msg: t.msg
                }));
              }
            }

            r.connect(function () {
              n = r.newMessage().setOp(200).setTicket(r.ticket).setNickName(r.nickName || r.ticket.memName).setResource(r.resource).setExt(r.ext), r.postMessage(n, o);
            }, i), vn.debug("join", r.ticket.url);
          }
        }, {
          key: "withpublish",
          value: function value(e) {
            var t,
                n = this;
            if (!e || !e.localStream) throw vn.error("pubS null or stream not open"), "pubS null or stream not open";
            var r,
                i = e && e.localStream;
            return {
              join: function join(o, a) {
                if (1 === arguments.length && (a = o, o = void 0), n._memberId) return vn.warn("Had joined. igrone it"), void (o && o(n.memId));

                function s(e) {
                  try {
                    if (e instanceof Wt.WSClose && e.retry) return;
                    e instanceof Wt.EnterFail || (e = new Wt.EnterFail({
                      attendee: n,
                      cause: e
                    })), n.onEvent(e), a && a(e);
                  } finally {
                    emedia.stopTracks(i), r && n.closeWebrtc(r.getRtcId());
                  }
                }

                var c = n.getOptimalVideoCodecs();

                function u(i) {
                  if (0 == i.result) {
                    n.reflushSupportVCodes(i.vcodes), n.setMemberId(i.memId), n.role = i.role, n.onEvent(new Wt.EnterSuccess({
                      ip: n.ip
                    }));
                    var a = n.newStream(e);
                    a.updateAttributes({
                      _localMediaStream: e.localStream,
                      rtcId: r.getRtcId(),
                      _webrtc: r,
                      id: i.streamId,
                      csrc: i.csrc,
                      owner: {
                        id: i.memId,
                        nickName: n.nickName,
                        name: n.sysUserId,
                        ext: n.extObj
                      },
                      optimalVideoCodecs: c
                    }), o && o(i.memId, a), r.useIp = n.ip, n.onEvent(new Wt.PushSuccess({
                      stream: a,
                      hidden: !0
                    })), i.sdp && n.ansC(r.getRtcId(), i.sdp), i.cands && n.tcklC(r.getRtcId(), i.cands);

                    try {
                      n.__rtc_cfg = i.rtcCfg, "string" == typeof i.rtcCfg && (n.__rtc_cfg = JSON.parse(i.rtcCfg)), n.__rtc_cfg && n.__rtc_cfg.iceServers && n.__rtc_cfg.iceServers.length > 0 && (vn.warn("Server rsp one rtc cfg. publish will republish"), n._service && setTimeout(function () {
                        n._service._republish(a);
                      }, 200));
                    } finally {
                      n.onMembers(i.cver, i.mems), n.onStreams(i.cver, i.streams);
                    }
                  } else try {
                    s(new Wt.RspFail({
                      request: t,
                      response: i
                    }));
                  } finally {
                    -9527 !== i.result && n.onEvent(new Wt.ServerRefuseEnter({
                      failed: i.result,
                      msg: i.msg
                    }));
                  }
                }

                function d() {
                  vn.debug("enter and pubs");
                  var i,
                      o,
                      a = e.localStream;
                  2 === e.type && (i = {
                    offerToReceiveAudio: !0,
                    offerToReceiveVideo: !1
                  }, o = {
                    subSVideo: !1,
                    subSAudio: !0
                  }), r = n.createWebrtc({
                    _rtcId: e.rtcId,
                    optimalVideoCodecs: c,
                    offerOptions: i,
                    subArgs: o,
                    vbitrate: e.vbitrate || e.constaints && e.constaints.video && e.constaints.video.bitrate,
                    abitrate: e.abitrate || e.constaints && e.constaints.audio && e.constaints.audio.bitrate
                  }, e.iceRebuildCount), n.setLocalStream(a, r.getRtcId()), n.doOffer(r.getRtcId(), function (i) {
                    t = n.newMessage().setOp(200).setTicket(n.ticket).setNickName(n.nickName || n.ticket.memName).setResource(n.resource).setSdp(i).setRtcId(r.getRtcId()).setPubS(e).setExt(n.ext), n.postMessage(t, u);
                  });
                }

                n.connect(d, s), vn.debug("join", n.ticket.url);
              }
            };
          }
        }, {
          key: "push",
          value: function value(e, t, n, r) {
            vn.debug("begin push ...");
            var i,
                o = this;
            if (2 === arguments.length && (n = t, t = void 0), !e || !e.localStream) throw vn.error("pubS or stream open"), "pubS or stream open";
            var a,
                s = e.localStream;

            function c(t) {
              try {
                var i = o.newStream(e);
                i.updateAttributes({
                  _localMediaStream: e.localStream,
                  _webrtc: a,
                  rtcId: a && a.getRtcId(),
                  owner: {
                    id: o.getMemberId(),
                    nickName: o.nickName,
                    name: o.sysUserId,
                    ext: o.extObj
                  }
                }), t = new Wt.PushFail({
                  stream: i,
                  cause: t,
                  hidden: r && !0 === t.hidden
                }), o.onEvent(t), t.hidden || n && n(t);
              } finally {
                s && !0 !== t.hidden && emedia.stopTracks(s), a && o.closeWebrtc(a.getRtcId(), !0 === t.hidden);
              }
            }

            if (e.rtcId || 2 !== e.type || emedia.config.allowRepeatAudioMixerPublish || !o._service.hasAudioMixers()) {
              var u = e.optimalVideoCodecs || o.getOptimalVideoCodecs();
              f(e), vn.debug("push", o.ticket.url);
            } else c(new Wt.AudioMixerStreamRepeatPublish());

            function d(n, r) {
              if (0 == r.result) {
                var a = o.newStream(e);
                a.updateAttributes({
                  _localMediaStream: e.localStream,
                  _webrtc: n,
                  rtcId: n.getRtcId(),
                  id: r.streamId,
                  csrc: r.csrc,
                  owner: {
                    id: o.getMemberId(),
                    nickName: o.nickName,
                    name: o.sysUserId,
                    ext: o.extObj
                  },
                  optimalVideoCodecs: u
                }), a.id && 2 === a.type && (o.audioMixers[a.id] = a);

                try {
                  o.onEvent(new Wt.PushSuccess({
                    stream: a,
                    hidden: !0
                  }));
                } finally {
                  r.sdp && o.ansC(n.getRtcId(), r.sdp), r.cands && o.tcklC(n.getRtcId(), r.cands), t && t(a);
                }
              } else c(new Wt.RspFail({
                request: i,
                response: r,
                hidden: !0 === r.retrying
              }));
            }

            function f(e) {
              vn.debug("pubs");
              var t,
                  n,
                  r = e.localStream;
              2 === e.type && (t = {
                offerToReceiveAudio: !0,
                offerToReceiveVideo: !1
              }, n = {
                subSVideo: !1,
                subSAudio: !0
              }), a = o.createWebrtc({
                _rtcId: e.rtcId,
                optimalVideoCodecs: u,
                offerOptions: t,
                subArgs: n,
                vbitrate: e.vbitrate || e.constaints && e.constaints.video && e.constaints.video.bitrate,
                abitrate: e.abitrate || e.constaints && e.constaints.audio && e.constaints.audio.bitrate
              }, e.iceRebuildCount), o.setLocalStream(r, a.getRtcId()), o.doOffer(a.getRtcId(), function (t) {
                i = o.newMessage().setOp(102).setRtcId(a.getRtcId()).setSdp(t).setPubS(e), o.postMessage(i, function (e) {
                  d(a, e);
                });
              });
            }
          }
        }, {
          key: "someBrowsersRequireGetUserMedia",
          value: function value(e, t) {
            var n = this;

            if (function () {
              if (Oe) {
                var e = new RegExp("(Version)/([0-9.]+)", "i"),
                    t = navigator.userAgent.match(e);

                if (null != t) {
                  var n = unescape(t[2]);
                  return (n = y()(n)) < 13;
                }
              }

              return !1;
            }() && !emedia._yetGetUserMedia) {
              if (!0 === n.__tryingOpenMedia) n.__tryingOpenMediaWaitSuceess = n.__tryingOpenMediaWaitSuceess || [], n.__tryingOpenMediaWaitFail = n.__tryingOpenMediaWaitFail || [], "function" == typeof e && n.__tryingOpenMediaWaitSuceess.push(e), "function" == typeof t && n.__tryingOpenMediaWaitFail.push(t);else {
                var r = function r(t, _r13) {
                  emedia._yetGetUserMedia = !0, emedia.stopTracks(_r13), setTimeout(function () {
                    n.__tryingOpenMedia = !1, e && e.apply(n), n.__tryingOpenMediaWaitSuceess && ut(n.__tryingOpenMediaWaitSuceess, function (e, t) {
                      t.apply(n);
                    }), n.__tryingOpenMediaWaitSuceess = [], n.__tryingOpenMediaWaitFail = [];
                  }, 300);
                },
                    i = function i(e) {
                  n.__tryingOpenMedia = !1, vn.error("Some browsers must getUserMedia, gather cands. now try get audio. fail. subfail"), t && t.call(n, e), n.__tryingOpenMediaWaitFail && ut(n.__tryingOpenMediaWaitFail, function (t, r) {
                    r.call(n, e);
                  }), n.__tryingOpenMediaWaitSuceess = [], n.__tryingOpenMediaWaitFail = [];
                };

                n.__tryingOpenMedia = !0, n._service.__getUserMedia({
                  audio: !0
                }, r, function (e) {
                  n._service.__getUserMedia({
                    video: !0
                  }, r, i);
                });
              }
              return !0;
            }

            return !1;
          }
        }, {
          key: "createWebrtcAndSubscribeStream",
          value: function value(e, t, n, r) {
            var i = this;
            t || (t = {});
            var o = i._cacheStreams[e],
                a = i._cacheMembers[o.memId],
                s = o;

            function c(n) {
              vn.warn("sub stream error", e, n), v && s._webrtc && s._webrtc.setSubArgs(v), v && s.updateAttributes({
                subArgs: v
              }), n = new Wt.SubFail({
                stream: s,
                hidden: !0 === n.hidden,
                cause: n
              }), t && t.onEvent && t.onEvent(n), i.onEvent && i.onEvent(n);
            }

            function u() {
              s.updateAttributes(s.subArgs);
            }

            r = r || s.subArgs || {
              subSVideo: !0,
              subSAudio: 2 !== o.type
            };

            var d = o.vcodes || [],
                f = a && a.vcodes || [],
                l = i.supportVCodes,
                h = i._getOptimalVideoCodecsSubset(d, f, l);

            r = r || s.subArgs;
            var v = s.subArgs,
                m = !(s.vcodes && s.vcodes.length > 0);
            Oe && (m = m || !!s.voff);
            var g = {
              offerToReceiveAudio: !0,
              offerToReceiveVideo: r.subSVideo && !m
            };

            function _() {
              var o = i.createWebrtc({
                iceServerConfig: n,
                optimalVideoCodecs: h,
                offerOptions: g,
                onGotMediaStream: function onGotMediaStream(e) {
                  t.onGotRemote && t.onGotRemote(s);
                }
              }, s.iceRebuildCount),
                  c = o.getRtcId();
              vn.warn(c, " sub stream ", e, h), s.updateAttributes({
                _webrtc: o,
                rtcId: c,
                owner: p()({}, a)
              }), r && s._webrtc && s._webrtc.setSubArgs(r), r && s.updateAttributes({
                subArgs: r
              });
            }

            g.offerToReceiveAudio || g.offerToReceiveVideo || vn.warn("offerToReceiveAudio == false and offerToReceiveVideo == false"), i.someBrowsersRequireGetUserMedia(function () {
              _(), i.offerCall(s.rtcId, null, e, c, u);
            }, function (t) {
              vn.error("Some browsers must getUserMedia, gather cands. now try get audio. fail. subfail", e), c(t);
            }) || (_(), i.offerCall(s.rtcId, null, e, c, u));
          }
        }, {
          key: "_getOptimalVideoCodecsSubset",
          value: function value(e, t, n) {
            var r = this,
                i = [];
            if (e && e.length > 0 && n[e[0]] && i.push(e[0]), 0 == i.length) for (var o = 0; o < r._orderVCodes.length; o++) {
              ut(t, function (e, t) {
                t == r._orderVCodes[o] && i.push(t);
              });
            }
            return i;
          }
        }, {
          key: "subscribeStream",
          value: function value(e, t, n, r, i) {
            var o = this,
                a = o._ices[e],
                s = o._cacheStreams[t],
                c = o._cacheMembers[s.memId],
                u = s;
            u.updateAttributes({
              _webrtc: a,
              rtcId: e,
              owner: p()({}, c)
            });
            var d = u.subArgs;

            if (r = r || {
              subSVideo: !0,
              subSAudio: !0
            }, u.updateAttributes({
              subArgs: u.subArgs || {
                subSVideo: !0,
                subSAudio: !0
              }
            }), u._webrtc && u._webrtc.setSubArgs(u._webrtc.subArgs || {
              subSVideo: !0,
              subSAudio: !0
            }), !u.subArgs.subSVideo && r.subSVideo && !u.voff) {
              var f = s.vcodes,
                  l = c.vcodes,
                  h = o.supportVCodes;

              o._getOptimalVideoCodecsSubset(f, l, h);
            }

            r && u._webrtc && u._webrtc.setSubArgs(r), r && u.updateAttributes({
              subArgs: r
            });
            var v = o.newMessage().setOp(205).setRtcId(e).setSubSId(t);
            r && p()(v, r), o.postMessage(v, function (e) {
              if (0 != e.result) {
                d && u._webrtc && u._webrtc.setSubArgs(d), d && u.updateAttributes({
                  subArgs: d
                });
                var t = new Wt.SubFail({
                  stream: u,
                  cause: new Wt.RspFail({
                    request: v,
                    response: e
                  })
                });
                return n && n(t), void o.onEvent(t);
              }

              u.updateAttributes(u.subArgs), t = new Wt.SubSuccess({
                stream: u,
                hidden: !0
              }), o._updateRemoteStream(u, u._webrtc.getRemoteStream()), o.onEvent(t), "function" == typeof i && i();
            });
          }
        }, {
          key: "unsubscribeStream",
          value: function value(e) {
            var t = this,
                n = t._cacheStreams[e],
                r = n._webrtc && n._webrtc.getRtcId();

            if (r) {
              try {
                var i = t.newMessage().setOp(206).setRtcId(r).setSubSId(e);
                t.postMessage(i);
              } finally {
                t.closeWebrtc(r);
              }

              return r;
            }
          }
        }, {
          key: "onEnter",
          value: function value(e, t) {
            var n = this;

            if (e && (n._cver = e), t && !n._cacheMembers[t.id]) {
              n._cacheMembers[t.id] = t;
              var r = {};
              t.res && t.res.vcodes && t.res.vcodes.length > 0 && ut(t.res.vcodes, function (e, t) {
                r[t] || (r[t] = !0, n.supportVCodes[t] && n.supportVCodes[t]++);
              }), n.onAddMember(p()({}, t));
            }
          }
        }, {
          key: "_onFinally",
          value: function value() {
            var e = this;
            e._cacheMembers = {}, e._cacheStreams = {}, e._linkedStreams = {}, e._ices = {}, e._maybeNotExistStreams = {};
            var t = [];
            if (ut(e._openedRtcMediaStreams, function (e, n) {
              !1 !== n.active && t.push(n);
            }), t.length > 0) for (var n = 0; n < t.length; n++) {
              try {
                var r = t[n];
                vn.info("exit, close stream = ", r.id), emedia.stopTracks(r);
              } catch (e) {
                vn.error(e);
              }
            }
            vn.warn("finally. all clean.");
          }
        }, {
          key: "_onRoleUpdate",
          value: function value(e, t) {
            var n = this;
            vn.info("Role ", e, " <-", n.role), vn.info(t), n.role = e, n.roleToken = t, n.onRoleUpdate && n.onRoleUpdate(e, t);
          }
        }, {
          key: "onExit",
          value: function value(e, t, n) {
            var r = this;

            if (e && (r._cver = e), t != r.getMemberId()) {
              var i = r._cacheMembers[t];
              i && (i.res && i.res.vcodes && i.res.vcodes.length > 0 && ut(i.res.vcodes, function (e, t) {
                r.supportVCodes[t]--;
              }), r._onRemoveMember(i, n), r.onEvent(new Wt.Hangup({
                reason: n,
                parnter: i
              })));
            } else {
              vn.warn("Me exit. ", n, t);

              try {
                r.closed || r.close(n);
              } catch (e) {
                r.onEvent(new Wt.Hangup({
                  reason: n,
                  self: {
                    id: r._memberId
                  }
                })), r.onMeExit && r.onMeExit(n), vn.warn(e);
              }
            }
          }
        }, {
          key: "onPub",
          value: function value(e, t, n) {
            var r = this;
            if (!r._cacheMembers[t]) throw vn.error("No found member. when pub"), "No found member. when pub";
            var i = r.newStream(n),
                o = r._cacheStreams[n.id];
            if (e && (r._cver = e), o && i.sver !== o.sver) return vn.info("Onpub. the steam ", o.id, " republish. sver ", o.sver, i.sver), !i || i.aoff === o.aoff && i.voff == o.voff || r.onStreamControl(void 0, n.id, i.voff, i.aoff), p()(o, i), void r._onRepublishStream(o);
            var a = i;
            return a.updateAttributes({
              owner: r._cacheMembers[t]
            }), r._cacheStreams[n.id] = a, r._onAddStream(r.newStream(a)), r.autoSub && r.createWebrtcAndSubscribeStream(n.id, {
              onGotRemote: function onGotRemote(e) {}
            }), a;
          }
        }, {
          key: "onUnpub",
          value: function value(e, t, n) {
            var r = this,
                i = r._cacheStreams[n];
            r._onRemovePubstream(r._cacheMembers[t], i), e && (r._cver = e);
          }
        }, {
          key: "onClose",
          value: function value(e, t, n) {
            var r = this;

            try {
              r.close(n || 0);
            } finally {
              r.onConfrClose && r.onConfrClose(t, n);
            }
          }
        }, {
          key: "__getWebrtcFor",
          value: function value(e) {
            var t = this._cacheStreams[e] && this._cacheStreams[e]._webrtc;
            return t && t.getRtcId();
          }
        }, {
          key: "_getWebrtc",
          value: function value(e) {
            return this._cacheStreams[e] && this._cacheStreams[e]._webrtc;
          }
        }, {
          key: "_updateRemoteStream",
          value: function value(e, t) {
            e.located() && 2 === e.type ? emedia.enableAudioTracks(t, !0) : emedia.enableAudioTracks(t, !(e.aoff || e.subArgs && !1 === e.subArgs.subSAudio)), emedia.enableVideoTracks(t, !(e.voff || e.subArgs && !1 === e.subArgs.subSVideo));
          }
        }, {
          key: "onStreamControl",
          value: function value(e, t, n, r, i) {
            var o = this,
                a = o._cacheStreams[t];
            a.updateAttributes({
              voff: n,
              aoff: r
            });
            var s = a._webrtc;
            s && s._remoteStream && o._updateRemoteStream(a, s._remoteStream);
            var c = o.newStream(a);
            o.onUpdateStream && o.onUpdateStream(c, new Yt({
              voff: n,
              aoff: r
            })), e && (o._cver = e), i && a.updateAttributes({
              sver: i
            });
          }
        }, {
          key: "aoff",
          value: function value(e, t, n) {
            var r = this,
                i = r.__getWebrtcFor(e.id);

            if (!i) throw vn.error("pubS not publish", e.id), "pubS not publish" + e.id;
            r._linkedStreams[e.id].updateAttributes({
              aoff: t
            }), e.updateAttributes({
              aoff: t
            });
            var o = r.newMessage().setOp(400).setRtcId(i).setVoff(e.voff).setAoff(t);
            r.postMessage(o, n), r.onUpdateStream && r.onUpdateStream(e, new Yt({
              aoff: t
            }));
          }
        }, {
          key: "voff",
          value: function value(e, t, n) {
            var r = this,
                i = r.__getWebrtcFor(e.id);

            if (!i) throw vn.error("pubS not publish", e.id), "pubS not publish" + e.id;
            r._linkedStreams[e.id].updateAttributes({
              voff: t
            }), e.updateAttributes({
              voff: t
            });
            var o = r.newMessage().setOp(400).setRtcId(i).setVoff(t).setAoff(e.aoff);
            r.postMessage(o, n), r.onUpdateStream && r.onUpdateStream(e, new Yt({
              voff: t
            }));
          }
        }, {
          key: "startRecord",
          value: function value(e, t) {
            var n = this,
                r = e.rtcId,
                i = n.newMessage().setOp(500).setRtcId(r).setFlag(1);
            n.postMessage(i, function (i) {
              vn.warn("record ", r, i.result, i.msg), t && t(0 === i.result), 0 === i.result && (n._records[e.id] = p()({}, e));
            });
          }
        }, {
          key: "stopRecord",
          value: function value(e, t) {
            var n = this,
                r = e.rtcId,
                i = n.newMessage().setOp(500).setRtcId(r).setFlag(0);
            n.postMessage(i, function (e) {
              vn.warn("stop record ", r, e.result, e.msg), t && t(0 === e.result);
            }), n._records[e.id] && ct(n._records, e.id);
          }
        }, {
          key: "onMembers",
          value: function value(e, t) {
            var n = this,
                r = [];
            ut(n._cacheMembers, function (e, n) {
              t[e] || r.push(n);
            }), ut(r, function (e, t) {
              n.onExit(void 0, t.id);
            });
            var i = [];
            ut(t, function (e, t) {
              (t.name && t.name != n.memName || !t.name && e != n.getMemberId()) && (n._cacheMembers[e] || i.push(t), n._cacheMembers[e] && p()(n._cacheMembers[e], t));
            }), ut(i, function (e, t) {
              n.onEnter(void 0, t);
            }), e && (n._cver = e);
          }
        }, {
          key: "onStreams",
          value: function value(e, t) {
            var n = this,
                r = [];
            ut(n._cacheStreams, function (e, n) {
              n.located() || t[e] || r.push(n);
            }), ut(r, function (e, t) {
              n.onUnpub(void 0, t.memId, t.id);
            });
            var i = [];
            ut(t, function (e, t) {
              (t.memName && t.memName != n.memName || !t.memName && t.memId != n.getMemberId()) && (n._cacheStreams[e] || i.push(t), n._cacheStreams[e] && p()(n._cacheStreams[e], t));
            }), ut(i, function (e, t) {
              n.onPub(void 0, t.memId, t);
            }), ut(n._cacheStreams, function (e, r) {
              var i;
              r.located() || (i = t[e]), !i || i.aoff === r.aoff && i.voff == r.voff || n.onStreamControl(void 0, e, i.voff, i.aoff), i && i.sver !== r.sver && (p()(r, i), n._onRepublishStream(r));
            }), e && (n._cver = e);
          }
        }, {
          key: "_onRemoveMember",
          value: function value(e, t) {
            var n = this;
            vn.info("remove", e, t);
            var r = [];
            ut(n._cacheStreams, function (t, n) {
              (n.memId || n.owner && n.owner.id) === e.id && r.push(n);
            }), ut(r, function (e, r) {
              n._onRemovePubstream(r.owner, r, t);
            }), ct(n._cacheMembers, e.id), n.onRemoveMember && n.onRemoveMember(e, t);
          }
        }, {
          key: "_onAddStream",
          value: function value(e) {
            vn.info("add stream ", e.id), vn.debug("add stream ", e), this.onAddStream(e);
          }
        }, {
          key: "_onRemovePubstream",
          value: function value(e, t, n) {
            var r = this;
            if (t && 0 != t.id) try {
              var i = ct(r._mediaMeters, t.id);
              i && i._finally();
            } finally {
              !function (e) {
                2 === e.type && (ct(r.audioMixers, e.id), e.remotePlayAudioObject && document.body.removeChild(e.remotePlayAudioObject)), n || (n = "Unpub"), e && !e.closeReason && e.updateAttributes({
                  closeReason: n
                }), r.unsubscribeStream(e.id), ct(r._cacheStreams, e.id), r._streamAutomators && ct(r._streamAutomators, e.id), r._monitSoundChanagedStreams && ct(r._monitSoundChanagedStreams, e.id), r.onRemoveStream && (e = r.newStream(e), r.onRemoveStream(e));
              }(t);
            }
          }
        }, {
          key: "_onRepublishStream",
          value: function value(e) {
            var t = this;
            !t._ices[e.rtcId] && !emedia.subscribed(e) || t._maybeNotExistStreams[e.id] ? t.onUpdateStream(e) : (t.unsubscribeStream(e.id), t.createWebrtcAndSubscribeStream(e.id, {
              onGotRemote: function onGotRemote(e) {}
            }));
          }
        }, {
          key: "_onRecvRemoteMessage",
          value: function value(e, t, n) {
            var r = this;
            vn.debug("Recv remote message", e, t);
            var i,
                o = r._cacheMembers[e];

            try {
              i = JSON.parse(t);
            } catch (e) {}

            r.onRecvRemoteMessage && r.onRecvRemoteMessage(o || e, i || t, n);
          }
        }, {
          key: "_onSoundChanage",
          value: function value(e, t, n) {
            emedia.config._printSoundData && vn.info("Stream id " + t.id + ", meter " + (n && n.instant.toFixed(2) + " " + n.slow.toFixed(2) + " " + n.clip.toFixed(2) + " " + (n.trackAudioLevel || "--") + " " + (n.trackTotalAudioEnergy || "--"))), n || (n = {
              instant: 0,
              slow: 0,
              clip: 0
            }), emedia.config.logVolumeWhenInstantGE && emedia.config.logVolumeWhenInstantGE > 0 && n.instant >= emedia.config.logVolumeWhenInstantGE && n.instant < 3 * emedia.config.logVolumeWhenInstantGE && vn.info("Stream id " + t.id + ", webrtc = " + (t._webrtc ? t._webrtc.getRtcId() : "null") + ", media streamId = " + (t.getMediaStream() ? t.getMediaStream().id : "null") + ", instant >= " + emedia.config.logVolumeWhenInstantGE + ", meter instant=" + n.instant + ", slow=" + n.slow + ", clip=" + n.clip);
            var r = this;
            0 === n.instant && (n.instant = n.trackAudioLevel || n.trackTotalAudioEnergy || 0), r.onSoundChanage(e, t, n), r._service._judgeTalking(n) && r.onTalking(e, t, n);
          }
        }, {
          key: "onAddMember",
          value: function value(e) {}
        }, {
          key: "onRemoveMember",
          value: function value(e, t) {}
        }, {
          key: "onAddStream",
          value: function value(e) {}
        }, {
          key: "onRemoveStream",
          value: function value(e) {}
        }, {
          key: "onUpdateStream",
          value: function value(e, t) {}
        }, {
          key: "onRecvRemoteMessage",
          value: function value(e, t) {}
        }, {
          key: "onSoundChanage",
          value: function value(e, t, n) {}
        }, {
          key: "onTalking",
          value: function value(e, t, n) {}
        }]), i;
      }(pn);

      Je("electron");

      var gn = n(7750),
          _n = Je("Service");

      var yn = function () {
        function e(t) {
          for (var n in s(this, e), f(this, "AVPubstream", Xt.extend({
            __init__: function __init__() {
              var e = this;
              e.type = 0, e._located = !0, e.mutedMuted = !0, e.constaints && (e.constaints.video || (e.voff = 1), e.constaints.audio || (e.aoff = 1)), e.constaints || (e.constaints = {
                audio: !0,
                video: !0
              }), emedia.config.maxVideoBitrate && (e.vbitrate = emedia.config.maxVideoBitrate), emedia.config.maxAudioBitrate && (e.abitrate = emedia.config.maxAudioBitrate);
            }
          })), f(this, "AudioMixerPubstream", new Xt.extend({
            __init__: function __init__() {
              var e = this;

              if (e.type = 2, e._located = !0, e.mutedMuted = !0, e.constaints || (e.constaints = {
                audio: !0,
                video: !1
              }), e.constaints) {
                var t = !!e.constaints.audio;
                e.constaints.video || (e.constaints.video = !1), e.constaints.video || (e.voff = 1), e.constaints.audio || (e.aoff = 1), !1 === t && (e.aoff = 1);
              }

              emedia.config.maxVideoBitrate && (e.vbitrate = emedia.config.maxVideoBitrate), emedia.config.maxAudioBitrate && (e.abitrate = emedia.config.maxAudioBitrate);
            },
            onGotRemoteMediaStream: function onGotRemoteMediaStream(e) {
              var t = this;

              if (!t.remotePlayAudioObject) {
                var n = "__o_remote_play_audio_" + t.id,
                    r = document.querySelector("#" + n);
                r || ((r = document.createElement("audio")).style.display = "none", r.id = "__o_remote_play_audio_" + t.id, r.autoplay = !0, r.playsinline = !0, document.body.appendChild(r)), t.remotePlayAudioObject = r;
              }

              t.remotePlayAudioObject.srcObject = e;
            }
          })), f(this, "ShareDesktopPubstream", Xt.extend({
            voff: 0,
            __init__: function __init__() {
              var e = this;
              e.type = 1, e._located = !0, e.mutedMuted = !0, e.constaints = {
                audio: !this.aoff,
                video: !0
              }, emedia.config.maxVideoBitrate && (e.vbitrate = emedia.config.maxVideoBitrate), emedia.config.maxAudioBitrate && (e.abitrate = emedia.config.maxAudioBitrate);
            }
          })), t) {
            this[n] = t[n];
          }

          var r = this;
          _n.warn("emedia version: ", window._emediaVersion || "unkown"), _n.warn("UserAgent: ", navigator.userAgent);
          var i,
              o,
              a = (i = new RegExp("(^|&)__log_level___=([^&]*)(&|$)", "i"), null != (o = window.location.search.substr(1).match(i)) ? unescape(o[2]) : null);
          a && (emedia.LOG_LEVEL = y()(a)), r.namespace = function () {
            for (var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = new Array(36), r = 0, i = 0; i < 36; i++) {
              8 == i || 13 == i || 18 == i || 23 == i ? n[i] = "-" : 14 == i ? n[i] = "4" : (r <= 2 && (r = 33554432 + 16777216 * Math.random() | 0), e = 15 & r, r >>= 4, n[i] = t[19 == i ? 3 & e | 8 : e]);
            }

            return n.join("");
          }(), emedia.useCurrentXService = r, void 0 === r.useRTCCfg && (r.useRTCCfg = emedia.config.useRTCCfgIfServerReturn), "string" == typeof r.useRTCCfg && (r.useRTCCfg = JSON.parse(r.useRTCCfg)), r.inboundAudio = vt.inboundAudio.bind(r), r.inboundVideo = vt.inboundVideo.bind(r), r.outboundAudio = vt.outboundAudio.bind(r), r.outboundVideo = vt.outboundVideo.bind(r);
        }

        return d(e, [{
          key: "__assertCurrent",
          value: function value() {
            if (!this.current) throw _n.error("Please call emedia.service.setup(ticket)"), "Please call emedia.service.setup(ticket)";
            if (this.current.closed) throw _n.error("current closed"), "current closed";
          }
        }, {
          key: "hasAudioMixers",
          value: function value() {
            var e = this;

            for (var t in e.__assertCurrent(), e.current.audioMixers) {
              var n = e.current.audioMixers[t];
              if (n && n.located()) return !0;
            }
          }
        }, {
          key: "getMediaDevices",
          value: function value(e, t, n) {
            "function" == typeof e && (n = t, t = e, e = void 0), navigator.mediaDevices.enumerateDevices().then(function (n) {
              for (var r = [], i = 0; i !== n.length; ++i) {
                var o = n[i];
                e ? e === o.kind ? r.push(o) : "audioinput" === o.kind || "audiooutput" === o.kind || "videoinput" === o.kind || _n.info("Some other kind of source/device: ", o) : r.push(o);
              }

              t && t(r);
            }).catch(function (e) {
              _n.warn("navigator.getUserMedia error: ", e), n && n(e);
            });
          }
        }, {
          key: "_stopTracks",
          value: function value(e) {
            emedia.stopTracks(e), e && _n.warn("Stream tracks stop. it = ", e);
          }
        }, {
          key: "_enableVideoTracks",
          value: function value(e, t) {
            emedia.enableVideoTracks(e, t);
          }
        }, {
          key: "_enableAudioTracks",
          value: function value(e, t) {
            emedia.enableAudioTracks(e, t);
          }
        }, {
          key: "openUserMedia",
          value: function value(e) {
            _n.debug("begin open user media", e);

            var t = this;
            if (!e) throw _n.error("require pubS"), "require pubS";
            return {
              then: function then(n, r) {
                function i() {
                  n.apply(null, arguments);
                  var r = e.localStream;
                  r && (r.oninactive = t._onStreamInactive.bind(t, e, r), r.onactive = t._onStreamActive.bind(t, e, r));
                }

                if (e instanceof t.AVPubstream) t._openCamera(e, i, r);else if (e instanceof t.ShareDesktopPubstream) t._openSharedDesktop(e, i, r);else {
                  if (!(e instanceof t.AudioMixerPubstream)) throw _n.error("Unspported pubS"), "Unspported pubS";

                  t._openCamera(e, i, r);
                }
              }
            };
          }
        }, {
          key: "_openSharedDesktop",
          value: function value(e, t, n) {
            var r,
                i,
                o,
                a = this;

            function s(e) {
              var r = {
                audio: !0
              };
              e.constaints && ("object" === g(e.constaints.audio) && e.constaints.audio || e.constaints.audio || (r.audio = !1)), a.__getUserMedia(r, function (n, r) {
                var i = new MediaStream();
                i._located = !0, r && r.getAudioTracks().forEach(function (e) {
                  i.addTrack(e);
                }), e.localStream && e.localStream.getVideoTracks().forEach(function (e) {
                  i.addTrack(e);
                }), e.localStream = i, t && t(a.current, i);
              }, n);
            }

            if (e._localMediaStream && (r = e._localMediaStream.getVideoTracks()) && r.length > 0) return e.localStream = e._localMediaStream, void (e.constaints.audio ? s(e) : t && t(a.current, stream));
            i = null == e ? void 0 : e.screenOptions, o = function o() {
              a.__getUserMedia({
                share: !0,
                video: !0,
                audio: !1
              }, function (n, r) {
                e.localStream = r, e.constaints.audio ? s(e) : t && t(a.current, r);
              }, n);
            }, navigator.userAgent.indexOf("Electron") > -1 ? (console.log("electron共享桌面集成"), function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["screen", "window"],
                  t = arguments.length > 1 ? arguments[1] : void 0;

              window.require("electron").desktopCapturer.getSources({
                types: e
              }).then(function (e) {
                if (console.log("electron共享桌面sources", e), "function" == typeof emedia.chooseElectronDesktopMedia) {
                  for (var n = 0; n < e.length; n++) {
                    logger.debug("desktop capturer. ", e[n]);
                    var r = e[n];
                    r.hxThumbDataURL = r.thumbnail.toDataURL();
                  }

                  emedia.chooseElectronDesktopMedia(e, function (e) {
                    var n;
                    n = e && e.id ? e.id : e, t(new __event.OpenDesktopMedia({
                      desktopStreamId: n
                    }));
                  }, function () {
                    t(new __event.OpenDesktopMediaAccessDenied({
                      message: "User denied access"
                    }));
                  });
                } else t(new __event.OpenDesktopMedia({
                  desktopStreamId: e[0].id
                }));
              }).catch(function (e) {
                "function" != typeof emedia.chooseElectronDesktopMedia && t(new __event.OpenDesktopMedia({
                  desktopStreamId: sources[0].id
                }));
              });
            }(i, o)) : o();
          }
        }, {
          key: "_openCamera",
          value: function value(e, t, n) {
            var r = this,
                i = e.constaints || {
              audio: !0,
              video: !0
            };

            r.__getUserMedia(i, function (n, i) {
              r.__controlStream(e, i), e.localStream = i, t && t(r.current, i);
            }.bind(i), n);
          }
        }, {
          key: "__controlStream",
          value: function value(e, t) {
            emedia.enableVideoTracks(t, !e.voff), emedia.enableAudioTracks(t, !e.aoff);
          }
        }, {
          key: "__getUserMedia",
          value: function value(e, t, n) {
            _n.debug("get user media. using constaints", e);

            var r,
                i = this;

            function o(e) {
              _n.debug("[WebRTC-API] getUserMedia() error: ", e), emedia.stopTracks(r), i.current && i.current.onEvent(new Wt.OpenMediaError({
                member: i.current,
                event: e
              })), n && n(new Wt.OpenMediaError({
                member: i.current,
                event: e
              }));
            }

            e = Qe.extend({}, e), i.__sysGetUserMedia(e, function (n) {
              i.current && !i.current.closed && (i.current._openedRtcMediaStreams[n.id] = n, n._bindAttendee = i.current, n._bindAttendeeId = i.current.getMemberId(), _n.info("stream bind attendee.", n.id, i.current.ticket && i.current.ticket.id, i.current.getMemberId(), i.current.memName)), emedia._yetGetUserMedia = !0, r = n;
              var a = n.getVideoTracks(),
                  s = n.getAudioTracks();

              if (a.length > 0) {
                var c = a[0];

                _n.debug(n.id, "using video device: ", c.id, c.label, c.kind, c.enabled);
              }

              if (s.length > 0) {
                var u = s[0];

                _n.debug(n.id, "using audio device: ", u.id, u.label, u.kind, u.enabled);
              }

              if (n._located = !0, "boolean" == typeof n.active && !n.active) return _n.error("media stream not active. it is", n.id), void o({
                constraint: e,
                name: "NotAllowedStreamNonactive",
                message: "stream non-active"
              });
              t && t(i.current, n);
            }, o);
          }
        }, {
          key: "_onStreamInactive",
          value: function value(e, t, n) {
            var r = this;
            _n.warn("media stream inactive. it =", t.id), e.onMediaInactive && r.current && ut(r.current._cacheStreams, function (i, o) {
              o.located() && o.localStream && o.localStream.id === t.id && (o._webrtc && o._webrtc.closed || e.onMediaInactive.call(o, t, n, r));
            });
          }
        }, {
          key: "_onStreamActive",
          value: function value(e, t, n) {
            var r = this;
            _n.warn("media stream active. it =", t.id), e.onMediaActive && r.current && ut(r.current._cacheStreams, function (i, o) {
              o.located() && o.localStream && o.localStream.id === t.id && e.onMediaActive.call(o, t, n, r);
            });
          }
        }, {
          key: "__sysGetUserMedia",
          value: function value(e, t, n) {
            function r(e, t, n) {
              "object" === g(emedia.config.globalConstraints) && ("object" === g(emedia.config.globalConstraints.audio) && e.audio && ("boolean" == typeof e.audio ? e.audio = Qe.extend({}, emedia.config.globalConstraints.audio) : e.audio = Qe.extend({}, emedia.config.globalConstraints.audio, e.audio)), "object" === g(emedia.config.globalConstraints.video) && e.video && ("boolean" == typeof e.video ? e.video = Qe.extend({}, emedia.config.globalConstraints.video) : e.video = Qe.extend({}, emedia.config.globalConstraints.video, e.video))), _n.info("navigator.mediaDevices.getUserMedia constaints = ", Ne()(e)), e.share ? navigator.mediaDevices.getDisplayMedia({
                video: !0,
                audio: !1
              }).then(t).catch(n) : navigator.mediaDevices.getUserMedia(e).then(t).catch(n);
            }

            if (Oe) {
              if ((e = gn.extend({}, e)).audio) {
                var i = {
                  audio: e.audio
                };
                r(i, s.bind(i), c);
              }

              if (e.video) {
                var o = {
                  video: e.video
                };
                r(o, s.bind(o), c);
              }

              e.video || e.audio || c("Failed to execute 'getUserMedia' on 'MediaDevices': At least one of audio and video must be requested");
            } else r(e, t, n);

            function a() {
              var n = new MediaStream();
              e.audioStream && e.audioStream.getAudioTracks().forEach(function (e) {
                n.addTrack(e);
              }), e.videoStream && e.videoStream.getVideoTracks().forEach(function (e) {
                n.addTrack(e);
              }), t && t(n);
            }

            function s(t) {
              e.failed ? emedia.stopTracks(t) : (this.audio && (e.audioStream = t, !e.video) || this.video && (e.videoStream = t, !e.audio) || e.audioStream && e.videoStream) && a();
            }

            function c(t) {
              e.failed || (e.failed = !0, n(t));
            }
          }
        }, {
          key: "setup",
          value: function value(e, t) {
            var n = this;
            _n.count(), _n.debug("recv ticket", e, t), _n.debug("use sdk version", window._emediaVersion), _n.debug(navigator.userAgent);
            var r,
                i,
                o = t = t || {};
            if (gn.isPlainObject(t)) t = Ne()(t);else try {
              o = JSON.parse(t);
            } catch (e) {}

            if ("string" == typeof e && (e = JSON.parse(e)), r = i = e.memName, emedia._lastSetupConfr = e.confrId, emedia._lastSetupMemName = i, emedia._lastSetupDate = new Date(), emedia._lastSetupTktId = e.tktId, n.current && !n.current.closed) {
              var a = new Wt.CurrentCalling();
              throw n.current.onEvent(a), _n.error("confr not close. calling..."), a;
            }

            return n.current = new mn({
              _service: n,
              service: n,
              autoSub: emedia.config.autoSub,
              getCopyIntervalMillis: emedia.config.getCopyIntervalMillis,
              sysUserId: r,
              memName: i,
              resource: n.resource,
              nickName: n.nickName,
              ticket: e,
              ext: t,
              extObj: o,
              sessionFactory: function sessionFactory(t) {
                return n.newSession(t, e);
              },
              listeners: n.listeners || {}
            });
          }
        }, {
          key: "getStreamById",
          value: function value(e) {
            var t = this.current && this.current._cacheStreams[e];
            return t && Qe.extend(!1, {}, t);
          }
        }, {
          key: "getStreamsByRtcId",
          value: function value(e) {
            if (this.current && this.current._cacheStreams) {
              var t = [];
              return ut(this.current._cacheStreams, function (n, r) {
                r.rtcId === e && t.push(r);
              }), t;
            }
          }
        }, {
          key: "getMemberById",
          value: function value(e) {
            var t = this.current && this.current._cacheMembers[e];
            return t && Qe.extend(!1, {}, t);
          }
        }, {
          key: "exit",
          value: function value(e) {
            _n.warn("User click exit ", e), this.current && this.current.exit(e);
          }
        }, {
          key: "join",
          value: function value(e, t) {
            _n.debug("begin join ...");

            var n = this;
            if (n.__assertCurrent(), n.current._memberId) return _n.warn("Had joined. igrone it"), void (e && e(n.memId));
            n.current._session._sessionId = void 0, n.current.join(e, t);
          }
        }, {
          key: "withpublish",
          value: function value(e) {
            var t = this;
            if (!e || !e.localStream) throw _n.error("pubS null or stream not open"), "pubS null or stream not open";
            return t.__assertCurrent(), t.current._memberId ? _n.warn("Had joined. igrone it") : t.current._session._sessionId = void 0, t.current.withpublish(e);
          }
        }, {
          key: "push",
          value: function value(e, t, n) {
            _n.debug("begin push ...");

            var r = this;
            if (2 === arguments.length && (n = t, t = void 0), !e || !e.localStream) throw _n.error("pubS or stream open"), "pubS or stream open";
            r.__assertCurrent(), r.current.push(e, t, n, !1);
          }
        }, {
          key: "subscribe",
          value: function value(e, t, n, r) {
            var i = this;

            if (_n.info("begin subscribe ", e, r), t && gn.isPlainObject(t) && (r = t, t = n = void 0), n && gn.isPlainObject(n) && (r = n, n = t, t = void 0), Oe) {
              var o = function o() {
                try {
                  var e = u.shift();
                  e && e.onSub && e.onSub.apply(e, arguments);
                } finally {
                  s();
                }
              },
                  a = function a() {
                try {
                  var e = u.shift();
                  e && e.subfail && e.subfail.apply(e, arguments);
                } finally {
                  s();
                }
              },
                  s = function s() {
                u.length > 0 && i.__subscribe(u[0].streamId, o, a, u[0].subArgs);
              },
                  c = {
                streamId: e,
                onSub: t,
                subfail: n,
                subArgs: r
              },
                  u = i.__safari_subs || (i.__safari_subs = []);

              u.push(c), 1 === u.length && s();
            } else i.__subscribe(e, t, n, r);
          }
        }, {
          key: "__subscribe",
          value: function value(e, t, n, r) {
            var i = this;
            i.__assertCurrent(), 2 == arguments.length && (n = t, t = void 0), t && gn.isPlainObject(t) && (r = t, t = void 0), n && gn.isPlainObject(n) && (r = n, n = void 0), r || (r = {
              subSVideo: !0,
              subSAudio: !0
            });

            var o = i.current._getWebrtc(e),
                a = o && o.isConnected(),
                s = a && o.getRemoteStream();

            if (s && (a = s.active)) {
              var c = s.getAudioTracks().length,
                  u = s.getVideoTracks().length;
              (c || !0 !== r.subSAudio) && (u || !0 !== r.subSVideo) || (a = !1);
            }

            if (_n.info("sub stream", e, ", use prertcpeer =", a), a) return i.current.subscribeStream(o._rtcId, e, n, r, t), void (t && t());
            o && !o.closed && i.current.closeWebrtc(o.getRtcId(), !0, !1), i.current.createWebrtcAndSubscribeStream(e, {
              onGotRemote: function onGotRemote(e) {
                t && t(e);
              },
              onEvent: function onEvent(e) {
                n && n(e);
              }
            }, void 0, r);
          }
        }, {
          key: "closePubstream",
          value: function value(e) {
            e.located() && (emedia.stopTracks(e._localMediaStream), emedia.stopTracks(e.localStream));
          }
        }, {
          key: "hungup",
          value: function value(e) {
            var t = this.getStreamById(e);

            try {
              this._hungup(e);
            } finally {
              this.onHungup && t && this.onHungup(t);
            }
          }
        }, {
          key: "_hungup",
          value: function value(e) {
            var t = this;

            t.__assertCurrent();

            var n = t.current,
                r = n._cacheStreams[e];
            r && !r.closeReason && r.updateAttributes({
              closeReason: "UserHangup"
            });
            var i = r && r.rtcId;

            if (i && (n.closeWebrtc(i), r.located() && (1 !== r.type && r._localMediaStream && emedia.stopTracks(r._localMediaStream), r.remotePlayAudioObject && document.body.removeChild(r.remotePlayAudioObject), n._cacheStreams[e] && n.onRemoveStream(r), ct(n._cacheStreams, e), t._streamAutomators && ct(t._streamAutomators, e))), r && !r.located()) {
              if (n._linkedStreams[r.id] && ct(n._linkedStreams, r.id), _n.warn("Hangeup remove from _linkedStreams. stream = ", r.id), !(r = n._cacheStreams[e])) return;
              r.updateAttributes({
                rtcId: void 0,
                _webrtc: void 0,
                mediaStream: void 0
              });
              var o = new Xt(r);
              n.onUpdateStream(o, new o.Update(o));
            }
          }
        }, {
          key: "postMessage",
          value: function value(e, t, n, r) {
            var i = t;
            "string" != typeof t && (t = Ne()(t)), this.__assertCurrent();
            var o,
                a = this.current,
                s = a._linkedStreams[e];
            o = s && s.owner ? s.owner.id : e, t = a.newMessage({
              op: 1003,
              memId: o,
              arg: t
            }), a.postMessage(t, (n || r) && function (e) {
              if (r && r(e, i), 0 != e.result) {
                var s = new Wt.RemoteControlFail({
                  memId: o,
                  failed: e.result,
                  cause: e.msg,
                  type: "postMessage",
                  postMessage: t
                });
                return a.onEvent(s), void (n && n(s, i));
              }
            });
          }
        }, {
          key: "torchRemote",
          value: function value(e, t, n, r) {
            "function" == typeof t && (r = n, n = t, t = void 0), void 0 !== t && (t = t ? 1 : 0), this.__assertCurrent();
            var i = this.current,
                o = i._linkedStreams[e];
            if (!o || o.located()) throw _n.error("not exsits or locate, not connect", e), e + " not exsits or locate, not connect";
            var a = o.torch,
                s = {
              op2: 20,
              streamId: e,
              tor: t = void 0 === t ? o.torch ? 0 : 1 : t
            },
                c = i.newMessage({
              op: 1002,
              memId: o.owner.id,
              arg: Ne()(s),
              _reqOps: [100206]
            });
            o.updateAttributes({
              torch: t
            }), i.postMessage(c, function (e) {
              if (0 != e.result) {
                var t = new Wt.RemoteControlFail({
                  stream: o,
                  failed: e.result,
                  cause: e.msg,
                  type: "torch_control"
                });
                return i.onEvent(t), o.updateAttributes({
                  torch: a
                }), void (r && r(t, o.torch));
              }

              n && n(o.torch);
            });
          }
        }, {
          key: "freezeFrameRemote",
          value: function value(e, t, n) {
            this.__assertCurrent();

            var r = this.current,
                i = r._linkedStreams[e];
            if (!i || i.located()) throw _n.error("not exsits or locate, not connect", e), e + " not exsits or locate, not connect";
            var o = !i.freezeFrame,
                a = {
              op2: 20,
              streamId: e,
              frz: o ? 1 : 0
            },
                s = r.newMessage({
              op: 1002,
              memId: i.owner.id,
              arg: Ne()(a),
              _reqOps: [100204]
            });
            i.updateAttributes({
              freezeFrame: o
            }), r.postMessage(s, function (e) {
              if (0 != e.result) {
                var o = new Wt.RemoteControlFail({
                  stream: i,
                  failed: e.result,
                  cause: e.msg,
                  type: "freeze_control"
                });
                return r.onEvent(o), i.updateAttributes({
                  freezeFrame: !i.freezeFrame
                }), void (n && n(o, i.freezeFrame));
              }

              t && t(i.freezeFrame);
            });
          }
        }, {
          key: "base64Img2Blob",
          value: function value(e) {
            for (var t = e.split(";base64,"), n = t[0].split(":")[1], r = window.atob(t[1]), i = r.length, o = new Uint8Array(i), a = 0; a < i; ++a) {
              o[a] = r.charCodeAt(a);
            }

            return new Blob([o], {
              type: n
            });
          }
        }, {
          key: "blob2URL",
          value: function value(e) {
            return URL.createObjectURL(e);
          }
        }, {
          key: "imagesPngContext2URL",
          value: function value(e) {
            return this.blob2URL(this.blob2URL(e));
          }
        }, {
          key: "downloadFile",
          value: function value(e, t, n) {
            var r = document.createElement("a");
            r.style.display = "none";
            var i,
                o = t ? this.base64Img2Blob(t) : n;
            r.download = e, r.href = i = this.blob2URL(o), r.rel = "noopener";
            var a = document.createEvent("HTMLEvents");
            a.initEvent("click", !1, !1), r.dispatchEvent(a), document.body.appendChild(r), r.click(), r.parentNode.removeChild(r), setTimeout(function () {
              URL.revokeObjectURL && URL.revokeObjectURL(i);
            }, 4e4);
          }
        }, {
          key: "videoCaptureBase64Context2URL",
          value: function value(e) {
            return this.imagesPngContext2URL(this.getCaptureBase64Context(e));
          }
        }, {
          key: "getCaptureBase64Context",
          value: function value(e) {
            var t = document.createElement("canvas");
            return t.id = "__capture_video_" + new Date().getTime(), t.width = e.videoWidth, t.height = e.videoHeight, t.getContext("2d").drawImage(e, 0, 0, t.width, t.height), t.toDataURL("images/png");
          }
        }, {
          key: "captureVideo",
          value: function value(e, t, n) {
            var r = this.getCaptureBase64Context(e);
            return t && (n = n || "capture_" + new Date().getTime(), this.downloadFile(n, r)), r;
          }
        }, {
          key: "capturePictureRemote",
          value: function value(e, t, n, r) {
            this.__assertCurrent();

            var i = this.current,
                o = i._linkedStreams[e];
            if (!o || o.located()) throw _n.error("not exsits or locate, not connect", e), e + " not exsits or locate, not connect";
            var a = {
              op2: 20,
              streamId: e,
              pic: 1,
              rspBase64Pic: !0 === t
            },
                s = i.newMessage({
              op: 1002,
              memId: o.owner.id,
              arg: Ne()(a),
              _reqOps: [100205]
            });
            i.postMessage(s, function (e) {
              if (0 != e.result) {
                var a = new Wt.RemoteControlFail({
                  stream: o,
                  failed: e.result,
                  cause: e.msg,
                  type: "capture_control"
                });
                return i.onEvent(a), void (r && r(a));
              }

              if (t) {
                if (e.arg) {
                  var s = JSON.parse(e.arg);
                  n && n(s.pic);
                } else r && r(new Wt.RemoteControlFail({
                  stream: o,
                  failed: e.result,
                  cause: "Not found base64 pic"
                }));
              } else n && n();
            });
          }
        }, {
          key: "zoomRemote",
          value: function value(e, t, n, r) {
            this.__assertCurrent();

            var i = this.current,
                o = i._linkedStreams[e];
            if (!o || o.located()) throw _n.error("not exsits or locate, not connect", e), e + " not exsits or locate, not connect";
            o._zoom || o.updateAttributes({
              _zoom: 1
            });
            var a = o._zoom * t;

            if (!(a < 1)) {
              o.updateAttributes({
                _zoom: a
              });
              var s = {
                op2: 20,
                streamId: e,
                zoom: Math.round(1e4 * a)
              },
                  c = i.newMessage({
                op: 1002,
                memId: o.owner.id,
                arg: Ne()(s),
                _reqOps: [100201]
              });
              i.postMessage(c, function (e) {
                if (0 != e.result) {
                  var t = new Wt.RemoteControlFail({
                    stream: o,
                    failed: e.result,
                    cause: e.msg,
                    type: "zoom_control"
                  });
                  return i.onEvent(t), void (n && n(t));
                }

                r && r();
              });
            }
          }
        }, {
          key: "_getPosition",
          value: function value(e) {
            for (var t = 0, n = 0; e;) {
              n += e.offsetLeft, t += e.offsetTop, e = e.offsetParent;
            }

            return {
              clientX: n,
              clientY: t
            };
          }
        }, {
          key: "eventXYAtMedia",
          value: function value(e, t) {
            var n = Le(t),
                r = n.width,
                i = n.height,
                o = t.videoWidth,
                a = t.videoHeight;

            if (a / o > i / r) {
              var s = o / a;
              o = (a = i) * s;
            } else s = a / o, a = (o = r) * s;

            var c,
                u,
                d = e;
            if ((c = st(d.x)) && (d.x = d.x * r), (u = st(d.y)) && (d.y = d.y * i), !(Math.abs(d.x) < (r - o) / 2 || r - Math.abs(d.x) < (r - o) / 2 || Math.abs(d.y) < (i - a) / 2 || i - Math.abs(d.y) < (i - a) / 2)) return d.x = d.x < 0 ? Math.floor(d.x + (r - o) / 2) : Math.floor(d.x - (r - o) / 2), d.y = d.y < 0 ? Math.floor(d.y + (i - a) / 2) : Math.floor(d.y - (i - a) / 2), c && (d.x = d.x / o), u && (d.y = d.y / a), {
              x: d.x,
              y: d.y,
              width: o,
              height: a
            };
          }
        }, {
          key: "eventXYAtVideo",
          value: function value(e, t) {
            var n,
                r,
                i = Le(t),
                o = i.width,
                a = i.height,
                s = t.videoWidth,
                c = t.videoHeight;

            if (c / s > a / o) {
              var u = s / c;
              s = (c = a) * u;
            } else u = c / s, c = (s = o) * u;

            return (n = st(e.x)) && (e.x = e.x * s), (r = st(e.y)) && (e.y = e.y * c), e.x = e.x < 0 ? Math.floor(e.x - (o - s) / 2) : Math.floor(e.x + (o - s) / 2), e.y = e.y < 0 ? Math.floor(e.y - (a - c) / 2) : Math.floor(e.y + (a - c) / 2), n && (e.x = e.x / o), r && (e.y = e.y / a), e;
          }
        }, {
          key: "getClickXY",
          value: function value(e, t) {
            var n = t || window.event,
                r = document.documentElement.scrollLeft || document.body.scrollLeft,
                i = document.documentElement.scrollTop || document.body.scrollTop,
                o = n.pageX || n.clientX + r,
                a = n.pageY || n.clientY + i,
                s = this._getPosition(e);

            _n.info("Video tag position ", s.clientX, ":", s.clientY);

            var c = e.videoWidth,
                u = e.videoHeight;

            if (u / c > e.offsetHeight / e.offsetWidth) {
              var d = c / u;
              c = (u = e.offsetHeight) * d, s.clientX += (e.offsetWidth - c) / 2;
            } else d = u / c, u = (c = e.offsetWidth) * d, s.clientY += (e.offsetHeight - u) / 2;

            return _n.info("Media position ", s.clientX, ":", s.clientY), _n.info("Media xy ", c, ":", u), _n.info("Click position ", o, ":", a), {
              mediaWidth: c,
              mediaHeight: u,
              x: o - s.clientX,
              y: a - s.clientY
            };
          }
        }, {
          key: "focusExpoRemote",
          value: function value(e, t, n, r, i) {
            var o = n || window.event,
                a = document.documentElement.scrollLeft || document.body.scrollLeft,
                s = document.documentElement.scrollTop || document.body.scrollTop,
                c = o.pageX || o.clientX + a,
                u = o.pageY || o.clientY + s,
                d = this._getPosition(t);

            _n.info("Video tag position ", d.clientX, ":", d.clientY);

            var f = t.videoWidth,
                l = t.videoHeight;

            if (l / f > t.offsetHeight / t.offsetWidth) {
              var p = f / l;
              f = (l = t.offsetHeight) * p, d.clientX += (t.offsetWidth - f) / 2;
            } else p = l / f, l = (f = t.offsetWidth) * p, d.clientY += (t.offsetHeight - l) / 2;

            _n.info("Media position ", d.clientX, ":", d.clientY), _n.info("Media xy ", f, ":", l), _n.info("Click position ", c, ":", u), this._focusExpo(e, f, l, c - d.clientX, u - d.clientY, r, i);
          }
        }, {
          key: "_focusExpo",
          value: function value(e, t, n, r, i, o, a) {
            if (!(r <= 0 || r > t || i <= 0 || i > n)) {
              this.__assertCurrent();

              var s = this.current,
                  c = s._linkedStreams[e];
              if (!c || c.located()) throw _n.error("not exsits or locate, not connect", e), e + " not exsits or locate, not connect";
              var u = {
                op2: 20,
                streamId: e,
                focus: 1,
                expo: 1,
                x: 0 === t ? 0 : Math.round(1e4 * r / t),
                y: 0 === n ? 0 : Math.round(1e4 * i / n)
              },
                  d = s.newMessage({
                op: 1002,
                memId: c.owner.id,
                arg: Ne()(u),
                _reqOps: [100202, 100203]
              });
              s.postMessage(d, function (e) {
                if (0 != e.result) {
                  var t = new Wt.RemoteControlFail({
                    stream: c,
                    failed: e.result,
                    cause: e.msg,
                    type: "focus_expo_control"
                  });
                  return s.onEvent(t), void (o && o(t));
                }

                a && a();
              });
            }
          }
        }, {
          key: "_republish",
          value: function value(e, t, n) {
            _n.info("Republish stream. it = ", e.id);

            var r,
                i,
                o = this;

            if (e.id) {
              var a = o.current.__getWebrtcFor(e.id);

              a && o.current.closeWebrtc(a, !0), r = o.current._getWebrtc(e.id);
            }

            switch (e.type) {
              case 0:
                emedia.stopTracks(e._localMediaStream), i = new o.AVPubstream(e);
                break;

              case 1:
                emedia.stopAndRemoveAudioTracks(e._localMediaStream), i = new o.ShareDesktopPubstream(e);
                break;

              case 2:
                emedia.stopTracks(e._localMediaStream), i = new o.AudioMixerPubstream(e);
            }

            setTimeout(function () {
              o.openUserMedia(i).then(function () {
                e.localStream = i.localStream, e.isRepublished = !0, e.optimalVideoCodecs = e.optimalVideoCodecs || r && r.optimalVideoCodecs, o.push(e, t, n);
              }, n);
            }, 100);
          }
        }, {
          key: "switchMobileCamera",
          value: function value(e, t, n) {
            var r = this;
            if ("string" == typeof e ? e = r.current._cacheStreams[e] : e.id && (e = r.current._cacheStreams[e.id]), e.voff) _n.warn("Stream id = ", e.id, " voff, do not chanage camera.");else {
              e.constaints || (e.constaints = {});
              var i = Qe.extend({}, e.constaints);
              e._lastConstaints = i, e.constaints.video = "object" === g(e.constaints.video) ? e.constaints.video : {}, "user" !== e.constaints.video.facingMode && e.constaints.video.facingMode ? e.constaints.video.facingMode = "user" : e.constaints.video.facingMode = {
                exact: "environment"
              }, r._republish(e, function (e) {
                n && n(e);
              }, function (n) {
                n instanceof emedia.event.OpenMediaError && (e.constaints = i), t && t(n);
              });
            }
          }
        }, {
          key: "changeCamera",
          value: function value(e, t, n) {
            var r = this;
            "string" == typeof e ? e = r.current._cacheStreams[e] : e.id && (e = r.current._cacheStreams[e.id]), e.voff ? _n.warn("Stream id = ", e.id, " voff, do not chanage camera.") : r.getMediaDevices("videoinput", function (i) {
              if (i.length <= 1) _n.warn("Only video input. not chanage");else {
                var o = e._cameraIndex;

                if (null === e._cameraIndex || void 0 === e._cameraIndex) {
                  var a = e.getLocalMediaStream(),
                      s = (f = a && a.getVideoTracks()) && f.length && f[0];

                  if (s && s.getCapabilities && "function" == typeof s.getCapabilities) {
                    var c = s.getCapabilities(),
                        u = c && c.deviceId;

                    for (var d in i) {
                      if ((p = i[d]).deviceId === u || p.label == s.label) {
                        o = y()(d);
                        break;
                      }
                    }
                  } else for (var d in i) {
                    if ((p = i[d]).label == s.label) {
                      o = y()(d);
                      break;
                    }
                  }
                }

                for (; o < i.length;) {
                  var f,
                      l = i[o],
                      p = i[o = (o + 1) % i.length];
                  if (!(f = e.getLocalMediaStream().getVideoTracks()) || 0 === f.length || p.label != f[0].label) break;
                }

                var h = (p = i[o]).label;
                _n.warn("Stream ", e.id, l.label, ">>", h), e._cameraIndex = o, e.constaints || (e.constaints = {});
                var v = Qe.extend({}, e.constaints);
                e._lastConstaints = v, e.constaints.video = "object" === g(e.constaints.video) ? e.constaints.video : {}, e.constaints.video.deviceId = {
                  exact: p.deviceId
                }, r._republish(e, function (e) {
                  n && n(e);
                }, function (n) {
                  n instanceof emedia.event.OpenMediaError && (e.constaints = v), t && t(n);
                });
              }
            }, t);
          }
        }, {
          key: "chanageConstraints",
          value: function value(e, t, n, r) {
            var i = this;

            if ("string" == typeof e ? e = i.current._cacheStreams[e] : e.id && (e = i.current._cacheStreams[e.id]), e) {
              if (_n.info("chanage pubstream constraints. it", e.id, t), gn.isObject(t) && !gn.isEqual(e.constaints, t)) {
                var o = e.constaints || {},
                    a = e.voff,
                    s = e.aoff;
                return e._lastConstaints = o, e.constaints = Qe.extend(!0, {}, o, t), e.aoff = e.constaints.audio ? 0 : 1, e.voff = e.constaints.video ? 0 : 1, void i._republish(e, function (e) {
                  c(), r && r(e);
                }, function (t) {
                  t instanceof emedia.event.OpenMediaError && (e.constaints = o, e.aoff = s, e.voff = a), n && n(t);
                });
              }

              c(), r && r(e.getMediaStream());
            } else _n.warn("Not found pubS");

            function c() {
              var t = e.getMediaStream();
              emedia.enableVideoTracks(t, !e.voff), emedia.enableAudioTracks(t, !e.aoff);
            }
          }
        }, {
          key: "voff",
          value: function value(e, t, n, r) {
            var i = this;
            "string" == typeof e && (e = i.current._cacheStreams[e]);
            var o = e.voff;

            function a() {
              t != o ? (emedia.enableVideoTracks(e.getMediaStream(), !t), i.current && i.current.voff(e, t)) : _n.info("pubstream voff not chanage.");
            }

            if (t = t ? 1 : 0, e.voff = t, !t && e.constaints && !e.constaints.video) {
              var s = e.constaints.video;
              return e.constaints.video = !0, void i._republish(e, function (e) {
                a(), r && r(e);
              }, function (t) {
                t instanceof emedia.event.OpenMediaError && (e.constaints.video = s, e.voff = o), n && n(t);
              });
            }

            a(), r && r(e.getMediaStream());
          }
        }, {
          key: "aoff",
          value: function value(e, t, n, r) {
            var i = this;
            "string" == typeof e && (e = i.current._cacheStreams[e]);
            var o = e.aoff;

            function a() {
              t != o ? (emedia.enableAudioTracks(e.getMediaStream(), !t), i.current && i.current.aoff(e, t)) : _n.info("pubstream aoff not chanage.");
            }

            if (t = t ? 1 : 0, e.aoff = t, !t && e.constaints && !e.constaints.audio) {
              var s = e.constaints.audio;
              return e.constaints.audio = !0, void i._republish(e, function (e) {
                a(), r && r(e);
              }, function (t) {
                t instanceof emedia.event.OpenMediaError && (e.constaints.audio = s, e.aoff = o), n && n(t);
              });
            }

            a(), r && r(e.getMediaStream());
          }
        }, {
          key: "iceing",
          value: function value(e) {
            return gn.isPlainObject(this.current._linkedStreams[e]);
          }
        }, {
          key: "recording",
          value: function value(e) {
            return gn.isPlainObject(this.current._records[e]);
          }
        }, {
          key: "startRecord",
          value: function value(e, t) {
            var n = this.current._linkedStreams[e];
            if (!n) throw _n.error("not at linked streams", e), e + " not at linked streams";
            n._webrtc || t && t(!1), this.current.startRecord(n, t);
          }
        }, {
          key: "stopRecord",
          value: function value(e, t) {
            var n = this.current._records[e];
            if (!n) throw _n.error("not at recording streams", e), e + " not at recording streams";
            this.current.stopRecord(n, t);
          }
        }, {
          key: "getCurrentMembers",
          value: function value() {
            return this.current.getCurrentMembers();
          }
        }, {
          key: "_onCapturePicture",
          value: function value(e) {
            var t,
                n = this,
                r = e.arg.rspBase64Pic,
                i = e.arg.streamId,
                o = n.current._cacheStreams[i];

            if (r) {
              var a;
              if ("function" != typeof n.getHTMLVideo || !(a = n.getHTMLVideo(i))) return void _n.warn("Not support capture picture. caused by htmlVideo not found");
              t = n.getCaptureBase64Context(a);
            } else {
              if ("function" != typeof n.onCapturePicture) return void _n.warn("Not support capture picture. caused by onCapturePicture not found");
              n.onCapturePicture(o);
            }

            var s = n.current.newMessage({
              op: 1001,
              tsxId: e.tsxId,
              memId: e.memId,
              arg: Ne()(t ? {
                pic: t
              } : {}),
              result: 0
            });
            return n.current.postMessage(s, function (e) {
              _n.warn("Send remote control onCapturePicture response. the result = ", e.result, e.msg || "");
            }), !0;
          }
        }, {
          key: "newSession",
          value: function value(e, t) {
            var n = this;
            return new (n.Session || Gt)({
              ticket: t,
              owner: e,
              onTcklC: function onTcklC(t) {
                e.onTcklC(t.rtcId, t.cands);
              },
              onAcptC: function onAcptC(t) {
                e.onAcptC(t.rtcId, t.sdp, t.cands);
              },
              onAnsC: function onAnsC(t) {
                e.onAnsC(t.rtcId, t.sdp, t.cands);
              },
              onTermC: function onTermC(t) {
                _n.info("Server termc rtc: ", t.rtcId, t.message || t.msg), 21 === t.endReason || 22 === t.endReason ? ut(e._cacheStreams, function (n, r) {
                  var i;
                  r.rtcId === t.rtcId && (i = 21 === t.endReason ? new emedia.event.SwitchVCodes({
                    stream: r,
                    useVCodes: t.useVCodes
                  }) : new emedia.event.SubFailNotSupportVCodes({
                    stream: r
                  }), e.onEvent(i));
                }) : e.closeWebrtc(t.rtcId, !1, !0);
              },
              onEnter: function onEnter(t) {
                e.onEnter(t.cver, t.mem);
              },
              onExit: function onExit(t) {
                e.onExit(t.cver, t.memId, t.reason || 0);
              },
              onPub: function onPub(t) {
                e.onPub(t.cver, t.memId, t.pubS);
              },
              onUnpub: function onUnpub(t) {
                e.onUnpub(t.cver, t.memId, t.pubSId);
              },
              onMems: function onMems(e) {},
              onClose: function onClose(t) {
                e.onClose(t.cver, t.confrId);
              },
              onEvent: function onEvent(t) {
                e.onEvent(t);
              },
              onStreamControl: function onStreamControl(t) {
                e.onStreamControl(t.cver, t.streamId, t.voff, t.aoff, t.sver);
              },
              onRoleUpdate: function onRoleUpdate(t) {
                e._onRoleUpdate(t.role, t.roleToken);
              },
              onRemoteControl: function onRemoteControl(t) {
                if ("string" == typeof t.arg && (t.arg = JSON.parse(t.arg)), 20 !== t.arg.op2 || !t.arg.pic || !n._onCapturePicture.call(n, t)) {
                  if (30 === t.arg.op2 && n._onRemotePannelControl) try {
                    return void n._onRemotePannelControl.call(n, t);
                  } catch (e) {
                    _n.warn(e);
                  }

                  _n.warn("Not support remote control");

                  var r = e.newMessage({
                    op: 1001,
                    tsxId: t.tsxId,
                    memId: t.memId,
                    arg: Ne()(t.arg),
                    result: t && t.arg && 30 === t.arg.op2 ? -405 : -507,
                    msg: "Not support the remote control."
                  });
                  e.postMessage(r, function (e) {
                    _n.warn("Send remote control response. the result = ", e.result, e.msg || "");
                  });
                }
              },
              onRecvRemoteMessage: function onRecvRemoteMessage(t) {
                e._onRecvRemoteMessage && e._onRecvRemoteMessage(t.memId, t.arg, t);
              }
            });
          }
        }, {
          key: "_judgeTalking",
          value: function value(e) {
            return !!e && e.instant >= emedia.config.judgeTalkingByInstantGE;
          }
        }, {
          key: "graffitiVideo",
          value: function value(e, t, n) {
            var r = this.getStreamById(e),
                i = new MediaStream();
            i._located = !0, r._localMediaStream.getAudioTracks().forEach(function (e) {
              i.addTrack(e);
            }), n.captureStream(25).getVideoTracks().forEach(function (e) {
              i.addTrack(e);
            }), t.srcObject = i, r.updateAttributes({
              localStream: i,
              isRepublished: !0,
              optimalVideoCodecs: r.optimalVideoCodecs
            }), this.push(r);
          }
        }, {
          key: "resetCanvas",
          value: function value(e) {
            var t;
            if (arguments.length > 1) for (var n = 0; n < arguments.length; n++) {
              "function" == typeof (t = arguments[n]) && t(e), "function" != typeof t && gn.isPlainObject(t) && ut(t, function (t, n) {
                _n.debug("Canvas set ", t, " = ", n), e.setAttribute(t, n);
              });
            }
          }
        }, {
          key: "requestFrame",
          value: function value(e, t) {
            var n,
                r = this;
            if ("string" == typeof e) n = this.current._cacheStreams[e];else {
              if (!e.id) return;
              n = this.current._cacheStreams[e.id];
            }

            function i() {
              n.requestFrame(), n.canvas && redraw(3, 3);
            }

            n && (t ? setTimeout(function () {
              i(), r.requestFrame(n, t);
            }, t) : i());
          }
        }, {
          key: "graffitiCanvas",
          value: function value(e, t) {
            Fe(e) && (t = e, e = !1);
            var n = this,
                r = new n.ShareDesktopPubstream({
              voff: 0,
              aoff: e ? 0 : 1
            });
            t || (t = document.createElement("canvas")), t.getContext("2d"), r.canvas = t;

            var i = function i() {};

            return i.prototype.setCanvas = function (e) {
              return this.canvasTag = t, n.resetCanvas(t, e), this;
            }, i.prototype.push = function (e, t) {
              this._push(e, t);
            }, i.prototype._push = function (i, o) {
              "function" == typeof i && (o = i, i = void 0), t.captureStream && (t.captureStream.enabled = !0);
              var a = t.captureStream(i || 25);

              function s(n) {
                n.canvas = t, o && o(n, t, a), e && n.requestFrame();
              }

              function c(e, t) {
                var r = new MediaStream();
                r._located = !0, e._localMediaStream && e._localMediaStream.getAudioTracks().forEach(function (e) {
                  r.addTrack(e);
                }), a.getVideoTracks().forEach(function (e) {
                  r.addTrack(e);
                }), e._localMediaStream = r, e.localStream = r, n.push(e, t);
              }

              return e ? n.__getUserMedia({
                audio: !0
              }, function (e, t) {
                r._localMediaStream = t, c(r, s);
              }) : c(r, s), this;
            }, new i();
          }
        }, {
          key: "blobRecorder",
          value: function value(e, t, n, r) {
            var i = this;
            Fe(e) && (e = e.srcObject), t || (t = {
              mimeType: "video/webm;codecs=vp9"
            }), MediaRecorder.isTypeSupported(t.mimeType) || (_n.info(t.mimeType, " is not Supported"), t = {
              mimeType: "video/webm;codecs=vp8"
            }, MediaRecorder.isTypeSupported(t.mimeType) || (_n.info(t.mimeType, " is not Supported"), t = {
              mimeType: "video/webm"
            }, MediaRecorder.isTypeSupported(t.mimeType) || (_n.info(t.mimeType, " is not Supported"), t = {
              mimeType: ""
            })));

            try {
              var o = new MediaRecorder(e, t);
            } catch (e) {
              return void _n.error("Exception while creating MediaRecorder: ", e);
            }

            var a = [];

            function s() {
              this.blobs = a;
            }

            return o.onstop = r || function (e) {
              _n.info("Recorder stopped: ", e);
            }, o.ondataavailable = n || function (e) {
              e.data && e.data.size > 0 && a.push(e.data);
            }, s.prototype.start = function (e) {
              o.start(e);
            }, s.prototype.stop = function () {
              o.stop();
            }, s.prototype.playurl = function (e) {
              var t = new Blob(this.blobs, e || {
                type: "video/webm"
              });
              return window.URL.createObjectURL(t);
            }, s.prototype.download = function (e, t) {
              var n = new Blob(this.blobs, t || {
                type: "video/webm"
              });
              i.downloadFile(e, void 0, n);
            }, new s();
          }
        }]), e;
      }();

      var bn = function () {
        function e(t) {
          s(this, e), f(this, "pannel", {}), f(this, "event", Wt);

          var n = t.config,
              r = function (e) {
            var t,
                n,
                r = p()({}, h, e),
                i = {};

            for (var o in r) {
              i[o] = r[o], "logLevel" === o && (i.LOG_LEVEL = r[o]);
            }

            return r.loglastConfrCount && (t = new Array(r.loglastConfrCount), n = -1), {
              mergedConfig: i,
              _logContext: t,
              _logContextIndex: n
            };
          }(n),
              i = r.mergedConfig,
              o = r._logContext,
              a = r._logContextIndex;

          this.config = i, this._logContext = o, this._logContextIndex = a, this.CompositeCanvas = at, this.stopAudioTracks = mt, this.stopAndRemoveAudioTracks = gt, this.stopTracks = _t, this.enableVideoTracks = yt, this.enableAudioTracks = bt, this.hasEnabledTracks = St, this.fileReport = Ct, this.PCStats = vt, this.Service = yn, this.helper = {
            PCStats: vt,
            pcstats: vt.echo,
            intervalPcstats: vt.intervalEcho,
            inboundAudio: vt.inboundAudio,
            inboundVideo: vt.inboundVideo,
            outboundAudio: vt.outboundAudio,
            outboundVideo: vt.outboundVideo
          }, this.LOG_LEVEL = n.LOG_LEVEL, window.emedia = this, this.bAPI();
        }

        return d(e, [{
          key: "bAPI",
          value: function value() {
            if (this.config.getMediaMeterIntervalMillis) {
              this.__audioContext = new De(), this.__usingWebAudio = !0;

              try {
                "function" == typeof De || (this.__usingWebAudio = !1);
              } catch (e) {
                this.__usingWebAudio = !1;
              }

              this.__usingWebAudio || console.warn("'new AudioContext()' failed. can not know who talking."), this.__audioContext && "suspended" === this.__audioContext.state && console.warn("audioContext.state is suspended. can not know who talking. You can resume() this.__audioContext, but only in response to a tap.");
            }

            window.requestAnimationFrame && this.config._useRequestAnimationFrame ? this.requestAnimationFrame = function (e) {
              window.requestAnimationFrame(e);
            } : this.requestAnimationFrame = function (e, t) {
              return setTimeout(e, t || this.config.getMediaMeterIntervalMillis);
            }, window.cancelAnimationFrame && this.config._useRequestAnimationFrame ? this.cancelAnimationFrame = function (e) {
              window.cancelAnimationFrame(e);
            } : this.cancelAnimationFrame = function (e) {
              clearTimeout(e);
            };
          }
        }]), e;
      }();

      emedia.pannel || (emedia.pannel = {});
      var Sn = bn;
    }(), r.default;
  }();
});
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

var _EmediaSDK = _interopRequireDefault(require("./EmediaSDK"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function $(selector) {
  return document.querySelector(selector);
} // class RtcWidget{
// 	localStream = null
// 	localShareStream = null
// 	mainWindowItem = null
// 	constructor({appId, appKey, serviceUrl, userId}){
// 		this.appId = appId
// 		this.appKey = appKey
// 		this.serviceUrl = serviceUrl
// 		this.userId = userId
// 		this.initSDK()
// 		console.log(this)
// 	}
// 	initSDK(){
// 		const {onMeExit, onAddMember, onRemoveMember, onAddStream, onRemoveStream, onUpdateStream } = this
// 		const emedia = new EmediaSDK({
// 			config: {
// 				LOG_LEVEL: 5
// 			}
// 		})
// 		const service = new emedia.Service({
// 			listeners: {
// 				onMeExit,
// 				onAddMember,
// 				onRemoveMember,
// 				onAddStream,
// 				onRemoveStream,
// 				onUpdateStream
// 			}
// 		})
// 		this.emedia = emedia
// 		this.service = service
// 	}
// 	onMeExit(){
// 		console.log('触发onMeExit，原因:', ...rest)
// 		this.localStream = null
// 		this.mainWindowItem = null
// 		this.$videoList.innerHTML = ""
// 		$('#header').style.display = "flex"
// 		console.log("reset all...")
// 	}
// 	onAddMember = member => {
// 		console.log("member add>>>>", member)
// 		const name = member.ext.nickname || member.nickName || member.name || member.memName 
// 		// 成员播放器创建
// 		this.createVideoPlayer(member.id, name)
// 	}
// 	onRemoveMember = member => {
// 		console.log("member remove>>>>", member)
// 		this.removeVideoPlayer(member.id)
// 	}
// 	onAddStream = stream => {
// 		console.log("stream add>>>>", stream)
// 		const nickname = stream.located() ? "我" : stream.owner.ext.nickname || stream.owner.name
// 		// 针对桌面共享单独处理
// 		if(stream.type == 1){
// 			this.createVideoPlayer(stream.id, nickname + "的桌面")
// 		}
// 	}
// 	onRemoveStream = stream => {
// 		console.log("stream remove>>>>", stream)
// 		// 桌面共享的流单独处理，因为不会触发onRemoveMember
// 		if(stream.type == 1){
// 			// 清除缓存的本地共享流
// 			if(stream.located()){
// 				this.localShareStream = null;
// 			}
// 			this.removeVideoPlayer(stream.id)
// 		}
// 	}
// 	onUpdateStream = stream => {
// 		console.log("stream update>>>>", stream)
// 			const mediaStream = stream.getMediaStream()
// 			// 针对桌面共享单独处理
// 			if(stream.type == 1){
// 				$("#" + stream.id + " video").srcObject = mediaStream
// 			}
// 			if(stream.type == 0){
// 				if(stream.located()){
// 					localStream = stream
// 					if(!$('#localstream')){
// 						this.createVideoPlayer("localstream", '我')
// 					}
// 					$("#localstream video").srcObject = mediaStream
// 				}else{
// 					$("#" + stream.memId + " video").srcObject = mediaStream
// 				}
// 			}
// 	}
// 	createVideoPlayer = (id, name) => {
// 		if($('#' + id)){
// 			return $('#' + id)
// 		}
// 		console.log(this.$videoList)
// 		const item = document.createElement("div")
// 		const videoTag = document.createElement("video")
// 		const nameTag = document.createElement("span")
// 		item.id = id
// 		videoTag.autoplay = true
// 		videoTag.playsInline = true
// 		nameTag.innerText = name
// 		if(id === "localstream"){
// 			videoTag.muted = true
// 		}
// 		item.addEventListener("click", () => {
// 			swithVideoToMain(item)
// 		})
// 		item.appendChild(videoTag)
// 		item.appendChild(nameTag)
// 		this.$videoList.appendChild(item)
// 		return item
// 	}
// 	removeVideoPlayer(id){
// 		const videoTag = $("#" + id)
// 		if(!videoTag) return
// 		this.$videoList.removeChild(videoTag)
// 	}
// 	setPlayerToMain(ele){
// 		if(this.currentMainScreenItem){
// 			this.currentMainScreenItem.className = ""
// 		}
// 		ele.className = "mainScreen"
// 		this.currentMainScreenItem = item;
// 	}
// 	publishStream = (constaints, success, error) => {
// 		const {service} = this
// 		const	_pubS = new service.AVPubstream({
// 			constaints,
// 			aoff: 0,
// 			voff: 0,
// 			name: 'video'
// 		})
// 		service.openUserMedia(_pubS).then(function () {
// 			console.log('open success')
// 			service.push(_pubS, function(stream){
// 				console.log('push ok')
// 				success && success()
// 			}, function(err){
// 				console.log(err)
// 				error && error(err)
// 			})
// 		}, function(err){
// 			error && error(err)
// 		})
// 	}
// 	joinRoom(roomId, success){
// 		const that = this
// 		if(!roomId){
// 			return
// 		}
// 		// 获取进入指定房间的ticket
// 		that.getTicket(roomId).then(result => {
// 			// 设置要加入房间ticket
// 			that.service.setup(result.ticket, {})
// 			// 加入房间并打开设备推流
// 			that.service.join(() => {
// 				// 流配置
// 				that.publishStream({
// 					audio: true,
// 					video: true
// 				})
// 				success && success()
// 			})
// 		})
// 	}
// 	getUserSig({userId, appId, appKey}){
// 		return fetch(`https://private-preview-media.easemob.com/management/room/player/usersig?name=${userId}&sdkAppId=${appId}&sdkAppKey=${appKey}`)
// 	.then(res => res.text())
// 	}
// 	getTicket(roomId){
// 		const {appId, appKey, userSig, userId, serviceUrl} = this
// 		if(userSig){
// 			return fetch(`${serviceUrl}/emedia/enter_room?app_id=${appId}&user_sig=${userSig}&room_id=${roomId}&user_id=${userId}&_=${+new Date}`).then(res => res.json())
// 		}else{
// 			return this.getUserSig({userId, appId, appKey}).then(userSig => {
// 				this.userSig = userSig
// 				return fetch(`${serviceUrl}/emedia/enter_room?app_id=${appId}&user_sig=${userSig}&room_id=${roomId}&user_id=${userId}&_=${+new Date}`).then(res => res.json())
// 			})
// 		}
// 	}
// 	render(selector){
// 		const container = document.createElement("div")
// 		const list = document.createElement("div")
// 		container.id = "ui-video-container"
// 		list.id = "ui-video-list"
// 		container.appendChild(list)
// 		$(selector).appendChild(container)
// 		this.$videoList = $("#ui-video-list")
// 	}
// }
// const userId = "ae_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
// const widget = new RtcWidget({
// 	serviceUrl: "https://private-preview-media.easemob.com",
// 	appId: "827212690214645824",
// 	appKey: "Y25Sak9nbnVlN1pLv3Bm5FCJBquhPsL5csn06k3AOlQ",
// 	userId
// })
// widget.render('#app')
// $("#joinRoom").addEventListener("click", () => {
// 	const roomId = document.querySelector("input").value || "room001"
// 	widget.joinRoom(roomId, () => {
// 		$('#header').style.display = "none"
// 	})
// })
// return


var username = localStorage.getItem("emedia_username") || "ae_" + ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1); /// 随机一个名字

var serverUrl = "https://private-preview-media.easemob.com";
var appId = "827212690214645824";
var appKey = "Y25Sak9nbnVlN1pLv3Bm5FCJBquhPsL5csn06k3AOlQ";
var userSig = "";
var localStream = null;
var localSharedDesktopStream = null;
var currentMainScreenItem = null;
var $videoMain = $("#ui-video-main video"); // 主视频

var $videoList = $('#ui-video-list'); // 成员列表

localStorage.setItem("emedia_username", username);

function swithVideoToMain(item) {
  if (currentMainScreenItem) {
    currentMainScreenItem.className = "";
  }

  item.className = "mainScreen";
  currentMainScreenItem = item;
}

function createMiniVideoPalyer(id, name) {
  if ($('#' + id)) {
    return $('#' + id);
  }

  var item = document.createElement("div");
  var videoTag = document.createElement("video");
  var nameTag = document.createElement("span");
  item.id = id;
  videoTag.autoplay = true;
  videoTag.playsInline = true;
  nameTag.innerText = name;

  if (id === "localstream") {
    videoTag.muted = true;
  }

  item.addEventListener("click", function () {
    swithVideoToMain(item);
  });
  item.appendChild(videoTag);
  item.appendChild(nameTag);
  $videoList.appendChild(item);
  return item;
}

function removeVideoPlayer(id) {
  var videoTag = $("#" + id);
  if (!videoTag) return;
  $videoList.removeChild(videoTag);
}

var emedia = window.emedia = new _EmediaSDK.default({
  config: {
    LOG_LEVEL: 5
  }
});
var service = window.service = new emedia.Service({
  listeners: {
    onMeExit: function onMeExit() {
      var _console;

      for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      (_console = console).log.apply(_console, ['触发onMeExit，原因:'].concat(rest));

      localStream = null;
      currentMainScreenItem = null;
      $videoList.innerHTML = "";
      $('#header').style.display = "flex";
      console.log("reset all...");
    },
    onAddMember: function onAddMember(member) {
      console.log("member add>>>>", member);
      var name = member.ext.nickname || member.nickName || member.name || member.memName; // 成员播放器创建

      createMiniVideoPalyer(member.id, name);
    },
    onRemoveMember: function onRemoveMember(member) {
      console.log("member remove>>>>", member);
      removeVideoPlayer(member.id);
    },
    // 流的增加，仅用于统计人数，不处理流
    onAddStream: function onAddStream(stream) {
      console.log("stream add>>>>", stream);
      var nickname = stream.located() ? "我" : stream.owner.ext.nickname || stream.owner.name;

      if (stream.located() && stream.type == 0) {
        $('#header').style.display = "none"; // 自己的流进来
      } // 针对桌面共享单独处理


      if (stream.type == 1) {
        createMiniVideoPalyer(stream.id, nickname + "的桌面");
      }
    },
    // 某成员的流退出（包含本地流、音视频流，共享桌面等）
    onUpdateStream: function onUpdateStream(stream, updateObj) {
      console.log("stream update>>>>", stream);
      var mediaStream = stream.getMediaStream(); // 针对桌面共享单独处理

      if (stream.type == 1) {
        $("#" + stream.id + " video").srcObject = mediaStream;
      }

      if (stream.type == 0) {
        if (stream.located()) {
          localStream = stream;

          if (!$('#localstream')) {
            createMiniVideoPalyer("localstream", '我');
          }

          $("#localstream video").srcObject = mediaStream;
        } else {
          $("#" + stream.memId + " video").srcObject = mediaStream;
        }
      }
    },
    // 某成员的流退出（包含本地流、音视频流，共享桌面等）
    onRemoveStream: function onRemoveStream(stream) {
      console.log("stream remove>>>>", stream); // 桌面共享的流单独处理，因为不会触发onRemoveMember

      if (stream.type == 1) {
        // 清除缓存的本地共享流
        if (stream.located()) {
          localSharedDesktopStream = null;
        }

        removeVideoPlayer(stream.id);
      }
    },
    onNotifyEvent: function onNotifyEvent(evt) {
      console.log("event>>>>", evt);
    }
  }
}); // getUserSig接口 可以根据项目经理提供的文档在自己服务实现，此处接口服务仅作演示使用

function getUserSig(userId) {
  return fetch("https://private-preview-media.easemob.com/management/room/player/usersig?name=".concat(userId, "&sdkAppId=").concat(appId, "&sdkAppKey=").concat(appKey)).then(function (res) {
    return res.text();
  });
}

function getTicket(roomId) {
  return fetch("".concat(serverUrl, "/emedia/enter_room?app_id=").concat(appId, "&user_sig=").concat(userSig, "&room_id=").concat(roomId, "&user_id=").concat(username, "&_=").concat(+new Date())).then(function (res) {
    return res.json();
  });
}

function publishMediaStream(constaints, success, error) {
  var _pubS = new service.AVPubstream({
    constaints: constaints,
    aoff: 0,
    voff: 0,
    name: 'video'
  });

  service.openUserMedia(_pubS).then(function () {
    service.push(_pubS, function (stream) {
      success && success();
    }, function (err) {
      error && error(err);
    });
  }, function (err) {
    error && error(err);
  });
}

function joinRtcRoom(roomId) {
  if (!roomId) {
    return;
  } // 获取进入指定房间的ticket


  getTicket(roomId).then(function (result) {
    // 设置要加入房间ticket
    service.setup(result.ticket, {
      role: '',
      avatar: '',
      nickname: username
    }); // 加入房间并打开设备推流

    service.join(function () {
      // 流配置
      publishMediaStream({
        audio: true,
        video: true
      });
    });
  });
} // 获取并保存用户签名


getUserSig(username).then(function (res) {
  return userSig = res;
}); // 加入（创建）房间

$("#joinRoom").addEventListener("click", function () {
  // 自己起个roomId
  var roomId = document.querySelector("input").value || "room001";
  joinRtcRoom(roomId);
}); // 自己退

$("#exitRoom").addEventListener("click", function () {
  service.exit();
}); // 解散房间

$("#destroyRoom").addEventListener("click", function () {
  service.exit(true);
}); // $('#userCamera').addEventListener("click", () => {
// 	if(!localStream) return
// 	service.hungup(localStream.id)
// 	publishMediaStream({
// 		audio: true,
// 		video: true
// 	})
// })
// $('#backCamera').addEventListener("click", () => {
// 	if(!localStream) return
// 	service.hungup(localStream.id)
// 	publishMediaStream({
// 		audio: true,
// 		video: { facingMode: { exact: "environment" } }
// 	}, () => {
// 	}, () => {
// 		publishMediaStream({
// 			audio: true,
// 			video: true
// 		})
// 	})
// })

$("#changeCamera").addEventListener("click", function () {
  var videoOptions = null;
  if (!localStream || localStream.voff) return;

  if (localStream.constaints.video === true) {
    videoOptions = {
      facingMode: {
        exact: "environment"
      }
    };
  } else if (_typeof(localStream.constaints.video) === "object") {
    if (_typeof(localStream.constaints.video.facingMode) === "object") {
      videoOptions = true;
    } else {
      videoOptions = {
        facingMode: {
          exact: "environment"
        }
      };
    }
  } // 先结束当前流释放出设备 否则有的终端无法直接切换调用其它硬件


  service.hungup(localStream.id);
  publishMediaStream({
    audio: localStream.constaints.audio,
    video: videoOptions
  }, function () {
    console.log("摄像头切换成功");
  }, function (err) {
    console.log("摄像头切换失败", err);
    publishMediaStream({
      audio: localStream.constaints.audio,
      video: localStream.constaints.video
    });
  });
});
$("#voff").addEventListener("click", function () {
  localStream && service.voff(localStream, !localStream.voff);
});
$('#shareDesktop').addEventListener("click", function () {
  // 无开启的会议
  if (!localStream || localSharedDesktopStream) {
    localSharedDesktopStream && service.hungup(localSharedDesktopStream.id);
    return;
  } // 配置共享桌面选项


  var shareStream = new service.ShareDesktopPubstream({
    voff: 0,
    aoff: 0,
    isAgentShare: true,
    ext: {},
    screenOptions: ['screen', 'window', 'tab']
  }); // 打开设备并推流

  service.openUserMedia(shareStream).then(function () {
    service.push(shareStream, function (localShareStream) {
      var deskMediaStream = localShareStream.getLocalMediaStream(); // 监听桌面共享被取消

      deskMediaStream.getVideoTracks()[0].onended = function () {
        service.hungup(localShareStream.id);
      };

      localSharedDesktopStream = localShareStream;
    }, function () {});
  });
});
},{"./EmediaSDK":"src/EmediaSDK.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61920" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map