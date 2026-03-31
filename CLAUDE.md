# getmait-website — Claude Code regler

## Deploy-flow

**Aldrig commit direkte på `main` eller `staging`.**

| Branch | Miljø | Deploy |
|---|---|---|
| `dev` | dev.getmait.dk | Auto ved push |
| `staging` | staging.getmait.dk | Auto ved push |
| `main` | getmait.dk (prod) | Auto ved push |

### Procedure
1. Arbejd på `dev`, commit og push
2. Merge dev → staging, test på staging.getmait.dk
3. Merge staging → main (kun når godkendt)
4. Back-sync efter prod-deploy:

```bash
git checkout staging && git merge origin/main --ff-only && git push origin staging
git checkout dev && git merge origin/staging --ff-only && git push origin dev
```

Verificer at alle branches er på samme commit:
```bash
git log --oneline -1 origin/main origin/staging origin/dev
```

## URL'er

| Miljø | URL |
|---|---|
| Prod | https://getmait.dk |
| Staging | https://staging.getmait.dk |
| Dev | https://dev.getmait.dk |

## Coolify app UUID'er

| App | UUID |
|---|---|
| Prod | `g8wswsc0ck4kcc8sgwscsw00` |
| Staging | `n8808w8c8o8kg40c8k8sscwg` |
| Dev | `fsko8gc8c8ccwgk4scccskw0` |

## Repo

- GitHub: https://github.com/Getmait/getmait-website
- Framework: Next.js 15, App Router, output: standalone
