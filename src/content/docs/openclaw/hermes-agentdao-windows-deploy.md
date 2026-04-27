---
title: 如何把 Hermes Agent 部署到 Windows 电脑上
description: 用最稳妥的方式，在 Windows 电脑上通过 WSL2 安装和跑通 Hermes Agent。
slug: openclaw/hermes-agent-windows-deployment
---

如果你想在 Windows 电脑上稳定使用 Hermes Agent，我最推荐的方式不是直接在纯 PowerShell 里硬装，而是：

```text
Windows 11 / Windows 10
→ 安装 WSL2
→ 装 Ubuntu
→ 在 Ubuntu 里安装 Hermes Agent
```

这样做的原因很简单：Hermes Agent 的强项在于终端、文件系统、自动化、脚本、Git、浏览器工具链和各种开发依赖。而这些能力在 **Linux / macOS / WSL** 环境里通常更稳定，也更接近官方和社区最常用的运行方式。

## 你将获得什么

完成本教程后，你会得到：

- 一个可正常运行的 Hermes Agent 环境
- 可直接执行 `hermes` 命令的终端
- 可继续配置模型、工具和网关的平台基础环境

## 第 1 步：确认你的 Windows 版本

优先建议：

- Windows 11
- Windows 10 2004 及以上版本

如果版本太旧，先更新系统再继续。

## 第 2 步：以管理员身份安装 WSL2

打开 **PowerShell（管理员）**，执行：

```powershell
wsl --install
```

如果系统已经启用了 WSL，但还没装 Ubuntu，可以执行：

```powershell
wsl --list --online
wsl --install -d Ubuntu
```

安装完成后，**重启电脑**。

> 后续建议截图放这里：
> `![安装 WSL](/images/tutorials/hermes-agent-windows-deployment/01-install-wsl.png)`

## 第 3 步：首次启动 Ubuntu

重启后，在开始菜单打开 **Ubuntu**。

第一次启动时，系统会提示你设置：

- Linux 用户名
- Linux 密码

记住这组账号密码，后面安装软件时会用到。

## 第 4 步：更新 Ubuntu 基础环境

在 Ubuntu 终端里执行：

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git build-essential
```

这一步的目标是先把最基本的下载、Git 和编译工具准备好。

## 第 5 步：安装 Hermes Agent

继续在 Ubuntu 终端执行：

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

安装结束后，关闭终端，再重新打开一次 Ubuntu，或者手动刷新 shell 环境。

然后检查是否安装成功：

```bash
hermes --version
```

如果能看到版本号，说明已经装好了。

> 后续建议截图放这里：
> `![Hermes 安装完成](/images/tutorials/hermes-agent-windows-deployment/02-hermes-version.png)`

## 第 6 步：运行初始化配置

首次使用时，建议先执行：

```bash
hermes setup
```

你可以在这里配置：

- 默认模型 / Provider
- 终端行为
- 网关平台
- 常用工具开关

如果你已经知道自己要用哪个模型，也可以后面再执行：

```bash
hermes model
```

## 第 7 步：做一次健康检查

执行：

```bash
hermes doctor
```

这个命令可以帮助你检查当前环境里是否有：

- 缺失依赖
- 配置问题
- 模型或认证问题

如果 `doctor` 没报关键错误，就说明基础环境已经能用了。

## 第 8 步：做一次最小测试

你可以直接跑一条简单命令：

```bash
hermes chat -q "用一句话介绍 Hermes Agent 是什么"
```

如果可以返回正常结果，说明 Hermes Agent 已经真正跑通。

## 推荐你这样用 Windows + Hermes Agent

最稳的组合通常是：

```text
Windows 负责日常桌面使用
WSL Ubuntu 负责 Hermes Agent、Git、脚本和自动化
VS Code 通过 Remote - WSL 连接 Ubuntu 项目目录
```

如果你后面要让 Hermes 帮你：

- 改代码
- 跑脚本
- 操作 Git
- 构建网站
- 自动发布内容

这种方式会比“纯 Windows 命令行直装”省很多坑。

## 常见问题

### 1）输入 `hermes` 提示找不到命令

先关闭并重新打开 Ubuntu。

如果还不行，检查安装脚本是否已经把可执行文件加入 PATH；必要时重新执行安装脚本。

### 2）Windows 里能不能直接装，不用 WSL？

理论上可以尝试，但如果你后续要大量使用终端工具、自动化和开发环境，我仍然建议把 **WSL2 + Ubuntu** 作为主运行环境。

### 3）模型还没配怎么办？

先运行：

```bash
hermes setup
```

或者：

```bash
hermes model
```

把你自己的 provider 和 API key 配好，再继续。

### 4）为什么我明明装好了，结果请求报错？

先跑：

```bash
hermes doctor
```

很多问题都能先在这里定位，比如认证、配置、环境变量或依赖异常。

## 下一步建议

装好 Hermes Agent 之后，你下一步可以继续做这几件事：

1. 配置你要用的模型和 API Key
2. 打开常用工具集
3. 连接 Telegram / Discord 等网关
4. 让 Hermes 帮你管理项目、脚本和内容发布流程

如果你接下来准备把它用于教程生成与自动发布，可以继续阅读这个站点后续的 OpenClaw 系列教程。
