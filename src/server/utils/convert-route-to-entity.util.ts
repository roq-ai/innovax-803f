const mapping: Record<string, string> = {
  'connection-requests': 'connection_request',
  organizations: 'organization',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
