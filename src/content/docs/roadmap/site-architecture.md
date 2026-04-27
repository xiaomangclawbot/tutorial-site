---
title: 教程站推荐架构
description: 当前教程站采用的最小可用思路，以及后续如何接入 GitHub 和 Cloudflare Pages。
---

# 教程站推荐架构

当前这版先采用最小可用方案：

```text
Markdown 教程文件
↓
Astro Starlight
↓
静态站点构建
↓
GitHub 仓库
↓
Cloudflare Pages 自动部署
```

## 当前目录约定

```text
src/content/docs/                教程正文
public/images/tutorials/         教程截图
```

## 为什么先这样做

因为这一版最适合自动化：

- 新建教程 = 新建 Markdown 文件
- 生成独立 URL
- 可本地构建检查
- 可直接纳入 Git 工作流
- 后续可以无痛接入自动部署

## 下一步建议

1. 把 GitHub 仓库建好
2. 把这个站推上去
3. 在 Cloudflare Pages 连接仓库
4. 绑定自定义域名
5. 后续所有教程都按同一结构新增
