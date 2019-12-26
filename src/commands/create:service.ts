import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'create:service',
  alias: ['cse'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template,
      print: { info, error }
    } = toolbox

    const name = parameters.first

    if (!name) {
      error('Service name must be specified')
      return
    }

    await template.generate({
      template: 'services.js.ejs',
      target: `src/services/${name}.js`,
      props: { name }
    })

    info(`Generated file at src/services/${name}.ts`)
  }
}
