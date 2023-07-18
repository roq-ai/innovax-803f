interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Innovation Manager'],
  customerRoles: ['Startups'],
  tenantRoles: ['CEO', 'Business Owner', 'Chief Of Innovation Office', 'Innovation Manager'],
  tenantName: 'Organization',
  applicationName: 'InnovaX',
  addOns: ['notifications', 'chat', 'file'],
};
