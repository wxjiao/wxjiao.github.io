# Wenxiang Jiao (焦文祥)

Personal academic homepage, built with Jekyll and deployed with GitHub Pages at
[wxjiao.github.io](https://wxjiao.github.io).

## 页面与维护入口

网站使用 Markdown、HTML 和 Liquid 模板，没有引入前端应用框架。

| 修改内容 | 文件 |
| --- | --- |
| 首页个人简介、经历、教育、荣誉、学术服务 | `_pages/home.md` |
| 三条研究方向的标题、介绍与关键词 | `_data/research_areas.yml` |
| 论文、项目、精选顺序、引用与 Star、图表配置 | `_data/projects.yml` |
| 新闻内容 | `_data/news.yml` |
| Research 页的分组和排序 | `_pages/research.md` |
| 单篇研究工作的展示 | `_includes/research-publication.html` |
| 首页 Selected work 展示 | `_includes/spotlight-projects.html` |
| 引用与 Star 标签 | `_includes/work-metrics.html` |
| 图表轮播模板与交互 | `_includes/paper-gallery.html`、`js/paper-gallery.js` |
| 全站样式与手机适配 | `css/main.scss` |
| 导航、页头信息和页脚 | `_includes/header.html`、`head.html`、`footer.html` |
| 网站地址、描述和构建排除项 | `_config.yml` |

首页依次展示个人介绍、研究主线、精选工作、最新动态、经历与教育、荣誉与服务、访客地图。
Updates 从新闻数据顶部读取 **最近 5 条**，新增新闻应放在文件最前面。
首页和 Research 共用项目数据，修改论文标题、描述或链接时，只维护这一个来源。

## 项目字段与排序规则

每项工作的基础字段：

| 字段 | 用途 |
| --- | --- |
| `name` | 项目简称；首页展示，并用于生成图表轮播的唯一 ID |
| `title`、`description` | 完整论文标题与简短介绍 |
| `paper`、`code`、`project` | 可选的论文、代码、项目主页链接；未知链接不填 |
| `area` | `agents`、`reasoning` 或 `capabilities` |
| `venue` | 实际展示的发表信息，可保留 Oral、Findings、D&B 等标记 |
| `year` | 数字年份，按会议／期刊发表年份填写；预印本采用预印本年份 |
| `status` | `published` 或 `preprint`；arXiv 上线不等于已被会议接收 |
| `venue_group` | 用于归组的 venue 名称，如 `ACL`、`NeurIPS`；预印本统一填 `Preprint` |
| `featured` | 是否显示在首页 Selected work，明确填 `true` 或 `false` |
| `research_highlight` | 是否在对应研究方向置顶，**必须明确填 `true` 或 `false`** |
| `research_priority` | 置顶工作的顺序，数值越小越靠前；置顶时填写 |

`research_highlight` 不能直接省略：当前模板分别筛选 `true` 和 `false`，缺失字段会导致该项不出现在 Research。
有图表的项目还需要唯一的 `name`，避免轮播 ID 重复。

**首页 Selected work：** 按 YAML 文件中的原始顺序展示 `featured: true` 的工作。
Research 的排序设置不影响首页。

**Research：** 保留三条研究主线，每条主线内按以下规则展示：

1. `research_highlight: true` 的工作放在 Highlights，按 `research_priority` 升序排列。
   当前置顶的是 DeepAgent、Multi-Agent Debate、ChatGPT Translator 和 CipherChat，
   均在已核对的快照中达到至少 500 次引用或 500 个 Star。
2. 其余工作按 `year` 倒序排列。
3. 同一年先展示已发表论文，按 `venue_group` 字母顺序归组，再展示预印本。
4. 同一 venue、同一年的工作相邻；组内按完整标题字母顺序排列。

突出成果的选择是显式配置，**不会随着引用或 Star 数自动改变**。
不要为了排序而改动真实年份或把预印本写成已发表论文。

## 引用与 GitHub Star

`impact` 是可选对象，只有配置它的工作才显示统计标签。当前选取引用或 Star 至少达到 100 的工作展示标签，
与 Research 的置顶标准分别维护。

- `citations`：Google Scholar 引用数；`citations_display`：对应显示文字，可加千位分隔符。
- `scholar_url`：该论文的 Scholar 条目链接。
- `stars`：对应代码仓库的 Star 数；`stars_display`：对应显示文字，可使用明确的缩写，如 `1.1k`。
- `checked`：核对日期，格式为 `YYYY-MM-DD`。

这些数字是**手动核对的静态快照，不是实时计数**。刷新时须同步核对数值、显示文字、来源链接和日期，
并更新 `_pages/home.md`、`_pages/research.md` 中可见的统计日期说明。
不要把其他平台的引用数标成 Google Scholar 引用，也不要合计多个仓库的 Star。
核对代码链接是否指向预期的主仓库，避免误用 fork 的计数。

首页统计标签放在**右侧内容区**的简介下方、Paper／Code 链接上方。

## 论文图表轮播

给首页精选工作添加可选的 `gallery` 列表即可启用；当前七项精选工作均已配置。
Harness-S、Harness-R1 和 DeepAgent 各展示三张图，其余每项展示方法／评测总览与核心结果两张图。
Harness-S 和 Harness-R1 的三张图依次为框架总览、Figure 1、核心实验结果。
图表放在右侧介绍区的链接下方，不会自动出现在 Research 页。

下面是一条实际使用的配置：

```yaml
gallery:
  - src: /images/projects/deepagent/framework.svg
    width: 2059
    height: 871
    title: Framework overview
    label: Figure 3
    caption: Tool discovery, memory folding, and ToolPO in a unified reasoning process.
    alt: DeepAgent framework diagram showing autonomous tool discovery, memory folding, and ToolPO training.
    source: https://arxiv.org/pdf/2510.21618v3#page=3
    page: 3
    asset_origin: 'arXiv v3 source: figures/architecture.pdf'
```

维护注意事项：

- **优先使用作者原始矢量图。** 可从论文源文件中的图表 PDF 导出 SVG，保留文字与线条；
  表格可从对应 PDF 页面裁切并导出矢量 SVG。仅把低清截图包进 SVG 不会提高清晰度。
- 当前 DeepAgent 框架图和性能图分别来自 arXiv v3 源文件中的
  `figures/architecture.pdf`、`figures/radar.pdf`；实验表来自同版本论文第 5 页。
  [论文 PDF](https://arxiv.org/pdf/2510.21618v3) · [源文件](https://arxiv.org/src/2510.21618v3)
- 不默认使用有损截图替代可获得的原图。原图中的位图小图标仍受原始素材分辨率限制。
  若只能使用位图，需按实际展示尺寸与高像素密度屏幕检查清晰度。
- `width`、`height` 保持图片原始宽高比；`alt` 描述图的内容，`caption` 简述含义。
  `asset_origin` 记录提取来源，便于后续追溯。
- `source` 使用带版本号和 `#page=` 的 PDF 链接，核对图号、表号、页码和说明来自同一个版本。
- 图片存放在 `images/projects/<project>/`。SVG 应自包含，检查文字／字体及小图标是否完整，避免外部字体依赖。
- 当前交互包括左右按钮、计数、横向滑动、方向键、点击放大、Zoom in／Fit to window、Escape 关闭。
  不自动播放；关闭弹窗后焦点回到原图链接；减少动态效果的系统设置会被尊重。
- 图片延迟加载。没有 JavaScript 时仍可横向滚动并打开原图；交互代码不引入新的 JS 依赖。
- 窄屏和缩略展示下细字仍可能较小，应通过放大、缩放或打开完整 SVG 阅读，不强行把整张图塞进首屏。

### 当前图表来源

所有图表均保留矢量内容；源图中的截图和小图标沿用原始素材。

| 项目 | arXiv 版本 | 总览图来源 | 核心结果来源 |
| --- | --- | --- | --- |
| Harness-S | `2611.04277v1` | `figures/method_framework_text.pdf`，Figure 2 | `figures/introduction_plot.pdf`，Figure 1；论文第 7 页 Table 1 |
| DeepAgent | `2510.21618v3` | `figures/architecture.pdf` | `figures/radar.pdf`；论文第 5 页 Table 1 |
| MMSkills | `2605.13527v3` | `Images/Full_Figure.pdf`，Figure 2 | 论文第 6 页 Table 1 |
| Harness-R1 | `2608.02276v1` | `mainfig_harness_r1.pdf` 第 2 页，按原论文裁边，Figure 2 | `figures/FIG_motivation_editing.pdf`，Figure 1；论文第 7 页 Table 1 |
| Multi-Agent Debate | `2305.19118v4` | `imgs/framework.pdf`，Figure 2 | 论文第 5 页 Table 1 |
| REA-RL | `2505.19862v2` | `pic/main.pdf`，Figure 2 | 论文第 7 页 Table 2 |
| PsychoBench | `2310.01386v2` | 论文第 3 页 Figure 1（LaTeX 绘制） | 论文第 10 页 Table 3 |

每张图的 `source` 可跳转到上述版本的对应页，`asset_origin` 记录源文件或裁切位置。

## 页面结构与样式约定

- 新首页保持单一内容流；不要恢复旧的侧栏布局或 Bootstrap 首页大轮播。
  论文图表轮播是 Selected work 内的独立组件。
- `_pages/home.md` 中的原始 HTML `<section>` 必须带 `markdown="0"`，
  否则 Kramdown 可能把嵌套 HTML 渲染成代码块。
- 首页 brief 保持精简，现有结构测试限制在 240 字符内。经历与教育放在对应时间线维护。
- 样式集中在 `css/main.scss`；图表交互集中在 `js/paper-gallery.js`。
- 站内链接和资源使用 `relative_url` 或 `site.baseurl`，避免本地预览意外读取线上旧样式、脚本或图片。
  Canonical 等站点元信息仍使用正式网站地址。
- 原始 CV 是内容参考，不作为下载资源公开。`_config.yml` 当前排除了 `CV_wxjiao_1104.pdf`、
  `CLAUDE.md`、`README.md` 和 `test/`；换用新的本地参考文件时，须同步检查排除项。
- 访客地图保留在页尾，使用外部服务。自动预览时可拦截 IP 定位请求，避免把测试访问记为真实访客；
  地图服务暂时不可用不应影响主体内容和图表交互。

## 本地预览与验证

标准 Jekyll 命令如下，前提是本机 Ruby、Bundler 和项目依赖已匹配：

```bash
bundle install
bundle exec jekyll serve --livereload
# 默认本地地址：http://localhost:4000

bundle exec jekyll build
ruby test/site_structure_test.rb
node --check js/paper-gallery.js
git diff --check
```

**现存依赖问题：** `Gemfile` 要求 Jekyll `>= 3.6.3`，但旧 `Gemfile.lock` 仍记录 Jekyll `3.1.2`、
Bundler `1.11.2`。这是改版前已存在的不一致；本次未修改这两个文件，也未升级线上依赖。
直接运行 Bundler 可能需要先处理该问题。
本次本机验证使用隔离的 Jekyll `3.9.5` 环境，并安装现有 `input: GFM` 配置需要的
`kramdown-parser-gfm`。临时预览环境不属于仓库依赖，后续统一版本应单独处理并检查 GitHub Pages 构建。

发布前按改动范围检查：

- 主页、Research、News、Team 的站内链接，以及生成的图片资源能否加载。
- Research 是否保留全部工作，突出成果是否在前，其余年份和 venue 是否有序。
- 引用／Star 是否与链接、统计日期一致；原始 CV 和本地指导文件是否被排除。
- 涉及布局时检查桌面和手机，特别是 320px 窄屏是否出现页面级横向溢出。
- 涉及图表时检查切换边界、键盘、横滑、放大、缩放、关闭及焦点恢复，并实际查看截图确认清晰度。

结构测试覆盖部分首页约定，**不能代替完整构建和视觉检查**。
构建输出 `_site/`、Sass 缓存和 Jekyll 元数据已被 Git 忽略，不要提交临时 PDF、截图或提取工具环境。

## 提交与发布

从最新 `origin/main` 新建功能分支，提交实际网站文件后推送，通过 GitHub PR 合并到 `main`。
不要在本地直接合并到 `main`。暂存时检查文件列表，避免将本地原始 CV 和 `CLAUDE.md` 一并提交。
推送功能分支不等于发布；PR 合并后检查 GitHub Pages 的部署结果，再核对正式网站。
