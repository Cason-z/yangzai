export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/^\/+/, "");

    if (path === "a") {
      const script = `#!/bin/sh
set -eu
cat >/etc/apt/sources.list.d/debian.sources <<'EOF'
Types: deb
URIs: https://mirrors.tuna.tsinghua.edu.cn/debian
Suites: trixie trixie-updates trixie-backports
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

Types: deb
URIs: https://security.debian.org/debian-security
Suites: trixie-security
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
EOF
apt update
`;
      return new Response(script, {
        status: 200,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }

    if (url.pathname === "/yangzai.sh") {
      if (request.method === "HEAD") {
        return new Response(null, {
          status: 200,
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "no-store",
          },
        });
      }
      return fetch("https://raw.githubusercontent.com/Cason-z/yangzai/main/yangzai.sh", {
        headers: request.headers,
      });
    }

    if (!path) {
      return new Response("ok", {
        status: 200,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }

    const slash = path.indexOf("/");
    if (slash < 0) {
      return new Response("bad request", { status: 400 });
    }

    const upstreamHost = path.slice(0, slash);
    const upstreamPath = path.slice(slash);

    if (!/^(raw\.githubusercontent\.com|github\.com)$/.test(upstreamHost)) {
      return new Response("unsupported upstream", { status: 400 });
    }

    const upstreamUrl = new URL(`https://${upstreamHost}${upstreamPath}${url.search}`);
    const upstreamRequest = new Request(upstreamUrl, request);

    const response = await fetch(upstreamRequest, {
      redirect: "follow",
    });

    return new Response(response.body, response);
  },
};
