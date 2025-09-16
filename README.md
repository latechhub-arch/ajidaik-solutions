# AjiDaik Solutions - React Website (Vite + Tailwind)

## Quick start
1. Extract the folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

## EmailJS setup (Contact & Request forms)
1. Create a free account at https://www.emailjs.com/
2. Add an email service (e.g., Gmail) and create an email template.
3. Get your **Service ID**, **Template ID**, and **Public Key**.
4. Replace the placeholders in the code (`YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`) found in:
   - `src/pages/Contact.jsx`
   - `src/pages/Services.jsx`
5. Customize the templates on EmailJS to map the fields (name, email, message, etc.).

## Deploy
- **Netlify**: Build (`npm run build`) and drag `dist/` to Netlify or connect repo.
- **Vercel**: Connect repository and deploy. `vercel.json` included for rewrites.

