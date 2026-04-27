// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.example.com',
	integrations: [
		starlight({
			title: '小芒教程站',
			description: 'AI 自动化教程落地页系统，专注 OpenClaw、Hermes Agent、AI 工具与自动化发布。',
			social: [],
			sidebar: [
				{
					label: '开始阅读',
					items: [{ label: '网站说明', slug: '' }],
				},
				{
					label: 'OpenClaw 教程',
					items: [
						{
							label: '如何把 Hermes Agent 部署到 Windows 电脑上',
							slug: 'openclaw/hermes-agent-windows-deployment',
						},
					],
				},
				{
					label: '后续扩展方向',
					autogenerate: { directory: 'roadmap' },
				},
			],
		}),
	],
});
