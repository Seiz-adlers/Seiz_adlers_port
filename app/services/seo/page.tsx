import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata, serviceSchema } from "@/lib/seo/metadata";

const service = getServiceBySlug("seo");

export const metadata = service
  ? buildMetadata({ title: service.title, description: service.description, path: `/services/${service.slug}` })
  : buildMetadata({ title: "Service", description: "", path: "/services" });

export default function SeoPage() {
  if (!service) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }} />
      <ServicePageTemplate service={service} reversed={false} />
    </>
  );
}
