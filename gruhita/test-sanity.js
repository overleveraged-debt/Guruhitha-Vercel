// Simple test to verify Sanity connection
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'z72ywil9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

async function testConnection() {
  try {
    console.log('Testing Sanity connection...')
    const result = await client.fetch('*[_type == "heroBanner"][0]')
    console.log('Connection successful!')
    console.log('Sample data:', result)
  } catch (error) {
    console.error('Connection failed:', error.message)
  }
}

testConnection()
