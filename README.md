# Minimal DNS resolving bridge for Azure Functions

## Included functions

### dns-resolve-bridge

Just call the [dns.resolve function](https://nodejs.org/dist/latest-v16.x/docs/api/dns.html) of Node.js.

#### Usage

```console
curl https://your-azure-host/api/dns-resolve-bridge?hostname=<HOSTNAME>&rrtype=<RRTYPE>
```

#### Query Parameters

| Name     | Description           |
| :------- | :-------------------- |
| hostname | Host name to resolve. |
| rrtype   | Resource record type. |

See [List of resource record types](https://nodejs.org/dist/latest-v16.x/docs/api/dns.html#dnsresolvehostname-rrtype-callback)

#### Response

```json
{
    "result": "OK" | "NG",
    "records": null | <string[]> | <Object[]> | <Object>,
    "error": null | <Error>
}
```

## Getting Started

```console
npm run start
```
