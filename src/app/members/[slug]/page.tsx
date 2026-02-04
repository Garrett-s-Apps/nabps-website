import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { vendors, certificationLevels } from "@/lib/data/vendors";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return vendors.map((vendor) => ({
    slug: vendor.slug,
  }));
}

export default function VendorDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const vendor = vendors.find((v) => v.slug === params.slug);

  if (!vendor) {
    notFound();
  }

  const certLevel = certificationLevels.find((l) => l.value === vendor.certificationLevel);

  return (
    <>
      {/* Back Link */}
      <section className="border-b border-key/10 bg-white py-4">
        <Container>
          <Link href="/members" className="inline-flex items-center gap-2 text-sm text-cyan hover:text-cyan-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Directory
          </Link>
        </Container>
      </section>

      {/* Vendor Header */}
      <section className="bg-gradient-to-b from-cyan/5 to-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-6">
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-4xl font-bold text-cyan">
                {vendor.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-key sm:text-4xl">{vendor.name}</h1>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan">
                  {certLevel?.emoji} {certLevel?.label} Certified
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vendor Details */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-key">About {vendor.name}</h2>
                <p className="mt-4 text-lg leading-8 text-key/80">{vendor.description}</p>

                {/* States Served */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-key">States Served</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {vendor.statesServed.map((state) => (
                      <span
                        key={state}
                        className="rounded-full bg-cyan/10 px-3 py-1 text-sm font-medium text-cyan"
                      >
                        {state}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certification Details */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-key">Certification Details</h3>
                  <dl className="mt-4 space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-key/70">Certification Level</dt>
                      <dd className="mt-1 text-base text-key">
                        {certLevel?.emoji} {certLevel?.label}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-key/70">Certified Since</dt>
                      <dd className="mt-1 text-base text-key">
                        {new Date(vendor.certificationDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-key/70">Certification Expires</dt>
                      <dd className="mt-1 text-base text-key">
                        {new Date(vendor.expirationDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-4 rounded-lg border border-key/10 bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold text-key">Contact Information</h3>

                  <dl className="mt-6 space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-key/70">Headquarters</dt>
                      <dd className="mt-1 text-base text-key">{vendor.headquarters}</dd>
                    </div>

                    {vendor.contactPhone && (
                      <div>
                        <dt className="text-sm font-medium text-key/70">Phone</dt>
                        <dd className="mt-1 text-base text-key">{vendor.contactPhone}</dd>
                      </div>
                    )}

                    {vendor.contactEmail && (
                      <div>
                        <dt className="text-sm font-medium text-key/70">Email</dt>
                        <dd className="mt-1">
                          <a
                            href={`mailto:${vendor.contactEmail}`}
                            className="text-base text-cyan hover:text-cyan-600"
                          >
                            {vendor.contactEmail}
                          </a>
                        </dd>
                      </div>
                    )}

                    {vendor.website && (
                      <div>
                        <dt className="text-sm font-medium text-key/70">Website</dt>
                        <dd className="mt-1">
                          <a
                            href={vendor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-cyan hover:text-cyan-600"
                          >
                            Visit Website →
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link href="/contact">Request Information</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
