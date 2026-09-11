# ProPeak Future Backend Environment & Secrets Reference

This document outlines backend environment configurations, secret keys, and credentials required for the Phase 2 backend infrastructure.

> [!CAUTION]
> **NEVER** place any private secrets, JWT secrets, database connection strings, or payment gateway API secrets in frontend `.env` or `VITE_` variables.

---

## 1. Core Server Variables

```env
# Server Runtime
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://propeak.in
CORS_ORIGINS=https://propeak.in,https://admin.propeak.in

# Database Connection (PostgreSQL)
DATABASE_URL=postgresql://user:password@hostname:5432/propeak_db?schema=public

# Redis (Caching & Socket Session Store)
REDIS_URL=redis://default:password@hostname:6379
```

---

## 2. Authentication & Cryptography Secrets

```env
# JWT Tokens
JWT_ACCESS_SECRET=your_super_secret_jwt_access_key_min_64_characters
JWT_REFRESH_SECRET=your_super_secret_jwt_refresh_key_min_64_characters
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Password Hashing Salt Rounds
BCRYPT_SALT_ROUNDS=12
```

---

## 3. Payment Gateway Credentials (Razorpay & Stripe)

```env
# Razorpay (Production)
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret

# Stripe (Optional Global Gate)
STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx
```

---

## 4. Email & Notifications

```env
# SMTP / Transactional Email (Resend / AWS SES)
RESEND_API_KEY=re_xxxxxxxxxxxx
SYSTEM_NOTIFICATION_EMAIL=notifications@propeak.in
SUPPORT_EMAIL=propeakofficial@gmail.com
```

---

## 5. Storage & CDN (AWS S3)

```env
AWS_ACCESS_KEY_ID=AKIAxxxxxxxxxxxx
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=ap-south-1
AWS_S3_BUCKET_NAME=propeak-production-assets
```
