webpackJsonp([124],{

/***/ 1764:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "垂直展示的时间流信息。"
    ],
    [
      "h2",
      "何时使用"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "当有一系列信息需按时间排列时，可正序和倒序。"
        ]
      ],
      [
        "li",
        [
          "p",
          "需要有一条时间轴进行视觉上的串联时。"
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "subtitle": "时间轴",
    "type": "Data Display",
    "title": "Timeline",
    "filename": "components/timeline/index.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#何时使用",
          "title": "何时使用"
        },
        "何时使用"
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
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>创建服务现场 <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>初步排除网络异常 <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>技术测试异常 <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>网络异常正在修复 <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<Timeline>\n  <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>\n  <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>\n  <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>\n  <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>\n</Timeline>"
      ]
    ],
    [
      "h3",
      "Timeline"
    ],
    [
      "p",
      "时间轴。"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "pending"
          ],
          [
            "td",
            "指定最后一个幽灵节点是否存在或内容"
          ],
          [
            "td",
            "boolean",
            "|",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td",
            "false"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Timeline.Item"
    ],
    [
      "p",
      "时间轴的每一个节点。"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "color"
          ],
          [
            "td",
            "指定圆圈颜色 ",
            [
              "code",
              "blue, red, green"
            ],
            "，或自定义的色值"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "blue"
          ]
        ],
        [
          "tr",
          [
            "td",
            "dot"
          ],
          [
            "td",
            "自定义时间轴点"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});