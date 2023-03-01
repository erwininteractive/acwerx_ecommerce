import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import StudioNavBar from './components/StudioNavBar'
import Logo from './components/Logo'

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
