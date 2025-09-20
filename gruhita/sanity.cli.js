import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'z72ywil9',
    dataset: 'production'
  },
  /**
   * Deployment configuration
   */
  deployment: {
    autoUpdates: true,
    appId: 'fstvrnfv1bybaybmg8gbb2qe'
  },
})
