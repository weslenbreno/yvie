import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'create:saga',
  alias: ['cs'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template,
      print: { info, error }
    } = toolbox

    const name = parameters.first

    if (!name) {
      error('Saga name must be specified')
      return
    }

    await template.generate({
      template: 'sagas.js.ejs',
      target: `src/store/sagas/${name}.js`,
      props: { name }
    })

    info(`Generated file at src/store/sagas/${name}.ts`)
  }
}
