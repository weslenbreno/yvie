import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'create:duck',
  alias: ['cd'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template,
      print: { info, error }
    } = toolbox

    const name = parameters.first

    if (!name) {
      error('Duck name must be specified')
      return
    }

    await template.generate({
      template: 'ducks.js.ejs',
      target: `src/store/ducks/${name}.js`,
      props: { name }
    })

    info(`Generated file at src/store/ducks/${name}-model.ts`)
  }
}
