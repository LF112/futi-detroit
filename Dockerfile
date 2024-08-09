FROM oven/bun:1 AS base
WORKDIR /app

FROM base AS deps
COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile
RUN bun add -g --arch=x64 --platform=linux sharp

FROM node:18 as build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner

USER bun

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

ENV NODE_ENV=production

EXPOSE 20481
ENV PORT 20481

CMD ["bun", "run", "start"]