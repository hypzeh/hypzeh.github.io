# Configuration

- [HTTPS](#https)

## HTTPS

### Create Trusted Certificate

Run the following command to create a trusted certificate:

```shell
dotnet dev-certs https -ep "${USERPROFILE}\.aspnet\https\smiosoft.development.pfx" -p "!Pa55word" --trust
```

If you don't already have a certificate for `localhost` a security prompt will appear asking for confirmation to trust the certificate.

This will create a certificate named `smiosoft.development.pfx`, which can be located from your user directory. The location directory is set to match the volume mapping for our Docker Compose configuration.

The certificate password is defined following the `-p` flag, ensure to keep a consistent password across all services and clients.

### Configure Node Environment

Create a `.env` file inside the `src/Hypzeh.Web` directory, and add `PFX_CERTIFICATE_PASSWORD=!Pa55word` entry to the file.

The value must match the certificate password.

### Clean-up

Run the following command to clean-up any created certificates:

```shell
dotnet dev-certs https --clean
```
