# E-commerce-Django-NextJS

# 1. Backend ( Django Python  )
- This project build with Django framework with Django Rest Framework APIs consumed in NextJS Frontend Framework.

### Packages 
- `Django` =>  Django web framework
- `Django Allauth` => Allow us to login with multiple accounts
- `Django Cors Headers` => API Security for frontend application.
- `Django Rest Framework` => Providing Rest APIs.

## Getting Started

### First, create your virtual-environment for your local development server:

```bash
python -m venv venv

```
### Move to your virtual environment
```
source venv/Script/activate
```

### Install python packages
```
pip install -r requirements.txt
```

### Run Migrations
```
python manage.py migrate
```

### Run Application server
```
python manage.py runserver
```

Open [http://localhost:8000](http://localhost:8000) with your browser to run django app.

---

# 2. Frontend ( NextJS | ReactJS  )
### Packages 
- `Axiox` => Calling an Django RestAPIs.
- `TailwindCSS` => Tailwind Design framework to design an frontend application.

#### This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
