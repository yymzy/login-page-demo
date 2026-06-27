# 登录页技术方案

## 项目概述

登录页（Login Page）— 深色主题、现代极简风格的认证页面。

## 技术选型

| 类别 | 选型 | 版本 | 理由 |
|------|------|------|------|
| 框架 | React | 18 | 组件化开发，生态成熟 |
| 语言 | TypeScript | 5.x | 类型安全，减少运行时错误 |
| 构建工具 | Vite | 6.x | 快速 HMR，开箱即用 TS 支持 |
| 样式 | Tailwind CSS | 4.x | 原子化 CSS，快速迭代 |

## 组件设计

### 1. LoginForm（登录表单）
- 邮箱输入框（InputField）
- 密码输入框（PasswordInput，支持显示/隐藏切换）
- 记住我复选框
- 登录按钮（支持 loading 状态）
- 忘记密码链接
- 注册账号链接

### 2. SocialLogin（第三方登录）
- 微信登录按钮
- GitHub 登录按钮
- Google 登录按钮

### 3. LoginPage（页面容器）
- 组合 LoginForm + SocialLogin
- fadeUp 入场动画

## 接口设计

### POST /api/auth/login

请求体：`{ email, password, rememberMe }`

成功响应（200）：`{ code: 0, data: { token, user } }`

失败响应（401）：`{ code: 401, message: "邮箱或密码错误" }`

## 样式规范

- 深色主题：背景 #0F172A，卡片 #1E293B
- 主色：#6366F1（Indigo）
- 错误色：#EF4444

## 目录结构

```
src/
├── components/
│   ├── InputField.tsx       # 通用输入框
│   ├── PasswordInput.tsx    # 密码输入框
│   ├── SocialButton.tsx     # 第三方按钮
│   ├── LoginForm.tsx        # 登录表单
│   └── SocialLogin.tsx      # 第三方登录
├── pages/
│   └── LoginPage.tsx        # 登录页容器
├── hooks/
│   └── useFormValidation.ts # 表单验证 hook
├── types/
│   └── auth.ts              # 类型定义
├── App.tsx
├── main.tsx
└── index.css
```
