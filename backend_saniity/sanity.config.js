import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes' // will auto-resolve index.js inside the folder

export default defineConfig({
  name: 'default',
  title: 'My_Portfolio',

  projectId: 'tzs5p7j1',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
