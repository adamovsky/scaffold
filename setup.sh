nvm --version || curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm i
pnpm --version || npm install -g pnpm@next-7
pnpm i
ls -1 .env || cp .env.local .env
pnpm start