import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Resolver } from "dns";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const hostname = req.query.hostname;
  const rrtype = req.query.rrtype;

  return new Promise<void>((resolv, reject) => {
    const resolver = new Resolver();

    try {
      resolver.resolve(hostname, rrtype, (err, addresses) => {
        const result = err ? "NG" : "OK";

        context.res = {
          headers: { "Content-Type": "application/json" },
          body: { result, addresses },
        };

        resolv();
      });
    } catch (ex: any) {
      context.log.error(ex);
      reject();
    }
  });
};

export default httpTrigger;
