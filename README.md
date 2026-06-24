# 洋仔脚本工具箱

Cloudflare Worker 代理前缀建议直接用你的域名：

```bash
export GH_PROXY_BASE=https://gh.sub4i.cn/
```

最短入口：

```bash
bash <(curl -fsSL https://gh.sub4i.cn/yangzai.sh)
```

可选：如果你自己有 Cloudflare 代理域名，可以直接覆盖下载前缀。

```bash
export GH_PROXY_BASE=https://gh.example.com/
wget -O yangzai.sh https://raw.githubusercontent.com/Cason-z/yangzai/main/yangzai.sh
chmod +x yangzai.sh
bash yangzai.sh
```
