
const useEnvVar = (varName: string, defaultValue: boolean) => 
  process.env[varName] === "true" ? true :
  process.env[varName] === "false" ? false : defaultValue

export const showRoutes = useEnvVar("REACT_APP_SHOW_ROUTES", false)

export const showQuemSomos = useEnvVar("REACT_APP_SHOW_QUEM_SOMOS", true)
export const showOQueFazemos = useEnvVar("REACT_APP_SHOW_O_QUE_FAZEMOS", true)
export const showUltimosAnos = useEnvVar("REACT_APP_SHOW_ULTIMOS_ANOS", true)
export const showPoema = useEnvVar("REACT_APP_SHOW_POEMA", true)
export const showServicos = useEnvVar("REACT_APP_SHOW_SERVICOS", true)
