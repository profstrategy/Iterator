import SingularPackage from "../../_components/packages-page/SingularPackage"
export default function PackagePage ({params} : {params: {packageId:string}}){
return (
    <SingularPackage id={params.packageId}  />
)
}