import { startStimulusApp } from '@symfony/stimulus-bridge'
import { registerReactControllerComponents } from '@symfony/ux-react'

// Registers Stimulus controllers from controllers.json and in the controllers/ directory
export const admin = startStimulusApp(
    require.context(
        '@symfony/stimulus-bridge/lazy-controller-loader!./controllers/admin',
        true,
        /\.[jt]sx?$/
    )
)

registerReactControllerComponents(
    require.context('./react/controllers/admin', true, /\.(j|t)sx?$/)
)
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
