// In dev mode we are working on http://localhost:3000
// In production mode we'll have an actual domain for the api which we'll call NEXT_PUBLIC_API_URL
// In dev mode we'll make request to the localhost domain then in production the environment variable will be switched to use the production api domain

// We are export the variable API_URL which will be use as the first part of our url to make api request. This variable will first check if the environment variable is present and if not it will use the localhost domain
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
