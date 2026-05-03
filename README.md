# Jed的AI分享

一个面向分发场景的 AI 自动化教程落地页系统。

当前目标不是做复杂门户，而是把每一篇教程做成：

- 独立 URL
- 长期稳定可访问
- 可用 Markdown 维护
- 可插入截图
- 可接入 GitHub + Cloudflare Pages 自动发布

## 当前技术方案

- Astro
- Starlight
- Markdown 内容管理
- 静态站点构建

## 目录约定

```text
src/content/docs/                教程正文
public/images/tutorials/         教程截图
```

## 当前已创建页面

- `/` 首页
- `/openclaw/hermes-agent-windows-deployment/` Windows 部署 Hermes Agent 教程
- `/roadmap/site-architecture/` 教程站架构说明

## 本地运行

```bash
npm install
npm run dev
```

## 本地构建

```bash
npm run build
```

## 后续发布流程

推荐流程：

```text
OpenClaw 生成教程 Markdown
↓
保存到 src/content/docs/
↓
补充截图到 public/images/tutorials/
↓
本地构建检查
↓
提交 GitHub
↓
Cloudflare Pages 自动部署
↓
返回最终教程链接
```

## 下一步建议

1. 新建 GitHub 仓库
2. 把本项目推送到 GitHub
3. 在 Cloudflare Pages 连接仓库
4. 绑定你的域名
5. 以后每新增一篇教程，就新建一个 Markdown 文件
