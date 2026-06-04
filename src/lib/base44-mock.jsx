import React from 'react';

// Updated client builder engine fetching external JSON files from the public folder
export const createClient = () => {
  const fetchMockData = async () => {
    try {
      // Points exactly to your compiled public asset repository location
      const response = await fetch('/test-github/records.json');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Failed to load records.json static file, using hardcoded fallback:", error);
      return [
        { id: "err", unique_id: "ERR-001", name: "Offline Asset Data Fallback" }
      ];
    }
  };

  const genericEntityHandler = {
    // Both list and findMany will execute the fetch pipeline
    list: () => fetchMockData(),
    findMany: () => fetchMockData(),
    findOne: async () => ({ id: "1", name: "Single Mock Record" }),
    create: async () => ({}),
    update: async () => ({}),
    delete: async () => ({}),
    useQuery: () => ({ data: [], isLoading: false, error: null }),
    useMutation: () => [async () => {}, { isLoading: false }],
  };

  return {
    entities: new Proxy({}, {
      get: () => genericEntityHandler
    }),
    auth: {
      me: async () => ({ id: 'mock-user', name: 'Test User' }),
      login: async () => ({}),
      logout: async () => ({}),
    },
    config: {
      logoUrl: '/test-github/SPFlyers-logo.png',
      theme: 'dark'
    }
  };
};

// Keep the rest of your file (useAuth, useQuery, Providers, etc.) exactly the same below...
export const useAuth = () => ({
  user: { id: 'mock-user', name: 'Test User', email: 'test@example.com' },
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  navigateToLogin: () => console.log('Mock redirect to login'),
});
export const useQuery = () => ({ data: {}, isLoading: false, error: null });
export const queryClientInstance = { getQueryData: () => null, setQueryData: () => null };
export const AuthProvider = ({ children }) => <>{children}</>;
export const QueryClientProvider = ({ children }) => <>{children}</>;
export const Base44Provider = ({ children }) => <>{children}</>;
export const useMutation = () => [async () => {}, { isLoading: false }];
const mockDefault = { createClient, useAuth, useQuery, AuthProvider, QueryClientProvider };
export default mockDefault;
