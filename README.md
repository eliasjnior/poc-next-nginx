# PoC

The followin domains are available:

- example1.localhost
- example2.localhost

Any other domain ending with .localhost will return a "domain not found" because it's not mapped on `src/app/profile/[domain]/page.tsx`.

## Running app

```
docker compose up
```

Then access [http://example1.localhost](http://example1.localhost).
