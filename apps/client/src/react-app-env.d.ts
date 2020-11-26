/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    // node env
    NODE_ENV: 'development' | 'production' | 'test',

    // feature flags
    REACT_APP_SHOW_ROUTES:        'true' | 'false' | '',
    REACT_APP_SHOW_QUEM_SOMOS:    'true' | 'false' | '',
    REACT_APP_SHOW_O_QUE_FAZEMOS: 'true' | 'false' | '',
    REACT_APP_SHOW_POEMA:         'true' | 'false' | '',
    REACT_APP_SHOW_SERVICOS:      'true' | 'false' | '',

    // url of APIs used
    REACT_APP_STRAPI_URL: string
  }
}