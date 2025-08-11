# 贡献指南

感谢您对图库项目的关注！我们欢迎任何形式的贡献。

## 🎯 贡献方式

### 报告问题
- 使用 [Bug 报告模板](./ISSUE_TEMPLATE/bug_report.yml) 报告 bug
- 使用 [功能请求模板](./ISSUE_TEMPLATE/feature_request.yml) 提出新功能建议
- 在讨论区分享想法和经验

### 代码贡献
1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 🚀 开发环境设置

### 环境要求
- Node.js 18.0 或更高版本
- pnpm 8.0 或更高版本

### 安装步骤
```bash
# 克隆项目
git clone https://github.com/[用户名]/guoxue-knowledge-base.git
cd guoxue-knowledge-base

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 📝 代码规范

### 代码风格
- 使用 TypeScript
- 遵循 ESLint 规则
- 使用 Prettier 格式化代码
- 组件使用 PascalCase 命名
- 函数和变量使用 camelCase 命名

### Git 提交规范
使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
<类型>[可选范围]: <描述>

[可选正文]

[可选脚注]
```

**类型：**
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式化（不影响代码运行）
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

**示例：**
```
feat(gallery): add lazy loading for images
fix(filter): resolve duplicate key error
docs(readme): update installation instructions
```

## 🧪 测试

### 运行测试
```bash
# 运行所有测试
pnpm test

# 运行测试并生成覆盖率报告
pnpm test:coverage

# 监视模式
pnpm test:watch
```

### 测试要求
- 新功能必须包含对应的测试
- 修复 bug 时需要添加回归测试
- 保持测试覆盖率在 80% 以上

## 📋 Pull Request 指南

### 提交前检查
- [ ] 代码通过所有测试
- [ ] 没有 ESLint 错误或警告
- [ ] 代码已使用 Prettier 格式化
- [ ] 添加了必要的文档和注释
- [ ] 更新了相关的 README 或文档

### PR 描述
请使用提供的 [PR 模板](./pull_request_template.md) 并包含：
- 清晰的更改描述
- 相关的 Issue 编号
- 测试截图（如果有 UI 变更）
- 测试说明

## 🎨 UI/UX 贡献

### 设计原则
- 简洁美观的界面设计
- 良好的用户体验
- 响应式设计，支持各种设备
- 考虑无障碍访问性

### 图片和资源
- 图片文件应压缩优化
- 使用适当的图片格式（WebP 优先）
- 提供不同分辨率的资源

## 📚 文档贡献

### 文档类型
- 用户指南
- 开发者文档
- API 文档
- 部署指南

### 文档要求
- 使用清晰的中文表达
- 提供代码示例
- 包含截图说明（如适用）
- 保持文档与代码同步

## 🌍 国际化

虽然目前主要使用中文，但我们欢迎多语言支持的贡献：
- 界面文本的国际化
- 多语言文档
- 本地化的用户体验

## 📮 联系方式

如有任何问题，请通过以下方式联系：
- GitHub Issues
- GitHub Discussions
- 邮件：[your-email@example.com]

## 📄 许可证

通过贡献代码，您同意您的贡献将在与项目相同的 [MIT 许可证](../LICENSE) 下授权。

---

再次感谢您的贡献！每一个贡献都让这个项目变得更好。
