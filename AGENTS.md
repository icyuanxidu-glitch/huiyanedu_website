# AGENTS.md

本文件用于约束后续所有 Codex 对本项目的修改。

## 项目背景

1. 本项目是慧研国际教育官网，基于 AstroWind。
2. 网站内容中文为主，英文为辅。
3. 品牌定位是英国本地硕博导师团队、非流水线留学、全周期陪伴。
4. 网站风格为深蓝、白色、金色点缀，高端、克制、专业。

## 内容边界

1. 禁止使用“保录取”“100% offer”“guaranteed admission”等夸大话术。
2. 禁止虚构合作大学、学生案例、offer 数量。

## 功能边界

1. 不要添加数据库、登录、后台、CRM、CMS，除非用户明确要求。
2. 不要修改 vendor 目录。

## 主要文件

重点关注以下文件：

1. `src/pages/index.astro`
2. `src/navigation.ts`
3. `src/config.yaml`
4. `src/components/Logo.astro`

## 验证要求

重大修改后必须运行：

```bash
npm run build
```
