FROM node:20 as base
RUN corepack enable pnpm
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir -p /nonexistent && chown -R nextjs:nodejs /nonexistent
USER nextjs
COPY --chown=nextjs:nodejs . /app

WORKDIR /app
FROM base AS prod-deps
RUN pnpm install --prod --frozen-lockfile

FROM base AS build
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM base AS runner
COPY --chown=nextjs:nodejs --from=prod-deps /app/node_modules /app/node_modules
COPY --chown=nextjs:nodejs --from=build /app/package.json /app/package.json
COPY --chown=nextjs:nodejs --from=build /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --chown=nextjs:nodejs --from=build /app/.next /app/.next
EXPOSE 3000
CMD ["pnpm", "start"]