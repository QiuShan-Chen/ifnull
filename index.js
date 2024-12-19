var Anura = (function() {
  var responseCallback = 'function' === typeof anuraCallbackFunction ? anuraCallbackFunction : null;
  var RT = (function() {
      'use strict';
      var rt = {
          adblocker: 1,
          wait: 0,
          scheme: 'https:',
          host: 'script.anura.io',
          abhost: 'ads.anura.io',
          response: 'response.json',
          result: 'result.json',
          control: '72079942',
          dtw: 'debugger;',
          token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiIzMzY0NTE4ODY0IiwiaWF0IjoxNzM0NTczNTU4LjcwMjU4LCJuYmYiOjE3MzQ1NzM1NTguNzAyNTgsImV4cCI6MTczNDU3MzYxOC43MDI1OCwianRpIjoiS04xRlZ4cy95b2lrY3liNCIsImF1ZCI6IjM2NTU5ODU5MzUiLCJtdGkiOiIwLjcwMjU4MCIsInNsdCI6IjI4UUJsTWV3Z1VWUSIsInNyYyI6Im51bGwiLCJjbXAiOiJudWxsIiwidXNyIjoiTW96aWxsYSUyRjUuMCslMjhNYWNpbnRvc2glM0IrSW50ZWwrTWFjK09TK1grMTBfMTVfNyUyOStBcHBsZVdlYktpdCUyRjUzNy4zNislMjhLSFRNTCUyQytsaWtlK0dlY2tvJTI5K0Nocm9tZSUyRjEzMS4wLjAuMCtTYWZhcmklMkY1MzcuMzYiLCJyZWYiOiJodHRwcyUzQSUyRiUyRnd3dy5hbnVyYS5pbyUyRiUzRmFuX210ZXhhdWQlM0Rhbl9tZXRhX2V4YXVkMjIyM2JiaXRkajUwZjRhaiIsImdlbyI6IntcInJlbW90ZV9hZGRyZXNzXCI6XCIxNzEuMjE4LjIxNy43MFwiLFwiaXNwXCI6XCJDaGluYStUZWxlY29tXCIsXCJvcmdhbml6YXRpb25cIjpcIkNoaW5hK1RlbGVjb21cIixcImxhdGl0dWRlXCI6MzAuNjQ5OCxcImxvbmdpdHVkZVwiOjEwNC4wNTU1fSJ9.PQGozTkVZ6U56QUB069MdlkNAnVVluATfOH-H3IQLlNh1TVi0ZKSyFkWpc9QDtphuTQ7w9FUlwlNsVmZiinh1A'
      };
      try {
          Object.freeze(rt);
      } catch (e) {}
      ;var returnVars = {
          getVars: function() {
              return rt
          }
      };
      try {
          Object.freeze(returnVars);
      } catch (e) {}
      ;return returnVars;
  }
  )();
  var Anura = (function() {
      function bb(a) {
          if (!C.error && !Aa && !Ia)
              try {
                  if (Ia = !0,
                  "string" === typeof B.scheme && "string" === typeof B.host && "string" === typeof B.result)
                      if ("object" === typeof XDomainRequest) {
                          var b = new XDomainRequest;
                          b.open("POST", ("https:" === w.location.protocol ? B.scheme : B.scheme.replace("https:", "http:")) + "//" + B.host + "/" + B.result + "?" + Math.floor(1E12 * Math.random() + 1));
                          b.onprogress = function() {}
                          ;
                          b.ontimeout = function() {}
                          ;
                          b.onerror = function() {}
                          ;
                          b.onload = function() {
                              this.responseText && aa(this, a)
                          }
                          ;
                          setTimeout(function() {
                              b.send(Ja())
                          }, 0);
                          Aa = !0
                      } else
                          (b = ia()) ? (b.open("POST", B.scheme + "//" + B.host + "/" + B.result + "?" + Math.floor(1E12 * Math.random() + 1)),
                          b.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                          "object" === typeof b.onload ? b.onload = function() {
                              this.responseText && aa(this, a)
                          }
                          : b.onreadystatechange = function() {
                              4 === b.readyState && b.responseText && aa(b, a)
                          }
                          ,
                          b.send(Ja()),
                          Aa = !0) : aa({
                              responseText: '{"error":"Result not supported"}'
                          }, a);
                  else
                      aa({
                          responseText: '{"error":"Incomplete result params"}'
                      }, a)
              } catch (c) {
                  aa({
                      responseText: '{"error":"Result encountered an unknown error: \'' + c.message + "'\"}"
                  }, a)
              }
      }
      function aa(a, b) {
          a = A(JSON.parse(a.responseText));
          a = ja(a);
          try {
              Object.freeze(a)
          } catch (c) {}
          "object" === typeof a && (F = a);
          "function" === typeof b && b(K)
      }
      function Ja() {
          var a = A(null)
            , b = Ba(B.token.split(".")[1]);
          b = /"aud":\s*"([0-9]+)"/.exec(b);
          a.instance = b[1] ? decodeURIComponent(b[1]) : null;
          "string" === typeof C.id && (a.id = C.id);
          "string" === typeof C.exid && (a.exid = C.exid);
          return Ca(a).join("&")
      }
      function cb(a) {
          try {
              var b = A(null);
              b.id = encodeURIComponent("undefined" !== typeof a.exid && a.exid ? a.exid : a.id);
              b.key = a.cnf.key;
              b.hash = f.s();
              b.nfa = ka;
              b = Ca(b).join("&").replace(/~/g, "%7E");
              if ("object" === typeof XDomainRequest) {
                  var c = new XDomainRequest;
                  c.open("POST", ("https:" === w.location.protocol ? B.scheme : B.scheme.replace("https:", "http:")) + "//" + B.host + "/" + a.cnf.endpoint + "?" + Math.floor(1E12 * Math.random() + 1));
                  c.onprogress = function() {}
                  ;
                  c.ontimeout = function() {}
                  ;
                  c.onerror = function() {}
                  ;
                  c.onload = function() {}
                  ;
                  setTimeout(function() {
                      c.send(b)
                  }, 0)
              } else if (c = ia())
                  c.open("POST", B.scheme + "//" + B.host + "/" + a.cnf.endpoint + "?" + Math.floor(1E12 * Math.random() + 1)),
                  c.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                  "object" === typeof c.onload ? c.onload = function() {}
                  : c.onreadystatechange = function() {}
                  ,
                  c.send(b)
          } catch (h) {}
      }
      function db() {
          try {
              if (Da || "string" !== typeof B.scheme || "string" !== typeof B.host || "string" !== typeof B.response)
                  ba({
                      responseText: '{"error":"Incomplete response params"}'
                  });
              else if ("object" === typeof XDomainRequest) {
                  var a = new XDomainRequest;
                  a.open("POST", ("https:" === w.location.protocol ? B.scheme : B.scheme.replace("https:", "http:")) + "//" + B.host + "/" + B.response + "?" + Math.floor(1E12 * Math.random() + 1));
                  a.onprogress = function() {}
                  ;
                  a.ontimeout = function() {}
                  ;
                  a.onerror = function() {}
                  ;
                  a.onload = function() {
                      this.responseText && ba(this)
                  }
                  ;
                  setTimeout(function() {
                      a.send(Ka())
                  }, 0);
                  Da = !0
              } else
                  (a = ia()) ? (a.open("POST", B.scheme + "//" + B.host + "/" + B.response + "?" + Math.floor(1E12 * Math.random() + 1)),
                  a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                  "object" === typeof a.onload ? a.onload = function() {
                      this.responseText && ba(this)
                  }
                  : a.onreadystatechange = function(e) {
                      4 === a.readyState && a.responseText && ba(a)
                  },
                  a.send(Ka()),
                  Da = !0) : ba({
                      responseText: '{"error":"Browser not supported"}'
                  })
          } catch (b) {
              ba({
                  responseText: '{"error":"Response encountered an unknown error: \'' + b.message + "'\"}"
              })
          }
          "function" === typeof I.close && (I.close(),
          I = !1);
          "function" === typeof J.close && (J.close(),
          J = !1)
      }
      function ba(a) {
          a = A(JSON.parse(a.responseText));
          "object" === typeof a.cnf && cb(a);
          delete a.cnf;
          a = ja(a);
          try {
              Object.freeze(a)
          } catch (b) {}
          "object" === typeof a && (C = a);
          "function" === typeof responseCallback && responseCallback(K)
      }
      function eb() {
          function a(e) {
              if ("function" === typeof I.setLocalDescription) {
                  try {
                      I.setLocalDescription(e)
                  } catch (k) {
                      I.setLocalDescription(e, function() {}, function() {})
                  }
                  var g = setInterval(function() {
                      I && I.localDescription && I.localDescription.sdp && (clearInterval(g),
                      h(I.localDescription.sdp, D.ld),
                      m(I, "rs"),
                      V = !0)
                  }, 80);
                  setTimeout(function() {
                      clearInterval(g);
                      V = !0
                  }, 320 + ca)
              } else
                  V = !0
          }
          function b(e) {
              if ("function" === typeof J.setLocalDescription) {
                  try {
                      J.setLocalDescription(e)
                  } catch (k) {
                      J.setLocalDescription(e, function() {}, function() {})
                  }
                  var g = setInterval(function() {
                      J && J.localDescription && J.localDescription.sdp && (clearInterval(g),
                      h(J.localDescription.sdp, D.sld),
                      m(J, "srs"),
                      W = !0)
                  }, 80);
                  setTimeout(function() {
                      clearInterval(g);
                      W = !0
                  }, 320 + ca)
              } else
                  W = !0
          }
          function c(e, g) {
              if ("object" === typeof e) {
                  if (e.address)
                      e.address && "string" === typeof e.address && 0 > g.indexOf(e.address) && g.push(e.address.replace(/\[|\]/g, ""));
                  else if (e.candidate) {
                      var k = r.exec(e.candidate)
                        , l = y.exec(e.candidate);
                      k && k[0] && 0 > g.indexOf(k[0]) && g.push(k[0]);
                      l && l[0] && 0 > g.indexOf(l[0]) && g.push(l[0])
                  }
                  e.candidate && (e = e.candidate.split(" ")) && e[3] && 0 > D.id.indexOf(e[3]) && D.id.push(e[3])
              }
          }
          function h(e, g) {
              if ("string" === typeof e) {
                  e = e.split("\n");
                  for (var k in e) {
                      k = parseInt(k, 10);
                      if (!/^a=fingerprint/.test(e[k])) {
                          var l = r.exec(e[k])
                            , E = y.exec(e[k]);
                          l && l[0] && 0 > g.indexOf(l[0]) && g.push(l[0]);
                          E && E[0] && 0 > g.indexOf(E[0]) && g.push(E[0])
                      }
                      /^a=candidate/.test(e[k]) && (l = e[k].split(" ")) && l[3] && 0 > D.id.indexOf(l[3]) && D.id.push(l[3])
                  }
              }
          }
          function m(e, g) {
              function k(E, O) {
                  D[E] = "object" === typeof O && "number" === typeof O.size ? O.size : "ns";
                  D["h" + E] = 1
              }
              function l(E, O) {
                  "object" === typeof O && "string" === typeof O.errorText && t(E + "-hsre", O.errorText)
              }
              if ("object" === typeof e && "function" === typeof e.getStats)
                  try {
                      if (la())
                          try {
                              e.getStats(null).then(function(E) {
                                  k(g, E)
                              }, function(E) {
                                  l(g, E)
                              })
                          } catch (E) {
                              e.getStats(function(O) {
                                  k(g, O)
                              }, function(O) {
                                  l(g, O)
                              }, null)
                          }
                      else
                          e.getStats(function(E) {
                              k(g, E)
                          }, function(E) {
                              l(g, E)
                          }, null)
                  } catch (E) {
                      t(g + "-hsr", u(E))
                  }
              else
                  D[g] = "ngs",
                  D["h" + g] = 1
          }
          function q(e, g) {
              "object" === typeof e && "string" === typeof e.errorText && t(g + "-coe", e.errorText)
          }
          var r = /\b(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\b/
            , y = /\b(?:(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){6})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:::(?:(?:(?:[0-9a-fA-F]{1,4})):){5})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){4})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,1}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){3})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,2}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){2})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,3}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:[0-9a-fA-F]{1,4})):)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,4}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,5}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,6}(?:(?:[0-9a-fA-F]{1,4})))?::))))\b/;
          try {
              if (f.i()) {
                  var G = A(null);
                  G.bundlePolicy = "max-bundle";
                  G.iceServers = [];
                  G.iceCandidatePoolSize = 0;
                  var H = A(null);
                  H.url = ma[0];
                  H.urls = ma;
                  var z = A(null);
                  z.bundlePolicy = "max-bundle";
                  z.iceServers = [H];
                  z.iceCandidatePoolSize = ma.length;
                  I = new da(G);
                  J = new da(z);
                  if ("object" === typeof I && "object" === typeof J) {
                      var p = A(null);
                      p.iceRestart = !0;
                      "object" === typeof I.onicecandidate && (I.onicecandidate = function(e) {
                          e && e.candidate && c(e.candidate, D.c)
                      }
                      );
                      "function" === typeof I.createDataChannel && I.createDataChannel("epc");
                      if ("function" === typeof I.createOffer)
                          try {
                              if (la())
                                  try {
                                      I.createOffer(p).then(function(e) {
                                          a(e)
                                      }, function(e) {
                                          q(e, "pc")
                                      })
                                  } catch (e) {
                                      I.createOffer(function(g) {
                                          a(g)
                                      }, function(g) {
                                          q(g, "pc")
                                      }, p)
                                  }
                              else
                                  I.createOffer(function(e) {
                                      a(e)
                                  }, function(e) {
                                      q(e, "pc")
                                  }, p)
                          } catch (e) {
                              t("pc-co", e.message)
                          }
                      else
                          V = !0;
                      "object" === typeof J.onicecandidate && (J.onicecandidate = function(e) {
                          e && e.candidate && c(e.candidate, D.sc)
                      }
                      );
                      "function" === typeof J.createDataChannel && J.createDataChannel("espc");
                      if ("function" === typeof J.createOffer)
                          try {
                              if (la())
                                  try {
                                      J.createOffer(p).then(function(e) {
                                          b(e)
                                      }, function(e) {
                                          q(e, "spc")
                                      })
                                  } catch (e) {
                                      J.createOffer(function(g) {
                                          b(g)
                                      }, function(g) {
                                          q(g, "spc")
                                      }, p)
                                  }
                              else
                                  J.createOffer(function(e) {
                                      b(e)
                                  }, function(e) {
                                      q(e, "spc")
                                  }, p)
                          } catch (e) {
                              t("spc-co", e.message)
                          }
                      else
                          W = !0
                  } else
                      D = 1,
                      W = V = !0
              } else
                  D = 0,
                  W = V = !0
          } catch (e) {
              t("cwrtc", u(e)),
              D = "X",
              W = V = !0
          }
      }
      function fb() {
          function a() {
              "number" === typeof c && clearInterval(c);
              "number" === typeof h && clearInterval(h)
          }
          function b() {
              var r = A(null);
              r.ts = Math.round(P.getTime() / 1E3);
              r.fn = A(null);
              var y = A(null);
              y.wd = f.l();
              y.wa = f.D();
              y.wv = f.F();
              for (var G in y) {
                  var H = y[G];
                  0 !== H && "X" !== H && "?" !== H && (r.fn[G] = H)
              }
              Ea() && Object.keys(r.fn).length && (ea = r.fn,
              La("wds", r),
              a(),
              na = !0)
          }
          var c = null
            , h = null;
          try {
              if (oa() && Ma("wds")) {
                  var m = A(JSON.parse(Ma("wds")));
                  if ("number" === typeof m.ts && "object" === typeof m.fn)
                      if (10800 > Math.round(P.getTime() / 1E3) - m.ts)
                          ea = m.fn;
                      else
                          try {
                              oa() && d.localStorage.removeItem("wds")
                          } catch (r) {
                              t("rls", u(r))
                          }
                  else {
                      var q = A(null);
                      q.ts = Math.round(P.getTime() / 1E3);
                      ea = q.fn = m;
                      La("wds", q)
                  }
              }
              c = setInterval(function() {
                  b()
              }, 80);
              setTimeout(function() {
                  "number" === typeof c && (a(),
                  na = !0,
                  h = setInterval(function() {
                      b()
                  }, 240))
              }, 320 + ca)
          } catch (r) {
              t("cwd", u(r)),
              ea = "X",
              na = !0
          }
      }
      function gb() {
          try {
              if ("function" === typeof Worker && ("function" === typeof URL || "function" === typeof webkitURL)) {
                  var a = "'use strict';onmessage=function(ev){postMessage({dto:true});" + B.dtw + "postMessage({dto:false});close();};";
                  try {
                      var b = new Blob([a],{
                          type: "text/javascript"
                      })
                  } catch (m) {
                      b = new (d.BlobBuilder || d.WebKitBlobBuilder || d.MozBlobBuilder),
                      b.append(a),
                      b.getBlob()
                  }
                  var c = new Worker((URL || webkitURL).createObjectURL(b))
                    , h = void 0;
                  c.addEventListener("message", function(m) {
                      m.data.dto ? (new Promise(function(q) {
                          h = q;
                          setTimeout(function() {
                              h(999)
                          }, 100)
                      }
                      )).then(function(q) {
                          Fa = q;
                          c.terminate()
                      }) : h(!1)
                  });
                  c.postMessage({})
              }
          } catch (m) {
              t("dtw", u(m))
          }
      }
      function hb() {
          try {
              var a = function() {
                  N = w.createElement("iframe");
                  "object" === typeof N && (N.srcdoc = "blank",
                  N.style.width = 0,
                  N.style.height = 0,
                  N.style.border = "none",
                  N.style.display = "none",
                  N.style.visibility = "hidden",
                  w.body.appendChild(N))
              }
                , b = function() {
                  if ("object" === typeof N && (Q = R ? "object" === typeof d.console ? d.console : null : "object" === typeof N && "object" === typeof N.contentWindow && "object" === typeof N.contentWindow.console ? N.contentWindow.console : null,
                  "object" === typeof Q)) {
                      if ("boolean" === typeof X)
                          try {
                              var h = new Image;
                              Object.defineProperty(h, "id", {
                                  get: function() {
                                      X = 900;
                                      return null
                                  }
                              });
                              Q.debug(h)
                          } catch (m) {}
                      if ("boolean" === typeof X)
                          try {
                              Q.debug(Object.defineProperties(Error(), {
                                  message: {
                                      get: function() {
                                          X = 901;
                                          return null
                                      }
                                  },
                                  toString: {
                                      value: function() {
                                          return null
                                      }
                                  }
                              }))
                          } catch (m) {}
                      "boolean" === typeof X && la() && Ga && gb()
                  }
                  pa = !0
              };
              if (w.body)
                  a(),
                  b();
              else {
                  var c = setInterval(function() {
                      w.body && (clearInterval(c),
                      a(),
                      b())
                  }, 80);
                  setTimeout(function() {
                      clearInterval(c);
                      pa = !0
                  }, 320 + ca)
              }
          } catch (h) {
              h.name && "SecurityError" === h.name ? R = !0 : t("cdt", u(h)),
              pa = !0
          }
      }
      function ib() {
          try {
              if ("function" === typeof Worker && ("function" === typeof URL || "function" === typeof webkitURL)) {
                  try {
                      var a = new Blob(["'use strict';close();"],{
                          type: "text/javascript"
                      })
                  } catch (b) {
                      try {
                          a = new (d.BlobBuilder || d.WebKitBlobBuilder || d.MozBlobBuilder),
                          a.append("'use strict';close();"),
                          a.getBlob()
                      } catch (c) {
                          t("wbs", u(c))
                      }
                  }
                  (new Worker((URL || webkitURL).createObjectURL(a))).terminate();
                  return !0
              }
          } catch (b) {
              b.name && "SecurityError" === b.name && (Ga = !1)
          }
      }
      function jb() {
          function a() {
              try {
                  var m = w.createElement("div");
                  "object" === typeof m && (m.id = "anura_content_ads_container",
                  m.innerHTML = "&nbsp;",
                  m.setAttribute("class", "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links content-ads coverads container-ad browsead iframe-ad inhousead adbanner adframe adrotator advertisment advert aff_banner banner banner-ad framead"),
                  m.setAttribute("style", "position:absolute !important; left:-10000px !important; top:-10000px !important; width:1px !important; height:1px !important;"),
                  w.body && w.body.appendChild(m))
              } catch (q) {
                  t("abb", u(q))
              }
              qa = !0
          }
          function b() {
              qa = U = !0
          }
          try {
              if ("string" === typeof B.abhost) {
                  var c = ("https:" === w.location.protocol ? B.scheme : B.scheme.replace("https:", "http:")) + "//" + B.abhost + "/showads.js?" + Math.floor(1E12 * Math.random() + 1);
                  if ("object" === typeof XDomainRequest) {
                      var h = new XDomainRequest;
                      h.open("GET", c);
                      h.timeout = 1E3;
                      h.onprogress = function() {}
                      ;
                      h.ontimeout = a;
                      h.onerror = b;
                      h.onload = a;
                      setTimeout(function() {
                          h.send(null)
                      }, 0)
                  } else
                      (h = ia()) ? (h.open("GET", c),
                      h.timeout = 1E3,
                      h.ontimeout = a,
                      h.onerror = b,
                      "object" === typeof h.onload ? h.onload = function() {
                          0 === this.status ? b() : a()
                      }
                      : h.onreadystatechange = function() {
                          4 === h.readyState && (0 === h.status ? b() : a())
                      }
                      ,
                      h.send(null)) : a()
              } else
                  a()
          } catch (m) {
              t("cab", u(m)),
              a()
          }
      }
      function ia() {
          var a = [function() {
              return new ActiveXObject("MSXML2.XMLHTTP")
          }
          , function() {
              return new ActiveXObject("Microsoft.XMLHTTP")
          }
          , function() {
              return new XMLHttpRequest
          }
          ];
          for (b in a) {
              var b = parseInt(b, 10);
              try {
                  return a[b]()
              } catch (c) {}
          }
          return null
      }
      function kb() {
          function a(q) {
              c.unshift(q);
              10 < c.length && (q = Math.floor(1E4 / (q - c.pop())),
              0 < m && (fa[q] = "undefined" === typeof fa[q] ? 1 : fa[q] + 1),
              m++);
              m < h && !Na && b(a)
          }
          try {
              setTimeout(function() {
                  ra = !0
              }, 320 + ca);
              var b = d.requestAnimationFrame || d.mozRequestAnimationFrame || d.webkitRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame;
              if (b) {
                  var c = []
                    , h = 51
                    , m = 0;
                  b(a)
              } else
                  fa = "?",
                  ra = !0
          } catch (q) {
              t("cfps", u(q)),
              fa = "X",
              ra = !0
          }
      }
      function Ca(a) {
          var b = [], c;
          for (c in a)
              if ("object" === typeof a[c]) {
                  var h = b
                    , m = h.push
                    , q = c + "=";
                  var r = JSON.stringify(a[c]);
                  r = "function" === typeof btoa ? btoa(r) : sa.encode(r);
                  m.call(h, q + r)
              } else
                  b.push(c + "=" + a[c]);
          return b
      }
      function Oa(a) {
          for (var b in a)
              if ("string" === typeof a[b])
                  a[b] = encodeURIComponent(a[b]).replace(/~/g, "%7E");
              else if ("object" === typeof a[b])
                  try {
                      a[b] = Oa(a[b])
                  } catch (c) {}
          return a
      }
      function lb(a) {
          var b = [];
          for (c in a)
              b.push(JSON.stringify(a[c], function(h, m) {
                  return "" === m ? "" : m
              }));
          a = Ba(B.token.split(".")[1]);
          a = /"slt":\s*"([a-z0-9%]+)"/i.exec(a);
          a = a[1] ? decodeURIComponent(a[1]) : null;
          var c = B.control ? B.control : null;
          b.push(a);
          b.push(c);
          return S(b.join("").replace(/[\W]/g, ""))
      }
      function Ka() {
          var a = A(null);
          "string" === typeof B.token && (a.token = B.token);
          a.params = A(null);
          a.params.co = f.$();
          a.params.iw = f.Ca();
          a.params.ow = f.eb();
          a.params.aw = f.O();
          a.params.hi = f.Ba();
          a.params.pl = f.ib();
          a.params.mt = f.Va();
          a.params.jr = f.Ia();
          a.params.je = f.Ga();
          a.params.ax = f.P();
          a.params.gx = f.ya();
          a.params.ud = f.Ib();
          a.params.mz = f.Xa();
          a.params.op = f.cb();
          a.params.lr = f.Ma();
          a.params.ld = f.Ka();
          a.params.sr = f.xb();
          a.params.sd = f.wb();
          a.params.id = f.id();
          a.params.od = f.bb();
          a.params.be = f.S();
          a.params.mr = f.Ua();
          a.params.mk = f.Sa();
          a.params.sx = f.zb();
          a.params.sb = f.vb();
          a.params.ua = f.Hb();
          a.params.vn = f.Lb();
          a.params.an = f.J();
          a.params.av = f.N();
          a.params.is = f.is();
          a.params.mo = f.A();
          a.params.st = f.yb();
          a.params.ab = f.m();
          a.params.ce = f.Y();
          a.params.cx = f.cx();
          a.params.ca = f.X();
          a.params.ox = f.fb();
          a.params.fu = f.s();
          a.params.wp = f.Qb();
          a.params.np = f.Za();
          a.params.wd = f.l();
          a.params.wa = f.D();
          a.params.wv = f.F();
          a.params.ws = f.Sb();
          a.params.dr = f.na();
          a.params.md = f.Qa();
          a.params.ph = f.hb();
          a.params.lx = f.Oa();
          a.params.pp = f.kb();
          a.params.mx = f.Wa();
          a.params.mp = f.Ta();
          a.params.xx = f.Ub();
          a.params.pm = f.jb();
          a.params.ix = f.Da();
          a.params.cw = f.ga();
          a.params.cr = f.fa();
          a.params.dt = f.oa();
          a.params.vp = f.Mb();
          a.params.vd = f.Jb();
          a.params.ap = f.K();
          a.params.au = f.M();
          a.params.me = f.Ra();
          a.params.ed = f.pa();
          a.params.wr = f.Rb();
          a.params.pt = f.mb();
          a.params.wc = f.Ob();
          a.params.af = f.I();
          a.params.bv = f.V();
          a.params.dd = f.ja();
          a.params.no = f.Ya();
          a.params.da = f.ha();
          a.params.hd = f.Aa();
          a.params.jd = f.Fa();
          a.params.jg = f.Ha();
          a.params.pc = f.i();
          a.params.dc = f.ia();
          a.params.rs = f.tb();
          a.params.pf = v.gb();
          a.params.cp = v.ea();
          a.params.hc = v.za();
          a.params.dm = v.ka();
          a.params.ts = v.Eb();
          a.params.tr = v.Db();
          a.params.tz = v.tz();
          a.params.iz = v.Ea();
          a.params.la = v.Ja();
          a.params.ls = v.Na();
          a.params.re = v.ob();
          a.params.ar = v.L();
          a.params.cd = v.o();
          a.params.pd = v.B();
          a.params.xd = v.Tb();
          a.params.yd = v.Vb();
          a.params.dp = v.dp();
          a.params.tp = v.Cb();
          a.params.te = v.Ab();
          a.params.tx = v.Gb();
          a.params.bx = v.W();
          a.params.ba = v.R();
          a.params.bt = v.U();
          a.params.cn = v.Z();
          a.params.px = v.nb();
          a.params.ex = v.ra();
          a.params.gv = v.v();
          a.params.gr = v.u();
          a.params.fp = v.va();
          a.params.fx = v.fx();
          a.params.ma = v.Pa();
          a.params.vi = L.Kb();
          a.params.tv = L.Fb();
          a.params.fr = L.xa();
          a.params.wn = L.Pb();
          a.params.lo = L.La();
          a.params.tl = L.Bb();
          a.params.pr = L.lb();
          a.params.rr = L.rb();
          a.params.rf = L.qb();
          a.params.nt = L.$a();
          a.params.sa = L.ub();
          a.params.bs = L.T();
          a.params.vh = ta.C();
          a.params.vx = ta.Nb();
          a.params.dbg = Y.go();
          "object" === typeof N && "object" === typeof N.parentNode && "function" === typeof N.parentNode.removeChild && N.parentNode.removeChild(N);
          if ("object" === typeof M && null !== M) {
              var b = M.getExtension("WEBGL_lose_context");
              "object" === typeof b && null !== b && "function" === typeof b.loseContext && b.loseContext()
          }
          b = lb(a.params);
          a.params.dh = b;
          displayTarget.innerHTML = JSON.stringify(a.params, null , 2)
          a.params = Oa(a.params);
          try {
              Object.freeze(a)
          } catch (c) {}
          return Ca(a).join("&")
      }
      function Pa(a, b) {
          for (var c in a)
              if ("function" === typeof a[c] && -1 < a[c].toString().toLowerCase().indexOf(b) || "object" === typeof a[c] && Pa(a[c], b))
                  return !0
      }
      function S(a) {
          function b(z, p) {
              return z + p & 4294967295
          }
          function c(z) {
              for (var p = 0; p < z.length; p++) {
                  for (var e = p, g = z[p], k = "", l = 0; 4 > l; l++)
                      k += H[g >> 8 * l + 4 & 15] + H[g >> 8 * l & 15];
                  z[e] = k
              }
              return z.join("")
          }
          function h(z) {
              var p = z.length, e = [1732584193, -271733879, -1732584194, 271733878], g;
              for (g = 64; g <= z.length; g += 64) {
                  var k, l = z.substring(g - 64, g), E = [];
                  for (k = 0; 64 > k; k += 4)
                      E[k >> 2] = l.charCodeAt(k) + (l.charCodeAt(k + 1) << 8) + (l.charCodeAt(k + 2) << 16) + (l.charCodeAt(k + 3) << 24);
                  G(e, E)
              }
              z = z.substring(g - 64);
              k = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (g = 0; g < z.length; g++)
                  k[g >> 2] |= z.charCodeAt(g) << (g % 4 << 3);
              k[g >> 2] |= 128 << (g % 4 << 3);
              if (55 < g)
                  for (G(e, k),
                  g = 0; 16 > g; g++)
                      k[g] = 0;
              k[14] = 8 * p;
              G(e, k);
              return e
          }
          function m(z, p, e, g, k, l, E) {
              return y(e ^ (p | ~g), z, p, k, l, E)
          }
          function q(z, p, e, g, k, l, E) {
              return y(p & g | e & ~g, z, p, k, l, E)
          }
          function r(z, p, e, g, k, l, E) {
              return y(p & e | ~p & g, z, p, k, l, E)
          }
          function y(z, p, e, g, k, l) {
              p = b(b(p, z), b(g, l));
              return b(p << k | p >>> 32 - k, e)
          }
          function G(z, p) {
              var e = z[0]
                , g = z[1]
                , k = z[2]
                , l = z[3];
              e = r(e, g, k, l, p[0], 7, -680876936);
              l = r(l, e, g, k, p[1], 12, -389564586);
              k = r(k, l, e, g, p[2], 17, 606105819);
              g = r(g, k, l, e, p[3], 22, -1044525330);
              e = r(e, g, k, l, p[4], 7, -176418897);
              l = r(l, e, g, k, p[5], 12, 1200080426);
              k = r(k, l, e, g, p[6], 17, -1473231341);
              g = r(g, k, l, e, p[7], 22, -45705983);
              e = r(e, g, k, l, p[8], 7, 1770035416);
              l = r(l, e, g, k, p[9], 12, -1958414417);
              k = r(k, l, e, g, p[10], 17, -42063);
              g = r(g, k, l, e, p[11], 22, -1990404162);
              e = r(e, g, k, l, p[12], 7, 1804603682);
              l = r(l, e, g, k, p[13], 12, -40341101);
              k = r(k, l, e, g, p[14], 17, -1502002290);
              g = r(g, k, l, e, p[15], 22, 1236535329);
              e = q(e, g, k, l, p[1], 5, -165796510);
              l = q(l, e, g, k, p[6], 9, -1069501632);
              k = q(k, l, e, g, p[11], 14, 643717713);
              g = q(g, k, l, e, p[0], 20, -373897302);
              e = q(e, g, k, l, p[5], 5, -701558691);
              l = q(l, e, g, k, p[10], 9, 38016083);
              k = q(k, l, e, g, p[15], 14, -660478335);
              g = q(g, k, l, e, p[4], 20, -405537848);
              e = q(e, g, k, l, p[9], 5, 568446438);
              l = q(l, e, g, k, p[14], 9, -1019803690);
              k = q(k, l, e, g, p[3], 14, -187363961);
              g = q(g, k, l, e, p[8], 20, 1163531501);
              e = q(e, g, k, l, p[13], 5, -1444681467);
              l = q(l, e, g, k, p[2], 9, -51403784);
              k = q(k, l, e, g, p[7], 14, 1735328473);
              g = q(g, k, l, e, p[12], 20, -1926607734);
              e = y(g ^ k ^ l, e, g, p[5], 4, -378558);
              l = y(e ^ g ^ k, l, e, p[8], 11, -2022574463);
              k = y(l ^ e ^ g, k, l, p[11], 16, 1839030562);
              g = y(k ^ l ^ e, g, k, p[14], 23, -35309556);
              e = y(g ^ k ^ l, e, g, p[1], 4, -1530992060);
              l = y(e ^ g ^ k, l, e, p[4], 11, 1272893353);
              k = y(l ^ e ^ g, k, l, p[7], 16, -155497632);
              g = y(k ^ l ^ e, g, k, p[10], 23, -1094730640);
              e = y(g ^ k ^ l, e, g, p[13], 4, 681279174);
              l = y(e ^ g ^ k, l, e, p[0], 11, -358537222);
              k = y(l ^ e ^ g, k, l, p[3], 16, -722521979);
              g = y(k ^ l ^ e, g, k, p[6], 23, 76029189);
              e = y(g ^ k ^ l, e, g, p[9], 4, -640364487);
              l = y(e ^ g ^ k, l, e, p[12], 11, -421815835);
              k = y(l ^ e ^ g, k, l, p[15], 16, 530742520);
              g = y(k ^ l ^ e, g, k, p[2], 23, -995338651);
              e = m(e, g, k, l, p[0], 6, -198630844);
              l = m(l, e, g, k, p[7], 10, 1126891415);
              k = m(k, l, e, g, p[14], 15, -1416354905);
              g = m(g, k, l, e, p[5], 21, -57434055);
              e = m(e, g, k, l, p[12], 6, 1700485571);
              l = m(l, e, g, k, p[3], 10, -1894986606);
              k = m(k, l, e, g, p[10], 15, -1051523);
              g = m(g, k, l, e, p[1], 21, -2054922799);
              e = m(e, g, k, l, p[8], 6, 1873313359);
              l = m(l, e, g, k, p[15], 10, -30611744);
              k = m(k, l, e, g, p[6], 15, -1560198380);
              g = m(g, k, l, e, p[13], 21, 1309151649);
              e = m(e, g, k, l, p[4], 6, -145523070);
              l = m(l, e, g, k, p[11], 10, -1120210379);
              k = m(k, l, e, g, p[2], 15, 718787259);
              g = m(g, k, l, e, p[9], 21, -343485551);
              z[0] = b(e, z[0]);
              z[1] = b(g, z[1]);
              z[2] = b(k, z[2]);
              z[3] = b(l, z[3])
          }
          var H = "0123456789abcdef".split("");
          "5d41402abc4b2a76b9719d911017c592" != c(h("hello")) && (b = function(z, p) {
              var e = (z & 65535) + (p & 65535);
              return (z >> 16) + (p >> 16) + (e >> 16) << 16 | e & 65535
          }
          );
          return c(h(a))
      }
      function A(a) {
          try {
              var b = Object.create(null)
          } catch (m) {
              b = {};
              for (var c in b)
                  "function" !== typeof b.hasOwnProperty || b.hasOwnProperty(c) || delete b[c]
          }
          for (var h in a)
              Array.isArray(a[h]) ? a[h] = Qa(a[h]) : "object" === typeof a[h] && (a[h] = A(a[h])),
              "function" === typeof a.hasOwnProperty && a.hasOwnProperty(h) && (b[h] = a[h]);
          return b
      }
      function Qa(a) {
          var b = [];
          for (c in a) {
              Array.isArray(a[c]) ? a[c] = Qa(a[c]) : "object" === typeof a[c] && (a[c] = A(a[c]));
              var c = parseInt(c, 10);
              "function" === typeof a.hasOwnProperty && a.hasOwnProperty(c) && (b[c] = a[c])
          }
          return b
      }
      function ja(a) {
          try {
              "object" === typeof a && Object.setPrototypeOf(a, Object.prototype)
          } catch (b) {}
          return a
      }
      function Ra(a) {
          return (a = /function\s([^(]{1,})\(/.exec(a.toString())) && 1 < a.length ? a[1].trim() : ""
      }
      function x(a) {
          var b = RegExp
            , c = a.name && 1 < a.name.length && "Function.prototype" !== a.name ? a.name : Ra(a);
          return (new b("^function " + (1 < c.split(" ").length ? "(?:get |set )?" + c.split(" ")[1] : c) + "\\(\\)\\s*\\{\\s*\\[native code\\]\\s*\\}$")).test(Function.prototype.toString.call(a).trim())
      }
      function Ha(a) {
          return /^function (?:toDataURL|getParameter|getExtension)?\(\) \{\s+sendMessage\(\{ obj: `\$\{hook\.obj\}`, method: method \}\);\s+\}$/.test(Function.prototype.toString.call(a).trim())
      }
      function Sa(a) {
          return /^function\s*\(\){if\(arguments\.length===1\){const [a-z]=arguments\[[0-9]\];const{[a-z]:[a-z],[a-z]:[a-z]}=[a-zA-Z]\([a-z]\);if\([a-z]\.length==1\){[a-z]\([a-z]\);return true}}return [a-z]\.apply\(this,arguments\)}$/.test(Function.prototype.toString.call(a).trim())
      }
      function Ta(a, b) {
          var c = A(null);
          for (h in b) {
              var h = parseInt(h, 10);
              var m = Object.getOwnPropertyDescriptor(a, b[h]);
              m && (m.get && !x(m.get) && (c[b[h]] || (c[b[h]] = []),
              c[b[h]].push(0)),
              m.set && !x(m.set) && (c[b[h]] || (c[b[h]] = []),
              c[b[h]].push(1)))
          }
          try {
              Object.freeze(c)
          } catch (q) {}
          return c
      }
      function Ba(a) {
          return "function" === typeof atob ? atob(a) : sa.decode(a)
      }
      function oa() {
          try {
              return R || "object" !== typeof d.localStorage || null === d.localStorage ? !1 : !0
          } catch (a) {
              return t("lsa", u(a)),
              !1
          }
      }
      function La(a, b) {
          try {
              if (oa())
                  return d.localStorage.setItem(a, JSON.stringify(b))
          } catch (c) {
              return t("sls", u(c)),
              !1
          }
      }
      function Ma(a) {
          try {
              if (oa())
                  return d.localStorage.getItem(a)
          } catch (b) {
              return t("gls", u(b)),
              !1
          }
      }
      function T(a, b, c) {
          return a.substring(b, c)
      }
      function Ua(a) {
          switch (a) {
          case "probably":
              return 3;
          case "maybe":
              return 2;
          case "":
              return 1;
          default:
              return 0
          }
      }
      function Ea() {
          return "function" === typeof Object.keys ? !0 : !1
      }
      function t(a, b) {
          return Va[a] = "" !== b ? b : "?"
      }
      function u(a) {
          var b = A(null);
          a.code && (b.code = a.code);
          a.name && (b.name = a.name);
          a.message && (b.message = a.message);
          return b
      }
      function la() {
          try {
              return "function" === typeof Promise && "function" === typeof (new Promise(function() {
                  return !0
              }
              )).then ? !0 : !1
          } catch (a) {
              return t("bsp", u(a)),
              !1
          }
      }
      var d = window
        , w = document
        , n = navigator
        , ua = top;
      try {
          var Z = ua.document
      } catch (a) {
          Z = !1
      }
      Array.isArray || (Array.isArray = function(a) {
          return "[object Array]" === Object.prototype.toString.call(a)
      }
      );
      String.prototype.trim || (String.prototype.trim = function() {
          return this.replace(/^\s+|\s+$/g, "")
      }
      );
      d.JSON || (d.JSON = {
          parse: function(a) {
              return eval("(" + a + ")")
          },
          stringify: function() {
              function a(q) {
                  return h[q] || "\\u" + (q.charCodeAt(0) + 65536).toString(16).substr(1)
              }
              var b = Object.prototype.toString
                , c = Array.isArray || function(q) {
                  return "[object Array]" === b.call(q)
              }
                , h = {
                  '"': '\\"',
                  "\\": "\\\\",
                  "\b": "\\b",
                  "\f": "\\f",
                  "\n": "\\n",
                  "\r": "\\r",
                  "\t": "\\t"
              }
                , m = /[\\"\u0000-\u001F\u2028\u2029]/g;
              return function y(r) {
                  if (null == r)
                      return "null";
                  if ("number" === typeof r)
                      return isFinite(r) ? r.toString() : "null";
                  if ("boolean" === typeof r)
                      return r.toString();
                  if ("object" === typeof r) {
                      if ("function" === typeof r.toJSON)
                          return y(r.toJSON());
                      if (c(r)) {
                          for (var G = "[", H = 0; H < r.length; H++)
                              G += (H ? ", " : "") + y(r[H]);
                          return G + "]"
                      }
                      if ("[object Object]" === b.call(r)) {
                          G = [];
                          for (H in r)
                              r.hasOwnProperty(H) && G.push(y(H) + ": " + y(r[H]));
                          return "{" + G.join(", ") + "}"
                      }
                  }
                  return '"' + r.toString().replace(m, a) + '"'
              }
          }()
      });
      var sa = {
          h: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode: function(a) {
              var b = ""
                , c = 0;
              for (a = sa.H(a); c < a.length; ) {
                  var h = a.charCodeAt(c++);
                  var m = a.charCodeAt(c++);
                  var q = a.charCodeAt(c++);
                  var r = h >> 2;
                  h = (h & 3) << 4 | m >> 4;
                  var y = (m & 15) << 2 | q >> 6;
                  var G = q & 63;
                  isNaN(m) ? y = G = 64 : isNaN(q) && (G = 64);
                  b = b + this.h.charAt(r) + this.h.charAt(h) + this.h.charAt(y) + this.h.charAt(G)
              }
              return b
          },
          decode: function(a) {
              var b = ""
                , c = 0;
              for (a = a.replace(/[^A-Za-z0-9+/=]/g, ""); c < a.length; ) {
                  var h = this.h.indexOf(a.charAt(c++));
                  var m = this.h.indexOf(a.charAt(c++));
                  var q = this.h.indexOf(a.charAt(c++));
                  var r = this.h.indexOf(a.charAt(c++));
                  h = h << 2 | m >> 4;
                  m = (m & 15) << 4 | q >> 2;
                  var y = (q & 3) << 6 | r;
                  b += String.fromCharCode(h);
                  64 != q && (b += String.fromCharCode(m));
                  64 != r && (b += String.fromCharCode(y))
              }
              return b = sa.G(b)
          },
          H: function(a) {
              a = a.replace(/\r\n/g, "n");
              for (var b = "", c = 0; c < a.length; c++) {
                  var h = a.charCodeAt(c);
                  128 > h ? b += String.fromCharCode(h) : (127 < h && 2048 > h ? b += String.fromCharCode(h >> 6 | 192) : (b += String.fromCharCode(h >> 12 | 224),
                  b += String.fromCharCode(h >> 6 & 63 | 128)),
                  b += String.fromCharCode(h & 63 | 128))
              }
              return b
          },
          G: function(a) {
              for (var b = "", c = 0, h, m, q; c < a.length; )
                  h = a.charCodeAt(c),
                  128 > h ? (b += String.fromCharCode(h),
                  c++) : 191 < h && 224 > h ? (m = a.charCodeAt(c + 1),
                  b += String.fromCharCode((h & 31) << 6 | m & 63),
                  c += 2) : (m = a.charCodeAt(c + 1),
                  q = a.charCodeAt(c + 2),
                  b += String.fromCharCode((h & 15) << 12 | (m & 63) << 6 | q & 63),
                  c += 3);
              return b
          }
      }
        , B = "object" === typeof RT ? A(RT.getVars()) : A(null)
        , ca = "number" === typeof B.wait ? B.wait : 750
        , P = new Date
        , fa = A(null)
        , ra = !1
        , Na = !1
        , D = A({
          c: [],
          id: [],
          ld: [],
          sc: [],
          sld: [],
          cs: [],
          scs: [],
          gs: [],
          sgs: [],
          rs: -1,
          hrs: 0,
          srs: -1,
          hsrs: 0
      })
        , ma = [Ba(T("hFCeFc3R1bjpzdHVuLmFudXJhLmlvOjQ0Mw==DOtNhxR==", 5, 37))]
        , V = !1
        , W = !1
        , I = !1
        , J = !1
        , da = d.RTCPeerConnection || d.mozRTCPeerConnection || d.webkitRTCPeerConnection
        , U = !1
        , qa = !1
        , Wa = !1
        , R = !1
        , Ga = !0
        , N = !1
        , Q = !1
        , X = !1
        , Fa = !1
        , pa = !1
        , ea = !1
        , na = !1
        , ha = !1
        , Da = !1
        , Va = A(null)
        , C = A(null)
        , Aa = !1
        , Ia = !1
        , F = A(null)
        , Xa = "ActiveXObject ApplePayError ApplePaySession Array Date Error Function HTMLElement HTMLIFrameElement Image Intl Math MimeTypeArray Notification Object PerformanceNavigation PluginArray RTCDataChannel RTCPeerConnection RTCStatsReport RegExp String StyleMedia WebKitPlaybackTargetAvailabilityEvent XMLHttpRequest chrome clientInformation close constructor document external getComputedStyle history indexedDB innerHeight innerWidth localStorage location name navigator openDatabase opera outerHeight outerWidth performance puffinDevice requestAnimationFrame safari screen screenLeft screenTop screenX screenY sessionStorage showModalDialog top".split(" ")
        , va = "appCodeName appName appVersion bluetooth buildID clipboard connection constructor cookieEnabled credentials deviceMemory doNotTrack geolocation getAutoplayPolicy getBattery getGamepads getUserMedia globalPrivacyControl gpu hardwareConcurrency hid javaEnabled keyboard language languages locks managed maxTouchPoints mediaCapabilities mediaDevices mediaSession mimeTypes onLine oscpu pdfViewerEnabled permissions platform plugins product productSub registerProtocolHandler requestMediaKeySystemAccess requestMIDIAccess scheduling sendBeacon serial serviceWorker storage taintEnabled usb userActivation userAgent userAgentData vendor vendorSub vibrate virtualKeyboard webdriver webkitTemporaryStorage webkitPersistentStorage windowControlsOverlay xr".split(" ")
        , ka = function() {
          try {
              if (Object.getOwnPropertyNames) {
                  "undefined" === typeof Function.prototype.name && "undefined" !== typeof Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
                      get: function() {
                          return Ra(this)
                      },
                      set: function() {}
                  });
                  var a = d;
                  return Object.getOwnPropertyNames(a).filter(function(b) {
                      try {
                          return "string" === typeof b && b.length && "function" === typeof a[b] && "string" === typeof a[b].name && b === a[b].name && x(a[b])
                      } catch (c) {}
                  }).sort()
              }
          } catch (b) {
              t("bpn", u(b))
          }
      }() || []
        , Ya = "architecture bitness brands formFactors fullVersionList mobile model platform platformVersion uaFullVersion wow64".split(" ");
      try {
          "object" === typeof n.userAgentData && "function" === typeof n.userAgentData.getHighEntropyValues ? n.userAgentData.getHighEntropyValues(Ya).then(function(a) {
              ha = A(a);
              try {
                  Object.freeze(ha)
              } catch (b) {}
          }) : ha = "?"
      } catch (a) {
          t("uadhe", u(a)),
          ha = "X"
      }
      var wa = "asdjflasutopfhvcZLmcfl asyncScriptInfo asyncExecutor awesomium BROWSERTOOLS cefQuery chromedp chromeDriver commandLine domAutomation driver(-|_)evaluate ELEM(-|_)CACHE ^emit$ evaluate(-|_)response executor Firebug ^fmget fSCInitialize fxdriver htmlunit IDE(-|_)Recorder juggler lastWatir nightmare marionette phantom playwright puppeteer ^rod$ script(-|_)fn script(-|_)func scriptInfo selenium ^spawn$ Sys\\$Net unwrapped WEB(-|_)VIEW webContents webdriver wptagent wrappedJSObject xwalk".split(" ")
        , xa = "arp-injected driver kantu nightmare phantom playwright puppeteer scriptallow selenium slick-uniqueid".split(" ")
        , M = function() {
          try {
              var a = w.createElement("canvas");
              if (a && a.getContext) {
                  var b = A(null);
                  b.antialias = !1;
                  b.depth = !1;
                  b.failIfMajorPerformanceCaveat = !1;
                  b.stencil = !1;
                  return a.getContext("webgl2", b) || a.getContext("webgl", b) || a.getContext("experimental-webgl", b)
              }
          } catch (c) {
              return t("glc", u(c)),
              null
          }
      }()
        , ya = 'video/3gpp; codecs="mp4v.20.8, samr"{video/mp4; codecs="avc1.42E01E"{video/mp4; codecs="avc1.58A01E"{video/mp4; codecs="avc1.4D401E"{video/mp4; codecs="avc1.64001E"{video/mp4; codecs="avc1.42E01E, mp4a.40.2"{video/mp4; codecs="avc1.58A01E, mp4a.40.2"{video/mp4; codecs="avc1.4D401E, mp4a.40.2"{video/mp4; codecs="avc1.64001E, mp4a.40.2"{video/mp4; codecs="flac"{video/mp4; codecs="H.264, mp3"{video/mp4; codecs="H.264, aac"{video/mp4; codecs="mp4v.20.8, mp4a.40.2"{video/mp4; codecs="mp4v.20.240, mp4a.40.2"{video/mpeg; codec="H.264"{video/ogg; codecs="dirac, vorbis"{video/ogg; codecs="opus"{video/ogg; codecs="theora"{video/ogg; codecs="theora, vorbis"{video/ogg; codecs="theora, speex"{video/webm; codecs="vp9, opus"{video/webm; codecs="vp8, vorbis"{video/x-matroska; codecs="theora, vorbis"'.split("{")
        , za = 'audio/3gpp,audio/3gpp2,audio/AMR-NB,audio/AMR-WB,audio/GSM,audio/aac,audio/basic,audio/flac,audio/midi,audio/mpeg,audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mpeg; codecs="mp3",audio/ogg; codecs="flac",audio/ogg; codecs="vorbis",audio/ogg; codecs="opus",audio/ogg; codecs="speex",audio/wav; codecs="1",audio/webm; codecs="vorbis",audio/webm; codecs="opus",audio/x-m4a,audio/x-aiff,audio/x-mpegurl'.split(",")
        , f = A(null);
      f.$ = function() {
          return isNaN(d.screenLeft) || isNaN(d.screenTop) ? isNaN(d.screenX) || isNaN(d.screenY) ? "?" : d.screenX + "," + d.screenY : d.screenLeft + "," + d.screenTop
      }
      ;
      f.Ca = function() {
          if (isNaN(d.innerWidth) || isNaN(d.innerHeight))
              if ("undefined" !== typeof w.compatMode && "BackCompat" !== w.compatMode) {
                  if ("undefined" !== typeof w.documentElement && !isNaN(w.documentElement.clientWidth) && !isNaN(w.documentElement.clientHeight))
                      return w.documentElement.clientWidth + "," + w.documentElement.clientHeight
              } else if ("object" === typeof w.body) {
                  if (!isNaN(w.body.clientWidth) && !isNaN(w.body.clientHeight))
                      return w.body.clientWidth + "," + w.body.clientHeight
              } else
                  return "?";
          else
              return d.innerWidth + "," + d.innerHeight
      }
      ;
      f.eb = function() {
          return isNaN(d.outerWidth) || isNaN(d.outerHeight) ? "?" : d.outerWidth + "," + d.outerHeight
      }
      ;
      f.O = function() {
          return isNaN(d.screen.availLeft) || isNaN(d.screen.availTop) ? "?" : d.screen.availLeft + "," + d.screen.availTop
      }
      ;
      f.Ba = function() {
          return "object" !== typeof d.history || isNaN(d.history.length) ? "?" : d.history.length
      }
      ;
      f.ib = function() {
          return "object" !== typeof n.plugins || isNaN(n.plugins.length) ? "?" : n.plugins.length
      }
      ;
      f.Va = function() {
          return "object" !== typeof n.mimeTypes || isNaN(n.mimeTypes.length) ? "?" : n.mimeTypes.length
      }
      ;
      f.Ia = function() {
          return "function" === typeof n.javaEnabled ? x(n.javaEnabled) ? 0 : 1 : "?"
      }
      ;
      f.Ga = function() {
          return "function" === typeof n.javaEnabled ? n.javaEnabled() ? 1 : 0 : "?"
      }
      ;
      f.P = function() {
          return "function" === typeof d.ActiveXObject ? 1 : 0
      }
      ;
      f.ya = function() {
          return "object" === typeof GeckoActiveXObject ? 1 : 0
      }
      ;
      f.Ib = function() {
          return "object" === typeof w.body.style ? (w.body.style.behavior = "url(#default#userData)",
          w.body.addBehavior ? 1 : 0) : "?"
      }
      ;
      f.Xa = function() {
          return n.mozId ? 1 : 0
      }
      ;
      f.cb = function() {
          return d.opera ? 1 : 0
      }
      ;
      f.Ma = function() {
          try {
              return R || "object" !== typeof d.localStorage || null === d.localStorage || "function" !== typeof d.localStorage.getItem || "function" !== typeof d.localStorage.setItem ? "?" : !x(d.localStorage.getItem) && !/^function \([a-z]\){return null}$/.test(Function.prototype.toString.call(d.localStorage.getItem).trim()) || !x(d.localStorage.setItem) && !/^function \([a-z],[a-z]\){}$/.test(Function.prototype.toString.call(d.localStorage.setItem).trim()) ? 1 : 0
          } catch (a) {
              return t("lr", u(a)),
              "X"
          }
      }
      ;
      f.Ka = function() {
          try {
              return R ? "?" : "object" === typeof d.localStorage && null !== d.localStorage ? 1 : 0
          } catch (a) {
              return t("ld", u(a)),
              "X"
          }
      }
      ;
      f.xb = function() {
          try {
              return R || "object" !== typeof d.sessionStorage || null === d.sessionStorage || "function" !== typeof d.sessionStorage.getItem || "function" !== typeof d.sessionStorage.setItem ? "?" : x(d.sessionStorage.getItem) && x(d.sessionStorage.setItem) ? 0 : 1
          } catch (a) {
              return t("sr", u(a)),
              "X"
          }
      }
      ;
      f.wb = function() {
          try {
              return R ? "?" : "object" === typeof d.sessionStorage && null !== d.sessionStorage ? 1 : 0
          } catch (a) {
              return t("sd", u(a)),
              "X"
          }
      }
      ;
      f.id = function() {
          return d.indexedDB ? 1 : 0
      }
      ;
      f.bb = function() {
          return d.openDatabase ? 1 : 0
      }
      ;
      f.S = function() {
          return w.body.addBehavior ? 1 : 0
      }
      ;
      f.Ua = function() {
          return "function" === typeof n.requestMediaKeySystemAccess ? x(n.requestMediaKeySystemAccess) ? 0 : 1 : "?"
      }
      ;
      f.Sa = function() {
          return "function" === typeof n.requestMediaKeySystemAccess ? 1 : 0
      }
      ;
      f.zb = function() {
          return "function" === typeof n.sendBeacon ? x(n.sendBeacon) || Sa(n.sendBeacon) ? 0 : 1 : "?"
      }
      ;
      f.vb = function() {
          return "function" === typeof n.sendBeacon ? 1 : 0
      }
      ;
      f.Hb = function() {
          return "string" === typeof n.userAgent ? n.userAgent : "?"
      }
      ;
      f.Lb = function() {
          return "string" === typeof n.vendor ? n.vendor : "?"
      }
      ;
      f.J = function() {
          return "string" === typeof n.appName ? n.appName : "?"
      }
      ;
      f.N = function() {
          return "string" === typeof n.appVersion ? n.appVersion : "?"
      }
      ;
      f.is = function() {
          try {
              var a = [];
              if ("object" === typeof n.plugins && !isNaN(n.plugins.length) && 0 < n.plugins.length)
                  for (var b = n.plugins, c = n.mimeTypes, h = 0; h < b.length; h++) {
                      if (a.push("P" + (h + 1)),
                      "undefined" !== typeof b[h].name && b[h].name && a.push(b[h].name + ";"),
                      "undefined" !== typeof b[h].description && b[h].description && a.push(b[h].description + ";"),
                      "undefined" !== typeof b[h].filename && b[h].filename && (a.push(b[h].filename + ":"),
                      "undefined" !== typeof c && !isNaN(c.length) && 0 < c.length))
                          for (var m = 0; m < c.length; m++)
                              if ("object" === typeof c[m].enabledPlugin)
                                  for (var q in c[m].enabledPlugin)
                                      "filename" == q && "undefined" !== typeof c[m].enabledPlugin[q] && c[m].enabledPlugin[q] == b[h].filename && ("undefined" !== typeof c[m].description && c[m].description && a.push(c[m].description + ";"),
                                      "undefined" !== typeof c[m].type && c[m].type && a.push(c[m].type + ";"),
                                      "undefined" !== typeof c[m].suffixes && c[m].suffixes && a.push(c[m].suffixes + ";"))
                  }
              else if ("object" === typeof w.body.style && (m = w.body,
              m.style.behavior = "url(#default#clientCaps)",
              "undefined" !== typeof m.isComponentInstalled))
                  for (q in h = 1,
                  b = [["AOL ART Image Format Support", "47F67D00-9E55-11D1-BAEF-00C04FC2D130"], ["Address Book", "7790769C-0471-11D2-AF11-00C04FA35D02"], ["Arabic Text Display Support", "76C19B38-F0C8-11CF-87CC-0020AFEECF20"], ["Chinese (Simplified) Text Display Support", "76C19B34-F0C8-11CF-87CC-0020AFEECF20"], ["Chinese (Traditional) Text Display Support", "76C19B33-F0C8-11CF-87CC-0020AFEECF20"], ["DirectAnimation Java Classes", "4F216970-C90C-11D1-B5C7-0000F8051515"], ["DirectAnimation", "283807B5-2C60-11D0-A31D-00AA00B92C03"], ["DirectShow", "44BBA848-CC51-11CF-AAFA-00AA00B6015C"], ["Dynamic HTML Data Binding for Java", "4F216970-C90C-11D1-B5C7-0000F8051515"], ["Dynamic HTML Data Binding", "9381D8F2-0288-11D0-9501-00AA00B911A5"], ["Hebrew Text Display Support", "76C19B36-F0C8-11CF-87CC-0020AFEECF20"], ["Internet Connection Wizard", "5A8D6EE0-3E18-11D0-821E-444553540000"], ["Internet Explorer Browsing Enhancements", "630B1DA0-B465-11D1-9948-00C04F98BBC9"], ["Internet Explorer Classes for Java", "08B0E5C0-4FCB-11CF-AAA5-00401C608555"], ["Internet Explorer Help Engine", "DE5AED00-A4BF-11D1-9948-00C04F98BBC9"], ["Internet Explorer Help", "45EA75A0-A269-11D1-B5BF-0000F8051515"], ["Internet Explorer Web Browser", "89820200-ECBD-11CF-8B85-00AA005B4383"], ["Japanese Text Display Support", "76C19B30-F0C8-11CF-87CC-0020AFEECF20"], ["Korean Text Display Support", "76C19B31-F0C8-11CF-87CC-0020AFEECF20"], ["Language Auto-Selection", "76C19B50-F0C8-11CF-87CC-0020AFEECF20"], ["Macromedia Flash", "D27CDB6E-AE6D-11CF-96B8-444553540000"], ["Macromedia Shockwave Director", "2A202491-F00D-11CF-87CC-0020AFEECF20"], ["Microsoft Virtual Machine", "08B0E5C0-4FCB-11CF-AAA5-00401C608500"], ["NetMeeting NT", "44BBA842-CC51-11CF-AAFA-00AA00B6015B"], ["Offline Browsing Pack", "3AF36230-A269-11D1-B5BF-0000F8051515"], ["Outlook Express", "44BBA840-CC51-11CF-AAFA-00AA00B6015C"], ["Pan-European Text Display Support", "76C19B32-F0C8-11CF-87CC-0020AFEECF20"], ["Task Scheduler", "CC2A9BA0-3BDD-11D0-821E-444553540000"], ["Thai Text Display Support", "76C19B35-F0C8-11CF-87CC-0020AFEECF20"], ["Uniscribe", "3BF42070-B3B1-11D1-B5C5-0000F8051515"], ["VRML 2.0 Viewer", "90A7533D-88FE-11D0-9DBE-0000C0411FC3"], ["Vector Graphics Rendering (VML)", "10072CEC-8CC1-11D1-986E-00A0C955B42F"], ["Vietnamese Text Display Support", "76C19B37-F0C8-11CF-87CC-0020AFEECF20"], ["Visual Basic Scripting Support", "4F645220-306D-11D2-995D-00C04F98BBC9"], ["Wallet", "1CDEE860-E95B-11CF-B1B0-00AA00BBAD66"], ["Web Folders", "73FA19D0-2D75-11D2-995D-00C04F98BBC9"], ["Windows Desktop Update NT", "89820200-ECBD-11CF-8B85-00AA005B4340"], ["Windows Media Player RealNetwork Support", "23064720-C4F8-11D1-994D-00C04F98BBC9"], ["Windows Media Player", "22D6F312-B0F6-11D0-94AB-0080C74C7E95"]],
                  b)
                      try {
                          if (q = parseInt(q, 10),
                          m.isComponentInstalled("{" + b[q][1] + "}", "ComponentID")) {
                              var r = m.getComponentVersion("{" + b[q][1] + "}", "ComponentID");
                              r && (a.push("C" + h + " " + b[q][0] + ": " + r + ";"),
                              h++)
                          }
                      } catch (y) {}
              return 0 < a.length ? a.join(" ") : "?"
          } catch (y) {
              return t("is", u(y)),
              "X"
          }
      }
      ;
      f.A = function() {
          return "number" === typeof orientation && "ontouchstart"in w.documentElement || n.mozId || "string" === typeof n.cpuClass && "ARM" == n.cpuClass ? 1 : 0
      }
      ;
      f.yb = function() {
          try {
              var a = n.userAgent
                , b = -1 < a.indexOf("MSIE")
                , c = -1 < a.indexOf("Trident")
                , h = -1 < a.indexOf("Edge")
                , m = -1 < a.indexOf("Firefox")
                , q = -1 < a.indexOf("Presto")
                , r = -1 < a.indexOf("OPR")
                , y = -1 < a.indexOf("Puffin")
                , G = -1 < a.indexOf("Chrome")
                , H = -1 < a.indexOf("Silk")
                , z = -1 < a.indexOf("Safari") || -1 < a.indexOf("; CPU iPhone OS") || -1 < a.indexOf("; CPU OS") || -1 < a.indexOf("; Intel Mac OS")
                , p = -1 < a.indexOf("Android")
                , e = a.match(/Tizen (?:[3-9]|[1-9]\d\d*)/gi);
              if (b || c || h || m || q || r || y || G || H || z || p || e) {
                  try {
                      var g = eval("/*@cc_on!@*/false") || !!w.documentMode
                  } catch (Za) {}
                  var k = !w.documentMode && d.StyleMedia
                    , l = "object" === typeof InstallTrigger || !!n.mozId
                    , E = !!d.opera
                    , O = !!d.puffinDevice
                    , $a = !!d.chrome && !O && !E
                    , ab = !!d.safari || 0 < Object.prototype.toString.call(d.HTMLElement).indexOf("Constructor") || "function" === typeof d.WebKitPlaybackTargetAvailabilityEvent && x(d.WebKitPlaybackTargetAvailabilityEvent) || "function" === typeof d.ApplePayError && x(d.ApplePayError)
                    , mb = "object" === typeof d.clientInformation && "object" === typeof d.clientInformation.battery && "function" === typeof d.clientInformation.battery.addEventListener && x(d.clientInformation.battery.addEventListener)
                    , nb = f.A();
                  (r || H || p || y || e) && G && (G = !1);
                  (r || H || p || y || G || e) && z && (z = !1);
                  return (r || H || p) && nb ? 0 : (b || c) && g || h && k || m && l || q && E || r && $a || y && O || G && $a || H && ab || z && ab || e && mb ? 0 : 1
              }
              return "?"
          } catch (Za) {
              return t("st", u(Za)),
              "X"
          }
      }
      ;
      f.m = function() {
          try {
              if ("number" === typeof B.adblocker && 1 === B.adblocker) {
                  if ("boolean" === typeof U && U)
                      return 1;
                  if (!Wa) {
                      null !== w.body.getAttribute("abp") && (U = !0);
                      var a = w.getElementById("anura_content_ads_container");
                      if ("object" === typeof a && a) {
                          if (!U && "function" === typeof a.getBoundingClientRect) {
                              var b = a.getBoundingClientRect()
                                , c = {
                                  width: a.pixelWidth || a.offsetWidth,
                                  height: a.pixelHeight || a.offsetHeight,
                                  left: b.left,
                                  right: b.right,
                                  top: b.top,
                                  bottom: b.bottom
                              };
                              if (null === a.offsetParent || 0 === c.width && 0 === c.height && 0 === c.left && 0 === c.right && 0 === c.top && 0 === c.bottom)
                                  U = !0
                          }
                          if (!U && "function" === typeof d.getComputedStyle) {
                              var h = d.getComputedStyle(a, null);
                              "object" !== typeof h || "none" !== h.getPropertyValue("display") && "hidden" !== h.getPropertyValue("visibility") || (U = !0)
                          }
                          a.parentNode.removeChild(a);
                          Wa = !0
                      }
                  }
                  return U ? 1 : 0
              }
              return "?"
          } catch (m) {
              return t("ab", u(m)),
              "X"
          }
      }
      ;
      f.Y = function() {
          return "function" === typeof w.createElement ? x(w.createElement) || /^function\s*\([a-z]{1},[a-z]{1}\)\s*\{[a-z]{1}=[a-z]{1}\.call\(document,[a-z]{1},[a-z]{1}\);"[a-z]{1}"===[a-z]{1}\.toLowerCase\(\)&&\s*[a-z]{1}\([a-z]{1}\);return [a-z]{1}}$/.test(Function.prototype.toString.call(w.createElement).trim()) ? 0 : 1 : "?"
      }
      ;
      f.cx = function() {
          try {
              var a = w.createElement("canvas");
              if (a) {
                  var b = [];
                  a.getContext && !x(a.getContext) && b.push("getContext");
                  !a.toDataURL || x(a.toDataURL) || Ha(a.toDataURL) || b.push("toDataURL");
                  if (a.getContext) {
                      var c = a.getContext("2d", {
                          alpha: !0
                      });
                      c && (c.beginPath && !x(c.beginPath) && b.push("beginPath"),
                      c.rect && !x(c.rect) && b.push("rect"),
                      c.fill && !x(c.fill) && b.push("fill"),
                      c.stroke && !x(c.stroke) && b.push("stroke"),
                      c.closePath && !x(c.closePath) && b.push("closePath"),
                      c.rotate && !x(c.rotate) && b.push("rotate"),
                      c.fillRect && !x(c.fillRect) && b.push("fillRect"),
                      c.fillText && !x(c.fillText) && b.push("fillText"),
                      c.arc && !x(c.arc) && b.push("arc"),
                      c.moveTo && !x(c.moveTo) && b.push("moveTo"),
                      c.lineTo && !x(c.lineTo) && b.push("lineTo"))
                  }
                  String.fromCharCode && !x(String.fromCharCode) && b.push("fromCharCode");
                  (new String).charCodeAt && !x((new String).charCodeAt) && b.push("charCodeAt");
                  return b
              }
              return "?"
          } catch (h) {
              return t("cx", u(h)),
              "X"
          }
      }
      ;
      f.X = function() {
          try {
              var a = w.createElement("canvas");
              if (a && a.getContext) {
                  var b = a.getContext("2d", {
                      alpha: !0
                  });
                  if (b) {
                      a.width = 275;
                      a.height = 150;
                      b.textBaseline = "alphabetic";
                      b.textAlign = "center";
                      b.beginPath();
                      b.fillStyle = "white";
                      b.strokeStyle = "black";
                      b.lineWidth = 2;
                      b.rect(1, 1, 274, 149);
                      b.fill();
                      b.stroke();
                      b.closePath();
                      b.rotate(-.6);
                      b.fillStyle = "lightgray";
                      for (var c = -28; 76 > c; c++)
                          b.fillRect(c + 2 * c, 0, 2, 300);
                      b.rotate(.6);
                      var h = new String;
                      if (String.fromCharCode && "Sympathizing would fix Quaker objectives".charCodeAt)
                          for (c = 0; 40 > c; c++)
                              h += String.fromCharCode("Sympathizing would fix Quaker objectives".charCodeAt(c) + 888);
                      b.font = "serif";
                      b.fillStyle = "green";
                      b.fillText(h, 136, 21);
                      b.fillStyle = "tomato";
                      b.fillText(h, 138, 23);
                      b.font = "italic small-caps larger cursive";
                      b.fillStyle = "cyan";
                      b.fillText("Sympathizing would fix Quaker objectives", 136, 136);
                      b.fillStyle = "gold";
                      b.fillText("Sympathizing would fix Quaker objectives", 138, 138);
                      b.fillStyle = "blue";
                      b.fillRect(13, 80, 250, 5);
                      b.fillStyle = "yellow";
                      b.fillRect(13, 86, 250, 5);
                      b.fillStyle = "rgba(0,0,0,0.5)";
                      b.fillRect(10, 83, 250, 5);
                      b.font = "86px sans-serif";
                      b.shadowBlur = 0;
                      b.fillStyle = "seagreen";
                      b.fillText(f.l(), 137.5, 105);
                      b.beginPath();
                      b.fillStyle = "rgba(255,82,82,0.5)";
                      b.strokeStyle = "#ff5252";
                      b.lineWidth = 2;
                      b.rect(25, 35, 225, 80);
                      b.fill();
                      b.stroke();
                      b.closePath();
                      b.font = "medium monospace";
                      b.shadowBlur = 0;
                      b.fillStyle = "black";
                      b.fillText("{CD" + v.o() + ":PD" + v.B() + "}", 73, 63);
                      b.font = "xx-small monospace";
                      b.shadowBlur = 0;
                      b.fillStyle = "black";
                      b.fillText(v.v(), 137.5, 38);
                      b.font = "xx-small monospace";
                      b.shadowBlur = 0;
                      b.fillStyle = "black";
                      b.fillText(v.u(), 137.5, 117);
                      b.beginPath();
                      b.fillStyle = "rgba(255,171,64,0.5)";
                      b.strokeStyle = "#ffab40";
                      b.lineWidth = 1;
                      b.arc(81, 75, 60, 0, 2 * Math.PI, !0);
                      b.fill();
                      b.stroke();
                      b.closePath();
                      b.font = "bold italic xx-large sans-serif";
                      b.shadowBlur = 0;
                      b.rotate(-.2);
                      b.fillStyle = "lime";
                      b.fillText("ANURA RULES!", 120, 118);
                      b.fillStyle = "magenta";
                      b.fillText("ANURA RULES!", 116, 114);
                      b.rotate(.2);
                      h = [[126, 64], [176, 57], [193, 14], [209, 57], [259, 64], [226, 90], [233, 134], [193, 107], [153, 134], [159, 90], [126, 64]];
                      b.beginPath();
                      b.fillStyle = "rgba(128,216,255,0.5)";
                      b.strokeStyle = "#80d8ff";
                      b.lineWidth = 2;
                      b.moveTo(h[0][0], h[0][1]);
                      for (c = 0; c < h.length; c++)
                          b.lineTo(h[c][0], h[c][1]);
                      b.fill();
                      b.stroke();
                      b.closePath();
                      return S(a.toDataURL())
                  }
              }
              return "?"
          } catch (m) {
              return t("ca", u(m)),
              "X"
          }
      }
      ;
      f.fb = function() {
          try {
              var a = A(null);
              a.pn = "function" === typeof Object.getOwnPropertyNames ? x(Object.getOwnPropertyNames) || /^function\s*[a-zA-Z]?\([a-z]{1}\)\s*\{(?:\s*"use strict";)?\s*(?:return [a-zA-Z]{1}\([a-z]{1}\)\.filter\([a-zA-Z]\)(?:;)?\s*\}|for\(var [a-z]{1},[a-z]{1}=[a-z]{1}\([a-z]{1}\([a-z]{1}\)\),[a-z]{1}=\[\],[a-z]{1}=0;[a-z]{1}\.length>[a-z]{1};\)[a-z]{1}\([a-zA-Z]{1},[a-z]{1}=[a-z]{1}\[[a-z]{1}\+\+\]\)\|\|[a-z]{1}==[a-z]{1}\|\|[a-z]{1}==[a-z]{1}\|\|[a-z]{1}\.push\([a-z]{1}\);return [a-z]{1}\})?$/.test(Function.prototype.toString.call(Object.getOwnPropertyNames).trim()) ? 0 : 1 : "?";
              a.po = "function" === typeof Object.getPrototypeOf ? x(Object.getPrototypeOf) || /^function\s*\([a-z]{1}\)\{return [a-z]{1,2}\([a-zA-Z]{1,2}\([a-z]{1}\)\)\}$/.test(Function.prototype.toString.call(Object.getPrototypeOf).trim()) ? 0 : 1 : "?";
              a.pd = "function" === typeof Object.getOwnPropertyDescriptor ? x(Object.getOwnPropertyDescriptor) || /(?:^function\s*\([a-z]{1},[a-z]{1}\)\{return [a-zA-Z]{1,2}\([a-zA-Z]{1,2}\([a-z]{1}\),[a-z]{1}\)\}|\([a-z]{1}\.(?:configurable|enumerable){1}\s*=\s*(?:![0-1]|[a-zA-Z]{1}\.call\([a-z]{1},\s*[a-z]{1}\))\),\s*[a-z]{1}(?:;)?\s*\}(?:\})?|\{configurable:!0,writable:!0,enumerable:!0,value:e\[t\]\}\})$/.test(Function.prototype.toString.call(Object.getOwnPropertyDescriptor).trim()) ? 0 : 1 : "?";
              try {
                  Object.freeze(a)
              } catch (b) {}
              return a
          } catch (b) {
              return t("ox", u(b)),
              "X"
          }
      }
      ;
      f.s = function() {
          return "object" === typeof ka && ka.length ? S(ka.join(",")) : "?"
      }
      ;
      f.Qb = function() {
          try {
              return Object.getOwnPropertyDescriptor ? Ta(d, Xa) : "?"
          } catch (a) {
              return t("wp", u(a)),
              "X"
          }
      }
      ;
      f.Za = function() {
          try {
              if (Object.getOwnPropertyDescriptor) {
                  var a = [];
                  for (b in va) {
                      var b = parseInt(b, 10);
                      va[b] && a.push(va[b])
                  }
                  if (Object.getOwnPropertyNames && Object.getPrototypeOf) {
                      var c = Object.getOwnPropertyNames(Object.getPrototypeOf(n));
                      for (h in c) {
                          var h = parseInt(h, 10);
                          c[h] && 0 > a.indexOf(c[h]) && a.push(c[h])
                      }
                  }
                  return Ta(n, a)
              }
              return "?"
          } catch (m) {
              return t("np", u(m)),
              "X"
          }
      }
      ;
      f.l = function() {
          return "boolean" === typeof d.navigator.webdriver ? d.navigator.webdriver ? 1 : 0 : "?"
      }
      ;
      f.D = function() {
          try {
              if ("object" === typeof d.document && "object" === typeof d.document.documentElement && "function" === typeof d.document.documentElement.getAttributeNames) {
                  var a = []
                    , b = d.document.documentElement.getAttributeNames();
                  for (c in b) {
                      var c = parseInt(c, 10);
                      if (b[c])
                          for (var h in xa)
                              h = parseInt(h, 10),
                              xa[h] && (new RegExp(xa[h],"i")).test(b[c]) && a.push(b[c])
                  }
                  return a.length ? a : 0
              }
              return "?"
          } catch (m) {
              return t("wa", u(m)),
              "X"
          }
      }
      ;
      f.F = function() {
          try {
              var a = [];
              if (Ea())
                  for (var b in wa)
                      if (b = parseInt(b, 10),
                      wa[b]) {
                          var c = new RegExp(wa[b],"i");
                          if ("object" === typeof d) {
                              var h = Object.keys(d), m;
                              for (m in h)
                                  !/^__zone_symbol__/.test(h[m]) && c.test(h[m]) && a.push("w." + h[m])
                          }
                          if ("object" === typeof w) {
                              var q = Object.keys(w), r;
                              for (r in q)
                                  !/^__zone_symbol__/.test(q[r]) && c.test(q[r]) && a.push("d." + q[r])
                          }
                          if ("object" === typeof n) {
                              var y = Object.keys(n), G;
                              for (G in y)
                                  c.test(y[G]) && a.push("n." + y[G])
                          }
                      }
              for (b in d.document)
                  if ((!R || R && "cookie" !== b) && "object" === typeof d.document[b])
                      try {
                          d.document[b].cache_ && a.push("c." + (b ? b : "__"))
                      } catch (H) {}
              "object" === typeof d.external && "function" === typeof d.external.toString && "function" === typeof d.external.toString().toLowerCase && "function" === typeof d.external.toString().toLowerCase().indexOf && -1 < d.external.toString().toLowerCase().indexOf("sequentum") && a.push(["s.sequentum"]);
              "function" === typeof d.close && "function" === typeof d.close.toString && "function" === typeof d.close.toString().toLowerCase && "function" === typeof d.close.toString().toLowerCase().indexOf && -1 < d.close.toString().toLowerCase().indexOf("electron") && a.push("e.electron");
              "object" === typeof d.opera && ("boolean" === typeof d.opera.browserjsran && d.opera.browserjsran && a.push("o.browserjsran"),
              "boolean" === typeof d.opera._browserjsran && d.opera._browserjsran && a.push("o._browserjsran"));
              return a.length ? a : 0
          } catch (H) {
              return t("wv", u(H)),
              "X"
          }
      }
      ;
      f.Sb = function() {
          return ea ? ea : 0
      }
      ;
      f.na = function() {
          return "function" === typeof d.showModalDialog ? x(d.showModalDialog) ? 0 : 1 : "?"
      }
      ;
      f.Qa = function() {
          return "function" === typeof d.showModalDialog ? 1 : 0
      }
      ;
      f.hb = function() {
          return "function" === typeof d.callPhantom || d._phantom ? 1 : 0
      }
      ;
      f.Oa = function() {
          try {
              return "function" === typeof PluginArray ? x(PluginArray) ? 0 : 1 : "?"
          } catch (a) {
              return t("lx", u(a)),
              "X"
          }
      }
      ;
      f.kb = function() {
          try {
              if ("function" === typeof PluginArray) {
                  var a = PluginArray.prototype === n.plugins.__proto__;
                  return 0 < n.plugins.length && !(a & Plugin.prototype === n.plugins[0].__proto__) ? 1 : 0
              }
              return "?"
          } catch (b) {
              return t("pp", u(b)),
              "X"
          }
      }
      ;
      f.Wa = function() {
          try {
              return "function" === typeof MimeTypeArray ? x(MimeTypeArray) ? 0 : 1 : "?"
          } catch (a) {
              return t("mx", u(a)),
              "X"
          }
      }
      ;
      f.Ta = function() {
          try {
              if ("function" === typeof MimeTypeArray) {
                  var a = MimeTypeArray.prototype === n.mimeTypes.__proto__;
                  return 0 < n.mimeTypes.length && !(a & MimeType.prototype === n.mimeTypes[0].__proto__) ? 1 : 0
              }
              return "?"
          } catch (b) {
              return t("mp", u(b)),
              "X"
          }
      }
      ;
      f.Ub = function() {
          return "object" === typeof n.permissions && "function" === typeof n.permissions.query ? x(n.permissions.query) ? 0 : 1 : "?"
      }
      ;
      f.jb = function() {
          try {
              return n.permissions && n.permissions.query ? (n.permissions.query({
                  name: "notifications"
              }).then(function(a) {
                  if ("function" === typeof Notification && "string" === typeof Notification.permission && "denied" === Notification.permission && "prompt" === a.state)
                      return 1
              }),
              0) : "?"
          } catch (a) {
              return t("pm", u(a)),
              "X"
          }
      }
      ;
      f.Da = function() {
          try {
              return "function" === typeof HTMLIFrameElement && "function" === typeof Object.getOwnPropertyDescriptors && "object" === typeof Object.getOwnPropertyDescriptors(HTMLIFrameElement.prototype).contentWindow ? /(?:^function(?: )?(?: get)?(?: contentWindow)?\(\)\s+\{\s+(?:\[native code\]\s+\}|let contentWindow = getContentWindow\(this\);\s+injectIntoContentWindow\(contentWindow\);\s+return contentWindow;\s+})$|mediafilter\.prototype\.)/.test(Object.getOwnPropertyDescriptors(HTMLIFrameElement.prototype).contentWindow.get.toString().trim()) ? 0 : 1 : "?"
          } catch (a) {
              return t("ix", u(a)),
              "X"
          }
      }
      ;
      f.ga = function() {
          try {
              if ("object" === typeof N) {
                  var a = !1;
                  N.contentWindow === d && (a = !0);
                  return a ? 1 : 0
              }
              return "?"
          } catch (b) {
              return t("cw", u(b)),
              "X"
          }
      }
      ;
      f.fa = function() {
          try {
              return Q && "object" === typeof Q && "function" === typeof Q.debug ? x(Q.debug) || /(?:^function\s*(?:__BROWSERTOOLS_CONSOLE_SAFEFUNC)?\(\)(?: )?\{(?:[a-z]{1}\("debug",arguments\)(?:;return [a-z]{1}\.apply\(this,arguments\))?|d\("debug",arguments\)|\s+try  \{\s+return fn\(arguments\);\s+\} catch \(e\) \{\s+safeAssert\(e\);\s+\}\s+|try\{return [a-z]{1}\(arguments\)}catch\([a-z]{1}\){[a-z]{1}\([a-z]{1}\)})\}|\}catch\([a-z]{1}\)\{[a-z]{1}\.onFault\([a-z]{1}\)\}\}|\}\),"log"\),[a-z]{1}\.apply\(console,[a-z]{1}\)\})$/.test(Function.prototype.toString.call(Q.debug).trim()) ? 0 : 1 : "?"
          } catch (a) {
              return t("cr", u(a)),
              "X"
          }
      }
      ;
      f.oa = function() {
          try {
              if ("number" === typeof X)
                  return X;
              if ("number" === typeof Fa)
                  return Fa;
              if ("object" === typeof d.Debug && "boolean" === typeof d.Debug.debuggerEnabled && d.Debug.debuggerEnabled)
                  return 800;
              if (Q && "object" === typeof Q && "function" === typeof Q.debug) {
                  var a = 0
                    , b = "object" === typeof d.chrome ? function() {}
                  : /./;
                  b.toString = function() {
                      a++;
                      return b
                  }
                  ;
                  Q.debug(b);
                  return a
              }
              return "?"
          } catch (c) {
              return t("dt", u(c)),
              "X"
          }
      }
      ;
      f.Mb = function() {
          try {
              var a = w.createElement("video");
              return "object" === typeof a && "function" === typeof a.canPlayType ? x(a.canPlayType) ? 0 : 1 : "?"
          } catch (b) {
              return t("vp", u(b)),
              "X"
          }
      }
      ;
      f.Jb = function() {
          try {
              var a = w.createElement("video");
              if (a.canPlayType) {
                  var b = [];
                  for (c in ya) {
                      var c = parseInt(c, 10);
                      ya[c] && b.push(Ua(a.canPlayType(ya[c])))
                  }
                  return b
              }
              return "?"
          } catch (h) {
              return t("vd", u(h)),
              "X"
          }
      }
      ;
      f.K = function() {
          try {
              var a = w.createElement("audio");
              return "object" === typeof a && "function" === typeof a.canPlayType ? x(a.canPlayType) ? 0 : 1 : "?"
          } catch (b) {
              return t("ap", u(b)),
              "X"
          }
      }
      ;
      f.M = function() {
          try {
              var a = w.createElement("audio");
              if (a.canPlayType) {
                  var b = [];
                  for (c in za) {
                      var c = parseInt(c, 10);
                      za[c] && b.push(Ua(a.canPlayType(za[c])))
                  }
                  return b
              }
              return "?"
          } catch (h) {
              return t("au", u(h)),
              "X"
          }
      }
      ;
      f.Ra = function() {
          try {
              return "object" === typeof n.mediaDevices ? 1 : 0
          } catch (a) {
              return t("me", u(a)),
              "X"
          }
      }
      ;
      f.pa = function() {
          try {
              var a = [];
              a[0] = "object" === typeof process && "function" === typeof require ? 1 : 0;
              a[1] = "object" === typeof d ? 1 : 0;
              a[2] = "function" === typeof importScripts ? 1 : 0;
              return a
          } catch (b) {
              return t("ed", u(b)),
              "X"
          }
      }
      ;
      f.Rb = function() {
          "object" === typeof D && ("string" === typeof I.iceConnectionState && D.cs.push(I.iceConnectionState),
          "string" === typeof J.iceConnectionState && D.scs.push(J.iceConnectionState),
          "undefined" !== typeof I.iceGatheringState && D.gs.push(I.iceGatheringState),
          "undefined" !== typeof J.iceGatheringState && D.sgs.push(J.iceGatheringState),
          "object" === typeof D.sc && "object" === typeof D.c && (D.sc = D.sc.filter(function(a) {
              return 0 > D.c.indexOf(a)
          })),
          "object" === typeof D.sld && "object" === typeof D.ld && (D.sld = D.sld.filter(function(a) {
              return 0 > D.ld.indexOf(a)
          })));
          return D || 0 === D ? D : "?"
      }
      ;
      f.mb = function() {
          try {
              return "function" === typeof Function && "function" === typeof Function.prototype && "function" === typeof Function.prototype.toString ? x(Function.prototype.toString) ? 0 : 1 : "?"
          } catch (a) {
              return t("pt", u(a)),
              "X"
          }
      }
      ;
      f.Ob = function() {
          try {
              return "function" === typeof d.close ? x(d.close) ? 0 : 1 : "?"
          } catch (a) {
              return t("wc", u(a)),
              "X"
          }
      }
      ;
      f.I = function() {
          try {
              var a = A(null);
              a.ape = "function" === typeof d.ApplePayError ? x(d.ApplePayError) ? 0 : 1 : "?";
              a.aps = "function" === typeof d.ApplePaySession ? x(d.ApplePaySession) ? 0 : 1 : "?";
              try {
                  Object.freeze(a)
              } catch (b) {}
              return a
          } catch (b) {
              return t("af", u(b)),
              "X"
          }
      }
      ;
      f.V = function() {
          try {
              return "object" === typeof n.brave && "function" === typeof n.brave.isBrave ? n.brave.isBrave() ? 1 : 0 : "?"
          } catch (a) {
              return t("bv", u(a)),
              "X"
          }
      }
      ;
      f.ja = function() {
          try {
              return "object" === typeof n._duckduckgoloader_ ? "number" === typeof n._duckduckgoloader_.length ? 1 : 0 : "?"
          } catch (a) {
              return t("dd", u(a)),
              "X"
          }
      }
      ;
      f.Ya = function() {
          try {
              return "boolean" === typeof n.onLine ? n.onLine ? 1 : 0 : "?"
          } catch (a) {
              return t("no", u(a)),
              "X"
          }
      }
      ;
      f.ha = function() {
          try {
              var a = "?";
              if ("object" === typeof n.userAgentData && "function" === typeof n.userAgentData.toJSON) {
                  a = A(n.userAgentData.toJSON());
                  try {
                      Object.freeze(a)
                  } catch (b) {}
              }
              return a
          } catch (b) {
              return t("da", u(b)),
              "X"
          }
      }
      ;
      f.Aa = function() {
          return ha ? ha : 0
      }
      ;
      f.Fa = function() {
          return "string" === typeof n.doNotTrack && -1 < ["0", "1"].indexOf(n.doNotTrack) ? parseInt(n.doNotTrack, 10) : "?"
      }
      ;
      f.Ha = function() {
          return "boolean" === typeof n.globalPrivacyControl ? n.globalPrivacyControl ? 1 : 0 : "?"
      }
      ;
      f.i = function() {
          return da && "function" === typeof da ? 1 : 0
      }
      ;
      f.ia = function() {
          try {
              if (d.RTCDataChannel)
                  return "function" === typeof d.RTCDataChannel ? 1 : 0;
              if (f.i()) {
                  var a = A(null);
                  a.bundlePolicy = "max-bundle";
                  a.iceServers = [];
                  a.iceCandidatePoolSize = 0;
                  return "function" === typeof (new da(a)).createDataChannel ? 1 : 0
              }
              return "?"
          } catch (b) {
              return t("dc", u(b)),
              "X"
          }
      }
      ;
      f.tb = function() {
          try {
              if (d.RTCStatsReport)
                  return "function" === typeof d.RTCStatsReport ? 1 : 0;
              if (f.i()) {
                  var a = A(null);
                  a.bundlePolicy = "max-bundle";
                  a.iceServers = [];
                  a.iceCandidatePoolSize = 0;
                  return "function" === typeof (new da(a)).getStats ? 1 : 0
              }
              return "?"
          } catch (b) {
              return t("rs", u(b)),
              "X"
          }
      }
      ;
      var v = A(null);
      v.gb = function() {
          return "string" === typeof n.platform ? n.platform : "?"
      }
      ;
      v.ea = function() {
          return "string" === typeof n.cpuClass ? n.cpuClass : "?"
      }
      ;
      v.za = function() {
          return isNaN(n.hardwareConcurrency) ? "?" : n.hardwareConcurrency
      }
      ;
      v.ka = function() {
          return "number" === typeof n.deviceMemory ? n.deviceMemory : "?"
      }
      ;
      v.Eb = function() {
          return "object" === typeof P ? Math.round(P.getTime() / 1E3) : "?"
      }
      ;
      v.Ea = function() {
          try {
              var a = "?";
              if ("object" === typeof Intl && "function" === typeof Intl.DateTimeFormat && "function" === typeof Intl.DateTimeFormat().resolvedOptions) {
                  a = A(Intl.DateTimeFormat().resolvedOptions());
                  try {
                      Object.freeze(a)
                  } catch (b) {}
              }
              return a
          } catch (b) {
              return t("iz", u(b)),
              "X"
          }
      }
      ;
      v.Db = function() {
          return "object" === typeof P && "function" === typeof P.getTimezoneOffset ? x(P.getTimezoneOffset) || /^function getTimezoneOffset\(\)\{\s+var a=\(%_ClassOf\(this\)==='Date'\?%_ValueOf\(this\):ThrowDateTypeError\(\)\);\s+if\(\(!%_IsSmi\(%IS_VAR\(a\)\)&&!\(a==a\)\)\)return a;\s+return\(a-LocalTimeNoCheck\(a\)\)\/60000;\s+\}$/.test(Function.prototype.toString.call(P.getTimezoneOffset).trim()) || /^function\(\) \{\s*if \(alohaFPProxy\.isEnabled\(\)\) \{\s*return aloha_timeZoneOffsetMinutes;\s*\} else \{\s*return aloha_NativeGetTimezoneOffset\.call\(this\);\s*\}\s*\}$/.test(Function.prototype.toString.call(P.getTimezoneOffset).trim()) ? 0 : 1 : "?"
      }
      ;
      v.tz = function() {
          return "object" === typeof P && "function" === typeof P.getTimezoneOffset ? P.getTimezoneOffset() : "?"
      }
      ;
      v.Ja = function() {
          return "string" === typeof n.language ? n.language : "string" === typeof n.browserLanguage ? n.browserLanguage : "?"
      }
      ;
      v.Na = function() {
          if ("object" === typeof n.languages) {
              var a = [], b;
              for (b in A(n.languages))
                  a.push(n.languages[b]);
              return a
          }
          return "?"
      }
      ;
      v.ob = function() {
          return isNaN(d.screen.width) || isNaN(d.screen.height) ? "?" : d.screen.width + "x" + d.screen.height
      }
      ;
      v.L = function() {
          return isNaN(d.screen.availWidth) || isNaN(d.screen.availHeight) ? "?" : d.screen.availWidth + "x" + d.screen.availHeight
      }
      ;
      v.o = function() {
          return isNaN(d.screen.colorDepth) ? "?" : d.screen.colorDepth
      }
      ;
      v.B = function() {
          return isNaN(d.screen.pixelDepth) ? "?" : d.screen.pixelDepth
      }
      ;
      v.Tb = function() {
          return isNaN(d.screen.logicalXDPI) ? "?" : d.screen.logicalXDPI
      }
      ;
      v.Vb = function() {
          return isNaN(d.screen.logicalYDPI) ? "?" : d.screen.logicalYDPI
      }
      ;
      v.dp = function() {
          return isNaN(d.devicePixelRatio) ? "?" : d.devicePixelRatio
      }
      ;
      v.Cb = function() {
          var a = n.maxTouchPoints || n.msMaxTouchPoints;
          return isNaN(a) ? "?" : a
      }
      ;
      v.Ab = function() {
          try {
              return w.createEvent("TouchEvent"),
              1
          } catch (a) {
              return 0
          }
      }
      ;
      v.Gb = function() {
          return "ontouchstart"in d ? 1 : 0
      }
      ;
      v.W = function() {
          return "function" !== typeof n.getBattery || x(n.getBattery) ? 0 : 1
      }
      ;
      v.R = function() {
          return "function" === typeof n.getBattery || "object" === typeof n.battery || "object" === typeof n.mozBattery ? 1 : 0
      }
      ;
      v.U = function() {
          return "object" === typeof n.bluetooth || "object" === typeof n.mozBluetooth ? 1 : 0
      }
      ;
      v.Z = function() {
          try {
              if ("object" === typeof n.connection) {
                  var a = A(null), b;
                  for (b in n.connection)
                      "function" === typeof n.connection[b] || null === n.connection[b] || n.connection.toString[b] || (a[b] = Infinity === n.connection[b] ? "Infinity" : n.connection[b]);
                  try {
                      Object.freeze(a)
                  } catch (c) {}
                  return a
              }
              return "?"
          } catch (c) {
              return t("cn", u(c)),
              "X"
          }
      }
      ;
      v.nb = function() {
          return M && "function" === typeof M.getParameter ? x(M.getParameter) || Ha(M.getParameter) ? 0 : 1 : "?"
      }
      ;
      v.ra = function() {
          return M && "function" === typeof M.getExtension ? x(M.getExtension) || Ha(M.getExtension) ? 0 : 1 : "?"
      }
      ;
      v.v = function() {
          try {
              if (M && M.getParameter) {
                  var a = M.getParameter(M.VERSION);
                  if (a)
                      return a
              }
              return "?"
          } catch (b) {
              return t("gv", u(b)),
              "X"
          }
      }
      ;
      v.u = function() {
          try {
              if (M && M.getParameter) {
                  if (M.getExtension) {
                      var a = M.getExtension("WEBGL_debug_renderer_info");
                      if (a) {
                          var b = M.getParameter(a.UNMASKED_RENDERER_WEBGL);
                          if (b)
                              return b
                      }
                  }
                  var c = M.getParameter(M.RENDERER);
                  if (c)
                      return c
              }
              return "?"
          } catch (h) {
              return t("gr", u(h)),
              "X"
          }
      }
      ;
      v.va = function() {
          try {
              return Na = !0,
              fa
          } catch (a) {
              return t("fp", u(a)),
              "X"
          }
      }
      ;
      v.fx = function() {
          var a = d.requestAnimationFrame || d.mozRequestAnimationFrame || d.webkitRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame;
          return "function" === typeof a ? x(a) ? 0 : 1 : "?"
      }
      ;
      v.Pa = function() {
          try {
              return "object" === typeof performance && "function" === typeof performance.mark ? x(performance.mark) ? 0 : 1 : "?"
          } catch (a) {
              return t("ma", u(a)),
              "X"
          }
      }
      ;
      var L = A(null);
      L.Kb = function() {
          return "string" === typeof w.visibilityState ? w.visibilityState : "?"
      }
      ;
      L.Fb = function() {
          try {
              return ua && "object" === typeof ua && Z && "object" === typeof Z && "string" === typeof Z.visibilityState ? Z.visibilityState : "?"
          } catch (a) {
              return t("tv", u(a)),
              "X"
          }
      }
      ;
      L.xa = function() {
          return self !== ua ? 1 : 0
      }
      ;
      L.Pb = function() {
          return "string" === typeof d.name ? d.name : "?"
      }
      ;
      L.La = function() {
          return "string" === typeof w.location.href ? w.location.href : "?"
      }
      ;
      L.Bb = function() {
          try {
              return "string" === typeof Z.location.href ? Z.location.href : "string" === typeof d.top.location.href ? d.top.location.href : "?"
          } catch (a) {
              return "string" === typeof w.location.href ? w.location.href : "string" === typeof d.location.href ? d.location.href : "?"
          }
      }
      ;
      L.lb = function() {
          return "string" === typeof w.location.protocol ? w.location.protocol : "?"
      }
      ;
      L.rb = function() {
          try {
              if (!R && Object.getOwnPropertyDescriptors) {
                  var a = Object.getOwnPropertyDescriptors(w);
                  if (a && a.referrer) {
                      var b = [];
                      b.push(a.referrer.get ? x(a.referrer.get) ? 0 : 1 : "?");
                      b.push(a.referrer.set ? x(a.referrer.set) ? 0 : 1 : "?");
                      return b
                  }
                  return 0
              }
              return "?"
          } catch (c) {
              return t("rr", u(c)),
              "X"
          }
      }
      ;
      L.qb = function() {
          return "string" === typeof w.referrer ? w.referrer : "?"
      }
      ;
      L.$a = function() {
          try {
              return "function" === typeof PerformanceNavigation && "number" === typeof PerformanceNavigation.type ? PerformanceNavigation.type : "object" === typeof d.performance && "object" === typeof d.performance.navigation && "number" === typeof d.performance.navigation.type ? d.performance.navigation.type : "?"
          } catch (a) {
              return t("nt", u(a)),
              "X"
          }
      }
      ;
      L.ub = function() {
          return R ? 1 : 0
      }
      ;
      L.T = function() {
          return Ga ? 1 : 0
      }
      ;
      var ta = A(null);
      ta.C = function() {
          var a = A(null);
          a.wp = T(S(Xa.join(",")), 6, 17);
          a.np = T(S(va.join(",")), 15, 30);
          a.ws = T(S(wa.join(",")), 4, 18);
          a.wa = T(S(xa.join(",")), 7, 20);
          a.af = T(S(za.join(",")), 3, 16);
          a.vf = T(S(ya.join(",")), 5, 15);
          a.st = T(S(ma.join(",")), 20, 32);
          a.he = T(S(Ya.join(",")), 14, 28);
          a.dtw = T(S(B.dtw), 8, 18);
          try {
              Object.freeze(a)
          } catch (b) {}
          return a
      }
      ;
      ta.Nb = function() {
          var a = this.C(), b = [], c;
          for (c in a)
              b.push(a[c]);
          return S(b.join(","))
      }
      ;
      var Y = A(null);
      Y.go = function() {
          var a = A(null)
            , b = this.ta();
          this.j(b) && (a.esd = b);
          b = this.aa();
          this.j(b) && (a.wax = b);
          b = this.pb();
          this.j(b) && (a.sbr = b);
          b = this.qa();
          this.j(b) && (a.err = b);
          try {
              Object.freeze(a)
          } catch (c) {}
          return a
      }
      ;
      Y.ta = function() {
          var a = [];
          "object" !== typeof Sentry && "object" !== typeof __SENTRY__ || a.push("sentry");
          "object" === typeof LEADGEN && "function" === typeof LEADGEN.debug && a.push("leadgen");
          "object" === typeof NREUM && a.push("nreum");
          var b;
          (b = "object" === typeof Bugsnag || "object" === typeof bugsnagClient || "function" === typeof bugsnag) || (b = d.webpackJsonp || d.webpackJsonpbusiness,
          b = "object" === typeof b ? Pa(b, "bugsnag") ? !0 : !1 : void 0);
          b && a.push("bugsnag");
          "function" === typeof Zone && "function" === typeof Zone.__load_patch && a.push("zone");
          "object" === typeof trackJs && "function" === typeof trackJs.track && a.push("trackjs");
          "function" === typeof cl && x(cl) && "function" === typeof ce && x(ce) && /^function\(\){}$/.test(console.debug.toString()) && a.push("censor");
          "string" === typeof __fcInvoked && "invoked" === __fcInvoked && "object" === typeof __googlefc && "object" === typeof __googlefc.fcKernelManager && "object" === typeof __googlefc.fcKernelManager.g && "string" === typeof __googlefc.fcKernelManager.g.pageviewId && a.push("googlefc");
          "string" !== typeof d._pxParam1 && "string" !== typeof d._pxAppId || a.push("perimeter");
          "object" === typeof w.webL10n && "function" === typeof w.webL10n.getReadyState && a.push("webL10n");
          "object" === typeof d.Raven && "function" === typeof d.Raven.Client && a.push("raven");
          "function" === typeof d._LRLogger && "function" === typeof d._lr_surl_cb && "boolean" === typeof d._lr_loaded && a.push("logrocket");
          ("string" === typeof d.mh_uts_available || "boolean" === typeof d.mh_uts_available || "object" === typeof d.hrs && "function" === typeof d.hrs.addLeadTag) && a.push("hyros");
          "function" === typeof d.videojs && "function" === typeof d.videojs.Html5 && a.push("videojs");
          "object" === typeof d.OneTrust && "function" === typeof d.OneTrust.IsVendorServiceEnabled && a.push("onetrust");
          "object" === typeof document.getElementById("becookiebarscriptid") && "boolean" === typeof d.beConsentPrefEnabled && a.push("beconsent");
          "object" === typeof d.Babel && "object" === typeof d.Babel.availablePresets && a.push("babel");
          "function" === typeof d.Osano && "object" === typeof d.Osano.cm && a.push("osano");
          "object" === typeof d._dojoPixel && "function" === typeof d._ddq && a.push("datadojo");
          "object" === typeof d.Cookiebot && "object" === typeof d.Cookiebot.consent && a.push("cookiebot");
          try {
              if ("undefined" !== typeof d && Object.getOwnPropertyNames) {
                  var c = Object.getOwnPropertyNames(d)
                    , h = RegExp("^_[a-z0-9]{8}_[a-z0-9]{4}_[a-z0-9]{4}_[a-z0-9]{4}_[a-z0-9]{12}_e$")
                    , m = RegExp("{return [a-z]+=!0x0,void 0x0;}");
                  for (q in c) {
                      var q = parseInt(q, 10);
                      h.test(c[q]) && d.hasOwnProperty(c[q]) && m.test(d.__lookupGetter__(c[q]).toString()) && a.push("clean")
                  }
              }
          } catch (r) {}
          return a
      }
      ;
      Y.j = function(a) {
          try {
              return "object" !== typeof a || null === a || "object" === typeof a && null !== a && (0 < a.length || Ea() && 0 < Object.keys(a).length)
          } catch (b) {
              return !0
          }
      }
      ;
      Y.qa = function() {
          return Va
      }
      ;
      Y.pb = function() {
          try {
              if ("function" === typeof n.sendBeacon && !x(n.sendBeacon) && !Sa(n.sendBeacon))
                  return n.sendBeacon.toString()
          } catch (a) {
              return t("rsbs", u(a)),
              "X"
          }
      }
      ;
      Y.aa = function() {
          try {
              return "object" === typeof d.document && "object" === typeof d.document.documentElement && "function" === typeof d.document.documentElement.getAttributeNames ? d.document.documentElement.getAttributeNames() : 0
          } catch (a) {
              return t("wax", u(a)),
              "X"
          }
      }
      ;
      (function() {
          kb();
          eb();
          "number" === typeof B.adblocker && 1 === B.adblocker ? jb() : qa = !0;
          try {
              if ("object" === typeof d.localStorage || "object" === typeof d.sessionStorage || "string" === typeof w.cookie)
                  R = !1
          } catch (a) {
              a.name && "SecurityError" === a.name && (R = !0)
          }
          ib();
          hb();
          fb();
          setTimeout(function() {
              var a = setInterval(function() {
                  ra && V && W && qa && pa && na && ("number" === typeof a && clearInterval(a),
                  C.adblocker = 1 === f.m() ? 1 : 0,
                  db())
              }, 80)
          }, ca)
      }
      )();
      var K = A(null);
      K.getId = function() {
          return "string" === typeof C.id ? C.id : null
      }
      ;
      K.getExId = function() {
          return "string" === typeof C.exid ? C.exid : null
      }
      ;
      K.hasResult = function() {
          return "string" === typeof C.result ? !0 : "string" === typeof F.result ? !0 : !1
      }
      ;
      K.queryResult = function(a) {
          return bb(a)
      }
      ;
      K.isGood = function() {
          return "string" === typeof C.result ? "good" === C.result : "string" === typeof F.result ? "good" === F.result : null
      }
      ;
      K.isWarning = function() {
          return "string" === typeof C.result ? "warn" === C.result || "warning" === C.result : "string" === typeof F.result ? "warn" === F.result || "warning" === F.result : null
      }
      ;
      K.isBad = function() {
          return "string" === typeof C.result ? "bad" === C.result : "string" === typeof F.result ? "bad" === F.result : null
      }
      ;
      K.getResult = function() {
          return "string" === typeof C.result ? C.result : "string" === typeof F.result ? F.result : null
      }
      ;
      K.getRuleSets = function() {
          return "object" === typeof C.rule_sets ? C.rule_sets : "object" === typeof F.rule_sets ? F.rule_sets : null
      }
      ;
      K.getInvalidTrafficType = function() {
          return "string" === typeof C.invalid_traffic_type ? C.invalid_traffic_type : "string" === typeof F.invalid_traffic_type ? F.invalid_traffic_type : null
      }
      ;
      K.isMobile = function() {
          return "number" === typeof C.mobile ? 1 === C.mobile : "number" === typeof F.mobile ? 1 === F.mobile : null
      }
      ;
      K.getMobile = function() {
          return "number" === typeof C.mobile ? C.mobile : "number" === typeof F.mobile ? F.mobile : null
      }
      ;
      K.hasAdBlocker = function() {
          return "number" === typeof C.adblocker ? 1 === C.adblocker : "number" === typeof F.adblocker ? 1 === F.adblocker : null
      }
      ;
      K.getAdBlocker = function() {
          return "number" === typeof C.adblocker ? C.adblocker : "number" === typeof F.adblocker ? F.adblocker : null
      }
      ;
      K.getError = function() {
          return "string" === typeof C.error ? C.error : "string" === typeof F.error ? F.error : null
      }
      ;
      K.getResponseObject = function() {
          return "object" === typeof C ? C : null
      }
      ;
      K.getResultObject = function() {
          return "object" === typeof F ? F : null
      }
      ;
      K.getObject = function() {
          var a = A(null);
          if ("object" === typeof C)
              for (var b in C)
                  C.hasOwnProperty(b) && (a[b] = C[b]);
          if ("object" === typeof F)
              for (b in F)
                  F.hasOwnProperty(b) && (a[b] = F[b]);
          a = ja(a);
          try {
              Object.freeze(a)
          } catch (c) {}
          return "object" === typeof a ? a : null
      }
      ;
      K = ja(K);
      try {
          Object.freeze(K)
      } catch (a) {}
      return K
  }
  )();
  var AnuraLib = (function() {
      var p = {
          google: {
              addExclusions: function(e) {
                  try {
                      var b = document.createElement("script");
                      b.src = "https://www.googletagmanager.com/gtag/js";
                      b.addEventListener("load", function() {
                          window.dataLayer = window.dataLayer || [];
                          window.gtag = function() {
                              window.dataLayer.push(arguments)
                          }
                          ;
                          window.gtag("js", new Date);
                          window.gtag("set", {
                              cookie_flags: "SameSite:None;Secure"
                          });
                          for (var a in e)
                              window.gtag("event", "page_view", {
                                  send_to: e[a]
                              }),
                              window.gtag("event", "anura_exclusion", {
                                  send_to: e[a]
                              })
                      });
                      document.head.appendChild(b)
                  } catch (a) {}
              }
          },
          meta: {
              addExclusions: function(e) {
                  try {
                      var b = document.getElementsByTagName("script")[0]
                        , a = document.createElement("noscript");
                      a.id = "fb-ns";
                      b.parentNode.insertBefore(a, b);
                      for (var c in e) {
                          var d = document.createElement("img");
                          d.src = "https://www.facebook.com/tr?id=" + e[c] + "&ev=PageView&noscript=1";
                          a.appendChild(d)
                      }
                      (function(f, g, k, m, h, l, n) {
                          f.fbq || (h = f.fbq = function() {
                              h.callMethod ? h.callMethod.apply(h, arguments) : h.queue.push(arguments)
                          }
                          ,
                          f._fbq || (f._fbq = h),
                          h.push = h,
                          h.loaded = !0,
                          h.version = "2.0",
                          h.queue = [],
                          l = g.createElement(k),
                          l.async = !0,
                          l.src = m,
                          n = g.getElementsByTagName(k)[0],
                          n.parentNode.insertBefore(l, n))
                      }
                      )(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js", null, null, null);
                      for (c in e)
                          window.fbq("init", e[c]),
                          window.fbq("trackSingle", e[c], "PageView"),
                          window.fbq("trackSingleCustom", e[c], "AnuraExclusionEvent")
                  } catch (f) {}
              }
          },
          microsoft: {
              addExclusions: function(e) {
                  try {
                      window.uetq = window.uetq || [];
                      var b = document.createElement("script");
                      b.src = "https://bat.bing.com/bat.js";
                      b.async = 1;
                      b.onload = b.onreadystatechange = function() {
                          var c = this.readyState;
                          c && "loaded" !== c && "complete" !== c || (b.onload = b.onreadystatechange = null)
                      }
                      ;
                      b.onload = function() {
                          for (var c in e) {
                              var d = {
                                  ti: e[c]
                              };
                              d.q = window.uetq;
                              window.uetq = new window.UET(d);
                              window.uetq.push("pageLoad");
                              window.uetq.push("event", "exclusion", {
                                  event_category: "anura",
                                  event_label: "exclusion",
                                  event_value: 1
                              })
                          }
                      }
                      ;
                      var a = document.getElementsByTagName("script")[0];
                      a.parentNode.insertBefore(b, a)
                  } catch (c) {}
              }
          },
          linkedin: {
              addExclusion: function(e, b) {
                  try {
                      var a = new URLSearchParams(window.location.search);
                      a.set("an_lnexaud", b);
                      var c = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + a.toString();
                      window.history.pushState({
                          path: c
                      }, "", c);
                      if (null === document.getElementById("linked-ns")) {
                          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                          window._linkedin_data_partner_ids.push(e);
                          window.lintrk || (window.lintrk = function(k, m) {
                              window.lintrk.q.push([k, m])
                          }
                          ,
                          window.lintrk.q = []);
                          var d = document.getElementsByTagName("script")[0]
                            , f = document.createElement("noscript");
                          f.id = "linked-ns";
                          d.parentNode.insertBefore(f, d);
                          f.appendChild(document.createElement("img"));
                          var g = document.createElement("script");
                          g.type = "text/javascript";
                          g.async = !0;
                          g.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                          d.parentNode.insertBefore(g, d);
                          g.onload = function() {
                              window.lintrk()
                          }
                      }
                  } catch (k) {}
              }
          },
          tiktok: {
              addExclusions: function(e) {
                  try {
                      var b = window;
                      b.TiktokAnalyticsObject = "ttq";
                      var a = b.ttq = b.ttq || [];
                      a.methods = "page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");
                      a.setAndDefer = function(d, f) {
                          d[f] = function() {
                              d.push([f].concat(Array.prototype.slice.call(arguments, 0)))
                          }
                      }
                      ;
                      for (var c in a.methods)
                          a.setAndDefer(a, a.methods[c]);
                      a.instance = function(d) {
                          d = a._i[d] || [];
                          for (var f = 0; f < a.methods.length; f++)
                              a.g(d, a.methods[f]);
                          return d
                      }
                      ;
                      a.load = function(d, f) {
                          a._i = a._i || {};
                          a._i[d] = [];
                          a._i[d]._u = "https://analytics.tiktok.com/i18n/pixel/events.js";
                          a._t = a._t || {};
                          a._t[d] = +new Date;
                          a._o = a._o || {};
                          a._o[d] = f || {};
                          f = document.createElement("script");
                          f.type = "text/javascript";
                          f.async = !0;
                          f.src = "https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=" + d + "&lib=ttq";
                          d = document.getElementsByTagName("script")[0];
                          d.parentNode.insertBefore(f, d)
                      }
                      ;
                      for (c in e)
                          a.load(e[c]),
                          a.track("ViewContent"),
                          a.page()
                  } catch (d) {}
              }
          },
          x: {
              addExclusions: function(e) {
                  try {
                      if (window.twq)
                          for (var b in e)
                              window.twq("event", e[b], {});
                      else {
                          var a = window.twq = function() {
                              a.exe ? a.exe.apply(a, arguments) : a.queue.push(arguments)
                          }
                          ;
                          a.version = "1.1";
                          a.queue = [];
                          window.twq.queue = [];
                          var c = document.createElement("script");
                          c.async = !0;
                          c.src = "https://static.ads-twitter.com/uwt.js";
                          c.onload = function() {
                              for (var f in e)
                                  window.twq("event", e[f], {})
                          }
                          ;
                          var d = document.getElementsByTagName("script")[0];
                          d.parentNode.insertBefore(c, d)
                      }
                  } catch (f) {}
              }
          },
          pinterest: {
              addExclusions: function(e) {
                  try {
                      window.pintrk || (window.pintrk = function() {
                          window.pintrk.queue.push(Array.prototype.slice.call(arguments))
                      }
                      );
                      var b = window.pintrk;
                      b.queue = [];
                      b.version = "3.0";
                      var a = document.createElement("script");
                      a.async = !0;
                      a.src = "https://s.pinimg.com/ct/core.js";
                      a.onload = function() {
                          for (var d in e)
                              window.pintrk("load", e[d], {}),
                              window.pintrk("page"),
                              window.pintrk("track", "custom", {
                                  event_id: "anura_exclusion_" + Date.now() + "_" + Math.random().toString(36).substring(10)
                              })
                      }
                      ;
                      var c = document.getElementsByTagName("script")[0];
                      c.parentNode.insertBefore(a, c)
                  } catch (d) {}
              }
          },
          taboola: {
              addExclusion: function(e) {
                  try {
                      window._tfa = window._tfa || [];
                      var b = document.getElementById("tb_tfa_script");
                      if (!b) {
                          b = document.createElement("script");
                          b.async = 1;
                          b.src = "https://cdn.taboola.com/libtrc/unip/taboola-1/tfa.js";
                          b.id = "tb_tfa_script";
                          var a = document.getElementsByTagName("script")[0];
                          a.parentNode.insertBefore(b, a)
                      }
                      b.addEventListener("load", function() {
                          window._tfa.push({
                              notify: "event",
                              name: "AnuraExclusion",
                              id: e
                          })
                      })
                  } catch (c) {}
              }
          },
          outbrain: {
              addExclusion: function(e) {
                  try {
                      var b = window.obApi;
                      b && (b.marketerId = "string" == typeof b.marketerId ? [b.marketerId, e] : b.marketerId.concat(e));
                      b = window.obApi = function() {
                          b.dispatch ? b.dispatch.apply(b, arguments) : b.queue.push(arguments)
                      }
                      ;
                      b.version = "1.1";
                      b.loaded = !0;
                      b.marketerId = e;
                      b.queue = [];
                      var a = document.createElement("script");
                      a.async = 1;
                      a.src = "https://amplify.outbrain.com/cp/obtp.js";
                      a.type = "text/javascript";
                      var c = document.getElementsByTagName("script")[0];
                      c.parentNode.insertBefore(a, c);
                      a.addEventListener("load", function() {
                          window.obApi("track", "AnuraExclusion")
                      })
                  } catch (d) {}
              }
          },
          actions: {
              setValue: function(e, b) {
                  try {
                      var a = document.getElementById(b) || document.getElementsByName(b)[0] || null;
                      return !!a && (a.value = e,
                      !0)
                  } catch (c) {}
              },
              disableInputs: function() {
                  try {
                      document.addEventListener("click", function(a) {
                          a.preventDefault();
                          a.stopPropagation()
                      }, !0);
                      document.addEventListener("keydown", function(a) {
                          a.preventDefault();
                          a.stopPropagation()
                      }, !0);
                      var e = window.location.hostname
                        , b = setInterval(function() {
                          var a = document.querySelectorAll("form, button, a, input, textarea"), c;
                          for (c in a)
                              "object" === typeof a[parseInt(c, 10)] && a[parseInt(c, 10)].setAttribute && (a[parseInt(c, 10)].setAttribute("tabindex", "-1"),
                              a[parseInt(c, 10)].setAttribute("disabled", "true"));
                          a = document.getElementsByTagName("iframe");
                          for (var d in a)
                              if (a[parseInt(d, 10)] && a[parseInt(d, 10)].contentDocument) {
                                  var f = a[parseInt(d, 10)].contentDocument.querySelectorAll("form, button, a, input, textarea");
                                  for (c in f)
                                      "object" === typeof f[parseInt(c, 10)] && f[parseInt(c, 10)].setAttribute && (f[parseInt(c, 10)].setAttribute("tabindex", "-1"),
                                      f[parseInt(c, 10)].setAttribute("disabled", "true"))
                              }
                          document.querySelectorAll("a").forEach(function(g) {
                              var k = document.createElement("a");
                              k.href = g.href;
                              k.hostname !== e && k.hostname && (g.href = "#")
                          })
                      }, 100);
                      setTimeout(function() {
                          clearInterval(b)
                      }, 12E4)
                  } catch (a) {}
              }
          }
      };
      try {
          Object.freeze(p)
      } catch (e) {}
      return p
  }
  )();
  var getAnura = {
      getAnura: function() {
          return Anura;
      },
      getLib: function() {
          return AnuraLib;
      }
  };
  try {
      Object.setPrototypeOf(getAnura, null);
  } catch (e) {
      getAnura.__proto__ = null;
  }
  ;try {
      Object.freeze(getAnura);
  } catch (e) {}
  ;return getAnura;
}
)();
