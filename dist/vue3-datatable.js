import { defineComponent as te, onBeforeUnmount as Pe, onMounted as be, openBlock as u, createElementBlock as c, createElementVNode as s, withModifiers as W, normalizeClass as d, Fragment as x, createCommentVNode as y, ref as S, watch as N, createVNode as D, renderList as E, normalizeStyle as ge, createTextVNode as me, toDisplayString as I, withDirectives as H, vModelText as ee, vModelSelect as ye, vShow as He, createStaticVNode as Oe, useSlots as Te, computed as J, vModelCheckbox as Ve, unref as Ue, renderSlot as Ee } from "vue";
const Ie = { class: "bh-filter-menu bh-absolute bh-z-[1] bh-bg-white bh-shadow-md bh-rounded-md bh-top-full bh-right-0 bh-w-32 bh-mt-1" }, Ge = ["onClick"], Ke = /* @__PURE__ */ te({
  __name: "column-filter",
  props: ["column"],
  emits: ["close", "filterChange"],
  setup(_, { emit: M }) {
    const v = _;
    Pe(() => {
      document.removeEventListener("click", t);
    }), be(() => {
      document.addEventListener("click", t);
    });
    const b = M, t = () => {
      b("close");
    }, p = (h) => {
      v.column.condition = h, h === "" && (v.column.value = ""), b("filterChange", v.column);
    };
    return (h, o) => (u(), c("div", Ie, [
      s("div", {
        class: "bh-text-[13px] bh-font-normal bh-rounded bh-overflow-hidden",
        onClick: W(t, ["stop"])
      }, [
        s("button", {
          type: "button",
          class: d({ active: v.column.condition === "" }),
          onClick: o[0] || (o[0] = (a) => p(""))
        }, "No filter", 2),
        v.column.type === "string" ? (u(), c(x, { key: 0 }, [
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "contain" }),
            onClick: o[1] || (o[1] = (a) => p("contain"))
          }, "Contain", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "not_contain" }),
            onClick: o[2] || (o[2] = (a) => p("not_contain"))
          }, "Not contain", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "equal" }),
            onClick: o[3] || (o[3] = (a) => p("equal"))
          }, "Equal", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "not_equal" }),
            onClick: o[4] || (o[4] = (a) => p("not_equal"))
          }, "Not equal", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "start_with" }),
            onClick: o[5] || (o[5] = (a) => p("start_with"))
          }, "Starts with", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "end_with" }),
            onClick: o[6] || (o[6] = (a) => p("end_with"))
          }, "Ends with", 2)
        ], 64)) : v.column.type === "number" ? (u(), c(x, { key: 1 }, [
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "equal" }),
            onClick: o[7] || (o[7] = (a) => p("equal"))
          }, "Equal", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "not_equal" }),
            onClick: o[8] || (o[8] = (a) => p("not_equal"))
          }, "Not Equal", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "greater_than" }),
            onClick: o[9] || (o[9] = (a) => p("greater_than"))
          }, "Greater than", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "greater_than_equal" }),
            onClick: o[10] || (o[10] = (a) => p("greater_than_equal"))
          }, "Greater than or equal", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "less_than" }),
            onClick: o[11] || (o[11] = (a) => p("less_than"))
          }, "Less than", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "less_than_equal" }),
            onClick: o[12] || (o[12] = (a) => p("less_than_equal"))
          }, "Less than or equal", 2)
        ], 64)) : v.column.type === "date" ? (u(), c(x, { key: 2 }, [
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "equal" }),
            onClick: o[13] || (o[13] = (a) => p("equal"))
          }, "Equal", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "not_equal" }),
            onClick: o[14] || (o[14] = (a) => p("not_equal"))
          }, "Not equal", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "greater_than" }),
            onClick: o[15] || (o[15] = (a) => p("greater_than"))
          }, "Greater than", 2),
          s("button", {
            type: "button",
            class: d({ active: v.column.condition === "less_than" }),
            onClick: o[16] || (o[16] = (a) => p("less_than"))
          }, "Less than", 2)
        ], 64)) : y("", !0),
        s("button", {
          type: "button",
          class: d({ active: v.column.condition === "is_null" }),
          onClick: o[17] || (o[17] = (a) => p("is_null"))
        }, "Is null", 2),
        s("button", {
          type: "button",
          class: d({ active: v.column.condition === "is_not_null" }),
          onClick: o[18] || (o[18] = (a) => p("is_not_null"))
        }, "Not null", 2)
      ], 8, Ge)
    ]));
  }
}), X = (_, M) => {
  const v = _.__vccOpts || _;
  for (const [b, t] of M)
    v[b] = t;
  return v;
}, Je = {}, We = {
  version: "1.1",
  viewBox: "0 0 17 12",
  xmlns: "http://www.w3.org/2000/svg"
}, Ye = /* @__PURE__ */ s("g", {
  fill: "none",
  "fill-rule": "evenodd"
}, [
  /* @__PURE__ */ s("g", {
    transform: "translate(-9 -11)",
    fill: "currentColor",
    "fill-rule": "nonzero"
  }, [
    /* @__PURE__ */ s("path", { d: "m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" })
  ])
], -1), Qe = [
  Ye
];
function Xe(_, M) {
  return u(), c("svg", We, Qe);
}
const Ce = /* @__PURE__ */ X(Je, [["render", Xe]]), Ze = {}, je = {
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  stroke: "currentColor",
  "stroke-width": "3",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "css-i6dzq1"
}, et = /* @__PURE__ */ s("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}, null, -1), tt = [
  et
];
function lt(_, M) {
  return u(), c("svg", je, tt);
}
const nt = /* @__PURE__ */ X(Ze, [["render", lt]]), ot = {}, st = {
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  stroke: "currentColor",
  "stroke-width": "1.5",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "css-i6dzq1"
}, it = /* @__PURE__ */ s("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }, null, -1), at = [
  it
];
function rt(_, M) {
  return u(), c("svg", st, at);
}
const ut = /* @__PURE__ */ X(ot, [["render", rt]]), ct = { key: "hdrrow" }, ht = { class: "bh-checkbox" }, dt = ["onClick"], vt = {
  width: "16",
  height: "16",
  viewBox: "0 0 14 14",
  fill: "none"
}, ft = {
  key: 0,
  class: "bh-filter bh-relative"
}, pt = ["onUpdate:modelValue"], bt = ["onUpdate:modelValue"], gt = ["onUpdate:modelValue"], mt = ["onUpdate:modelValue"], yt = /* @__PURE__ */ s("option", { value: void 0 }, "All", -1), Ct = /* @__PURE__ */ s("option", { value: !0 }, "True", -1), kt = /* @__PURE__ */ s("option", { value: !1 }, "False", -1), _t = [
  yt,
  Ct,
  kt
], wt = ["onClick"], pe = /* @__PURE__ */ te({
  __name: "column-header",
  props: ["all", "currentSortColumn", "currentSortDirection", "isOpenFilter", "isFooter", "checkAll"],
  emits: ["selectAll", "sortChange", "filterChange", "toggleFilterMenu"],
  setup(_, { emit: M }) {
    const v = S(null), b = _, t = M;
    return N(() => b.checkAll, () => {
      v.value && (v.value.indeterminate = b.checkAll !== 0 ? !b.checkAll : !1, v.value.checked = b.checkAll);
    }), (h, o) => (u(), c("tr", ct, [
      b.all.hasCheckbox ? (u(), c("th", {
        key: "chkall",
        class: d(["bh-w-px", {
          "bh-sticky bh-bg-blue-light bh-z-[1]": b.all.stickyHeader || b.all.stickyFirstColumn,
          "bh-top-0": b.all.stickyHeader,
          "bh-left-0": b.all.stickyFirstColumn
        }])
      }, [
        s("div", ht, [
          s("input", {
            ref_key: "selectedAll",
            ref: v,
            type: "checkbox",
            onClick: o[0] || (o[0] = W((a) => t("selectAll", a.target.checked), ["stop"]))
          }, null, 512),
          s("div", null, [
            D(Ce, { class: "check" }),
            D(nt, { class: "intermediate" })
          ])
        ])
      ], 2)) : y("", !0),
      (u(!0), c(x, null, E(b.all.columns, (a, q) => (u(), c(x, null, [
        a.hide ? y("", !0) : (u(), c("th", {
          key: a.field,
          class: d(["bh-select-none bh-z-[1]", [
            b.all.sortable && a.sort ? "bh-cursor-pointer" : "",
            q === 0 && b.all.stickyFirstColumn ? "bh-sticky bh-left-0 bh-bg-blue-light" : "",
            b.all.hasCheckbox && q === 0 && b.all.stickyFirstColumn ? "bh-left-[52px]" : ""
          ]]),
          style: ge({
            width: a.width,
            "min-width": a.minWidth,
            "max-width": a.maxWidth
          })
        }, [
          s("div", {
            class: d(["bh-flex bh-items-center", [a.headerClass ? a.headerClass : ""]]),
            onClick: (C) => b.all.sortable && a.sort && t("sortChange", a.field)
          }, [
            me(I(a.title) + " ", 1),
            b.all.sortable && a.sort ? (u(), c("span", {
              key: 0,
              class: d(["bh-ml-3 bh-sort bh-flex bh-items-center", [b.currentSortColumn, b.currentSortDirection]])
            }, [
              (u(), c("svg", vt, [
                s("polygon", {
                  points: "3.11,6.25 10.89,6.25 7,1.75 ",
                  fill: "currentColor",
                  class: d(["bh-text-black/20", [_.currentSortColumn === a.field && _.currentSortDirection === "asc" ? "!bh-text-primary" : ""]])
                }, null, 2),
                s("polygon", {
                  points: "7,12.25 10.89,7.75 3.11,7.75 ",
                  fill: "currentColor",
                  class: d(["bh-text-black/20", [_.currentSortColumn === a.field && _.currentSortDirection === "desc" ? "!bh-text-primary" : ""]])
                }, null, 2)
              ]))
            ], 2)) : y("", !0)
          ], 10, dt),
          b.all.columnFilter && !b.isFooter ? (u(), c(x, { key: 0 }, [
            a.filter ? (u(), c("div", ft, [
              a.type === "string" ? H((u(), c("input", {
                key: 0,
                "onUpdate:modelValue": (C) => a.value = C,
                type: "text",
                class: "bh-form-control",
                onKeyup: o[1] || (o[1] = (C) => t("filterChange"))
              }, null, 40, pt)), [
                [
                  ee,
                  a.value,
                  void 0,
                  { trim: !0 }
                ]
              ]) : y("", !0),
              a.type === "number" ? H((u(), c("input", {
                key: 1,
                "onUpdate:modelValue": (C) => a.value = C,
                type: "number",
                class: "bh-form-control",
                onKeyup: o[2] || (o[2] = (C) => t("filterChange"))
              }, null, 40, bt)), [
                [
                  ee,
                  a.value,
                  void 0,
                  {
                    number: !0,
                    trim: !0
                  }
                ]
              ]) : a.type === "date" ? H((u(), c("input", {
                key: 2,
                "onUpdate:modelValue": (C) => a.value = C,
                type: "date",
                class: "bh-form-control",
                onChange: o[3] || (o[3] = (C) => t("filterChange"))
              }, null, 40, gt)), [
                [ee, a.value]
              ]) : a.type === "bool" ? H((u(), c("select", {
                key: 3,
                "onUpdate:modelValue": (C) => a.value = C,
                class: "bh-form-control",
                onChange: o[4] || (o[4] = (C) => t("filterChange")),
                onClick: o[5] || (o[5] = (C) => b.isOpenFilter = null)
              }, _t, 40, mt)), [
                [ye, a.value]
              ]) : y("", !0),
              a.type !== "bool" ? (u(), c("button", {
                key: 4,
                type: "button",
                onClick: W((C) => t("toggleFilterMenu", a), ["stop"])
              }, [
                D(ut, { class: "bh-w-4" })
              ], 8, wt)) : y("", !0),
              H(D(Ke, {
                column: a,
                type: a.type,
                onClose: o[6] || (o[6] = (C) => t("toggleFilterMenu", null)),
                onFilterChange: o[7] || (o[7] = (C) => t("filterChange"))
              }, null, 8, ["column", "type"]), [
                [He, b.isOpenFilter === a.field]
              ])
            ])) : y("", !0)
          ], 64)) : y("", !0)
        ], 6))
      ], 64))), 256))
    ]));
  }
}), St = {}, $t = {
  width: "84",
  height: "84",
  viewBox: "0 0 24 24",
  class: "bh-loader bh-text-primary"
}, xt = /* @__PURE__ */ Oe('<circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle>', 3), Ft = [
  xt
];
function Mt(_, M) {
  return u(), c("svg", $t, Ft);
}
const qt = /* @__PURE__ */ X(St, [["render", Mt]]), Lt = { class: "bh-datatable bh-antialiased bh-relative bh-text-black bh-text-sm bh-font-normal" }, zt = ["onClick"], At = { class: "bh-checkbox" }, Bt = ["value"], Nt = ["innerHTML"], Dt = { key: 1 }, Rt = ["colspan"], Pt = ["colspan"], Ht = /* @__PURE__ */ s("div", { class: "bh-skeleton-box bh-h-8" }, null, -1), Ot = [
  Ht
], Tt = {
  key: 0,
  class: "bh-absolute bh-inset-0 bh-bg-blue-light/50 bh-grid bh-place-content-center"
}, Vt = { class: "bh-flex bh-items-center bh-flex-wrap bh-flex-col sm:bh-flex-row bh-gap-4" }, Ut = { class: "bh-pagination-info bh-flex bh-items-center" }, Et = { class: "bh-mr-2" }, It = ["value"], Gt = { class: "bh-pagination-number sm:bh-ml-auto bh-inline-flex bh-items-center bh-space-x-1" }, Kt = ["innerHTML"], Jt = {
  key: 1,
  "aria-hidden": "true",
  width: "14",
  height: "14",
  viewBox: "0 0 16 16"
}, Wt = /* @__PURE__ */ s("g", {
  fill: "currentColor",
  "fill-rule": "evenodd"
}, [
  /* @__PURE__ */ s("path", { d: "M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" }),
  /* @__PURE__ */ s("path", { d: "M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" })
], -1), Yt = [
  Wt
], Qt = ["innerHTML"], Xt = {
  key: 1,
  "aria-hidden": "true",
  width: "14",
  height: "14",
  viewBox: "0 0 16 16"
}, Zt = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
}, null, -1), jt = [
  Zt
], el = ["onClick"], tl = ["innerHTML"], ll = {
  key: 1,
  "aria-hidden": "true",
  width: "14",
  height: "14",
  viewBox: "0 0 16 16"
}, nl = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8L4.646 2.354a.5.5 0 0 1 0-.708z"
}, null, -1), ol = [
  nl
], sl = ["innerHTML"], il = {
  key: 1,
  "aria-hidden": "true",
  width: "14",
  height: "14",
  viewBox: "0 0 16 16"
}, al = /* @__PURE__ */ s("g", {
  fill: "currentColor",
  "fill-rule": "evenodd"
}, [
  /* @__PURE__ */ s("path", { d: "M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8L3.646 2.354a.5.5 0 0 1 0-.708z" }),
  /* @__PURE__ */ s("path", { d: "M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8L7.646 2.354a.5.5 0 0 1 0-.708z" })
], -1), rl = [
  al
], fl = /* @__PURE__ */ te({
  __name: "custom-table",
  props: {
    loading: { type: Boolean, default: !1 },
    isServerMode: { type: Boolean, default: !1 },
    skin: { default: "bh-table-striped bh-table-hover" },
    totalRows: { default: 0 },
    rows: { default: () => [] },
    columns: { default: () => [] },
    hasCheckbox: { type: Boolean, default: !1 },
    search: { default: "" },
    columnChooser: { type: Boolean, default: !1 },
    page: { default: 1 },
    pageSize: { default: 10 },
    pageSizeOptions: { default: () => [10, 20, 30, 50, 100] },
    showPageSize: { type: Boolean, default: !0 },
    rowClass: { default: [] },
    cellClass: { default: [] },
    sortable: { type: Boolean, default: !1 },
    sortColumn: { default: "id" },
    sortDirection: { default: "asc" },
    columnFilter: { type: Boolean, default: !1 },
    pagination: { type: Boolean, default: !0 },
    showNumbers: { type: Boolean, default: !0 },
    showNumbersCount: { default: 5 },
    showFirstPage: { type: Boolean, default: !0 },
    showLastPage: { type: Boolean, default: !0 },
    firstArrow: { default: "" },
    lastArrow: { default: "" },
    nextArrow: { default: "" },
    previousArrow: { default: "" },
    paginationInfo: { default: "Showing {0} to {1} of {2} entries" },
    noDataContent: { default: "No data available" },
    stickyHeader: { type: Boolean, default: !1 },
    height: { default: "500px" },
    stickyFirstColumn: { type: Boolean, default: !1 },
    cloneHeaderInFooter: { type: Boolean, default: !1 },
    selectRowOnClick: { type: Boolean, default: !1 }
  },
  emits: ["change", "sortChange", "searchChange", "pageChange", "pageSizeChange", "rowSelect", "filterChange", "rowClick", "rowDBClick"],
  setup(_, { expose: M, emit: v }) {
    var he;
    const b = Te(), t = _;
    for (const l of t.columns || []) {
      const e = ((he = l.type) == null ? void 0 : he.toLowerCase()) || "string";
      l.type = e, l.isUnique = l.isUnique !== void 0 ? l.isUnique : !1, l.hide = l.hide !== void 0 ? l.hide : !1, l.filter = l.filter !== void 0 ? l.filter : !0, l.search = l.search !== void 0 ? l.search : !0, l.sort = l.sort !== void 0 ? l.sort : !0, l.html = l.html !== void 0 ? l.html : !1, l.condition = !e || e === "string" ? "contain" : "equal";
    }
    const p = S([]), h = S(t.page), o = S(t.pagination ? t.pageSize : t.rows.length), a = t.pageSize, q = S(t.sortColumn), C = t.sortColumn, R = S(t.sortDirection), ke = t.sortDirection, F = S(t.totalRows), $ = S([]), Z = S(null), O = S(t.loading), T = S(t.search), _e = JSON.parse(JSON.stringify(t.columns)), V = S(null), le = S(null);
    let G = S(0);
    const we = S(230);
    be(() => {
      B();
    });
    const L = v;
    M({
      reset() {
        ze();
      },
      getSelectedRows() {
        return Ae();
      },
      getColumnFilters() {
        return Be();
      },
      clearSelectedRows() {
        return Ne();
      },
      selectRow(l) {
        ue(l);
      },
      unselectRow(l) {
        ce(l);
      },
      isRowSelected(l) {
        return Q(l);
      }
    });
    const Se = (l, ...e) => l.replace(/{(\d+)}/g, (i, g) => typeof e[g] < "u" ? e[g] : i), w = J(() => {
      const l = t.columns.find((e) => e.isUnique);
      return (l == null ? void 0 : l.field) || null;
    }), A = J(() => {
      const l = o.value < 1 ? 1 : Math.ceil(F.value / o.value);
      return Math.max(l || 0, 1);
    }), ne = J(() => (h.value - 1) * o.value + 1), oe = J(() => {
      const l = h.value * o.value;
      return F.value >= l ? l : F.value;
    }), $e = J(() => {
      let l, e;
      return typeof t.showNumbersCount < "u" && t.showNumbersCount < A.value ? (l = Math.max(h.value - Math.floor(t.showNumbersCount / 2), 1), e = l + t.showNumbersCount - 1, e > A.value && (e = A.value, l = e - t.showNumbersCount + 1)) : (l = 1, e = A.value), Array.from(Array(e + 1 - l).keys()).map((k) => l + k);
    }), B = () => {
      var K, de;
      let l = [], e = t.rows || [];
      if (t.isServerMode)
        F.value = t.totalRows || 0, l = e;
      else {
        if ((K = t.columns) == null || K.forEach((n) => {
          n.filter && (n.value !== void 0 && n.value !== null && n.value !== "" || n.condition === "is_null" || n.condition == "is_not_null") && (n.type === "string" ? (n.value && !n.condition && (n.condition = "contain"), n.condition === "contain" ? e = e.filter((r) => {
            var m;
            return (m = f(r, n.field)) == null ? void 0 : m.toString().toLowerCase().includes(n.value.toLowerCase());
          }) : n.condition === "not_contain" ? e = e.filter((r) => {
            var m;
            return !((m = f(r, n.field)) != null && m.toString().toLowerCase().includes(n.value.toLowerCase()));
          }) : n.condition === "equal" ? e = e.filter((r) => {
            var m;
            return ((m = f(r, n.field)) == null ? void 0 : m.toString().toLowerCase()) === n.value.toLowerCase();
          }) : n.condition === "not_equal" ? e = e.filter((r) => {
            var m;
            return ((m = f(r, n.field)) == null ? void 0 : m.toString().toLowerCase()) !== n.value.toLowerCase();
          }) : n.condition == "start_with" ? e = e.filter((r) => {
            var m;
            return ((m = f(r, n.field)) == null ? void 0 : m.toString().toLowerCase().indexOf(n.value.toLowerCase())) === 0;
          }) : n.condition == "end_with" && (e = e.filter((r) => {
            var m;
            return ((m = f(r, n.field)) == null ? void 0 : m.toString().toLowerCase().substr(n.value.length * -1)) === n.value.toLowerCase();
          }))) : n.type === "number" ? (n.value && !n.condition && (n.condition = "equal"), n.condition === "equal" ? e = e.filter((r) => f(r, n.field) && parseFloat(f(r, n.field)) === parseFloat(n.value)) : n.condition === "not_equal" ? e = e.filter((r) => f(r, n.field) && parseFloat(f(r, n.field)) !== parseFloat(n.value)) : n.condition === "greater_than" ? e = e.filter((r) => f(r, n.field) && parseFloat(f(r, n.field)) > parseFloat(n.value)) : n.condition === "greater_than_equal" ? e = e.filter((r) => f(r, n.field) && parseFloat(f(r, n.field)) >= parseFloat(n.value)) : n.condition === "less_than" ? e = e.filter((r) => f(r, n.field) && parseFloat(f(r, n.field)) < parseFloat(n.value)) : n.condition === "less_than_equal" && (e = e.filter((r) => f(r, n.field) && parseFloat(f(r, n.field)) <= parseFloat(n.value)))) : n.type === "date" ? (n.value && !n.condition && (n.condition = "equal"), n.condition === "equal" ? e = e.filter((r) => f(r, n.field) && Y(f(r, n.field)) === n.value) : n.condition === "not_equal" ? e = e.filter((r) => f(r, n.field) && Y(f(r, n.field)) !== n.value) : n.condition === "greater_than" ? e = e.filter((r) => f(r, n.field) && Y(f(r, n.field)) > n.value) : n.condition === "less_than" && (e = e.filter((r) => f(r, n.field) && Y(f(r, n.field)) < n.value))) : n.type === "bool" && (e = e.filter((r) => f(r, n.field) === n.value)), n.condition === "is_null" ? (e = e.filter((r) => f(r, n.field) == null || f(r, n.field) == ""), n.value = "") : n.condition === "is_not_null" && (n.value = "", e = e.filter((r) => f(r, n.field))));
        }), T.value && e.length) {
          let n = [];
          const r = (t.columns || []).filter((m) => m.search && !m.hide).map((m) => m.field);
          for (var i = 0; i < e.length; i++)
            for (var g = 0; g < r.length; g++)
              if ((de = f(e[i], r[g])) != null && de.toString().toLowerCase().includes(T.value.toLowerCase())) {
                n.push(e[i]);
                break;
              }
          e = n;
        }
        var k = new Intl.Collator(void 0, {
          numeric: !0,
          sensitivity: "base"
        });
        const De = R.value === "desc" ? -1 : 1;
        e.sort((n, r) => {
          var ve, fe;
          const m = (ve = q.value) == null ? void 0 : ve.split(".").reduce((P, j) => P == null ? void 0 : P[j], n), Re = (fe = q.value) == null ? void 0 : fe.split(".").reduce((P, j) => P == null ? void 0 : P[j], r);
          return k.compare(m, Re) * De;
        }), F.value = e.length || 0, l = e.slice(ne.value - 1, oe.value);
      }
      p.value = l || [];
    };
    N(
      () => t.loading,
      () => {
        O.value = t.loading;
      }
    );
    const se = (l) => {
      l ? V.value === l.field ? V.value = null : V.value = l.field : V.value = null;
    }, xe = () => {
      if (h.value == 1)
        return !1;
      h.value--;
    }, Fe = (l) => {
      h.value = l;
    }, Me = () => {
      if (h.value >= A.value)
        return !1;
      h.value++;
    };
    N(() => h.value, () => {
      z(!1), t.isServerMode ? U("page") : (B(), L("pageChange", h.value));
    }), N(() => t.rows, () => {
      t.isServerMode || (h.value = 1), z(!1), B();
    }), N(() => o.value, () => {
      z(!1), t.isServerMode ? h.value === 1 ? U("pagesize", !0) : h.value = 1 : (h.value = 1, B(), L("pageSizeChange", o.value));
    });
    const ie = (l) => {
      let e = "asc";
      l == q.value && R.value === "asc" && (e = "desc");
      let i = (h.value - 1) * o.value, g = o.value;
      q.value = l, R.value = e, z(!1), B(), t.isServerMode ? U("sort") : L("sortChange", { offset: i, limit: g, field: l, direction: e });
    }, ae = (l) => {
      Z.value = l.length && p.value.length && l.length === p.value.length;
      const e = p.value.filter((i, g) => $.value.includes(w.value ? i[w.value] : g));
      L("rowSelect", e);
    };
    N(() => $.value, ae);
    const z = (l) => {
      l ? $.value = p.value.map((e, i) => w.value ? e[w.value] : i) : $.value = [];
    }, re = () => {
      z(!1), t.isServerMode ? h.value === 1 ? U("filter", !0) : h.value = 1 : (h.value = 1, B(), L("filterChange", t.columns));
    };
    N(() => t.search, () => {
      z(!1), t.isServerMode ? h.value === 1 ? U("search", !0) : h.value = 1 : (h.value = 1, B(), L("searchChange", T.value));
    }), N(
      () => t.search,
      () => {
        T.value = t.search;
      }
    );
    const f = (l, e) => e == null ? void 0 : e.split(".").reduce((i, g) => i == null ? void 0 : i[g], l), Y = (l) => {
      try {
        if (!l)
          return "";
        const e = new Date(l), i = e.getDate(), g = e.getMonth() + 1;
        return e.getFullYear() + "-" + (g > 9 ? g : "0" + g) + "-" + (i > 9 ? i : "0" + i);
      } catch {
      }
      return "";
    }, qe = (l, e) => {
      G.value++, G.value === 1 ? le.value = setTimeout(() => {
        G.value = 0, t.selectRowOnClick && (Q(e) ? ce(e) : ue(e), ae($.value)), L("rowClick", l);
      }, we.value) : G.value === 2 && (clearTimeout(le.value), G.value = 0, L("rowDBClick", l));
    }, U = (l, e = !1) => {
      if (t.isServerMode) {
        Le();
        const i = {
          current_page: e ? 1 : h.value,
          pagesize: o.value,
          offset: (h.value - 1) * o.value,
          sort_column: q.value,
          sort_direction: R.value,
          search: T.value,
          column_filters: t.columns,
          change_type: l
        };
        L("change", i);
      }
    }, Le = () => {
      for (let l = 0; l < t.columns.length; l++) {
        let e = t.columns[l];
        e.filter && (e.value !== void 0 && e.value !== null && e.value !== "" || e.condition === "is_null" || e.condition === "is_not_null") && (e.type === "string" && e.value && !e.condition && (e.condition = "contain"), e.type === "number" && e.value && !e.condition && (e.condition = "equal"), e.type === "date" && e.value && !e.condition && (e.condition = "equal"));
      }
    }, ze = () => {
      z(!1);
      for (let l = 0; l < t.columns.length; l++)
        t.columns[l] = _e[l];
      T.value = "", o.value = a, q.value = C, R.value = ke, t.isServerMode ? h.value === 1 ? U("reset", !0) : h.value = 1 : (h.value = 1, B());
    }, Ae = () => p.value.filter((e, i) => $.value.includes(w.value ? e[w.value] : i)), Be = () => t.columns, Ne = () => {
      $.value = [];
    }, ue = (l) => {
      if (!Q(l)) {
        const e = p.value.find((i, g) => g === l);
        $.value.push(w.value ? e[w.value] : l);
      }
    }, ce = (l) => {
      if (Q(l)) {
        const e = p.value.find((i, g) => g === l);
        $.value = $.value.filter((i) => i !== (w.value ? e[w.value] : l));
      }
    }, Q = (l) => {
      const e = p.value.find((i, g) => g === l);
      return e ? $.value.includes(w.value ? e[w.value] : l) : !1;
    };
    return (l, e) => (u(), c("div", Lt, [
      s("div", {
        class: d(["bh-table-responsive", { "bh-min-h-[300px]": O.value }]),
        style: ge({ height: t.stickyHeader && t.height })
      }, [
        s("table", {
          class: d([t.skin])
        }, [
          s("thead", {
            class: d({ "bh-sticky bh-top-0 bh-z-10": t.stickyHeader })
          }, [
            D(pe, {
              all: t,
              currentSortColumn: q.value,
              currentSortDirection: R.value,
              isOpenFilter: V.value,
              checkAll: Z.value,
              onSelectAll: z,
              onSortChange: ie,
              onFilterChange: re,
              onToggleFilterMenu: se
            }, null, 8, ["currentSortColumn", "currentSortDirection", "isOpenFilter", "checkAll"])
          ], 2),
          s("tbody", null, [
            F.value ? (u(!0), c(x, { key: 0 }, E(p.value, (i, g) => (u(), c("tr", {
              key: i[w.value] ? i[w.value] : g,
              class: d([typeof t.rowClass == "function" ? l.rowClass(i) : t.rowClass, t.selectRowOnClick ? "bh-cursor-pointer" : ""]),
              onClick: W((k) => qe(i, g), ["prevent"])
            }, [
              t.hasCheckbox ? (u(), c("td", {
                key: 0,
                class: d({
                  "bh-sticky bh-left-0 bh-bg-blue-light": t.stickyFirstColumn
                })
              }, [
                s("div", At, [
                  H(s("input", {
                    "onUpdate:modelValue": e[0] || (e[0] = (k) => $.value = k),
                    type: "checkbox",
                    value: i[w.value] ? i[w.value] : g,
                    onClick: e[1] || (e[1] = W(() => {
                    }, ["stop"]))
                  }, null, 8, Bt), [
                    [Ve, $.value]
                  ]),
                  s("div", null, [
                    D(Ce, { class: "check" })
                  ])
                ])
              ], 2)) : y("", !0),
              (u(!0), c(x, null, E(t.columns, (k, K) => (u(), c(x, null, [
                k.hide ? y("", !0) : (u(), c("td", {
                  key: k.field,
                  class: d([
                    typeof t.cellClass == "function" ? l.cellClass(i) : t.cellClass,
                    K === 0 && t.stickyFirstColumn ? "bh-sticky bh-left-0 bh-bg-blue-light" : "",
                    t.hasCheckbox && K === 0 && t.stickyFirstColumn ? "bh-left-[52px]" : "",
                    k.cellClass ? k.cellClass : ""
                  ])
                }, [
                  Ue(b)[k.field] ? Ee(l.$slots, k.field, {
                    key: 0,
                    value: i
                  }) : k.cellRenderer ? (u(), c("div", {
                    key: 1,
                    innerHTML: k.cellRenderer(i)
                  }, null, 8, Nt)) : (u(), c(x, { key: 2 }, [
                    me(I(f(i, k.field)), 1)
                  ], 64))
                ], 2))
              ], 64))), 256))
            ], 10, zt))), 128)) : y("", !0),
            !F.value && !O.value ? (u(), c("tr", Dt, [
              s("td", {
                colspan: t.columns.length + 1
              }, I(t.noDataContent), 9, Rt)
            ])) : y("", !0),
            !F.value && O.value ? (u(!0), c(x, { key: 2 }, E(t.pageSize, (i) => (u(), c("tr", {
              key: i,
              class: "!bh-bg-white bh-h-11 !bh-border-transparent"
            }, [
              s("td", {
                colspan: t.columns.length + 1,
                class: "!bh-p-0 !bh-border-transparent"
              }, Ot, 8, Pt)
            ]))), 128)) : y("", !0)
          ]),
          t.cloneHeaderInFooter ? (u(), c("tfoot", {
            key: 0,
            class: d({ "bh-sticky bh-bottom-0": t.stickyHeader })
          }, [
            D(pe, {
              all: t,
              currentSortColumn: q.value,
              currentSortDirection: R.value,
              isOpenFilter: V.value,
              isFooter: !0,
              checkAll: Z.value,
              onSelectAll: z,
              onSortChange: ie,
              onFilterChange: re,
              onToggleFilterMenu: se
            }, null, 8, ["currentSortColumn", "currentSortDirection", "isOpenFilter", "checkAll"])
          ], 2)) : y("", !0)
        ], 2),
        F.value && O.value ? (u(), c("div", Tt, [
          D(qt)
        ])) : y("", !0)
      ], 6),
      t.pagination && F.value ? (u(), c("div", {
        key: 0,
        class: d(["bh-pagination bh-py-5", { "bh-pointer-events-none": O.value }])
      }, [
        s("div", Vt, [
          s("div", Ut, [
            s("span", Et, I(Se(t.paginationInfo, F.value ? ne.value : 0, oe.value, F.value)), 1),
            t.showPageSize ? H((u(), c("select", {
              key: 0,
              "onUpdate:modelValue": e[2] || (e[2] = (i) => o.value = i),
              class: "bh-pagesize"
            }, [
              (u(!0), c(x, null, E(t.pageSizeOptions, (i) => (u(), c("option", {
                value: i,
                key: i
              }, I(i), 9, It))), 128))
            ], 512)), [
              [ye, o.value]
            ]) : y("", !0)
          ]),
          s("div", Gt, [
            t.showFirstPage ? (u(), c("button", {
              key: 0,
              type: "button",
              class: d(["bh-page-item first-page", { disabled: h.value <= 1 }]),
              onClick: e[3] || (e[3] = (i) => h.value = 1)
            }, [
              t.firstArrow ? (u(), c("span", {
                key: 0,
                innerHTML: t.firstArrow
              }, null, 8, Kt)) : (u(), c("svg", Jt, Yt))
            ], 2)) : y("", !0),
            s("button", {
              type: "button",
              class: d(["bh-page-item previous-page", { disabled: h.value <= 1 }]),
              onClick: xe
            }, [
              t.previousArrow ? (u(), c("span", {
                key: 0,
                innerHTML: t.previousArrow
              }, null, 8, Qt)) : (u(), c("svg", Xt, jt))
            ], 2),
            t.showNumbers ? (u(!0), c(x, { key: 1 }, E($e.value, (i) => (u(), c("button", {
              key: i,
              type: "button",
              class: d(["bh-page-item", {
                disabled: h.value === i,
                "bh-active": i === h.value
              }]),
              onClick: (g) => Fe(i)
            }, I(i), 11, el))), 128)) : y("", !0),
            s("button", {
              type: "button",
              class: d(["bh-page-item next-page", { disabled: h.value >= A.value }]),
              onClick: Me
            }, [
              t.nextArrow ? (u(), c("span", {
                key: 0,
                innerHTML: t.nextArrow
              }, null, 8, tl)) : (u(), c("svg", ll, ol))
            ], 2),
            t.showLastPage ? (u(), c("button", {
              key: 2,
              type: "button",
              class: d(["bh-page-item last-page", { disabled: h.value >= A.value }]),
              onClick: e[4] || (e[4] = (i) => h.value = A.value)
            }, [
              t.lastArrow ? (u(), c("span", {
                key: 0,
                innerHTML: t.lastArrow
              }, null, 8, sl)) : (u(), c("svg", il, rl))
            ], 2)) : y("", !0)
          ])
        ])
      ], 2)) : y("", !0)
    ]));
  }
});
export {
  fl as default
};
