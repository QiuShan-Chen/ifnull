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
            control: '36388229393',
            dtw: 'debugger;',
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiIyNjIyMzI4OTQzIiwiaWF0IjoxNzM3NzMzOTYwLjkzMzAwNSwibmJmIjoxNzM3NzMzOTYwLjkzMzAwNSwiZXhwIjoxNzM3NzM0MDIwLjkzMzAwNSwianRpIjoiQlBQaGp2WXd3dkNLci82WCIsImF1ZCI6IjM2NTU5ODU5MzUiLCJtdGkiOiIwLjkzMzAwNSIsInNsdCI6InpITElrRU80Iiwic3JjIjoibnVsbCIsImNtcCI6Im51bGwiLCJ1c3IiOiJNb3ppbGxhJTJGNS4wKyUyOExpbnV4JTNCK0FuZHJvaWQrMTMlM0IrQUxJLUFOMDArQnVpbGQlMkZIT05PUkFMSS1BTjAwJTNCK3d2JTI5K0FwcGxlV2ViS2l0JTJGNTM3LjM2KyUyOEtIVE1MJTJDK2xpa2UrR2Vja28lMjkrVmVyc2lvbiUyRjQuMCtDaHJvbWUlMkYxMTYuMC4wLjArTW9iaWxlK1NhZmFyaSUyRjUzNy4zNislNUJGQl9JQUIlMkZGQjRBJTNCRkJBViUyRjQ4MC4wLjAuMC4wJTNCJTVEIiwicmVmIjoiaHR0cHMlM0ElMkYlMkZ3d3cuYW51cmEuaW8lMkYiLCJnZW8iOiJ7XCJyZW1vdGVfYWRkcmVzc1wiOlwiMTAxLjIwNC4yMTkuMTI5XCIsXCJpc3BcIjpcIkNoaW5hK1VuaWNvbVwiLFwib3JnYW5pemF0aW9uXCI6XCJDaGluYStVbmljb21cIixcImxhdGl0dWRlXCI6MzAuNjY2NyxcImxvbmdpdHVkZVwiOjEwNC4wNjY3fSJ9.-zrQA974P19Rt9evU75KN_rJjG9ZPHzxqKxzY5AMdtP4yH4uOVQPChZL2nFIA2snp3FMNYIOKNvCjNzohGsv2A'
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
                    "string" === typeof A.scheme && "string" === typeof A.host && "string" === typeof A.result)
                        if ("object" === typeof XDomainRequest) {
                            var b = new XDomainRequest;
                            b.open("POST", ("https:" === w.location.protocol ? A.scheme : A.scheme.replace("https:", "http:")) + "//" + A.host + "/" + A.result + "?" + Math.floor(1E12 * Math.random() + 1));
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
                            (b = ia()) ? (b.open("POST", A.scheme + "//" + A.host + "/" + A.result + "?" + Math.floor(1E12 * Math.random() + 1)),
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
            a = B(JSON.parse(a.responseText));
            a = ja(a);
            try {
                Object.freeze(a)
            } catch (c) {}
            "object" === typeof a && (H = a);
            "function" === typeof b && b(L)
        }
        function Ja() {
            var a = B(null)
              , b = Ba(A.token.split(".")[1]);
            b = /"aud":\s*"([0-9]+)"/.exec(b);
            a.instance = b[1] ? decodeURIComponent(b[1]) : null;
            "string" === typeof C.id && (a.id = C.id);
            "string" === typeof C.exid && (a.exid = C.exid);
            return Ca(a).join("&")
        }
        function cb(a) {
            try {
                var b = B(null);
                b.id = encodeURIComponent("undefined" !== typeof a.exid && a.exid ? a.exid : a.id);
                b.key = a.cnf.key;
                b.hash = g.s();
                b.nfa = ka;
                b = Ca(b).join("&").replace(/~/g, "%7E");
                if ("object" === typeof XDomainRequest) {
                    var c = new XDomainRequest;
                    c.open("POST", ("https:" === w.location.protocol ? A.scheme : A.scheme.replace("https:", "http:")) + "//" + A.host + "/" + a.cnf.endpoint + "?" + Math.floor(1E12 * Math.random() + 1));
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
                    c.open("POST", A.scheme + "//" + A.host + "/" + a.cnf.endpoint + "?" + Math.floor(1E12 * Math.random() + 1)),
                    c.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    "object" === typeof c.onload ? c.onload = function() {}
                    : c.onreadystatechange = function() {}
                    ,
                    c.send(b)
            } catch (f) {}
        }
        function db() {
            try {
                if (Da || "string" !== typeof A.scheme || "string" !== typeof A.host || "string" !== typeof A.response)
                    ba({
                        responseText: '{"error":"Incomplete response params"}'
                    });
                else if ("object" === typeof XDomainRequest) {
                    var a = new XDomainRequest;
                    a.open("POST", ("https:" === w.location.protocol ? A.scheme : A.scheme.replace("https:", "http:")) + "//" + A.host + "/" + A.response + "?" + Math.floor(1E12 * Math.random() + 1));
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
                    (a = ia()) ? (a.open("POST", A.scheme + "//" + A.host + "/" + A.response + "?" + Math.floor(1E12 * Math.random() + 1)),
                    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    "object" === typeof a.onload ? a.onload = function() {
                        this.responseText && ba(this)
                    }
                    : a.onreadystatechange = function() {
                        4 === a.readyState && a.responseText && ba(a)
                    }
                    ,
                    a.send(Ka()),
                    Da = !0) : ba({
                        responseText: '{"error":"Browser not supported"}'
                    })
            } catch (b) {
                ba({
                    responseText: '{"error":"Response encountered an unknown error: \'' + b.message + "'\"}"
                })
            }
            "function" === typeof J.close && (J.close(),
            J = !1);
            "function" === typeof K.close && (K.close(),
            K = !1)
        }
        function ba(a) {
            a = B(JSON.parse(a.responseText));
            "object" === typeof a.cnf && cb(a);
            delete a.cnf;
            a = ja(a);
            try {
                Object.freeze(a)
            } catch (b) {}
            "object" === typeof a && (C = a);
            "function" === typeof responseCallback && responseCallback(L)
        }
        function eb() {
            function a(e) {
                if ("function" === typeof J.setLocalDescription) {
                    try {
                        J.setLocalDescription(e)
                    } catch (k) {
                        J.setLocalDescription(e, function() {}, function() {})
                    }
                    var h = setInterval(function() {
                        J && J.localDescription && J.localDescription.sdp && (clearInterval(h),
                        f(J.localDescription.sdp, F.ld),
                        m(J, "rs"),
                        V = !0)
                    }, 80);
                    setTimeout(function() {
                        clearInterval(h);
                        V = !0
                    }, 320 + ca)
                } else
                    V = !0
            }
            function b(e) {
                if ("function" === typeof K.setLocalDescription) {
                    try {
                        K.setLocalDescription(e)
                    } catch (k) {
                        K.setLocalDescription(e, function() {}, function() {})
                    }
                    var h = setInterval(function() {
                        K && K.localDescription && K.localDescription.sdp && (clearInterval(h),
                        f(K.localDescription.sdp, F.sld),
                        m(K, "srs"),
                        W = !0)
                    }, 80);
                    setTimeout(function() {
                        clearInterval(h);
                        W = !0
                    }, 320 + ca)
                } else
                    W = !0
            }
            function c(e, h) {
                if ("object" === typeof e) {
                    if (e.address)
                        e.address && "string" === typeof e.address && 0 > h.indexOf(e.address) && h.push(e.address.replace(/\[|\]/g, ""));
                    else if (e.candidate) {
                        var k = r.exec(e.candidate)
                          , l = x.exec(e.candidate);
                        k && k[0] && 0 > h.indexOf(k[0]) && h.push(k[0]);
                        l && l[0] && 0 > h.indexOf(l[0]) && h.push(l[0])
                    }
                    e.candidate && (e = e.candidate.split(" ")) && e[3] && 0 > F.id.indexOf(e[3]) && F.id.push(e[3])
                }
            }
            function f(e, h) {
                if ("string" === typeof e) {
                    e = e.split("\n");
                    for (var k in e) {
                        k = parseInt(k, 10);
                        if (!/^a=fingerprint/.test(e[k])) {
                            var l = r.exec(e[k])
                              , G = x.exec(e[k]);
                            l && l[0] && 0 > h.indexOf(l[0]) && h.push(l[0]);
                            G && G[0] && 0 > h.indexOf(G[0]) && h.push(G[0])
                        }
                        /^a=candidate/.test(e[k]) && (l = e[k].split(" ")) && l[3] && 0 > F.id.indexOf(l[3]) && F.id.push(l[3])
                    }
                }
            }
            function m(e, h) {
                function k(G, O) {
                    F[G] = "object" === typeof O && "number" === typeof O.size ? O.size : "ns";
                    F["h" + G] = 1
                }
                function l(G, O) {
                    "object" === typeof O && "string" === typeof O.errorText && t(G + "-hsre", O.errorText)
                }
                if ("object" === typeof e && "function" === typeof e.getStats)
                    try {
                        if (la())
                            try {
                                e.getStats(null).then(function(G) {
                                    k(h, G)
                                }, function(G) {
                                    l(h, G)
                                })
                            } catch (G) {
                                e.getStats(function(O) {
                                    k(h, O)
                                }, function(O) {
                                    l(h, O)
                                }, null)
                            }
                        else
                            e.getStats(function(G) {
                                k(h, G)
                            }, function(G) {
                                l(h, G)
                            }, null)
                    } catch (G) {
                        t(h + "-hsr", v(G))
                    }
                else
                    F[h] = "ngs",
                    F["h" + h] = 1
            }
            function q(e, h) {
                "object" === typeof e && "string" === typeof e.errorText && t(h + "-coe", e.errorText)
            }
            var r = /\b(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\b/
              , x = /\b(?:(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){6})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:::(?:(?:(?:[0-9a-fA-F]{1,4})):){5})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){4})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,1}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){3})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,2}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){2})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,3}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:[0-9a-fA-F]{1,4})):)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,4}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,5}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,6}(?:(?:[0-9a-fA-F]{1,4})))?::))))\b/;
            try {
                if (g.i()) {
                    var E = B(null);
                    E.bundlePolicy = "max-bundle";
                    E.iceServers = [];
                    E.iceCandidatePoolSize = 0;
                    var D = B(null);
                    D.url = ma[0];
                    D.urls = ma;
                    var z = B(null);
                    z.bundlePolicy = "max-bundle";
                    z.iceServers = [D];
                    z.iceCandidatePoolSize = ma.length;
                    J = new da(E);
                    K = new da(z);
                    if ("object" === typeof J && "object" === typeof K) {
                        var p = B(null);
                        p.iceRestart = !0;
                        "object" === typeof J.onicecandidate && (J.onicecandidate = function(e) {
                            e && e.candidate && c(e.candidate, F.c)
                        }
                        );
                        "function" === typeof J.createDataChannel && J.createDataChannel("epc");
                        if ("function" === typeof J.createOffer)
                            try {
                                if (la())
                                    try {
                                        J.createOffer(p).then(function(e) {
                                            a(e)
                                        }, function(e) {
                                            q(e, "pc")
                                        })
                                    } catch (e) {
                                        J.createOffer(function(h) {
                                            a(h)
                                        }, function(h) {
                                            q(h, "pc")
                                        }, p)
                                    }
                                else
                                    J.createOffer(function(e) {
                                        a(e)
                                    }, function(e) {
                                        q(e, "pc")
                                    }, p)
                            } catch (e) {
                                t("pc-co", e.message)
                            }
                        else
                            V = !0;
                        "object" === typeof K.onicecandidate && (K.onicecandidate = function(e) {
                            e && e.candidate && c(e.candidate, F.sc)
                        }
                        );
                        "function" === typeof K.createDataChannel && K.createDataChannel("espc");
                        if ("function" === typeof K.createOffer)
                            try {
                                if (la())
                                    try {
                                        K.createOffer(p).then(function(e) {
                                            b(e)
                                        }, function(e) {
                                            q(e, "spc")
                                        })
                                    } catch (e) {
                                        K.createOffer(function(h) {
                                            b(h)
                                        }, function(h) {
                                            q(h, "spc")
                                        }, p)
                                    }
                                else
                                    K.createOffer(function(e) {
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
                        F = 1,
                        W = V = !0
                } else
                    F = 0,
                    W = V = !0
            } catch (e) {
                t("cwrtc", v(e)),
                F = "X",
                W = V = !0
            }
        }
        function fb() {
            function a() {
                "number" === typeof c && clearInterval(c);
                "number" === typeof f && clearInterval(f)
            }
            function b() {
                var r = B(null);
                r.ts = Math.round(P.getTime() / 1E3);
                r.fn = B(null);
                var x = B(null);
                x.wd = g.l();
                x.wa = g.G();
                x.wv = g.H();
                for (var E in x) {
                    var D = x[E];
                    0 !== D && "X" !== D && "?" !== D && (r.fn[E] = D)
                }
                Ea() && Object.keys(r.fn).length && (ea = r.fn,
                La("wds", r),
                a(),
                na = !0)
            }
            var c = null
              , f = null;
            try {
                if (oa() && Ma("wds")) {
                    var m = B(JSON.parse(Ma("wds")));
                    if ("number" === typeof m.ts && "object" === typeof m.fn)
                        if (10800 > Math.round(P.getTime() / 1E3) - m.ts)
                            ea = m.fn;
                        else
                            try {
                                oa() && d.localStorage.removeItem("wds")
                            } catch (r) {
                                t("rls", v(r))
                            }
                    else {
                        var q = B(null);
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
                    f = setInterval(function() {
                        b()
                    }, 240))
                }, 320 + ca)
            } catch (r) {
                t("cwd", v(r)),
                ea = "X",
                na = !0
            }
        }
        function gb() {
            try {
                if ("function" === typeof Worker && ("function" === typeof URL || "function" === typeof webkitURL)) {
                    var a = "'use strict';onmessage=function(ev){postMessage({dto:true});" + A.dtw + "postMessage({dto:false});close();};";
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
                      , f = void 0;
                    c.addEventListener("message", function(m) {
                        m.data.dto ? (new Promise(function(q) {
                            f = q;
                            setTimeout(function() {
                                f(999)
                            }, 100)
                        }
                        )).then(function(q) {
                            Fa = q;
                            c.terminate()
                        }) : f(!1)
                    });
                    c.postMessage({})
                }
            } catch (m) {
                t("dtw", v(m))
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
                                var f = new Image;
                                Object.defineProperty(f, "id", {
                                    get: function() {
                                        X = 900;
                                        return null
                                    }
                                });
                                Q.debug(f)
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
            } catch (f) {
                f.name && "SecurityError" === f.name ? R = !0 : t("cdt", v(f)),
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
                            t("wbs", v(c))
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
                    t("abb", v(q))
                }
                qa = !0
            }
            function b() {
                qa = U = !0
            }
            try {
                if ("string" === typeof A.abhost) {
                    var c = ("https:" === w.location.protocol ? A.scheme : A.scheme.replace("https:", "http:")) + "//" + A.abhost + "/showads.js?" + Math.floor(1E12 * Math.random() + 1);
                    if ("object" === typeof XDomainRequest) {
                        var f = new XDomainRequest;
                        f.open("GET", c);
                        f.timeout = 1E3;
                        f.onprogress = function() {}
                        ;
                        f.ontimeout = a;
                        f.onerror = b;
                        f.onload = a;
                        setTimeout(function() {
                            f.send(null)
                        }, 0)
                    } else
                        (f = ia()) ? (f.open("GET", c),
                        f.timeout = 1E3,
                        f.ontimeout = a,
                        f.onerror = b,
                        "object" === typeof f.onload ? f.onload = function() {
                            0 === this.status ? b() : a()
                        }
                        : f.onreadystatechange = function() {
                            4 === f.readyState && (0 === f.status ? b() : a())
                        }
                        ,
                        f.send(null)) : a()
                } else
                    a()
            } catch (m) {
                t("cab", v(m)),
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
                m < f && !Na && b(a)
            }
            try {
                setTimeout(function() {
                    ra = !0
                }, 320 + ca);
                var b = d.requestAnimationFrame || d.mozRequestAnimationFrame || d.webkitRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame;
                if (b) {
                    var c = []
                      , f = 51
                      , m = 0;
                    b(a)
                } else
                    fa = "?",
                    ra = !0
            } catch (q) {
                t("cfps", v(q)),
                fa = "X",
                ra = !0
            }
        }
        function Ca(a) {
            var b = [], c;
            for (c in a)
                if ("object" === typeof a[c]) {
                    var f = b
                      , m = f.push
                      , q = c + "=";
                    var r = JSON.stringify(a[c]);
                    r = "function" === typeof btoa ? btoa(r) : sa.encode(r);
                    m.call(f, q + r)
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
                b.push(JSON.stringify(a[c], function(f, m) {
                    return "" === m ? "" : m
                }));
            a = Ba(A.token.split(".")[1]);
            a = /"slt":\s*"([a-z0-9%]+)"/i.exec(a);
            a = a[1] ? decodeURIComponent(a[1]) : null;
            var c = A.control ? A.control : null;
            b.push(a);
            b.push(c);
            return S(b.join("").replace(/[\W]/g, ""))
        }
        function Ka() {
            var a = B(null);
            "string" === typeof A.token && (a.token = A.token);
            a.params = B(null);
            a.params.co = g.ea();
            a.params.iw = g.A();
            a.params.ow = g.C();
            a.params.aw = g.R();
            a.params.hi = g.Fa();
            a.params.pl = g.lb();
            a.params.mt = g.Ya();
            a.params.jr = g.La();
            a.params.je = g.Ja();
            a.params.ax = g.S();
            a.params.gx = g.Ca();
            a.params.ud = g.Mb();
            a.params.mz = g.bb();
            a.params.op = g.hb();
            a.params.lr = g.Pa();
            a.params.ld = g.Na();
            a.params.sr = g.Bb();
            a.params.sd = g.zb();
            a.params.id = g.id();
            a.params.od = g.gb();
            a.params.be = g.U();
            a.params.mr = g.Xa();
            a.params.mk = g.Va();
            a.params.sx = g.Db();
            a.params.sb = g.yb();
            a.params.ua = g.Lb();
            a.params.vn = g.Pb();
            a.params.an = g.L();
            a.params.av = g.P();
            a.params.is = g.is();
            a.params.mo = g.B();
            a.params.st = g.Cb();
            a.params.ab = g.m();
            a.params.ce = g.$();
            a.params.cx = g.cx();
            a.params.ca = g.Z();
            a.params.ox = g.ib();
            a.params.fu = g.s();
            a.params.wp = g.Ub();
            a.params.np = g.eb();
            a.params.wd = g.l();
            a.params.wa = g.G();
            a.params.wv = g.H();
            a.params.ws = g.Wb();
            a.params.dr = g.qa();
            a.params.md = g.Ta();
            a.params.ph = g.kb();
            a.params.lx = g.Ra();
            a.params.pp = g.nb();
            a.params.mx = g.$a();
            a.params.mp = g.Wa();
            a.params.xx = g.Yb();
            a.params.pm = g.mb();
            a.params.ix = g.Ga();
            a.params.cw = g.ia();
            a.params.cr = g.ha();
            a.params.dt = g.ra();
            a.params.vp = g.Qb();
            a.params.vd = g.Nb();
            a.params.ap = g.M();
            a.params.au = g.O();
            a.params.me = g.Ua();
            a.params.ed = g.ta();
            a.params.wr = g.Vb();
            a.params.pt = g.pb();
            a.params.wc = g.Sb();
            a.params.af = g.K();
            a.params.bv = g.X();
            a.params.dd = g.na();
            a.params.no = g.cb();
            a.params.da = g.ja();
            a.params.hd = g.Ea();
            a.params.jd = g.Ia();
            a.params.jg = g.Ka();
            a.params.pc = g.i();
            a.params.dc = g.ka();
            a.params.rs = g.wb();
            a.params.pf = u.jb();
            a.params.cp = u.ga();
            a.params.hc = u.Da();
            a.params.dm = u.pa();
            a.params.ts = u.Ib();
            a.params.tr = u.Hb();
            a.params.tz = u.tz();
            a.params.iz = u.Ha();
            a.params.la = u.Ma();
            a.params.ls = u.Qa();
            a.params.re = u.rb();
            a.params.ar = u.N();
            a.params.cd = u.o();
            a.params.pd = u.D();
            a.params.xd = u.Xb();
            a.params.yd = u.Zb();
            a.params.dp = u.dp();
            a.params.es = u.xa();
            a.params.so = u.Ab();
            a.params.tp = u.Gb();
            a.params.te = u.Eb();
            a.params.tx = u.Kb();
            a.params.bx = u.Y();
            a.params.ba = u.T();
            a.params.bt = u.W();
            a.params.cn = u.aa();
            a.params.px = u.qb();
            a.params.ex = u.ya();
            a.params.gv = u.v();
            a.params.gr = u.u();
            a.params.fp = u.Aa();
            a.params.fx = u.fx();
            a.params.ma = u.Sa();
            a.params.vi = I.Ob();
            a.params.tv = I.Jb();
            a.params.mv = I.Za();
            a.params.fr = I.Ba();
            a.params.wn = I.Tb();
            a.params.lo = I.Oa();
            a.params.tl = I.Fb();
            a.params.pr = I.ob();
            a.params.rr = I.vb();
            a.params.rf = I.ub();
            a.params.nt = I.fb();
            a.params.sa = I.xb();
            a.params.bs = I.V();
            a.params.df = I.oa();
            a.params.vh = ta.F();
            a.params.vx = ta.Rb();
            a.params.dbg = Y.go(a.params.iw, a.params.ow);
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
                    for (var e = p, h = z[p], k = "", l = 0; 4 > l; l++)
                        k += D[h >> 8 * l + 4 & 15] + D[h >> 8 * l & 15];
                    z[e] = k
                }
                return z.join("")
            }
            function f(z) {
                var p = z.length, e = [1732584193, -271733879, -1732584194, 271733878], h;
                for (h = 64; h <= z.length; h += 64) {
                    var k, l = z.substring(h - 64, h), G = [];
                    for (k = 0; 64 > k; k += 4)
                        G[k >> 2] = l.charCodeAt(k) + (l.charCodeAt(k + 1) << 8) + (l.charCodeAt(k + 2) << 16) + (l.charCodeAt(k + 3) << 24);
                    E(e, G)
                }
                z = z.substring(h - 64);
                k = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (h = 0; h < z.length; h++)
                    k[h >> 2] |= z.charCodeAt(h) << (h % 4 << 3);
                k[h >> 2] |= 128 << (h % 4 << 3);
                if (55 < h)
                    for (E(e, k),
                    h = 0; 16 > h; h++)
                        k[h] = 0;
                k[14] = 8 * p;
                E(e, k);
                return e
            }
            function m(z, p, e, h, k, l, G) {
                return x(e ^ (p | ~h), z, p, k, l, G)
            }
            function q(z, p, e, h, k, l, G) {
                return x(p & h | e & ~h, z, p, k, l, G)
            }
            function r(z, p, e, h, k, l, G) {
                return x(p & e | ~p & h, z, p, k, l, G)
            }
            function x(z, p, e, h, k, l) {
                p = b(b(p, z), b(h, l));
                return b(p << k | p >>> 32 - k, e)
            }
            function E(z, p) {
                var e = z[0]
                  , h = z[1]
                  , k = z[2]
                  , l = z[3];
                e = r(e, h, k, l, p[0], 7, -680876936);
                l = r(l, e, h, k, p[1], 12, -389564586);
                k = r(k, l, e, h, p[2], 17, 606105819);
                h = r(h, k, l, e, p[3], 22, -1044525330);
                e = r(e, h, k, l, p[4], 7, -176418897);
                l = r(l, e, h, k, p[5], 12, 1200080426);
                k = r(k, l, e, h, p[6], 17, -1473231341);
                h = r(h, k, l, e, p[7], 22, -45705983);
                e = r(e, h, k, l, p[8], 7, 1770035416);
                l = r(l, e, h, k, p[9], 12, -1958414417);
                k = r(k, l, e, h, p[10], 17, -42063);
                h = r(h, k, l, e, p[11], 22, -1990404162);
                e = r(e, h, k, l, p[12], 7, 1804603682);
                l = r(l, e, h, k, p[13], 12, -40341101);
                k = r(k, l, e, h, p[14], 17, -1502002290);
                h = r(h, k, l, e, p[15], 22, 1236535329);
                e = q(e, h, k, l, p[1], 5, -165796510);
                l = q(l, e, h, k, p[6], 9, -1069501632);
                k = q(k, l, e, h, p[11], 14, 643717713);
                h = q(h, k, l, e, p[0], 20, -373897302);
                e = q(e, h, k, l, p[5], 5, -701558691);
                l = q(l, e, h, k, p[10], 9, 38016083);
                k = q(k, l, e, h, p[15], 14, -660478335);
                h = q(h, k, l, e, p[4], 20, -405537848);
                e = q(e, h, k, l, p[9], 5, 568446438);
                l = q(l, e, h, k, p[14], 9, -1019803690);
                k = q(k, l, e, h, p[3], 14, -187363961);
                h = q(h, k, l, e, p[8], 20, 1163531501);
                e = q(e, h, k, l, p[13], 5, -1444681467);
                l = q(l, e, h, k, p[2], 9, -51403784);
                k = q(k, l, e, h, p[7], 14, 1735328473);
                h = q(h, k, l, e, p[12], 20, -1926607734);
                e = x(h ^ k ^ l, e, h, p[5], 4, -378558);
                l = x(e ^ h ^ k, l, e, p[8], 11, -2022574463);
                k = x(l ^ e ^ h, k, l, p[11], 16, 1839030562);
                h = x(k ^ l ^ e, h, k, p[14], 23, -35309556);
                e = x(h ^ k ^ l, e, h, p[1], 4, -1530992060);
                l = x(e ^ h ^ k, l, e, p[4], 11, 1272893353);
                k = x(l ^ e ^ h, k, l, p[7], 16, -155497632);
                h = x(k ^ l ^ e, h, k, p[10], 23, -1094730640);
                e = x(h ^ k ^ l, e, h, p[13], 4, 681279174);
                l = x(e ^ h ^ k, l, e, p[0], 11, -358537222);
                k = x(l ^ e ^ h, k, l, p[3], 16, -722521979);
                h = x(k ^ l ^ e, h, k, p[6], 23, 76029189);
                e = x(h ^ k ^ l, e, h, p[9], 4, -640364487);
                l = x(e ^ h ^ k, l, e, p[12], 11, -421815835);
                k = x(l ^ e ^ h, k, l, p[15], 16, 530742520);
                h = x(k ^ l ^ e, h, k, p[2], 23, -995338651);
                e = m(e, h, k, l, p[0], 6, -198630844);
                l = m(l, e, h, k, p[7], 10, 1126891415);
                k = m(k, l, e, h, p[14], 15, -1416354905);
                h = m(h, k, l, e, p[5], 21, -57434055);
                e = m(e, h, k, l, p[12], 6, 1700485571);
                l = m(l, e, h, k, p[3], 10, -1894986606);
                k = m(k, l, e, h, p[10], 15, -1051523);
                h = m(h, k, l, e, p[1], 21, -2054922799);
                e = m(e, h, k, l, p[8], 6, 1873313359);
                l = m(l, e, h, k, p[15], 10, -30611744);
                k = m(k, l, e, h, p[6], 15, -1560198380);
                h = m(h, k, l, e, p[13], 21, 1309151649);
                e = m(e, h, k, l, p[4], 6, -145523070);
                l = m(l, e, h, k, p[11], 10, -1120210379);
                k = m(k, l, e, h, p[2], 15, 718787259);
                h = m(h, k, l, e, p[9], 21, -343485551);
                z[0] = b(e, z[0]);
                z[1] = b(h, z[1]);
                z[2] = b(k, z[2]);
                z[3] = b(l, z[3])
            }
            var D = "0123456789abcdef".split("");
            "5d41402abc4b2a76b9719d911017c592" != c(f("hello")) && (b = function(z, p) {
                var e = (z & 65535) + (p & 65535);
                return (z >> 16) + (p >> 16) + (e >> 16) << 16 | e & 65535
            }
            );
            return c(f(a))
        }
        function B(a) {
            try {
                var b = Object.create(null)
            } catch (m) {
                b = {};
                for (var c in b)
                    "function" !== typeof b.hasOwnProperty || b.hasOwnProperty(c) || delete b[c]
            }
            for (var f in a)
                Array.isArray(a[f]) ? a[f] = Qa(a[f]) : "object" === typeof a[f] && (a[f] = B(a[f])),
                "function" === typeof a.hasOwnProperty && a.hasOwnProperty(f) && (b[f] = a[f]);
            return b
        }
        function Qa(a) {
            var b = [];
            for (c in a) {
                Array.isArray(a[c]) ? a[c] = Qa(a[c]) : "object" === typeof a[c] && (a[c] = B(a[c]));
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
        function y(a) {
            var b = RegExp
              , c = a.name && 1 < a.name.length && "Function.prototype" !== a.name ? a.name : Ra(a);
            return (new b("^function " + (1 < c.split(" ").length ? "(?:get |set )?" + c.split(" ")[1] : c) + "\\(\\)\\s*\\{\\s*\\[native code\\]\\s*\\}$")).test(Function.prototype.toString.call(a).trim())
        }
        function Ha(a) {
            return /^function (?:toDataURL|getParameter|getExtension)?\(\) \{\s+sendMessage\(\{ obj: `\$\{hook\.obj\}`, method: method \}\);\s+\}$/.test(Function.prototype.toString.call(a).trim())
        }
        function Sa(a) {
            return /^function\s*\(\){if\(arguments\.length===1\){const [a-z]=arguments\[[0-9]\];const{[a-z]:[a-z],[a-z]:[a-z]}=[a-z]\([a-z]\);if\([a-z]\.length==1\){[a-z]\([a-z]\);return true}}return [a-z]\.apply\(this,arguments\)}$/i.test(Function.prototype.toString.call(a).trim())
        }
        function Ta(a, b) {
            var c = B(null);
            for (f in b) {
                var f = parseInt(f, 10);
                var m = Object.getOwnPropertyDescriptor(a, b[f]);
                m && (m.get && !y(m.get) && (c[b[f]] || (c[b[f]] = []),
                c[b[f]].push(0)),
                m.set && !y(m.set) && (c[b[f]] || (c[b[f]] = []),
                c[b[f]].push(1)))
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
                return t("lsa", v(a)),
                !1
            }
        }
        function La(a, b) {
            try {
                if (oa())
                    return d.localStorage.setItem(a, JSON.stringify(b))
            } catch (c) {
                return t("sls", v(c)),
                !1
            }
        }
        function Ma(a) {
            try {
                if (oa())
                    return d.localStorage.getItem(a)
            } catch (b) {
                return t("gls", v(b)),
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
        function v(a) {
            var b = B(null);
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
                return t("bsp", v(a)),
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
                    return f[q] || "\\u" + (q.charCodeAt(0) + 65536).toString(16).substr(1)
                }
                var b = Object.prototype.toString
                  , c = Array.isArray || function(q) {
                    return "[object Array]" === b.call(q)
                }
                  , f = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t"
                }
                  , m = /[\\"\u0000-\u001F\u2028\u2029]/g;
                return function x(r) {
                    if (null == r)
                        return "null";
                    if ("number" === typeof r)
                        return isFinite(r) ? r.toString() : "null";
                    if ("boolean" === typeof r)
                        return r.toString();
                    if ("object" === typeof r) {
                        if ("function" === typeof r.toJSON)
                            return x(r.toJSON());
                        if (c(r)) {
                            for (var E = "[", D = 0; D < r.length; D++)
                                E += (D ? ", " : "") + x(r[D]);
                            return E + "]"
                        }
                        if ("[object Object]" === b.call(r)) {
                            E = [];
                            for (D in r)
                                r.hasOwnProperty(D) && E.push(x(D) + ": " + x(r[D]));
                            return "{" + E.join(", ") + "}"
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
                for (a = sa.J(a); c < a.length; ) {
                    var f = a.charCodeAt(c++);
                    var m = a.charCodeAt(c++);
                    var q = a.charCodeAt(c++);
                    var r = f >> 2;
                    f = (f & 3) << 4 | m >> 4;
                    var x = (m & 15) << 2 | q >> 6;
                    var E = q & 63;
                    isNaN(m) ? x = E = 64 : isNaN(q) && (E = 64);
                    b = b + this.h.charAt(r) + this.h.charAt(f) + this.h.charAt(x) + this.h.charAt(E)
                }
                return b
            },
            decode: function(a) {
                var b = ""
                  , c = 0;
                for (a = a.replace(/[^A-Za-z0-9+/=]/g, ""); c < a.length; ) {
                    var f = this.h.indexOf(a.charAt(c++));
                    var m = this.h.indexOf(a.charAt(c++));
                    var q = this.h.indexOf(a.charAt(c++));
                    var r = this.h.indexOf(a.charAt(c++));
                    f = f << 2 | m >> 4;
                    m = (m & 15) << 4 | q >> 2;
                    var x = (q & 3) << 6 | r;
                    b += String.fromCharCode(f);
                    64 != q && (b += String.fromCharCode(m));
                    64 != r && (b += String.fromCharCode(x))
                }
                return b = sa.I(b)
            },
            J: function(a) {
                a = a.replace(/\r\n/g, "n");
                for (var b = "", c = 0; c < a.length; c++) {
                    var f = a.charCodeAt(c);
                    128 > f ? b += String.fromCharCode(f) : (127 < f && 2048 > f ? b += String.fromCharCode(f >> 6 | 192) : (b += String.fromCharCode(f >> 12 | 224),
                    b += String.fromCharCode(f >> 6 & 63 | 128)),
                    b += String.fromCharCode(f & 63 | 128))
                }
                return b
            },
            I: function(a) {
                for (var b = "", c = 0, f, m, q; c < a.length; )
                    f = a.charCodeAt(c),
                    128 > f ? (b += String.fromCharCode(f),
                    c++) : 191 < f && 224 > f ? (m = a.charCodeAt(c + 1),
                    b += String.fromCharCode((f & 31) << 6 | m & 63),
                    c += 2) : (m = a.charCodeAt(c + 1),
                    q = a.charCodeAt(c + 2),
                    b += String.fromCharCode((f & 15) << 12 | (m & 63) << 6 | q & 63),
                    c += 3);
                return b
            }
        }
          , A = "object" === typeof RT ? B(RT.getVars()) : B(null)
          , ca = "number" === typeof A.wait ? A.wait : 750
          , P = new Date
          , fa = B(null)
          , ra = !1
          , Na = !1
          , F = B({
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
          , J = !1
          , K = !1
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
          , Va = B(null)
          , C = B(null)
          , Aa = !1
          , Ia = !1
          , H = B(null)
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
                            return "string" === typeof b && b.length && "function" === typeof a[b] && "string" === typeof a[b].name && b === a[b].name && y(a[b])
                        } catch (c) {}
                    }).sort()
                }
            } catch (b) {
                t("bpn", v(b))
            }
        }() || []
          , Ya = "architecture bitness brands formFactors fullVersionList mobile model platform platformVersion uaFullVersion wow64".split(" ");
        try {
            "object" === typeof n.userAgentData && "function" === typeof n.userAgentData.getHighEntropyValues ? n.userAgentData.getHighEntropyValues(Ya).then(function(a) {
                ha = B(a);
                try {
                    Object.freeze(ha)
                } catch (b) {}
            }) : ha = "?"
        } catch (a) {
            t("uadhe", v(a)),
            ha = "X"
        }
        var wa = "asdjflasutopfhvcZLmcfl asyncScriptInfo asyncExecutor awesomium BROWSERTOOLS cefQuery chromedp chromeDriver commandLine domAutomation driver(-|_)evaluate ELEM(-|_)CACHE ^emit$ evaluate(-|_)response executor Firebug ^fmget fSCInitialize fxdriver htmlunit IDE(-|_)Recorder juggler lastWatir nightmare marionette phantom playwright puppeteer ^rod$ script(-|_)fn script(-|_)func scriptInfo selenium ^spawn$ Sys\\$Net unwrapped WEB(-|_)VIEW webContents webdriver wptagent wrappedJSObject xwalk".split(" ")
          , xa = "arp-injected driver kantu nightmare phantom playwright puppeteer scriptallow selenium slick-uniqueid".split(" ")
          , M = function() {
            try {
                var a = w.createElement("canvas");
                if (a && a.getContext) {
                    var b = B(null);
                    b.antialias = !1;
                    b.depth = !1;
                    b.failIfMajorPerformanceCaveat = !1;
                    b.stencil = !1;
                    return a.getContext("webgl2", b) || a.getContext("webgl", b) || a.getContext("experimental-webgl", b)
                }
            } catch (c) {
                return t("glc", v(c)),
                null
            }
        }()
          , ya = 'video/3gpp; codecs="mp4v.20.8, samr"{video/mp4; codecs="avc1.42E01E"{video/mp4; codecs="avc1.58A01E"{video/mp4; codecs="avc1.4D401E"{video/mp4; codecs="avc1.64001E"{video/mp4; codecs="avc1.42E01E, mp4a.40.2"{video/mp4; codecs="avc1.58A01E, mp4a.40.2"{video/mp4; codecs="avc1.4D401E, mp4a.40.2"{video/mp4; codecs="avc1.64001E, mp4a.40.2"{video/mp4; codecs="flac"{video/mp4; codecs="H.264, mp3"{video/mp4; codecs="H.264, aac"{video/mp4; codecs="mp4v.20.8, mp4a.40.2"{video/mp4; codecs="mp4v.20.240, mp4a.40.2"{video/mpeg; codec="H.264"{video/ogg; codecs="dirac, vorbis"{video/ogg; codecs="opus"{video/ogg; codecs="theora"{video/ogg; codecs="theora, vorbis"{video/ogg; codecs="theora, speex"{video/webm; codecs="vp9, opus"{video/webm; codecs="vp8, vorbis"{video/x-matroska; codecs="theora, vorbis"'.split("{")
          , za = 'audio/3gpp,audio/3gpp2,audio/AMR-NB,audio/AMR-WB,audio/GSM,audio/aac,audio/basic,audio/flac,audio/midi,audio/mpeg,audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mpeg; codecs="mp3",audio/ogg; codecs="flac",audio/ogg; codecs="vorbis",audio/ogg; codecs="opus",audio/ogg; codecs="speex",audio/wav; codecs="1",audio/webm; codecs="vorbis",audio/webm; codecs="opus",audio/x-m4a,audio/x-aiff,audio/x-mpegurl'.split(",")
          , g = B(null);
        g.ea = function() {
            return isNaN(d.screenLeft) || isNaN(d.screenTop) ? isNaN(d.screenX) || isNaN(d.screenY) ? "?" : d.screenX + "," + d.screenY : d.screenLeft + "," + d.screenTop
        }
        ;
        g.A = function() {
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
        g.C = function() {
            return isNaN(d.outerWidth) || isNaN(d.outerHeight) ? "?" : d.outerWidth + "," + d.outerHeight
        }
        ;
        g.R = function() {
            return isNaN(d.screen.availLeft) || isNaN(d.screen.availTop) ? "?" : d.screen.availLeft + "," + d.screen.availTop
        }
        ;
        g.Fa = function() {
            return "object" !== typeof d.history || isNaN(d.history.length) ? "?" : d.history.length
        }
        ;
        g.lb = function() {
            return "object" !== typeof n.plugins || isNaN(n.plugins.length) ? "?" : n.plugins.length
        }
        ;
        g.Ya = function() {
            return "object" !== typeof n.mimeTypes || isNaN(n.mimeTypes.length) ? "?" : n.mimeTypes.length
        }
        ;
        g.La = function() {
            return "function" === typeof n.javaEnabled ? y(n.javaEnabled) ? 0 : 1 : "?"
        }
        ;
        g.Ja = function() {
            return "function" === typeof n.javaEnabled ? n.javaEnabled() ? 1 : 0 : "?"
        }
        ;
        g.S = function() {
            return "function" === typeof d.ActiveXObject ? 1 : 0
        }
        ;
        g.Ca = function() {
            return "object" === typeof GeckoActiveXObject ? 1 : 0
        }
        ;
        g.Mb = function() {
            return "object" === typeof w.body.style ? (w.body.style.behavior = "url(#default#userData)",
            w.body.addBehavior ? 1 : 0) : "?"
        }
        ;
        g.bb = function() {
            return n.mozId ? 1 : 0
        }
        ;
        g.hb = function() {
            return d.opera ? 1 : 0
        }
        ;
        g.Pa = function() {
            try {
                return R || "object" !== typeof d.localStorage || null === d.localStorage || "function" !== typeof d.localStorage.getItem || "function" !== typeof d.localStorage.setItem ? "?" : !y(d.localStorage.getItem) && !/^function \([a-z]\){return null}$/.test(Function.prototype.toString.call(d.localStorage.getItem).trim()) || !y(d.localStorage.setItem) && !/^function \([a-z],[a-z]\){}$/.test(Function.prototype.toString.call(d.localStorage.setItem).trim()) ? 1 : 0
            } catch (a) {
                return t("lr", v(a)),
                "X"
            }
        }
        ;
        g.Na = function() {
            try {
                return R ? "?" : "object" === typeof d.localStorage && null !== d.localStorage ? 1 : 0
            } catch (a) {
                return t("ld", v(a)),
                "X"
            }
        }
        ;
        g.Bb = function() {
            try {
                return R || "object" !== typeof d.sessionStorage || null === d.sessionStorage || "function" !== typeof d.sessionStorage.getItem || "function" !== typeof d.sessionStorage.setItem ? "?" : y(d.sessionStorage.getItem) && y(d.sessionStorage.setItem) ? 0 : 1
            } catch (a) {
                return t("sr", v(a)),
                "X"
            }
        }
        ;
        g.zb = function() {
            try {
                return R ? "?" : "object" === typeof d.sessionStorage && null !== d.sessionStorage ? 1 : 0
            } catch (a) {
                return t("sd", v(a)),
                "X"
            }
        }
        ;
        g.id = function() {
            return d.indexedDB ? 1 : 0
        }
        ;
        g.gb = function() {
            return d.openDatabase ? 1 : 0
        }
        ;
        g.U = function() {
            return w.body.addBehavior ? 1 : 0
        }
        ;
        g.Xa = function() {
            return "function" === typeof n.requestMediaKeySystemAccess ? y(n.requestMediaKeySystemAccess) ? 0 : 1 : "?"
        }
        ;
        g.Va = function() {
            return "function" === typeof n.requestMediaKeySystemAccess ? 1 : 0
        }
        ;
        g.Db = function() {
            return "function" === typeof n.sendBeacon ? y(n.sendBeacon) || Sa(n.sendBeacon) ? 0 : 1 : "?"
        }
        ;
        g.yb = function() {
            return "function" === typeof n.sendBeacon ? 1 : 0
        }
        ;
        g.Lb = function() {
            return "string" === typeof n.userAgent ? n.userAgent : "?"
        }
        ;
        g.Pb = function() {
            return "string" === typeof n.vendor ? n.vendor : "?"
        }
        ;
        g.L = function() {
            return "string" === typeof n.appName ? n.appName : "?"
        }
        ;
        g.P = function() {
            return "string" === typeof n.appVersion ? n.appVersion : "?"
        }
        ;
        g.is = function() {
            try {
                var a = [];
                if ("object" === typeof n.plugins && !isNaN(n.plugins.length) && 0 < n.plugins.length)
                    for (var b = n.plugins, c = n.mimeTypes, f = 0; f < b.length; f++) {
                        if (a.push("P" + (f + 1)),
                        "undefined" !== typeof b[f].name && b[f].name && a.push(b[f].name + ";"),
                        "undefined" !== typeof b[f].description && b[f].description && a.push(b[f].description + ";"),
                        "undefined" !== typeof b[f].filename && b[f].filename && (a.push(b[f].filename + ":"),
                        "undefined" !== typeof c && !isNaN(c.length) && 0 < c.length))
                            for (var m = 0; m < c.length; m++)
                                if ("object" === typeof c[m].enabledPlugin)
                                    for (var q in c[m].enabledPlugin)
                                        "filename" == q && "undefined" !== typeof c[m].enabledPlugin[q] && c[m].enabledPlugin[q] == b[f].filename && ("undefined" !== typeof c[m].description && c[m].description && a.push(c[m].description + ";"),
                                        "undefined" !== typeof c[m].type && c[m].type && a.push(c[m].type + ";"),
                                        "undefined" !== typeof c[m].suffixes && c[m].suffixes && a.push(c[m].suffixes + ";"))
                    }
                else if ("object" === typeof w.body.style && (m = w.body,
                m.style.behavior = "url(#default#clientCaps)",
                "undefined" !== typeof m.isComponentInstalled))
                    for (q in f = 1,
                    b = [["AOL ART Image Format Support", "47F67D00-9E55-11D1-BAEF-00C04FC2D130"], ["Address Book", "7790769C-0471-11D2-AF11-00C04FA35D02"], ["Arabic Text Display Support", "76C19B38-F0C8-11CF-87CC-0020AFEECF20"], ["Chinese (Simplified) Text Display Support", "76C19B34-F0C8-11CF-87CC-0020AFEECF20"], ["Chinese (Traditional) Text Display Support", "76C19B33-F0C8-11CF-87CC-0020AFEECF20"], ["DirectAnimation Java Classes", "4F216970-C90C-11D1-B5C7-0000F8051515"], ["DirectAnimation", "283807B5-2C60-11D0-A31D-00AA00B92C03"], ["DirectShow", "44BBA848-CC51-11CF-AAFA-00AA00B6015C"], ["Dynamic HTML Data Binding for Java", "4F216970-C90C-11D1-B5C7-0000F8051515"], ["Dynamic HTML Data Binding", "9381D8F2-0288-11D0-9501-00AA00B911A5"], ["Hebrew Text Display Support", "76C19B36-F0C8-11CF-87CC-0020AFEECF20"], ["Internet Connection Wizard", "5A8D6EE0-3E18-11D0-821E-444553540000"], ["Internet Explorer Browsing Enhancements", "630B1DA0-B465-11D1-9948-00C04F98BBC9"], ["Internet Explorer Classes for Java", "08B0E5C0-4FCB-11CF-AAA5-00401C608555"], ["Internet Explorer Help Engine", "DE5AED00-A4BF-11D1-9948-00C04F98BBC9"], ["Internet Explorer Help", "45EA75A0-A269-11D1-B5BF-0000F8051515"], ["Internet Explorer Web Browser", "89820200-ECBD-11CF-8B85-00AA005B4383"], ["Japanese Text Display Support", "76C19B30-F0C8-11CF-87CC-0020AFEECF20"], ["Korean Text Display Support", "76C19B31-F0C8-11CF-87CC-0020AFEECF20"], ["Language Auto-Selection", "76C19B50-F0C8-11CF-87CC-0020AFEECF20"], ["Macromedia Flash", "D27CDB6E-AE6D-11CF-96B8-444553540000"], ["Macromedia Shockwave Director", "2A202491-F00D-11CF-87CC-0020AFEECF20"], ["Microsoft Virtual Machine", "08B0E5C0-4FCB-11CF-AAA5-00401C608500"], ["NetMeeting NT", "44BBA842-CC51-11CF-AAFA-00AA00B6015B"], ["Offline Browsing Pack", "3AF36230-A269-11D1-B5BF-0000F8051515"], ["Outlook Express", "44BBA840-CC51-11CF-AAFA-00AA00B6015C"], ["Pan-European Text Display Support", "76C19B32-F0C8-11CF-87CC-0020AFEECF20"], ["Task Scheduler", "CC2A9BA0-3BDD-11D0-821E-444553540000"], ["Thai Text Display Support", "76C19B35-F0C8-11CF-87CC-0020AFEECF20"], ["Uniscribe", "3BF42070-B3B1-11D1-B5C5-0000F8051515"], ["VRML 2.0 Viewer", "90A7533D-88FE-11D0-9DBE-0000C0411FC3"], ["Vector Graphics Rendering (VML)", "10072CEC-8CC1-11D1-986E-00A0C955B42F"], ["Vietnamese Text Display Support", "76C19B37-F0C8-11CF-87CC-0020AFEECF20"], ["Visual Basic Scripting Support", "4F645220-306D-11D2-995D-00C04F98BBC9"], ["Wallet", "1CDEE860-E95B-11CF-B1B0-00AA00BBAD66"], ["Web Folders", "73FA19D0-2D75-11D2-995D-00C04F98BBC9"], ["Windows Desktop Update NT", "89820200-ECBD-11CF-8B85-00AA005B4340"], ["Windows Media Player RealNetwork Support", "23064720-C4F8-11D1-994D-00C04F98BBC9"], ["Windows Media Player", "22D6F312-B0F6-11D0-94AB-0080C74C7E95"]],
                    b)
                        try {
                            if (q = parseInt(q, 10),
                            m.isComponentInstalled("{" + b[q][1] + "}", "ComponentID")) {
                                var r = m.getComponentVersion("{" + b[q][1] + "}", "ComponentID");
                                r && (a.push("C" + f + " " + b[q][0] + ": " + r + ";"),
                                f++)
                            }
                        } catch (x) {}
                return 0 < a.length ? a.join(" ") : "?"
            } catch (x) {
                return t("is", v(x)),
                "X"
            }
        }
        ;
        g.B = function() {
            return "number" === typeof orientation && "ontouchstart"in w.documentElement || n.mozId || "string" === typeof n.cpuClass && "ARM" == n.cpuClass ? 1 : 0
        }
        ;
        g.Cb = function() {
            try {
                var a = n.userAgent
                  , b = -1 < a.indexOf("MSIE")
                  , c = -1 < a.indexOf("Trident")
                  , f = -1 < a.indexOf("Edge")
                  , m = -1 < a.indexOf("Firefox")
                  , q = -1 < a.indexOf("Presto")
                  , r = -1 < a.indexOf("OPR")
                  , x = -1 < a.indexOf("Puffin")
                  , E = -1 < a.indexOf("Chrome")
                  , D = -1 < a.indexOf("Silk")
                  , z = -1 < a.indexOf("Safari") || -1 < a.indexOf("; CPU iPhone OS") || -1 < a.indexOf("; CPU OS") || -1 < a.indexOf("; Intel Mac OS")
                  , p = -1 < a.indexOf("Android")
                  , e = a.match(/Tizen (?:[3-9]|[1-9]\d\d*)/gi);
                if (b || c || f || m || q || r || x || E || D || z || p || e) {
                    try {
                        var h = eval("/*@cc_on!@*/false") || !!w.documentMode
                    } catch (Za) {}
                    var k = !w.documentMode && d.StyleMedia
                      , l = "object" === typeof InstallTrigger || !!n.mozId
                      , G = !!d.opera
                      , O = !!d.puffinDevice
                      , $a = !!d.chrome && !O && !G
                      , ab = !!d.safari || 0 < Object.prototype.toString.call(d.HTMLElement).indexOf("Constructor") || "function" === typeof d.WebKitPlaybackTargetAvailabilityEvent && y(d.WebKitPlaybackTargetAvailabilityEvent) || "function" === typeof d.ApplePayError && y(d.ApplePayError)
                      , mb = "object" === typeof d.clientInformation && "object" === typeof d.clientInformation.battery && "function" === typeof d.clientInformation.battery.addEventListener && y(d.clientInformation.battery.addEventListener)
                      , nb = g.B();
                    (r || D || p || x || e) && E && (E = !1);
                    (r || D || p || x || E || e) && z && (z = !1);
                    return (r || D || p) && nb ? 0 : (b || c) && h || f && k || m && l || q && G || r && $a || x && O || E && $a || D && ab || z && ab || e && mb ? 0 : 1
                }
                return "?"
            } catch (Za) {
                return t("st", v(Za)),
                "X"
            }
        }
        ;
        g.m = function() {
            try {
                if ("number" === typeof A.adblocker && 1 === A.adblocker) {
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
                                var f = d.getComputedStyle(a, null);
                                "object" !== typeof f || "none" !== f.getPropertyValue("display") && "hidden" !== f.getPropertyValue("visibility") || (U = !0)
                            }
                            a.parentNode.removeChild(a);
                            Wa = !0
                        }
                    }
                    return U ? 1 : 0
                }
                return "?"
            } catch (m) {
                return t("ab", v(m)),
                "X"
            }
        }
        ;
        g.$ = function() {
            return "function" === typeof w.createElement ? y(w.createElement) || /^function\s*\([a-z]{1},[a-z]{1}\)\s*\{[a-z]{1}=[a-z]{1}\.call\(document,[a-z]{1},[a-z]{1}\);"[a-z]{1}"===[a-z]{1}\.toLowerCase\(\)&&\s*[a-z]{1}\([a-z]{1}\);return [a-z]{1}}$/.test(Function.prototype.toString.call(w.createElement).trim()) ? 0 : 1 : "?"
        }
        ;
        g.cx = function() {
            try {
                var a = w.createElement("canvas");
                if (a) {
                    var b = [];
                    a.getContext && !y(a.getContext) && b.push("getContext");
                    !a.toDataURL || y(a.toDataURL) || Ha(a.toDataURL) || b.push("toDataURL");
                    if (a.getContext) {
                        var c = a.getContext("2d", {
                            alpha: !0
                        });
                        c && (c.beginPath && !y(c.beginPath) && b.push("beginPath"),
                        c.rect && !y(c.rect) && b.push("rect"),
                        c.fill && !y(c.fill) && b.push("fill"),
                        c.stroke && !y(c.stroke) && b.push("stroke"),
                        c.closePath && !y(c.closePath) && b.push("closePath"),
                        c.rotate && !y(c.rotate) && b.push("rotate"),
                        c.fillRect && !y(c.fillRect) && b.push("fillRect"),
                        c.fillText && !y(c.fillText) && b.push("fillText"),
                        c.arc && !y(c.arc) && b.push("arc"),
                        c.moveTo && !y(c.moveTo) && b.push("moveTo"),
                        c.lineTo && !y(c.lineTo) && b.push("lineTo"))
                    }
                    String.fromCharCode && !y(String.fromCharCode) && b.push("fromCharCode");
                    (new String).charCodeAt && !y((new String).charCodeAt) && b.push("charCodeAt");
                    return b
                }
                return "?"
            } catch (f) {
                return t("cx", v(f)),
                "X"
            }
        }
        ;
        g.Z = function() {
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
                        var f = new String;
                        if (String.fromCharCode && "Sympathizing would fix Quaker objectives".charCodeAt)
                            for (c = 0; 40 > c; c++)
                                f += String.fromCharCode("Sympathizing would fix Quaker objectives".charCodeAt(c) + 888);
                        b.font = "serif";
                        b.fillStyle = "green";
                        b.fillText(f, 136, 21);
                        b.fillStyle = "tomato";
                        b.fillText(f, 138, 23);
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
                        b.fillText(g.l(), 137.5, 105);
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
                        b.fillText("{CD" + u.o() + ":PD" + u.D() + "}", 73, 63);
                        b.font = "xx-small monospace";
                        b.shadowBlur = 0;
                        b.fillStyle = "black";
                        b.fillText(u.v(), 137.5, 38);
                        b.font = "xx-small monospace";
                        b.shadowBlur = 0;
                        b.fillStyle = "black";
                        b.fillText(u.u(), 137.5, 117);
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
                        f = [[126, 64], [176, 57], [193, 14], [209, 57], [259, 64], [226, 90], [233, 134], [193, 107], [153, 134], [159, 90], [126, 64]];
                        b.beginPath();
                        b.fillStyle = "rgba(128,216,255,0.5)";
                        b.strokeStyle = "#80d8ff";
                        b.lineWidth = 2;
                        b.moveTo(f[0][0], f[0][1]);
                        for (c = 0; c < f.length; c++)
                            b.lineTo(f[c][0], f[c][1]);
                        b.fill();
                        b.stroke();
                        b.closePath();
                        return S(a.toDataURL())
                    }
                }
                return "?"
            } catch (m) {
                return t("ca", v(m)),
                "X"
            }
        }
        ;
        g.ib = function() {
            try {
                var a = B(null);
                a.pn = "function" === typeof Object.getOwnPropertyNames ? y(Object.getOwnPropertyNames) || /^function\s*[a-zA-Z]?\([a-z]{1}\)\s*\{(?:\s*"use strict";)?\s*(?:return [a-zA-Z]{1}\([a-z]{1}\)\.filter\([a-zA-Z]\)(?:;)?\s*\}|for\(var [a-z]{1},[a-z]{1}=[a-z]{1}\([a-z]{1}\([a-z]{1}\)\),[a-z]{1}=\[\],[a-z]{1}=0;[a-z]{1}\.length>[a-z]{1};\)[a-z]{1}\([a-zA-Z]{1},[a-z]{1}=[a-z]{1}\[[a-z]{1}\+\+\]\)\|\|[a-z]{1}==[a-z]{1}\|\|[a-z]{1}==[a-z]{1}\|\|[a-z]{1}\.push\([a-z]{1}\);return [a-z]{1}\})?$/.test(Function.prototype.toString.call(Object.getOwnPropertyNames).trim()) ? 0 : 1 : "?";
                a.po = "function" === typeof Object.getPrototypeOf ? y(Object.getPrototypeOf) || /^function\s*\([a-z]{1}\)\{return [a-z]{1,2}\([a-zA-Z]{1,2}\([a-z]{1}\)\)\}$/.test(Function.prototype.toString.call(Object.getPrototypeOf).trim()) ? 0 : 1 : "?";
                a.pd = "function" === typeof Object.getOwnPropertyDescriptor ? y(Object.getOwnPropertyDescriptor) || /(?:^function\s*\([a-z]{1},[a-z]{1}\)\{return [a-zA-Z]{1,2}\([a-zA-Z]{1,2}\([a-z]{1}\),[a-z]{1}\)\}|\([a-z]{1}\.(?:configurable|enumerable){1}\s*=\s*(?:![0-1]|[a-zA-Z]{1}\.call\([a-z]{1},\s*[a-z]{1}\))\),\s*[a-z]{1}(?:;)?\s*\}(?:\})?|\{configurable:!0,writable:!0,enumerable:!0,value:e\[t\]\}\})$/.test(Function.prototype.toString.call(Object.getOwnPropertyDescriptor).trim()) ? 0 : 1 : "?";
                try {
                    Object.freeze(a)
                } catch (b) {}
                return a
            } catch (b) {
                return t("ox", v(b)),
                "X"
            }
        }
        ;
        g.s = function() {
            return "object" === typeof ka && ka.length ? S(ka.join(",")) : "?"
        }
        ;
        g.Ub = function() {
            try {
                return Object.getOwnPropertyDescriptor ? Ta(d, Xa) : "?"
            } catch (a) {
                return t("wp", v(a)),
                "X"
            }
        }
        ;
        g.eb = function() {
            try {
                if (Object.getOwnPropertyDescriptor) {
                    var a = [];
                    for (b in va) {
                        var b = parseInt(b, 10);
                        va[b] && a.push(va[b])
                    }
                    if (Object.getOwnPropertyNames && Object.getPrototypeOf) {
                        var c = Object.getOwnPropertyNames(Object.getPrototypeOf(n));
                        for (f in c) {
                            var f = parseInt(f, 10);
                            c[f] && 0 > a.indexOf(c[f]) && a.push(c[f])
                        }
                    }
                    return Ta(n, a)
                }
                return "?"
            } catch (m) {
                return t("np", v(m)),
                "X"
            }
        }
        ;
        g.l = function() {
            return "boolean" === typeof d.navigator.webdriver ? d.navigator.webdriver ? 1 : 0 : "?"
        }
        ;
        g.G = function() {
            try {
                if ("object" === typeof d.document && "object" === typeof d.document.documentElement && "function" === typeof d.document.documentElement.getAttributeNames) {
                    var a = []
                      , b = d.document.documentElement.getAttributeNames();
                    for (c in b) {
                        var c = parseInt(c, 10);
                        if (b[c])
                            for (var f in xa)
                                f = parseInt(f, 10),
                                xa[f] && (new RegExp(xa[f],"i")).test(b[c]) && a.push(b[c])
                    }
                    return a.length ? a : 0
                }
                return "?"
            } catch (m) {
                return t("wa", v(m)),
                "X"
            }
        }
        ;
        g.H = function() {
            try {
                var a = [];
                if (Ea())
                    for (var b in wa)
                        if (b = parseInt(b, 10),
                        wa[b]) {
                            var c = new RegExp(wa[b],"i");
                            if ("object" === typeof d) {
                                var f = Object.keys(d), m;
                                for (m in f)
                                    !/^__zone_symbol__/.test(f[m]) && c.test(f[m]) && a.push("w." + f[m])
                            }
                            if ("object" === typeof w) {
                                var q = Object.keys(w), r;
                                for (r in q)
                                    !/^__zone_symbol__/.test(q[r]) && c.test(q[r]) && a.push("d." + q[r])
                            }
                            if ("object" === typeof n) {
                                var x = Object.keys(n), E;
                                for (E in x)
                                    c.test(x[E]) && a.push("n." + x[E])
                            }
                        }
                for (b in d.document)
                    if ((!R || R && "cookie" !== b) && "object" === typeof d.document[b])
                        try {
                            d.document[b].cache_ && a.push("c." + (b ? b : "__"))
                        } catch (D) {}
                "object" === typeof d.external && "function" === typeof d.external.toString && "function" === typeof d.external.toString().toLowerCase && "function" === typeof d.external.toString().toLowerCase().indexOf && -1 < d.external.toString().toLowerCase().indexOf("sequentum") && a.push(["s.sequentum"]);
                "function" === typeof d.close && "function" === typeof d.close.toString && "function" === typeof d.close.toString().toLowerCase && "function" === typeof d.close.toString().toLowerCase().indexOf && -1 < d.close.toString().toLowerCase().indexOf("electron") && a.push("e.electron");
                "object" === typeof d.opera && ("boolean" === typeof d.opera.browserjsran && d.opera.browserjsran && a.push("o.browserjsran"),
                "boolean" === typeof d.opera._browserjsran && d.opera._browserjsran && a.push("o._browserjsran"));
                return a.length ? a : 0
            } catch (D) {
                return t("wv", v(D)),
                "X"
            }
        }
        ;
        g.Wb = function() {
            return ea ? ea : 0
        }
        ;
        g.qa = function() {
            return "function" === typeof d.showModalDialog ? y(d.showModalDialog) ? 0 : 1 : "?"
        }
        ;
        g.Ta = function() {
            return "function" === typeof d.showModalDialog ? 1 : 0
        }
        ;
        g.kb = function() {
            return "function" === typeof d.callPhantom || d._phantom ? 1 : 0
        }
        ;
        g.Ra = function() {
            try {
                return "function" === typeof PluginArray ? y(PluginArray) ? 0 : 1 : "?"
            } catch (a) {
                return t("lx", v(a)),
                "X"
            }
        }
        ;
        g.nb = function() {
            try {
                if ("function" === typeof PluginArray) {
                    var a = PluginArray.prototype === n.plugins.__proto__;
                    return 0 < n.plugins.length && !(a & Plugin.prototype === n.plugins[0].__proto__) ? 1 : 0
                }
                return "?"
            } catch (b) {
                return t("pp", v(b)),
                "X"
            }
        }
        ;
        g.$a = function() {
            try {
                return "function" === typeof MimeTypeArray ? y(MimeTypeArray) ? 0 : 1 : "?"
            } catch (a) {
                return t("mx", v(a)),
                "X"
            }
        }
        ;
        g.Wa = function() {
            try {
                if ("function" === typeof MimeTypeArray) {
                    var a = MimeTypeArray.prototype === n.mimeTypes.__proto__;
                    return 0 < n.mimeTypes.length && !(a & MimeType.prototype === n.mimeTypes[0].__proto__) ? 1 : 0
                }
                return "?"
            } catch (b) {
                return t("mp", v(b)),
                "X"
            }
        }
        ;
        g.Yb = function() {
            return "object" === typeof n.permissions && "function" === typeof n.permissions.query ? y(n.permissions.query) ? 0 : 1 : "?"
        }
        ;
        g.mb = function() {
            try {
                return n.permissions && n.permissions.query ? (n.permissions.query({
                    name: "notifications"
                }).then(function(a) {
                    if ("function" === typeof Notification && "string" === typeof Notification.permission && "denied" === Notification.permission && "prompt" === a.state)
                        return 1
                }),
                0) : "?"
            } catch (a) {
                return t("pm", v(a)),
                "X"
            }
        }
        ;
        g.Ga = function() {
            try {
                return "function" === typeof HTMLIFrameElement && "function" === typeof Object.getOwnPropertyDescriptors && "object" === typeof Object.getOwnPropertyDescriptors(HTMLIFrameElement.prototype).contentWindow ? /(?:^function(?: )?(?: get)?(?: contentWindow)?\(\)\s+\{\s+(?:\[native code\]\s+\}|let contentWindow = getContentWindow\(this\);\s+injectIntoContentWindow\(contentWindow\);\s+return contentWindow;\s+})$|mediafilter\.prototype\.)/.test(Object.getOwnPropertyDescriptors(HTMLIFrameElement.prototype).contentWindow.get.toString().trim()) ? 0 : 1 : "?"
            } catch (a) {
                return t("ix", v(a)),
                "X"
            }
        }
        ;
        g.ia = function() {
            try {
                if ("object" === typeof N) {
                    var a = !1;
                    N.contentWindow === d && (a = !0);
                    return a ? 1 : 0
                }
                return "?"
            } catch (b) {
                return t("cw", v(b)),
                "X"
            }
        }
        ;
        g.ha = function() {
            try {
                return Q && "object" === typeof Q && "function" === typeof Q.debug ? y(Q.debug) || /(?:^function\s*(?:__BROWSERTOOLS_CONSOLE_SAFEFUNC)?\(\)(?: )?\{(?:[a-z]{1}\("debug",arguments\)(?:;return [a-z]{1}\.apply\(this,arguments\))?|d\("debug",arguments\)|\s+try  \{\s+return fn\(arguments\);\s+\} catch \(e\) \{\s+safeAssert\(e\);\s+\}\s+|try\{return [a-z]{1}\(arguments\)}catch\([a-z]{1}\){[a-z]{1}\([a-z]{1}\)})\}|\}catch\([a-z]{1}\)\{[a-z]{1}\.onFault\([a-z]{1}\)\}\}|\}\),"log"\),[a-z]{1}\.apply\(console,[a-z]{1}\)\})$/.test(Function.prototype.toString.call(Q.debug).trim()) ? 0 : 1 : "?"
            } catch (a) {
                return t("cr", v(a)),
                "X"
            }
        }
        ;
        g.ra = function() {
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
                return t("dt", v(c)),
                "X"
            }
        }
        ;
        g.Qb = function() {
            try {
                var a = w.createElement("video");
                return "object" === typeof a && "function" === typeof a.canPlayType ? y(a.canPlayType) ? 0 : 1 : "?"
            } catch (b) {
                return t("vp", v(b)),
                "X"
            }
        }
        ;
        g.Nb = function() {
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
            } catch (f) {
                return t("vd", v(f)),
                "X"
            }
        }
        ;
        g.M = function() {
            try {
                var a = w.createElement("audio");
                return "object" === typeof a && "function" === typeof a.canPlayType ? y(a.canPlayType) ? 0 : 1 : "?"
            } catch (b) {
                return t("ap", v(b)),
                "X"
            }
        }
        ;
        g.O = function() {
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
            } catch (f) {
                return t("au", v(f)),
                "X"
            }
        }
        ;
        g.Ua = function() {
            try {
                return "object" === typeof n.mediaDevices ? 1 : 0
            } catch (a) {
                return t("me", v(a)),
                "X"
            }
        }
        ;
        g.ta = function() {
            try {
                var a = [];
                a[0] = "object" === typeof process && "function" === typeof require ? 1 : 0;
                a[1] = "object" === typeof d ? 1 : 0;
                a[2] = "function" === typeof importScripts ? 1 : 0;
                return a
            } catch (b) {
                return t("ed", v(b)),
                "X"
            }
        }
        ;
        g.Vb = function() {
            "object" === typeof F && ("string" === typeof J.iceConnectionState && F.cs.push(J.iceConnectionState),
            "string" === typeof K.iceConnectionState && F.scs.push(K.iceConnectionState),
            "undefined" !== typeof J.iceGatheringState && F.gs.push(J.iceGatheringState),
            "undefined" !== typeof K.iceGatheringState && F.sgs.push(K.iceGatheringState),
            "object" === typeof F.sc && "object" === typeof F.c && (F.sc = F.sc.filter(function(a) {
                return 0 > F.c.indexOf(a)
            })),
            "object" === typeof F.sld && "object" === typeof F.ld && (F.sld = F.sld.filter(function(a) {
                return 0 > F.ld.indexOf(a)
            })));
            return F || 0 === F ? F : "?"
        }
        ;
        g.pb = function() {
            try {
                return "function" === typeof Function && "function" === typeof Function.prototype && "function" === typeof Function.prototype.toString ? y(Function.prototype.toString) ? 0 : 1 : "?"
            } catch (a) {
                return t("pt", v(a)),
                "X"
            }
        }
        ;
        g.Sb = function() {
            try {
                return "function" === typeof d.close ? y(d.close) ? 0 : 1 : "?"
            } catch (a) {
                return t("wc", v(a)),
                "X"
            }
        }
        ;
        g.K = function() {
            try {
                var a = B(null);
                a.ape = "function" === typeof d.ApplePayError ? y(d.ApplePayError) ? 0 : 1 : "?";
                a.aps = "function" === typeof d.ApplePaySession ? y(d.ApplePaySession) ? 0 : 1 : "?";
                try {
                    Object.freeze(a)
                } catch (b) {}
                return a
            } catch (b) {
                return t("af", v(b)),
                "X"
            }
        }
        ;
        g.X = function() {
            try {
                return "object" === typeof n.brave && "function" === typeof n.brave.isBrave ? n.brave.isBrave() ? 1 : 0 : "?"
            } catch (a) {
                return t("bv", v(a)),
                "X"
            }
        }
        ;
        g.na = function() {
            try {
                return "object" === typeof n._duckduckgoloader_ ? "number" === typeof n._duckduckgoloader_.length ? 1 : 0 : "?"
            } catch (a) {
                return t("dd", v(a)),
                "X"
            }
        }
        ;
        g.cb = function() {
            try {
                return "boolean" === typeof n.onLine ? n.onLine ? 1 : 0 : "?"
            } catch (a) {
                return t("no", v(a)),
                "X"
            }
        }
        ;
        g.ja = function() {
            try {
                var a = "?";
                if ("object" === typeof n.userAgentData && "function" === typeof n.userAgentData.toJSON) {
                    a = B(n.userAgentData.toJSON());
                    try {
                        Object.freeze(a)
                    } catch (b) {}
                }
                return a
            } catch (b) {
                return t("da", v(b)),
                "X"
            }
        }
        ;
        g.Ea = function() {
            return ha ? ha : 0
        }
        ;
        g.Ia = function() {
            return "string" === typeof n.doNotTrack && -1 < ["0", "1"].indexOf(n.doNotTrack) ? parseInt(n.doNotTrack, 10) : "?"
        }
        ;
        g.Ka = function() {
            return "boolean" === typeof n.globalPrivacyControl ? n.globalPrivacyControl ? 1 : 0 : "?"
        }
        ;
        g.i = function() {
            return da && "function" === typeof da ? 1 : 0
        }
        ;
        g.ka = function() {
            try {
                if (d.RTCDataChannel)
                    return "function" === typeof d.RTCDataChannel ? 1 : 0;
                if (g.i()) {
                    var a = B(null);
                    a.bundlePolicy = "max-bundle";
                    a.iceServers = [];
                    a.iceCandidatePoolSize = 0;
                    return "function" === typeof (new da(a)).createDataChannel ? 1 : 0
                }
                return "?"
            } catch (b) {
                return t("dc", v(b)),
                "X"
            }
        }
        ;
        g.wb = function() {
            try {
                if (d.RTCStatsReport)
                    return "function" === typeof d.RTCStatsReport ? 1 : 0;
                if (g.i()) {
                    var a = B(null);
                    a.bundlePolicy = "max-bundle";
                    a.iceServers = [];
                    a.iceCandidatePoolSize = 0;
                    return "function" === typeof (new da(a)).getStats ? 1 : 0
                }
                return "?"
            } catch (b) {
                return t("rs", v(b)),
                "X"
            }
        }
        ;
        var u = B(null);
        u.jb = function() {
            return "string" === typeof n.platform ? n.platform : "?"
        }
        ;
        u.ga = function() {
            return "string" === typeof n.cpuClass ? n.cpuClass : "?"
        }
        ;
        u.Da = function() {
            return isNaN(n.hardwareConcurrency) ? "?" : n.hardwareConcurrency
        }
        ;
        u.pa = function() {
            return "number" === typeof n.deviceMemory ? n.deviceMemory : "?"
        }
        ;
        u.Ib = function() {
            return "object" === typeof P ? Math.round(P.getTime() / 1E3) : "?"
        }
        ;
        u.Ha = function() {
            try {
                var a = "?";
                if ("object" === typeof Intl && "function" === typeof Intl.DateTimeFormat && "function" === typeof Intl.DateTimeFormat().resolvedOptions) {
                    a = B(Intl.DateTimeFormat().resolvedOptions());
                    try {
                        Object.freeze(a)
                    } catch (b) {}
                }
                return a
            } catch (b) {
                return t("iz", v(b)),
                "X"
            }
        }
        ;
        u.Hb = function() {
            return "object" === typeof P && "function" === typeof P.getTimezoneOffset ? y(P.getTimezoneOffset) || /^function getTimezoneOffset\(\)\{\s+var a=\(%_ClassOf\(this\)==='Date'\?%_ValueOf\(this\):ThrowDateTypeError\(\)\);\s+if\(\(!%_IsSmi\(%IS_VAR\(a\)\)&&!\(a==a\)\)\)return a;\s+return\(a-LocalTimeNoCheck\(a\)\)\/60000;\s+\}$/.test(Function.prototype.toString.call(P.getTimezoneOffset).trim()) || /^function\(\) \{\s*if \(alohaFPProxy\.isEnabled\(\)\) \{\s*return aloha_timeZoneOffsetMinutes;\s*\} else \{\s*return aloha_NativeGetTimezoneOffset\.call\(this\);\s*\}\s*\}$/.test(Function.prototype.toString.call(P.getTimezoneOffset).trim()) ? 0 : 1 : "?"
        }
        ;
        u.tz = function() {
            return "object" === typeof P && "function" === typeof P.getTimezoneOffset ? P.getTimezoneOffset() : "?"
        }
        ;
        u.Ma = function() {
            return "string" === typeof n.language ? n.language : "string" === typeof n.browserLanguage ? n.browserLanguage : "?"
        }
        ;
        u.Qa = function() {
            if ("object" === typeof n.languages) {
                var a = [], b;
                for (b in B(n.languages))
                    a.push(n.languages[b]);
                return a
            }
            return "?"
        }
        ;
        u.rb = function() {
            return isNaN(d.screen.width) || isNaN(d.screen.height) ? "?" : d.screen.width + "x" + d.screen.height
        }
        ;
        u.N = function() {
            return isNaN(d.screen.availWidth) || isNaN(d.screen.availHeight) ? "?" : d.screen.availWidth + "x" + d.screen.availHeight
        }
        ;
        u.o = function() {
            return isNaN(d.screen.colorDepth) ? "?" : d.screen.colorDepth
        }
        ;
        u.D = function() {
            return isNaN(d.screen.pixelDepth) ? "?" : d.screen.pixelDepth
        }
        ;
        u.Xb = function() {
            return isNaN(d.screen.logicalXDPI) ? "?" : d.screen.logicalXDPI
        }
        ;
        u.Zb = function() {
            return isNaN(d.screen.logicalYDPI) ? "?" : d.screen.logicalYDPI
        }
        ;
        u.dp = function() {
            return isNaN(d.devicePixelRatio) ? "?" : d.devicePixelRatio
        }
        ;
        u.xa = function() {
            return "boolean" === typeof d.screen.isExtended ? d.screen.isExtended ? 1 : 0 : "?"
        }
        ;
        u.Ab = function() {
            try {
                if ("object" === typeof d.screen && "object" === typeof d.screen.orientation) {
                    var a = B(null);
                    "number" === typeof d.screen.orientation.angle && (a.angle = d.screen.orientation.angle);
                    "string" === typeof d.screen.orientation.type && (a.type = d.screen.orientation.type);
                    return a
                }
                return "?"
            } catch (b) {
                return t("so", v(b)),
                "X"
            }
        }
        ;
        u.Gb = function() {
            var a = n.maxTouchPoints || n.msMaxTouchPoints;
            return isNaN(a) ? "?" : a
        }
        ;
        u.Eb = function() {
            try {
                return w.createEvent("TouchEvent"),
                1
            } catch (a) {
                return 0
            }
        }
        ;
        u.Kb = function() {
            return "ontouchstart"in d ? 1 : 0
        }
        ;
        u.Y = function() {
            return "function" !== typeof n.getBattery || y(n.getBattery) ? 0 : 1
        }
        ;
        u.T = function() {
            return "function" === typeof n.getBattery || "object" === typeof n.battery || "object" === typeof n.mozBattery ? 1 : 0
        }
        ;
        u.W = function() {
            return "object" === typeof n.bluetooth || "object" === typeof n.mozBluetooth ? 1 : 0
        }
        ;
        u.aa = function() {
            try {
                if ("object" === typeof n.connection) {
                    var a = B(null), b;
                    for (b in n.connection)
                        "function" === typeof n.connection[b] || null === n.connection[b] || n.connection.toString[b] || (a[b] = Infinity === n.connection[b] ? "Infinity" : n.connection[b]);
                    try {
                        Object.freeze(a)
                    } catch (c) {}
                    return a
                }
                return "?"
            } catch (c) {
                return t("cn", v(c)),
                "X"
            }
        }
        ;
        u.qb = function() {
            return M && "function" === typeof M.getParameter ? y(M.getParameter) || Ha(M.getParameter) ? 0 : 1 : "?"
        }
        ;
        u.ya = function() {
            return M && "function" === typeof M.getExtension ? y(M.getExtension) || Ha(M.getExtension) ? 0 : 1 : "?"
        }
        ;
        u.v = function() {
            try {
                if (M && M.getParameter) {
                    var a = M.getParameter(M.VERSION);
                    if (a)
                        return a
                }
                return "?"
            } catch (b) {
                return t("gv", v(b)),
                "X"
            }
        }
        ;
        u.u = function() {
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
            } catch (f) {
                return t("gr", v(f)),
                "X"
            }
        }
        ;
        u.Aa = function() {
            try {
                return Na = !0,
                fa
            } catch (a) {
                return t("fp", v(a)),
                "X"
            }
        }
        ;
        u.fx = function() {
            var a = d.requestAnimationFrame || d.mozRequestAnimationFrame || d.webkitRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame;
            return "function" === typeof a ? y(a) ? 0 : 1 : "?"
        }
        ;
        u.Sa = function() {
            try {
                return "object" === typeof performance && "function" === typeof performance.mark ? y(performance.mark) ? 0 : 1 : "?"
            } catch (a) {
                return t("ma", v(a)),
                "X"
            }
        }
        ;
        var I = B(null);
        I.Ob = function() {
            return "string" === typeof w.visibilityState ? w.visibilityState : "?"
        }
        ;
        I.Jb = function() {
            try {
                return ua && "object" === typeof ua && Z && "object" === typeof Z && "string" === typeof Z.visibilityState ? Z.visibilityState : "?"
            } catch (a) {
                return t("tv", v(a)),
                "X"
            }
        }
        ;
        I.Za = function() {
            try {
                if ("function" === typeof w.querySelectorAll) {
                    var a = [], b = w.querySelectorAll('meta[name="viewport"]'), c;
                    for (c in b)
                        "string" === typeof b[c].content && a.push(b[c].content);
                    return a
                }
                return "?"
            } catch (f) {
                return t("mv", v(f)),
                "X"
            }
        }
        ;
        I.Ba = function() {
            return self !== ua ? 1 : 0
        }
        ;
        I.Tb = function() {
            return "string" === typeof d.name ? d.name : "?"
        }
        ;
        I.Oa = function() {
            return "string" === typeof w.location.href ? w.location.href : "?"
        }
        ;
        I.Fb = function() {
            try {
                return "string" === typeof Z.location.href ? Z.location.href : "string" === typeof d.top.location.href ? d.top.location.href : "?"
            } catch (a) {
                return "string" === typeof w.location.href ? w.location.href : "string" === typeof d.location.href ? d.location.href : "?"
            }
        }
        ;
        I.ob = function() {
            return "string" === typeof w.location.protocol ? w.location.protocol : "?"
        }
        ;
        I.vb = function() {
            try {
                if (!R && Object.getOwnPropertyDescriptors) {
                    var a = Object.getOwnPropertyDescriptors(w);
                    if (a && a.referrer) {
                        var b = [];
                        b.push(a.referrer.get ? y(a.referrer.get) ? 0 : 1 : "?");
                        b.push(a.referrer.set ? y(a.referrer.set) ? 0 : 1 : "?");
                        return b
                    }
                    return 0
                }
                return "?"
            } catch (c) {
                return t("rr", v(c)),
                "X"
            }
        }
        ;
        I.ub = function() {
            return "string" === typeof w.referrer ? w.referrer : "?"
        }
        ;
        I.fb = function() {
            try {
                return "function" === typeof PerformanceNavigation && "number" === typeof PerformanceNavigation.type ? PerformanceNavigation.type : "object" === typeof d.performance && "object" === typeof d.performance.navigation && "number" === typeof d.performance.navigation.type ? d.performance.navigation.type : "?"
            } catch (a) {
                return t("nt", v(a)),
                "X"
            }
        }
        ;
        I.xb = function() {
            return R ? 1 : 0
        }
        ;
        I.V = function() {
            return Ga ? 1 : 0
        }
        ;
        I.oa = function() {
            try {
                if ("object" === typeof w.featurePolicy && "function" === typeof w.featurePolicy.getAllowlistForFeature) {
                    if ("string" === typeof A.scheme && "string" === typeof A.host) {
                        var a = w.createElement("a");
                        a.href = A.scheme + "//" + A.host;
                        if ("string" === typeof a.hostname)
                            var b = a.hostname.split(".")
                              , c = [b[b.length - 2], b[b.length - 1]].join("\\.")
                    }
                    if ("string" === typeof d.location.host)
                        var f = d.location.host.split(".").join("\\.");
                    if ("string" === typeof f && "string" === typeof c) {
                        a = [];
                        b = "ch-ua ch-ua-arch ch-ua-model ch-ua-wow64 ch-ua-mobile ch-ua-bitness ch-ua-platform ch-ua-form-factors ch-ua-full-version ch-ua-platform-version ch-ua-full-version-list".split(" ");
                        var m = new RegExp("\\b" + c + "$")
                          , q = new RegExp("\\b" + f + "$");
                        for (r in b) {
                            var r = parseInt(r, 10);
                            c = !1;
                            var x = w.featurePolicy.getAllowlistForFeature(b[r]);
                            if ("object" === typeof x)
                                if (0 < x.length) {
                                    var E = f = !1;
                                    for (D in x) {
                                        var D = parseInt(D, 10);
                                        "*" === x[D] ? c = !0 : (m.test(x[D]) && (f = !0),
                                        q.test(x[D]) && (E = !0))
                                    }
                                    f && E && (c = !0)
                                } else
                                    c = !0;
                            c || a.push(b[r])
                        }
                        return a
                    }
                    return 0
                }
                return "?"
            } catch (z) {
                return t("df", v(z)),
                "X"
            }
        }
        ;
        var ta = B(null);
        ta.F = function() {
            var a = B(null);
            a.wp = T(S(Xa.join(",")), 6, 17);
            a.np = T(S(va.join(",")), 15, 30);
            a.ws = T(S(wa.join(",")), 4, 18);
            a.wa = T(S(xa.join(",")), 7, 20);
            a.af = T(S(za.join(",")), 3, 16);
            a.vf = T(S(ya.join(",")), 5, 15);
            a.st = T(S(ma.join(",")), 20, 32);
            a.he = T(S(Ya.join(",")), 14, 28);
            a.dtw = T(S(A.dtw), 8, 18);
            try {
                Object.freeze(a)
            } catch (b) {}
            return a
        }
        ;
        ta.Rb = function() {
            var a = this.F(), b = [], c;
            for (c in a)
                b.push(a[c]);
            return S(b.join(","))
        }
        ;
        var Y = B(null);
        Y.go = function(a, b) {
            var c = B(null)
              , f = this.za();
            this.j(f) && (c.esd = f);
            f = this.fa();
            this.j(f) && (c.wax = f);
            f = this.tb();
            this.j(f) && (c.sbr = f);
            f = g.A();
            a !== f && (c.iwn = f);
            a = g.C();
            b !== a && (c.own = a);
            b = this.va();
            this.j(b) && (c.err = b);
            try {
                Object.freeze(c)
            } catch (m) {}
            return c
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
        Y.za = function() {
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
            "function" === typeof cl && y(cl) && "function" === typeof ce && y(ce) && /^function\(\){}$/.test(console.debug.toString()) && a.push("censor");
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
                      , f = RegExp("^_[a-z0-9]{8}_[a-z0-9]{4}_[a-z0-9]{4}_[a-z0-9]{4}_[a-z0-9]{12}_e$")
                      , m = RegExp("{return [a-z]+=!0x0,void 0x0;}");
                    for (q in c) {
                        var q = parseInt(q, 10);
                        f.test(c[q]) && d.hasOwnProperty(c[q]) && m.test(d.__lookupGetter__(c[q]).toString()) && a.push("clean")
                    }
                }
            } catch (r) {}
            return a
        }
        ;
        Y.va = function() {
            return Va
        }
        ;
        Y.fa = function() {
            try {
                return "object" === typeof d.document && "object" === typeof d.document.documentElement && "function" === typeof d.document.documentElement.getAttributeNames ? d.document.documentElement.getAttributeNames() : 0
            } catch (a) {
                return t("wax", v(a)),
                "X"
            }
        }
        ;
        Y.tb = function() {
            try {
                if ("function" === typeof n.sendBeacon && !y(n.sendBeacon) && !Sa(n.sendBeacon))
                    return n.sendBeacon.toString()
            } catch (a) {
                return t("sbr", v(a)),
                "X"
            }
        }
        ;
        (function() {
            kb();
            eb();
            "number" === typeof A.adblocker && 1 === A.adblocker ? jb() : qa = !0;
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
                    C.adblocker = 1 === g.m() ? 1 : 0,
                    db())
                }, 80)
            }, ca)
        }
        )();
        var L = B(null);
        L.getId = function() {
            return "string" === typeof C.id ? C.id : null
        }
        ;
        L.getExId = function() {
            return "string" === typeof C.exid ? C.exid : null
        }
        ;
        L.hasResult = function() {
            return "string" === typeof C.result ? !0 : "string" === typeof H.result ? !0 : !1
        }
        ;
        L.queryResult = function(a) {
            return bb(a)
        }
        ;
        L.isGood = function() {
            return "string" === typeof C.result ? "good" === C.result : "string" === typeof H.result ? "good" === H.result : null
        }
        ;
        L.isWarning = function() {
            return "string" === typeof C.result ? "warn" === C.result || "warning" === C.result : "string" === typeof H.result ? "warn" === H.result || "warning" === H.result : null
        }
        ;
        L.isBad = function() {
            return "string" === typeof C.result ? "bad" === C.result : "string" === typeof H.result ? "bad" === H.result : null
        }
        ;
        L.getResult = function() {
            return "string" === typeof C.result ? C.result : "string" === typeof H.result ? H.result : null
        }
        ;
        L.getRuleSets = function() {
            return "object" === typeof C.rule_sets ? C.rule_sets : "object" === typeof H.rule_sets ? H.rule_sets : null
        }
        ;
        L.getInvalidTrafficType = function() {
            return "string" === typeof C.invalid_traffic_type ? C.invalid_traffic_type : "string" === typeof H.invalid_traffic_type ? H.invalid_traffic_type : null
        }
        ;
        L.isMobile = function() {
            return "number" === typeof C.mobile ? 1 === C.mobile : "number" === typeof H.mobile ? 1 === H.mobile : null
        }
        ;
        L.getMobile = function() {
            return "number" === typeof C.mobile ? C.mobile : "number" === typeof H.mobile ? H.mobile : null
        }
        ;
        L.hasAdBlocker = function() {
            return "number" === typeof C.adblocker ? 1 === C.adblocker : "number" === typeof H.adblocker ? 1 === H.adblocker : null
        }
        ;
        L.getAdBlocker = function() {
            return "number" === typeof C.adblocker ? C.adblocker : "number" === typeof H.adblocker ? H.adblocker : null
        }
        ;
        L.getError = function() {
            return "string" === typeof C.error ? C.error : "string" === typeof H.error ? H.error : null
        }
        ;
        L.getResponseObject = function() {
            return "object" === typeof C ? C : null
        }
        ;
        L.getResultObject = function() {
            return "object" === typeof H ? H : null
        }
        ;
        L.getObject = function() {
            var a = B(null);
            if ("object" === typeof C)
                for (var b in C)
                    C.hasOwnProperty(b) && (a[b] = C[b]);
            if ("object" === typeof H)
                for (b in H)
                    H.hasOwnProperty(b) && (a[b] = H[b]);
            a = ja(a);
            try {
                Object.freeze(a)
            } catch (c) {}
            return "object" === typeof a ? a : null
        }
        ;
        L = ja(L);
        try {
            Object.freeze(L)
        } catch (a) {}
        return L
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
