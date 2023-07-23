interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Manager', 'Staff Member', 'Delivery Personnel'],
  tenantName: 'Client',
  applicationName: 'WAAHAN',
  addOns: ['chat', 'notifications', 'file'],
};
