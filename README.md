# Vue-mini 的 Tailwind v4模板

使用 [vuemini 小程序框架](https://vuemini.org) 配合 [weapp-vite](https://github.com/weapp-vite/weapp-vite) 和 [weapp-tailwindcss](https://github.com/sonofmagic/weapp-tailwindcss) 构建。

引入 ``@tailwind/vite`` 并使用 ``weapp-tailwindcss`` 进行可用性转化。 详情参考``weapp-tailwindcss``文档。  

⚠️ 注意：将此项目导入微信开发者工具时请选择项目根目录而非 `dist` 目录。  
关于Vue-mini的开发文档更多信息请访问官方文档：[vuemini.org](https://vuemini.org)  

可以正常使用TailwindCSS v4，部分新特性暂不支持。   

微信不支持引入全局变量 ``*``, 但TailwindCSS v4只保留了一个``@import 'tailwindcss';``  

可以参考TailwindCSS v4文档 [Preflight - Base styles](https://tailwindcss.com/docs/preflight#disabling-preflight)，来控制变量。  
```css
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
```

当然，也可以直接引入``weapp-tailwindcss``。  
```css
@import 'weapp-tailwindcss';
```

## 使用模板快速创建
```bash
npm create vue-mini-app-with-tailwindcss-v4
```

## 使用前先：依赖安装！

```sh
pnpm install
```

## 本地开发

```sh
pnpm dev
```

## 生产构建

```sh
pnpm build
```

## 代码格式化

```sh
pnpm format
```

## CSS 代码质量检测

```sh
pnpm lint
```
