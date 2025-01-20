export const CLIENT_ROUTE = {
    publicRoute: {
        home: '/',
        about: '/about',
        packages: {
            index: '/packages',
            id: (packageId:string) => `/packages/${packageId}`
        }
    }
}