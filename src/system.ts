import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI Vercel
- 本站仅作演示，不提供长期服务
- 🗝️先在左下角设置，输入密码 12138
- 🔍关注公众号: AI侠客宋学东
- 🔥免费学习教程 https://x.b1n.net
- 点击右下角 M↓，一键复制聊天记录
- 点击右下角图片，保存截图。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
