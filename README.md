## Running Locally with HTTPS

This guide will help you set up HTTPS for your local development environment, using a custom domain and SSL certificates to simulate a secure production-like setup.

### Prerequisites

- **mkcert**: A tool for creating locally-trusted SSL certificates.
- **local-ssl-proxy**: A tool for proxying HTTPS requests to your local server.

---

### Steps

#### 1. Map Custom Domain in Hosts File

First, add your custom domain to the `/etc/hosts` file so your local machine recognizes it.

1. Open the hosts file:
   ```bash
   sudo vim /etc/hosts
   ```
2. Add the following line:

   ```plaintext
   127.0.0.1       localhost web-local.skydev.vn
   ```

   Replace `web-local.skydev.vn` with your preferred local domain if it’s different.

#### 2. Generate SSL Certificates with mkcert

Next, use `mkcert` to create an SSL certificate for the custom domain.

1. **Install mkcert** if you haven't already:

   - You can find installation instructions at [mkcert GitHub](https://github.com/FiloSottile/mkcert).

2. **Generate the SSL certificate**:

   ```bash
   mkcert web-local.skydev.vn
   ```

   This command will generate two files in the current directory:

   - `web-local.skydev.vn-key.pem` (private key)
   - `web-local.skydev.vn.pem` (certificate)

#### 3. Install local-ssl-proxy

Use `local-ssl-proxy` to route HTTPS traffic to your local development server.

```bash
yarn add -g local-ssl-proxy
```

#### 4. Start the Local Server with HTTPS

Run the development server with HTTPS support:

```bash
yarn dev-domain-https
```

Make sure `yarn dev-domain-https` is configured in your project’s scripts to start the local server with HTTPS. This should point to the generated certificate files.

---

### Notes

- **Certificate Paths**: Ensure the `web-local.skydev.vn-key.pem` and `web-local.skydev.vn.pem` files are located in the expected directory, or update your configuration to use the correct paths.
- **Trust Certificates**: Some browsers may prompt you to trust the certificate. If prompted, follow the instructions to ensure a smooth development experience.
