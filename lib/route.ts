import { PACKAGE_TYPE, PLAN } from "@prisma/client";

export const CLIENT_ROUTE = {
    publicRoute: {
        home: '/',
        about: '/about',
        packages: {
            index: '/packages',
            id: (package_type: PACKAGE_TYPE, type:PLAN, slug:string) => `/packages/${package_type}?tier=${type}&search=${slug}`
        }
    }
}