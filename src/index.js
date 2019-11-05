import './styles.scss';
import 'bootstrap-4-grid';
import app from './scripts/app';
import Typography from 'typography'
import grandViewTheme from 'typography-theme-grand-view'

const typography = new Typography(grandViewTheme)
grandViewTheme.baseFontSize = '22px'
// Output CSS as string.
console.log(typography.toString())
const typ = document.querySelector('.typ')
typ.innerHTML = typography.toString()
app();
