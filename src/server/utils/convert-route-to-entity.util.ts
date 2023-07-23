const mapping: Record<string, string> = {
  clients: 'client',
  orders: 'order',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
