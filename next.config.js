import { execSync } from 'child_process';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js');

const repoInfo = useLocalGitRepo();

/** @type {import("next").NextConfig} */
const config = {
  env: {
    NEXT_PUBLIC_COMMIT_HASH: repoInfo?.hash,
    NEXT_PUBLIC_COMMIT_URL: repoInfo?.url,
  },
};

export default config;

function useLocalGitRepo() {
  if (process.env.VERCEL) {
    const { VERCEL_GIT_PROVIDER, VERCEL_GIT_REPO_SLUG, VERCEL_GIT_REPO_OWNER } = process.env;

    switch (VERCEL_GIT_PROVIDER) {
      case 'github':
        return {
          hash: process.env.VERCEL_GIT_COMMIT_SHA,
          url: `https://github.com/${VERCEL_GIT_REPO_OWNER}/${VERCEL_GIT_REPO_SLUG}/commit/${process.env.VERCEL_GIT_COMMIT_SHA}`,
        };
    }
  }

  try {
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    const remoteName = execSync(`git config branch.${currentBranch}.remote`).toString().trim();
    let remoteUrl = execSync(`git remote get-url ${remoteName}`).toString().trim();

    const commitHash = execSync('git rev-parse HEAD').toString().trim();
    if (remoteUrl.startsWith('git@')) {
      remoteUrl = remoteUrl.replace(':', '/').replace('git@', 'https://').replace('.git', '');
    } else if (remoteUrl.endsWith('.git')) {
      remoteUrl = remoteUrl.slice(0, -4);
    }

    return { hash: commitHash, url: `${remoteUrl}/commit/${commitHash}` };
  } catch (_error) {
    console.error('Failed to fetch repo info:', _error);
    return null;
  }
}
