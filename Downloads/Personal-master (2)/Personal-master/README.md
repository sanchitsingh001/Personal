# Sanchit Singh's Portfolio Website

This is Sanchit Singh's portfolio website.

## Deploy (GitHub Actions → S3 + CloudFront)

Pushing to `main` or `master` triggers a build and deploy to AWS.

### One-time setup

1. **GitHub repo**  
   In your repo: **Settings → Secrets and variables → Actions**.

2. **Secrets** (required):
   - `AWS_ACCESS_KEY_ID` – IAM access key with S3 + CloudFront access
   - `AWS_SECRET_ACCESS_KEY` – IAM secret key

3. **Variables** (recommended; or use secrets):
   - `AWS_S3_BUCKET` – S3 bucket used for the website
   - `AWS_CLOUDFRONT_DISTRIBUTION_ID` – CloudFront distribution ID
   - `AWS_REGION` (optional) – e.g. `us-east-1` (defaults to `us-east-1`)

4. **IAM user**  
   Attach a policy that allows:
   - `s3:PutObject`, `s3:GetObject`, `s3:DeleteObject`, `s3:ListBucket` on the bucket
   - `cloudfront:CreateInvalidation` on the distribution

After this, every push to `main`/`master` will build the site and deploy to S3, then invalidate CloudFront.