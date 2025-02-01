import { fetchPackagesByType } from "@/api/client-constructor"
import SingularPackage from "../../_components/packages-page/SingularPackage"
import { whiteSpaces } from "@/utilities/globalspace"
import { SegregatedPackages } from "@/constants/types"
import { PACKAGE_TYPE, PLAN } from "@prisma/client"
import { PackageEmptyState } from "@/components/reusables/empty-states"

export default async function PackagePage({
  params,
  searchParams,
}: {
  params: { packageId: PACKAGE_TYPE }
  searchParams: { slug: string; tier: string }
}) {
  // Validate and parse parameters
  const tier = searchParams.tier as PLAN
  const slug = searchParams.slug

  if (!tier && !slug) {
    return <PackageEmptyState message={'Missing tier or slug parameters'} />
  }

  const packages = await fetchPackagesByType(params.packageId, tier, slug)

  if (!packages) return <PackageEmptyState message="Package not found" />

  return (
    <div className={`${whiteSpaces.paddingX} mt-4`}>
      <SingularPackage pkg={packages} />
    </div>
  )
}