webpackJsonp([217],{

/***/ 1625:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Make an element stick to viewport."
    ],
    [
      "h2",
      "When To Use"
    ],
    [
      "p",
      "When user browses a long web page, some content need to stick to the viewport. This is common for menus and actions."
    ],
    [
      "p",
      "Please note that Affix should not cover other content on the page, especially when the size of the viewport is small."
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Navigation",
    "title": "Affix",
    "filename": "components/affix/index.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#When-To-Use",
          "title": "When To Use"
        },
        "When To Use"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "offsetBottom"
          ],
          [
            "td",
            "Pixels to offset from bottom when calculating position of scroll"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "offsetTop"
          ],
          [
            "td",
            "Pixels to offset from top when calculating position of scroll"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "target"
          ],
          [
            "td",
            "specifies the scrollable area dom node"
          ],
          [
            "td",
            "() => HTMLElement"
          ],
          [
            "td",
            "() => window"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onChange"
          ],
          [
            "td",
            "Callback for when affix state is changed"
          ],
          [
            "td",
            "Function(affixed)"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "p",
      [
        "strong",
        "Note:"
      ],
      " Children of ",
      [
        "code",
        "Affix"
      ],
      " can not be ",
      [
        "code",
        "position: absolute"
      ],
      ", but you can set ",
      [
        "code",
        "Affix"
      ],
      " as ",
      [
        "code",
        "position: absolute"
      ],
      ":"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Affix</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> position<span class=\"token punctuation\">:</span> <span class=\"token string\">'absolute'</span><span class=\"token punctuation\">,</span> top<span class=\"token punctuation\">:</span> y<span class=\"token punctuation\">,</span> left<span class=\"token punctuation\">:</span> x<span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token operator\">...</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Affix</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<Affix style={{ position: 'absolute', top: y, left: x}}>\n  ...\n</Affix>"
      ]
    ]
  ]
};

/***/ })

});