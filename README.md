# 洋仔脚本工具箱

一键 Linux 服务器管理脚本，支持系统工具、Docker、建站工具、SSH 管理等常用运维操作。

## 快速使用

```bash
wget -O yangzai.sh https://raw.githubusercontent.com/Cason-z/yangzai/main/yangzai.sh
chmod +x yangzai.sh
bash yangzai.sh
```

也可以直接运行：

```bash
bash <(wget -qO- https://raw.githubusercontent.com/Cason-z/yangzai/main/yangzai.sh)
```

## 常用快捷命令

```bash
bash yangzai.sh sshroot
```

`sshroot` 会自动识别系统版本，安装 OpenSSH Server，备份 SSH 配置，开启 root SSH 登录和密码登录，并重启 SSH 服务。

## 注意事项

- 请使用 root 权限运行需要修改系统配置的功能。
- 开启 root 密码登录会降低安全性，建议设置强密码、修改默认 SSH 端口，并按需开启防火墙或 Fail2Ban。
- 仓库已通过 `.gitattributes` 固定 shell 脚本使用 LF 换行，避免 Linux 下出现 `$'\r': command not found`。