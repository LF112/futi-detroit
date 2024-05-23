// @ts-check
import hyoban from 'eslint-config-hyoban'

const isInEditor = !!(
  (process.env.VSCODE_PID
  || process.env.VSCODE_CWD
  || process.env.JETBRAINS_IDE
  || process.env.VIM)
  && !process.env.CI
)

export default hyoban({
  typeChecked: isInEditor ? false : 'essential',
  ignores: ['package.json'],
})
