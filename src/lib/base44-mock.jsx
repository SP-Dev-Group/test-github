import React from 'react';

// Fake base44 client builder engine
export const createClient = () => ({
  entities: {
    useQuery: () => ({ data: [], isLoading: false, error: null }),
    useMutation: () => [async () => {}, { isLoading: false }],
    findOne: async () => ({}),
    findMany: async () => [],
    create: async () => ({}),
    update: async () => ({}),
    delete: async () => ({}),
  },
  auth: {
    me: async () => ({ id: 'mock-user', name: 'Test User' }),
    login: async () => ({}),
    logout: async () => ({}),
  },
  // Bypasses hardcoded asset URLs by pointing them to your local public folder asset
  config: {
    logoUrl: 'public/SPFlyers-logo.png', // 👈 Change 'logo.png' to match the file name you uploaded in Step 1
    theme: 'dark'
  }
});

// Fake authentication hook layout
export const useAuth = () => ({
  user: { id: 'mock-user', name: 'Test User', email: 'test@example.com' },
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  navigateToLogin: () => console.log('Mock redirect to login'),
});

// Fake data client engine layout
export const useQuery = () => ({
  data: {},
  isLoading: false,
  error: null,
});

export const queryClientInstance = {
  getQueryData: () => null,
  setQueryData: () => null,
};

// Fake context wrappers
export const AuthProvider = ({ children }) => <>{children}</>;
export const QueryClientProvider = ({ children }) => <>{children}</>;
export const Base44Provider = ({ children }) => <>{children}</>;

export const useMutation = () => [async () => {}, { isLoading: false }];

const mockDefault = { createClient, useAuth, useQuery, AuthProvider, QueryClientProvider };
export default mockDefault;
