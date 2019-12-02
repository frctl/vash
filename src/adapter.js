const Vash = require('vash');
const { Adapter } = require('@frctl/fractal');

function setEnv(key, value, context) {
  if (value !== undefined && context[key] !== 'undefined') {
    context[key] = value;
  }
}

class VashAdapter extends Adapter {
  constructor(vash, source, app) {
    super(vash, source);
    this.app = app;
  }

  get vash() {
    return this._engine;
  }

  render(componentPath, componentString, context = {}, meta = {}) {
    setEnv('_self', meta.self, context);
    setEnv('_target', meta.target, context);
    setEnv('_env', meta.env, context);
    setEnv('_config', this.app.config(), context);

    return new Promise((resolve, reject) => {
      try {
        // Compile the template with Vash and pass it the component context.
        const template = this.vash.compile(componentString);
        resolve(template(context));
      } catch (e) {
        reject(e);
      }
    });
  }
}

module.exports = (config = {}) => {
  return {
    register(source, app) {
      return new VashAdapter(config.vash || Vash, source, app, config);
    }
  };
};
