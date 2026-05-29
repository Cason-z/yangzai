# 洋仔脚本工具箱

Linux 服务器运维脚本集合。主入口为 `yangzai.sh`，可直接通过 `wget` 获取运行。

## 使用

```bash
wget -O yangzai.sh https://raw.githubusercontent.com/Cason-z/yangzai/main/yangzai.sh
chmod +x yangzai.sh
bash yangzai.sh
```

## 仓库结构

```text
.
├── yangzai.sh                 # wget 主入口
├── scripts/
│   ├── core/                  # 完整主脚本副本
│   ├── tools/                 # 独立工具脚本
│   └── game/                  # 游戏服务脚本
├── config/                    # 配置模板
│   ├── keys/
│   ├── mysql/
│   ├── nginx/
│   ├── php/
│   ├── security/
│   └── system/
├── locales/                   # 多语言版本
├── examples/                  # 示例配置
├── docs/                      # 文档和更新日志
├── tests/                     # 测试脚本
└── tools/                     # 开发辅助工具
```

## 说明

- `yangzai.sh` 保持在仓库根目录，确保 Raw 地址稳定。
- 其他脚本和配置按用途归档，减少根目录杂乱。
- Shell 脚本统一使用 LF 换行。