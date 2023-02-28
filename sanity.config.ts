import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import StudioNavBar from './components/StudioNavBar'
import Logo from './components/Logo'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
    basePath: '/studio',
    name: 'ACWERX_STUDIO',
    title: 'ACWerx Studio',
    projectId: 'zx1zb80n',
    dataset: 'production',
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes
    },
    studio: {
        components: {
            navbar: StudioNavBar,
            logo: Logo
        }
    }
})