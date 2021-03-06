define("zebra-pages/fp5/pc/js/mods/category", ["mui/jquery/jquery", "zebra-pages/fp5/pc/js/mods/util", "zebra-pages/fp5/pc/js/mods/model", "zebra-pages/fp5/pc/js/mods/datalazy", "zebra-pages/fp5/pc/js/js-xtpl/sub-pannel-render"], function (e, a, r) {
    for (var s, t = e("mui/jquery/jquery"), i = e("zebra-pages/fp5/pc/js/mods/util"), p = e("zebra-pages/fp5/pc/js/mods/model"), o = (e("zebra-pages/fp5/pc/js/mods/datalazy"), e("zebra-pages/fp5/pc/js/js-xtpl/sub-pannel-render")), n = ".j_category", d = ".j_categoryContent", c = (t(d + " .pannel-con"), "201710121"), u = [], m = [], l = 0; l < 15; l++) m.push("20160229" + (13 + l));
    m.splice(8, 0, "201604139");
    for (var f = [], l = 0; l < 15; l++) f.push("20160301" + (0 + l));
    f.splice(8, 0, "2016041310"), r.exports = {
        "RES_ID_ARR": [],
        "init": function () {
            this.initMenu()
        },
        "initMenu": function () {
            var e = this;
            window.KISSY && window.KISSY.use("mui/category-menu/", function (a, r) {
                var p = a.one(n);
                if (p) {
                    s = new r(p, {
                        "triggerType": "mousemove",
                        "autoPlay": !1,
                        "navContainerClass": "normal-nav",
                        "navClass": "nav-item",
                        "selectedClass": "selected",
                        "pannelClass": "pannel-con",
                        "triggerDelay": 300,
                        "forceSelect": !1,
                        "currentNav": -1
                    }), s.on("afterSwitch", function (a) {
                        var r = s.currentNav;
                        if (-1 !== r) {
                            i.mmstat("/tmallfp.5103." + (r + 1));
                            var p = t(s.navs.item(r).getDOMNode());
                            p.hasClass("category-loaded") || (p.addClass("category-loaded"), e.initSubMenu(r))
                        }
                    }), t(n).delegate(".j_CategoryMenuPannel", "mouseleave", function (a) {
                        s.switchTo(-1);
                        var r = t(a.currentTarget),
                            i = e.indexOf(r, s.pannels),
                            p = s.navs.item(i)[0];
                        a.relatedTarget !== p && (t(a.relatedTarget).parents(".j_tabPannel").length > 0 || s.switchTo(-1))
                    });
                    var o = t(".category-tab-nav"),
                        d = ".category-tab-nav-item",
                        c = t(".nav-con");
                    o.delegate(d, "mouseenter", function (e) {
                        var a = t(this);
                        if (!a.hasClass("selected")) {
                            o.find(d).removeClass("selected"), a.addClass("selected");
                            var r = t(".nav-con." + a.attr("nav-target"));
                            c.css({
                                "display": "none"
                            }), r.css({
                                "display": "block"
                            }), a.hasClass("meeting-tab") && s.switchTo(-1)
                        }
                    })
                }
            })
        },
        "initSubMenu": function (e) {
            var a = this,
                r = [],
                s = m[e],
                o = f[e],
                n = "",
                d = !1,
                l = t(".j_CategoryMenuPannel").eq(e);
            setTimeout(function () {
                d || l.addClass("sub-pannel-loading")
            }, 1500);
            try {
                var g = [];
                r = window.g_defaultData["hotWordType" + (1 + e)] || [], r.forEach(function (e) {
                    "" + e.isUse == "true" && g.push(e.appId)
                }), n = g.join(",")
            } catch (j) {}
            p.loadAlds([s, o, n, c], function (t) {
                d = !0;
                var n = {
                    "index": e,
                    "hotWordSPM": "subpannel" + (2016025 + 3 * e),
                    "logoSPM": "subpannel" + (2016026 + 3 * e),
                    "activitySPM": "subpannel" + (2016027 + 3 * e)
                };
                try {
                    n.logoArr = t[s].data
                } catch (j) {}
                try {
                    u = t[c]
                } catch (f) {}
                try {
                    n.activity = t[o].data[0], n.activity && (n.logoArr = n.logoArr.slice(0, 16))
                } catch (j) {}
                n.hotWordArr = [], r.forEach(function (e) {
                    try {
                        "" + e.isUse == "true" && t[e.appId].data.length > 0 && n.hotWordArr.push({
                            "lineTitle": e.title.slice(0, 4),
                            "hotWordDataArr": t[e.appId].data
                        })
                    } catch (j) {}
                }), n.trimPic = i.trimPic, l.removeClass("sub-pannel-loading");
                var m = u[e] && u[e].join(",");
                p.loadTianHeBrand(m, function (e) {
                    if (e = e.data, e.model.length) {
                        var r = e.model[0];
                        if (r.trackParams && r.trackParams.scm && (e.trackParams ? e.trackParams.scm = r.trackParams.scm : e.trackParams = {
                                "scm": r.trackParams.scm
                            }), e.trackParams) {
                            var s = a.getCombineUrl("https://wgo.mmstat.com/turing.plan.1", e.trackParams._expose, e.trackParams);
                            i.send(s), r.actionUrl = a.getCombineUrl(r.actionUrl, e.trackParams._click, e.trackParams), n.tianHeBrandData = r
                        }
                    }
                    a.renderSubMenu(n, l)
                }, function () {
                    a.renderSubMenu(n, l)
                })
            }, function () {
                l.removeClass("sub-pannel-loading").addClass("error").html("\u55f7\uff0c\u5185\u5bb9\u88ab\u6050\u9f99\u5403\u4e86\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5")
            }, {
                "notNeedBackup": !0
            })
        },
        "getCombineUrl": function (e, a, r) {
            var s = a.split(",");
            s.length && -1 == e.indexOf("?") && (e = e + "?_t=" + (new Date).getTime());
            for (var t = 0; t < s.length; t++) e = e + "&" + s[t] + "=" + r[s[t]];
            return e
        },
        "renderSubMenu": function (e, a) {
            t(a).html(o(e))
        },
        "indexOf": function (e, a) {
            for (var r = 0; r < a.length; r++)
                if (e == a[r] || t(e)[0] == a[r] || e.getDOMNode && e.getDOMNode() == a[r]) return r;
            return -1
        }
    }
});
define("zebra-pages/fp5/pc/js/mods/datalazy", ["mui/jquery/jquery", "mui/datalazyload/index", "zebra-pages/fp5/pc/js/mods/model", "mui/crossimage/index"], function (e, a, r) {
    var s = e("mui/jquery/jquery"),
        t = e("mui/datalazyload/index"),
        o = e("zebra-pages/fp5/pc/js/mods/model"),
        n = e("mui/crossimage/index"),
        i = window.g_config;
    r.exports = {
        "init": function () {
            var e = this;
            window.g_fpDataLazyload = window.g_fpDataLazyload || new t({
                "placeholder": "//img.alicdn.com/tps/i1/TB1ZkQYHpXXXXcPXXXX_RF9JFXX-1-1.gif",
                "diff": 100,
                "autoDestroy": !1,
                "container": document
            });
            var a = n.DatalazyPlugin(undefined, {
                "quality": i.imgQuality,
                "sharpen": ""
            });
            window.g_fpDataLazyload.addStartListener(function (e, r) {
                var t = e.elem;
                if (!s(t).hasClass("interact-img")) return a(e, r);
                var o = t.getAttribute("data-ks-lazyload"),
                    i = n.getFitUrl(o, 500, 500, {
                        "quality": "q75",
                        "sharpen": "s0"
                    });
                t.src = i
            }), e.addAdBanner()
        },
        "addAdBanner": function () {
            var e = this;
            s(".j_tanxBanner").each(function (a, r) {
                window.g_fpDataLazyload && window.g_fpDataLazyload.addCallback(r, function () {
                    e.lazyloadHandler(s(r), function (e) {
                        e ? (s(r).css({
                            "display": "none"
                        }), s(r).fadeIn(.1)) : s(r).removeClass("fp-content-loading").addClass("fp-content-err")
                    })
                })
            })
        },
        "lazyloadHandler": function (e, a) {
            if (e) {
                var r = this;
                e.hasClass("j_tanxBanner") && r._loadAd(e, a)
            }
        },
        "_loadAd": function (e, a) {
            if (e && 0 !== e.length && !s(e).attr("data-inited")) {
                var r = s(".j_tanxItem", e);
                if (r && 0 !== r) {
                    var t = r.attr("id").replace("tanx-a-", "");
                    o.loadAd(t, function (t) {
                        t && t.clickUrl && t.data ? (r && r.hide(), s(e).prepend('<a href="' + t.clickUrl + '"><img src="' + t.data + '" width="1620" height="90"></a>'), s(e).attr("data-inited", "1"), a && a(!0)) : a && a(!1)
                    })
                }
            }
        }
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/sub-pannel-render", ["./sub-pannel", "zebra-pages/fp5/pc/js/mods/x-runtime"], function (e, t, a) {
    var n = e("./sub-pannel"),
        r = e("zebra-pages/fp5/pc/js/mods/x-runtime"),
        o = new r(n);
    a.exports = function () {
        return o.render.apply(o, arguments)
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/sub-pannel", function (e, t, a) {
    (a.exports = function (e) {
        function t(e, t, a) {
            e.data, e.affix;
            return t.data += " highlight ", t
        }

        function a(e, a, n) {
            var r = e.data,
                o = e.affix;
            a.data += '\n                <a class="hot-word ', x.line = 12;
            var i = (f = o.isHighLight) !== n ? f : (f = r.isHighLight) !== n ? f : e.resolveLooseUp(["isHighLight"]),
                s = i;
            s = "true" === i, a = z.call(g, e, {
                "params": [s],
                "fn": t
            }, a), a.data += '" href="';
            var l = (f = o.action) !== n ? f : (f = r.action) !== n ? f : e.resolveLooseUp(["action"]);
            a = a.writeEscaped(l), a.data += '">';
            var d = (f = o.title) !== n ? f : (f = r.title) !== n ? f : e.resolveLooseUp(["title"]);
            return a = a.writeEscaped(d), a.data += "</a>\n                ", a
        }

        function n(e, t, n) {
            var r = e.data,
                o = e.affix;
            t.data += "\n                ", x.line = 11, x.line = 11;
            var i = (f = o.isUse) !== n ? f : (f = r.isUse) !== n ? f : e.resolveLooseUp(["isUse"]),
                s = i;
            return s = "true" === i, t = z.call(g, e, {
                "params": [s],
                "fn": a
            }, t), t.data += "\n                ", t
        }

        function r(e, t, a) {
            e.data, e.affix;
            return t.data += '\n                <div class="seprate clearfix"></div>\n                ', t
        }

        function o(e, t, a) {
            var o = e.data,
                i = e.affix;
            t.data += '\n        <div class="hot-word-line">\n            <div class="line-title">\n                <div class="title-text">', x.line = 6;
            var s = (f = i.lineTitle) !== a ? f : (f = o.lineTitle) !== a ? f : e.resolveLooseUp(["lineTitle"]);
            t = t.writeEscaped(s), t.data += '</div>\n                <i class="fp-iconfont">&#xe631;</i>\n            </div>\n            <div class="line-con">\n                ', x.line = 10, x.line = 10;
            var l = (f = i.hotWordDataArr) !== a ? f : (f = o.hotWordDataArr) !== a ? f : e.resolveLooseUp(["hotWordDataArr"]);
            t = E.call(g, e, {
                "params": [l],
                "fn": n
            }, t), t.data += "\n                ", x.line = 15;
            var d = (f = i.xindex) !== a ? f : (f = o.xindex) !== a ? f : e.resolveLooseUp(["xindex"]),
                c = d;
            c = d >= 0;
            var p = c;
            if (p) {
                var u = (f = i.xindex) !== a ? f : (f = o.xindex) !== a ? f : e.resolveLooseUp(["xindex"]),
                    m = u,
                    h = (f = i.hotWordArr) !== a ? i.hotWordArr.length : (f = o.hotWordArr) !== a ? f.length : e.resolveLooseUp(["hotWordArr", "length"]),
                    v = h;
                v = h - 1, m = u < v, p = m
            }
            return t = z.call(g, e, {
                "params": [p],
                "fn": r
            }, t), t.data += "\n            </div>\n\n        </div>\n        ", t
        }

        function i(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n    <a class="tianhe-brand" href="', x.line = 24;
            var o = (f = r.tianHeBrandData) !== a ? r.tianHeBrandData.actionUrl : (f = n.tianHeBrandData) !== a ? f.actionUrl : e.resolveLooseUp(["tianHeBrandData", "actionUrl"]);
            t = t.writeEscaped(o), t.data += '">\n        <img src="', x.line = 25;
            var i = (f = r.tianHeBrandData) !== a ? r.tianHeBrandData.imageUrl : (f = n.tianHeBrandData) !== a ? f.imageUrl : e.resolveLooseUp(["tianHeBrandData", "imageUrl"]);
            return t = t.writeEscaped(i), t.data += '"/>\n    </a>\n    ', t
        }

        function s(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n            <a class="banner" href="', x.line = 32;
            var o = (f = r.logoArr) !== a ? r.logoArr[0].action : (f = n.logoArr) !== a ? null != (m = f[0]) ? m.action : m : e.resolveLooseUp(["logoArr", 0, "action"]);
            t = t.writeEscaped(o), t.data += '">\n                <img src="', x.line = 33;
            var i = (f = r.logoArr) !== a ? r.logoArr[0].imgUrl : (f = n.logoArr) !== a ? null != (m = f[0]) ? m.imgUrl : m : e.resolveLooseUp(["logoArr", 0, "imgUrl"]);
            return t = t.writeEscaped(i), t.data += '"/>\n            </a>\n            ', t
        }

        function l(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n            <a class="logo" href="', x.line = 37;
            var o = (f = r.action) !== a ? f : (f = n.action) !== a ? f : e.resolveLooseUp(["action"]);
            t = t.writeEscaped(o), t.data += '">\n                <img src="', x.line = 38;
            var i, s = (f = r.imgUrl) !== a ? f : (f = n.imgUrl) !== a ? f : e.resolveLooseUp(["imgUrl"]);
            return i = L(g, e, {
                "escape": 1,
                "params": [s]
            }, t, ["root", "trimPic"]), t = t.writeEscaped(i), t.data += '_170x120q30.jpg"/>\n            </a>\n            ', t
        }

        function d(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += "\n            ", x.line = 36, x.line = 36;
            var o = (f = r.logoArr) !== a ? f : (f = n.logoArr) !== a ? f : e.resolveLooseUp(["logoArr"]);
            return t = E.call(g, e, {
                "params": [o],
                "fn": l
            }, t), t.data += "\n            ", t
        }

        function c(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n            <a class="activity clearfix" href="', x.line = 47;
            var o = (f = r.action) !== a ? f : (f = n.action) !== a ? f : e.resolveLooseUp(["action"]);
            t = t.writeEscaped(o), t.data += '">\n                <img src="', x.line = 48;
            var i = (f = r.imgUrl) !== a ? f : (f = n.imgUrl) !== a ? f : e.resolveLooseUp(["imgUrl"]);
            t = t.writeEscaped(i), t.data += '"/>\n\n                <div class="title">', x.line = 50;
            var s = (f = r.title) !== a ? f : (f = n.title) !== a ? f : e.resolveLooseUp(["title"]);
            t = t.writeEscaped(s), t.data += '</div>\n                <div class="sub-title">', x.line = 51;
            var l = (f = r.subTitle) !== a ? f : (f = n.subTitle) !== a ? f : e.resolveLooseUp(["subTitle"]);
            return t = t.writeEscaped(l), t.data += "</div>\n            </a>\n            ", t
        }

        function p(e, t, a) {
            e.data, e.affix;
            t.data += "\n            ", x.line = 46, x.line = 46;
            var n = (f = e.root.affix.activity) !== a ? f : e.root.data.activity;
            return t = U.call(g, e, {
                "params": [n],
                "fn": c
            }, t), t.data += "\n            ", t
        }

        function u(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n    <div class="sub-logo-con">\n        <div data-spm=', x.line = 29;
            var o = (f = e.root.affix.logoSPM) !== a ? f : e.root.data.logoSPM;
            t = t.writeEscaped(o), t.data += ">\n\n            ", x.line = 31, x.line = 31;
            var i = (f = r.logoArr) !== a ? r.logoArr.length : (f = n.logoArr) !== a ? f.length : e.resolveLooseUp(["logoArr", "length"]),
                l = i;
            l = 1 === i, t = z.call(g, e, {
                "params": [l],
                "fn": s,
                "inverse": d
            }, t), t.data += "\n\n        </div>\n        <div data-spm=", x.line = 44;
            var c = (f = e.root.affix.activitySPM) !== a ? f : e.root.data.activitySPM;
            t = t.writeEscaped(c), t.data += ">\n            ", x.line = 45, x.line = 45;
            var u = (f = e.root.affix.activity) !== a ? f : e.root.data.activity;
            return t = z.call(g, e, {
                "params": [u],
                "fn": p
            }, t), t.data += "\n        </div>\n    </div>\n    ", t
        }
        var f, m, g = this,
            h = g.root,
            v = g.buffer,
            b = g.scope,
            x = (g.runtime, g.name, g.pos),
            y = b.data,
            w = b.affix,
            _ = h.nativeCommands,
            j = h.utils,
            L = j.callFn,
            E = (j.callCommand, _.range, _.foreach, _.forin, _.each),
            U = _["with"],
            z = _["if"];
        _.set, _.include, _.parse, _.extend, _.block, _.macro, _["debugger"];
        v.data += '<div class="pannel-', x.line = 1;
        var k = (f = w.index) !== e ? f : (f = y.index) !== e ? f : b.resolveLooseUp(["index"]);
        v = v.writeEscaped(k), v.data += '">\n    <div class="hot-word-con" data-spm=', x.line = 2;
        var C = (f = b.root.affix.hotWordSPM) !== e ? f : b.root.data.hotWordSPM;
        v = v.writeEscaped(C), v.data += ">\n        ", x.line = 3, x.line = 3;
        var S = (f = w.hotWordArr) !== e ? f : (f = y.hotWordArr) !== e ? f : b.resolveLooseUp(["hotWordArr"]);
        v = E.call(g, b, {
            "params": [S],
            "fn": o
        }, v), v.data += "\n    </div>\n    ", x.line = 23, x.line = 23;
        var T = (f = b.root.affix.tianHeBrandData) !== e ? f : b.root.data.tianHeBrandData;
        return v = z.call(g, b, {
            "params": [T],
            "fn": i,
            "inverse": u
        }, v), v.data += "\n\n</div>", v
    }).TPL_NAME = a.id || a.name
});
define("zebra-pages/fp5/pc/js/mods/new-floor", ["zebra-pages/fp5/pc/js/js-xtpl/new-floor-con-render", "zebra-pages/fp5/pc/js/js-xtpl/lift-render", "zebra-pages/fp5/pc/js/js-xtpl/new-floor-render", "mui/jquery/jquery", "zebra-pages/fp5/pc/js/mods/util", "zebra-pages/fp5/pc/js/mods/exposure", "zebra-pages/fp5/pc/js/mods/model", "zebra-pages/fp5/pc/js/mods/datalazy", "zebra-pages/fp5/pc/js/mods/lift"], function (e, a, r) {
    var t = e("zebra-pages/fp5/pc/js/js-xtpl/new-floor-con-render"),
        o = e("zebra-pages/fp5/pc/js/js-xtpl/lift-render"),
        n = e("zebra-pages/fp5/pc/js/js-xtpl/new-floor-render"),
        s = e("mui/jquery/jquery"),
        d = e("zebra-pages/fp5/pc/js/mods/util"),
        p = (e("zebra-pages/fp5/pc/js/mods/exposure"), e("zebra-pages/fp5/pc/js/mods/model")),
        l = e("zebra-pages/fp5/pc/js/mods/datalazy"),
        c = e("zebra-pages/fp5/pc/js/mods/lift"),
        u = [{
            "id": "TMCS"
        }, {
            "id": "TMGJ"
        }, {
            "id": "MLRS"
        }, {
            "id": "CLKW"
        }, {
            "id": "JJSH"
        }, {
            "id": "DZAC"
        }, {
            "id": "HWCX"
        }],
        m = ["mm_12852562_1778064_37802118", "mm_12852562_1778064_37804005", "mm_12852562_1778064_37796997"],
        f = ["2016902", "2016903", "2016904"],
        g = ["/tmallfp.5111.2", "/tmallfp.5111.3", "/tmallfp.5111.4"],
        b = {
            "TMCS": {
                "colorType": "green",
                "floorNameImg": "https://img.alicdn.com/tfs/TB1Q67hXPihSKJjy0FeXXbJtpXa-428-50.png",
                "floorName": "\u5929\u732b\u8d85\u5e02",
                "subTitle": "MARKET",
                "bigBannerCode": "201709122",
                "hotWordCode": "201709180",
                "smallBannerCode": "73136",
                "slideBannerCode": "201709123",
                "floorAtmosCode": "201608092",
                "spm": "2017039",
                "hotWordSPM": "2017040",
                "goldlog": "/tmallfp.6006.1",
                "id": "TMCS",
                "smallNumber": 9,
                "bigBannerIndex": 6,
                "smallBannerName": "floorSmallBannerTMCS"
            },
            "TMGJ": {
                "colorType": "purple",
                "floorNameImg": "https://img.alicdn.com/tfs/TB1R.slXGagSKJjy0FgXXcRqFXa-428-50.png",
                "floorName": "\u5929\u732b\u56fd\u9645",
                "subTitle": "GLOBAL",
                "bigBannerCode": "201709146",
                "hotWordCode": "201709181",
                "smallBannerCode": "73133",
                "channelCode": "201709149",
                "floorAtmosCode": "201608092",
                "spm": "2017041",
                "hotWordSPM": "2017042",
                "goldlog": "/tmallfp.6008.1",
                "id": "TMGJ",
                "smallNumber": 9,
                "bigBannerIndex": 7,
                "smallBannerName": "floorSmallBannerTMGJ"
            },
            "MLRS": {
                "colorType": "pink",
                "floorName": "\u7f8e\u4e3d\u4eba\u751f",
                "subTitle": "FASHION & BEAUTY",
                "bigBannerCode": "201709141",
                "hotWordCode": "201603211",
                "smallBannerCode": "73263",
                "floorAtmosCode": "201608092",
                "spm": "2017077",
                "hotWordSPM": "2017076",
                "goldlog": "/tmallfp.6108.1",
                "id": "MLRS",
                "smallNumber": 9,
                "bigBannerIndex": 0,
                "smallBannerName": "floorSmallBanner0"
            },
            "CLKW": {
                "colorType": "blue",
                "floorName": "\u6f6e\u7535\u9177\u73a9",
                "subTitle": "ELECTRONICS",
                "bigBannerCode": "201709142",
                "hotWordCode": "201603212",
                "smallBannerCode": "73277",
                "floorAtmosCode": "201608093",
                "spm": "2017079",
                "hotWordSPM": "2017078",
                "id": "CLKW",
                "goldlog": "/tmallfp.6108.2",
                "smallNumber": 9,
                "bigBannerIndex": 1,
                "smallBannerName": "floorSmallBanner1"
            },
            "JJSH": {
                "colorType": "green",
                "floorName": "\u5c45\u5bb6\u751f\u6d3b",
                "subTitle": "GROCERY & HEALTH",
                "bigBannerCode": "201709143",
                "hotWordCode": "201603213",
                "smallBannerCode": "73299",
                "floorAtmosCode": "201608094",
                "spm": "2017081",
                "hotWordSPM": "2017080",
                "id": "JJSH",
                "goldlog": "/tmallfp.6108.3",
                "smallNumber": 9,
                "bigBannerIndex": 2,
                "smallBannerName": "floorSmallBanner2"
            },
            "DZAC": {
                "colorType": "red",
                "floorName": "\u6253\u9020\u7231\u5de2",
                "subTitle": "HOME",
                "bigBannerCode": "201709144",
                "hotWordCode": "201603214",
                "smallBannerCode": "73316",
                "floorAtmosCode": "201608095",
                "spm": "2017083",
                "hotWordSPM": "2017082",
                "id": "DZAC",
                "goldlog": "/tmallfp.6108.4",
                "smallNumber": 10,
                "bigBannerIndex": 3,
                "smallBannerName": "floorSmallBanner3"
            },
            "HWCX": {
                "colorType": "cyan",
                "floorName": "\u6237\u5916\u51fa\u884c",
                "subTitle": "OUTDOORS & AUTOMOTIVE",
                "bigBannerCode": "201709145",
                "hotWordCode": "201603215",
                "smallBannerCode": "73321",
                "floorAtmosCode": "201608096",
                "spm": "2017085",
                "hotWordSPM": "2017084",
                "id": "HWCX",
                "goldlog": "/tmallfp.6108.5",
                "smallNumber": 9,
                "bigBannerIndex": 4,
                "smallBannerName": "floorSmallBanner4"
            }
        },
        h = ".j_newFloor",
        j = "#J_FpLift",
        w = {
            "#J_FloorNavMLRS": "#J_FloorMLRS",
            "#J_FloorNavCLKW": "#J_FloorCLKW",
            "#J_FloorNavJJSH": "#J_FloorJJSH",
            "#J_FloorNavTMCS": "#J_FloorTMCS",
            "#J_FloorNavTMGJ": "#J_FloorTMGJ",
            "#J_FloorNavDZAC": "#J_FloorDZAC",
            "#J_FloorNavHWCX": "#J_FloorHWCX",
            "#J_FloorNavCNXH": "#J_FloorCNXH"
        };
    "B" !== window.tmallfp_abtest && (w["#J_FloorNavPPQJ"] = "#J_FloorPPQJ");
    var v = {
            "node": s(j),
            "effect": "blink",
            "frequency": 30,
            "when": {
                "type": 1,
                "top": 600,
                "delay": 500
            },
            "clickOffset": -60,
            "top": {
                "node": j + " .j_navBack"
            },
            "map": {
                "enable": !0,
                "curNavCls": "mui-lift-cur-nav",
                "curPannelCls": "mui-lift-cur-pannel",
                "easing": "ease",
                "duration": 300,
                "rule": w
            }
        },
        y = [],
        z = {
            "conSelector": h,
            "RES_ID_ARR": ["09044"],
            "init": function (e) {
                var a = this;
                if (0 !== s(a.conSelector).length) {
                    var r = u;
                    if (window.g_fpFloorData && (r = window.g_fpFloorData.order), window.g_defaultData.floorSwitch.tmcsIsUse && (a._containsFloor(y, b.TMCS) || y.push(b.TMCS)), window.g_defaultData.floorSwitch.tmgjIsUse) {
                        var t = b.TMGJ;
                        t.tanxId = m[0], t.tanxSPM = f[0], t.tanxGoldlog = g[0], a._containsFloor(y, t) || y.push(t)
                    }
                    r.forEach(function (e, a) {
                        var r = b[e.id];
                        a % 2 == 1 && (r.tanxId = m[Math.floor(a / 2) + 1], r.tanxSPM = f[Math.floor(a / 2) + 1], r.tanxGoldlog = g[Math.floor(a / 2) + 1]), y.push(r)
                    }), a._renderFloorCon({
                        "data": y
                    }), l.addAdBanner(), a._renderLift({
                        "data": y,
                        "tmallfp_abtest": window.tmallfp_abtest
                    }), a._addListener(), c.init(v)
                }
            },
            "_renderFloorCon": function (e) {
                s(h).html(t(e))
            },
            "_renderLift": function (e) {
                s(j).html(o(e))
            },
            "_addListener": function () {
                var e = this;
                s(".j_lineBody").each(function (a, r) {
                    window.g_fpDataLazyload && window.g_fpDataLazyload.addCallback(r, function () {
                        e.renderFloor(r, a)
                    })
                })
            },
            "_containsFloor": function (e, a) {
                for (var r = e.length; r--;)
                    if (e[r].id === a.id) return !0;
                return !1
            },
            "renderFloor": function (e, a) {
                function r() {
                    var e = s.Deferred();
                    return p.loadAlds([
                        [i.hotWordCode, i.bigBannerCode, i.floorAtmosCode, i.slideBannerCode, i.channelCode]
                    ], function (a) {
                        e.resolve(a)
                    }), e.promise()
                }

                function t() {
                    var e = s.Deferred(),
                        a = {
                            "appid": 2144,
                            "floorId": i.smallBannerCode,
                            "count": 10
                        };
                    return p.loadTpp(a, function (a) {
                        e.resolve(a)
                    }), e.promise()
                }
                var o = this,
                    i = y[a];
                s.when(r(), t()).then(function (a, r) {
                    var t, p, l, c = [],
                        u = {};
                    try {
                        t = a[i.hotWordCode].data, t.length
                    } catch (h) {}
                    try {
                        p = a[i.bigBannerCode].data, p && 0 != p.length || (p = [], p.push(g_defaultData.floorBigPic[i.bigBannerIndex]), "TMGJ" == i.id && p.push(g_defaultData.floorBigPic[i.bigBannerIndex + 1]))
                    } catch (h) {}
                    try {
                        c = a[i.slideBannerCode].data || g_defaultData.tmcsSlideBanner
                    } catch (h) {}
                    var m = [1, 2, 3].map(function (e) {
                        return "actTitle_0" + e
                    });
                    p.actTitles = [], m.forEach(function (e) {
                        "string" == typeof p[e] && p[e].trim() && (p.actTitles.push(p[e].trim()), delete p[e])
                    });
                    try {
                        l = r.result || g_defaultData[i.smallBannerName], l.length > parseInt(i.smallNumber, 10) && (l = l.slice(0, i.smallNumber))
                    } catch (h) {
                        l = g_defaultData[i.smallBannerName]
                    }
                    try {
                        var f = a[i.channelCode].data || g_defaultData.channelPic[i.channelCode];
                        f && f.length > 0 && (l = f.concat(l))
                    } catch (h) {}
                    try {
                        u = a[i.floorAtmosCode].data[0]
                    } catch (h) {}
                    d.mmstat(i.goldlog), i.tanxGoldlog && d.mmstat(i.tanxGoldlog);
                    var g = {
                            "switch": !1
                        },
                        b = {
                            "switch": !1
                        };
                    window.g_fpFloorData && window.g_fpFloorData.atmosphere && ("true" === window.g_fpFloorData.atmosphere["switch"] || !0 === window.g_fpFloorData.atmosphere["switch"]) && (g = window.g_fpFloorData.atmosphere), window.g_fpFloorData && window.g_fpFloorData.big_atmosphere && ("true" === window.g_fpFloorData.big_atmosphere["switch"] || !0 === window.g_fpFloorData.big_atmosphere["switch"]) && (b = window.g_fpFloorData.big_atmosphere), !u || "true" !== u["switch"] && !0 !== u["switch"] || (g = u);
                    try {
                        s(e).html(n({
                            "hotWordArr": t,
                            "bigBanner": p,
                            "slideBanner": c,
                            "smallBannerArr": l,
                            "spm": i.spm,
                            "floorId": i.id,
                            "colorType": i.colorType,
                            "hotWordSPM": i.hotWordSPM,
                            "atmosphere": g,
                            "big_atmosphere": b
                        })), "TMCS" == i.id && o.startTMCSSlide(), s(e).css({
                            "opacity": 0
                        }).animate({
                            "opacity": 1
                        }, 200), p.actTitles.length > 1 && o.startActTitleSlide(s(e).find(".act-title-ctn"))
                    } catch (h) {
                        console.error(h)
                    }
                })
            },
            "startTMCSSlide": function () {
                function e() {
                    var r = t.length - 1;
                    o++, o > r && (o = 0), a(o), n = window.setTimeout(e, d)
                }

                function a(e) {
                    t.eq(e).addClass("floor-current-tab").siblings().removeClass("floor-current-tab"), s(".floor-tab-detail").eq(e).css("display", "block").siblings(".floor-tab-detail").css("display", "none")
                }

                function r() {
                    t.hover(function () {
                        n && (clearTimeout(n), i = s(this).prevAll().length, a(i))
                    }, function () {
                        return n = window.setTimeout(e, d), this.blur(), !1
                    })
                }
                var t = s(".floor-tab-head li");
                s(".floor-tab-head li:first").addClass("floor-current-tab"), s(".floor-tab-detail:first").css("display", "block");
                var o = -1,
                    n = null,
                    d = 3e3;
                e(), r()
            },
            "startActTitleSlide": function (e) {
                var a = this,
                    r = e.find(".slide-item").eq(0);
                setTimeout(function () {
                    r.animate({
                        "margin-top": -30
                    }, 300, function () {
                        r.css({
                            "margin-top": 0,
                            "display": "none"
                        }), setTimeout(function () {
                            e.append(r), r.css({
                                "display": "block"
                            })
                        }, 100), a.startActTitleSlide(e)
                    })
                }, 3e3)
            }
        };
    r.exports = z
});
define("zebra-pages/fp5/pc/js/js-xtpl/new-floor-con-render", ["./new-floor-con", "zebra-pages/fp5/pc/js/mods/x-runtime"], function (e, t, a) {
    var n = e("./new-floor-con"),
        r = e("zebra-pages/fp5/pc/js/mods/x-runtime"),
        o = new r(n);
    a.exports = function () {
        return o.render.apply(o, arguments)
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/new-floor-con", function (e, t, a) {
    (a.exports = function (e) {
        function t(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n\t\t  <div class="floor-name floor-img" >\n\t\t\t<img src="', c.line = 5;
            var i = (o = r.floorNameImg) !== a ? o : (o = n.floorNameImg) !== a ? o : e.resolveLooseUp(["floorNameImg"]);
            return t = t.writeEscaped(i), t.data += '" />\n\n\t\t', t
        }

        function a(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n\t\t<i class="color-mark"></i>\n\t\t<div class="floor-name" >\n\t\t\t<div class="floor-title">', c.line = 10;
            var i = (o = r.floorName) !== a ? o : (o = n.floorName) !== a ? o : e.resolveLooseUp(["floorName"]);
            t = t.writeEscaped(i), t.data += '<div class="floor-sub-name">';
            var s = (o = r.subTitle) !== a ? o : (o = n.subTitle) !== a ? o : e.resolveLooseUp(["subTitle"]);
            return t = t.writeEscaped(s), t.data += "</div></div>\n\t\t", t
        }

        function n(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n<div data-spm="', c.line = 17;
            var i = (o = r.tanxSPM) !== a ? o : (o = n.tanxSPM) !== a ? o : e.resolveLooseUp(["tanxSPM"]);
            t = t.writeEscaped(i), t.data += '" style="margin-top:10px;" class="tanx-con-';
            var s = (o = r.tanxId) !== a ? o : (o = n.tanxId) !== a ? o : e.resolveLooseUp(["tanxId"]);
            t = t.writeEscaped(s), t.data += ' full-banner clearfix j_tanxBanner j_LazyloadCon fp-content-loading j_exposureCon">\n\t<a tabindex="-1" class="j_tanxItem" id="tanx-a-', c.line = 18;
            var l = (o = r.tanxId) !== a ? o : (o = n.tanxId) !== a ? o : e.resolveLooseUp(["tanxId"]);
            return t = t.writeEscaped(l), t.data += '">\n\t</a>\n</div>\n', t
        }

        function r(e, r, s) {
            var l = e.data,
                d = e.affix;
            r.data += '\n<div class="floor-line-con color-type-', c.line = 2;
            var p = (o = d.colorType) !== s ? o : (o = l.colorType) !== s ? o : e.resolveLooseUp(["colorType"]);
            r = r.writeEscaped(p), r.data += '" id="J_Floor';
            var u = (o = d.id) !== s ? o : (o = l.id) !== s ? o : e.resolveLooseUp(["id"]);
            r = r.writeEscaped(u), r.data += '">\n\t    ', c.line = 3, c.line = 3;
            var m = (o = d.floorNameImg) !== s ? o : (o = l.floorNameImg) !== s ? o : e.resolveLooseUp(["floorNameImg"]);
            r = h.call(i, e, {
                "params": [m],
                "fn": t,
                "inverse": a
            }, r), r.data += '\n\t</div>\n\t<div class="j_lineBody line-body fp-content-loading" data-goldlog="', c.line = 13;
            var f = (o = d.goldlog) !== s ? o : (o = l.goldlog) !== s ? o : e.resolveLooseUp(["goldlog"]);
            r = r.writeEscaped(f), r.data += '" data-appId="';
            var g = (o = d.bigBannerCode) !== s ? o : (o = l.bigBannerCode) !== s ? o : e.resolveLooseUp(["bigBannerCode"]);
            r = r.writeEscaped(g), r.data += ",";
            var v = (o = d.smallBannerCode) !== s ? o : (o = l.smallBannerCode) !== s ? o : e.resolveLooseUp(["smallBannerCode"]);
            r = r.writeEscaped(v), r.data += ",";
            var b = (o = d.hotWordCode) !== s ? o : (o = l.hotWordCode) !== s ? o : e.resolveLooseUp(["hotWordCode"]);
            r = r.writeEscaped(b), r.data += '">\n\t</div>\n</div>\n', c.line = 16, c.line = 16;
            var x = (o = d.tanxId) !== s ? o : (o = l.tanxId) !== s ? o : e.resolveLooseUp(["tanxId"]),
                y = x;
            if (y) {
                var w = (o = d.tanxId) !== s ? d.tanxId.length : (o = l.tanxId) !== s ? o.length : e.resolveLooseUp(["tanxId", "length"]),
                    _ = w;
                _ = w > 0, y = _
            }
            return r = h.call(i, e, {
                "params": [y],
                "fn": n
            }, r), r.data += "\n", r
        }
        var o, i = this,
            s = i.root,
            l = i.buffer,
            d = i.scope,
            c = (i.runtime, i.name, i.pos),
            p = d.data,
            u = d.affix,
            m = s.nativeCommands,
            f = s.utils,
            g = (f.callFn, f.callCommand, m.range, m.foreach, m.forin, m.each),
            h = (m["with"], m["if"]);
        m.set, m.include, m.parse, m.extend, m.block, m.macro, m["debugger"];
        l.data += "", c.line = 1;
        var v = (o = u.data) !== e ? o : (o = p.data) !== e ? o : d.resolveLooseUp(["data"]);
        return l = g.call(i, d, {
            "params": [v],
            "fn": r
        }, l)
    }).TPL_NAME = a.id || a.name
});
define("zebra-pages/fp5/pc/js/js-xtpl/lift-render", ["./lift", "zebra-pages/fp5/pc/js/mods/x-runtime"], function (e, t, a) {
    var n = e("./lift"),
        r = e("zebra-pages/fp5/pc/js/mods/x-runtime"),
        o = new r(n);
    a.exports = function () {
        return o.render.apply(o, arguments)
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/lift", function (e, t, a) {
    (a.exports = function (e) {
        function t(e, t, a) {
            var r = e.data,
                o = e.affix;
            t.data += '\n    <a data-spm-click="gostr=/tmallfp;locaid=dLift', l.line = 7;
            var i = (n = o.xindex) !== a ? n : (n = r.xindex) !== a ? n : e.resolveLooseUp(["xindex"]);
            t = t.writeEscaped(i), t.data += ';" href="#" target="self" id="J_FloorNav';
            var s = (n = o.id) !== a ? n : (n = r.id) !== a ? n : e.resolveLooseUp(["id"]);
            t = t.writeEscaped(s), t.data += '"\n        class="mui-lift-nav color-type-', l.line = 8;
            var d = (n = o.colorType) !== a ? n : (n = r.colorType) !== a ? n : e.resolveLooseUp(["colorType"]);
            t = t.writeEscaped(d), t.data += '">\n        <div class="mui-lift-nav-name">', l.line = 9;
            var c = (n = o.floorName) !== a ? n : (n = r.floorName) !== a ? n : e.resolveLooseUp(["floorName"]);
            return t = t.writeEscaped(c), t.data += "</div>\n    </a>\n", t
        }

        function a(e, t, a) {
            var r = e.data,
                o = e.affix;
            t.data += '\n    <a data-spm-click="gostr=/tmallfp;locaid=dLift', l.line = 14;
            var i = (n = o.data) !== a ? o.data.length : (n = r.data) !== a ? n.length : e.resolveLooseUp(["data", "length"]),
                s = i;
            return s = i + 1, t = t.writeEscaped(s), t.data += ';" href="#" target="self" id="J_FloorNavPPQJ"\n    class="mui-lift-nav">\n        <div class="mui-lift-nav-name">\u54c1\u724c\u65d7\u8230</div>\n    </a>\n', t
        }
        var n, r = this,
            o = r.root,
            i = r.buffer,
            s = r.scope,
            l = (r.runtime, r.name, r.pos),
            d = s.data,
            c = s.affix,
            p = o.nativeCommands,
            u = o.utils,
            f = (u.callFn, u.callCommand, p.range, p.foreach, p.forin, p.each),
            m = (p["with"], p["if"]);
        p.set, p.include, p.parse, p.extend, p.block, p.macro, p["debugger"];
        i.data += '\n<div class="mui-lift-nav nav-header">\n    \u5bfc\u822a\n</div>\n<div data-spm="fpLift">\n', l.line = 6, l.line = 6;
        var g = (n = c.data) !== e ? n : (n = d.data) !== e ? n : s.resolveLooseUp(["data"]);
        i = f.call(r, s, {
            "params": [g],
            "fn": t
        }, i), i.data += "\n\n", l.line = 13, l.line = 13;
        var h = (n = c.tmallfp_abtest) !== e ? n : (n = d.tmallfp_abtest) !== e ? n : s.resolveLooseUp(["tmallfp_abtest"]),
            v = h;
        v = "B" !== h, i = m.call(r, s, {
            "params": [v],
            "fn": a
        }, i), i.data += '\n\n <a data-spm-click="gostr=/tmallfp;locaid=dLift', l.line = 20;
        var b = (n = c.data) !== e ? c.data.length : (n = d.data) !== e ? n.length : s.resolveLooseUp(["data", "length"]),
            y = b;
        y = b + 2, i = i.writeEscaped(y), i.data += ';" href="#" target="self" id="J_FloorNavCNXH"\n    class="mui-lift-nav">\n    <div class="mui-lift-nav-name">\u731c\u4f60\u559c\u6b22</div>\n</a>\n<a data-spm-click="gostr=/tmallfp;locaid=dLift', l.line = 24;
        var _ = (n = c.data) !== e ? c.data.length : (n = d.data) !== e ? n.length : s.resolveLooseUp(["data", "length"]),
            w = _;
        return w = _ + 3, i = i.writeEscaped(w), i.data += ';" href="#" class="mui-lift-nav nav-back j_navBack">\n    <i class="fp-iconfont">&#xe636;</i>\n    <div>\u9876\u90e8</div>\n</a>\n</div>', i
    }).TPL_NAME = a.id || a.name
});
define("zebra-pages/fp5/pc/js/js-xtpl/new-floor-render", ["./new-floor", "zebra-pages/fp5/pc/js/mods/x-runtime"], function (e, t, a) {
    var n = e("./new-floor"),
        r = e("zebra-pages/fp5/pc/js/mods/x-runtime"),
        o = new r(n);
    a.exports = function () {
        return o.render.apply(o, arguments)
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/new-floor", function (e, t, a) {
    (a.exports = function (e) {
        function t(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n\t<a class="hot-word" href="', j.line = 3;
            var o = (b = r.action) !== a ? b : (b = n.action) !== a ? b : e.resolveLooseUp(["action"]);
            t = t.writeEscaped(o), t.data += '">';
            var i = (b = r.title) !== a ? b : (b = n.title) !== a ? b : e.resolveLooseUp(["title"]);
            return t = t.writeEscaped(i), t.data += "</a>\n\t", t
        }

        function a(e, t, a) {
            e.data, e.affix;
            t.data += "\n  \t", j.line = 9;
            var n;
            n = S.call(x, e, {
                "hash": {
                    "bigBannerClass": "big-banner-con-2"
                }
            }, t), t = t.writeEscaped(n), t.data += "\n\t", j.line = 10;
            var r;
            r = S.call(x, e, {
                "hash": {
                    "lastIndex1": 1,
                    "lastIndex2": 5
                }
            }, t), t = t.writeEscaped(r), t.data += "\n\t", j.line = 11;
            var o;
            return o = S.call(x, e, {
                "hash": {
                    "lastIndex1": 1,
                    "lastIndex2": 5,
                    "count": 6
                }
            }, t), t = t.writeEscaped(o), t.data += "\n\n", t
        }

        function n(e, t, a) {
            e.data, e.affix;
            t.data += "\n\t", j.line = 18;
            var n;
            n = S.call(x, e, {
                "hash": {
                    "bigBannerClass": "big-banner-con-2"
                }
            }, t), t = t.writeEscaped(n), t.data += "\n\t", j.line = 19;
            var r;
            return r = S.call(x, e, {
                "hash": {
                    "lastIndex1": 3,
                    "lastIndex2": 7,
                    "count": 8
                }
            }, t), t = t.writeEscaped(r), t.data += "\n\n", t
        }

        function r(e, t, a) {
            var n = e.data,
                r = e.affix;
            j.line = 13;
            var o = (b = r.floorId) !== a ? b : (b = n.floorId) !== a ? b : e.resolveLooseUp(["floorId"]);
            return "TMGJ" === o
        }

        function o(e, t, a) {
            e.data, e.affix;
            t.data += "\n \t", j.line = 14;
            var n;
            n = S.call(x, e, {
                "hash": {
                    "bigBannerClass": "big-banner-con-1-1",
                    "bigBannerAClass": "full-grid"
                }
            }, t), t = t.writeEscaped(n), t.data += "\n\t", j.line = 15;
            var r;
            return r = S.call(x, e, {
                "hash": {
                    "lastIndex1": 3,
                    "lastIndex2": 7,
                    "count": 8
                }
            }, t), t = t.writeEscaped(r), t.data += "\n\n", t
        }

        function i(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n\t\t\t\t\t<div class="banner-detail">\n\t\t\t\t\t\t<div class="left-title-wrap">\n\t\t\t\t\t\t\t<span class="left-title">', j.line = 32;
            var o = (b = r.lefttitle) !== a ? b : (b = n.lefttitle) !== a ? b : e.resolveLooseUp(["lefttitle"]);
            t = t.writeEscaped(o), t.data += '</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="right-title-wrap">\n\t\t\t\t\t\t\t<div class="right-title-absolute">\n\t\t\t\t\t\t\t\t<span class="right-title">', j.line = 36;
            var i = (b = r.righttitle) !== a ? b : (b = n.righttitle) !== a ? b : e.resolveLooseUp(["righttitle"]);
            t = t.writeEscaped(i), t.data += '</span>\n\t\t\t\t\t\t\t\t<span class="right-title">', j.line = 37;
            var s = (b = r.righttitle1) !== a ? b : (b = n.righttitle1) !== a ? b : e.resolveLooseUp(["righttitle1"]);
            return t = t.writeEscaped(s), t.data += "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t", t
        }

        function s(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n\t\t\t<a class="', j.line = 26;
            var o = (b = r.bigBannerAClass) !== a ? b : (b = n.bigBannerAClass) !== a ? b : e.resolveLooseUp(["bigBannerAClass"]);
            t = t.writeEscaped(o), t.data += '" href="';
            var s = (b = r.action) !== a ? b : (b = n.action) !== a ? b : e.resolveLooseUp(["action"]);
            t = t.writeEscaped(s), t.data += '">\n\t\t\t\t<img src="', j.line = 27;
            var l = (b = r.imgUrl) !== a ? b : (b = n.imgUrl) !== a ? b : e.resolveLooseUp(["imgUrl"]);
            t = t.writeEscaped(l), t.data += '" />\n\t\t\t\t\n\t\t\t\t', j.line = 29, j.line = 29;
            var d = (b = r.lefttitle) !== a ? b : (b = n.lefttitle) !== a ? b : e.resolveLooseUp(["lefttitle"]);
            return t = C.call(x, e, {
                "params": [d],
                "fn": i
            }, t), t.data += '\n\t\t\t\t<div class="detail-wrap">\n\t\t\t\t\t<img class=\'floor-arrow-big\' src="https://img.alicdn.com/tfs/TB1IQBtXaagSKJjy0FbXXa.mVXa-68-68.png" />\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</a>\n\t\t', t
        }

        function l(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<p class="tab-title">', j.line = 57;
            var o = (b = r.title_cn) !== a ? b : (b = n.title_cn) !== a ? b : e.resolveLooseUp(["title_cn"]);
            return t = t.writeEscaped(o), t.data += "</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t", t
        }

        function d(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n\t\t\t\t\t\t\t<div class="floor-tab-detail">\n\t\t\t\t\t\t\t\t<a class="right-detail-a" href="', j.line = 64;
            var o = (b = r.action) !== a ? b : (b = n.action) !== a ? b : e.resolveLooseUp(["action"]);
            t = t.writeEscaped(o), t.data += '">\n\t\t\t\t\t\t\t\t\t<div class="right-detail">\n\t\t\t\t\t\t\t\t\t\t<div class="title-wrap">\n\t\t\t\t\t\t\t\t\t\t\t<img class="cla-icon" src="https://img.alicdn.com/tfs/TB12RqQewMPMeJjy1XdXXasrXXa-23-23.png" />\n\t\t\t\t\t\t\t\t\t\t\t<span class="tab-item-title">', j.line = 68;
            var i = (b = r.titleac) !== a ? b : (b = n.titleac) !== a ? b : e.resolveLooseUp(["titleac"]);
            t = t.writeEscaped(i), t.data += '</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<span class="tab-desp">', j.line = 71;
            var s = (b = r.title) !== a ? b : (b = n.title) !== a ? b : e.resolveLooseUp(["title"]);
            t = t.writeEscaped(s), t.data += '</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<img class="item-img" src="', j.line = 74;
            var l = (b = r.imgUrl) !== a ? b : (b = n.imgUrl) !== a ? b : e.resolveLooseUp(["imgUrl"]);
            return t = t.writeEscaped(l), t.data += '" />\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t', t
        }

        function c(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n\t\t\t<div class="grid two-grid">\n\t\t\t\t<div class="floor-tabs">\n\t\t\t\t\t<ul class="floor-tab-head"> \n\t\t\t\t\t\t', j.line = 55, j.line = 55;
            var o = (b = r.slideBanner) !== a ? b : (b = n.slideBanner) !== a ? b : e.resolveLooseUp(["slideBanner"]);
            t = k.call(x, e, {
                "params": [o],
                "fn": l
            }, t), t.data += '\n\t\t\t\t\t</ul> \n\t\t\t\t\t<div class="floor-tab-content"> \n\t\t\t\t\t\t', j.line = 62, j.line = 62;
            var i = (b = r.slideBanner) !== a ? b : (b = n.slideBanner) !== a ? b : e.resolveLooseUp(["slideBanner"]);
            return t = k.call(x, e, {
                "params": [i],
                "fn": d
            }, t), t.data += "\n\t\t\t\t\t</div> \n\t\t\t\t</div> \n\t\t\t</div>\n\t\t", t
        }

        function p(e, t, a) {
            e.data, e.affix;
            return t.data += " last-1230 ", t
        }

        function u(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n\t\t\t\t\t<a class="grid one-grid color-type-', j.line = 85;
            var o = (b = r.colorType) !== a ? b : (b = n.colorType) !== a ? b : e.resolveLooseUp(["colorType"]);
            t = t.writeEscaped(o), t.data += " ";
            var i = (b = r.xindex) !== a ? b : (b = n.xindex) !== a ? b : e.resolveLooseUp(["xindex"]),
                s = i;
            s = i === ((b = r.lastIndex1) !== a ? b : (b = n.lastIndex1) !== a ? b : e.resolveLooseUp(["lastIndex1"]));
            var l = s;
            if (!l) {
                var d = (b = r.xindex) !== a ? b : (b = n.xindex) !== a ? b : e.resolveLooseUp(["xindex"]),
                    c = d;
                c = d === ((b = r.lastIndex2) !== a ? b : (b = n.lastIndex2) !== a ? b : e.resolveLooseUp(["lastIndex2"])), l = c
            }
            t = C.call(x, e, {
                "params": [l],
                "fn": p
            }, t), t.data += '" href="';
            var u = (b = r.action) !== a ? b : (b = n.action) !== a ? b : e.resolveLooseUp(["action"]);
            t = t.writeEscaped(u), t.data += '">\n\t\t\t\t\t\t<div class="floor-item-content-wrap">\n\t\t\t\t\t\t\t<div class="title">', j.line = 87;
            var f = (b = r.title) !== a ? b : (b = n.title) !== a ? b : e.resolveLooseUp(["title"]);
            t = t.writeEscaped(f), t.data += '</div>\n\t\t\t\t\t\t\t<div class="sub-title">', j.line = 88;
            var m = (b = r.subTitle) !== a ? b : (b = n.subTitle) !== a ? b : e.resolveLooseUp(["subTitle"]);
            t = t.writeEscaped(m), t.data += '</div>\n\t\t\t\t\t\t\t<img src="', j.line = 89;
            var g = (b = r.imgUrl) !== a ? b : (b = n.imgUrl) !== a ? b : e.resolveLooseUp(["imgUrl"]);
            return t = t.writeEscaped(g), t.data += '" />\n\t\t\t\t\t\t\t<div class="item-activity-icon" style="display:none"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t', t
        }

        function f(e, t, a) {
            e.data, e.affix;
            return t.data += " last-1230 ", t
        }

        function m(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n\t\t\t\t\t\t\t\t<div class="floor-price">\uffe5', j.line = 100;
            var o = (b = r.promotionPrice) !== a ? b : (b = n.promotionPrice) !== a ? b : e.resolveLooseUp(["promotionPrice"]);
            return t = t.writeEscaped(o), t.data += "</div>\n\t\t\t\t\t\t\t", t
        }

        function g(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n\t\t\t\t\t<a class="grid one-grid-price ', j.line = 94;
            var o = (b = r.xindex) !== a ? b : (b = n.xindex) !== a ? b : e.resolveLooseUp(["xindex"]),
                i = o;
            i = o === ((b = r.lastIndex1) !== a ? b : (b = n.lastIndex1) !== a ? b : e.resolveLooseUp(["lastIndex1"]));
            var s = i;
            if (!s) {
                var l = (b = r.xindex) !== a ? b : (b = n.xindex) !== a ? b : e.resolveLooseUp(["xindex"]),
                    d = l;
                d = l === ((b = r.lastIndex2) !== a ? b : (b = n.lastIndex2) !== a ? b : e.resolveLooseUp(["lastIndex2"])), s = d
            }
            t = C.call(x, e, {
                "params": [s],
                "fn": f
            }, t), t.data += '" href="';
            var c = (b = r.url) !== a ? b : (b = n.url) !== a ? b : e.resolveLooseUp(["url"]);
            t = t.writeEscaped(c), t.data += '">\n\t\t\t\t\t\t<div class="floor-item-content-wrap">\n\t\t\t\t\t\t<div class="floor-item-tag color-type-', j.line = 96;
            var p = (b = r.colorType) !== a ? b : (b = n.colorType) !== a ? b : e.resolveLooseUp(["colorType"]);
            t = t.writeEscaped(p), t.data += '" style="visibility:hidden">';
            var u = (b = r.tag) !== a ? b : (b = n.tag) !== a ? b : e.resolveLooseUp(["tag"]);
            t = t.writeEscaped(u), t.data += '</div>\n\t\t\t\t\t\t\t<img class="floor-item-img" src="', j.line = 97;
            var g = (b = r.pic) !== a ? b : (b = n.pic) !== a ? b : e.resolveLooseUp(["pic"]);
            t = t.writeEscaped(g), t.data += '" />\n\t\t\t\t\t\t\t<div class="floor-item-title">', j.line = 98;
            var h = (b = r.itemName) !== a ? b : (b = n.itemName) !== a ? b : e.resolveLooseUp(["itemName"]);
            t = t.writeEscaped(h), t.data += "</div>\n\t\t\t\t\t\t\t", j.line = 99, j.line = 99;
            var v = (b = r.promotionPrice) !== a ? b : (b = n.promotionPrice) !== a ? b : e.resolveLooseUp(["promotionPrice"]),
                y = v;
            return y = v > 0, t = C.call(x, e, {
                "params": [y],
                "fn": m
            }, t), t.data += '\n\t\t\t\t\t\t\t<div class="floor-item-reason" style="display:none">\n\t\t\t\t\t\t\t\t<div class="floor-item-reason-content"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="item-activity-icon" style="display:none"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t', t
        }

        function h(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += "\n\t\t\t\t\t", j.line = 84, j.line = 84;
            var o = (b = r.action) !== a ? b : (b = n.action) !== a ? b : e.resolveLooseUp(["action"]),
                i = o;
            if (i) {
                i = (b = r.title) !== a ? b : (b = n.title) !== a ? b : e.resolveLooseUp(["title"])
            }
            return t = C.call(x, e, {
                "params": [i],
                "fn": u,
                "inverse": g
            }, t), t.data += "\n\t\t\t", t
        }

        function v(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += "\n\t\t\t", j.line = 83, j.line = 83;
            var o = (b = r.xindex) !== a ? b : (b = n.xindex) !== a ? b : e.resolveLooseUp(["xindex"]),
                i = o;
            return i = o < ((b = r.count) !== a ? b : (b = n.count) !== a ? b : e.resolveLooseUp(["count"])), t = C.call(x, e, {
                "params": [i],
                "fn": h
            }, t), t.data += "\n\t\t", t
        }
        var b, x = this,
            y = x.root,
            w = x.buffer,
            _ = x.scope,
            j = (x.runtime, x.name, x.pos),
            L = _.data,
            E = _.affix,
            z = y.nativeCommands,
            U = y.utils,
            k = (U.callFn, U.callCommand, z.range, z.foreach, z.forin, z.each),
            C = (z["with"], z["if"]),
            S = z.set;
        z.include, z.parse, z.extend, z.block, z.macro, z["debugger"];
        w.data += '<div class="hot-word-con" data-spm="';
        var T = (b = E.hotWordSPM) !== e ? b : (b = L.hotWordSPM) !== e ? b : _.resolveLooseUp(["hotWordSPM"]);
        w = w.writeEscaped(T), w.data += '">\n\t', j.line = 2, j.line = 2;
        var I = (b = E.hotWordArr) !== e ? b : (b = L.hotWordArr) !== e ? b : _.resolveLooseUp(["hotWordArr"]);
        w = k.call(x, _, {
            "params": [I],
            "fn": t
        }, w), w.data += "\n</div>\n\n\n", j.line = 8, j.line = 8;
        var D = (b = E.floorId) !== e ? b : (b = L.floorId) !== e ? b : _.resolveLooseUp(["floorId"]),
            A = D;
        A = "TMCS" === D, w = C.call(x, _, {
            "params": [A],
            "fn": a,
            "inverse": n,
            "elseIfs": [{
                "test": r,
                "fn": o
            }]
        }, w), w.data += '\n\n<div data-spm="', j.line = 23;
        var B = (b = E.spm) !== e ? b : (b = L.spm) !== e ? b : _.resolveLooseUp(["spm"]);
        w = w.writeEscaped(B), w.data += '">\n\t<div class="', j.line = 24;
        var P = (b = E.bigBannerClass) !== e ? b : (b = L.bigBannerClass) !== e ? b : _.resolveLooseUp(["bigBannerClass"]);
        w = w.writeEscaped(P), w.data += '">\n\t\t', j.line = 25, j.line = 25;
        var q = (b = E.bigBanner) !== e ? b : (b = L.bigBanner) !== e ? b : _.resolveLooseUp(["bigBanner"]);
        w = k.call(x, _, {
            "params": [q],
            "fn": s
        }, w), w.data += '\n\t</div>\n\t\t\n\t<div class="middle-column-con">\n\t\t', j.line = 51, j.line = 51;
        var N = (b = E.slideBanner) !== e ? b : (b = L.slideBanner) !== e ? b : _.resolveLooseUp(["slideBanner"]),
            R = N;
        if (R) {
            var M = (b = E.slideBanner) !== e ? E.slideBanner.length : (b = L.slideBanner) !== e ? b.length : _.resolveLooseUp(["slideBanner", "length"]),
                F = M;
            F = M > 0, R = F
        }
        w = C.call(x, _, {
            "params": [R],
            "fn": c
        }, w), w.data += "\n\t\t", j.line = 82, j.line = 82;
        var X = (b = E.smallBannerArr) !== e ? b : (b = L.smallBannerArr) !== e ? b : _.resolveLooseUp(["smallBannerArr"]);
        return w = k.call(x, _, {
            "params": [X],
            "fn": v
        }, w), w.data += "\n\t</div>\n</div>\n", w
    }).TPL_NAME = a.id || a.name
});
define("zebra-pages/fp5/pc/js/mods/lift", ["mui/jquery/jquery", "mui/babel-polyfill/index", "zebra-pages/fp5/pc/js/mods/util"], function (e, a, r) {
    var s = e("mui/jquery/jquery"),
        t = (e("mui/babel-polyfill/index"), e("zebra-pages/fp5/pc/js/mods/util")),
        n = {
            "node": "",
            "effect": "fade",
            "easing": "ease",
            "duration": 300,
            "frequency": 100,
            "locationDif": 0,
            "when": {
                "type": 1,
                "top": 300,
                "node": "",
                "delay": 1e3
            },
            "changeType": {
                "type": 1,
                "offset": 0
            },
            "beginNormal": {
                "isUsed": !0,
                "offset": .6 * s(window).height()
            },
            "clickOffset": 80,
            "top": {
                "node": "",
                "easing": "ease",
                "duration": 300
            },
            "map": {
                "enable": !1,
                "easing": "ease",
                "duration": 300,
                "curPannelCls": "mui-lift-cur-pannel",
                "curNavCls": "mui-lift-cur-nav",
                "rule": {
                    "": ""
                }
            }
        },
        o = {
            "init": function (e) {
                var a = this;
                a.cfg = s.extend(n, e);
                var a = this;
                if (!a._checkParam()) return !1;
                a._initCxt(), a._when(), a._addEvent()
            },
            "_checkParam": function () {
                var e = this,
                    a = e.cfg,
                    r = !0,
                    t = ["normal", "fade", "zoom", "rotate", "blur", "blink"],
                    n = ["linear", "ease", "ease-in", "ease-out", "ease-in-out"];
                return 0 === s(a.node).length && (r = !1, window.console && window.console.log("can't find node.")), t.includes(a.effect) || (a.effect = "zoom"), n.includes(a.easing) || (a.easing = "ease"), s.isNumeric(a.frequency) || (a.frequency = 100), 2 != a.when.type && 4 != a.when.type || 0 !== s(a.when.node).length || (r = !1), s.isNumeric(a.when.top) || (a.when.top = 300), s.isNumeric(a.when.delay) || (a.when.delay = 3e3), n.includes(a.top.easing) || (a.top.easing = "ease"), s(a.top.node).length, s.isNumeric(a.top.duration) || (a.top.duration = 300), n.includes(a.map.easing) || (a.map.easing = "ease"), s.isNumeric(a.map.duration) || (a.map.duration = 300), a.map.curNavCls || (a.map.curNavCls = "sn-cur-nav"), a.map.curPannelCls || (a.map.curPannelCls = "sn-cur-pannel"), r
            },
            "_initCxt": function () {
                var e = this,
                    a = e.cfg;
                e.rootNode = s(a.node), e.navHeight = e.rootNode.height(), e.navWidth = e.rootNode.width(), e.rootNode.wrapInner('<div class="sn-nav-wrapper"></div>'), e.navNode = s(".sn-nav-wrapper", e.rootNode), e.whenNode = s(a.when.node), e.topNode = s(a.top.node), a.map.enable && (e.navNodes = new s, e.pannelNodes = new s, s.each(a.map.rule, function (a, r) {
                    var t = s(a),
                        n = s(r);
                    t.length && n.length && (e.navNodes = e.navNodes.add(t), e.pannelNodes = e.pannelNodes.add(n))
                }))
            },
            "_when": function () {
                var e = this,
                    a = e.cfg;
                3 == a.when.type && setTimeout(function () {
                    e.show()
                }, a.when.delay || 300)
            },
            "show": function () {
                var e = this;
                e.cfg;
                s(e.rootNode).show(), s(e.navNode).show(300)
            },
            "hide": function () {
                var e = this;
                e.cfg;
                s(e.navNode).hide(300)
            },
            "_addEvent": function () {
                var e = this,
                    a = e.cfg,
                    r = t.buffer(e._scrollCallBack, a.frequency, this);
                s(window).on("scroll resize", function (e) {
                    r()
                }), e.topNode.length > 0 && e.topNode.on("click", function (r) {
                    r.preventDefault(), t.mmstat("/tmallfp.5113.9"), e.scrollWindow(0, 0, a.top.duration, a.top.easing)
                }), a.map.enable && e.navNodes.on("click", function (r) {
                    r.preventDefault();
                    var n = s(this),
                        o = e.navNodes.index(n),
                        i = e.pannelNodes.eq(o),
                        p = i.offset().top + a.clickOffset;
                    t.mmstat("/tmallfp.5113." + (o + 1)), e.scrollWindow(0, p - a.locationDif, a.map.duration, a.map.easing), s("." + a.map.curNavCls).removeClass(a.map.curNavCls), s("." + a.map.curPannelCls).removeClass(a.map.curPannelCls), n.addClass(a.map.curNavCls), i.addClass(a.map.curPannelCls)
                })
            },
            "scrollWindow": function (e, a, r, t) {
                r ? s("html,body").animate({
                    "scrollLeft": e + 1,
                    "scrollTop": a + 1
                }, r, function () {}) : window.scrollTo(e + 1, a + 1)
            },
            "_scrollCallBack": function () {
                var e = this,
                    a = e.cfg,
                    r = 0,
                    t = document.body.scrollTop || document.documentElement && document.documentElement.scrollTop;
                if (3 != a.when.type && (1 == a.when.type && (r = a.when.top), 2 == a.when.type && (r = e.whenNode.offset().top - s(window).height()), 4 == a.when.type && (r = e.whenNode.offset().top), t >= r ? e.show() : e.hide()), a.map.enable) {
                    var n = 999999,
                        o = 0,
                        i = 0,
                        p = 0,
                        d = 999999,
                        c = 0;
                    s(e.pannelNodes).each(function (r, l) {
                        var u, m = s(l),
                            f = m.offset().top;
                        u = 1 === a.changeType.type ? t - f + 150 + s(e.pannelNodes[r > 0 ? r - 1 : 0]).height() / 2 : t - f + a.changeType.offset, u >= 0 && Math.abs(u) <= n && (n = Math.abs(u), o = r), i <= f && (i = f, p = r), d >= f && (d = f, c = r)
                    });
                    var l = e.pannelNodes.eq(p),
                        u = e.pannelNodes.eq(c),
                        m = l.height() + l.offset().top,
                        f = u.offset().top - s(window).height();
                    s("." + a.map.curNavCls).removeClass(a.map.curNavCls), s("." + a.map.curPannelCls).removeClass(a.map.curPannelCls), t < m && t > f + a.beginNormal.offset && (e.navNodes.eq(o).addClass(a.map.curNavCls), e.pannelNodes.eq(o).addClass(a.map.curPannelCls))
                }
                return !0
            },
            "buffer": function (e, a, r) {
                function s() {
                    t && (clearTimeout(t), t = 0), n = +new Date, e.apply(r || this, arguments), o = +new Date
                }
                var t, n = 0,
                    o = 0,
                    a = a || 150;
                return Object.assign(this, function () {
                    !n || o >= n && +new Date - o > a || o < n && +new Date - n > 8 * a ? s() : (t && clearTimeout(t), t = setTimeout(s, a))
                }, {
                    "stop": function () {
                        t && (clearTimeout(t), t = 0)
                    }
                })
            }
        };
    r.exports = o
});
define("zebra-pages/fp5/pc/js/mods/area", ["zebra-pages/fp5/pc/js/js-xtpl/area-render", "mui/jquery/jquery", "zebra-pages/fp5/pc/js/mods/util", "zebra-pages/fp5/pc/js/mods/exposure"], function (e, r, s) {
    var a = e("zebra-pages/fp5/pc/js/js-xtpl/area-render"),
        p = e("mui/jquery/jquery"),
        i = e("zebra-pages/fp5/pc/js/mods/util"),
        o = e("zebra-pages/fp5/pc/js/mods/exposure"),
        t = ".j_areaBody",
        n = "&#xe61f;",
        m = {
            "conSelector": ".j_area",
            "RES_ID_ARR": ["2016030118"],
            "init": function (e) {
                var r = this,
                    s = [];
                try {
                    s = e[r.RES_ID_ARR[0]].data
                } catch (a) {
                    s = []
                }
                if (s && 0 !== s.length) {
                    s.exposureParam && i.send(s.exposureParam);
                    try {
                        r.render({
                            "icon": n,
                            "data": s
                        }), window.g_fpDataLazyload && window.g_fpDataLazyload.addCallback(p(".j_exposureArea")[0], function () {
                            o.exposure(p(".j_exposureArea")[0])
                        }), p("img", t).each(function (e, r) {
                            window.g_fpDataLazyload && window.g_fpDataLazyload.addElements(r)
                        }), p(r.conSelector).css({
                            "opacity": 0
                        }).animate({
                            "opacity": 1
                        }, 200)
                    } catch (a) {}
                }
            },
            "render": function (e) {
                p(t).html(a(e))
            }
        };
    s.exports = m
});
define("zebra-pages/fp5/pc/js/js-xtpl/area-render", ["./area", "zebra-pages/fp5/pc/js/mods/x-runtime"], function (e, t, a) {
    var n = e("./area"),
        r = e("zebra-pages/fp5/pc/js/mods/x-runtime"),
        o = new r(n);
    a.exports = function () {
        return o.render.apply(o, arguments)
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/area", function (e, t, a) {
    (a.exports = function (e) {
        function t(e, t, a) {
            e.data, e.affix;
            return t.data += " last-1230 ", t
        }

        function a(e, t, a) {
            e.data, e.affix;
            return t.data += " last-990 ", t
        }

        function n(e, n, r) {
            var o = e.data,
                s = e.affix;
            n.data += '\n\t\t\t<a aria-label="', u.line = 12;
            var d = (i = s.title) !== r ? i : (i = o.title) !== r ? i : e.resolveLooseUp(["title"]);
            n = n.writeEscaped(d), n.data += '" class="area-item\n\t\t\t', u.line = 13;
            var c = (i = s.xindex) !== r ? i : (i = o.xindex) !== r ? i : e.resolveLooseUp(["xindex"]),
                p = c,
                m = (i = s.data) !== r ? s.data.length : (i = o.data) !== r ? i.length : e.resolveLooseUp(["data", "length"]),
                f = m;
            f = m - 1, p = c === f, n = b.call(l, e, {
                "params": [p],
                "fn": t
            }, n), n.data += "\n\t\t\t", u.line = 14;
            var g = (i = s.xindex) !== r ? i : (i = o.xindex) !== r ? i : e.resolveLooseUp(["xindex"]),
                h = g,
                v = (i = s.data) !== r ? s.data.length : (i = o.data) !== r ? i.length : e.resolveLooseUp(["data", "length"]),
                y = v;
            y = v - 2, h = g === y, n = b.call(l, e, {
                "params": [h],
                "fn": a
            }, n), n.data += '" href="';
            var _ = (i = s.action) !== r ? i : (i = o.action) !== r ? i : e.resolveLooseUp(["action"]);
            n = n.writeEscaped(_), n.data += '">\n\t\t\t\t<img data-ks-lazyload="', u.line = 15;
            var w = (i = s.imgUrl) !== r ? i : (i = o.imgUrl) !== r ? i : e.resolveLooseUp(["imgUrl"]);
            return n = n.writeEscaped(w), n.data += '" src="//g.alicdn.com/s.gif" />\n\t\t\t</a>\n\t\t', n
        }

        function r(e, t, a) {
            var r = e.data,
                o = e.affix;
            t.data += "\n\t\t", u.line = 11, u.line = 11;
            var s = (i = o.xindex) !== a ? i : (i = r.xindex) !== a ? i : e.resolveLooseUp(["xindex"]),
                d = s;
            return d = s < 5, t = b.call(l, e, {
                "params": [d],
                "fn": n
            }, t), t.data += "\n\t", t
        }

        function o(e, t, a) {
            var n = e.data,
                o = e.affix;
            t.data += '\n\t<div class="title-con j_exposureArea" data-code="/tmallfp.5004.2">\n\t\t<span class="vline left"></span>\n\t\t<div class="title-inner-con">\n\t\t\t<i class="fp-iconfont-new">&#xe612;</i>\n\t\t\t<div class="title">', u.line = 6;
            var d = (i = o.data) !== a ? o.data[0].title : (i = n.data) !== a ? null != (s = i[0]) ? s.title : s : e.resolveLooseUp(["data", 0, "title"]);
            t = t.writeEscaped(d), t.data += '</div>\n\t\t</div>\n\t\t<span class="vline right"></span>\n\t</div>\n\t', u.line = 10, u.line = 10;
            var c = (i = o.data) !== a ? i : (i = n.data) !== a ? i : e.resolveLooseUp(["data"]);
            return t = v.call(l, e, {
                "params": [c],
                "fn": r
            }, t), t.data += "\n", t
        }
        var i, s, l = this,
            d = l.root,
            c = l.buffer,
            p = l.scope,
            u = (l.runtime, l.name, l.pos),
            m = p.data,
            f = p.affix,
            g = d.nativeCommands,
            h = d.utils,
            v = (h.callFn, h.callCommand, g.range, g.foreach, g.forin, g.each),
            b = (g["with"], g["if"]);
        g.set, g.include, g.parse, g.extend, g.block, g.macro, g["debugger"];
        c.data += "", u.line = 1, u.line = 1;
        var y = (i = f.data) !== e ? f.data.length : (i = m.data) !== e ? i.length : p.resolveLooseUp(["data", "length"]),
            _ = y;
        return _ = y > 0, c = b.call(l, p, {
            "params": [_],
            "fn": o
        }, c)
    }).TPL_NAME = a.id || a.name
});
define("zebra-pages/fp5/pc/js/mods/activity", ["mui/jquery/jquery", "zebra-pages/fp5/pc/js/js-xtpl/activity-render", "zebra-pages/fp5/pc/js/mods/model", "./exposure"], function (e, r, s) {
    var a = e("mui/jquery/jquery"),
        p = e("zebra-pages/fp5/pc/js/js-xtpl/activity-render"),
        i = e("zebra-pages/fp5/pc/js/mods/model"),
        o = e("./exposure");
    s.exports = {
        "init": function () {
            this.render()
        },
        "render": function () {
            var e = a("#J_ActivityPageList"),
                r = a("#J_ActivityTitleImage").html();
            if (e) {
                var s = [];
                try {
                    s = window.g_defaultData.siteAtmosphere.pages
                } catch (d) {}
                var t = window.g_defaultData.siteAtmosphere.pagesUrl,
                    n = window.g_defaultData.siteAtmosphere.headerLogo,
                    m = window.g_defaultData.siteAtmosphere.verticalOffset,
                    u = window.g_defaultData.siteAtmosphere.tppId;
                window.g_defaultData.siteAtmosphere.isShowPage && i.loadAld({
                    "appID": "0820170606",
                    "tppId": u,
                    "count": 6
                }, function (i) {
                    if ("" + i.success == "true") {
                        e.html(p({
                            "itemData": i,
                            "themeList": s,
                            "pagesUrl": t,
                            "activityTitleImage": r,
                            "headerLogo": n,
                            "verticalOffset": m
                        })), e.show();
                        var u = a(".j_exposureCon", e)[0];
                        window.g_fpDataLazyload && window.g_fpDataLazyload.addCallback(u, function () {
                            o.exposure(u)
                        })
                    }
                }, function () {}, !0)
            }
        }
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/activity-render", ["./activity", "zebra-pages/fp5/pc/js/mods/x-runtime"], function (e, t, a) {
    var n = e("./activity"),
        r = e("zebra-pages/fp5/pc/js/mods/x-runtime"),
        o = new r(n);
    a.exports = function () {
        return o.render.apply(o, arguments)
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/activity", function (e, t, a) {
    (a.exports = function (e) {
        function t(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n            <img class="mask" src="', g.line = 12;
            var o = (l = r.themeList) !== a ? r.themeList[0].maskUrl : (l = n.themeList) !== a ? null != (d = l[0]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 0, "maskUrl"]);
            return t = t.writeEscaped(o), t.data += '" />\n            ', t
        }

        function a(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n            <img class="mask" src="', g.line = 20;
            var o = (l = r.themeList) !== a ? r.themeList[1].maskUrl : (l = n.themeList) !== a ? null != (d = l[1]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 1, "maskUrl"]);
            return t = t.writeEscaped(o), t.data += '" />\n            ', t
        }

        function n(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n            <img class="mask" src="', g.line = 28;
            var o = (l = r.themeList) !== a ? r.themeList[4].maskUrl : (l = n.themeList) !== a ? null != (d = l[4]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 4, "maskUrl"]);
            return t = t.writeEscaped(o), t.data += '" />\n            ', t
        }

        function r(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n            <img class="mask" src="', g.line = 38;
            var o = (l = r.themeList) !== a ? r.themeList[2].maskUrl : (l = n.themeList) !== a ? null != (d = l[2]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 2, "maskUrl"]);
            return t = t.writeEscaped(o), t.data += '" />\n            ', t
        }

        function o(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n            <img class="mask" src="', g.line = 46;
            var o = (l = r.themeList) !== a ? r.themeList[3].maskUrl : (l = n.themeList) !== a ? null != (d = l[3]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 3, "maskUrl"]);
            return t = t.writeEscaped(o), t.data += '" />\n            ', t
        }

        function i(e, t, a) {
            var n = e.data,
                r = e.affix;
            t.data += '\n            <img class="mask" src="', g.line = 54;
            var o = (l = r.themeList) !== a ? r.themeList[5].maskUrl : (l = n.themeList) !== a ? null != (d = l[5]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 5, "maskUrl"]);
            return t = t.writeEscaped(o), t.data += '" />\n            ', t
        }

        function s(e, s, c) {
            var u = e.data,
                m = e.affix;
            s.data += '\n<div class="page-list" >\n    <a class="page-title" style="background: url(', g.line = 5;
            var f = (l = m.headerLogo) !== c ? l : (l = u.headerLogo) !== c ? l : e.resolveLooseUp(["headerLogo"]);
            s = s.writeEscaped(f), s.data += ") center ";
            var h = (l = m.verticalOffset) !== c ? l : (l = u.verticalOffset) !== c ? l : e.resolveLooseUp(["verticalOffset"]);
            s = s.writeEscaped(h), s.data += ' no-repeat;background-size:300px 65px;height:105px" href="';
            var b = (l = m.pagesUrl) !== c ? l : (l = u.pagesUrl) !== c ? l : e.resolveLooseUp(["pagesUrl"]);
            s = s.writeEscaped(b), s.data += '"></a>\n    <div class="group-wrapper">\n        <a data-spm="d1" class="page-item first-page left-bottom-shadow" href="', g.line = 7;
            var v = (l = m.itemList) !== c ? m.itemList[0].clickUrl : (l = u.itemList) !== c ? null != (d = l[0]) ? d.clickUrl : d : e.resolveLooseUp(["itemList", 0, "clickUrl"]);
            s = s.writeEscaped(v), s.data += '" style="color:';
            var y = (l = m.themeList) !== c ? m.themeList[0].titleColor : (l = u.themeList) !== c ? null != (d = l[0]) ? d.titleColor : d : e.resolveLooseUp(["themeList", 0, "titleColor"]);
            s = s.writeEscaped(y), s.data += ";background-image:url(";
            var w = (l = m.themeList) !== c ? m.themeList[0].imgUrl : (l = u.themeList) !== c ? null != (d = l[0]) ? d.imgUrl : d : e.resolveLooseUp(["themeList", 0, "imgUrl"]);
            s = s.writeEscaped(w), s.data += ');">\n            <em class="page-name">', g.line = 8;
            var j = (l = m.itemList) !== c ? m.itemList[0].title : (l = u.itemList) !== c ? null != (d = l[0]) ? d.title : d : e.resolveLooseUp(["itemList", 0, "title"]);
            s = s.writeEscaped(j), s.data += '</em>\n            <div class="page-benefit"><span style="background:', g.line = 9;
            var x = (l = m.themeList) !== c ? m.themeList[0].backgroundColor : (l = u.themeList) !== c ? null != (d = l[0]) ? d.backgroundColor : d : e.resolveLooseUp(["themeList", 0, "backgroundColor"]);
            s = s.writeEscaped(x), s.data += ';">';
            var z = (l = m.itemList) !== c ? m.itemList[0].subtitle : (l = u.itemList) !== c ? null != (d = l[0]) ? d.subtitle : d : e.resolveLooseUp(["itemList", 0, "subtitle"]);
            s = s.writeEscaped(z), s.data += '</span></div>\n            <img  class="item-pic" src="', g.line = 10;
            var S = (l = m.itemList) !== c ? m.itemList[0].picPngUrl : (l = u.itemList) !== c ? null != (d = l[0]) ? d.picPngUrl : d : e.resolveLooseUp(["itemList", 0, "picPngUrl"]);
            s = s.writeEscaped(S), s.data += '_250x250q90.jpg" width="180" height="180">\n            ', g.line = 11, g.line = 11;
            var k = (l = m.themeList) !== c ? m.themeList[0].maskUrl : (l = u.themeList) !== c ? null != (d = l[0]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 0, "maskUrl"]);
            s = _.call(p, e, {
                "params": [k],
                "fn": t
            }, s), s.data += '\n        </a>\n        <a data-spm="d2" class="page-item bottom-shadow" href="', g.line = 15;
            var E = (l = m.itemList) !== c ? m.itemList[1].clickUrl : (l = u.itemList) !== c ? null != (d = l[1]) ? d.clickUrl : d : e.resolveLooseUp(["itemList", 1, "clickUrl"]);
            s = s.writeEscaped(E), s.data += '" style="color:';
            var L = (l = m.themeList) !== c ? m.themeList[1].titleColor : (l = u.themeList) !== c ? null != (d = l[1]) ? d.titleColor : d : e.resolveLooseUp(["themeList", 1, "titleColor"]);
            s = s.writeEscaped(L), s.data += ";background-image:url(";
            var T = (l = m.themeList) !== c ? m.themeList[1].imgUrl : (l = u.themeList) !== c ? null != (d = l[1]) ? d.imgUrl : d : e.resolveLooseUp(["themeList", 1, "imgUrl"]);
            s = s.writeEscaped(T), s.data += ')">\n            <em class="page-name">', g.line = 16;
            var C = (l = m.itemList) !== c ? m.itemList[1].title : (l = u.itemList) !== c ? null != (d = l[1]) ? d.title : d : e.resolveLooseUp(["itemList", 1, "title"]);
            s = s.writeEscaped(C), s.data += '</em>\n            <div class="page-benefit"><span style="background:', g.line = 17;
            var D = (l = m.themeList) !== c ? m.themeList[1].backgroundColor : (l = u.themeList) !== c ? null != (d = l[1]) ? d.backgroundColor : d : e.resolveLooseUp(["themeList", 1, "backgroundColor"]);
            s = s.writeEscaped(D), s.data += ';">';
            var I = (l = m.itemList) !== c ? m.itemList[1].subtitle : (l = u.itemList) !== c ? null != (d = l[1]) ? d.subtitle : d : e.resolveLooseUp(["itemList", 1, "subtitle"]);
            s = s.writeEscaped(I), s.data += '</span></div>\n            <img  class="item-pic horizontal" src="', g.line = 18;
            var q = (l = m.itemList) !== c ? m.itemList[1].picPngUrl : (l = u.itemList) !== c ? null != (d = l[1]) ? d.picPngUrl : d : e.resolveLooseUp(["itemList", 1, "picPngUrl"]);
            s = s.writeEscaped(q), s.data += '_160x160q90.jpg" width="130" height="130">\n            ', g.line = 19, g.line = 19;
            var A = (l = m.themeList) !== c ? m.themeList[1].maskUrl : (l = u.themeList) !== c ? null != (d = l[1]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 1, "maskUrl"]);
            s = _.call(p, e, {
                "params": [A],
                "fn": a
            }, s), s.data += '\n        </a>\n        <a data-spm="d5" class="page-item bottom-shadow" href="', g.line = 23;
            var P = (l = m.itemList) !== c ? m.itemList[4].clickUrl : (l = u.itemList) !== c ? null != (d = l[4]) ? d.clickUrl : d : e.resolveLooseUp(["itemList", 4, "clickUrl"]);
            s = s.writeEscaped(P), s.data += '" style="color:';
            var R = (l = m.themeList) !== c ? m.themeList[4].titleColor : (l = u.themeList) !== c ? null != (d = l[4]) ? d.titleColor : d : e.resolveLooseUp(["themeList", 4, "titleColor"]);
            s = s.writeEscaped(R), s.data += ";background-image:url(";
            var U = (l = m.themeList) !== c ? m.themeList[4].imgUrl : (l = u.themeList) !== c ? null != (d = l[4]) ? d.imgUrl : d : e.resolveLooseUp(["themeList", 4, "imgUrl"]);
            s = s.writeEscaped(U), s.data += ')">\n            <em class="page-name">', g.line = 24;
            var N = (l = m.itemList) !== c ? m.itemList[4].title : (l = u.itemList) !== c ? null != (d = l[4]) ? d.title : d : e.resolveLooseUp(["itemList", 4, "title"]);
            s = s.writeEscaped(N), s.data += '</em>\n            <div class="page-benefit"><span style="background:', g.line = 25;
            var B = (l = m.themeList) !== c ? m.themeList[4].backgroundColor : (l = u.themeList) !== c ? null != (d = l[4]) ? d.backgroundColor : d : e.resolveLooseUp(["themeList", 4, "backgroundColor"]);
            s = s.writeEscaped(B), s.data += ';">';
            var M = (l = m.itemList) !== c ? m.itemList[4].subtitle : (l = u.itemList) !== c ? null != (d = l[4]) ? d.subtitle : d : e.resolveLooseUp(["itemList", 4, "subtitle"]);
            s = s.writeEscaped(M), s.data += '</span></div>\n            <img  class="item-pic horizontal" src="', g.line = 26;
            var F = (l = m.itemList) !== c ? m.itemList[4].picPngUrl : (l = u.itemList) !== c ? null != (d = l[4]) ? d.picPngUrl : d : e.resolveLooseUp(["itemList", 4, "picPngUrl"]);
            s = s.writeEscaped(F), s.data += '_160x160q90.jpg" width="130" height="130">\n            ', g.line = 27, g.line = 27;
            var O = (l = m.themeList) !== c ? m.themeList[4].maskUrl : (l = u.themeList) !== c ? null != (d = l[4]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 4, "maskUrl"]);
            s = _.call(p, e, {
                "params": [O],
                "fn": n
            }, s), s.data += '\n        </a>\n    </div>\n    <div class="group-wrapper">\n        <a data-spm="d3" class="page-item first-page bottom-shadow" href="', g.line = 33;
            var X = (l = m.itemList) !== c ? m.itemList[2].clickUrl : (l = u.itemList) !== c ? null != (d = l[2]) ? d.clickUrl : d : e.resolveLooseUp(["itemList", 2, "clickUrl"]);
            s = s.writeEscaped(X), s.data += '" style="color:';
            var H = (l = m.themeList) !== c ? m.themeList[2].titleColor : (l = u.themeList) !== c ? null != (d = l[2]) ? d.titleColor : d : e.resolveLooseUp(["themeList", 2, "titleColor"]);
            s = s.writeEscaped(H), s.data += ";background-image:url(";
            var W = (l = m.themeList) !== c ? m.themeList[2].imgUrl : (l = u.themeList) !== c ? null != (d = l[2]) ? d.imgUrl : d : e.resolveLooseUp(["themeList", 2, "imgUrl"]);
            s = s.writeEscaped(W), s.data += ');">\n            <em class="page-name">', g.line = 34;
            var V = (l = m.itemList) !== c ? m.itemList[2].title : (l = u.itemList) !== c ? null != (d = l[2]) ? d.title : d : e.resolveLooseUp(["itemList", 2, "title"]);
            s = s.writeEscaped(V), s.data += '</em>\n            <div class="page-benefit"><span style="background:', g.line = 35;
            var J = (l = m.themeList) !== c ? m.themeList[2].backgroundColor : (l = u.themeList) !== c ? null != (d = l[2]) ? d.backgroundColor : d : e.resolveLooseUp(["themeList", 2, "backgroundColor"]);
            s = s.writeEscaped(J), s.data += ';">';
            var G = (l = m.itemList) !== c ? m.itemList[2].subtitle : (l = u.itemList) !== c ? null != (d = l[2]) ? d.subtitle : d : e.resolveLooseUp(["itemList", 2, "subtitle"]);
            s = s.writeEscaped(G), s.data += '</span></div>\n            <img  class="item-pic" src="', g.line = 36;
            var K = (l = m.itemList) !== c ? m.itemList[2].picPngUrl : (l = u.itemList) !== c ? null != (d = l[2]) ? d.picPngUrl : d : e.resolveLooseUp(["itemList", 2, "picPngUrl"]);
            s = s.writeEscaped(K), s.data += '_250x250q90.jpg" width="180" height="180">\n            ', g.line = 37, g.line = 37;
            var Q = (l = m.themeList) !== c ? m.themeList[2].maskUrl : (l = u.themeList) !== c ? null != (d = l[2]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 2, "maskUrl"]);
            s = _.call(p, e, {
                "params": [Q],
                "fn": r
            }, s), s.data += '\n        </a>\n        <a data-spm="d4" class="page-item right-bottom-shadow" href="', g.line = 41;
            var Y = (l = m.itemList) !== c ? m.itemList[3].clickUrl : (l = u.itemList) !== c ? null != (d = l[3]) ? d.clickUrl : d : e.resolveLooseUp(["itemList", 3, "clickUrl"]);
            s = s.writeEscaped(Y), s.data += '" style="color:';
            var $ = (l = m.themeList) !== c ? m.themeList[3].titleColor : (l = u.themeList) !== c ? null != (d = l[3]) ? d.titleColor : d : e.resolveLooseUp(["themeList", 3, "titleColor"]);
            s = s.writeEscaped($), s.data += ";background-image:url(";
            var Z = (l = m.themeList) !== c ? m.themeList[3].imgUrl : (l = u.themeList) !== c ? null != (d = l[3]) ? d.imgUrl : d : e.resolveLooseUp(["themeList", 3, "imgUrl"]);
            s = s.writeEscaped(Z), s.data += ')">\n            <em class="page-name">', g.line = 42;
            var ee = (l = m.itemList) !== c ? m.itemList[3].title : (l = u.itemList) !== c ? null != (d = l[3]) ? d.title : d : e.resolveLooseUp(["itemList", 3, "title"]);
            s = s.writeEscaped(ee), s.data += '</em>\n            <div class="page-benefit"><span style="background:', g.line = 43;
            var te = (l = m.themeList) !== c ? m.themeList[3].backgroundColor : (l = u.themeList) !== c ? null != (d = l[3]) ? d.backgroundColor : d : e.resolveLooseUp(["themeList", 3, "backgroundColor"]);
            s = s.writeEscaped(te), s.data += ';">';
            var ae = (l = m.itemList) !== c ? m.itemList[3].subtitle : (l = u.itemList) !== c ? null != (d = l[3]) ? d.subtitle : d : e.resolveLooseUp(["itemList", 3, "subtitle"]);
            s = s.writeEscaped(ae), s.data += '</span></div>\n            <img  class="item-pic horizontal" src="', g.line = 44;
            var ne = (l = m.itemList) !== c ? m.itemList[3].picPngUrl : (l = u.itemList) !== c ? null != (d = l[3]) ? d.picPngUrl : d : e.resolveLooseUp(["itemList", 3, "picPngUrl"]);
            s = s.writeEscaped(ne), s.data += '_160x160q90.jpg" width="130" height="130">\n            ', g.line = 45, g.line = 45;
            var re = (l = m.themeList) !== c ? m.themeList[3].maskUrl : (l = u.themeList) !== c ? null != (d = l[3]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 3, "maskUrl"]);
            s = _.call(p, e, {
                "params": [re],
                "fn": o
            }, s), s.data += '\n        </a>\n        <a data-spm="d6" class="page-item right-bottom-shadow" href="', g.line = 49;
            var oe = (l = m.itemList) !== c ? m.itemList[5].clickUrl : (l = u.itemList) !== c ? null != (d = l[5]) ? d.clickUrl : d : e.resolveLooseUp(["itemList", 5, "clickUrl"]);
            s = s.writeEscaped(oe), s.data += '" style="color:';
            var ie = (l = m.themeList) !== c ? m.themeList[5].titleColor : (l = u.themeList) !== c ? null != (d = l[5]) ? d.titleColor : d : e.resolveLooseUp(["themeList", 5, "titleColor"]);
            s = s.writeEscaped(ie), s.data += ";background-image:url(";
            var se = (l = m.themeList) !== c ? m.themeList[5].imgUrl : (l = u.themeList) !== c ? null != (d = l[5]) ? d.imgUrl : d : e.resolveLooseUp(["themeList", 5, "imgUrl"]);
            s = s.writeEscaped(se), s.data += ')">\n            <em class="page-name">', g.line = 50;
            var le = (l = m.itemList) !== c ? m.itemList[5].title : (l = u.itemList) !== c ? null != (d = l[5]) ? d.title : d : e.resolveLooseUp(["itemList", 5, "title"]);
            s = s.writeEscaped(le), s.data += '</em>\n            <div class="page-benefit"><span style="background:', g.line = 51;
            var de = (l = m.themeList) !== c ? m.themeList[5].backgroundColor : (l = u.themeList) !== c ? null != (d = l[5]) ? d.backgroundColor : d : e.resolveLooseUp(["themeList", 5, "backgroundColor"]);
            s = s.writeEscaped(de), s.data += ';">';
            var ce = (l = m.itemList) !== c ? m.itemList[5].subtitle : (l = u.itemList) !== c ? null != (d = l[5]) ? d.subtitle : d : e.resolveLooseUp(["itemList", 5, "subtitle"]);
            s = s.writeEscaped(ce), s.data += '</span></div>\n            <img  class="item-pic horizontal" src="', g.line = 52;
            var pe = (l = m.itemList) !== c ? m.itemList[5].picPngUrl : (l = u.itemList) !== c ? null != (d = l[5]) ? d.picPngUrl : d : e.resolveLooseUp(["itemList", 5, "picPngUrl"]);
            s = s.writeEscaped(pe), s.data += '_160x160q90.jpg" width="130" height="130">\n            ', g.line = 53, g.line = 53;
            var ue = (l = m.themeList) !== c ? m.themeList[5].maskUrl : (l = u.themeList) !== c ? null != (d = l[5]) ? d.maskUrl : d : e.resolveLooseUp(["themeList", 5, "maskUrl"]);
            return s = _.call(p, e, {
                "params": [ue],
                "fn": i
            }, s), s.data += "\n        </a>\n    </div>\n</div>\n", s
        }
        var l, d, c, p = this,
            u = p.root,
            m = p.buffer,
            f = p.scope,
            g = (p.runtime, p.name, p.pos),
            h = f.data,
            b = f.affix,
            v = u.nativeCommands,
            y = u.utils,
            _ = (y.callFn, y.callCommand, v.range, v.foreach, v.forin, v.each, v["with"], v["if"]),
            w = v.set;
        v.include, v.parse, v.extend, v.block, v.macro, v["debugger"];
        m.data += "";
        var j, x = (l = b.itemData) !== e ? b.itemData.data[0].contents : (l = h.itemData) !== e ? null != (d = l.data) ? null != (c = d[0]) ? c.contents : c : d : f.resolveLooseUp(["itemData", "data", 0, "contents"]);
        j = w.call(p, f, {
            "hash": {
                "itemList": x
            }
        }, m), m = m.writeEscaped(j), m.data += '\n<div class="j_exposureCon" data-gold-key-prefix="', g.line = 2;
        var z = (l = b.itemData) !== e ? b.itemData.goldKeyPrefix : (l = h.itemData) !== e ? l.goldKeyPrefix : f.resolveLooseUp(["itemData", "goldKeyPrefix"]);
        m = m.writeEscaped(z), m.data += '" data-gold-key-suffix="';
        var S = (l = b.itemData) !== e ? b.itemData.goldKeySuffix : (l = h.itemData) !== e ? l.goldKeySuffix : f.resolveLooseUp(["itemData", "goldKeySuffix"]);
        m = m.writeEscaped(S), m.data += '" data-algorithm-log="';
        var k = (l = b.itemData) !== e ? b.itemData.algorithmLog : (l = h.itemData) !== e ? l.algorithmLog : f.resolveLooseUp(["itemData", "algorithmLog"]);
        m = m.writeEscaped(k), m.data += '"></div>\n', g.line = 3, g.line = 3;
        var E = (l = b.itemList) !== e ? l : (l = h.itemList) !== e ? l : f.resolveLooseUp(["itemList"]),
            L = E;
        if (L) {
            var T = (l = b.itemList) !== e ? b.itemList.length : (l = h.itemList) !== e ? l.length : f.resolveLooseUp(["itemList", "length"]),
                C = T;
            C = T >= 6, L = C
        }
        return m = _.call(p, f, {
            "params": [L],
            "fn": s
        }, m)
    }).TPL_NAME = a.id || a.name
});
define("zebra-pages/fp5/pc/js/mods/cyclone", ["mui/jquery/jquery", "zebra-pages/fp5/pc/js/js-xtpl/cyclone-render", "zebra-pages/fp5/pc/js/mods/util", "zebra-pages/fp5/pc/js/mods/model", "zebra-pages/fp5/pc/js/mods/storage"], function (e, a, r) {
    var s = e("mui/jquery/jquery"),
        t = e("zebra-pages/fp5/pc/js/js-xtpl/cyclone-render"),
        o = (e("zebra-pages/fp5/pc/js/mods/util"), e("zebra-pages/fp5/pc/js/mods/model"), e("zebra-pages/fp5/pc/js/mods/storage")),
        n = "tmall-cyclone-atmosphere",
        i = "background-color: rgba(0, 0, 0, 0);";
    r.exports = {
        "init": function () {
            var e = this;
            if (window.g_defaultData.cycloneEntry.isUse && !(location.href.indexOf("disableCyclone=true") > 0)) {
                var a = e.checkNeedShowCyclone(),
                    r = [];
                r.push(window.g_defaultData.cycloneEntry), e.render(r, a)
            }
        },
        "checkNeedShowCyclone": function () {
            try {
                var e = window.g_defaultData.cycloneEntry.frequency,
                    a = Date.parse(new Date);
                if (0 === e) return !1;
                e || (e = 6);
                var r = o.get(n);
                if (o.set(n, a), location.href.indexOf("forceCyclone=true") < 0 && r && a - r < 36e5 * e) return !1
            } catch (s) {}
            return !0
        },
        "render": function (e, a) {
            function r() {
                0 == p ? (window.goldlog && window.goldlog.record("/tmallfp.cyclone.autoClose", "OTHER", "", "H1482418995"), o.closeCyclone(e)) : setTimeout(function () {
                    p--, s(".close-seconds").text(p + "\u79d2"), r()
                }, 1e3)
            }
            var o = this;
            if (s("body").css({
                    "background-image": "url(" + e[0].backgroundUrl + ")",
                    "background-repeat": "no-repeat",
                    "background-color": e[0].backgroundColor,
                    "background-position": "center top"
                }), s("#header").css("cssText", i), s(".main-nav").css("cssText", i + ";border-width: 0px"), s(".inner-con2").css("cssText", "background-color: white;border-style: solid;border-width: 0px 0px 1.5px;border-color: #FF0036;height:34.5px"), s("#content").css("cssText", i), s(".banner-con").css("cssText", i), s(".main-banner").css("cssText", i), s(".banner-con.loading").css("cssText", i), s(".main-banner.slider-pannel").css("cssText", i), !a) return o.changeMallSearch(), void("white" === window.g_defaultData.cycloneEntry.searchFontColor && setTimeout(function () {
                s(".mallSearch-input input").addClass("input-white"), s("#mallSearch .hot-query li a").addClass("input-white"), s(".s-combobox-placeholder").addClass("input-white"), o.changeLogo()
            }, 1e3));
            var n = t({
                "data": e
            });
            s("#site-nav").after(n), s(".cyclone-con").slideDown(1e3), s(".cyclone-closeWrap").on("click", function () {
                window.goldlog && window.goldlog.record("/tmallfp.cyclone.clickClose", "CLK", "", "H1483342516"), o.closeCyclone(e)
            });
            var p = e[0].duration;
            p || (p = 5), r()
        },
        "changeMallSearch": function () {
            "white" === window.g_defaultData.cycloneEntry.searchFontColor && (s("#mallSearch button").css({
                "background-color": "white",
                "color": "#FF0036"
            }), s(".mallSearch-form").addClass("mallSearch-form2"), s(".s-combobox-placeholder").css({
                "color": "white"
            }), s(".mallSearch-input").css({
                "background-color": "rgba(0, 0, 0, 0.35)"
            }), s(".mallSearch-input input").addClass("input-white"), s("#mallSearch .hot-query li a").addClass("input-white"), s(".s-combobox-placeholder").addClass("input-white"))
        },
        "changeLogo": function () {
            var e = window.g_defaultData.cycloneEntry.logoUrl,
                a = s(".j_logo");
            if (e) s(a).html('<img src="' + e + '" style="margin: 1px auto;display:block" width="240px" height="130px">');
            else {
                var r = s(".tmall-logo-img");
                s(r).hide();
                var t = s(".j_doodleCon", a);
                s(".j_doodle", a);
                s(t).hide().fadeIn(300)
            }
        },
        "closeCyclone": function (e) {
            var a = this;
            location.href.indexOf("forceShow=true") > 0 || (s(".cyclone-control").hide(), s(".cyclone-direct").fadeOut(), s("#header").css("cssText", i + "margin-top:0px !important;"), s(".cyclone-con").slideUp(1e3, function () {
                a.changeMallSearch(), a.changeLogo(), s(".tmall-head-img").fadeOut()
            }))
        }
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/cyclone-render", ["./cyclone", "zebra-pages/fp5/pc/js/mods/x-runtime"], function (e, t, a) {
    var n = e("./cyclone"),
        r = e("zebra-pages/fp5/pc/js/mods/x-runtime"),
        o = new r(n);
    a.exports = function () {
        return o.render.apply(o, arguments)
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/cyclone", function (e, t, a) {
    (a.exports = function (e) {
        function t(e, t, n) {
            var r = e.data,
                o = e.affix;
            t.data += '\n    <div class="j_cyclone cyclone-con j_exposureCon" style="display:none" data-code="/tmallfp.cyclone.show" data-spm="cyclone">\n        <div class="cyclone-control">\n            <span class="close-seconds"></span>\n            <div class="cyclone-closeWrap">\u5173\u95ed</div>\n        </div>\n\n        <a class="cyclone-direct" href="', s.line = 8;
            var i = (a = o.itemUrl) !== n ? a : (a = r.itemUrl) !== n ? a : e.resolveLooseUp(["itemUrl"]);
            t = t.writeEscaped(i), t.data += '" style="background-image: url(\'';
            var l = (a = o.itemImageUrl) !== n ? a : (a = r.itemImageUrl) !== n ? a : e.resolveLooseUp(["itemImageUrl"]);
            return t = t.writeEscaped(l), t.data += "');\"></a>\n    </div>\n\n     <div class='cyclone-img'> \n            <image class=\"tmall-head-img\" src='//img.alicdn.com/tfs/TB1P5yYSVXXXXaRXXXXXXXXXXXX-1612-912.png'/>\n        </div>\n", t
        }
        var a, n = this,
            r = n.root,
            o = n.buffer,
            i = n.scope,
            s = (n.runtime, n.name, n.pos),
            l = i.data,
            d = i.affix,
            c = r.nativeCommands,
            p = r.utils,
            u = (p.callFn, p.callCommand, c.range, c.foreach, c.forin, c.each);
        c["with"], c["if"], c.set, c.include, c.parse, c.extend, c.block, c.macro, c["debugger"];
        o.data += "", s.line = 1;
        var f = (a = d.data) !== e ? a : (a = l.data) !== e ? a : i.resolveLooseUp(["data"]);
        return o = u.call(n, i, {
            "params": [f],
            "fn": t
        }, o)
    }).TPL_NAME = a.id || a.name
});
define("zebra-pages/fp5/pc/js/mods/brand-activity", ["zebra-pages/fp5/pc/js/js-xtpl/brand-activity-render", "mui/jquery/jquery", "zebra-pages/fp5/pc/js/mods/util", "zebra-pages/fp5/pc/js/mods/exposure"], function (e, r, a) {
    var s = e("zebra-pages/fp5/pc/js/js-xtpl/brand-activity-render"),
        p = e("mui/jquery/jquery"),
        i = (e("zebra-pages/fp5/pc/js/mods/util"), e("zebra-pages/fp5/pc/js/mods/exposure"), ".j_brandActivityBody"),
        o = {
            "conSelector": ".j_brandActivity",
            "init": function () {
                if (0 !== p(i).length) {
                    var e = window.g_defaultData.cycloneEntry.banners;
                    if (e && 0 !== e.length) try {
                        this.render({
                            "banners": e
                        }), p("img", i).each(function (e, r) {
                            window.g_fpDataLazyload && window.g_fpDataLazyload.addElements(r)
                        })
                    } catch (r) {
                        console.error(r)
                    }
                }
            },
            "render": function (e) {
                p(i).html(s(e))
            }
        };
    a.exports = o
});
define("zebra-pages/fp5/pc/js/js-xtpl/brand-activity-render", ["./brand-activity", "zebra-pages/fp5/pc/js/mods/x-runtime"], function (e, t, a) {
    var n = e("./brand-activity"),
        r = e("zebra-pages/fp5/pc/js/mods/x-runtime"),
        o = new r(n);
    a.exports = function () {
        return o.render.apply(o, arguments)
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/brand-activity", function (e, t, a) {
    (a.exports = function (e) {
        function t(e, t, a) {
            e.data, e.affix;
            return t.data += " last-1230 ", t
        }

        function a(e, t, a) {
            e.data, e.affix;
            return t.data += " last-990 ", t
        }

        function n(e, n, r) {
            var s = e.data,
                l = e.affix;
            n.data += '\n\t\t\t<a aria-label="', c.line = 4;
            var d = (o = l.title) !== r ? o : (o = s.title) !== r ? o : e.resolveLooseUp(["title"]);
            n = n.writeEscaped(d), n.data += '" class="brandActivity-item\n\t\t\t', c.line = 5;
            var p = (o = l.xindex) !== r ? o : (o = s.xindex) !== r ? o : e.resolveLooseUp(["xindex"]),
                u = p,
                m = (o = l.banners) !== r ? l.banners.length : (o = s.banners) !== r ? o.length : e.resolveLooseUp(["banners", "length"]),
                f = m;
            f = m - 1, u = p === f, n = h.call(i, e, {
                "params": [u],
                "fn": t
            }, n), n.data += "\n\t\t\t", c.line = 6;
            var g = (o = l.xindex) !== r ? o : (o = s.xindex) !== r ? o : e.resolveLooseUp(["xindex"]),
                v = g,
                b = (o = l.banners) !== r ? l.banners.length : (o = s.banners) !== r ? o.length : e.resolveLooseUp(["banners", "length"]),
                y = b;
            y = b - 2, v = g === y, n = h.call(i, e, {
                "params": [v],
                "fn": a
            }, n), n.data += '" href="';
            var _ = (o = l.action) !== r ? o : (o = s.action) !== r ? o : e.resolveLooseUp(["action"]);
            n = n.writeEscaped(_), n.data += '">\n\t\t\t\t<img data-ks-lazyload="', c.line = 7;
            var w = (o = l.imgUrl) !== r ? o : (o = s.imgUrl) !== r ? o : e.resolveLooseUp(["imgUrl"]);
            return n = n.writeEscaped(w), n.data += '" src="//g.alicdn.com/s.gif"/>\n\t\t\t</a>\n\t\t', n
        }

        function r(e, t, a) {
            var r = e.data,
                s = e.affix;
            t.data += "\n\t\t", c.line = 3, c.line = 3;
            var l = (o = s.xindex) !== a ? o : (o = r.xindex) !== a ? o : e.resolveLooseUp(["xindex"]),
                d = l;
            return d = l < 3, t = h.call(i, e, {
                "params": [d],
                "fn": n
            }, t), t.data += "\n\t", t
        }
        var o, i = this,
            s = i.root,
            l = i.buffer,
            d = i.scope,
            c = (i.runtime, i.name, i.pos),
            p = d.data,
            u = d.affix,
            m = s.nativeCommands,
            f = s.utils,
            g = (f.callFn, f.callCommand, m.range, m.foreach, m.forin, m.each),
            h = (m["with"], m["if"]);
        m.set, m.include, m.parse, m.extend, m.block, m.macro, m["debugger"];
        l.data += '<div class="j_exposureCon" data-code="/tmallfp.6004.4">\n\t', c.line = 2, c.line = 2;
        var v = (o = u.banners) !== e ? o : (o = p.banners) !== e ? o : d.resolveLooseUp(["banners"]);
        return l = g.call(i, d, {
            "params": [v],
            "fn": r
        }, l), l.data += "\n<div>\n\n", l
    }).TPL_NAME = a.id || a.name
});
define("zebra-pages/fp5/pc/js/mods/new-user-gift", ["zebra-pages/fp5/pc/js/js-xtpl/new-user-gift-render", "mui/jquery/jquery", "zebra-pages/fp5/pc/js/mods/util", "zebra-pages/fp5/pc/js/mods/exposure", "zebra-pages/fp5/pc/js/mods/model"], function (e, a, r) {
    var t = e("zebra-pages/fp5/pc/js/js-xtpl/new-user-gift-render"),
        n = e("mui/jquery/jquery"),
        o = (e("zebra-pages/fp5/pc/js/mods/util"), e("zebra-pages/fp5/pc/js/mods/exposure"), e("zebra-pages/fp5/pc/js/mods/model"), ".j_newUserGiftBody"),
        s = {
            "conSelector": ".j_newUserGift",
            "init": function () {
                window.g_defaultData.newUserGiftSwitch;
                return
            },
            "render": function (e) {
                e.img && e.url && n(o).html(t(e))
            }
        };
    r.exports = s
});
define("zebra-pages/fp5/pc/js/js-xtpl/new-user-gift-render", ["./new-user-gift", "zebra-pages/fp5/pc/js/mods/x-runtime"], function (e, t, a) {
    var n = e("./new-user-gift"),
        r = e("zebra-pages/fp5/pc/js/mods/x-runtime"),
        o = new r(n);
    a.exports = function () {
        return o.render.apply(o, arguments)
    }
});
define("zebra-pages/fp5/pc/js/js-xtpl/new-user-gift", function (e, t, a) {
    (a.exports = function (e) {
        var t, a = this,
            n = a.root,
            r = a.buffer,
            o = a.scope,
            i = (a.runtime, a.name, a.pos),
            s = o.data,
            l = o.affix,
            d = n.nativeCommands,
            c = n.utils;
        c.callFn, c.callCommand, d.range, d.foreach, d.forin, d.each, d["with"], d["if"], d.set, d.include, d.parse, d.extend, d.block, d.macro, d["debugger"];
        r.data += '\n<a data-spm="2018001" href="', i.line = 2;
        var p = (t = l.url) !== e ? t : (t = s.url) !== e ? t : o.resolveLooseUp(["url"]);
        r = r.writeEscaped(p), r.data += '"  class="j_newUserGiftLink">\n\t<img src="', i.line = 3;
        var u = (t = l.img) !== e ? t : (t = s.img) !== e ? t : o.resolveLooseUp(["img"]);
        return r = r.writeEscaped(u), r.data += '" class="j_newGiftImg"/>\n</a>\n\n', r
    }).TPL_NAME = a.id || a.name
});